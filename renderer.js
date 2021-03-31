// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const remote = require("@electron/remote")
remote.getCurrentWebContents().on('devtools-opened', () => {
    console.log('%cAttends !', 'color: #7289DA; -webkit-text-stroke: 2px #000000; font-size: 60px; font-weight: bold')
    console.log('%cSi quelqu\'un t\'a dit de copier/coller quelque chose ici, il y a \u00e0 peu pr\u00e8s 11 chances sur 10 que ce soit une arnaque.', 'font-size: 16px;')
    console.log('%cColler quelque chose ici pourrait donner aux assaillants acc\u00e8s \u00e0 des choses confidentielles de ton ordinateur.', 'font-size: 16px; color: #FF0000;')
    console.log('%cÀ moins que tu comprennes exactement ce que tu fais, ferme cette fenêtre et reste en sécurité.', 'font-size: 16px;')
})