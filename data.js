import axios from 'axios'
import schedule from 'node-schedule'

// 資料陣列
export let data = []

// 更新資料的function
const getData = () => {
  axios.get('https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=tR9TIFWlvquB')
    .then(response => {
      data = response.data
      console.log('資料更新成功')
    })
}

// 機器人啟動時先更新資料
getData()

// 設定排定每小時更新
schedule.scheduleJob(' 0 * * * * ', getData)
