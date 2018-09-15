import React, { Component } from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import HomePage from './Pages/HomePage/HomePage'
import CreatePage from './Pages/CreatePage/CreatePage'
import ProfilePage from "./Pages/ProfilePage/ProfilePage";

import './App.css';
import { Switch, Route } from 'react-router-dom'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};


class App extends Component {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    getChallengesFromCookie() {
        return cookies.get('challenges') || [];
    }

    setChallengesCookie(challenges) {
        cookies.set('challenges', challenges);
    }

    constructor(props) {
        super(props);

        const cookies = props.cookies;

        // Load the active challenges or initialise with empty list.
        this.state = {
            challenges: this.getChallengesFromCookie()
        };
    }

    // Handler that is called when a challenge link is opened.
    addChallenge(challenge) {
        const cookies = this.props.cookies;

        var challenges = this.getChallengesFromCookie();
        challenges.push(challenge);

        this.setState({
            challenges: challenges
        });
        this.setChallengesCookie(challenges);
    }

    state = {
        left: false
    };

    toggleDrawer = (open) => () => {
        this.setState({
            left: open,
        });
    };

    render() {
        const classes = this.props.classes;

        return (
            <div>
                <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer(false)}
                        onKeyDown={this.toggleDrawer(false)}
                    >
                        Side Menu here
                    </div>
                </Drawer>

                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} onClick={this.toggleDrawer(true)} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.grow}>
                            Challenge Your
                        </Typography>
                        <Button color="inherit">+</Button>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route
                        path='/home'
                        render={( props ) => <HomePage {...props} />}
                    />
                    <Route
                        path='/create'
                        render={( props ) => <CreatePage {...props} />}
                    />
                    <Route
                        path='/profile'
                        render={( props ) => <ProfilePage {...props} />}
                    />
                </Switch>
            </div>
        );
    }
}

export default withStyles(styles)(App);
