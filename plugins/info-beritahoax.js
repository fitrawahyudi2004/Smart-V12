let fetch = require('node-fetch')
let handler = async (m, { conn, command, text,args, usedPrefix }) => {
    // response = args.join(' ').split('|')



let buffer = await fetch(`https://api.lolhuman.xyz/api/turnbackhoax?apikey=${lolkey}`)
let json = await buffer.json()
//let thumb = json.result.image
await m.reply(wait)
let anu = (`
─────〔 *Berita Hoax* 〕─────

*Judul :* ${json.result[0].title}
*Link :* ${json.result[0].link}
*Publish :* ${json.result[0].posted}

${json.result[0].desc}

*Judul :* ${json.result[1].title}
*Link :* ${json.result[1].link}
*Publish :* ${json.result[1].posted}

${json.result[1].desc}

*Judul :* ${json.result[2].title}
*Link :* ${json.result[2].link}
*Publish :* ${json.result[2].posted}

${json.result[2].desc}

*Judul :* ${json.result[3].title}
*Link :* ${json.result[3].link}
*Publish :* ${json.result[3].posted}

${json.result[3].desc}

*Judul :* ${json.result[4].title}
*Link :* ${json.result[4].link}
*Publish :* ${json.result[4].posted}

${json.result[4].desc}

${wm}
`.trim())
conn.sendFile(m.chat, thumb, 'hasil.jpg', anu, m)
}
handler.help = ['beritahoax']
handler.command = ['beritahoax']
handler.tags = ['info']
handler.register = true
handler.limit = true
handler.premium = false
module.exports = handler
