import './LeftFrame.css'
import React from "react";
import UserIcon from './UserIcon';
import Contacts from './Contacts';
import Menu from '../Menu';
import Input from '../Input';

class LeftFrame extends React.Component {
    render() {
        return (
            <div>
                <div className="left-header">
                    <UserIcon sex={'NB'} username={"<testuser>"} />
                    <Menu color={'primary'} />
                </div>
                <Input />
                <Contacts />
            </div>
        )
    }
}

export default LeftFrame;

