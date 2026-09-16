// Colocar o html entre as aspas após o return
export function renderMembros() {
    return `
      <section class="section membros_turma" id="membros_turma">
        <div class="container">
 
            <!-- Cabeçalho da seção -->
            <header class="section__header membros__header">
                <div>
                    <span class="section__eyebrow">03 / Equipe</span>
                    <h2>Quem faz acontecer</h2>
                    <p class="section__description">Cada integrante possui uma história, uma habilidade e uma contribuição.</p>
                </div>
                <span class="membros__label">Team board</span>
            </header>
 
            <!-- Grade de cards -->
            <ul class="membros__grid">
 
                <li class="membro-card">
                    <span class="membro-card__id">#01</span>
 
                    <div class="membro-card__avatar">
                        <span>01</span>
                        <img src="assets/img/Adriano.png" alt="Foto do integrante 01" onerror="this.remove()">
                    </div>
 
                    <h3 class="membro-card__nome">Adriano Piva</h3>
                    <span class="tag membro-card__tag">Desenvolvimento</span>
                </li>
 
                <li class="membro-card">
                    <span class="membro-card__id">#02</span>
 
                    <div class="membro-card__avatar">
                        <span>02</span>
                        <img src="assets/img/Antonio.png" alt="Foto do integrante 02" onerror="this.remove()">
                    </div>
 
                    <h3 class="membro-card__nome">Antônio Alexandre Oliveira Reis</h3>
                    <span class="tag membro-card__tag">Front-end</span>
                </li>
 
                <li class="membro-card">
                    <span class="membro-card__id">#03</span>
 
                    <div class="membro-card__avatar">
                        <span>03</span>
                         <img src="assets/img/Bernardo.png" alt="Foto do integrante 03" onerror="this.remove()">
                    </div>
 
                    <h3 class="membro-card__nome">Bernardo Martins</h3>
                    <span class="tag membro-card__tag">Back-end</span>
                </li>
 
                <li class="membro-card">
                    <span class="membro-card__id">#04</span>
 
                    <div class="membro-card__avatar">
                        <span>04</span>
                         <img src="assets/img/Bruna.png" alt="Foto do integrante 04" onerror="this.remove()">
                    </div>
 
                    <h3 class="membro-card__nome">Bruna Liares</h3>
                    <span class="tag membro-card__tag">UX / UI</span>
                </li>
 
                <li class="membro-card">
                    <span class="membro-card__id">#05</span>
 
                    <div class="membro-card__avatar">
                        <span>05</span>
                         <img src="assets/img/Cassio.png" alt="Foto do integrante 05" onerror="this.remove()">
                    </div>
 
                    <h3 class="membro-card__nome">Cassio Passos</h3>
                    <span class="tag membro-card__tag">Database</span>
                </li>
 
                <li class="membro-card">
                    <span class="membro-card__id">#06</span>
 
                    <div class="membro-card__avatar">
                        <span>06</span>
                        <img src="assets/img/Daniel.png" alt="Foto do integrante 06" onerror="this.remove()">
                    </div>
 
                    <h3 class="membro-card__nome">Daniel Pons</h3>
                    <span class="tag membro-card__tag">Full stack</span>
                </li>
 
                <li class="membro-card">
                    <span class="membro-card__id">#07</span>
 
                    <div class="membro-card__avatar">
                        <span>07</span>
                         <img src="assets/img/Eduardo H.png" alt="Foto do integrante 07" onerror="this.remove()">
                    </div>
 
                    <h3 class="membro-card__nome">Eduardo Henrique</h3>
                    <span class="tag membro-card__tag">Desenvolvimento</span>
                </li>
 
                <li class="membro-card">
                    <span class="membro-card__id">#08</span>
 
                    <div class="membro-card__avatar">
                        <span>08</span>
                        <img src="assets/img/Eduardo M.png" alt="Foto do integrante 08" onerror="this.remove()">
                    </div>
 
                    <h3 class="membro-card__nome">Eduardo Martins</h3>
                    <span class="tag membro-card__tag">Front-end</span>
                </li>
 
                <li class="membro-card">
                    <span class="membro-card__id">#09</span>
 
                    <div class="membro-card__avatar">
                        <span>09</span>
                         <img src="assets/img/Guilherme.png" alt="Foto do integrante 09" onerror="this.remove()">
                    </div>
 
                    <h3 class="membro-card__nome">Guilherme Vargas</h3>
                    <span class="tag membro-card__tag">Back-end</span>
                </li>
 
                <li class="membro-card">
                    <span class="membro-card__id">#10</span>
 
                    <div class="membro-card__avatar">
                        <span>10</span>
                         <img src="assets/img/Gustavo Ferraz.png" alt="Foto do integrante 10" onerror="this.remove()">
                    </div>
 
                    <h3 class="membro-card__nome">Gustavo Ferraz</h3>
                    <span class="tag membro-card__tag">UX / UI</span>
                </li>
 
                <li class="membro-card">
                    <span class="membro-card__id">#11</span>
 
                    <div class="membro-card__avatar">
                        <span>11</span>
                        <img src="assets/img/Haru.png" alt="Foto do integrante 11" onerror="this.remove()">
                    </div>
 
                    <h3 class="membro-card__nome">Haru Neves</h3>
                    <span class="tag membro-card__tag">Database</span>
                </li>
 
                <li class="membro-card">
                    <span class="membro-card__id">#12</span>
 
                    <div class="membro-card__avatar">
                        <span>12</span>
                        <img src="assets/img/Isabela.png" alt="Foto do integrante 12" onerror="this.remove()">
                    </div>
 
                    <h3 class="membro-card__nome">Isabela Mindof</h3>
                    <span class="tag membro-card__tag">Full stack</span>
                </li>
 
                 <li class="membro-card">
                    <span class="membro-card__id">#13</span>
 
                    <div class="membro-card__avatar">
                        <span>13</span>
                        <img src="assets/img/Larissa.png" alt="Foto do integrante 13" onerror="this.remove()">
                    </div>
 
                    <h3 class="membro-card__nome">Larissa Martins</h3>
                    <span class="tag membro-card__tag">Database</span>
                </li>

                 <li class="membro-card">
                    <span class="membro-card__id">#14</span>
 
                    <div class="membro-card__avatar">
                        <span>14</span>
                        <img src="assets/img/Leonardo.png" alt="Foto do integrante 14" onerror="this.remove()">
                    </div>
 
                    <h3 class="membro-card__nome">Leonardo Müller</h3>
                    <span class="tag membro-card__tag">Database</span>
                </li>

                <li class="membro-card">
                    <span class="membro-card__id">#15</span>
 
                    <div class="membro-card__avatar">
                        <span>15</span>
                        <img src="assets/img/Mariana.png" alt="Foto do integrante 15" onerror="this.remove()">
                    </div>
 
                    <h3 class="membro-card__nome">Mariana Paiva</h3>
                    <span class="tag membro-card__tag">Database</span>
                </li>

                 <li class="membro-card">
                    <span class="membro-card__id">#16</span>
 
                    <div class="membro-card__avatar">
                        <span>16</span>
                        <img src="assets/img/marlon.png" alt="Foto do integrante 16" onerror="this.remove()">
                    </div>
 
                    <h3 class="membro-card__nome">Marlon Mendes</h3>
                    <span class="tag membro-card__tag">Database</span>
                </li>

                <li class="membro-card">
                    <span class="membro-card__id">#17</span>
 
                    <div class="membro-card__avatar">
                        <span>17</span>
                        <img src="assets/img/mateus.png" alt="Foto do integrante 17" onerror="this.remove()">
                    </div>
 
                    <h3 class="membro-card__nome">Mateus Ely</h3>
                    <span class="tag membro-card__tag">Database</span>
                </li>

                <li class="membro-card">
                    <span class="membro-card__id">#18</span>
 
                    <div class="membro-card__avatar">
                        <span>18</span>
                        <img src="assets/img/Monicke.png" alt="Foto do integrante 18" onerror="this.remove()">
                    </div>
 
                    <h3 class="membro-card__nome">Monicke Cunha</h3>
                    <span class="tag membro-card__tag">Database</span>
                </li>

                <li class="membro-card">
                    <span class="membro-card__id">#19</span>
 
                    <div class="membro-card__avatar">
                        <span>19</span>
                        <img src="assets/img/Nicolas A.png" alt="Foto do integrante 19" onerror="this.remove()">
                    </div>
 
                    <h3 class="membro-card__nome">Nicolas Addevico</h3>
                    <span class="tag membro-card__tag">Database</span>
                </li>

                <li class="membro-card">
                    <span class="membro-card__id">#20</span>
 
                    <div class="membro-card__avatar">
                        <span>20</span>
                        <img src="assets/img/Nicolas G.png" alt="Foto do integrante 20" onerror="this.remove()">
                    </div>
 
                    <h3 class="membro-card__nome">Nicolas Guerra</h3>
                    <span class="tag membro-card__tag">Database</span>
                </li>

                <li class="membro-card">
                    <span class="membro-card__id">#21</span>
 
                    <div class="membro-card__avatar">
                        <span>21</span>
                        <img src="assets/img/Rafael.png" alt="Foto do integrante 21" onerror="this.remove()">
                    </div>
 
                    <h3 class="membro-card__nome">Rafael Saraiva</h3>
                    <span class="tag membro-card__tag">Database</span>
                </li>

                 <li class="membro-card">
                    <span class="membro-card__id">#22</span>
 
                    <div class="membro-card__avatar">
                        <span>22</span>
                        <img src="assets/img/raul.png" alt="Foto do integrante 22" onerror="this.remove()">
                    </div>
 
                    <h3 class="membro-card__nome">Raul Guimarães</h3>
                    <span class="tag membro-card__tag">Database</span>
                </li>


            </ul>
 
        </div>
    </section>
    `
}