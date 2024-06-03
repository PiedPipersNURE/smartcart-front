import './Main.css'
import {Banner1, Banner2} from './Banners'
import Infoparagraphs from './Infoparagraphs'
import PreFooterSection from './PreFooterSection'
import Footer from './Footer'


function Main(){
    return <div className = "main">
        <Banner1 />
        <Banner2 />
        <Infoparagraphs />
        <PreFooterSection />
        <Footer />
    </div>
}
export default Main