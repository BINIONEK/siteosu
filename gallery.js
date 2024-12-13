document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const images = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg"
    ];

    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = "osu! screenshot";
        gallery.appendChild(img);
    });
});
