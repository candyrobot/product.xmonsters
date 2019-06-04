import React from 'react';
import { makeStyles } from '@material-ui/styles';
import style from './App.css';
import GridListWithTitlebars from './GridListWithTitlebars';
import CardThumbnail from './CardThumbnail';
// import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
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
    padding: 10
    // backgroundColor: theme.palette.background.paper,
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
  },
}));

function App() {
  const classes = useStyles();
  const tileData = [
    {
      img: 'https://lh3.googleusercontent.com/0_XN8i4wiF_BC8PcZoCR69De9X1IS7gzn_p-qKgckBUr4xD98BE8wpEigipjHlR3p39srY7TSRlV062VfubCROjR1w9Qzizsc9Kylaai0aPGpxGKUZ75r98SqlwIPXoTJMXu0fJ04aWt4VnKV-lOhQBfBjVF9ikrEw7SFAgnvLiyRHlWe7Yxvx8e6f5-FPPJT6CS03ORk3avUSttxgpc_uhGxK6xbRdv6HeSYPttwvtG9xgnIa34gIcYgemhWMDSZPn9g6IbnLRvfpw75wlN7Fzg-GSN01I-vgG70mMGGiMYbIIkYfGnh16BXcvd2RqmPZAtnlLanb62lYOGw3WDjc4m0Htzpjye2QuuEN33Tr0XUeI7ZJex3UNVMjHn6AriPWgnFRq6nXv4pZ9tyc7t323o7bwtogc9GhGJkxRVn3c5ormqhA0uYKINQTXpDEBBxHLo1i6BFc7bsq7vsDNRgqh49C1viWi5z7sFWPMdSaedJgW3uhZDIpUfYIedZqg439FnZGM_csN64e9U83Vcb63gfD-AvQsq56zSbhpu9qJHIB3hF7Jn2JVyAWWaL7Ztzl_xpx-w3HUk3xMp7-i9ibD_O75L3GDXXCKLoKQ16z-xMI9zO7-n9gO5iXpcRd6SjIy2Ngl48fKnanKkVbCzcD-_o1woEWGn=w1123-h1261-no',
      title: 'Image',
      author: 'author',
    },
    {
      img: 'https://lh3.googleusercontent.com/0_XN8i4wiF_BC8PcZoCR69De9X1IS7gzn_p-qKgckBUr4xD98BE8wpEigipjHlR3p39srY7TSRlV062VfubCROjR1w9Qzizsc9Kylaai0aPGpxGKUZ75r98SqlwIPXoTJMXu0fJ04aWt4VnKV-lOhQBfBjVF9ikrEw7SFAgnvLiyRHlWe7Yxvx8e6f5-FPPJT6CS03ORk3avUSttxgpc_uhGxK6xbRdv6HeSYPttwvtG9xgnIa34gIcYgemhWMDSZPn9g6IbnLRvfpw75wlN7Fzg-GSN01I-vgG70mMGGiMYbIIkYfGnh16BXcvd2RqmPZAtnlLanb62lYOGw3WDjc4m0Htzpjye2QuuEN33Tr0XUeI7ZJex3UNVMjHn6AriPWgnFRq6nXv4pZ9tyc7t323o7bwtogc9GhGJkxRVn3c5ormqhA0uYKINQTXpDEBBxHLo1i6BFc7bsq7vsDNRgqh49C1viWi5z7sFWPMdSaedJgW3uhZDIpUfYIedZqg439FnZGM_csN64e9U83Vcb63gfD-AvQsq56zSbhpu9qJHIB3hF7Jn2JVyAWWaL7Ztzl_xpx-w3HUk3xMp7-i9ibD_O75L3GDXXCKLoKQ16z-xMI9zO7-n9gO5iXpcRd6SjIy2Ngl48fKnanKkVbCzcD-_o1woEWGn=w1123-h1261-no',
      title: 'Image',
      author: 'author',
    },
  ];

  return (
    <div className="App">
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={1.1}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} className={classes.GridListTile}>
              <CardThumbnail className={style.CardThumbnail} />

            </GridListTile>
          ))}
        </GridList>
      </div>

      <h1>hoge</h1>
    </div>
  );
}

export default App;
