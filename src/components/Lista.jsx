import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


function Lista(props) {
    return (
        <List component="nav">
        {
            props.lista.map( jogo => (
            <ListItem button onClick={() => props.onListSelect(jogo)}>
                <ListItemText primary={jogo.name}  />
            </ListItem>
            ))
        }
        </List>
    );
}

export default Lista;