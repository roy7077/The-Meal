import { Icon } from '@iconify/react';
import '../style/footer.css'

const Footer=()=>{
    return(
       <div className='footer'>
       <div className='social-media'>
            <Icon icon="skill-icons:linkedin" className='icon-1' />
            <Icon icon="mdi:github" className='icon-2'/>
            <Icon icon="skill-icons:instagram" className='icon-3'/>
        </div>
        <div className='copy-right'>
            <p1>
            © 2023 TheMeal<br></br>
            Proudly built in the India by Sagar 
            </p1>
        </div>
       </div>
    )
}

export default Footer;