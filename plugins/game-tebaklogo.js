let fetch = require('node-fetch')

let timeout = 180000
let poin = 1000
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebaklogo = conn.tebaklogo ? conn.tebaklogo : {}
    let id = m.chat
    if (id in conn.tebaklogo) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebaklogo[id][0])
        throw false
    }
    // ubah isi 'id' kalo mau ganti playlist spotifynya
    
    let src = await (await fetch('https://raw.githubusercontent.com/Aiinne/scrape/main/tebaklogo.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    // if (!json.status) throw json
    let caption = `
TEBAK LOGO

Clue : ${json.deskripsi}
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}telog* untuk bantuan
Bonus: ${poin} XP
Limit: 1 Limit
*Balas pesan ini untuk menjawab!*`.trim()
    conn.tebaklogo[id] = [
        await conn.sendFile(m.chat, json.img, 'nih.jpg',caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebaklogo[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebaklogo[id][0])
            delete conn.tebaklogo[id]
        }, timeout)
    ]
 //   await conn.sendFile(m.chat, json.lagu, 'audio.mp3', '', m)
}
handler.help = ['tebaklogo']
handler.tags = ['game']
handler.command = /^tebaklogo$/i

handler.group = false
module.exports = handler
