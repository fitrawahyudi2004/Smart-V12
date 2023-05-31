let fetch = require('node-fetch');
let handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
await m.reply(wait)
  let apii = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=${lolkey}&text=${text}&system=`)
  let js = await apii.json()

 m.reply(`
 
 Pertanyaan Anda : ${text}
 
 Jawaban AI : 
 ${js.result}
 
 `)
}      
handler.command = handler.help = ['ai','openai','chatgpt'];
handler.tags = ['ai'];
handler.premium = false
handler.limit = true
module.exports = handler;