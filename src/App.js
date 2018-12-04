import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import ItemList from './components/ItemList';
import Discussionlist from './components/Discussionlist';

class App extends Component {
constructor(){
  super();
  this.state={
    items:[],
    Leader:[],
    discItems:[],
    showItems: false

  }

}

componentWillMount(){
this.getdiscItems();
this.getItems();
}


getdiscItems(){
  this.setState(
    {discItems: [
      {id:55552, title:'Isaac McSey', thumbnailUrl:"http://placehold.it/150/24f355", Price:"35"}
    ]
    })

}
getItems(){
  $.ajax({
    url:"https://jsonplaceholder.typicode.com/photos",
    dataType:'json',
    cache:false,
    success:function(data){
      //console.log(data);
      this.setState({items:data});
    }.bind(this),
    error:function(xhr,status, err){
      console.log(err);
    }
  });

}

addProductHandler=(id,product)=>{
  //alert("are you sure you want to delete this?"+ id);
  let itemsn= this.state.items;
  let index = itemsn.findIndex(x=>x.id === id);
    console.log(index);

  itemsn.splice(index,1);
  this.setState({items:itemsn});
this.addToDiscussion(product);

}

addToDiscussion=(product)=>{
  let discItems= this.state.discItems;
  let newItem={id:product.id, title:product.title, thumbnailUrl:product.thumbnailUrl, Price:"50"};
  console.log(newItem);
  discItems.unshift(newItem);
  this.setState(discItems:discItems);

}

deleteThis=(id,product)=>{
  let discItems= this.state.discItems;
  let thisItem=discItems.findIndex(x=>x.id===id);

  discItems.splice(thisItem,1);
  this.setState(discItems:discItems);

}

toggleItem = () => {
const didShow = this .state.showItems;
this.setState({showItems: !didShow});


}

  render() {
    return (
      <div className="App">
      <div className="row"></div>

      <div className="row"> <h3> Group gifting discussion board </h3>

      <div className="divider"> </div>
</div>
<div className="row">
<div className="col s8"> <h6 className="blue-text text-darken-1"> Items suggested by the group for consideration </h6>
    <Discussionlist  products={this.state.discItems} onDelete={this.deleteThis} />

 </div>

<div className="col s4"> <h6 className="blue-text text-darken-1"> Recommended items </h6>
<button className="btn" onClick={this.toggleItem}>Toggle</button>
{ this.state.showItems ?
  <div>
  I am showing
  </div> : null
}
<br />
loading items
<ItemList products={this.state.items} onAdd={this.addProductHandler} />

 </div>

</div>

      </div>


    );
  }
}

export default App;
