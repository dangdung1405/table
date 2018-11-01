import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ListItem from './ListItem'
// import en from './data/eng.json';
// import vi from './data/vie.json';

class App extends Component {
  constructor(props) {

    super(props)
    console.log('constructor')
    this.state = {
      data: [],
      en: { a: 1 },
      vi: null,
      changed: false


    }
    this.keyfuntion = this.keyfuntion.bind(this)
    // this.handleOnClick = this.handleOnClick.bind(this)
  }

  getRenderTest() {
    console.log('START GET DATA EN');
    const Url = 'https://dev1.equixapp.com/locales/en/translations.json'
    const abc = {}

    axios.get(Url)
      .then(response => {
        // console.log('END GET DATA EN');
        let en = response.data
        abc.en = en;
        // console.log('START GET DATA VI');
        const url = 'https://dev1.equixapp.com/locales/vi/translations.json'
        axios.get(url)
          .then(response => {
            // console.log('END GET DATA VI');
            let vi = response.data
            abc.vi = vi;
            let listTemp = [];
            const that = this;
            let count = 0;
            Object.keys(en).forEach(function (key) {
              const val = en[key];
              const valVi = vi[key];
              count++;
              const item = {
                no: count,
                key,
                en: (typeof val === 'string' || val instanceof String) ? val : '',
                vi: (typeof valVi === 'string' || valVi instanceof String) ? valVi : ''
              }
              listTemp.push(item);
              // console.log(listTemp);
            });
            // console.log(listTemp, 57)
            // listTemp = [{ no: 1, key: "title", en: "Welcome to react using react-i18next", vi: "Chào mừng bạn đến trải nghiệm dùng react-i18next" }]
            that.setState({
              data: listTemp
            })


          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(error => {
        console.log(error)
      })

    // console.log('END FUNCTION');
  }


  componentDidMount() {
    console.log('componentDidMount')
    // this.getRenderTest()
  }
  keyfuntion() {
    // Handle change color en button
    this.setState({
      changed: !this.state.changed
    
    })
    console.log('123')
    // Get data back from API
  }


  render() {
    console.log('render')
    return (
      <div className="App" >

        <button className={this.state.changed ? 'bt' : 'bt2'} onClick={() => this.keyfuntion()}>key</button>

        <button className='bt' onclick={this.vifuntion}>vi</button>

        <button className='bt' onclick={this.enfuntion}>en</button>

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
