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
import Button from "@material-ui/core/es/Button/Button";
import Menu from "@material-ui/core/es/Menu/Menu";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";

// Images
import grilled_crickets from '../../../img/grilled_crickets-r.jpg';
import meat from '../../../img/meat-r.jpg';
import lentil_bolognese from '../../../img/lentil_bolognese-r.jpg';

const imgs = {
    'grilled_crickets': grilled_crickets,
    'meat': meat,
    'lentil_bolognese': lentil_bolognese
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
} );

class MyChallengeComponent extends React.Component {

    constructor( props ) {
        super(props);

        this.state = {
            anchorEl: null,
            visible: true,
        };
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes, challenge } = this.props;
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const { anchorEl } = this.state;

        const handleDismiss = function () {
            challenge.visible = false;
        };

        const handleFinish = function () {
            throw Error("Not implemented");
        };

        challenge.visible = true;

        return (
            <div>
                { challenge.visible ? (
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
                            <IconButton aria-label="Add to favorites">
                                <BookmarkIcon/>
                            </IconButton>
                            <IconButton aria-label="Share">
                                <ShareIcon/>
                            </IconButton>
                        </CardActions>

                        <Menu
                            id="simple-menu"
                            anchorEl={ anchorEl }
                            open={ Boolean(anchorEl) }
                            onClose={ this.handleClose }
                        >
                            <MenuItem onClick={ handleDismiss }>Dismiss</MenuItem>
                            <MenuItem onClick={ handleFinish }>Finish</MenuItem>
                        </Menu>

                    </Card>
                ) : null
                }
            </div>
        )

    }

}

MyChallengeComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyChallengeComponent);