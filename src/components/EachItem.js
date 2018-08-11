import React, { Component } from 'react';


class eachItem extends Component{
  addProductto(id,product){
    this.props.onAdd(id,product);
  //  this.props.takethisProduct(this.props.product);
//  console.log(id);
  }

  render() {
    //console.log(this.props);
    const imageUrl = this.props.product.thumbnailUrl;
    return (

      <div className="">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s4">
              <img src={imageUrl} alt="" className="circle responsive-img" />
            </div>
            <div className="col s10">
              <span className="black-text">
                {this.props.product.title}
              </span>
                <br />
              <span>
               Price: $90
              </span>
              <br />
                <span>
              <button className="btn" onClick={this.addProductto.bind(this,this.props.product.id,this.props.product) } > Suggest this </button>
              </span>
            </div>
          </div>
        </div>
      </div>



    );
  }
}

export default eachItem;
