let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) throw `
Contoh :

${usedPrefix}${command} ryujin

Opsi Tersedia:

• aeunicetjoaa
• asupan
• asupantiktok
• cecan
• china
• justina
• kpop
• natajadeh
• notnot
• rose
• ryujin
• thailand
• vietnam

${wm}
`
let buffer = await fetch(`https://api.zahwazein.xyz/randomasupan/${text}?apikey=zenzkey_5ecc47890c`).then(result => result.buffer())
await m.reply("Sabar kak jangan ngocok dulu")
conn.sendFile(m.chat, buffer, 'hasil.mp4', "Random " + text + "\n\n" +wm, m)
}
handler.help = ['asupan2']
handler.command = ['asupan2']
handler.tags = ['premium']
handler.register = true
handler.limit = true
handler.premium = true
module.exports = handler
