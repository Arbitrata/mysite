import React from "react";
import { ContactForm } from "../common";
import { Button } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function ContactPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-fit min-h-screen pt-6">
      <div className="w-full h-fit relative mx-auto 2xl:max-w-[1600px] overflow-hidden lg:py-[80px] py-[70px] lg:px-[120px] md:px-[60px] px-6 space-y-6">
        <div className="h-fit font-roboto">
          <Button
            type="secondary"
            onClick={() => navigate("/")}
            icon={<HomeOutlined />}
            iconPosition={"start"}
            className="rounded-full text-blackBg text-[14px] font-medium"
          >
            Back home
          </Button>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
