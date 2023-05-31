const { result } = require('lodash')
let fetch = require ('node-fetch')
let handler = async (m, { conn, command, text, args, usedPrefix }) => {
    if (!text) throw `
    Contoh :
    
    ${usedPrefix}${command} muhammad
    (huruf kecil semua)
    
    Opsi Tersedia:
    
    • Adam
    • Idris
    • Nuh
    • Hud
    • Shaleh
    • Ibrahim
    • Luth
    • Ismail
    • Ishak
    • Yaqub
    • Yusuf
    • Ayub
    • Shuaib
    • Harun
    • Musa
    • Daud
    • Zulkifli
    • Sulaiman
    • Ilyas
    • Ilyasa
    • Yunus
    • Zakaria
    • Yahya
    • Isa
    • Muhammad
    `.trim()

let buffer = await fetch(`https://api.lolhuman.xyz/api/kisahnabi/${text}?apikey=${lolkey}`)
// await m.reply(wait)
let json = await buffer.json()
 m.reply = (`
─────〔 *Kisah Nabi* 〕─────

*Nama :* ${json.result.name}
*Tahun Kelahiran :* ${json.result.thn_kelahiran}
*Usia* ${json.result.age}
*Tempat :* ${json.result.place}

${json.result.story}
`)
// conn.sendFile(m.chat, buffer, 'hasil.jpg', "Nih kk KTP nya ", m)
}
handler.help = ['kisahnabi <nama>']
handler.command = ['kisahnabi']
handler.tags = ['islam']
handler.register = true
handler.limit = true
handler.premium = false
module.exports = handler

