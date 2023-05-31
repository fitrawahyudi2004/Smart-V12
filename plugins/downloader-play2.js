let fetch = require('node-fetch')
let handler = async (m, { conn, command, text,args, usedPrefix }) => {
    // response = args.join(' ').split('|')
if(!text) throw `Contoh : ${usedPrefix}${command} orang yang sama`


let buffer = await fetch(`https://api.lolhuman.xyz/api/ytplay?apikey=${lolkey}&query=${text}`)
let json = await buffer.json()
//let thumb = json.result.image
await m.reply(wait)
let anu = (`
─────〔 *Youtube Play* 〕─────

*Judul :* ${json.result.title}
*Upload :* ${json.result.uploader}
*Channel :* ${json.result.channel}
*Durasi :* ${json.result.duration}
*Like :* ${json.result.like}
*Dislike :* ${json.result.dislike}

${json.result.description}

${wm}
`.trim())
let anus =(`
*Type :* ${json.result.video.type}
*Resolusi :* ${json.result.video.resolution}

${wm}
`)
conn.sendFile(m.chat, json.result.thumbnail, "nih.jpg", anu, m)
conn.sendFile(m.chat, json.result.video.link, "nih.mp4", anus, m)

}
handler.help = ['ytplay <Judul>']
handler.command = ['ytplay']
handler.tags = ['downloader']
handler.register = true
handler.limit = true
handler.premium = false
module.exports = handler
