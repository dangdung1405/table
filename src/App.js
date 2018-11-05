import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ListItem from './ListItem';
import en from './eng.json';
import vi from './vie.json';

class App extends Component {
  constructor(props) {
    super(props)
    console.log('constructor')
    this.state = {
      data: [],

      eng: this.convertData(en),
      vie: this.convertData(vi)
    }
  }


  getRenderTest() {
    let listTemp = [];
    let eng = this.state.eng
    let vie = this.state.vie
    const that = this;
    let count = 0;
    Object.keys(eng).forEach(function (key) {
      const val = eng[key];
      const valVi = vie[key];
      count++;
      const item = {
        no: count,
        key,
        eng: val,
        vie: valVi
      }
      listTemp.push(item);

    });

    that.setState({
      data: listTemp
    })
  }
  convertData(data) {
    let converted_data = {}
    data.map(obj => {
      converted_data[obj.key] = obj.val;
    });
    return converted_data;
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.getRenderTest();

  }
  render() {
    console.log('render')
    return (
      <div className="App" >
        <table id="customers">
          <tbody>
            <tr className='header'>
              <td>no</td>
              <td>key</td>
              <td>en</td>
              <td>vi</td>
            </tr>

            {this.state.data.map((obj, index) => {
              return <ListItem key={index} data={obj}></ListItem>
            })}


          </tbody>
        </table>
        {/* {this.renderTest()}
        <div onClick={this.handleOnClick}>click</div>
        <div>{this.state.numbers}</div> */}
      </div>
    );
  }
}

export default App;
