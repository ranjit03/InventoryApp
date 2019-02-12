import React from "react";

class AddItem extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      name: null,
      description: null,
      dimensions: null,
      supplier: null,
      retail_price: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.additem = this.addItem.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeDimension = this.handleChangeDimension.bind(this);
    this.handleChangeSupplier = this.handleChangeSupplier.bind(this);
    this.handleChangeRetailPrice = this.handleChangeRetailPrice.bind(this);
  }

  handleClick() {
    this.setState({ isVisible: true });
  }

  handleClickButton() {
    console.log(event.target.value);
  }

  handleChangeName() {
    this.setState({
      name: event.target.value
    });
  }
  handleChangeDescription() {
    this.setState({
      description: event.target.value
    });
  }
  handleChangeDimension() {
    this.setState({
      dimensions: event.target.value
    });
  }
  handleChangeSupplier() {
    this.setState({
      supplier: event.target.value
    });
  }
  handleChangeRetailPrice() {
    this.setState({
      retail_price: event.target.value
    });
  }

  addItem() {
    return (
      <form>
        <table>
          <tr>
            <td align="right">Name:</td>
            <td align="left">
              <input type="text" name="name" onChange={this.handleChangeName} />
            </td>
          </tr>
          <tr>
            <td align="right">Description:</td>
            <td align="left">
              <input
                type="text"
                name="Description"
                onChange={this.handleChangeDescription}
              />
            </td>
          </tr>
          <tr>
            <td align="right">Dimension:</td>
            <td align="left">
              <input
                type="text"
                name="Dimension"
                onChange={this.handleChangeDimension}
              />
            </td>
          </tr>
          <tr>
            <td align="right">Supplier:</td>
            <td align="left">
              <input
                type="text"
                name="Supplier"
                onChange={this.handleChangeSupplier}
              />
            </td>
          </tr>
          <tr>
            <td align="right"> Retail Price:</td>
            <td align="left">
              <input
                type="text"
                name=" Retail Price"
                onChange={this.handleChangeRetailPrice}
              />
            </td>
          </tr>
          <br />
          <tr>
            <td />
            <td align="middle">
              <button
                type="button"
                value={Object.values(this.state)}
                onClick={this.handleClickButton}
              >
                submit
              </button>
            </td>
          </tr>
        </table>
      </form>
    );
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Add new item</button>
        {this.state.isVisible && this.addItem()}
      </div>
    );
  }
}

export default AddItem;
