document.addEventListener('DOMContentLoaded', () => {
    const faqs = document.querySelectorAll('.faq-question');
    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.nextElementSibling.classList.toggle('hidden');
        });
    });
});
