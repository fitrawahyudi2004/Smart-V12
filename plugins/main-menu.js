const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
process.env.TZ = 'Asia/Jakarta'
let fs = require('fs')
let os = require('os')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let levelling = require('../lib/levelling')


let tags = {
  'main': 'FEATURE UTAMA',
  'ai': 'FEATURE AI', 
  'story': 'FEATURE STORY',
  'admin': 'ADMIN FEATURE',
  'owner': 'FEATURE OWNER',
  'downloader': 'FEATURE DOWNLOADER',
  'sticker': 'FEATURE CONVERT',
  'xp': 'FEATURE XP',
  'game': 'FEATURE GAME',
  'random': 'FEATURE RANDOM',
  'islam': 'ISLAMIC FEATURE',
  'fun': 'FEATURE FUN',
  'lacak': 'LACAK PAKET',
  'github': 'FEATURE GITHUB',
  'group': 'FEATURE GROUP',
  'info': 'FEATURE INFO',
  'internet': 'INTERNET',
  'anon': 'ANONYMOUS',
  'kerang': 'FEATURE KERANG',
  'maker': 'FEATURE MAKER',
  'Pengubah Suara': 'PENGUBAH SUARA',
  'premium': 'PREMIUM FEATURE',
  'quotes' : 'FEATURE QUOTES',
  'rpg': 'FEATURE RPG',
  'stalk': 'FEATURE STALK',
  'shortlink': 'SHORT LINK',
  'tools': 'FEATURE TOOLS',
}
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")

const ultah = new Date('November 19 2023 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
const idulFitri = new Date('April 8 2024 23:59:59')
    const sekirit = new Date().getTime() 
    const Kurangg = idulFitri - sekirit
    const oohari = Math.floor( Kurangg / (1000 * 60 * 60 * 24));
    const oojam = Math.floor( Kurangg % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const oonet = Math.floor( Kurangg % (1000 * 60 * 60) / (1000 * 60))
    const odetek = Math.floor( Kurangg % (1000 * 60) / 1000)
const ramadhan = new Date('Maret 9 2024 23:59:59')
    const sekiritt = new Date().getTime() 
    const oKurangg = ramadhan - sekiritt
    const ooohari = Math.floor( oKurangg / (1000 * 60 * 60 * 24));
    const ooojam = Math.floor( oKurangg % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const ooonet = Math.floor( oKurangg % (1000 * 60 * 60) / (1000 * 60))
    const oodetek = Math.floor( oKurangg % (1000 * 60) / 1000)
    const owners = global.nameowner
    const nameBot = global.namebot
let handler = async (m, { conn, command , args ,usedPrefix: _p }) => {
      try {
        let teks = `${args[0]}`.toLowerCase()
      let usrs = db.data.users[m.sender]   
  
const defaultMenu = {
  before: `
 ┌–––––––––––––––––✥
 │「 Hai Kak👋 」
 └┬❖ 「 ${conn.getName(m.sender)} 」
 ┌┤❀  Bagaimana Harimu? 😄
 ┊│❀  Jangan Pernah Menyerah
 │└────────────┈ ⳹
 ┊   「 *U S E R  I N F O 克* 」
 ┊ ◉ *Name :* ${usrs.registered ? usrs.name : conn.getName(m.sender)}
 ┊ ◉ *Tags :* %name 
 ┊ ◉ *Status :* ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
 ┊ ◉ *Premium :* %prems
 ┊ ◉ *Level :* %level (%exp / %maxexp) %xp4levelup
 ┊ ◉ *Total Xp :* %totalexp XP
 ┊ ◉ *Limit :* %limit / day
 ┊ ◉ *Role :* %role
 ┗–––––––––––––––––✥
 ┌–––––––––––––––––✥
 ┊   「 *B O T  I N F O 克* 」
 ┊ ◉ *Name :* ${nameBot}
 ┊ ◉ *Mode :* %mode
 ┊ ◉ *Uptime :* %uptime 
 ┊ ◉ *Library :* Baileys Multi Device
 ┊ ◉ *Version :* %versi
 ┊ ◉ *Prefix Used :* *[ %p ]*
 ┊ ◉ *Database :* %rtotalreg dari %totalreg 
 ┊ ◉ *Memory Used :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
 ┊ ◉ *OS Platform :* ${os.platform()}
 ┊ ◉ *Battery:* ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
 ┗––––––––––––––––––✥
 ┌–––––––––––––––––✥
 ┊   「 *T I M E I N F O 克* 」
 ┊ ◉ *Tanggal :* %date
 ┊ ◉ *Tanggal Islam:* %dateIslamic
 ┊ ◉ *Hari :* %week 
 ┊ ◉ *Weton :* %weton
 ┊ ◉ *WIB   :* %time
 ┊ ◉ *WITA :* ${wita}
 ┊ ◉ *WIT   :* ${wit}
 ┗––––––––––––––––––✥│
 ┌––––––––––––––––––✥
 ┊   「 *I N F O  C M D 克* 」
 ┊ ◉ *Ⓟ* = Premium
 ┊ ◉ *Ⓛ* = Limit
 ┗––––––––––––––––––✥
 ┌––––––––––––––––––✥
 ┊ ◉ *ᴇxᴘɪʀᴇᴅ ᴘʀᴇᴍɪᴜᴍ:*
 ┊${clockStringP(usrs.premiumTime - new Date())} : ''}
 ┗––––––––––––––––––✥
`.trimStart(),
  header: '%cc %category %c1',
  body: '%c2 %cmd %islimit %isPremium',
  footer: '%c3',
  after: `
  Expired Premium :
  ${clockStringP(usrs.premiumTime - new Date())} : ''}

  ╭──〔  THANKS TO  〕─⬣
⫹⫺ Allah SWT
⫹⫺ Orang Tua
⫹⫺ Kesabaran
⫹⫺ Penyemangat
⫹⫺ Ijol Doorsmeer
⫹⫺ Pak Kurin
╰─────────────⬣
%c4\n*Powered by %wm3*`,
}

    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let mode = global.opts['self'] ? 'Private' : 'Publik'
    let d = new Date(new Date + 3600000)
    let lahir = global.lahir
    let names = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)   
   
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Yes': 'No'}`
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let versi = global.versi
    let noOwn = global.nomorown
    // DEFAULT MENU
    let dash = global.dashmenu
    let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2
      
      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua
      
      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      // WM
      let wm3 = global.wm3
    const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }

      	

    let ucpn = `${ucapan()}`
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Ⓛ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      ucapan: ucapan(),
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, versi, lahir, mode, prems, ucpn, dash, wm3, noOwn, m1, m2, m3, m4, cc, c1, c2, c3, c4, lprem, llim, names, name, weton, week, date, dateIslamic, wib, wit, wita, prems, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    //await conn.sendFile(m.chat, 'https://s5.ttsmaker.com/file/2023-05-30-002445_130879.mp3', m )
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
conn.sendMessage(m.chat, {
text: text,
contextInfo: {
externalAdReply: {
title: date,
body: 'bodynya',
thumbnailUrl: `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=${command}`,
sourceUrl: "https://chat.whatsapp.com/DMeVfGz9QkLCDVHlmCLdai",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
      const ftroli = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 9999999999999,
                            status: 1,
                            surface : 1,
                            message: wm,
                            orderTitle: 'MENU',
                            thumbnail: await (await fetch('https://telegra.ph/file/f4063ab3071f5c4af765a.png')).buffer(),
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
// await conn.sendFile(m.chat, await (await fetch(fla + command)).buffer(), 'menu.jpg', text.trim(), m)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(all|open)(feature)$/i

handler.exp = 20
handler.register = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
        const hour_now = moment.tz('Asia/Jakarta').format('HH')
        var ucapanWaktu = 'Pagi'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Pagi'
        } else if (hour_now >= '10' && hour_now <= '15') {
          ucapanWaktu = 'Siang'
        } else if (hour_now >= '15' && hour_now <= '17') {
          ucapanWaktu = 'Sore'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Selamat Petang'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Malam'
        } else {
          ucapanWaktu = 'Selamat Malam'
        }	
        return ucapanWaktu
}