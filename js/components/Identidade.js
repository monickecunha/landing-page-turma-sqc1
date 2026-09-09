/* =========================================================
   IDENTITY.JS — Turma FullStack 5.0 (SQC1)
   Menu de identidade / Header
   Injeta o header (logo + navegação + slogan) via JavaScript,
   seguindo o Brand Book oficial e o protótipo de referência:
   https://nicolas-add.github.io/FS_5.0--landing-page/
   ========================================================= */

(function () {
  "use strict";

  var CSS_HREF = "Identity.css";

  // Logo oficial da turma (embutida em base64 para o componente
  // funcionar de forma independente, sem depender de outra pasta de assets)
  var LOGO_SRC = "data:image/webp;base64,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";

  var SLOGAN = "Conectando ideias, construindo o futuro";

  var NAV_LINKS = [
    { href: "#inicio", label: "In\u00edcio", section: "inicio" },
    { href: "#percurso", label: "Percurso", section: "percurso" },
    { href: "#mural", label: "Mural", section: "mural" },
    { href: "#equipe", label: "Equipe", section: "equipe" }
  ];

  /* ---------- 1. Garante que o CSS do componente esteja carregado ---------- */

  function injectStylesheet() {
    var already = document.querySelector('link[data-identity-style]');
    if (already) return;

    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = CSS_HREF;
    link.setAttribute("data-identity-style", "true");
    document.head.appendChild(link);
  }

  /* ---------- 2. Monta o markup do header ---------- */

  function buildNavList() {
    var ul = document.createElement("ul");
    ul.className = "identity-nav-list";

    NAV_LINKS.forEach(function (item, index) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = item.href;
      a.textContent = item.label;
      a.className = "identity-nav-link" + (index === 0 ? " is-active" : "");
      a.setAttribute("data-section", item.section);
      li.appendChild(a);
      ul.appendChild(li);
    });

    return ul;
  }

  function buildHeader() {
    var header = document.createElement("header");
    header.className = "identity-header";
    header.id = "identity-header";

    // --- Container principal (logo + nav + CTA + toggle) ---
    var container = document.createElement("div");
    container.className = "identity-container";

    // Logo
    var logo = document.createElement("a");
    logo.href = "#inicio";
    logo.className = "identity-logo";
    logo.setAttribute("aria-label", "FullStack 5.0 \u2014 voltar ao in\u00edcio");

    var logoImg = document.createElement("img");
    logoImg.src = LOGO_SRC;
    logoImg.alt = "Logo da Turma FullStack 5.0";
    logoImg.className = "identity-logo-img";
    logoImg.width = 40;
    logoImg.height = 40;

    var logoTextWrap = document.createElement("div");
    logoTextWrap.className = "identity-logo-text";

    var brand = document.createElement("span");
    brand.className = "identity-brand";
    brand.textContent = "FULLSTACK";

    var tagline = document.createElement("span");
    tagline.className = "identity-tagline";
    tagline.textContent = "CODE \u2022 CREATE \u2022 CONNECT";

    logoTextWrap.appendChild(brand);
    logoTextWrap.appendChild(tagline);
    logo.appendChild(logoImg);
    logo.appendChild(logoTextWrap);

    // Navegação (desktop + mobile)
    var nav = document.createElement("nav");
    nav.className = "identity-nav";
    nav.id = "identity-nav";
    nav.setAttribute("aria-label", "Navega\u00e7\u00e3o principal");
    nav.appendChild(buildNavList());

    // CTA
    var cta = document.createElement("a");
    cta.href = "#equipe";
    cta.className = "identity-cta";
    cta.textContent = "Conhe\u00e7a a turma \u2192";

    // Bot\u00e3o hamburguer (mobile)
    var toggle = document.createElement("button");
    toggle.className = "identity-toggle";
    toggle.id = "identity-toggle";
    toggle.setAttribute("aria-label", "Abrir menu");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", "identity-nav");
    toggle.innerHTML = "<span></span><span></span><span></span>";

    container.appendChild(logo);
    container.appendChild(nav);
    container.appendChild(cta);
    container.appendChild(toggle);

    // --- Faixa do slogan da turma ---
    var sloganBar = document.createElement("div");
    sloganBar.className = "identity-slogan";

    var bracket = document.createElement("span");
    bracket.className = "identity-slogan-bracket";
    bracket.textContent = "{ }";

    var sloganText = document.createElement("span");
    sloganText.className = "identity-slogan-text";
    sloganText.textContent = "// " + SLOGAN;

    sloganBar.appendChild(bracket);
    sloganBar.appendChild(sloganText);

    header.appendChild(container);
    header.appendChild(sloganBar);

    return header;
  }

  /* ---------- 3. Comportamentos: toggle mobile, scroll e link ativo ---------- */

  function bindToggle(header) {
    var toggle = header.querySelector("#identity-toggle");
    var nav = header.querySelector("#identity-nav");

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    });

    // Fecha o menu mobile ao clicar em um link
    nav.querySelectorAll(".identity-nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menu");
      });
    });
  }

  function bindScrollEffect(header) {
    function onScroll() {
      if (window.scrollY > 12) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function bindActiveSection(header) {
    var links = header.querySelectorAll(".identity-nav-link");
    var sections = NAV_LINKS
      .map(function (item) {
        return document.getElementById(item.section);
      })
      .filter(Boolean);

    if (!sections.length || !("IntersectionObserver" in window)) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (link) {
            link.classList.toggle(
              "is-active",
              link.getAttribute("data-section") === entry.target.id
            );
          });
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* ---------- 4. Inicializa\u00e7\u00e3o ---------- */

  function mount() {
    injectStylesheet();

    var target = document.getElementById("identity-root");
    var header = buildHeader();

    if (target) {
      target.appendChild(header);
    } else {
      document.body.insertBefore(header, document.body.firstChild);
    }

    bindToggle(header);
    bindScrollEffect(header);
    bindActiveSection(header);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
