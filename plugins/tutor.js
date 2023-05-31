let fetch = require('node-fetch')
let handler = async (m, { conn, command, text }) => {
let buffer = await fetch('https://tutorbot.mustafakemal12.repl.co/tutorbot.mp4').then(res => res.buffer())    
let anus = (`
─────〔 *Tutorial* 〕─────

Tutorial menggunakan Smart Bot V${versi} 

1. Silahkan mendaftar di database *Smart Bot* terlebih dahulu dengan mengetikkan *.daftar*
2. Copy kode yang telah di kirim melalui Chat Pribadi, kemudian pastekan di balasan chat *Kode Anda Telah Terverifikasi*
3. Setiap ingin menggunakan fitur awali dengan perintah *[.]* tanpa tanda kurung kemudian di ikuti dengan Commandnya, contoh : *.openfeature*
4. Sekian dan Terima Kasih..

Powered By ${wm}
`.trim())
conn.sendFile(m.chat, buffer, "hasil.mp4", anus, m)
}

handler.help = ['tutorial']
handler.tags = ['info']
handler.command = /^tutorial$/i
handler.register = true

module.exports = handler
