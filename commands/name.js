import { data } from '../data.js'
import flex from '../template/info_flex.js'

export default async (event) => {
  const name = event.message.text.replace('@查資訊 ', '')
  try {
    for (const info of data) {
      if (info.market_name === name) {
        flex.contents.body.contents[0].text = `${info.market_name}`
        flex.contents.body.contents[1].contents[0].text = `${info.context}`
        flex.contents.body.contents[2].contents[0].contents[1].text = `${info.addr}`
        flex.contents.body.contents[2].contents[1].contents[1].text = `${info.business_week}`
        flex.contents.body.contents[2].contents[2].contents[1].text = `${info.business_hours}～${info.business_hurs_end}`
        flex.contents.body.contents[2].contents[3].contents[1].text = `${info.badge_code}`

        const message = [flex, {
          type: 'location',
          title: info.market_name,
          address: info.addr,
          latitude: info.Latitude,
          longitude: info.Lontitude
        }]

        event.reply(message)
        return
      }
    }
    event.reply('商家未申請')
  } catch (error) {
    console.log(error)
    event.reply('發生錯誤')
  }
}
