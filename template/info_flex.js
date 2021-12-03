export default {
  type: 'flex',
  altText: '商家資訊',
  contents: {
    type: 'bubble',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: '商家名',
          weight: 'bold',
          size: 'xxl',
          color: '#0d3e20',
          style: 'normal',
          decoration: 'none',
          margin: 'none'
        },
        {
          type: 'box',
          layout: 'baseline',
          spacing: 'none',
          contents: [
            {
              type: 'text',
              text: '描述',
              wrap: true,
              size: 'sm',
              color: '#826326',
              margin: 'none',
              align: 'start',
              offsetBottom: 'none',
              offsetEnd: 'none',
              decoration: 'none',
              style: 'normal',
              weight: 'regular'
            }
          ],
          position: 'relative',
          margin: 'none',
          borderWidth: 'none',
          cornerRadius: 'none',
          paddingAll: 'none',
          offsetTop: 'none'
        },
        {
          type: 'box',
          layout: 'vertical',
          margin: 'sm',
          spacing: 'xs',
          contents: [
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: '場所地址',
                  color: '#dbaf3f',
                  size: 'sm',
                  flex: 2
                },
                {
                  type: 'text',
                  text: '地址',
                  wrap: true,
                  size: 'sm',
                  flex: 5,
                  color: '#826326'
                }
              ],
              position: 'relative',
              margin: 'none',
              borderWidth: 'none',
              cornerRadius: 'none'
            },
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: '營業日',
                  color: '#dbaf3f',
                  size: 'sm',
                  flex: 2
                },
                {
                  type: 'text',
                  text: '星期',
                  wrap: true,
                  size: 'sm',
                  flex: 5,
                  color: '#826326'
                }
              ],
              position: 'relative',
              margin: 'none',
              borderWidth: 'none',
              cornerRadius: 'none'
            },
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  color: '#dbaf3f',
                  size: 'sm',
                  flex: 2,
                  text: '營業時間'
                },
                {
                  type: 'text',
                  text: '00:00',
                  wrap: true,
                  size: 'sm',
                  flex: 5,
                  color: '#826326'
                }
              ],
              position: 'relative',
              margin: 'none',
              borderWidth: 'none',
              cornerRadius: 'none'
            },
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  color: '#dbaf3f',
                  size: 'sm',
                  flex: 2,
                  text: '標章編號'
                },
                {
                  type: 'text',
                  text: 'B000000',
                  wrap: true,
                  size: 'sm',
                  flex: 5,
                  color: '#826326'
                }
              ],
              position: 'relative',
              margin: 'none',
              borderWidth: 'none',
              cornerRadius: 'none'
            }
          ],
          paddingAll: 'sm',
          borderWidth: 'none'
        }
      ]
    },
    footer: {
      type: 'box',
      layout: 'vertical',
      spacing: 'sm',
      contents: [
        {
          type: 'spacer',
          size: 'sm'
        }
      ],
      flex: 0
    }
  }

}
