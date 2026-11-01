
function openLightbox(image) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

    lightbox.style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Close when clicking outside the image
document.getElementById("lightbox").addEventListener("click", function(event) {
    if (event.target === this) {
        closeLightbox();
    }
});

// Close using Escape key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});
