import './UserIcon.css'
import hashCode from '../../utils/hash';

import React from 'react'

class UserIcon extends React.Component {
    constructor(props) {
        super(props);
        const sex = props.sex;
        const sprites = sex === 'M' ? 'male' : sex === 'F' ? 'female' : 'human';
        this.state = {
            sprites: sprites,
            seed: String(Math.abs(hashCode(props.username))),
        }
    }

    componentDidMount() {
        this.loadIcon();
    }

    loadIcon() {
        const seed = this.state.seed;
        let icon = document.getElementById('icon-' + seed);
        const sprites = this.state.sprites;
        const url = `url(https://avatars.dicebear.com/api/${sprites}/${seed}.svg?background=%23ffffff)`
        icon.style.backgroundImage = url;
    }

    render() {
        const seed = this.state.seed
        return (
            <div id={"icon-" + seed}></div>
        )
    }
}

export default UserIcon;