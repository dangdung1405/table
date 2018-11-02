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
      en: null,
      vi: null,
      keyc: false,
      enc: false,
      vic: false,
      disabled: false

    }
    // this.keyfuntion = this.keyfuntion.bind(this)
    // this.vifuntion = this.vifuntion.bind(this)
    // this.handleOnClick = this.handleOnClick.bind(this)
  }

  checkVi(valVi) {

    if ((typeof valVi === 'string' || valVi instanceof String)) {
      if (this.enc) {
        return valVi
      } else {
        return ''
      }
    } else {
      return ''
    }
  }
  checkEn(val) {

    if ((typeof val === 'string' || val instanceof String)) {
      if (this.vic) {
        return val
      } else {
        return ''
      }
    } else {
      return ''
    }
  }
  checkkey(key) {
    if (this.keyc) {
      return key
    } else {
      return ''
    }
  }

  getRenderTest() {
    console.log('START GET DATA EN');
    const Url = 'https://dev1.equixapp.com/locales/en/translations.json'
    const that = this;

    axios.get(Url)
      .then(response => {
        // console.log('END GET DATA EN');
        let en = response.data

        // console.log('START GET DATA VI');
        const url = 'https://dev1.equixapp.com/locales/vi/translations.json'
        axios.get(url)
          .then(response => {
            // console.log('END GET DATA VI');
            let vi = response.data

            let listTemp = [];
            
            let count = 0;
            Object.keys(en).forEach(function (key) {
              const val = en[key];
              const valVi = vi[key];
              count++;
              const item = {
                no: count,
                key: that.checkkey(key),
                en: that.checkEn(val),
                vi: that.checkVi(valVi)
              }
              listTemp.push(item);
              // console.log(listTemp);
            });
            // console.log(listTemp, 57)
            // listTemp = [{ no: 1, key: "title", en: "Welcome to react using react-i18next", vi: "Chào mừng bạn đến trải nghiệm dùng react-i18next" }]
            that.setState({
              data: listTemp,
              keyc: !this.state.keyc,
              vic: !this.state.vic,
              enc: !this.state.enc

            })
            console.log(listTemp)


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
  // keyfuntion() {
  //   const Url = 'https://dev1.equixapp.com/locales/en/translations.json'

  //   axios.get(Url)
  //     .then(response => {
  //       let en = response.data
  //       const url = 'https://dev1.equixapp.com/locales/vi/translations.json'
  //       axios.get(url)
  //         .then(response => {

  //           let listTemp = [];
  //           const that = this;
  //           let count = 0;
  //           Object.keys(en).forEach(function (key) {
  //             count++;
  //             const item = {
  //               no: count,
  //               key,
  //               en: null,
  //               vi: null
  //             }
  //             listTemp.push(item);
  //           });

  //           that.setState({
  //             data: this.state.keyc ? listTemp : [],
  //             keyc: !this.state.keyc
  //           })
  //           console.log(listTemp)


  //         })
  //         .catch(err => {
  //           console.log(err)
  //         })
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })

  // }



  // vifuntion() {
  //   const Url = 'https://dev1.equixapp.com/locales/vi/translations.json'
  //   axios.get(Url)
  //     .then(response => {
  //       let vi = response.data

  //       let listTemp = [];
  //       const that = this;
  //       let count = 0;
  //       Object.keys(vi).forEach(function (key) {

  //         const valVi = vi[key];
  //         count++;
  //         const item = {
  //           no: count,
  //           key: null,
  //           en: null,
  //           vi: (typeof valVi === 'string' || valVi instanceof String) ? valVi : ''
  //         }
  //         listTemp.push(item);

  //       });

  //       that.setState({
  //         data: this.state.vic ? listTemp : [],
  //         vic: !this.state.vic
  //       })



  //     })
  // }
  // enfuntion() {
  //   const Url = 'https://dev1.equixapp.com/locales/vi/translations.json'
  //   axios.get(Url)
  //     .then(response => {
  //       this.enfuntionObj = response.data
  //       let en = response.data

  //       let listTemp = [];
  //       const that = this;
  //       let count = 0;
  //       Object.keys(en).forEach(function (key) {

  //         const val = en[key];
  //         count++;
  //         const item = {
  //           no: count,
  //           key: null,
  //           en: (typeof val === 'string' || val instanceof String) ? val : '',
  //           vi: null
  //         }
  //         listTemp.push(item);

  //       });

  //       that.setState({
  //         data: this.state.enc ? listTemp : [],
  //         enc: !this.state.enc
  //       })



  //     })
  // }
  // onoff() {
  //   this.setState({
  //     disabled: !this.state.disabled,
  //   })
  // }
  render() {
    console.log('render')
    return (
      <div className="App" >

        <input type="button" value="On" id="onoff" onClick={() => this.onoff}></input>
        <button className={this.state.keyc ? 'bt' : 'bt2'} onClick={() => this.getRenderTest()}>key</button>
        <button className={this.state.enc ? 'bt' : 'bt2'} onClick={() => this.getRenderTest()}>en</button>
        <button className={this.state.vic ? 'bt' : 'bt2'} onClick={() => this.getRenderTest()}>vi</button>


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
