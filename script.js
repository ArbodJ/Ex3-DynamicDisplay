// ---Reglage du style du body---
const body = document.querySelector("body");
body.style.background = "whitesmoke";
body.style.minHeight = "100vh";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.justifyContent = "center";

console.log(body);

// ---Creation de l'element header---
const header = document.createElement("header");
body.appendChild(header);
header.style.background = "#00a6cb";
header.style.width = "75%";
// header.style.height = "150px";
header.style.textAlign = "center";
header.style.color = "whitesmoke";

console.log(header);

// ---Creation du titre EX.---
const h1 = document.createElement("h1");
header.appendChild(h1);
h1.textContent = "Ex-3 : Affichage dynamique avec JS";

console.log(h1);

// ---Creation d'un sous titre
const h3 = document.createElement("h3");
header.appendChild(h3);
h3.textContent = "Bienvenue !";

console.log(h3);

// ---Creation d'une navigation---
const nav = document.createElement("nav");
body.appendChild(nav);
nav.style.width = "75%";
nav.style.background = "#8cdeef";
nav.innerHTML =
  '<div style="padding:10px"><a href="*" style="text-decoration: none">Accueil</a> / <a href="*" style="text-decoration: none">Contact</a></di>';

console.log(nav);

// ---Creation d'un paragraphe---
const div = document.createElement("div");
body.appendChild(div);
div.style.background = "#baf3ff";
div.style.width = "75%";
div.style.height = "150px";

const p = document.createElement("p");
div.appendChild(p);
p.style.padding = "10px";
p.textContent =
  "Ceci est une application entierement développé en JavaScript, sans balises racine dans le Html5, ni de style racine dans le Css3";
