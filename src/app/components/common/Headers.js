import React from "react";
import Image from "next/image";
import { Anchor, Col, Row } from "antd";
import "./style.css";
import NexusSvg from "./nexus1.png";
import "../website.css";

function AppHeader() {
  const anchorItems = [
    { key: "home", href: "#hero", title: "Home" },
    { key: "about", href: "#about", title: "About" },
    { key: "services", href: "#services", title: "Services" },
    { key: "contact", href: "#contact", title: "Contact" },
  ];

  return (
    <div className="header w-full shadow-md bg-white">
      {/* <Row align="middle" justify="space-between">
        <Col>
          <Image
            src={NexusSvg}
            alt="Logo"
            width={90} // Set explicit width
            height={60} // Set explicit height
            priority
          />
          ;
        </Col>

        <Col>
          <Anchor
            style={{ marginRight: "15px" }}
            direction="horizontal"
            items={anchorItems}
          />
        </Col>
      </Row> */}
      <div class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <Image src={NexusSvg} alt="Logo" width={80} height={50} priority />
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          {anchorItems.map((item) => (
            <a href={item.href}>{item.title}</a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
