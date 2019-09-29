// components/article/cmp.js
import {LikeModel} from '../../models/like.js';
const likeModel = new LikeModel();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // type: Number
    articleDetail:Object
  },
  attached() {
    this.getLikeStatus()

    const articleDetail = this.data.articleDetail
    const artId = articleDetail.artId
    const likeStatus = likeModel.getLikeStatus(artId)

    this.setData({
      likeStatus
    })
  },
  /**
   * 组件的初始数据
   */
  data: {
    likeStatus: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(e){
      // console.log(e.detail);
      const like = e.detail.like;
      const articleDetail = this.properties.articleDetail;
      // console.log(articleDetail)
      const artId = articleDetail.artId;
      if(like){
        //缓存文章
        likeModel.addLikeList(articleDetail);
      }else{
        //从缓存里移除
        likeModel.removeLikeList(artId);
      }
    },
    getLikeStatus() {
      const articleDetail = this.data.articleDetail
      const artId = articleDetail.artId
      const likeStatus =  likeModel.getLikeStatus(artId)

      this.setData({
        likeStatus:true
      })

    }

  }
})
