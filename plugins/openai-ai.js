// let fetch = require('node-fetch');
// let handler = async (m, {
//  text, 
//  usedPrefix, 
//  command
//  }) => {
// if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
// await m.reply(wait)
//   let apii = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=${lolkey}&text=${text}&system=`)
//   let js = await apii.json()

//  m.reply(`
 
// Pertanyaan Anda : ${text}
 
// Jawaban AI : 
// ${js.result}
 
//  `)
// }      
// handler.command = handler.help = ['ai','openai','chatgpt'];
// handler.tags = ['ai'];
// handler.premium = false
// handler.limit = true
// module.exports = handler;
var { Configuration, OpenAIApi } = require("openai");
var fetch = require("node-fetch");
var { generateWAMessageFromContent } = require("@adiwajshing/baileys");
var fs = require("fs");

let handler = async (m, { conn, text }) => {
if (!text) throw "Halo kak, ada yang bisa saya bantu?"
const configuration = new Configuration({
    apiKey: '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'
});
var openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0
        });
m.reply(response.data.choices[0].text)
    }
handler.help = ['openai','ai']
handler.tags = ['ai']
handler.command = /^(chat|ai|openai)$/i
handler.premium = false

module.exports = handler