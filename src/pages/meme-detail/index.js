import query from "query-string"

Page({
    timeOut: null,
    data: {
         meme: null,
         index: 0,
         loading: true
    },
    onLoad(options) {
        this.setData({...this.props})
        const {index, meme} = query.parse(options);
        timeOut = setTimeout(() => {
            this.setData({
                index,
                 meme: JSON.parse(meme),
                 loading: false
                })
        }, 2000)
    },
    onUnload() {
        clearTimeout(timeOut)
    },
    onTap() {
        my.navigateTo({url: 'pages/header-animation/index'})
    }
})