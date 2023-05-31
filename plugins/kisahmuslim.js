let fetch = require('node-fetch')
let handler = async (m, { conn, command, text,args, usedPrefix }) => {

let buffer = await fetch(`https://api.zahwazein.xyz/islami/kisahmuslim?apikey=zenzkey_5ecc47890c`)
await m.reply(wait)
let json = await buffer.json()
let anum = (`
─────〔 *Kisah Islami* 〕─────

*Judul :* ${json.result.Judul}

${json.result.Cerita}

${wm}
`)
conn.sendFile(m.chat, json.result.Thumb, "nih.jpg", anum, m)

}
handler.help = ['ceritaislami ']
handler.command = ['ceritaislami']
handler.tags = ['islam']
handler.register = true
handler.limit = true
handler.premium = false
module.exports = handler
