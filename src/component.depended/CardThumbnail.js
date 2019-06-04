import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    // maxWidth: '75vw',
    backgroundColor: 'rgba(255,255,255,.1) !important'
  },
  media: {
    height: 150,
  },
  typography: {
    color: 'white',
    fontWeight: 'bold',
    margin: 0
  },
  typography2: {
    color: 'rgba(255,255,255,.5)',
    margin: 0,
    whiteSpace: 'nowrap'
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0
  },
});


function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={props.className + ' ' + classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://lh3.googleusercontent.com/0_XN8i4wiF_BC8PcZoCR69De9X1IS7gzn_p-qKgckBUr4xD98BE8wpEigipjHlR3p39srY7TSRlV062VfubCROjR1w9Qzizsc9Kylaai0aPGpxGKUZ75r98SqlwIPXoTJMXu0fJ04aWt4VnKV-lOhQBfBjVF9ikrEw7SFAgnvLiyRHlWe7Yxvx8e6f5-FPPJT6CS03ORk3avUSttxgpc_uhGxK6xbRdv6HeSYPttwvtG9xgnIa34gIcYgemhWMDSZPn9g6IbnLRvfpw75wlN7Fzg-GSN01I-vgG70mMGGiMYbIIkYfGnh16BXcvd2RqmPZAtnlLanb62lYOGw3WDjc4m0Htzpjye2QuuEN33Tr0XUeI7ZJex3UNVMjHn6AriPWgnFRq6nXv4pZ9tyc7t323o7bwtogc9GhGJkxRVn3c5ormqhA0uYKINQTXpDEBBxHLo1i6BFc7bsq7vsDNRgqh49C1viWi5z7sFWPMdSaedJgW3uhZDIpUfYIedZqg439FnZGM_csN64e9U83Vcb63gfD-AvQsq56zSbhpu9qJHIB3hF7Jn2JVyAWWaL7Ztzl_xpx-w3HUk3xMp7-i9ibD_O75L3GDXXCKLoKQ16z-xMI9zO7-n9gO5iXpcRd6SjIy2Ngl48fKnanKkVbCzcD-_o1woEWGn=w1123-h1261-no"
        />
        <CardContent className={classes.titleBar}>
          <p className={classes.typography}>
            ○ モデル名
          </p>
          <p className={classes.typography2}>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MediaCard;
