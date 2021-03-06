/**
* @Author: Tran Van Nhut <nhutdev>
* @Date:   2017-02-18T13:24:37+07:00
* @Email:  tranvannhut4495@gmail.com
* @Last modified by:   root
* @Last modified time: 2017-03-09T16:54:33+07:00
*/

import React, { Component } from 'react';

import HomeListProduct from './home-list-product';

//map props
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../../../actions/index';
import ReactBase from 'react-base';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataCategoryGroup: []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.loadingPage.loadingProductByCategory) {
      if (this.props.categoryGroup.length > 0) {
        this.setState({
          dataCategoryGroup: this.props.categoryGroup
        })
      }
    }
  }

  componentWillMount() {
    if (this.props.categoryGroup.length > 0 && !this.props.menuCategory.loadedListProductHome) {
      let listCategoryId = [];
      this.props.categoryGroup.forEach(e => {
        if (e.showPageHome) {
          listCategoryId.push(e.id);
        }
      });
      this.props.actions.getProductByCategoryGroup(listCategoryId.join(','), this.props.categoryGroup, this.props.loadingPage, this.props.menuCategory);
    } else {
      this.setState({
        dataCategoryGroup: this.props.categoryGroup
      })
    }

  }

  render() {
    let listHomeProduct = [],
      dataCategoryGroup = this.state.dataCategoryGroup
    if (dataCategoryGroup.length > 0) {
      dataCategoryGroup.forEach((e, i) => {
        if (e.products
            ? e.products.length > 0
            : false) {
          listHomeProduct.push(<HomeListProduct key={ i } dataItemCategory={ e } />);
        }
      })
    }

    if (listHomeProduct.length === 0) {
      listHomeProduct.push(
        <div key='0'>Loading Body</div>
      );
    }

    return (
      <div className="container main">
        { listHomeProduct }
      </div>
    )
  }

}

let mapRedux = new ReactBase.helpers.mapRedux({
  actions: actions,
  bindActionCreators: bindActionCreators
});

export default connect(mapRedux.mapStateToProps, mapRedux.mapDispatchToProps)(Home);
