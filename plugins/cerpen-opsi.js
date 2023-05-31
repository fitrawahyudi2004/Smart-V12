let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `
Contoh :

${usedPrefix}${command} anak
(huruf kecil semua)

Opsi Tersedia:

• Remaja
• Misteri
• Cinta
• Budaya
• Romantis
• Galau
• Gokil
• Inspiratif
• Anak
• Kehidupan
• Keluarga
• Jepang
• Korea
• Persahabatan
• Ramadhan
• Lingkungan
• Mengharukan
• Motivasi
• Perjuangan
• Nasihat
• Pendidikan
• Petualangan
• Liburan

`.trim()
let buffer = await fetch(`https://api.botcahx.live/api/story/cerpen?type=${text}&apikey=${btc}`)
await m.reply(wait)
let json = await buffer.json()
let firstChar = text.replace(/^\w/, (c) => c.toUpperCase());

let anu = (`
─────〔 *Cerita Pendek ${firstChar}* 〕─────

*Judul :* ${json.result.title}
*Penulis :* ${json.result.author}
*Upload :* ${json.result.lolos}

*Cerita :* ${json.result.cerita}

`.trim())
m.reply(anu)
}
handler.help = ['cerpen2 <opsi>']
handler.command = ['cerpen2']
handler.tags = ['story']
handler.register = true
handler.limit = true
handler.premium = false
module.exports = handler
