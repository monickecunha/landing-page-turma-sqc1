import { renderCabecalho } from './components/Cabecalho.js';
import { renderIdentidade} from './components/Identidade.js';
import { renderMembros } from './components/Membros.js';
import { renderMural } from './components/Mural.js';
import { renderLinhaDoTempo } from './components/LinhaDoTempo.js';
import { renderQuemSomos } from './components/QuemSomos.js';
import { renderRodape } from './components/Rodape.js';

const app = document.querySelector('#app');

app.innerHTML = `
    ${renderCabecalho()}
    <main>
        ${renderIdentidade()}
        ${renderQuemSomos()}
        ${renderMembros()}
        ${renderMural()}
        ${renderLinhaDoTempo()}
    </main>
    ${renderRodape()}
`;