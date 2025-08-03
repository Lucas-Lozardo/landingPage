const savedLang = sessionStorage.getItem("lang");
const userLang = savedLang || navigator.language || navigator.userLanguage;


if(userLang.startsWith("pt")){
    loadLanguage("pt");
    document.querySelector('select').value = "pt";
} else {
    loadLanguage("en");
    document.querySelector('select').value = "en";
}

async function loadLanguage(lang) {
    const response = await fetch(`./lang/${lang}.json`);
    const data = await response.json();

    document.getElementById("about").innerText = data.headerAndFooter.about;
    document.getElementById("footer").innerText = data.headerAndFooter.footer;

    const path = window.location.pathname;

    if(path.includes("index") || path == "/" || path == "/index"){
        document.getElementById("title").innerText = data.index.title;
        document.getElementById("description").innerText = data.index.description;
        document.getElementById("contact").innerText = data.index.contact;
    }

    if(path.includes("about") || path == "/about"){
        document.getElementById("titleAbout").innerText = data.about.titleAbout;
        document.getElementById("descriptionP1").innerText = data.about.descriptionP1;
        document.getElementById("descriptionP2").innerText = data.about.descriptionP2;
        document.getElementById("descriptionP3").innerText = data.about.descriptionP3;
    }
}

function setLanguage(lang){
    sessionStorage.setItem("lang", lang);
    loadLanguage(lang);
    document.querySelector('select').value = lang;
}