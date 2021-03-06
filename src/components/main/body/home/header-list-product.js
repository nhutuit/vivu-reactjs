/**
* @Author: Tran Van Nhut <nhutdev>
* @Date:   2017-02-18T13:28:09+07:00
* @Email:  tranvannhut4495@gmail.com
* @Last modified by:   nhutdev
* @Last modified time: 2017-02-27T23:46:33+07:00
*/
import React, { Component } from 'react';
import { Link } from 'react-router';

class HeaderListProduct extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let itemCategory = [],
      dataCategoryGroup = this.props.dataItemCategory,
      dataCategory = dataCategoryGroup.categories;
    if (dataCategory.length > 0) {
      dataCategory.forEach(e => {
        itemCategory.push(
          <li key={ e.id }>
            <Link to={ `/${dataCategoryGroup.urlKey}/${e.urlKey}` }>
            { e.name }
            </Link>
          </li>
        )
      });
    } else if (dataCategory.length === 0) {
      itemCategory.push(
        <li key='0'>
          Loading
        </li>
      )
    }

    return (
      <div className="items_head">
        <h2 className="title">{ this.props.dataItemCategory.name }</h2>
        <ul className="items_head_menu">
          { itemCategory }
        </ul>
      </div>
    )
  }

}

export default HeaderListProduct;
