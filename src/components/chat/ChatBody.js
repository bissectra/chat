import './ChatBody.css';
import './../Menu.css';
import React from "react";
import LeftFrame from './LeftFrame';
import RightFrame from './RightFrame';
import Contact from './Contact';

class ChatBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            selected: -1,
        }
    }

    componentDidMount() {
        this.loadContacts();
    }

    loadContacts() {
        this.setState({
            contacts: [...Array(8).keys()].map(key => <Contact username={"user" + (key + 1)} />)
        })
    }

    render() {
        const rightFrameContact = this.state.selected !== -1 ?
            this.state.contacts[this.state.selected].props.username : '';
        return (
            <div className="main-chat">
                <div className="chat-header"></div>
                <div className="chat-frame">
                    <div className="left-frame">
                        <LeftFrame
                            contacts={this.state.contacts}
                            selected={this.state.selected}
                            selectContactHandler={(index) => this.setState({ selected: index })}
                        />
                    </div>
                    <div className="right-frame">
                        <RightFrame
                            contact={rightFrameContact}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatBody;
