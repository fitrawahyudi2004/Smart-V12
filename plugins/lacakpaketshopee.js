// let request = require('request');
//const { result } = require('lodash')
let fetch = require ('node-fetch')
let handler = async (m, { conn, command, text, args, usedPrefix }) => {

let img = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=Lacak Paket Shopee`
if (!text) throw `
Contoh : ${usedPrefix + command} SPXD02121341413
`
await m.reply("Tunggu sebentar sedang melacak paket anda...")
let res = await fetch(`https://api.binderbyte.com/v1/track?api_key=304a8540c06c6eb61f1c4bff35a115b0c8b4ad7ac929052c92c5480d6160e84c&courier=spx&awb=${text}`)
let json = await res.json()
let anu = (`
─────〔 *Lacak Paket* 〕─────

*No Resi :* ${json.data.summary.awb}
*Jenis Kurir :* ${json.data.summary.courier}
*Status :* ${json.data.summary.status}
*Tanggal :* ${json.data.summary.date}
*Penerima :* ${json.data.detail.receiver}

----- History -----

${json.data.history[0].date}
${json.data.history[0].desc}

${json.data.history[1].date}
${json.data.history[1].desc}

${json.data.history[2].date}
${json.data.history[2].desc}

${json.data.history[3].date}
${json.data.history[3].desc}

${json.data.history[4].date}
${json.data.history[4].desc}

${json.data.history[5].date}
${json.data.history[5].desc}

${json.data.history[6].date}
${json.data.history[6].desc}

${json.data.history[7].date}
${json.data.history[7].desc}

${json.data.history[8].date}
${json.data.history[8].desc}

${json.data.history[9].date}
${json.data.history[9].desc}

${json.data.history[10].date}
${json.data.history[10].desc}

${wm}
`.trim())
conn.sendFile(m.chat, img, "Hasil.jpg", anu, m)
    }

handler.help = ['lacakpaketshopee <No resi>']
handler.command = ['lacakpaketshopee']
handler.tags = ['lacak']
handler.register = true
handler.limit = true
handler.premium = false
module.exports = handler

