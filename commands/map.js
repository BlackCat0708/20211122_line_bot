import { data } from '../data.js'

export default async (event) => {
  const userLat = event.message.latitude
  const userLon = event.message.longitude
  try {
    const results = []

    for (const info of data) {
      const shopLat = info.Latitude
      const shopLon = info.Lontitude
      // console.log(userLat, userLon, shopLat, shopLon)
      const distance = (userLat, userLon, shopLat, shopLon) => {
        if ((userLat === shopLat) && (userLon === shopLon)) {
          return 0
        } else {
          const radlat1 = Math.PI * userLat / 180
          const radlat2 = Math.PI * shopLat / 180
          const theta = userLon - shopLon
          const radtheta = Math.PI * theta / 180
          let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
          if (dist > 1) {
            dist = 1
          }
          dist = Math.acos(dist)
          dist = dist * 180 / Math.PI
          dist = dist * 60 * 1.1515
          // if (unit == 'K') { dist = dist * 1.609344 }
          // if (unit == 'N') { dist = dist * 0.8684 }
          // console.log(dist)
          return dist
        }
      }

      // console.log(distance(userLat, userLon, shopLat, shopLon), name)

      if (distance(userLat, userLon, shopLat, shopLon) <= 0.5) {
        const message = {
          type: 'location',
          title: `${info.market_name}(${info.type})`,
          address: info.addr,
          latitude: info.Latitude,
          longitude: info.Lontitude
        }
        results.push(message)
        if (results.length >= 5) {
          break
        }
      }
    }

    if (results.length > 0) {
      event.reply(results)
    } else {
      event.reply('附近沒有相關商家')
    }
  } catch (error) {
    event.reply('錯誤')
  }
}
