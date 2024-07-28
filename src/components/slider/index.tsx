import React from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "antd";

function Slider({ settings, RenderComponent, data, title }: any) {
  return (
    <Card style={{ padding: ".3rem", backgroundColor: "transparent",border:"none" }}>
      <div style={{ textAlign: "center",textTransform:"uppercase" }}>{title}</div>
      <SlickSlider {...settings}>
        {data.map((slideData: any, index: number) => (
          <RenderComponent key={index} data={slideData} />
        ))}
      </SlickSlider>
    </Card>
  );
}

export default Slider;
