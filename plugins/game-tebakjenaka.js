let fetch = require('node-fetch')

let timeout = 180000
let poin = 1000
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakjenaka = conn.tebakjenaka ? conn.tebakjenaka : {}
    let id = m.chat
    if (id in conn.tebakjenaka) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakjenaka[id][0])
        throw false
    }
    // ubah isi 'id' kalo mau ganti playlist spotifynya
    
    let src = await (await fetch('https://api.lolhuman.xyz/api/tebak/jenaka?apikey=fitra_wahyudi_'))
   let json = await src.json()
    // if (!json.status) throw json
    let caption = `
TEBAK JENAKA

${json.result.question}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}teje* untuk bantuan
Bonus: ${poin} XP
Limit: 1 Limit
*Balas pesan ini untuk menjawab!*`.trim()
    conn.tebakjenaka[id] = [
        await m.reply(caption),
        json, poin,
        setTimeout(() => {
            if (conn.tebakjenaka[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.result.answer}*`, conn.tebakjenaka[id][0])
            delete conn.tebakjenaka[id]
        }, timeout)
    ]
 //   await conn.sendFile(m.chat, json.lagu, 'audio.mp3', '', m)
}
handler.help = ['tebakjenaka']
handler.tags = ['game']
handler.command = /^tebakjenaka$/i

handler.group = false
module.exports = handler
