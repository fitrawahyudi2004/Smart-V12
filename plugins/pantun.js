let fetch = require('node-fetch')
let handler = async (m, { conn, command, text }) => {
await m.reply(wait)
  let res = await fetch(`https://api.lolhuman.xyz/api/random/pantun?apikey=${lolkey}`)
  let json = await res.json()
  let hasil = json.result
m.reply(`
─────〔 *Pantun* 〕─────

${hasil}

`.trim())
}

handler.help = ['pantun']
handler.tags = ['internet']
handler.command = /^pantun$/i
handler.register = true

module.exports = handler
