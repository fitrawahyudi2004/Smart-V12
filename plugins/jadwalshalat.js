const { result } = require('lodash')
let fetch = require ('node-fetch')
let handler = async (m, { conn, command, text, args, usedPrefix }) => {
    if (!text) throw `Contoh ${usedPrefix}${command} medan`

let buffer = await fetch(`https://api.lolhuman.xyz/api/sholat/${text}?apikey=${lolkey}`)
let json = await buffer.json()

let anu = (`
─────〔 *Jadwal Shalat* 〕─────

*Wilayah :* ${json.result.wilayah}
*Tanggal :* ${json.result.tanggal}
*Sahur :* ${json.result.sahur}
*Imsak :* ${json.result.imsak}
*Subuh :* ${json.result.subuh}
*Terbit :* ${json.result.terbit}
*Dhuha* ${json.result.dhuha}
*Dzuhur :* ${json.result.dzuhur}
*Ashar :* ${json.result.ashar}
*Maghrib :* ${json.result.maghrib}
*Isya :* ${json.result.isya}

${wm}
`)
m.reply(anu)
// conn.sendFile(m.chat, buffer, 'hasil.jpg', "Nih kk KTP nya ", m)
}
handler.help = ['jadwalshalat <Wilayah>']
handler.command = ['jadwalshalat']
handler.tags = ['islam']
handler.register = true
handler.limit = true
handler.premium = false
module.exports = handler

