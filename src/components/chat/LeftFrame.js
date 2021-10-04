import './LeftFrame.css'
import React from "react";
import UserIcon from './UserIcon';

class LeftFrame extends React.Component {
    menuIconClicked(e) {
        let mi = document.getElementById('menu-icon');
        mi.classList.toggle("active")
    }

    render() {
        return (
            <div>
                <div className="left-header">
                    <UserIcon />
                    <div id="menu-icon" className="menu-icon" onClick={this.menuIconClicked}>
                        <div className="kebab">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
                <div className="search-bar">
                    Barra de pesquisa
                </div>
                <div className="contacts">
                    Contatos
                </div>
            </div>
        )
    }
}

export default LeftFrame;

