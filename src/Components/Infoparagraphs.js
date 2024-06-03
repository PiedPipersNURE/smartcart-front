import './Infoparagraphs.css'
import paragraph1img from '../Assets/paragraph\ 1\ img.png'
import paragraph2img from '../Assets/paragraph\ 2\ img.png'
import timeToStartimg from '../Assets/timeToStart.png'
function Infoparagraphs(){
return <div>
    <h2 className = "heading">Why you can depend on us?</h2>
        <div className = "first-paragraph">
            <img src = {paragraph1img} className = "first-paragraph-img"></img>
            <p className = "first-paragraph-text">SmartCart revolutionizes your grocery shopping experience by allowing you to create and share a single grocery list with your family and friends. No more juggling multiple lists or miscommunications about what's needed. 
                With SmartCart, everyone stays in the loop, ensuring that shopping is streamlined and efficient. Our intuitive interface makes adding and managing items a breeze, while real-time updates ensure that you’re always on the same page, whether you’re at home or in the store. Choose SmartCart and transform your shopping process into a collaborative, stress-free activity that saves you time and effort.</p>
        </div>
    <h2 className = "heading">Our privileges</h2>
    
    <div className = "second-paragraph">
        <p className = "second-paragraph-text">Item Check-off: Keep track of your purchases with our real-time item check-off feature, ensuring you never miss a thing.<br/><br/>

        Family Cart Creation: Create a shared family cart accessible to all members, simplifying your shopping experience.<br/><br/>

        Friend Management: Easily manage your shopping companions with the ability to add and remove friends, fostering collaboration and list sharing.<br/><br/>
        Personalized Notifications: Stay informed with personalized notifications tailored to your shopping preferences and habits.<br/><br/>

        Offline Access: Shop anytime, anywhere with offline access, allowing you to modify your list even without an internet connection.<br/><br/>

        Smart Suggestions: Enhance your shopping experience with intelligent suggestions based on your past purchases, preferences, and trends.<br/><br/>

        Data Backup and Sync: Enjoy seamless access to your shopping lists across devices with automatic backup and synchronization.<br/><br/>      
        </p>
    <img src = {paragraph2img} className = "second-paragraph-img"></img>
    </div>
    <div className='timeToStartBlock'>
        <img src={timeToStartimg} className='timeToStartImg'/>
    </div>
</div>
}

export default Infoparagraphs