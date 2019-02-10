import React from "react";
import AddItem from "./AddItem";
import { getItemDetails } from "../api/index";

class SelectItem extends React.Component {
  constructor() {
    super();
    this.stockOnHand = this.stockOnHand.bind(this);
    this.addStock = this.addStock.bind(this);
    this.deleteStock = this.deleteStock.bind(this);
  }

  stockOnHand() {
    getItemDetails(event.target.value).then(stock => (
      <div>{window.alert("Stock on hand is " + stock[0].stock_on_hand)}</div>
    ));
  }
  addStock() {
    return <div>{prompt("Please enter quantity", "Example: 500")}</div>;
  }

  deleteStock() {
    return <div>{prompt("Please enter quantity", "Example: 50")}</div>;
  }

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <select className="margin">
            <option value="beer mug">Beer Mugs</option>
            <option value="champagne flutes">Champagne Flutes</option>
            <option value="red wine glasses">Red Wine Glasses</option>
          </select>
          <button value="test 3" onClick={this.stockOnHand}>
            Stock on hand
          </button>
          <br />
          <br />
          <br />
          <select className="margin">
            <option value="berr mug">Beer Mugs</option>
            <option value="champagne flutes">Champagne Flutes</option>
            <option value="red wine glasses">Red Wine Glasses</option>
          </select>
          <button onClick={this.addStock}>Add Stock</button>
          <br />
          <br />
          <br />
          <select className="margin">
            <option value="beer mug">Beer Mugs</option>
            <option value="champagne flutes">Champagne Flutes</option>
            <option value="red wine glasses">Red Wine Glasses</option>
          </select>
          <button onClick={this.deleteStock}>Delete Stock</button>
        </div>

        <div className="col-6">
          <AddItem />
        </div>
      </div>
    );
  }
}
export default SelectItem;
