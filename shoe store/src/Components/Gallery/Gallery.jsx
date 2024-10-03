import React, {useState} from 'react'
import './Gallery.css'
import LightBox from '../LightBox/LightBox'
import Img1 from "../assets/image-product-1-thumbnail.jpg";
import Img2 from "../assets/image-product-2-thumbnail.jpg";
import Img3 from "../assets/image-product-3-thumbnail.jpg";
import Img4 from "../assets/image-product-4-thumbnail.jpg";
import next from '../assets/icon-next.svg'
import prev from '../assets/icon-previous.svg'




const Gallery = (image) => {
  const images = [
   { src: Img1, alt: 'product Image 1'},
   { src: Img2, alt: 'product Image 2'},
   { src: Img3, alt: 'product Image 3'},
   { src: Img4, alt: 'product Image 4'}
  ];

  const thumbs = images
  const [selectedImage, setSelectedImage] = useState(Img1); //lightbox
  const [lightBoxOpen, setLightBoxOpen] = useState(false); //lightbox
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedThumbnail, setSelectedThumbnail] = useState(Img1)
  



  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
};

const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
};



   //lightbox open
   const openLightBox = (image, index) => {
    setSelectedImage(images);
    setCurrentIndex(index);
    setLightBoxOpen(true);
  };

  const closeLightBox = () =>
   setLightBoxOpen(false)
  

  return (
    <div className='gallery'>

{console.log('images:', images)}
{console.log('currentIndex:', currentIndex)}

      <div className='mainImg' 
       onClick={() => openLightBox(selectedImage, currentIndex)}>
     
      <img
        src={selectedImage}
        className='mainImg'
        alt="Selected Img"
        // style={{ height: "560px", width: "560px" }}
 />

      </div>

        <div className='prevBtn'
      style={{position: 'relative'}}>

                    <button 
                        onClick={handlePrev} 
                        className='gBtnsPrev'
                        style={{
                        position: 'absolute',
                        left: 0}}>
                        <img src={prev} className='prevBtn' alt="Previous" />
                    </button>
                       </div>

                 <div className='nextBtn' 
                   style={{position: 'relative'}} >

                    <button 
                        onClick={handleNext} 
                        className='gBtnsNext'
                        style={{
                          position: 'absolute', 
                          right: 0}}>
                        <img src={next} className='nextBtn' alt="Next" />
                    </button>
     </div>

     <div className='thumbnails'>
     
      {/* <div className='thumb1Gal'> 
        <img src={setRender}
        alt='Product Img 1' 
       className='Galthumb1'
       onClick={openLightBox(selectedImage, currentIndex)} 
      />
     </div> */}

      {/* <div className='thumb2Gal'>/ */}
        {/* <img src={Img2} */}
        {/* // alt='Product Img 2' */}
        {/* // className='Galthumb2' */}
        {/* // onClick={openLightBox(selectedImage, currentIndex)} */}
        {/* /> */}
    {/* </div> */}

      {/* <div className='thumbGal2'>/ */}
        {/* <img src={Img3} */}
        {/* // alt='Product Img 3' */}
        {/* // className='Galthumb3' */}
        {/* // onClick={openLightBox(selectedImage, currentIndex)} */}
        {/* /> */}
      {/* </div> */}

      {/* <div className='thumb4Gal'>/ */}
        {/* <img src={Img4} */}
         {/* alt='Product Img 4' */}
        {/* className='Galthumb4' */}
        {/* onClick={openLightBox(selectedImage, currentIndex)} */}
        {/* /> */}
      {/* </div> */}

     {images.map((images, index) => (
            <img
              key={index}
              src={image}
              style={{height: '83px', width: '90px'}}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => openLightBox(image, index)}
              className={`${selectedThumbnail} ${selectedImage === image ? 'active' : ''}`}
            />
            ))}

     </div>

        <div className='lightBoxCont'>

     {lightBoxOpen && (
       <LightBox 
       image={selectedImage}
       images={images}
       isOpen={openLightBox}
       onClose={closeLightBox}
       currentIndex={currentIndex}
       setCurrentIndex={setCurrentIndex}
       />
      )}
      </div>
   </div>
  )
}

export default Gallery