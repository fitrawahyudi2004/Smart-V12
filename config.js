
// - Ubah nomor owner dan wm di sini.
// + Daftar apikey terlebih dahulu sebelum menggunakan svript ini link
  // https://api.botcahx.live
//https://api.lannn.me
// - Jika sudah mendaftar salin key yang ada di profie dan paste di global.btc
// - Contoh global.btc = 'xzRhejka'
// global.lann = 'trial'
// - Jika sudah maka lanjutkan untuk mengubah nomor owner dan wm.
//let wibh = moment.tz('Asia/Jakarta').format('HH')


global.owner = ['6281262166032']  
global.mods = ['6281262166032'] 
global.prems = ['6281262166032']
global.nameowner = 'Fitra Wahyudi'
global.nomorown = '6281262166032' 
global.mail = 'fitrawahyudi739@gmail.com' 
global.dana = '6281262166032'
global.pulsa = '6281262166032'
global.gopay = '6281262166032'
global.namebot = 'Smart Bot V12'
global.sig = 'https://instagram.com/fitra_wahyudi_'
global.gc = 'https://chat.whatsapp.com/Hvkzf6lLjLRHjtd67G1gfL'
global.web = 'https://github.com/fitrawahyudi2004'
global.instagram = 'https://instagram.com/fitra_wahyudi_'
global.wm = '© FWD'
global.versi = '12.1.1'
global.watermark = wm
global.wm2 = '⫹⫺ FWD'
global.wm3 = '© FWD'
global.wm4 = '© BotWa'
global.wait = '_*Tunggu sebentar sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.lahir = '20 November 2004'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = 'Bot WhatsApp'
global.alpiskey = '8ecfc216' //daftar sendiri jika key habis https://alpis.eu.org

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = '❏═┅═━–〈' //top
global.dmenub = '┊•' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer

// COMMAND MENU
global.dashmenu = '┅━━━━━═┅═❏ *SMART BOT* ❏═┅═━━━━━┅'
global.cmenut = '❏––––––『'                       //top
global.cmenuh = '』––––––'                        //header
global.cmenub = '┊✦ '                            //body
global.cmenuf = '┗━═┅═━––––––๑\n'                //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ' //after
global.pmenus = '┊'                              //pembatas menu selector
global.thumb = 'https://i.postimg.cc/4NqQNHBk/3.jpg'
global.fsizedoc = '99999999999999'
global.fpagedoc = '999'
global.dpdf = 'application/pdf'
global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO FREE ON MENU.JS
global.htjava = '⫹⫺'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
// Api Key
global.zenz = 'zenzkey_5ecc47890c'
global.weatherApi = 'ef2d2c6864f04dd196d201850232805'
global.lolkey = 'fitra_wahyudi_'
global.btc = 'fitra_wahyudi_' //Daftar terlebih dahulu https://api.botcahx.live
global.lann = 'trial' //Note Key Ini Hanya Bertahan Selama 4 Day Sejak Config.js update! lebih baik register di https://api.lannn.me
global.APIs = { 
  zen: 'https://api.zahwazein.xyz',
  tio: 'https://api.botcahx.live',
  alpis: 'https://alpis.eu.org',
  lol: 'https://api.lolhuman.xyz'
}
global.APIKeys = { 
  'https://api.zahwazein.xyz': 'zenzkey_5ecc47890c',
  'http://api.weatherapi.com':'ef2d2c6864f04dd196d201850232805',
  'https://api.botcahx.live': 'fitra_wahyudi_',
  'https://api.lolhuman.xyz': 'fitra_wahyudi_' //isi apikey mu https://api.botcahx.live
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
