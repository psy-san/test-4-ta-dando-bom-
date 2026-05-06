const container = document.getElementById("container");

const personagens = [
{
nome: "Poppy",
desc: "A rainha otimista dos Trolls, sempre positiva e líder do grupo.",
background-image: URL(Poppy.jpeg),
cor: "#ff69b4"
},
{
nome: "Branch",
desc: "Mais sério e cauteloso, mas leal e corajoso.",
img: "https://static.wikia.nocookie.net/trolls/images/branch.png",
cor: "#4169e1"
},
{
nome: "Viva",
desc: "Irmã perdida de Poppy, líder independente e protetora.",
img: "https://static.wikia.nocookie.net/trolls/images/viva.png",
cor: "#ff4500"
},
{
nome: "Floyd",
desc: "O irmão sensível de Branch, com talento musical.",
img: "https://static.wikia.nocookie.net/trolls/images/floyd.png",
cor: "#ff0000"
},
{
nome: "John Dory",
desc: "O líder original da banda BroZone, responsável e determinado.",
img: "https://static.wikia.nocookie.net/trolls/images/john_dory.png",
cor: "#00ffff"
},
{
nome: "Clay",
desc: "Irmão divertido e descontraído.",
img: "https://static.wikia.nocookie.net/trolls/images/clay.png",
cor: "#00ff00"
},
{
nome: "Bruce",
desc: "Ex-Spruce, agora vive em família e é mais maduro.",
img: "https://static.wikia.nocookie.net/trolls/images/bruce.png",
cor: "#ffa500"
},
{
nome: "Tiny Diamond",
desc: "Pequeno, brilhante e cheio de atitude.",
img: "https://static.wikia.nocookie.net/trolls/images/tiny_diamond.png",
cor: "#ffffff"
},
{
nome: "Velvet",
desc: "Vilã ambiciosa que busca fama.",
img: "https://static.wikia.nocookie.net/trolls/images/velvet.png",
cor: "#ff1493"
},
{
nome: "Veneer",
desc: "Irmão de Velvet, mais inseguro e influenciável.",
img: "https://static.wikia.nocookie.net/trolls/images/veneer.png",
cor: "#9370db"
},
{
nome: "Bridget",
desc: "Ex-Bergen que agora vive em harmonia com os Trolls.",
img: "https://static.wikia.nocookie.net/trolls/images/bridget.png",
cor: "#ffb6c1"
},
{
nome: "King Gristle Jr.",
desc: "Rei dos Bergens e marido de Bridget.",
img: "https://static.wikia.nocookie.net/trolls/images/gristle.png",
cor: "#8b4513"
},
{
nome: "Guy Diamond",
desc: "Troll glitter cheio de estilo.",
img: "https://static.wikia.nocookie.net/trolls/images/guy_diamond.png",
cor: "#e0ffff"
},
{
nome: "Cooper",
desc: "Troll divertido com personalidade única.",
img: "https://static.wikia.nocookie.net/trolls/images/cooper.png",
cor: "#ffff00"
},
{
nome: "Biggie",
desc: "Gentil e amigável, sempre com seu bichinho.",
img: "https://static.wikia.nocookie.net/trolls/images/biggie.png",
cor: "#87cefa"
},
{
nome: "Mr. Dinkles",
desc: "O pet de Biggie, pequeno mas importante.",
img: "https://static.wikia.nocookie.net/trolls/images/mr_dinkles.png",
cor: "#a0522d"
},
{
nome: "Cloud Guy",
desc: "Personagem irritante mas engraçado.",
img: "https://static.wikia.nocookie.net/trolls/images/cloud_guy.png",
cor: "#d3d3d3"
},
{
nome: "Crimp",
desc: "Assistente de Velvet, trabalhadora e subestimada.",
img: "https://static.wikia.nocookie.net/trolls/images/crimp.png",
cor: "#ff6347"
},
{
nome: "Prince Darnell",
desc: "Troll estiloso com vibe musical.",
img: "https://static.wikia.nocookie.net/trolls/images/darnell.png",
cor: "#00ced1"
},
{
nome: "Satin & Chenille",
desc: "Irmãs gêmeas fashionistas e inseparáveis.",
img: "https://static.wikia.nocookie.net/trolls/images/satin_chenille.png",
cor: "#ff00ff"
}
];

// criar cards
personagens.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.setProperty("--cor", p.cor);

    card.innerHTML = `
        <img src="${p.img}">
        <h2>${p.nome}</h2>
        <p>${p.desc}</p>
    `;

    container.appendChild(card);
});

const particlesContainer = document.getElementById("particles");

for (let i = 0; i < 50; i++) {
    const span = document.createElement("span");

    const size = Math.random() * 5 + 2;
    span.style.width = size + "px";
    span.style.height = size + "px";

    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDuration = (Math.random() * 5 + 5) + "s";
    span.style.animationDelay = Math.random() * 5 + "s";

    particlesContainer.appendChild(span);

    card.style.setProperty("--cor", p.cor);
}