const { URL } = require('node:url');

function updateURL(originalURL) {
    let url = new URL(originalURL);

    console.log(`Protocole : ${url.protocol}`);
    console.log(`Nom d'hôte : ${url.hostname}`);
    console.log(`Paramètres : ${url.search}`);

    url.hostname = 'www.laplateforme.io';
    console.log(`Nouveau nom d'hôte : ${url.hostname}`);

    let params = url.searchParams;
    params.append('param3', 'value3');

    console.log(`Nouvelle URL : ${url.href}`);
}

updateURL('https://www.google.com/search?query=nodejs');