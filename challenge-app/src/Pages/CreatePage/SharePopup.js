import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ShareIcon from '@material-ui/icons/ShareRounded'
import {FaWhatsapp} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaSnapchat} from 'react-icons/fa';
import {FaSkype} from 'react-icons/fa';





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
                <DialogContent onClick={this.handleClose}>
                    <DialogContentText id="alert-dialog-description">
                        <FaWhatsapp size={'2em'}/>
                        <FaFacebook size={'2em'}/>
                        <FaInstagram size={'2em'}/>
                        <FaSnapchat size={'2em'}/>
                        <FaSkype size={'2em'}/>

                    </DialogContentText>
                </DialogContent>
            </Dialog>

            <Button variant="fab" color="primary" aria-label="Add" onClick={this.handleClickOpen}>
                <ShareIcon/>
            </Button>
        </div>
    }
}

export default SharePopup