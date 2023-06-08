let fetch = require('node-fetch')

let timeout = 180000
let poin = 1000
let handler = async (m, { conn, usedPrefix }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (id in conn.siapakahaku) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.siapakahaku[id][0])
        throw false
    }
    // ubah isi 'id' kalo mau ganti playlist spotifynya
    
    let src = await (await fetch('https://api.zahwazein.xyz/entertainment/siapakah?apikey=zenzkey_5ecc47890c'))
   let json = await src.json()
    // if (!json.status) throw json
    let caption = `
SIAPAKAH AKU

${json.result.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}tesi* untuk bantuan
Bonus: ${poin} XP
Limit: 1 Limit
*Balas pesan ini untuk menjawab!*`.trim()
    conn.siapakahaku[id] = [
        await m.reply(caption),
        json, poin,
        setTimeout(() => {
            if (conn.siapakahaku[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.result.jawaban}*`, conn.siapakahaku[id][0])
            delete conn.siapakahaku[id]
        }, timeout)
    ]
 //   await conn.sendFile(m.chat, json.lagu, 'audio.mp3', '', m)
}
handler.help = ['siapakahaku']
handler.tags = ['game']
handler.command = /^siapakahaku$/i

handler.group = false
module.exports = handler
