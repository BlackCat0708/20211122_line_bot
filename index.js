// 讀取 .env 變數
import 'dotenv/config'
// 引用 linebot 套件
import linebot from 'linebot'

import './data.js'
import name from './commands/name.js'
import mark from './commands/mark.js'
import map from './commands/map.js'

// 設定機器人
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})

bot.on('message', async (event) => {
  if (event.message.type === 'text') {
    if (event.message.text.startsWith('@查資訊 ')) {
      name(event)
    } else if (event.message.text.startsWith('@查標章 ')) {
      mark(event)
    } else if (event.message.text === '@指令') {
      event.reply(`《 👓閱讀功能指令📑 》
請輸入「@指令」
      
《 🔎查詢商家是否擁有認證標章🏵 》
請輸入「@查標章 （商家名稱）」
例如：@查標章 幸福食堂
      
《 🔎查詢認證商家的詳細資訊🍽 》
請輸入「@查資訊 （商家名稱）」
例如：@查資訊 幸福食堂
      
《 🔎查詢附近的認證商家🗺 》
請使用手機版LINE，點選下方選單左邊箭頭裡的「＋」號，接著點選「位置資訊」，並按下右上方的「分享」，即可查詢`)
    }
  } else if (event.message.type === 'location') {
    map(event)
  }
})
