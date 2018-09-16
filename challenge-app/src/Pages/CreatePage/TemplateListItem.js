import React from 'react'
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/es/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";

import NewIcon from '@material-ui/icons/FiberNew';
import SubIcon from '@material-ui/icons/Cached';
import BanIcon from '@material-ui/icons/Error';




const tempItem = (props) => {

    let icon = null
    switch (props.template.category){
        case 'new': icon = <NewIcon/>;
            break;
        case 'ban': icon = <BanIcon/>;
            break;
        case 'sub': icon = <SubIcon/>;
            break
        default:
            icon = <SubIcon/>;

    }

    return ( <ListItem button onClick={props.setTemplate}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={props.template.title.toUpperCase()}/>
        </ListItem>
    )
}

export default tempItem