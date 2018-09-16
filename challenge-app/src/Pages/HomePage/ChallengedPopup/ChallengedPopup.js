import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class ChallengedPopup extends Component {

    state = {
        open: true
    }

    handleClickOpen = () => {
        this.setState( { open: true } );
    };

    handleClose = () => {
        this.setState( { open: false } );
    };

    handleAdd = () => {
        this.props.addChallenge({
            title: 'Only vegan food for a week!',
            img: 'vegan',
            author: 'D',
            date: new Date( 'December 17, 1995 03:24:00' ),
            description: 'Hey Valentin! Try the vegan way for a week. Youll be surprised!'
        })
        this.setState( { open: false } );
    }


    render() {

        return <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            maxWidth={'md'}
            fullWidth={true}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Hey Valentin!"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    I have tried eating no meat for one whole week.. and I made it! Now it is your turn, give it a try
                    :)
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                    Decline
                </Button>
                <Button onClick={this.handleAdd} color="primary" autoFocus>
                    Accept
                </Button>
            </DialogActions>
        </Dialog>
    }
}

export default ChallengedPopup