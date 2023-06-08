let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m

if (!text) throw `Kirim/Reply Gambar dengan caption ${usedPrefix + command} quotes`
m.reply('Tunggu Sedang Membuat Quotes')
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.lolhuman.xyz/api/quotemaker3?apikey=${lolkey}&text=${text}&img=${url}`)).buffer()
conn.sendFile(m.chat, hasil, "hasil.jpg",  `Berhasil Membuat Quotes\n\n${wm}`, m)
}
handler.help = ['quotemaker3 <teks>']
handler.tags = ['sticker']
handler.command = /^(quotemaker3)$/i
handler.limit = true

module.exports = handler