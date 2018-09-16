import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ShareIcon from '@material-ui/icons/ShareRounded'



class SharePopup extends Component {

    state = {
        open: false
    }

    handleClickOpen = () => {
        this.setState( { open: true } );
    };

    handleClose = () => {
        this.setState( { open: false } );
    };

    render() {

        return <div>
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                maxWidth={'md'}
                fullWidth={true}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Share!"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">

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

            <Button variant="fab" color="primary" aria-label="Add" onClick={this.handleClickOpen}>
                <ShareIcon/>
            </Button>
        </div>
    }
}

export default SharePopup