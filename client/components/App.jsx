import React from "react";
import AddItem from "./AddItem";
const App = () => {
  return (
    <div className="container">
      <div className="row text">
        <h1>App heading </h1>
      </div>
      <div className="row">
        <div className="col-6">
          <select className="margin">
            <option value="berr mug">Beer Mugs</option>
            <option value="champagne flutes">Champagne Flutes</option>
            <option value="red wine glasses">Red Wine Glasses</option>
          </select>
          <button>Stock on hand</button>
          <br />
          <br />
          <br />
          <select className="margin">
            <option value="berr mug">Beer Mugs</option>
            <option value="champagne flutes">Champagne Flutes</option>
            <option value="red wine glasses">Red Wine Glasses</option>
          </select>
          <button>Add Stock</button>
          <br />
          <br />
          <br />
          <select className="margin">
            <option value="beer mug">Beer Mugs</option>
            <option value="champagne flutes">Champagne Flutes</option>
            <option value="red wine glasses">Red Wine Glasses</option>
          </select>
          <button>Delete Stock</button>
        </div>
        <div className="col-6">
          <table>
            <tr>
              <td />
              <td align="middle">
                <button>Add new item</button>
              </td>
            </tr>
            <br />
          </table>
          <AddItem />
        </div>
      </div>
    </div>
  );
};

export default App;
