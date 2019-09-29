// components/articleList/cmp.js
import { IndexModel } from '../../models/index.js';
let indexModel = new IndexModel();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList:{
      type:Array,
      value:[],
      observer(){
      }
    },
    more:{
      type:String,
      value:'',
      observer:'loadMore'
    },
    magazineId: {
      type: Number,
      value:0,
      observer:'hasMoreData'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    noMoreData: false,//不再加载更多数据
    loading:false//加载一个锁
  },

  /**
   * 组件的方法列表
   */
  methods: {
    loadMore () {
      if(this._isLock() || this.data.noMoreData){//检查是否锁住
        return
      }
      this._loadLock();//锁住
      const magazineId = this.data.magazineId;
      const start = this.data.articleList.length;
      indexModel.getArticleList(magazineId,start).then( res=>{
        this.setMoreData(res)
        this._unLoadLock();//开锁
      })
    },
    _isLock(){//加载锁
      return this.data.loading
    },
    _loadLock(){//调用锁
      this.setData({
        loading : true
      })
    },
    _unLoadLock() {//启用锁
      this.setData({
        loading : false
      })
    },
    hasMoreData(){
      this.setData({
        noMoreData: false
      })
    },
    setMoreData(list){
      const newRes = list.data.data;
      const combineList = this.data.articleList.concat(newRes);
      //加入判断，数据已满，不再发送请求
      if (combineList.length == this.data.articleList.length){
        this.setData({
          noMoreData:true
        })
        return 
      }
      this.setData({
        articleList: combineList,
      })
    }
  }
})
