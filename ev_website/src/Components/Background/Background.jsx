import './Background.css'
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/car1.jpg'
import image2 from '../../assets/car2.jpg'
import image3 from '../../assets/car3.jpg'

const Background = ({playStatus,heroCount}) => {
 
    if(playStatus) {
        return(
            <video className='background' autoPlay loop muted>
                <source src={video1} type='video/mp4' />
            </video>
        )
    }
    else if(heroCount===0)
        {
            return <img src={image1} className='backgroud' alt="" />
        }
    else if(heroCount===1)
        {
            return <img src={image2} className='backgroud' alt="" />
         } 
    else if(heroCount===2)
        {
            return <img src={image3} className='backgroud' alt="" />
        }         
    }
export default Background
