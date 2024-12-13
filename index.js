document.addEventListener('DOMContentLoaded', async () => {
    const carouselContainer = document.getElementById('carousel-container');
    try {
        const response = await fetch('http://localhost:3001/api/highlights'); // Replace with actual API endpoint
        const highlights = await response.json();

        const carouselInner = document.querySelector('.carousel-inner');
        highlights.forEach((highlight, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');
            if (index === 0) carouselItem.classList.add('active');

            carouselItem.innerHTML = `
                <img src="${highlight.image}" class="d-block w-100" alt="${highlight.title}">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${highlight.title}</h5>
                    <p>${highlight.description}</p>
                </div>
            `;
            carouselInner.appendChild(carouselItem);
        });
    } catch (error) {
        console.error('Error loading carousel content:', error);
        carouselContainer.innerHTML = `<p>Error loading highlights.</p>`;
    }
});
