let fetch = require('node-fetch')
let handler = async (m, { conn, command, text }) => {
await m.reply(wait)
  let res = await fetch(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolkey}`)
  let json = await res.json()
  let hasil = json.result
m.reply(`
─────〔 *Kata Dilan* 〕─────

${hasil}

`.trim())
}

handler.help = ['katadilan']
handler.tags = ['quotes']
handler.command = /^katadilan$/i
handler.register = true

module.exports = handler
