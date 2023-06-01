let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  let res = await (await fetch('https://raw.githubusercontent.com/KazukoGans/database/main/anime/ppcouple.json')).json()
  let cita = res[Math.floor(Math.random() * res.length)]
await m.reply(wait)
let cowi = await(await fetch(cita.cowo)).buffer()
await conn.sendFile(m.chat, cowi, '', '♂️', m)
let ciwi = await(await fetch(cita.cewe)).buffer()
await conn.sendFile(m.chat, ciwi, '', '♀️', m)

}

handler.help = ['ppcp2']
handler.tags = ['internet']
handler.command = /^ppcp2$/i
handler.register = true

module.exports = handler