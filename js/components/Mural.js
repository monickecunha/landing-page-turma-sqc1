import { muralData } from '../data/muralData.js';

const renderCard = ({ nome, frase }) => `
    <article class="mural-card">
        <blockquote class="mural-card__quote">
            "${frase}"
        </blockquote>

        <footer class="mural-card__footer">
            <span class="mural-card__author">
                — ${nome}
            </span>
        </footer>
    </article>
`;

const renderCards = (cards) => {
    return cards
        .map(renderCard)
        .join('');
};

export const renderMural = () => {
    return `
        <section class="mural" id="mural">
            <header class="mural__header">
                <div class="mural__intro">
                    <span class="mural__eyebrow">
                        02 / MURAL
                    </span>

                    <h2 class="mural__title">
                        Vozes da turma
                    </h2>

                    <p class="mural__description">
                        Pequenos pensamentos, grandes aprendizados.
                    </p>
                </div>

                <span class="mural__label">
                    MURAL DA TURMA
                </span>
            </header>

            <div class="mural__cards">
                ${renderCards(muralData)}
            </div>
        </section>
    `;
};