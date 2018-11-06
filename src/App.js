import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
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
    let count = 0;
    let eng = this.state.eng
    let vie = this.state.vie
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
            <div className="cellhdno">no</div>
            <div className="cellhd">key</div>
            <div className="cellhd">en</div>
            <div className="cellhd">vi</div>
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
