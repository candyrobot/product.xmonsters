import React from 'react';
import { makeStyles } from '@material-ui/styles';
import './App.css';
import GridListWithTitlebars from './GridListWithTitlebars';
import CardThumbnail from './CardThumbnail';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  CardThumbnail: {
    margin: 5
  },
});

function App() {
  const classes = useStyles();
  
  return (
    <div className="App">
      <Container>
        <CardThumbnail className={classes.CardThumbnail} />
        <CardThumbnail className={classes.CardThumbnail} />
        <CardThumbnail className={classes.CardThumbnail} />
        <CardThumbnail className={classes.CardThumbnail} />
      </Container>
    </div>
  );
}

export default App;
