import { data } from '../data.js'
import flex from '../template/mark_flex.js'

export default async (event) => {
  const name = event.message.text.replace('@查標章 ', '')
  try {
    for (const info of data) {
      flex.contents.body.contents[2].contents[0].contents[0].contents[0].text = info.market_name
      flex.contents.body.contents[2].contents[0].contents[1].contents[0].contents[1].text = info.badge_code
      flex.contents.body.contents[2].contents[0].contents[2].contents[0].contents[1].text = info.ValidDate
      if (info.market_name === name) {
        event.reply(flex)
        return
      }
    }
    event.reply('商家未申請')
  } catch (error) {
    console.log(error)
    event.reply('發生錯誤')
  }
}
