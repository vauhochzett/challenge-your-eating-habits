import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';

import NextIcon from '@material-ui/icons/NavigateNext'
import BackIcon from '@material-ui/icons/NavigateBefore'


const styles = {
    root: {
        width: 500,
    },
    stickToBottom: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)'
    },
};

class BottomNavComponent extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        const backStyle = this.props.step > 0 ? {color: '#3f51b5'} : {pointerEvents: 'none', color: 'gray'}
        const nextStyle = this.props.step < 2 ? {color: '#3f51b5'} : {pointerEvents: 'none', color: 'gray'}

        return (
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                className={classes.stickToBottom}
            >
                <BottomNavigationAction style={backStyle} onClick={this.props.back} label="Back" icon={<BackIcon />} />
                <BottomNavigationAction style={nextStyle} onClick={this.props.next} label="Next" icon={<NextIcon />} />
            </BottomNavigation>
        );
    }
}

BottomNavComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNavComponent);