let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
// let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''    

// if (!teks) throw `
// contoh :

// ${usedPrefix}${command} indonesia

// Opsi Tersedia:

// • indonesia
// • vietnam
// • mimpi
// • korea
// • thailand
// • japan
// • malaysia
// • jiso
// • rose
// • hijaber
// • ryujin


// `
let buffer = await fetch(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${lolkey}`)
let json = await buffer.json()
let thumb = json.result.thumbnail
let anu = (`
─────〔 *Cerita Horor* 〕─────

Judul : ${json.result.title}
Deskripsi : ${json.result.desc}

Cerita : ${json.result.story}

`.trim())
conn.sendFile(m.chat, thumb, 'hasil.jpg', anu, m)
}
handler.help = ['ceritahoror']
handler.command = ['ceritahoror']
handler.tags = ['story']
handler.register = true
handler.limit = true
handler.premium = false
module.exports = handler
