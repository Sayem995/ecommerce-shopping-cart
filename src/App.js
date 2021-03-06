import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products";

class App extends Component {
  constructor(props){
    super(props);
    this.state = { products:[], filteredProducts: [], }
  }
 render() {
  return (
    <div className="container">
    <h1>Ecommerce Shopping Cart Application</h1>
    <hr/>
    <div className="row">
      <div className="col-md-8">
        <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart}/>
      </div>
      <div className="col-md-4">

      </div>
     </div>

     </div>
  );
 }
}

export default App;
