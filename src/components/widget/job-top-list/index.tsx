"use client";
import { Card } from "antd";
import React from "react";
import "./job-top-list.css";
import Slider from "@/components/slider";

function JobTopList() {
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
          title={<h1>Job list</h1>}
          settings={settings}
          data={[
            { name: "Job1" },
            { name: "Job2" },
            { name: "Job3" },
            { name: "Job4" },
            { name: "Job5" },
            { name: "Job6" },
            { name: "Job7" },
          ]}
          RenderComponent={JobCard}
        />
    </div>
  );
}

const JobCard = ({ data }: any) => {
  return <Card style={{ width: "97%",margin:".5rem", minHeight:"200px" }}>{data.name}</Card>;
};
export default JobTopList;
