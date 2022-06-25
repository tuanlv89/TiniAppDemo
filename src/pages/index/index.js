Page({
  data: {
    meme: []
  },
  onLoad(query) {
    my.request({
      url: "https://api.imgflip.com/get_memes",
      success: (response) => {
        this.setData({meme: response.data.memes.slice(0,10)})
        console.log(this.data.meme)
      }
    })
  },
  onReady() {
  },
  onShow() {
  },
  onHide() {
  },
  onUnload() {
  },
  onTap(event) {
    const {memeInfo, index} = event.target.dataset;
    console.log(memeInfo, index);
    const meme = JSON.stringify(memeInfo)
    my.navigateTo({ url: `pages/meme-detail/index?meme=${meme}&index=${index}` });
  }
});