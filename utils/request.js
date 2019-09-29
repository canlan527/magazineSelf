class Request {
  baseUrl = 'http://api.duyiedu.com/zazhi/QM_magazine';
  getData({url, method = 'GET', data = {}}){
    const promise = new Promise((resolve,reject)=>{
      wx.request({
        url: this.baseUrl + url,
        method:method,
        data:data,
        success: res => {
          if(res.data.code == 0){
            resolve(res);
          }else{
            this._showError();
          }
        },
        fail: rej => {
          // console.log(rej);
          reject();
          this._showError();
        }
      })
    })
    return promise;
  }
  _showError() {
    wx.showToast({
      title: '请求错误',
      icon: 'none'
    });
  }
}
//导出
export {Request}