let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''    
if (!teks) throw `
contoh :

${usedPrefix}${command} indonesia

Opsi Tersedia:

• indonesia
• vietnam
• mimpi
• korea
• thailand
• japan
• malaysia
• jiso
• rose
• hijaber
• ryujin


`
let buffer = await fetch(`https://api.botcahx.live/api/cecan/${teks}?apikey=${btc}`).then(res => res.buffer())
conn.sendFile(m.chat, buffer, 'hasil.jpg', "Random " + teks, m)
}
handler.help = ['cecan'].map(v => v + ' <opsi>')
handler.command = ['cecan']
handler.tags = ['premium']
handler.register = true
handler.limit = true
handler.premium = true
module.exports = handler
