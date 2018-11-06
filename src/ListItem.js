import React, { Component } from 'react';

class ListItem extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         data: props.data || []
    //     }
    //     console.log('contructor')
    // }
    // componentWillReceiveProps(nextprops) {
    //     console.log(nextprops)
    //     console.log('componentWillReceiveProps')
    // }
    render() {
        console.log("THIS", this.props.data)
        const data = this.props.data
        // const key = this.props.key
        return (
            <div className='row'>

                {/* <th><img src={data.img} alt="Smiley face" width="42" height="42"/> </th> */}
                <div className="cellno">{data.no}</div>
                <div className="cell">{data.key}</div>
                <div className="cell">{data.eng}</div>
                <div className="cell">{data.vie}</div>
            </div>

        );
    }
}

export default ListItem;
