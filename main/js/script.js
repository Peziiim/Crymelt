
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });


        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }


    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.modal-prev');
    const nextBtn = document.querySelector('.modal-next');
    let currentImageIndex = 0;
    let galleryImages = [];

    if (galleryItems.length > 0) {
        galleryItems.forEach((item, index) => {
            galleryImages.push(item.getAttribute('data-image'));
            item.addEventListener('click', function() {
                currentImageIndex = index;
                openModal();
            });
        });
    }

    function openModal() {
        modal.classList.add('active');
        modalImage.src = galleryImages[currentImageIndex];
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        modalImage.src = galleryImages[currentImageIndex];
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        modalImage.src = galleryImages[currentImageIndex];
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', prevImage);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', nextImage);
    }

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }


    document.addEventListener('keydown', function(e) {
        if (modal.classList.contains('active')) {
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'Escape') closeModal();
        }
    });

 init
    const commissionForm = document.getElementById('commissionForm');
    if (commissionForm) {
        commissionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Comissão enviada com sucesso! Em breve você receberá uma resposta.');
            commissionForm.reset();
        });
    }
});