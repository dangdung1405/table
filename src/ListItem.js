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

        return (
            <div className='row'>
                
                {/* <th><img src={data.img} alt="Smiley face" width="42" height="42"/> </th> */}
                <th>{data.no}</th>
                <th>{data.key}</th>
                <th>{data.en}</th>
                <th>{data.vi}</th>
            </div>

        );
    }
}

export default ListItem;
