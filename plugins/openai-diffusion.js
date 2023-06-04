let fetch = require('node-fetch')
let handler = async (m, { text, command, conn, usedPrefix }) => {

  if (!text) throw `Masukan teks berbahasa inggris untuk diubah menjadi gambar\n\nContoh : ${usedPrefix + command} a women in forest `

  let response = await fetch(`https://api.lolhuman.xyz/api/diffusion-prompt?apikey=${lolkey}&prompt=${text}`)
  let image = await response.buffer()
  await m.reply("Tunggu sebentar AI sedang mengubah teks menjadi gambar")
  conn.sendFile(m.chat, image, 'aiimg.jpg', wm, m)

}
handler.command = handler.help = ['stable-diffusion']
handler.tags = ['ai','premium']
handler.limit = true
handler.premium = true
handler.register = true

module.exports = handler