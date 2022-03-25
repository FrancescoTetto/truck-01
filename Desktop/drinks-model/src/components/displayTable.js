import React from "react";
class DisplayTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.callAPI = this.callAPI.bind(this);
    this.callAPI();
  }
  callAPI() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    let tb_data = this.state.list.map((item) => {
      return (
        <tr key={item.idDrink}>
          <td>{item.strDrink}</td>
          <td>{item.strCategory}</td>
          <td>{item.strTags}</td>
          <td>{item.strInstructions}</td>
          <td>
            <button className='btn btn-danger'>Remove</button>
          </td>
        </tr>
      );
    });
    return (
      <div className='container'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Drink Name</th>
              <th>Category</th>
              <th>Tags</th>
              <th>Intructions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{tb_data}</tbody>
        </table>
      </div>
    );
  }
}

export default DisplayTable;
