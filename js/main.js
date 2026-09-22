const CHECKOUT_URL = "https://pay.kiwify.com.br/0c72X1o";

const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
const toggleLabel = toggle.querySelector(".sr-only");

document.querySelectorAll("[data-checkout]").forEach((link) => {
  link.setAttribute("href", CHECKOUT_URL);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});

function onScroll() {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

function setMenu(open) {
  nav.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggleLabel.textContent = open ? "Fechar menu" : "Abrir menu";
  document.body.classList.toggle("nav-open", open);
}

toggle.addEventListener("click", () => {
  setMenu(!nav.classList.contains("is-open"));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 860) setMenu(false);
});

document.querySelectorAll(".faq-q").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const willOpen = !item.classList.contains("is-open");

    document.querySelectorAll(".faq-item.is-open").forEach((openItem) => {
      openItem.classList.remove("is-open");
      openItem.querySelector(".faq-q").setAttribute("aria-expanded", "false");
    });

    if (willOpen) {
      item.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
    }
  });
});
