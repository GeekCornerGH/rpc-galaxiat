// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const DiscordRPC = require("discord-rpc")
const rpc = new DiscordRPC.Client({ transport: "ipc" });
rpc.on("ready", () => {
  createRPC()
})
rpc.login({ clientId: "825391936931889182" }).catch(() => {
})

async function createRPC() {
  rpc.request('SET_ACTIVITY', {
    pid: process.pid,
    activity: {
      details: "Cheap hosting",
      state: "Join us",
      timestamps: {
        start: Date.now()
      },
      assets: {
        large_image: "galaxiat",
        large_text: "Galaxiat",
        small_image: "small",
        small_text: "Cheap hosting company",
      },
      buttons: [
        {
          label: "🌐 Website",
          url: "https://galaxiat.com"
        },
        {
          label: "🗨 Discord",
          url: "https://discord.radeon.fr"
        }
      ]
    }
  })
}


const remote = require('@electron/remote')
remote.getCurrentWebContents().on('devtools-opened', () => {
  console.log('%cThe console is dark and full of terrors.', 'color: white; -webkit-text-stroke: 4px #a02d2a; font-size: 60px; font-weight: bold')
  console.log('%cIf you\'ve been told to paste something here, you\'re being scammed.', 'font-size: 16px')
  console.log('%cUnless you know exactly what you\'re doing, close this window.', 'font-size: 16px')
})