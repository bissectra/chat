import './menu.css'
import React from 'react'

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            color: props.color,
        }
    }

    menuIconClicked = (e) => {
        this.setState((state, props) => {
            return { active: !state.active }
        })
    }

    render() {
        return (
            <div
                className={"menu-icon" + (this.state.active ? ' active' : '') + (' ' + this.state.color)}
                onClick={this.menuIconClicked}
            >
                <div className="kebab">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </div>
        )
    }
}

export default Menu