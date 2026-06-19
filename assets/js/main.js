/* PEP Club Educational — interacțiuni site */
(function () {
  "use strict";

  // Anul curent în footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Meniu mobil
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Închide meniul după click pe un link (mobil)
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Reveal on scroll
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // Formular de contact (demo — fără backend)
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nume = form.querySelector("#nume");
      var tel = form.querySelector("#telefon");
      var ok = true;
      [nume, tel].forEach(function (f) {
        if (!f.value.trim()) {
          f.style.borderColor = "#ef7268";
          ok = false;
        } else {
          f.style.borderColor = "";
        }
      });
      if (!ok) return;
      var success = document.getElementById("formSuccess");
      if (success) success.style.display = "block";
      form.reset();
      // NOTĂ pentru dezvoltator: conectează aici trimiterea reală
      // (ex: Formspree, EmailJS, Netlify Forms sau un endpoint propriu).
    });
  }
})();
