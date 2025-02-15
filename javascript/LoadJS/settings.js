// javascript/LoadJS/settings.js

document.addEventListener('DOMContentLoaded', () => {
    // Create gear icon button
    const settingsButton = document.createElement('button');
    settingsButton.innerHTML = '⚙️';
    settingsButton.style.position = 'fixed';
    settingsButton.style.bottom = '10px';
    settingsButton.style.left = '10px';
    settingsButton.style.padding = '10px';
    settingsButton.style.fontSize = '16px';
    settingsButton.style.zIndex = '1000';
    document.body.appendChild(settingsButton);

    // Create settings overlay
    const settingsOverlay = document.createElement('div');
    settingsOverlay.style.position = 'fixed';
    settingsOverlay.style.top = '0';
    settingsOverlay.style.left = '0';
    settingsOverlay.style.width = '100%';
    settingsOverlay.style.height = '100%';
    settingsOverlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
    settingsOverlay.style.zIndex = '1001';
    settingsOverlay.style.display = 'none';
    settingsOverlay.style.color = 'white';
    settingsOverlay.style.textAlign = 'center';
    settingsOverlay.style.paddingTop = '50px';
    document.body.appendChild(settingsOverlay);

    // Create settings options
    const settingsContent = document.createElement('div');
    settingsContent.innerHTML = `
        <h2>Settings</h2>
        <button id="closeSettings">Close</button>
        <div>
            <label for="inputType">Choose Input Type:</label>
            <select id="inputType">
                <option value="text">Text Input</option>
                <option value="buttons">Button Input</option>
            </select>
        </div>
    `;
    settingsOverlay.appendChild(settingsContent);

    // Open settings overlay
    settingsButton.addEventListener('click', () => {
        settingsOverlay.style.display = 'block';
    });

    // Close settings overlay
    document.getElementById('closeSettings').addEventListener('click', () => {
        settingsOverlay.style.display = 'none';
    });

    // Listen to input type change
    document.getElementById('inputType').addEventListener('change', (e) => {
        const inputType = e.target.value;
        const event = new CustomEvent('inputTypeChange', { detail: { inputType } });
        document.dispatchEvent(event);
    });
});
