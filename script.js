document.getElementById("year").textContent = String(new Date().getFullYear());

const cards = Array.from(document.querySelectorAll(".card[data-image]"));
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxClose = document.getElementById("lightboxClose");

function checkImageExists(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

function openLightbox(src, title) {
  lightboxImage.src = src;
  lightboxImage.alt = title;
  lightboxTitle.textContent = title;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
}

cards.forEach(async (card) => {
  const src = card.dataset.image;
  const title = card.dataset.title || "作品预览";
  const ok = await checkImageExists(src);
  if (!ok) {
    card.classList.add("missing");
    return;
  }
  card.addEventListener("click", () => openLightbox(src, title));
});

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
