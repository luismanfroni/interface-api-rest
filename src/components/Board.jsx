import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Lista from './Lista.jsx';
import Form from './Form.jsx';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      selected: {}
    };
    this.loadData();
    this.onNewData();
  }

  loadData = () => axios.get('https://protected-shelf-19067.herokuapp.com/games/')
    .then(response => this.setState({listData: response.data}));

  onNewData = () => this.setState({
    selected: { 
      'id': 0,
      'name': '',
      'release_date': '',
      'publisher': '',
      'platform': '',
      'category': ''
    }
  });
  
  onListSelect = (data) => this.setState({
    selected: data
  });

  onItemSave = () => {
    console.log(this.state.selected);
    if(this.state.selected.id == 0)
      axios.post('https://protected-shelf-19067.herokuapp.com/games', {...this.state.selected}).then( () =>
      {
        console.log('post to api successful');
        this.onNewData();
        this.loadData();
      }
      ).catch((e) =>
        console.log('post to api unsuccessful!!!', e)
      );
    else
      axios.put('https://protected-shelf-19067.herokuapp.com/games/' + this.state.selected.id.toString(), this.state.selected).then( () =>
      {
        console.log('put to api successful');
        this.onNewData();
        this.loadData();
      }
      ).catch((e) =>
        console.log('put to api unsuccessful!!!', e)
      );    
  };

  onItemDelete = () => {
    if(this.state.selected.id == 0) return;

    axios.delete('https://protected-shelf-19067.herokuapp.com/games/' + this.state.selected.id.toString()).then( () =>
    {
      console.log('delete to api successful');
      this.onNewData();
      this.loadData();
    }  
    ).catch((e) =>
      console.log('delete to api unsuccessful!!!')
    );
  }
  
  handleChanges = name => event => {
    this.setState({ selected: { ...this.state.selected, [name]: event.target.value }});
  };

  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={5}>  
            <Paper>
              <Lista lista={ this.state.listData } onListSelect={ this.onListSelect }></Lista>
            </Paper>
          </Grid>
          <Grid item xs={7}>
            <Paper>
              <Form item={ this.state.selected } 
                onSave={ this.onItemSave } handleChanges={ this.handleChanges }></Form>

              <Button variant="contained" color="primary" style={{marginLeft: '30px', marginBottom: '10px'}} onClick={ this.onNewData }>
                Novo
              </Button>
              <Button variant="contained" color="secondary" style={{marginLeft: '30px', marginBottom: '10px'}} onClick={ this.onItemDelete }>
                Deletar
              </Button>
              <Button variant="contained" style={{color: 'white', backgroundColor: '#37C337', marginLeft: '30px', marginBottom: '10px'}} onClick={ this.onItemSave }>
                Salvar
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}


export default Board;