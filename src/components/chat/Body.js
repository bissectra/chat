import './Body.css'
import RightFrame from './rightframe/RightFrame';
import LeftFrame from './leftframe/LeftFrame';
import React from "react";

class Body extends React.Component {
    constructor(props) {
        super(props)
        /* this.state = { 'page': props.initialPage } */
    }

    render() {
        return(
            <div className="wrapper">
                <div className="main-chat">
                    <div className="chat-frame">
                        <div className="left-frame">
                            <LeftFrame/>
                        </div>
                        <div className="right-frame">
                            <RightFrame/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;
