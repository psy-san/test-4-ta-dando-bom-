const container = document.getElementById("container");

const personagens = [
{
nome: "Poppy",
desc: "A rainha otimista dos Trolls, sempre positiva e líder do grupo.",
cor: "#ff69b4",
img:"Poppy.jpeg",
},
{
nome: "Branch",
desc: "Mais sério e cauteloso, mas leal e corajoso.",
img: "tronco.webp",
cor: "#4169e1",
},
{
nome: "Viva",
desc: "Irmã perdida de Poppy, líder independente e protetora.",
img: "viva.jpg",
cor: "#ff4500",
},
{
nome: "Floyd",
desc: "O irmão sensível de Branch, com talento musical.",
img: "Floyd.jpg",
cor: "#ff0000"
},
{
nome: "John Dory",
desc: "O líder original da banda BroZone, responsável e determinado.",
img: "trolls_3_john_dory.jpg",
cor: "#00ffff",
},
{
nome: "Clay",
desc: "Irmão divertido e descontraído.",
img: "Clay.jpg",
cor: "#00ff00",
},
{
nome: "Bruce",
desc: "Ex-Spruce, agora vive em família e é mais maduro.",
img: "Bruce.webp",
cor: "#7700ff",
},
{
nome: "Tiny Diamond",
desc: "Pequeno, brilhante e cheio de atitude.",
img: "Tiny Diamond.jpg",
cor: "#919191",
},
{
nome: "Velvet",
desc: "Vilã ambiciosa que busca fama.",
img: "Velvet.jpg",
cor: "#ff1493",
},
{
nome: "Veneer",
desc: "Irmão de Velvet, mais inseguro e influenciável.",
img: "Veneer.jpg",
cor: "#3cf000",
},
{
nome: "Bridget",
desc: "Ex-Bergen que agora vive em harmonia com os Trolls.",
img: "Bridget.png",
cor: "#ffb6c1",
},

{
nome: "King Gristle Jr.",
desc: "Rei dos Bergens e marido de Bridget.",
img: "KingGristlejr.jpg",
cor: "#8b4513",
},
{
nome: "Guy Diamond",
desc: "Troll glitter cheio de estilo.",
img: "Guy_Diamond.webp",
cor: "#e0ffff",
},
{
nome: "Cooper",
desc: "Troll divertido com personalidade única.",
img: "cooper.jpg",
cor: "#ffff00"
},
{
nome: "Biggie",
desc: "Gentil e amigável, sempre com seu bichinho.",
img: "biggle.jpg",
cor: "#87cefa"
},
{
nome: "Mr. Dinkles",
desc: "O pet de Biggie, pequeno mas importante.",
img: "Mr-dinkles-webp",
cor: "#a0522d"
},
{
nome: "Cloud Guy",
desc: "Personagem irritante mas engraçado.",
img: "cloud guy.jpg",
cor: "#d3d3d3",
},
{
nome: "Crimp",
desc: "Assistente de Velvet, trabalhadora e subestimada.",
img: "crimp.jpg",
cor: "#ff6347",
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