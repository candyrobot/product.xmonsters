import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import './App.css';
import CardThumbnail from './CardThumbnail';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListWithTitlebars from './GridListWithTitlebars';
// import Container from '@material-ui/core/Container';
import GridListTileBar from '@material-ui/core/GridListTileBar';

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

function App(props) {
  const classes = useStyles();


  console.log(props);


  const tileData = [
    {
      img: 'https://s3-ap-northeast-1.amazonaws.com/stores-files/ji-han-ki/39d70ad2f7a22608746e.png',
      title: 'Image',
      author: 'author',
    },
    {
      img: 'https://s3-ap-northeast-1.amazonaws.com/stores-files/ji-han-ki/39d70ad2f7a22608746e.png',
      title: 'Image',
      author: 'author',
    },
    {
      img: 'https://s3-ap-northeast-1.amazonaws.com/stores-files/ji-han-ki/39d70ad2f7a22608746e.png',
      title: 'Image',
      author: 'author',
    },
  ];

  return (
    <div className="App">

      <div className={classes.root}>
        <GridList className={classes.gridList} cols={1.1}>
          {window.tileData.map(tile => (
            <GridListTile key={tile.img} className={classes.GridListTile}>
              <Link to={`/items/${tile.id}`}>
                <CardThumbnail />
              </Link>
            </GridListTile>
          ))}
        </GridList>
      </div>

      {[0,1,2,3].map(() =>
        <div className={classes.root + ' BundleBox'}>
          <h5>hoge</h5>
          <GridList className={classes.gridList} cols={2.1}>
            {window.tileData.map(tile => (
              <GridListTile key={tile.img} className={classes.GridListTile}>
                <Link to={`/items/${tile.id}`}>
                  <CardThumbnail />
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
