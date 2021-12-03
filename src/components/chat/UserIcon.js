import './UserIcon.css'

import React from 'react'

class UserIcon extends React.Component {
    constructor(props) {
        super(props);
        const sex = props.sex;
        const sprites = sex === 'M' ? 'male' : sex === 'F' ? 'female' : 'human';
        this.state = {
            sprites: sprites,
        }
    }

    getSeed() {
        const seed = 'xxxxxxxx' + this.props.username
        return seed;
    }

    getUrl() {
        const seed = this.getSeed();
        const sprites = this.state.sprites;
        return `url(https://avatars.dicebear.com/api/${sprites}/${seed}.svg?background=%23ffffff)`
    }

    render() {
        return <div id="icon-" style={{ backgroundImage: this.getUrl() }}></div>
    }
}

export default UserIcon;