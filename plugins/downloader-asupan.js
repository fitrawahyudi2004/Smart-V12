let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) throw `
Contoh :

${usedPrefix}${command} santuy

Opsi Tersedia:

• rikagusriani
• santuy
• bocil
• korea
• ukhty
• gheayubi
• anony
• euni
• natajadeh

`
let buffer = await fetch(`https://api.botcahx.live/api/asupan/${teks}?apikey=${btc}`).then(res => res.buffer())
await m.reply("Sabar kak jangan ngocok dulu")
conn.sendFile(m.chat, buffer, 'hasil.mp4', "Random " + text, m)
}
handler.help = ['asupan']
handler.command = ['asupan']
handler.tags = ['premium']
handler.register = true
handler.limit = true
handler.premium = true
module.exports = handler

// let handler = async(m, { conn }) => {
//   await conn.sendFile(m.chat, pickRandom(asupan), 'asupan.mp4', 'Nih Asupannya kk', m)
 
// }
// handler.help = ['asupan']
// handler.tags = ['asupan']
// handler.command = /^asupan$/i
// handler.owner = false
// handler.premium = true
// handler.group = false
// handler.private = false
// handler.register = true
// module.exports = handler

// function pickRandom(list) {
//   return list[Math.floor(list.length * Math.random())]
// }

// const asupan = [
// "https://api.botcahx.live/api/asupan/rikagusriani?apikey=fitra_wahyudi_",
// "https://api.botcahx.live/api/asupan/santuy?apikey=fitra_wahyudi_",
// "https://api.botcahx.live/api/asupan/ukhty?apikey=fitra_wahyudi_",
// "https://api.botcahx.live/api/asupan/bocil?apikey=fitra_wahyudi_",
// "https://api.botcahx.live/api/asupan/gheayubi?apikey=fitra_wahyudi_",
// "https://api.botcahx.live/api/asupan/gheayubi?apikey=fitra_wahyudi_",
// "https://api.botcahx.live/api/asupan/euni?apikey=fitra_wahyudi_",
// "https://api.botcahx.live/api/asupan/anony?apikey=fitra_wahyudi_",
// "https://api.botcahx.live/api/asupan/euni?apikey=fitra_wahyudi_",
// "https://api.botcahx.live/api/asupan/natajadeh?apikey=fitra_wahyudi_"
// ]
