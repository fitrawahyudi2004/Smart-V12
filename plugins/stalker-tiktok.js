let fetch = require('node-fetch')
let handler = async (m, { conn, command, text,args, usedPrefix }) => {

let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''    

if (!teks) throw `
contoh :

${usedPrefix}${command} bulansutena

`
let buffer = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=${lolkey}`)
let json = await buffer.json()
let thumb = json.result.user_picture
let anu = (`
─────〔 *Tiktok Stalker* 〕─────

*Username :* ${json.result.username}
*Nickname :* ${json.result.nickname}
*Bio :* ${json.result.bio}
*Followers :* ${json.result.followers}
*Followings :* ${json.result.followings}
*Total Likes :* ${json.result.likes}
*Total Video :* ${json.result.video}

`.trim())
conn.sendFile(m.chat, thumb, 'hasil.jpg', anu, m)
}
handler.help = ['tiktokstalk <username>']
handler.command = ['tiktokstalk']
handler.tags = ['stalk']
handler.register = true
handler.limit = true
handler.premium = false
module.exports = handler
