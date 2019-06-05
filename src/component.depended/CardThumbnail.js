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
    // height: '40vw',
    paddingTop: '55%'
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
    right: 0,
    padding: 5
  },
});


function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={props.className + ' ' + classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://s3-ap-northeast-1.amazonaws.com/stores-files/ji-han-ki/39d70ad2f7a22608746e.png"
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
