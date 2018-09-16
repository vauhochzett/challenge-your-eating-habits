import React, { Component } from 'react'
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

class StarButton extends Component {

    state = {
        starred: false
    }

    toggleStar = ()=>{
        const star = this.state.starred
        this.setState({
            starred: !star
        })
    }

    render() {

        return <IconButton style={{color: this.props.color}} onClick={this.toggleStar}>
            {this.state.starred ? <StarIcon/> : <StarBorderIcon/>}
        </IconButton>
    }

}

export default StarButton