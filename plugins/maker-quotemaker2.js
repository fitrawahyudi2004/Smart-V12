let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text,args }) => {
 response = args.join(' ').split('|')	

if (!(args[0] || args[1])) throw `${usedPrefix + command} quotes|author`
m.reply('Tunggu Sedang Membuat Quotes')
// let media = await q.download()
// let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.lolhuman.xyz/api/quotemaker2?apikey=${lolkey}&text=${response[0]}&author=${response[1]}`)).buffer()
conn.sendFile(m.chat, hasil, "hasil.jpg",  `Berhasil Membuat Quotes\n\n${wm}`, m)
}
handler.help = ['quotemaker2 <teks|author>']
handler.tags = ['sticker']
handler.command = /^(quotemaker2)$/i
handler.limit = true

module.exports = handler