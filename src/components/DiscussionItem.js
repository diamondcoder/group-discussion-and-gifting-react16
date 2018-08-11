import React, { Component } from 'react';


class DiscussionItem extends Component{
  deleteThis(id,product){
    this.props.onDelete(id,product);
  //  this.props.takethisProduct(this.props.product);
//  console.log(id);
  }

  render() {
    //console.log(this.props);
    const imageUrl = this.props.product.thumbnailUrl;
    return (

      <div className="">
        <div className="card-panel grey lighten-5 z-depth-1">

 <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored cornerdeletebut" onClick={this.deleteThis.bind(this,this.props.product.id,this.props.product) }>
   <i className="material-icons">remove</i>
 </button>


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

              </span>




<div className="material-icons mdl-badge mdl-badge--overlap" data-badge="2">comment</div>
<div className="material-icons mdl-badge mdl-badge--overlap" data-badge="4">favorite</div>



            </div>
          </div>
        </div>
      </div>



    );
  }
}

export default DiscussionItem;
