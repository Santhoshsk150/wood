document.addEventListener('DOMContentLoaded', () => {
    // Filter Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active', 'bg-accent', 'text-white'));
            filterBtns.forEach(b => b.classList.add('bg-white', 'text-primary')); // Reset styles
            
            // Add active class to clicked
            btn.classList.add('active', 'bg-accent', 'text-white');
            btn.classList.remove('bg-white', 'text-primary');

            const filterValue = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hidden');
                    item.classList.add('block');
                } else {
                    item.classList.add('hidden');
                    item.classList.remove('block');
                }
            });
        });
    });

    // Lightbox Logic
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');

    if (lightbox) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                const src = img.getAttribute('src');
                lightboxImg.setAttribute('src', src);
                lightbox.classList.remove('hidden');
                lightbox.classList.add('flex');
            });
        });

        closeBtn.addEventListener('click', () => {
            lightbox.classList.add('hidden');
            lightbox.classList.remove('flex');
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.add('hidden');
                lightbox.classList.remove('flex');
            }
        });
    }
});
