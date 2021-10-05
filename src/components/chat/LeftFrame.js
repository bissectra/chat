import './LeftFrame.css'
import React from "react";
import UserIcon from './UserIcon';
import Contacts from './Contacts';
import Menu from '../Menu';
import Input from '../Input';

class LeftFrame extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
            contacts: props.contacts,
            selected: props.selected,
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        nextState.contacts = nextProps.contacts;
        nextState.selected = nextProps.selected;
        return true;
    }

    render() {
        return (
            <div>
                <div className="left-header">
                    <UserIcon sex={'NB'} username={"test123"} />
                    <Menu color={'primary'} />
                </div>
                <Input />
                <Contacts className="contacts" contacts={this.state.contacts} selected={this.state.selected} />
            </div>
        )
    }
}

export default LeftFrame;

