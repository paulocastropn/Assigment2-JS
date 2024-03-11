document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll("#thumbnail-list img");
    const featuredImage = document.querySelector("figure img");
    const caption = document.querySelector("figcaption");

    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function() {
            const largeImagePath = thumbnail.src.replace("-small", "-large");
            const altText = thumbnail.alt;
            const imageCaption = thumbnail.getAttribute("data-caption");

            featuredImage.src = largeImagePath;
            featuredImage.alt = altText;
            caption.textContent = imageCaption || altText;
        });
    });
});
