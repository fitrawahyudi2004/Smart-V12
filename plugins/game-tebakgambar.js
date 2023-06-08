let fetch = require('node-fetch')

let timeout = 180000
let poin = 1000
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
    let id = m.chat
    if (id in conn.tebakgambar) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakgambar[id][0])
        throw false
    }
    // ubah isi 'id' kalo mau ganti playlist spotifynya
    
    let src = await (await fetch(`https://api.botcahx.live/api/game/tebakgambar?apikey=${btc}`))
   let json = await src.json()
    // if (!json.status) throw json

    let caption = `
TEBAK GAMBAR

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}tegam* untuk bantuan
Bonus: ${poin} XP
Limit: 1 Limit
*Balas pesan ini untuk menjawab!*`.trim()
    conn.tebakgambar[id] = [
        await conn.sendFile(m.chat, json.image , "Nih kk.jpg", caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakgambar[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakgambar[id][0])
            delete conn.tebakgambar[id]
        }, timeout)
    ]
// await conn.sendFile(m.chat, json.img, 'nih.jpg', '', m)
}
handler.help = ['tebakgambar']
handler.tags = ['game']
handler.command = /^tebakgambar$/i

handler.group = false
module.exports = handler
