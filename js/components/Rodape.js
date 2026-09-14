// Colocar o html entre as aspas após o return

export function renderRodape() {
  setTimeout(initRodape, 0);

  return `

    <footer class="rodape">
      <nav class="rodape__nav" aria-label="Navegação do rodapé">
        <ul class="rodape__list">
          <li><a href="#" class="rodape__link" data-scroll-target=".identidade">Início</a></li>
          <li><a href="#quem_somos" class="rodape__link">Quem Somos</a></li>
          <li><a href="#membros" class="rodape__link">Integrantes</a></li>
          <li><a href="#mural" class="rodape__link">Mural</a></li>
          <li><a href="#linha_tempo" class="rodape__link">Percurso</a></li>
        </ul>
      </nav>

      <p class="rodape__copy"> © 2026 <strong>FULLSTACK</strong> — Todos os direitos reservados.</p>
    </footer>
  `;
}

export function initRodape() {
  const links = document.querySelectorAll('.rodape__link[data-scroll-target]');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const target = document.querySelector(link.dataset.scrollTarget);

      target?.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}