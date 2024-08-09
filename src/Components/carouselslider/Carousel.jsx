import {  useState,useEffect} from "react";
import fetchPhotos from "../apis/imgapi";

function Carousel(){
    const [image, setImage] = useState([]);

    async function getPhotos() {
        const photos=await fetchPhotos();
        setImage(photos);
    }
    useEffect(() => {
    getPhotos()

    const intervalId=setInterval(() => {
        setcurrSlide((prev)=>(prev+1)%image.length);
    }, 3000);
    return () => clearInterval(intervalId);

    }, [image.length])


    const [currSlide, setcurrSlide] = useState(0);

    const next=function(){
        setcurrSlide((prev)=>(prev+1)%image.length);
    }
    const previous = function(){
        setcurrSlide((prev)=>(prev-1+image.length)%image.length);
    }

    return(
        <>
            <div className="w-[100%]"><h1 className="text-red-50 text-center">Welcome to carousel img.urls.small</h1>
            {image.length>0 &&

            (
                <div className="w-[50%] m-auto flex align-middle relative mt-28 justify-center ring-2 ring-red-400">
                <img className="w-[30rem] h-48 object-cover m-auto block transition-transform duration-200 ease-in-out hover:scale-105 hover:object-contain"
                 src={image[currSlide].urls.small} alt={`slide ${currSlide}`}>
                 </img>
                 <button onClick={next} className="w-[7rem] p-4 bg-white opacity-15 rounded-md text-black absolute left-[25%] top-60 hover:opacity-30 transition-all">Next</button>
                 <button onClick={previous} className="w-[7rem] p-4 bg-white opacity-15 rounded-md text-black absolute right-[25%] top-60 hover:opacity-30 transition-all">previous</button>
                </div>
            )
             
             }
            </div>
        </>
    )
} 

export default Carousel;