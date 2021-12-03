export default {
  type: 'flex',
  altText: '標章',
  contents: {
    type: 'bubble',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'image',
          size: 'full',
          aspectMode: 'cover',
          aspectRatio: '1:1',
          gravity: 'center',
          url: 'https://s.yimg.com/os/creatr-uploaded-images/2020-12/53ca6ac0-49a8-11eb-9fff-5634fa713685',
          offsetTop: 'none',
          offsetBottom: 'none',
          offsetStart: 'none',
          offsetEnd: 'none'
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [],
          position: 'absolute',
          width: '100%',
          height: '50%',
          offsetBottom: '0px',
          offsetStart: '0px',
          offsetEnd: '0px',
          background: {
            type: 'linearGradient',
            angle: '0deg',
            startColor: '#0d3e20',
            endColor: '#0d3e2000'
          }
        },
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'box',
                  layout: 'horizontal',
                  contents: [
                    {
                      type: 'text',
                      text: '商家名',
                      size: 'xl',
                      color: '#ffffff',
                      weight: 'bold'
                    }
                  ]
                },
                {
                  type: 'box',
                  layout: 'horizontal',
                  contents: [
                    {
                      type: 'box',
                      layout: 'baseline',
                      contents: [
                        {
                          type: 'text',
                          text: '編號',
                          color: '#dbaf3f',
                          size: 'md',
                          flex: 2
                        },
                        {
                          type: 'text',
                          text: 'D000000',
                          color: '#ffffff',
                          decoration: 'none',
                          size: 'sm',
                          flex: 5
                        }
                      ],
                      flex: 1,
                      spacing: 'lg'
                    }
                  ],
                  flex: 10
                },
                {
                  type: 'box',
                  layout: 'horizontal',
                  contents: [
                    {
                      type: 'box',
                      layout: 'baseline',
                      contents: [
                        {
                          type: 'text',
                          text: '有效期限',
                          color: '#dbaf3f',
                          size: 'md',
                          flex: 2
                        },
                        {
                          type: 'text',
                          text: '2000/00/00 00:00:00',
                          color: '#ffffff',
                          decoration: 'none',
                          size: 'sm',
                          flex: 5
                        }
                      ],
                      flex: 12,
                      spacing: 'lg'
                    }
                  ]
                }
              ],
              spacing: 'xs'
            }
          ],
          position: 'absolute',
          offsetBottom: '0px',
          offsetStart: '0px',
          offsetEnd: '0px',
          paddingAll: '20px'
        }
      ],
      paddingAll: '0px'
    }
  }

}
