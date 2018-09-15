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
        transition: theme.transitions.create( 'transform', {
            duration: theme.transitions.duration.shortest,
        } ),
        marginLeft: 'auto',
        [ theme.breakpoints.up( 'sm' ) ]: {
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

    state = { expanded: false };

    handleExpandClick = () => {
        this.setState( state => ( { expanded: !state.expanded } ) );
    };

    render() {
        const { classes } = this.props;
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            {this.props.challenge.author}
                        </Avatar>
                    }
                    action={
                        <IconButton>
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title={this.props.challenge.title.toUpperCase()}
                    subheader={this.props.challenge.date.toLocaleDateString("en-US", options)}
                />
                <CardMedia
                    className={classes.media}
                    image="src/img/meat-r.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography component="p">
                        {this.props.challenge.description}
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                        <BookmarkIcon/>
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        )

    }

}

MyChallengeComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles( styles )( MyChallengeComponent );