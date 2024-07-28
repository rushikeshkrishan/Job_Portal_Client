"use client";
import { Card } from "antd";
import React from "react";
import "./new-users-list.css";
import Slider from "@/components/slider";

function NewUserList() {
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
          title={<h1>New users list</h1>}
          settings={settings}
          data={[
            { name: "User1" },
            { name: "User2" },
            { name: "User3" },
            { name: "User4" },
            { name: "User5" },
            { name: "User6" },
            { name: "User7" },
          ]}
          RenderComponent={NewUserCard}
        />
    </div>
  );
}

const NewUserCard = ({ data }: any) => {
  return <Card style={{ width: "97%",margin:".5rem", minHeight:"200px" }}>{data.name}</Card>;
};
export default NewUserList;
