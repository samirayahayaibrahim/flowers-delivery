import { Link } from 'react-router-dom'
import FlowerDetails from '../components/flowerDetails';
import AddFlowers from "../AdminPanel/addFlowers";
import Home from '../pages/Home';
import addflowerStyle from "./addflowerStyle.css";

const addFlowerRoute = () => {
    return ( 
        <div className='admin'>
            <h3>Admin Panel</h3>
            <div className="addflowers" >
                <Link to="/flowerDetails"><button className='button'>AddFlowers</button></Link>
                <Link to="/"><button className='button'>Flowers</button></Link>
            </div> 
        </div>
    );
}

export default addFlowerRoute;
