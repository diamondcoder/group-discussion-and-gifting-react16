import React, { Component } from 'react';
import EachItem from './EachItem';

class Itemlist extends Component {
  addProductto(id,product){
    this.props.onAdd(id,product);
  //  console.log(id)
  }
  render() {
    let productitems;
    if(this.props.products){
    productitems = this.props.products.map(product=>{
        return(
          <EachItem key={product.id} onAdd={this.addProductto.bind(this)}   product={product} />
    );
  });
    }

    //console.log(this.props);
    return (
      <div className="">
      {productitems}
      </div>
    );
  }
}

export default Itemlist;
