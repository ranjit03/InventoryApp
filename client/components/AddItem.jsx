import React from "react";

class AddItem extends React.Component {
  render() {
    return (
      <form>
        <table>
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
    );
  }
}

export default AddItem;
