"use client";
import { Carousel } from "antd";
import React from "react";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "360px",
  color: "#fff",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  textAlign: "center",
  background: "#001529",
};

function AdSpaceBanner() {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <div style={{display:"flex",gap:"10px"}}>
    <div style={{width:"50%"}}>
      <Carousel  autoplay infinite fade vertical dots={false} autoplaySpeed={7000} afterChange={onChange}>
        <div style={{wordWrap:"break-word",width:"100%"}}>
          <h3 style={contentStyle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores beatae maxime quas animi. Accusantium aliquam deleniti ab, fugiat dolorum numquam unde rem sit illo, facilis, debitis optio sint modi labore.</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores beatae maxime quas animi. Accusantium aliquam deleniti ab, fugiat dolorum numquam unde rem sit illo, facilis, debitis optio sint modi labore</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores beatae maxime quas animi. Accusantium aliquam deleniti ab, fugiat dolorum numquam unde rem sit illo, facilis, debitis optio sint modi labore</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores beatae maxime quas animi. Accusantium aliquam deleniti ab, fugiat dolorum numquam unde rem sit illo, facilis, debitis optio sint modi labore</h3>
        </div>
      </Carousel>
    </div>
    <div style={{width:"50%"}}>
      <Carousel autoplay infinite fade vertical dots={false} autoplaySpeed={7000} afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
    </div>
  );
}

export default AdSpaceBanner;
