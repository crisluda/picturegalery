// import logo from './logo.svg';
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './App.css';
import ImagesCard from './components/ImagesCard';
import ImageSearch from './components/ImageSearch';

function App() {
  const [images,setImages]=useState([])
  const [isLoading,setIsloading]=useState(true)
  const [term,setTerm]=useState("")
   useEffect(() => {
    async function pix(params) {
      const data=await axios.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      setImages(data.data.hits)
      setIsloading(false)
     }
     pix()
     
   }, [term])
   
  
  return (
     <div className="container mx-auto">
       <ImageSearch searchTerm={(text)=>setTerm(text)}/>
        {isLoading ? "loading" : <div className="grid grid-cols-3 gap-4">
          {images.map(images =>(
            <ImagesCard key={images.id} images={images}/>
          ))}
        </div>}
     </div>
    
  );
}

export default App;
