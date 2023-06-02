let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `Kirim/Reply Gambar dengan caption ${usedPrefix + command}`
m.reply('Tunggu Sedang Mengubah gambar menjadi blur')
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.zahwazein.xyz/photoeditor/blur?url=${url}&apikey=zenzkey_5ecc47890c`)).buffer()
conn.sendFile(m.chat, hasil, "hasil.jpg",  `Berhasil Mengubah gambar menjadi blur\n${wm}`, m)
}
handler.help = ['blur']
handler.tags = ['tools']
handler.command = /^(blur)$/i
handler.limit = true

module.exports = handler