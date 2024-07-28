"use client";
import { Card } from "antd";
import React from "react";
import "./company-top-list.css";
import Slider from "@/components/slider";

function CompanyTopList() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider
          title={<h1>Company list</h1>}
          settings={settings}
          data={[
            { name: "Company1" },
            { name: "Company2" },
            { name: "Company3" },
            { name: "Company4" },
            { name: "Company5" },
            { name: "Company6" },
            { name: "Company7" },
          ]}
          RenderComponent={companyCard}
        />
    </div>
  );
}

const companyCard = ({ data }: any) => {
  return <Card style={{ width: "97%",margin:".5rem", minHeight:"200px" }}>{data.name}</Card>;
};
export default CompanyTopList;
