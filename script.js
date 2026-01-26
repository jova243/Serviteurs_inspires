document.addEventListener("DOMContentLoaded", () => {

    /*SÉLECTION DES ÉLÉMENTS*/
    const searchInput = document.getElementById("search-input");
    const cards = document.querySelectorAll(".gallery .card");

    const lightbox = document.querySelector(".lightbox");
    const previewImg = document.querySelector(".preview-img img");
    const closeBtn = document.querySelector(".close-btn");
    const downloadBtn = document.querySelector(".download-btn");

    /* LIGHTBOX : OUVERTURE*/
    cards.forEach(card => {
        const img = card.querySelector("img");

        img.addEventListener("click", () => {
            previewImg.src = img.src;
            lightbox.style.display = "block";
            document.body.style.overflow = "hidden";
        });
    });

    /* LIGHTBOX : FERMETURE*/
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
    });

    // fermer en cliquant sur le fond
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    /* TÉLÉCHARGEMENT IMAGE */
    downloadBtn.addEventListener("click", () => {
        const link = document.createElement("a");
        link.href = previewImg.src;
        link.download = "image.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    /* RECHERCHE DANS LA GALERIE */
    searchInput.addEventListener("input", () => {
        const value = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const img = card.querySelector("img");
            const keywords = img.dataset.name;

            // si pas de data-name → on cache
            if (!keywords) {
                card.style.display = "none";
                return;
            }

            // afficher / cacher selon la recherche
            if (keywords.toLowerCase().includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });

});
