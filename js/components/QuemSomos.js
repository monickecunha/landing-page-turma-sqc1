// Colocar o html entre as aspas após o return
export function renderQuemSomos() {
  return `
    <section id="quem-somos" class="about-section">

    <!-- Elementos decorativos -->
    <span class="about-grid-decoration"></span>
    <span class="about-bracket about-bracket--left">{</span>
    <span class="about-bracket about-bracket--right">}</span>

    <div class="about-container">

        <!-- Cabeçalho da seção -->
        <header class="about-header">
            <span class="section-tag">// QUEM SOMOS</span>

            <h2>
                Diferentes histórias.<br>
                <span>Um mesmo objetivo.</span>
            </h2>

            <p class="about-intro">
                Uma turma, diferentes histórias e um mesmo objetivo:
                transformar aprendizado em soluções através da tecnologia.
            </p>
        </header>

        <!-- Conteúdo -->
        <div class="about-content">

            <article class="about-text">
                <p>
                    Nossa turma possui características únicas de formação
                    sociocultural, abrangendo uma grande diversidade étnica,
                    cultural e etária.
                </p>

                <p>
                    Esses pontos proporcionam uma dinâmica ímpar, já que cada
                    integrante traz a sua história para a sala de aula.
                    Enquanto alguns colegas já dominam ou margeiam habilidades
                    técnicas, outros estão dando os primeiros passos na área
                    de programação.
                </p>

                <p>
                    Essa mistura de vivências enriquece o cotidiano e cria um
                    ambiente onde diferentes conhecimentos e perspectivas se
                    encontram.
                </p>
            </article>

            <!-- Card visual -->
            <aside class="about-code-card">

                <div class="code-card-header">
                    <div class="window-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <span>turma.js</span>
                </div>

                <div class="code-content">
                    <span class="code-line">
                        <span class="code-number">01</span>
                        <span class="code-keyword">const</span>
                        <span class="code-variable">turma</span>
                        <span>=</span>
                        <span>{</span>
                    </span>

                    <span class="code-line code-indent">
                        <span class="code-number">02</span>
                        <span class="code-property">diversidade</span>:
                        <span class="code-string">true</span>,
                    </span>

                    <span class="code-line code-indent">
                        <span class="code-number">03</span>
                        <span class="code-property">aprendizado</span>:
                        <span class="code-string">"constante"</span>,
                    </span>

                    <span class="code-line code-indent">
                        <span class="code-number">04</span>
                        <span class="code-property">experiencias</span>:
                        <span class="code-string">"únicas"</span>,
                    </span>

                    <span class="code-line code-indent">
                        <span class="code-number">05</span>
                        <span class="code-property">objetivo</span>:
                        <span class="code-string">"evoluir"</span>
                    </span>

                    <span class="code-line">
                        <span class="code-number">06</span>
                        <span>}</span>
                    </span>
                </div>

            </aside>

        </div>

        <!-- Formação -->
        <div class="about-highlight">

            <div class="highlight-icon">&lt;/&gt;</div>

            <div>
                <span class="highlight-tag">
                    FULLSTACK 5.0
                </span>

                <h3>
                    Da nossa bagagem para o mercado de tecnologia.
                </h3>

                <p>
                    A formação da Residência Fullstack 5.0 conecta toda essa
                    bagagem à realidade do mercado de trabalho de tecnologia,
                    formando profissionais capacitados para um cenário presente
                    e futuro totalmente voltado à TI.
                </p>
            </div>

        </div>

        <!-- Pilares -->
        <div class="about-pillars">

            <div class="pillar">
                <span class="pillar-number">01</span>
                <strong>BACK-END</strong>
                <small>Arquitetura & lógica</small>
            </div>

            <div class="pillar">
                <span class="pillar-number">02</span>
                <strong>DATABASE</strong>
                <small>Dados & estrutura</small>
            </div>

            <div class="pillar">
                <span class="pillar-number">03</span>
                <strong>FRONT-END</strong>
                <small>Interface & experiência</small>
            </div>

        </div>

        <!-- Encerramento -->
        <p class="about-footer">
            Entre códigos, dúvidas, descobertas e constantes aprendizados,
            <strong>cada participante contribui de maneira singular.</strong>
            É justamente essa pluralidade de experiências e perspectivas que
            torna a nossa turma única.
        </p>

    </div>

    </section>
    `
}