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
    const eng = this.convertData(en)
    const vie = this.convertData(vi)
    this.state = {
      data: [],

    }
  }


  getRenderTest() {
    let listTemp = [];
    let count = 0;
    // const listData = [];
    // for (let index = 0; index < en.length; index++) {
    //   const enVal = en[index];
    //   const objTemp = { key: enVal.key, eng: enVal.val }
    //   for (let i = 0; i < vi.length; i++) {
    //     const viVal = vi[i];
    //     if (enVal.key === viVal.key) {
    //       objTemp['vie'] = viVal.val
    //       listData.push(objTemp);
    //       break;
    //     }
    //   }
    // }




    Object.keys(this.eng).forEach(function (key) {
      const val = this.eng[key];
      const valVi = this.vie[key];
      count++;
      const item = {
        no: count,
        key,
        eng: val,
        vie: valVi
      }
      listTemp.push(item);

    });

    this.setState({
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
        <div className="table">

          <div className='row'>
            <div className="cell">no</div>
            <div className="cell">key</div>
            <div className="cell">en</div>
            <div className="cell">vi</div>
          </div>

          {this.state.data.map((obj, index) => {
            return <ListItem key={index} data={obj}></ListItem>
          })}
        </div>
      </div>

    );
  }
}

export default App;
