import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';

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

        return (
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                className={classes.stickToBottom}
            >
                <BottomNavigationAction onClick={() => this.props.toggleView(true)} label="My C" icon={<PersonIcon />} />
                <BottomNavigationAction onClick={() => this.props.toggleView(false)} label="Public" icon={<PeopleIcon />} />
            </BottomNavigation>
        );
    }
}

BottomNavComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNavComponent);