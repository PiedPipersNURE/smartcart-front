import './Main.css'
import {Banner1, Banner2} from './Banners'
import Infoparagraphs from './Infoparagraphs'
import PreFooterSection from './PreFooterSection'
import Footer from './Footer'
import React from 'react';


function Main({isGray}){
    return <div className = "main">
        <Banner1 />
        <Banner2 />
        <Infoparagraphs />
        <PreFooterSection />
        <Footer isGray = {isGray}/>
    </div>
}
export default Main