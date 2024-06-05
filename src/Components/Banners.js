import './Banners.css'
import  banner2 from '../Assets/banner2.png'
function Banner1 (){
return <div>
    <div className = "first-banner">
        <div className = "first-banner-containtment">
            <h1 className = "smart-cart">SmartCart</h1>
            <p className = "slogan">Your all-in-one family grocery list</p>
            <button className= "download-btn">Download APK <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5 25.6667L22.0757 26.0909L22.5 26.5152L22.9243 26.0909L22.5 25.6667ZM23.1 9.16667C23.1 8.8353 22.8314 8.56667 22.5 8.56667C22.1686 8.56667 21.9 8.8353 21.9 9.16667L23.1 9.16667ZM12.9091 16.9243L22.0757 26.0909L22.9243 25.2424L13.7576 16.0757L12.9091 16.9243ZM22.9243 26.0909L32.0909 16.9243L31.2424 16.0757L22.0757 25.2424L22.9243 26.0909ZM23.1 25.6667L23.1 9.16667L21.9 9.16667L21.9 25.6667L23.1 25.6667Z" fill="white"/>
<path d="M9.66666 29.3333L9.66666 31.1667C9.66666 33.1917 11.3083 34.8333 13.3333 34.8333L31.6667 34.8333C33.6917 34.8333 35.3333 33.1917 35.3333 31.1667V29.3333" stroke="white" stroke-width="1.2"/>
            </svg>
            </button>
        </div>
    </div>
</div>
}
function Banner2(){
    // eslint-disable-next-line jsx-a11y/alt-text
    return <div><img src = {banner2} className = "banner2"></img></div>
}
export {Banner1, Banner2};