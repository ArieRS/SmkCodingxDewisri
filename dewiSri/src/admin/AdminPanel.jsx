import React, { Component } from "react";
import { Admin } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const dataProvider =
  jsonServerProvider("https://jsonplaceholder.typicode.com");

class AdminPanel extends Component {
  render() {
    return (
      <Admin dataProvider={dataProvider} />
    );
  }
}
export default AdminPanel;