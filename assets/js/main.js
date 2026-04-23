document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  const navLinks = document.querySelectorAll("[data-page-link]");
  const currentPage = document.body.dataset.page;

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  navLinks.forEach((link) => {
    if (link.dataset.pageLink === currentPage) {
      link.classList.add("is-active");
    }
  });

  const yearNode = document.querySelector("[data-current-year]");
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  const contactForm = document.querySelector("[data-contact-form]");
  const formStatus = document.querySelector("[data-form-status]");
  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const name = String(formData.get("name") || "مشتری گرامی").trim();
      formStatus.textContent = `سپاس ${name}. پیام شما ثبت شد و تیم ما خیلی زود با شما تماس می‌گیرد.`;
      contactForm.reset();
    });
  }

  const galleryButtons = document.querySelectorAll("[data-lightbox-trigger]");
  if (galleryButtons.length > 0) {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `
      <div class="lightbox__panel" role="dialog" aria-modal="true" aria-label="نمایش تصویر گالری">
        <div class="lightbox__top">
          <div class="lightbox__title"></div>
          <button class="lightbox__close" type="button" aria-label="بستن پنجره">&times;</button>
        </div>
        <div class="lightbox__body"></div>
      </div>
    `;
    document.body.appendChild(lightbox);

    const titleNode = lightbox.querySelector(".lightbox__title");
    const bodyNode = lightbox.querySelector(".lightbox__body");
    const closeButton = lightbox.querySelector(".lightbox__close");

    const closeLightbox = () => {
      lightbox.classList.remove("is-open");
      document.body.style.overflow = "";
      bodyNode.innerHTML = "";
      titleNode.textContent = "";
    };

    galleryButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const title = button.dataset.lightboxTitle || "تصویر گالری";
        const visual = button.querySelector(".gallery-art");
        if (!visual) {
          return;
        }

        titleNode.textContent = title;
        bodyNode.innerHTML = "";
        bodyNode.appendChild(visual.cloneNode(true));
        lightbox.classList.add("is-open");
        document.body.style.overflow = "hidden";
      });
    });

    closeButton.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
        closeLightbox();
      }
    });
  }
});
