import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Parser from 'html-react-parser';

function CreateTable(dimention){
  var htmlTable = "<div class='test'> Itzik's table! </div>"
  htmlTable += "<table>"
  for (var i = 1; i <= dimention; i++){
    htmlTable += "<tr>";
    for (var j = 1; j <= dimention; j++){
      htmlTable += "<td>" + j * i + "</td>"
    }
    htmlTable += "</tr>";
  }
  htmlTable += "</table>";
  return htmlTable;  
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {Parser(CreateTable(10))}
      </div>
    );
  }
}

class TableRow extends Component{
  render() {
    return (
      <td>
        `${this.props.rows && this.props.rows.map(function(item){
          for (let j = 1; j <= item; j++){
            {this.props.colIndex * j}        
          }
        })}`
      </td>
    );
  }
}

class TableCol extends Component{
  render() {
    return (
      <tr>
        `${this.props.cols && this.props.cols.map(function(item){
          for (let i = 1; i <= item; i++){
            <TableRow colIndex={i} rows="10"/>          
          }
        })}`
      </tr>
    );
  }
}

class Table extends Component {
  render() {
    return (
      <table style="width:100%">
      <TableCol cols="10"/>
      </table>
    );
  }
}

export default App;
