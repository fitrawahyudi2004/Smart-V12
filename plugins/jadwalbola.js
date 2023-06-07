let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
let res = await fetch(`https://api.lolhuman.xyz/api/jadwalbola?apikey=${lolkey}`)
let json = await res.json()

m.reply(` *JADWAL BOLA*

_*${json.result[0].event}*_
Waktu: _${json.result[0].time}_
Match: _${json.result[0].match}_
Channel tv: ${json.result[0].tv}

_*${json.result[1].event}*_
Waktu: _${json.result[1].time}_
Match: _${json.result[1].match}_
Channel tv: ${json.result[1].tv}

_*${json.result[2].event}*_
Waktu: _${json.result[2].time}_
Match: _${json.result[2].match}_
Channel tv: ${json.result[2].tv}

_*${json.result[3].event}*_
Waktu: _${json.result[3].time}_
Match: _${json.result[3].match}_
Channel tv: ${json.result[3].tv}

_*${json.result[4].event}*_
Waktu: _${json.result[4].time}_
Match: _${json.result[4].match}_
Channel tv: ${json.result[4].tv}
`)

}
handler.help = ['jadwalbola']
handler.tags = ['internet']
handler.command = /^jadwalbola$/i


module.exports = handler