import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useRef } from 'react';
export default  Carousol=()=>{
imageStyle= {
  	width: '280px',
	height: 'auto',
	position:' relative',
	left: '55%'
    
}
slider= useRef(null)

function gonext(){
   slider.current.next(700)
}

function goprev(){
   slider.current.prev(700)
}
return(
   <div className="overlap-4">
          <div className="rectangle" />
           <img className="mask-group-2 " alt="Mask group" src="/img/mask-group.png"  />
          <div  onClick={gonext} className="arrow-right-wrapper" style={{zIndex:1}}>
            <img className="arrow-right" alt="Arrow right" src="/img/arrow-right-3.svg" />
          </div>
          <div  onClick={goprev} className="img-wrapper" style={{zIndex:1}}>
            <img className="arrow-right-2" alt="Arrow right" src="/img/arrow-right-3-1.svg" />
          </div>
     <OwlCarousel items={1} style={{zIndex:0}} autoplay={true} loop  ref={slider} >
          <div className='item' style={{width:'100%',height:'285px'}}>
          <div className="group-7">
            <div className="text-wrapper-12">SMART WEARABLE.</div>
            <p className="text-wrapper-13">Best Deal Online on smart watches</p>
            <p className="text-wrapper-14">UP to 80% OFF JUST 50 Espees</p>
          </div>
          <div className="group-8">
            <div className="ellipse" />
            <div className="ellipse-2" />
            <div className="ellipse-3" />
            <div className="ellipse-4" />
            <div className="ellipse-5" />
            <div className="ellipse-6" />
            <div className="rectangle-2" />
          </div>
          <img style={imageStyle} alt="Image" src="/img/image-2.png" />
          </div>
          <div className='item' style={{width:'100%',height:'100%'}}>
           <img style={{...imageStyle,...{width:'380px',height:'auto',left:'55%',marginTop:'10px'}}} alt="Image" src="/img/shoe.png" />
           <div className="group-7">
            <div className="text-wrapper-12">QUALITY SHOES.</div>
            <p className="text-wrapper-13">Best Deal Online on smart watches</p>
            <p className="text-wrapper-14">UP to 60% OFF JUST 50 Espees</p>
          </div>
          <div className="group-8">
            
            <div className="ellipse-2" />
            <div className="ellipse" />
            <div className="ellipse-3" />
            <div className="ellipse-4" />
            <div className="ellipse-5" />
            <div className="ellipse-6" />
            <div className="rectangle-2" />
          </div>
          </div>
          <div className='item' style={{width:'100%',height:'100%'}}>
           <img style={{...imageStyle,...{width:'350px',height:'auto'}}} alt="Image" src="img/cloths.png" />
           <div className="group-7">
            <div className="text-wrapper-12">NICE MALE SHIRTS.</div>
            <p className="text-wrapper-13">Best Deal Online on smart watches</p>
            <p className="text-wrapper-14">UP to 60% OFF JUST 50 Espees</p>
          </div>
          <div className="group-8">
            
            <div className="ellipse-2" />
            <div className="ellipse" />
            <div className="ellipse-3" />
            <div className="ellipse-4" />
            <div className="ellipse-5" />
            <div className="ellipse-6" />
            <div className="rectangle-2" />
          </div>
          </div>
          </OwlCarousel>
        </div>
)
}