let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  let res = await fetch(`https://api.botcahx.live/api/random/katabucin?apikey=${btc}`)
  let json = await res.json()
  let hasil = json.bucin
m.reply(`
─────〔 *Kata Bucin* 〕─────

${hasil}

`)
}

handler.help = ['katabucin']
handler.tags = ['random']
handler.command = /^katabucin$/i
handler.register = true

module.exports = handler
