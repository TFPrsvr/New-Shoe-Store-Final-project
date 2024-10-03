import React, {useState} from 'react'
import './LightBox.css'
import nextIcon from '../assets/icon-next.svg';
import prevIcon from '../assets/icon-previous.svg';
import close2 from '../assets/close2.svg';
import Img1 from "../assets/image-product-1-thumbnail.jpg";
import Img2 from "../assets/image-product-2-thumbnail.jpg";
import Img3 from "../assets/image-product-3-thumbnail.jpg";
import Img4 from "../assets/image-product-4-thumbnail.jpg";


const LightBox = ({
  images = [], 
  index, 
  render,
  setRender,
  isOpen, 
  onClose,
  openLightBox,
  currentIndex = 0, 
  setCurrentIndex, 
  selectedImage, 
  selectedThumbnail}) => {


const lbImgs = () => {
  images.lenth + currentIndex + 1
  console.log('lbImgs:', lbImgs)
}

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
};

const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
};

// const onClose = () =>{
//   setLightBoxOpen(false)
//   openLightBox(false)
// }

  return (
    <div className='LBCont'  onClick={onClose}>
 
 {console.log('currentIndex:', currentIndex)}
 {console.log('selectedImage:', selectedImage)}
 {console.log('lbImgs:', lbImgs)}
 {/* {console.log('openLightBox:', openLightBox)} */}


  <button 
  className='close' 
  // onClick={() => setLightBoxOpen(false)}
  onClick={onClose}
  >
    <img src={close2} className='close' alt='close'/>
                </button>



  <div className='lightBoxImage' onClick={onClose}>
                    <img 

                    src={currentIndex} alt="selectedImage"
                        // src={images[currentIndex]} 
                        // alt="Lightbox View" 
                        // className='lightBoxImage'
                    />
                </div>

                <div className='lightBoxNav'>
                    <button 
                        onClick={handlePrev} 
                        className='prev'>
                        <img src={prevIcon} alt="Previous" />
                    </button>
                    <button 
                        onClick={handleNext} 
                        className='next'>
                        <img src={nextIcon} alt="Next" />
                    </button>
                </div>
                
                <div className='thumbnails'>

    {/* <div className='thumb1'>
      <img src={Img1} 
       onClick={() => openLightBox(selectedImage, currentIndex)}
      onClick={() => setRender(Img1)} 
      style={{height: '83', width: '90px'}}
       alt='thumb1'
       />      
      </div> 

      <div className='thumb2'>
      <img src={Img2} 
       onClick={() => openLightBox(selectedImage, currentIndex)}
       onClick={() => setRender(Img2)}
      style={{height: '83', width: '90px'}}
       alt='thumb2'
       />      
      </div> 

      <div className='thumb3'>
      <img src={Img3} 
       onClick={() => openLightBox(selectedImage, currentIndex)}
      onClick={() => setRender(Img3)} 
      style={{height: '83', width: '90px'}}
       alt='thumb3'
       />      
      </div> 

      <div className='thumb4'>
      <img src={Img4} 
        alt={`Thumbnail ${index + 1}`}
        onClick={() => openLightBox(images, index)}
        onClick={() => setRender(Img4)}
        className={`${selectedThumbnail} ${selectedImage === images ? 'active' : ''}`}
       style={{height: '83', width: '90px'}}
       alt='thumb4'
       />       */}
      </div> 



     {/* {images.map((images, index) => (
            <img
              key={index}
              style={{height: '83px', width: '90px'}}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => openLightBox(images, index)}
              className={`${selectedThumbnail} ${selectedImage === images ? 'active' : ''}`}
            />
            ))} */}

     </div>
    // </div>
  )
}

export default LightBox