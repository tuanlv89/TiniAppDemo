import { $page } from 'redux-miniprogram-bindings';
import query from "query-string"
import { decrement, increment } from '../../store/actions/counter';



$page({
  mapState: ['counter'],
  mapDispatch: {
    increase: increment,
    decrease: decrement,
  },
})({
    timeOut: null,
    data: {
         meme: null,
         index: 0,
         loading: true
    },
    onLoad(options) {
        console.log("dependent", this.data)
        this.setData({...this.props})
        const {index, meme} = query.parse(options);
        timeOut = setTimeout(() => {
            this.setData({
                index,
                meme: JSON.parse(meme),
                loading: false
            })
        }, 2000);
    },
    onUnload() {
        clearTimeout(timeOut)
    },
    onTap() {
        my.navigateTo({url: 'pages/header-animation/index'})
    },
    onIncrease() {
        this.increase(10)
    },
    onDecrease() {
        this.decrease(5)
    },

})
