"use client";

import React, { useCallback } from "react";
import { Form, Input, Button } from "antd";
import "../website.css";

const { TextArea } = Input;

const AppContact = () => {
  const onFinish = useCallback((values) => {
    console.log("Received values:", values);
  }, []);

  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2 className="contact-heading">Contact Us</h2>
        </div>
        <Form
          name="contact_form"
          className="contact-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="fullname"
            rules={[{ required: true, message: "Please input your full name" }]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email",
                type: "email",
              },
            ]}
          >
            <Input placeholder="Email Address" />
          </Form.Item>
          <Form.Item name="telephone">
            <Input placeholder="Phone Number" />
          </Form.Item>
          <Form.Item name="subject">
            <Input placeholder="Subject" />
          </Form.Item>
          <Form.Item name="message">
            <TextArea placeholder="Message" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="contact-form-button"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

      <h2 className="follow">Follow & Reach Out to Us</h2>

      <div className="social-links">
        <a
          href="https://wa.me/message/67HRWNQHICECB1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://verloop.io/wp-content/uploads/2019/08/whatsapp-chat-link-black-.png"
            alt="whatsapp"
          />
        </a>

        <a
          href="mailto:nexusspace.2025@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
            alt="email"
          />
        </a>

        <a
          href="https://www.instagram.com/nexusspace_ahmedabad?igsh=Nm9pNHNqc2Fza3Bi&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuH7c5cLpGehi0b4iQk90fXUzC9p7Ebla13w&s"
            alt="instagram"
          />
        </a>
      </div>
    </div>
  );
};

export default AppContact;
