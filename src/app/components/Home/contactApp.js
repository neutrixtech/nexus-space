"use client";

import React, { useCallback, useState } from "react";
import { Form, Input, Button, message } from "antd";
import "../website.css";

const { TextArea } = Input;

const AppContact = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = useCallback(async (values) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5002/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await response.json();
      if (result.success) {
        message.success("Form submitted successfully!");
      } else {
        message.error("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
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
            rules={[{ required: true, message: "Please enter your full name" }]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email",
                type: "email",
              },
            ]}
          >
            <Input placeholder="Email Address" />
          </Form.Item>
          <Form.Item
            name="telephone"
            rules={[
              {
                required: true,
                message: "Please enter your phone number",
              },
              {
                pattern: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit phone number",
              },
            ]}
          >
            <Input placeholder="Phone Number" />
          </Form.Item>
          <Form.Item name="subject">
            <Input placeholder="Subject" />
          </Form.Item>
          <Form.Item
            name="message"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <TextArea placeholder="Message" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="contact-form-button"
              loading={loading}
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
