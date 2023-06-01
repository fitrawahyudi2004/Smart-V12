let acrcloud = require('acrcloud')
let acr = new acrcloud({
	host: 'identify-ap-southeast-1.acrcloud.com',
	access_key: '594d802cb7ba315a7a4a2d029470e05e',
	access_secret: 'xSf9RNxZdKGAc81hVahpsysUMPEoauz3EVXFatc7'
})

let handler = async (m, { conn, usedPrefix, command }) => {
    let nya = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=${command}`
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/video|audio/.test(mime)) {
		let buffer = await q.download()
		await m.reply('_In progress, please wait..._')
		let { status, metadata } = await acr.identify(buffer)
		if (status.code !== 0) throw status.msg 
		let { title, artists, album, genres, release_date } = metadata.music[0]
		let txt = `*• Title:* ${title}${artists ? `\n*• Artists:* ${artists.map(v => v.name).join(', ')}` : ''}`
		txt += `${album ? `\n*• Album:* ${album.name}` : ''}${genres ? `\n*• Genres:* ${genres.map(v => v.name).join(', ')}` : ''}\n`
		txt += `*• Release Date:* ${release_date}`
        conn.sendMessage(m.chat, { text: txt.trim(), }, { quoted: m })
		// m.reply(txt.trim())
	} else throw `Reply audio/video with command ${usedPrefix + command}`
}
handler.help = ['whatmusic']
handler.tags = ['tools']
handler.command = /^(whatmusic)$/i
handler.register = true
handler.limit = true

module.exports = handler
