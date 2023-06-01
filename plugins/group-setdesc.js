let handler = async (m, { conn, text, isROwner, isOwner }) => {
    if (text) {
      await conn.groupUpdateDescription(m.chat, text)
    m.reply(`Sukses Mengubah Deskripsi Group !`)
    } else throw 'where text to change desc group?'
  }
  handler.help = ['setdesc', 'setdesk'].map(v => "<teks>" + v)
  handler.tags = ['group']
  handler.command = /^set(desk)?(desc)$/i
  handler.botAdmin = true
  handler.group = true
  handler.admin = true
module.exports = handler