let fetch = require('node-fetch')
let handler = async (m, { conn, command, text,args, usedPrefix }) => {
    // response = args.join(' ').split('|')
if(!text) throw `Contoh : ${usedPrefix}${command} mountain`


let buffer = await fetch(`https://api.lolhuman.xyz/api/unsplash?apikey=${lolkey}&query=${text}`)
let json = await buffer.json()
let po = json.result
let bek = po[Math.floor(Math.random() * po.length)]  
await m.reply(wait)
conn.sendFile(m.chat, bek, "nih.jpg", wm, m)

}
handler.help = ['unsplash <query>']
handler.command = ['unsplash']
handler.tags = ['downloader']
handler.register = true
handler.limit = true
handler.premium = false
module.exports = handler
