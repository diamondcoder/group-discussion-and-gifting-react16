import React, { Component } from 'react';
import DiscussionItem from './DiscussionItem';

class Discussionlist extends Component {
  deleteThis(id,product){
    this.props.onDelete(id,product);
  }
  render() {
    let productitems;
    if(this.props.products){
    productitems = this.props.products.map(product=>{
        return(
          <DiscussionItem key={product.id} onDelete={this.deleteThis.bind(this)} product={product} />
    );
  });
    }

    //console.log(this.props);
    return (
      <div>
      {productitems}
      </div>
    );
  }
}

export default Discussionlist;
