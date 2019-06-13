import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import './App.css';
import CardThumbnail from './CardThumbnail';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { items } from '../object/data';

// 5: url to gumroad
// 11: title
// 12: desc
// 15: thumb

const useStyles = makeStyles(theme => ({
  CardThumbnail: {
    margin: 5
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    padding: 10,
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: 'rgba(0,0,0,.25)',
    marginBottom: 5
  },
  gridList: {
    width: '100%',
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    // color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  GridListTile: {
    borderRadius: 10,
    overflow: 'hidden',
    height: 'initial !important'
  },
}));

function App() {
  const classes = useStyles();

  const filteredItems = items.filter((data)=> !!data[15]);

  return (
    <div className="App">

      <div className={classes.root}>
        <GridList className={classes.gridList} cols={1.1}>
          {filteredItems.map(data => (
            <GridListTile key={data[0]} className={classes.GridListTile}>
              <Link to={`/items/${data[0]}`}>
                <CardThumbnail data={data} />
              </Link>
            </GridListTile>
          ))}
        </GridList>
      </div>

      {[0,1,2,3].map((v) =>
        <div className={classes.root + ' BundleBox'} key={v}>
          <h5>hoge</h5>
          <GridList className={classes.gridList} cols={2.1}>
            {filteredItems.map(data => (
              <GridListTile key={data[0]} className={classes.GridListTile}>
                <Link to={`/items/${data[0]}`}>
                  <CardThumbnail data={data} />
                </Link>
              </GridListTile>
            ))}
          </GridList>
        </div>
      )}
    </div>
  );
}

export default App;
