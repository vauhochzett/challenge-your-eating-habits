import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarButton from './../StarButton'
// Images
import drink_water from '../../../img/drink_water-r.jpg';
import empty_coke from '../../../img/empty_coke-r.jpg';
import fleeing_chickenwings from '../../../img/fleeing_chickenwings-r.jpg';
import grilled_crickets from '../../../img/grilled_crickets-r.jpg';
import lentil_bolognese from '../../../img/lentil_bolognese-r.jpg';
import meat from '../../../img/meat-r.jpg';
import rabbit from '../../../img/rabbit_meat-r.jpg';
import tofu from '../../../img/tofu-r.jpg';
import vegan from '../../../img/vegan-r.jpg';
import pork from '../../../img/pork-r.jpg';



const styles = theme => ( {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
} );


const tileData = [
    {
        img: drink_water,
        title: 'Drink only water for one day.',
        author: 'author',
        featured: true,
    },
    {
        img: empty_coke,
        title: "No soda for one day",
        author: 'author',
        featured: false,
    },
    {
        img: fleeing_chickenwings,
        title: 'One week without meat.',
        author: 'author',
        featured: false,
    },
    {
        img: grilled_crickets,
        title: 'One meal consisting of insects.',
        author: 'author',
        featured: false,
    },
    {
        img: lentil_bolognese,
        title: 'Substitute vegetable for meat for one meal.',
        author: 'author',
        featured: false,
    },
    {
        img: meat,
        title: 'Substitute vegetable for meat for one meal.',
        author: 'author',
        featured: true,
    },
    {
        img: vegan,
        title: 'Vegan for a week',
        author: 'author',
        featured: false,
    },
    {
        img: tofu,
        title: 'One dish with tofu!',
        author: 'author',
        featured: false,
    },
    {
        img: rabbit,
        title: 'Try rabbit instead of beef',
        author: 'author',
        featured: false,
    },
    {
        img: pork,
        title: 'Pork No More!',
        author: 'author',
        featured: false,
    }
];

function PublicChallengeComponent( props ) {
    const { classes } = props;

    return (
        <div className={ classes.root }>
            <GridList cellHeight={ 200 } spacing={ 1 }>
                { tileData.map(tile => (
                    <GridListTile key={ tile.img } cols={ tile.featured ? 2 : 1 } rows={ tile.featured ? 2 : 1 }>
                        <img src={ tile.img } alt={ tile.title }/>
                        <GridListTileBar
                            title={ tile.title }
                            titlePosition="top"
                            actionIcon={
                                <StarButton color={"white"}/>
                            }
                            actionPosition="left"
                            className={ classes.titleBar }
                        />
                    </GridListTile>
                )) }
            </GridList>
        </div>
    );
}

PublicChallengeComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PublicChallengeComponent);