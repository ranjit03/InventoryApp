import React from "react";

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
            <option value="berr mug">Beer Mugs</option>
            <option value="champagne flutes">Champagne Flutes</option>
            <option value="red wine glasses">Red Wine Glasses</option>
          </select>
          <button>Delete Stock</button>
        </div>
        <div className="col-6">
          <form>
            <table>
              <tr>
                <td />
                <td align="middle">
                  <button>Add new item</button>
                </td>
              </tr>
              <br />
              <tr>
                <td align="right">Name:</td>
                <td align="left">
                  <input type="text" name="name" />
                </td>
              </tr>
              <tr>
                <td align="right">Description:</td>
                <td align="left">
                  <input type="text" name="Description" />
                </td>
              </tr>
              <tr>
                <td align="right">Dimension:</td>
                <td align="left">
                  <input type="text" name="Dimension" />
                </td>
              </tr>
              <tr>
                <td align="right">Supplier:</td>
                <td align="left">
                  <input type="text" name="Supplier" />
                </td>
              </tr>
              <tr>
                <td align="right"> Retail Price:</td>
                <td align="left">
                  <input type="text" name=" Retail Price" />
                </td>
              </tr>
              <br />
              <tr>
                <td />
                <td align="middle">
                  <button type="submit">submit</button>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
