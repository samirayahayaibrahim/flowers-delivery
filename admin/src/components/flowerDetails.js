import flowerDetails from "./flowerDetails.css";
import { useFlowersContext } from "../hooks/useFlowersContext";

const FlowerDetails = ({ flower }) => {
    const { dispatch } = useFlowersContext()

    if (!flower) return null;

    const handleClick = async() => {
        const response = await fetch('https://flowers-delivery-backend-jcef.onrender.com/api/flowerRoutes/' + flower._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok){
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }

    const formattedPrice = `$${Number(flower.price).toFixed(2)}`;
    return ( 
        <div className="min">
        <div className="flowerDetails">
                <img className="img" src={flower.image}  alt={flower.name}/><span id="delete" className="delete" onClick={handleClick}>-</span> 
                <div className="flowerlist">
                    <p className="detail">Name:<span className="list">{flower.name}</span></p>
                    <p className="detail">Category:<span className="list">{flower.category}</span></p>
                    <p className="detail">Price:<span className="list">{formattedPrice}</span></p>
                    <p className="detail">Description:<span className="list">{flower.description}</span></p>
                    
                </div>
            
        </div>
        </div>
    )
}

export default FlowerDetails


// import flowerDetails from "./flowerDetails.css";
// import { useFlowersContext } from "../hooks/useFlowersContext";

// const FlowerDetails = ({ flower }) => {
//     const { dispatch } = useFlowersContext()

//     const handleClick = async() => {
//         const response = await fetch("/api/flowerRoutes/" + flower._id, {
//             method: 'DELETE'
//         })
//         const json = await response.json()

//         if (response.ok){
//             dispatch({type: 'DELETE_WORKOUT', payload: json})
//         }
//     }

// //   const formattedPrice = `$${Number(flower.price).toFixed(2)}`;
//     return ( 
//         <div className="min">
//         <div className="flowerDetails">
//                 <img src={flower.image} /><span id="delete" className="delete" onClick={handleClick}>-</span> 
//                 <div className="flowerlist">
//                     <p className="detail">Name:<span className="list">{flower.name}</span></p>
//                     <p className="detail">Category:<span className="list">{flower.category}</span></p>
//                     {/* <p className="detail">Price:<span className="list">{formattedPrice}</span></p> */}
//                     <p className="detail">Description:<span className="list">{flower.description}</span></p>
//                     <p className="detail"><span className="list">{flower.createdAt}</span></p>
//                 </div>
            
//         </div>
//         </div>
//     )
// }

// export default FlowerDetails



