import React from "react";
import AddItem from "./AddItem";
import {
  getItemDetails,
  addStockToInventory,
  deleteStockFromInventory
} from "../api/index";

class SelectItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null
    };
    this.stockOnHand = this.stockOnHand.bind(this);
    this.addStock = this.addStock.bind(this);
    this.deleteStock = this.deleteStock.bind(this);
    this.buttonValueUpdate = this.buttonValueUpdate.bind(this);
  }

  stockOnHand() {
    getItemDetails(event.target.value).then(stock => (
      <div>
        {window.alert(
          stock[0].name + " Stock on hand is " + stock[0].stock_on_hand
        )}
      </div>
    ));
  }
  addStock() {
    let qty = prompt("Please enter quantity", "Example: 500");
    addStockToInventory(event.target.value, qty);
  }

  deleteStock() {
    let qty = prompt("Please enter quantity", "Example :50");
    console.log(qty);
    deleteStockFromInventory(event.target.value, qty);
  }

  buttonValueUpdate(e) {
    return this.setState({ item: e.target.value });
  }

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <select className="margin" onChange={this.buttonValueUpdate}>
            <option value="test 1">Beer Mugs</option>
            <option value="test 2">Champagne Flutes</option>
            <option value="test 3">Red Wine Glasses</option>
          </select>
          <button value={this.state.item} onClick={this.stockOnHand}>
            Stock on hand
          </button>
          <br />
          <br />
          <br />
          <select className="margin" onChange={this.buttonValueUpdate}>
            <option value="test 1">Beer Mugs</option>
            <option value="test 2">Champagne Flutes</option>
            <option value="test 3">Red Wine Glasses</option>
          </select>
          <button value={this.state.item} onClick={this.addStock}>
            Add Stock
          </button>
          <br />
          <br />
          <br />
          <select className="margin" onChange={this.buttonValueUpdate}>
            <option value="test 1">Beer Mugs</option>
            <option value="test 2">Champagne Flutes</option>
            <option value="test 3">Red Wine Glasses</option>
          </select>
          <button value={this.state.item} onClick={this.deleteStock}>
            Delete Stock
          </button>
        </div>

        <div className="col-6">
          <AddItem />
        </div>
      </div>
    );
  }
}
export default SelectItem;
