import React from 'react';
import { makeStyles } from '@material-ui/styles';
import './App.css';
import GridListWithTitlebars from './GridListWithTitlebars';
import CardThumbnail from './CardThumbnail';
// import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Button from '@material-ui/core/Button';

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
      <div className="DetailExpression">
        <CardThumbnail />
        <div className="content">
          <h5>Title</h5>
          <p>Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p>¥ 3,000</p>
          <Button>カートへ</Button>
        </div>
      </div>

      <div className={classes.root + ' BundleBox'}>
        <h5>おすすめ</h5>
        <GridList className={classes.gridList} cols={2.1}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} className={classes.GridListTile}>
              <CardThumbnail />
            </GridListTile>
          ))}
        </GridList>
      </div>

      {/* 一覧: */}

      <div className={classes.root}>
        <GridList className={classes.gridList} cols={1.1}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} className={classes.GridListTile}>
              <CardThumbnail />
            </GridListTile>
          ))}
        </GridList>
      </div>

      <div className={classes.root + ' BundleBox'}>
        <h5>hoge</h5>
        <GridList className={classes.gridList} cols={2.1}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} className={classes.GridListTile}>
              <CardThumbnail />
            </GridListTile>
          ))}
        </GridList>
      </div>
      <div className={classes.root + ' BundleBox'}>
        <h5>hoge</h5>
        <GridList className={classes.gridList} cols={2.1}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} className={classes.GridListTile}>
              <CardThumbnail />
            </GridListTile>
          ))}
        </GridList>
      </div>
      <div className={classes.root + ' BundleBox'}>
        <h5>hoge</h5>
        <GridList className={classes.gridList} cols={2.1}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} className={classes.GridListTile}>
              <CardThumbnail />
            </GridListTile>
          ))}
        </GridList>
      </div>
      <div className={classes.root + ' BundleBox'}>
        <h5>hoge</h5>
        <GridList className={classes.gridList} cols={2.1}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} className={classes.GridListTile}>
              <CardThumbnail />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}

export default App;
