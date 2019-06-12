import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Item from './Item';
import Helmet from 'react-helmet';

/*
-これをtileDateの中にどうにかしていれる
-Qiitaの記事みたいに読み込まれたら自動でOGP化させるか
   <Helmet
    meta={[
      {
        { property: 'og:title', content: 'マニア必見!がっちび介の六尺集' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://gum.co/vhUXJ' },
        { property: 'og:image', content: 'https://static-2.gumroad.com/res/gumroad/8634858819690/asset_previews/3e706f32f96b5e4907738736e5ed83b7/retina/No10.jpeg' },
        { property: 'og:description', content: 'マニア必見!六尺集 #顔だし #大量ムラムラしたときにぜひ！😏👋まるでいっしょにいるかのような #水泳部 #水球 #ライフセーバー #GOGO のフォト集。' },
      }
    ]}
   />
*/
const tileData = [
  {
    id: 1,
    img: 'https://s3-ap-northeast-1.amazonaws.com/stores-files/ji-han-ki/39d70ad2f7a22608746e.png',
    title: 'Image',
    author: 'author',
  },
  {
    id: 2,
    img: 'https://s3-ap-northeast-1.amazonaws.com/stores-files/ji-han-ki/39d70ad2f7a22608746e.png',
    title: 'Image',
    author: 'author',
  },
  {
    id: 3,
    img: 'https://s3-ap-northeast-1.amazonaws.com/stores-files/ji-han-ki/39d70ad2f7a22608746e.png',
    title: 'Image',
    author: 'author',
  },
];

window.tileData = tileData;

const AppContainer = () => (
  <BrowserRouter>
    <Route exact exact path='/' component={App} />
    <Route exact path='/items/:id' component={Item} />
  </BrowserRouter>
);

export default AppContainer;
