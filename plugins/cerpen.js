let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
let buffer = await fetch(`https://api.lolhuman.xyz/api/cerpen?apikey=${lolkey}`)
let json = await buffer.json()

let anu = (`
─────〔 *Cerita Pendek* 〕─────

Judul : ${json.result.title}
Penulis : ${json.result.creator}

Cerita : ${json.result.cerpen}

`.trim())
m.reply(anu)
}
handler.help = ['cerpen']
handler.command = ['cerpen']
handler.tags = ['story']
handler.register = true
handler.limit = true
handler.premium = false
module.exports = handler
