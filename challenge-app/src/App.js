import React, { Component } from 'react';
import HomePage from './Pages/HomePage/HomePage'
import CreatePage from './Pages/CreatePage/CreatePage'

import './App.css';
import { Switch, Route, Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NatureIcon from '@material-ui/icons/NaturePeople';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

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

    // static propTypes = {
    //     cookies: instanceOf(Cookies).isRequired
    // };
    //
    // getChallengesFromCookie() {
    //     return cookies.get('challenges') || [];
    // }
    //
    // setChallengesCookie(challenges) {
    //     cookies.set('challenges', challenges);
    // }
    //
    // constructor(props) {
    //     super(props);
    //
    //     const { cookies } = props;
    //
    //     // Load the active challenges or initialise with empty list.
    //     this.state = {
    //         challenges: this.getChallengesFromCookie()
    //     };
    // }

    // Handler that is called when a challenge link is opened.
    // Cookies: \\\
    // addChallenge(challenge) {
    //     const { cookies } = this.props;
    //
    //     var challenges = this.getChallengesFromCookie();
    //     challenges.push(challenge);
    //
    //     this.setState({
    //         challenges: challenges
    //     });
    //     this.setChallengesCookie(challenges);
    // }

    state = {
        left: false
    };

    toggleDrawer = (open) => () => {
        this.setState({
            left: open,
        });
    };

    render() {
        const { classes } = this.props;
        // Cookies: const { challenges } = this.state;

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit" className={classes.grow}>
                            <NatureIcon style={{'margin-right': '10px'}}/>
                            Challenge Yourself
                        </Typography>
                        <Button color="inherit" href="/create"><NoteAddIcon></NoteAddIcon></Button>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route
                        path='/home/:id'
                        render={( props ) => <HomePage {...props} />}
                    />
                    <Route
                        path='/home'
                        render={( props ) => <HomePage {...props} />}
                    />
                    <Route
                        path='/create'
                        render={( props ) => <CreatePage {...props} />}
                    />
                </Switch>
            </div>
        );
    }
}

// With cookies: export default withStyles(styles)(withCookies(App));
export default withStyles(styles)(App);
