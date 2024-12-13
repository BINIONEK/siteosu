document.addEventListener('DOMContentLoaded', async () => {
    const aboutSection = document.getElementById('about-section');
    try {
        const response = await fetch('http://localhost:3001/api/osu');
        const data = await response.json();
        aboutSection.innerHTML = `<p>${data.about}</p>`;
    } catch (error) {
        aboutSection.innerHTML = `<p>Error fetching osu! info.</p>`;
    }
});
