import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import EditIcon from '@material-ui/icons/Edit';

import TemplateListItem from './../TemplateListItem'

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

const templateList = [
    {
        title: "no beef for a week",
        description: "Try to eat no beef for one whole week!",
        category: "ban"
    },
    {
        title: "try bolognese with lentils",
        description: "Substituting the meat in bolognese with lentils can save plenty of resources!",
        category: "sub"
    },
    {
        title: "no chicken for a week",
        description: "Try shifting to eating more vegetables! I can do wonders :)",
        category: "ban"
    },
    {
        title: "eat an insect dish",
        description: 'Be a bit more adventurous! Do something crazy like this.',
        category: "new"
    }
]

function TemplateListComponent(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <ListItem button onClick={()=>props.setTemplate("","")}>
                <ListItemIcon>
                    <EditIcon />
                </ListItemIcon>
                <ListItemText primary="Create Custom Challenge!" />
            </ListItem>
            <Divider/>
            <List component="nav">
                {
                    templateList.map((template) => < TemplateListItem
                        setTemplate={()=>props.setTemplate(template.title, template.description)} template={template}/>)
                }

            </List>
            <Divider />
        </div>
    );
}

TemplateListComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemplateListComponent);