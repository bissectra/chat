import './Body.css'
import RightFrame from './RightFrame';
import LeftFrame from './LeftFrame';
import React from "react";

class Body extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="main-chat">
                    <div className="chat-frame">
                        <div className="left-frame">
                            <LeftFrame />
                        </div>
                        <div className="right-frame">
                            <RightFrame />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;
