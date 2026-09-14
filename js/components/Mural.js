// Colocar o html entre as aspas após o return
export function renderMural() {
  return `
    <section id="mural">
      Membros

      <article class="card">
        <div class="card__foto" data-iniciais="CS">
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 380'%3E%3Crect width='300' height='380' fill='%232a2130'/%3E%3Ccircle cx='150' cy='148' r='62' fill='%23e2b79a'/%3E%3Cpath d='M40 380c0-62 49-112 110-112s110 50 110 112z' fill='%234a3a58'/%3E%3C/svg%3E" alt="Foto de Carla Souza" onerror="this.remove()">
        </div>
        <div class="card__corpo">
          <h3 class="card__nome">Carla Souza</h3>
          <p class="card__descricao">Montou o guia de estilo da equipe e revisa os protótipos antes de cada entrega.</p>
        </div>
      </article>
      
    </section>
  `;
}