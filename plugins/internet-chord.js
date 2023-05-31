let fetch = require('node-fetch')
let handler = async (m, { conn, command, text }) => {
if (!text) throw `Masukkan Chord yang ingin di cari!\n\n*Contoh: .chord melukis senja? `
await m.reply(wait)
  let res = await fetch(`https://api.lolhuman.xyz/api/chord?apikey=${lolkey}&query=${text}`)
  let json = await res.json()
  let create = json.result.created
  let username = json.result.modified.last_name
  let hasil = json.result.chord
m.reply(`
─────〔 *Chord Gitar* 〕─────

Judul : ${text}
Tanggal di Buat : ${create}
Penulis : ${username}

Chord : ${hasil}



`)
}

handler.help = ['chord']
handler.tags = ['internet']
handler.command = /^chord$/i
handler.register = true

module.exports = handler
