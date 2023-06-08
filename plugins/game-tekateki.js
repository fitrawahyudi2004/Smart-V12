let fetch = require('node-fetch')

let timeout = 180000
let poin = 1000
let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (id in conn.tekateki) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tekateki[id][0])
        throw false
    }
    // ubah isi 'id' kalo mau ganti playlist spotifynya
    
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    // if (!json.status) throw json
    let caption = `
TEKA TEKI

${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}teka* untuk bantuan
Bonus: ${poin} XP
Limit: 1 Limit
*Balas pesan ini untuk menjawab!*`.trim()
    conn.tekateki[id] = [
        await m.reply(caption),
        json, poin,
        setTimeout(() => {
            if (conn.tekateki[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tekateki[id][0])
            delete conn.tekateki[id]
        }, timeout)
    ]
 //   await conn.sendFile(m.chat, json.lagu, 'audio.mp3', '', m)
}
handler.help = ['tekateki']
handler.tags = ['game']
handler.command = /^tekateki$/i

handler.group = false
module.exports = handler
