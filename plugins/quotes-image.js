// let fetch = require('node-fetch')
// let handler = async (m, { conn, command, text }) => {
// await m.reply(wait)
//   let buffer = await fetch(`https://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolkey}`).then(res => res.buffer())

// conn.sendfile(m.chat, buffer, "hasil.jpg", "Nih kk Quotesnya", m)
// }

// handler.help = ['quotesimage']
// handler.tags = ['quotes']
// handler.command = /^quotesimage$/i
// handler.register = true

// module.exports = handler
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''    
let buffer = await fetch(`https://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolkey}`).then(res => res.buffer())
m.reply(wait)
conn.sendFile(m.chat, buffer, 'hasil.jpg', "Random Quotes:)" + teks, m)
}
handler.help = ['quotesimage']
handler.command = ['quotesimage']
handler.tags = ['quotes']
handler.register = true
handler.limit = true
handler.premium = true
module.exports = handler
