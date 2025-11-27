// // import { useEffect, useState } from "react";
// import axios from 'axios';
// import { useFlowersContext } from "../hooks/useFlowersContext";
// // import addflowerStyle from "./addflowerStyle.css";
// // import { useFlowers } from "../hooks/useFlowersContext";
// // import addFlowerRoute from "./addFlowerRoute";

// const AddFlowers = () => {
//     const { dispatch } = useFlowersContext();
    
//     const [image, setImage] = useState();
//     const [imageError, setImageError] = useState(false)
//     const [name, setName] = useState('');
//     const [category, setCategory] = useState('');
//     const [price, setPrice] = useState('')
//     const [description, setDescription] = useState('')   
//     const [error, setError] = useState(null)
//     const [emptyFields, setEmptyFields] = useState([])


//     const handleImageError = () => {
//     setImageError(true)
// };

//     const submitImage = async(e) => {
//     e.preventDefault();

//     const formData=new FormData();
//     formData.append('image', image);
//     formData.append('name', name);
//     formData.append('category', category);
//     formData.append('price', price);
//     formData.append('description', description);
//     // formData.append('file', files[0])
// try{
  
//     const response = await axios.post(
//             "https://flowers-delivery-backend-jcef.onrender.com/api/flowerRoutes/",
//             formData,
//             {
//                 headers: { "content-type": "multipart/form-data" },
//             }
//             );

//             // const json = response.data;
//             const json = await response.data;

//             if (response.status !== 200) {
//     setError(json.error || "Upload failed");
//     setEmptyFields(json.emptyFields || []);
//     } else  {
//         setImage(null);
//         setName('');
//         setCategory('');
//         setPrice('');
//         setDescription('');
//         setError(null);
//         setEmptyFields([])
//         console.log('new flower added', json);
//         dispatch({ type: 'CREATE_FLOWER', payload: json });
//     }   
//     console.log("Uploaded image URL:", response.data.image);
//     } catch (error) {
//     console.error("Upload failed:", error);
//     }
// };

//     const onInputChange = (e) => {
//     console.log(e.target.files[0])
//     setImage(e.target.files[0])
//     };

//     useEffect(() => {
//   if (image) {
//     const objectUrl = URL.createObjectURL(image);
//     return () => URL.revokeObjectURL(objectUrl);
//   }
// }, [image]);


//     return (
//         <form className="add" onSubmit={submitImage} encType="multipart/form-data">
//                 <div className="addflower">
//                 <label>image</label><br/>
                
//                 <label htmlFor="image-upload">
//   <img
//     src={image ? URL.createObjectURL(image) : "images.jpeg"}
//     alt="Upload"
//     className="upload-preview"
//     style={{ width: "200px", height: "200px", objectFit: "cover" }}
//   />
// </label>
// <input
//   type="file"
//   id="image-upload"
//   accept="image/*"
//   onChange={onInputChange}
//   required
//   style={{ display: "none" }}
// />

//                 <br/>
                
//                 <label>Name</label><br/>
//                 <input type="text" id="name"  className={emptyFields.includes("name") ? 'error' : ''} onChange={(e) => setName(e.target.value)} value={name}></input>
                
//                 <div className="catprice">
//                 <span>
//                 <label className="">Category</label><br/>
//                 <input type="text" id="category"   className={emptyFields.includes("category") ? 'error' : ''} onChange={(e) => setCategory(e.target.value)} value={category}></input>
//                 </span>
//                 <span>
//                 <label className="">Price</label><br/>
//                 <input type="number" id="price"   className={emptyFields.includes("price") ? 'error' : ''} onChange={(e) => setPrice(e.target.value)} value={price}></input>
//                 </span>
//                 </div>
//                 <label>Description</label><br/>
//                 <input type="text" id="description" className={emptyFields.includes("description") ? 'description' : ''} onChange={(e) => setDescription(e.target.value)} value={description}></input>
//                 <div className="submit">
//                 <button className="submit">submit</button>
//                 </div>

//         </div>
//     </form>
//   );
  
// };


// export default AddFlowers;


import { useEffect, useState } from "react";
import axios from 'axios';
import { useFlowersContext } from "../hooks/useFlowersContext";
import addflowerStyle from "./addflowerStyle.css";
import { useFlowers } from "../hooks/useFlowersContext";
import addFlowerRoute from "./addFlowerRoute";


const useAddFlowers = () => {
  const { dispatch } = useFlowersContext
  const [image, setImage] = useState();
  const [imageError, setImageError] = useState(false)
      const [name, setName] = useState('');
      const [category, setCategory] = useState('');
      const [price, setPrice] = useState('')
      const [description, setDescription] = useState('')   
      const [error, setError] = useState(null)
      const [emptyFields, setEmptyFields] = useState([])
  
  

  const handleImageError = () => {
    setImageError(true)
  };

  const submitImage = async(e) => {
    e.preventDefault();


    const formData=new FormData();
    formData.append('image', image);
    formData.append('name', name);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('description', description);
try{
    const response = await axios.post(
              "https://flowers-delivery-backend-jcef.onrender.com/api/flowerRoutes/",
              formData,
              {
                headers: { "content-type": "multipart/form-data" },
              }
            );

            const json = await response.json();


            if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields)
    } else  {
      setImage(null);
      setName('');
      setCategory('');
      setPrice('');
      setDescription('');
      setError(null);
      setEmptyFields([])
      console.log('new flower added', json);
      dispatch({ type: 'CREATE_FLOWER', payload: json });
    }   
      console.log("Uploaded image URL:", response.data.image);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  const onInputChange = (e) => {
    console.log(e.target.files[0])
    setImage(e.target.files[0])
  };

  return (
    <form className="add" onSubmit={submitImage} encType="multipart/form-data">
                  <div className="addflower">
                  <label>Image</label><br/>
                
                 <label htmlFor="image-upload">
   <img
     src={image ? URL.createObjectURL(image) : "images.jpeg"}
     alt="Upload"
     className="upload-preview"
     style={{ width: "200px", height: "200px", objectFit: "cover" }}
   />
 </label>
 <input
   type="file"
   id="image-upload"
   accept="image/*"
   onChange={onInputChange}
   required
   style={{ display: "none" }} />
                  
                  <br/>
                  
                  <label>Name</label><br/>
                  <input type="text" id="name"  className={emptyFields.includes("name") ? 'error' : ''} onChange={(e) => setName(e.target.value)} value={name}></input>
                  
                  <div className="catprice">
                  <span>
                  <label className="">Category</label><br/>
                  <input type="text" id="category"   className={emptyFields.includes("category") ? 'error' : ''} onChange={(e) => setCategory(e.target.value)} value={category}></input>
                  </span>
                  <span>
                  <label className="">Price</label><br/>
                  <input type="number" id="price"   className={emptyFields.includes("price") ? 'error' : ''} onChange={(e) => setPrice(e.target.value)} value={price}></input>
                  </span>
                  </div>
                  <label>Description</label><br/>
                  <input type="text" id="description" className={emptyFields.includes("description") ? 'description' : ''} onChange={(e) => setDescription(e.target.value)} value={description}></input>
                  <div className="submit">
                  <button className="submit">submit</button>
                  </div>
      {image && <img src={image} alt="Uploaded" />}
      </div>
    </form>
  );
  
  };



export default useAddFlowers;