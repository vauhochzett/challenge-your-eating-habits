import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from "@material-ui/core/es/Menu/Menu";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";

// Dialog
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Images
import grilled_crickets from '../../../img/grilled_crickets-r.jpg';
import meat from '../../../img/meat-r.jpg';
import lentil_bolognese from '../../../img/lentil_bolognese-r.jpg';
import vegan from '../../../img/vegan-r.jpg'
import StarButton from "../StarButton";

const imgs = {
    'grilled_crickets': grilled_crickets,
    'meat': meat,
    'lentil_bolognese': lentil_bolognese,
    'vegan': vegan
};

const styles = theme => ( {
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [ theme.breakpoints.up('sm') ]: {
            marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[ 500 ],
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
} );

class MyChallengeComponent extends React.Component {

    constructor( props ) {
        super(props);

        this.state = {
            anchorEl: null,
            visible: true,
            showFinishDialog: false,
            fileUploaded: false
        };
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
    };

    handleDismiss = () => {
        this.setState({ visible: false });
    };

    handleFinish = () => {
        this.setState({ showFinishDialog: true });
    };

    hideFinishDialog = () => {
        this.setState({ showFinishDialog: false });
    };

    handleFinishDialogShare = () => {
        // Dismiss dialog and challenge
        this.setState({ visible: false, showFinishDialog: false });
    };

    activateFileUploaded = () => {
        this.setState({ fileUploaded: true });
    };

    render() {
        const { classes, challenge } = this.props;
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const { anchorEl } = this.state;

        return (
            <div>
                { this.state.visible ? (
                    <div>
                        <Card className={ classes.card }>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="Recipe" className={ classes.avatar }>
                                        { challenge.author }
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-owns={ anchorEl ? 'simple-menu' : null }
                                                aria-haspopup="true"
                                                onClick={ this.handleClick }>
                                        <MoreVertIcon/>
                                    </IconButton>
                                }
                                title={ challenge.title.toUpperCase() }
                                subheader={ challenge.date.toLocaleDateString("en-US", options) }
                            />
                            <CardMedia
                                className={ classes.media }
                                image={ imgs[ challenge.img ] }
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography component="p">
                                    { challenge.description }
                                </Typography>
                            </CardContent>
                            <CardActions className={ classes.actions } disableActionSpacing>
                                <StarButton color={'#757575'}/>
                                <IconButton aria-label="Share">
                                    <ShareIcon/>
                                </IconButton>
                            </CardActions>

                            <Menu
                                id="simple-menu"
                                anchorEl={ anchorEl }
                                open={ Boolean(anchorEl) }
                                onClose={ this.handleMenuClose }
                            >
                                <MenuItem onClick={ this.handleDismiss }>Dismiss</MenuItem>
                                <MenuItem onClick={ this.handleFinish }>Finish</MenuItem>
                            </Menu>

                        </Card>
                        <Dialog
                            open={ this.state.showFinishDialog }
                            onClose={ this.hideFinishDialog }
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">{ "Finish challenge" }</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Add a proof that you completed the challenge!
                                </DialogContentText>
                                <input
                                    accept="image/*"
                                    className={ classes.input }
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    onChange={ this.activateFileUploaded }
                                />
                                { this.state.fileUploaded ? (
                                    <div>
                                        <i>Image added</i>
                                    </div>
                                ) : (
                                    <div>
                                        <label htmlFor="contained-button-file">
                                            <Button variant="contained" component="span" className={ classes.button }>
                                                Upload
                                            </Button>
                                        </label>
                                    </div>
                                ) }
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={ this.hideFinishDialog } color="primary">Cancel</Button>
                                <Button
                                    onClick={ this.handleFinishDialogShare }
                                    disabled={ !this.state.fileUploaded }
                                    color="primary"
                                >
                                    Share
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                ) : null }
            </div>
        )

    }

}

MyChallengeComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyChallengeComponent);
