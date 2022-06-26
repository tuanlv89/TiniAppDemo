Page({
  data: {
    fixedHeader: false
  },
  onPageScroll(event) {
    this.setData({ fixedHeader: event.scrollTop > 20 });
  },
  onTapCart() {
    console.log('onTapCart');
  }
});