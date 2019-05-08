import React from 'react';
import TextField from '@material-ui/core/TextField'; 

function Form(props) {
    return (
        <form noValidate autoComplete="off" style={{padding: '30px'}}>
            <TextField
                fullWidth id="standard-name"
                label="Name" placeholder=" A"
                value={props.item.name}
                onChange={props.handleChanges('name')}
                margin="normal" 
                InputLabelProps={{ shrink: true }}/>

            <TextField
                fullWidth id="standard-realease"
                label="Release Date:" placeholder=" "
                value={props.item.release_date}
                onChange={props.handleChanges('release_date')}
                margin="normal" InputLabelProps={{ shrink: true }}/>

            <TextField
                fullWidth id="standard-publisher"
                label="Publisher:" placeholder=" "
                
                value={props.item.publisher}
                onChange={props.handleChanges('publisher')}
                margin="normal" 
                InputLabelProps={{ shrink: true }}/>

            <TextField
                fullWidth id="standard-platform"
                label="Platform:" placeholder=" "
                
                value={props.item.platform}
                onChange={props.handleChanges('platform')}
                margin="normal" InputLabelProps={{ shrink: true }}/>

            <TextField
                fullWidth id="standard-category"
                label="Category:" placeholder=" "
                
                value={props.item.category}
                onChange={props.handleChanges('category')}
                margin="normal" InputLabelProps={{ shrink: true }}/>
        </form>
    );
}

  
export default Form;