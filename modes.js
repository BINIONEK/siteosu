document.addEventListener('DOMContentLoaded', async () => {
    const modesContainer = document.getElementById('modes-container');
    try {
        const response = await fetch('http://localhost:3001/api/osu');
        const data = await response.json();
        data.gameModes.forEach(mode => {
            const modeElement = document.createElement('div');
            modeElement.classList.add('mode-card');
            modeElement.innerHTML = `
                <h3>${mode.mode}</h3>
                <p>${mode.description}</p>
            `;
            modesContainer.appendChild(modeElement);
        });
    } catch (error) {
        modesContainer.innerHTML = `<p>Error loading game modes.</p>`;
    }
});
