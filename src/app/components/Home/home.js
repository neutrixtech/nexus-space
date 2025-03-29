"use client";

import React from "react";
import { Carousel } from "antd";
import "./homeStyle.css";

const items = [
  {
    key: "1",
    title: "Welcome to Nexus Space - Your Gateway to Exceptional Real Estate",
    content:
      "At Nexus Space, we believe that finding the perfect home or investment property should be an exciting and seamless experience. Whether you are looking for a dream home, a commercial space, or a profitable real estate investment, our expert team is here to guide you every step of the way. With years of experience in the industry, we specialize in providing premium real estate solutions that match your lifestyle, needs, and budget.",
  },
];

function Homes() {
  return (
    <div id="hero" className="heroBlock overlay">
      <Carousel>
        {items.map((item) => (
          <div key={item.key} className="container-fluid">
            <div className="content">
              <h1 className="hero-heading">{item.title}</h1>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Homes;
