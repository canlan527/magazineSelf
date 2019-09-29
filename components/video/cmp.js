// components/video/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src: String,
    poster: String,
    duration: String,
    mainTitle: String,
    videoId: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPoster:true
  },
  //使用生命周期函数，绑定_getUserInfo信息
  // attached(){
  //   this._getUserInfo();
  // },
  lifetimes : {
    attached(){
      this._getUserInfo();
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onPlay () {
      this._toggleVideoPoster();
      this.video.play();
    },
    onMaskTap () {
      this._toggleVideoPoster();
      this.video.seek(0);//从头播放
      this.video.stop();
    },
    onVideoEnd() {
      _toggleVideoPoster();//播放完成时显示poster
    },
    _toggleVideoPoster(){
      this.setData({
        showPoster: !this.data.showPoster
      })
    },//去耦合，加入私有方法
    _getUserInfo() {
      const id = this.properties.videoId;
      this.video = wx.createVideoContext(id, this);//创建video上下文对象
    }
    
  }
})
