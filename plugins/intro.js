const { bot } = require('../utils'); // Plugins Manager Handles Plugins
var surl = 'https://github.com/wasixd/WASI-MD' // Source URL
const number = '923135673658'
var name = ' 𝕎𝔸𝕊𝕀 𝕋𝔼ℂℍ'
var body = '𝑇𝛩𝑈𝐶𝛨 𝛨𝛯𝑅𝛯'
var image = 'https://telegra.ph/file/2c30fa9e6f61ef8ba03a2.jpg'
let text = `╭═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄
│       「 𝐖𝐀𝐒𝐈 𝐓𝐄𝐂𝐇 𝐈𝐍𝐓𝐑𝐎  」
│ Name      : 𝐖𝐀𝐒𝐈 
│ Place       : 𝐈𝐒𝐋𝐀𝐌𝐀𝐁𝐀𝐃, 𝐏𝐀𝐊𝐈𝐒𝐓𝐀𝐍
│ Gender    :  𝐌𝐀𝐋𝐄
│ Age          : 20
│ education : 𝐁𝐒 𝐒𝐄 
│ good vibes : 𝐒𝐓𝐀𝐘 𝐂𝐋𝐀𝐌
│ Phone     : wa.me/923135673658
│ Youtube   : youtube.com/@wasitech1
│ GitHub    : https://github.com/Itxxwasi 

╰═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄`





 //---------------------------------------------------------------------------
 bot({
             pattern: "intro",
             alias: ["wasi","waso"],
             desc: "Show intro of user",
             category: "tool",
             filename: __filename,
             use: '<group link.>',
         },
         async(message) => {
    try{
          let media ;try{ media = await imageBuffer(image) }catch{media = log0}
           const q =await message.bot.fakeMessage("contact",{},name) 
           let contextInfo = {...(await message.bot.contextInfo(name,body,media,1,surl, 2) )}
           await message.send(text, {contextInfo : contextInfo },"wasi",  q )
    }catch(e){ await message.error(`${e}\n\ncommand: intro`,e,false)}


 })
