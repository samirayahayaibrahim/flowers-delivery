
import { useEffect } from 'react'                                                                                                                                                                                                                                                                                                                                                                                                                                              
import FlowerDetails from "../components/flowerDetails"
import AddFlowers from "../AdminPanel/addFlowers";
import { useFlowersContext } from "../hooks/useFlowersContext";

function Home() {
    const {flowers, dispatch} = useFlowersContext()

    useEffect(() => {
        const fetchFlowers = async () => {
            const res = await fetch('/api/flowerRoutes/');
            const json = await res.json();

            if (res.ok) {
                dispatch({type: 'SET_FLOWERS', payload: json})

        }
        };
    
        fetchFlowers(); 
    }, [dispatch]);

    return (
    <div className="flower-gallery">
    
        {flowers && flowers.map((flower) =>(
            <FlowerDetails key={flower._id} flower={flower} />
            ))}
    </div>                                  
);
}

export default Home;


