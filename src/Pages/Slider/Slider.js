import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear"
    };
    return (
        <div className="width">
            <Slider {...settings}>
                <div className="" style={{width:"18rem"}} >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCosNE8U8r4l6IY0NHJ7icaHynM8gFLQimNg&usqp=CAU" alt="" />
                </div>
                <div className=" " >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkDCK5iQ8IkH2GbGrATzHSPw8uE02kXvu5woWkUFZPBIbHRS9Bt6OkOCdvat6uaeJiS8&usqp=CAU" alt="" />
                </div>
               
                <div className="" style={{width:"18rem"}} >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCosNE8U8r4l6IY0NHJ7icaHynM8gFLQimNg&usqp=CAU" alt="" />
                </div>
                <div className="" style={{width:"18rem"}} >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCosNE8U8r4l6IY0NHJ7icaHynM8gFLQimNg&usqp=CAU" alt="" />
                </div>
                <div className="" style={{width:"18rem"}} >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCosNE8U8r4l6IY0NHJ7icaHynM8gFLQimNg&usqp=CAU" alt="" />
                </div>
                <div className="" style={{width:"18rem"}} >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCosNE8U8r4l6IY0NHJ7icaHynM8gFLQimNg&usqp=CAU" alt="" />
                </div>
                <div className="" style={{width:"18rem"}} >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCosNE8U8r4l6IY0NHJ7icaHynM8gFLQimNg&usqp=CAU" alt="" />
                </div>
                <div className="" style={{width:"18rem"}} >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCosNE8U8r4l6IY0NHJ7icaHynM8gFLQimNg&usqp=CAU" alt="" />
                </div>
                
            </Slider>
        </div>
    );
};

export default ImageSlider;