let fetch = require('node-fetch')
let handler = async (m, { conn, command, text,args, usedPrefix }) => {
    // response = args.join(' ').split('|')
if(!text) throw `
Contoh : ${usedPrefix}${command} mountain , huruf kecil semua

─────〔 *Opsi Tersedia* 〕─────

1. Mountain
2. Programing
3. Gaming
4. Teknologi
5. Aesthetic
6. Mobil
7. Motor
8. boneka-chucky
9. Anjing
10. Kucing
11. Cogan
12. Cecan
13. Kpop

${wm}
`.trim()


let buffer = await fetch(`https://api.botcahx.live/api/wallpaper/${text}?apikey=${lolkey}`).then(res => res.buffer())
await m.reply(wait)
conn.sendFile(m.chat, buffer, "nih.jpg", wm, m)
}
handler.help = ['wallpaper <opsi>']
handler.command = ['wallpaper']
handler.tags = ['downloader']
handler.register = true
handler.limit = true
handler.premium = false
module.exports = handler
