let fetch = require('node-fetch')

let timeout = 180000
let poin = 1000
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakanime = conn.tebakanime ? conn.tebakanime : {}
    let id = m.chat
    if (id in conn.tebakanime) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakanime[id][0])
        throw false
    }
    // ubah isi 'id' kalo mau ganti playlist spotifynya
    
    let src = await (await fetch(`https://api.botcahx.live/api/game/tebakchara?apikey=${btc}`))
   let json = await src.json()
    // if (!json.status) throw json

    let caption = `
TEBAK ANIME

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}tean* untuk bantuan
Bonus: ${poin} XP
Limit: 1 Limit
*Balas pesan ini untuk menjawab!*`.trim()
    conn.tebakanime[id] = [
        await conn.sendFile(m.chat, json.result.image , "Nih kk.jpg", caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakanime[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.result.name}*\n\nDeskripsi : ${json.result.desc}\n\n${json.result.url}`, conn.tebakanime[id][0])
            delete conn.tebakanime[id]
        }, timeout)
    ]
// await conn.sendFile(m.chat, json.img, 'nih.jpg', '', m)
}
handler.help = ['tebakanime']
handler.tags = ['game']
handler.command = /^tebakanime$/i

handler.group = false
module.exports = handler
