const initialMuralData = [
    {
        id: 1,
        nome: 'Monicke Cunha',
        frase: 'Café, playlists de rock e foco em resolver problemas.'
    },
    {
        id: 2,
        nome: 'Eduardo Martins',
        frase: 'Sempre buscando aprender coisas novas.'
    },
    {
        id: 3,
        nome: 'Eduardo Henrique Rodrigues',
        frase: 'Curioso, tranquilo e sempre aberto a novas experiências.'
    },
    {
        id: 4,
        nome: 'Raul Guimarães Prestes',
        frase: 'Liberdade é pouco. O que desejo ainda não tem nome. Clarice Lispector'
    },
    {
        id: 5,
        nome: 'Nicolas Guerra',
        frase: 'Carpe Diem'
    },
    {
        id: 6,
        nome: 'Leonardo Müller',
        frase: 'Sustine et abstine'
    },
    {
        id: 7,
        nome: 'Larissa Martins',
        frase: 'Apaixonada por livros e movida por tecnologia.'
    },
    {
        id: 8,
        nome: 'Mariana Paiva',
        frase: 'Jogos, Livros e Tecnologia são minhas paixões.'
    },
    {
        id: 9,
        nome: 'Haru Neves',
        frase: 'Para mim curiosidade move a tecnologia e transforma cada desafio em uma oportunidade de aprender, criar e inovar.'
    },
    {
        id: 10,
        nome: 'Bernardo Martins',
        frase: 'Back-end no coração, front-end a sete palmos do chão.'
    },
    {
        id: 11,
        nome: 'Antônio Alexandre Oliveira Reis',
        frase: 'Unindo eletrônica, computação e robótica para transformar ideias em aprendizagem.'
    },
    {
        id: 12,
        nome: 'Daniel Pons',
        frase: 'Advogado e curioso com tecnologias.'
    },
    {
        id: 13,
        nome: 'Gustavo Ferraz Favero',
        frase: 'O limite é a sua criatividade.'
    },
    {
        id: 14,
        nome: 'Cassio Passos',
        frase: 'Cada linha de código é um passo na construção do profissional que queremos ser.'
    },
    {
        id: 15,
        nome: 'Guilherme Vargas',
        frase: 'Conheça-te, aceita-te e supera-te.'
    },
    {
        id: 16,
        nome: 'Adriano Piva',
        frase: 'Quanto mais escura a noite, mais brilhante as estrelas.'
    },
    {
        id: 17,
        nome: 'Rafael Saraiva Cardoso',
        frase: 'Ainda faltam 31 anos para a aposentadoria.'
    },
    {
        id: 18,
        nome: 'Gabriel Daudt',
        frase: 'Transformando problemas complexos em sistemas simples e funcionais.'
    },
    {
        id: 19,
        nome: 'Isabela mindof',
        frase: 'Construindo conhecimento, compartilhando experiências e preparando o futuro.'
    },
    {
        id: 20,
        nome: 'Bruna Liares',
        frase: 'Aprendizado contínuo.'
    },
    {
        id: 21,
        nome: 'Mateus Ely Chies',
        frase: 'Tentando transformar café em código.'
    },
    {
        id: 22,
        nome: 'Marlon Mendes',
        frase: 'A inteligência não é a capacidade de armazenar informações, mas de saber onde encontrá-las.'
    },
    {
        id: 23,
        nome: 'Nicolas Addevico Teixeira',
        frase: 'Gosto de aprender novas coisas!'
    }
];

export const muralData = [...initialMuralData].sort((a, b) => 
    a.nome.localeCompare(b.nome, 'pt-BR')
);