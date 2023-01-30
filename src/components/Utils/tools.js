import {Link} from 'react-router-dom';
import mcityLogo from '../../Resources/images/logos/manchester_city_logo.png'

function CityLogo({width,height,link,linkTo}) {
  
    const template = <div
    className='img_cover'
    style={{width,height,background:`url(${mcityLogo}) no-repeat`}}>
    </div>

    if(link){
        return (
            <Link className='link_logo' to={linkTo}>
               {template} 
            </Link>
        )
    }else{
        return template
    }


}

export default CityLogo;