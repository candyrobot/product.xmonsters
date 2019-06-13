import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import './App.css';
import CardThumbnail from './CardThumbnail';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { items } from '../object/data';

// 8: url to gumroad
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

  filteredItems[0][20] = '2018/04, 16, 459';
  filteredItems[1][20] = '2018/03, 71, 1,382';
  filteredItems[2][20] = '2018/01, 61, 964';
  filteredItems[3][20] = '2017/12, 41, 617';
  filteredItems[4][20] = '2017/11, 85, 1,238';
  filteredItems[5][20] = '2017/11, 40, 1,281';
  filteredItems[6][20] = '2017/10, 24, 946';
  filteredItems[7][20] = '2017/8, 33, 701';
  filteredItems[8][20] = '2017/7, 42, 832';
  filteredItems[9][20] = '2017/4, 25, 688';
  filteredItems[10][20] = '2017/01, 18, 806';

  return (
    <div className="App">
      <h1>枚数増量!!</h1>
      <p>
        ボリューム満点の写真集！<br />
        今だけ3000円均一で販売中！<br />
        月の食費の1/10以下!!
      </p>
      {filteredItems.map((data)=>
        <a href={data[8]} className="AppA" style={{ display: 'block', margin: 10 }} key={data[0]}>
          <CardThumbnail data={data} />
          <div className="flex">
            <div className="flexGrow">
              撮影日: {data[20].split(', ')[0]}
            </div>
            購入者数: {data[20].split(', ')[1]}
            　
            ♥ {data[20].split(', ')[2]}
          </div>
        </a>
      )}
    </div>
  );
}

export default App;
