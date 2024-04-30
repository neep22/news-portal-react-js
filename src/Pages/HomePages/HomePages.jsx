import React, { Fragment } from 'react'
import TopBanner from './../../Components/TopBanner/TopBanner';
import TopNavigation from './../../Components/TopNavigation/TopNavigation';
import EditorNews from './../../Components/EditorNews/EditorNews';
import WeeksNews from './../../Components/WeeksNews/WeeksNews';
import ArticleNews from './../../Components/ArticleNews/ArticleNews';
import Footer from './../../Components/Footer/Footer';

const HomePages = () => {
  return (
    <Fragment>
        <TopBanner/>
        <TopNavigation/>
        <EditorNews/>
        <WeeksNews/>
        <ArticleNews/>
        <Footer/>
    </Fragment>
  )
}

export default HomePages