//进行数据的请求
import {Request} from '../utils/request.js';
class IndexModel extends Request{
  //请求文章列表
  getArticleList (magazineId=0, start=0) {
    return this.getData({
      url:`/getIndexArticleList/${magazineId}/${start}.json`
    })
  }
  //请求关注页面
  getMarkList(magazineId=0) {
    return this.getData({
      url:`/getMarkTypeList/${magazineId}.json`
    })
  }
  //请求推荐页面
  getRecommendInfo(magazineId=0){
    return this.getData({
      url:`/getRecommendInfo/${magazineId}.json`
    })
  }
}
export {IndexModel};