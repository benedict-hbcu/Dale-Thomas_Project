import React, { Component } from 'react'


export default class Bible extends Component {
    render() {
        return(
            <div style = {{padding: 24}} className='bg-warning shadow-1-strong' >
                <h1> The Bible</h1>
                <div align="left" class="bg-warning" >
                    <h5> <b>What is the Bible?</b></h5>
                    <h5><b>Why should We Trust the Bible?</b></h5>
                    <h5> <b>How to Access the Bible</b></h5>
                </div>
            </div>
        )
    }
}