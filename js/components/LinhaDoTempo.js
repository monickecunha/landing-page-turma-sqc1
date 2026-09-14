// Colocar o html entre as aspas após o return
const marcos = [
    {
        numero: '01',
        categoria: 'Banco de Dados',
        titulo: 'Banco de Dados e Insights',
        descricao: 'Desenvolvimento de um projeto de análise de dados utilizando banco de dados para levantar e interpretar ' +
                    'informações sobre os gastos médios de uma pessoa ao longo do tempo. O objetivo é transformar dados brutos ' +
                    'em insights visuais, identificando padrões de consumo, principais categorias de despesas e oportunidades de economia.'
    },
    {
        numero: '02',
        categoria: 'Back-end',
        titulo: 'Sistema de Detecção/Prevenção de Golpes',
        descricao: 'Desenvolvimento e conclusão de um sistema voltado à identificação e prevenção de possíveis golpes e ' +
                    'comportamentos suspeitos. O projeto busca aplicar conceitos de programação, banco de dados e análise ' +
                    'de informações para reconhecer situações potencialmente fraudulentas e apresentar alertas ou classificações de risco.'
    },
    {
        numero: '03',
        categoria: 'Front-end',
        titulo: 'Portfólio Pessoal',
        descricao: 'Criação de um portfólio pessoal online para apresentar projetos, habilidades, experiências e conhecimentos ' +
                    'adquiridos ao longo da formação. O objetivo é desenvolver uma interface moderna, responsiva e visualmente ' +
                    'consistente, permitindo apresentar os trabalhos de forma profissional.'
    }
];

function renderItem(marco) {
    return `
        <div class="linha-tempo__item">
            <div class="linha-tempo__marcador">
                <span class="linha-tempo__bolinha"></span>
                <span class="linha-tempo__label">CHALLENGE ${marco.numero}</span>
            </div>
            <article class="linha-tempo__card">
                <span class="badge">${marco.categoria.toUpperCase()}</span>
                <h3>${marco.titulo}</h3>
                <p>${marco.descricao}</p>
            </article>
        </div>
    `;
}

export function renderLinhaDoTempo() {
    const itens = marcos.map(renderItem).join('');

    return `
        <section id="linha_tempo" class="section">
            <div class="container">
                <div class="section__header">
                    <span class="section__eyebrow">01 / PERCURSO</span>
                    <h2>Nossa jornada</h2>
                    <p class="section__description">Conteúdos, desafios e experiências que marcaram a evolução da turma.</p>
                </div>

                <div class="linha-tempo__trilha">
                    ${itens}
                </div>
            </div>
        </section>
    `;
}