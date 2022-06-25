Component({
  props: {
    id: 0
  },
  data: {
    format: 0
  },
  didMount() {
    this.setData({format: this.props.id})
  }
})