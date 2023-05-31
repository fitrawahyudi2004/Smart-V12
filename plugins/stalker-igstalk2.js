let fetch = require('node-fetch')
let handler = async (m, { conn, command, text,args, usedPrefix }) => {

let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''    

if (!teks) throw `
contoh :

${usedPrefix}${command} fitra_wahyudi_

`
let buffer = await fetch(`https://api.lolhuman.xyz/api/stalkig/${teks}?apikey=${lolkey}`)
let json = await buffer.json()
let thumb = json.result.photo_profile
let anu = (`
─────〔 *Instagram Stalker* 〕─────

Username : ${json.result.username}
Fullname : ${json.result.fullname}
Total Post : ${json.result.post}
Followers : ${json.result.followers}
Following : ${json.result.following}
Bio : ${json.result.bio}
`.trim())
conn.sendFile(m.chat, thumb, 'hasil.jpg', anu, m)
}
handler.help = ['igstalk2 <username>']
handler.command = ['igstalk2']
handler.tags = ['stalk']
handler.register = true
handler.limit = true
handler.premium = false
module.exports = handler
