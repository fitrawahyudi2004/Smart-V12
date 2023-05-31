let fetch = require('node-fetch')
let handler = async (m, { conn, command, text,args, usedPrefix }) => {
    // response = args.join(' ').split('|')
if(!text) throw `Contoh : ${usedPrefix}${command} melukis senja`


let buffer = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkey}&query=${text}`)
let json = await buffer.json()
//let thumb = json.result.image
await m.reply(wait)
let anu = (`
─────〔 *Spotify Search* 〕─────

*Id :* ${json.result[0].id}
*Judul :* ${json.result[0].title}
*Artis :* ${json.result[0].artists}
*Durasi :* ${json.result[0].duration}
*Popularitas :* ${json.result[0].popularity}
*Links :* ${json.result[0].link}

${wm}
`.trim())
m.reply(anu)
conn.sendFile(m.chat, json.result[0].preview_url, "music.mp3", m)
}
handler.help = ['spotify <Judul>']
handler.command = ['spotify']
handler.tags = ['downloader']
handler.register = true
handler.limit = true
handler.premium = false
module.exports = handler
