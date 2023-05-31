let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  let res = await fetch(`https://api.botcahx.live/api/random/bijak?apikey=${btc}`)
  let json = await res.json()
  let hasil = json.result
m.reply(`
─────〔 *Kata Bijak* 〕─────

${hasil}


`)
}

handler.help = ['katabijak2']
handler.tags = ['random']
handler.command = /^katabijak2$/i
handler.register = true

module.exports = handler
