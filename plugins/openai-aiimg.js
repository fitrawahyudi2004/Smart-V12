let fetch = require('node-fetch')
let handler = async (m, { text, command, conn }) => {

  if (!text) throw 'Masukan teks untuk diubah menjadi gambar'

  let response = await fetch(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkey}&text=${text}`)
  let image = await response.buffer()
  conn.sendFile(m.chat, image, 'aiimg.jpg', wm, m)

}
handler.command = handler.help = ['aiimg','aiimage','ai-image']
handler.tags = ['ai']
handler.limit = true
handler.register = true

module.exports = handler