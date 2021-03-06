/**
 * @Author: Tran Van Nhut <nhutdev>
 * @Date:   2016-10-17T13:49:49+07:00
 * @Email:  tranvannhut4495@gmail.com
* @Last modified by:   nhutdev
* @Last modified time: 2017-03-06T11:11:18+07:00
 */

const type = require('../../const/redux-actions');
let menuCategoryActions = {
  setShowMenuCategory: (data) => {
    return {
      type: type.showMenuCategory,
      data: data
    }
  },
  setLoadedListProductHome: (data) => {
    return {
      type: type.setLoadedListProductHome,
      data: data
    }
  }
};

export default menuCategoryActions;
