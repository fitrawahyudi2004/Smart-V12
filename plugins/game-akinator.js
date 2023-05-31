// const { trusted } = require('mongoose')
let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command, text }) => {
    if (m.isGroup) return
	let aki = global.db.data.users[m.sender].akinator
	if (text == 'end') {
		if (!aki.sesi) return m.reply('Anda tidak sedang dalam sesi Akinator')
		aki.sesi = false
		aki.soal = null
		m.reply('Berhasil keluar dari sesi Akinator.')
	} else {
		if (aki.sesi) return conn.reply(m.chat, 'Anda masih berada dalam sesi Akinator', aki.soal)
		try {
			let res = await fetch(`https://api.lolhuman.xyz/api/akinator/start?apikey=${lolkey}`)
			let anu = await res.json()
			if (anu.status !== 200) throw Error('Emror')
			let { server, frontaddr, session, signature, question, progression, step } = anu.result
			aki.sesi = true
			aki.server = server
			aki.frontaddr = frontaddr
			aki.session = session
			aki.signature = signature
			aki.question = question
			aki.progression = progression
			aki.step = step
			let txt = `🎮 *Akinator* 🎮\n\n@${m.sender.split('@')[0]}\n\n${question}\n\n`
			txt += 'Balas Pesan ini dan ketik salah satu angka di bawah ini\n\n'
			txt += '0 - Ya\n'
			txt += '1 - Tidak\n'
			txt += '2 - Saya Tidak Tau\n'
			txt += '3 - Mungkin\n'
			txt += '4 - Mungkin Tidak\n\n'
			txt += `*${usedPrefix + command} end* untuk keluar dari sesi Akinator\n\n`
			let soal = await conn.sendMessage(m.chat, { text: txt, mentions: [m.sender] }, { quoted: m })
			aki.soal = soal
		} catch (e) {
			console.log(e)
			m.reply('Fitur Error!')
		}
	}
}


handler.help = ['akinator']
handler.tags  = ['game']
handler.command = /^(akinator)$/i

handler.limit = true

module.exports = handler
