"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectLabel,
  SelectItem,
} from "./ui/select";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import Success from "./Success";

const ContactForm = () => {
  const { toast } = useToast();
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Address: "",
    Message: "",
    Service: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      Service: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //stop refresh and keeps previous data
    try {
      setLoading(true);
      if (!formData.Name.trim() || !formData.Email.trim()) {
        toast({
          title: "Error: Something is wrong",
          description: "Please input your name and emain to continue!!!!",
          variant: "destructive",
        });
        return;
      }

      const form = new FormData();
      const currentDataTime = new Date().toLocaleString();
      form.append("Name", formData.Name);
      form.append("Email", formData.Email);
      form.append("Phone", formData.Phone);
      form.append("Address", formData.Address);
      form.append("Message", formData.Message);
      form.append("Services", formData.Service);
      form.append("DateTime", currentDataTime);

      const response = await fetch("https://getform.io/f/ayvvdvjb", {
        method: "POST",
        body: form,
      });
      if (response?.ok) {
        setSuccess(true);
        setStatus("Success! Your message has been sent.");
        setFormData({
          Name: "",
          Email: "",
          Phone: "",
          Address: "",
          Message: "",
          Service: "",
        });
      } else {
        setStatus("Error! Unable to send your message");
      }
    } catch (error) {
      console.error("Data submitting error", error);
      setStatus("Error! Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="space-y-4">
      <h3 className="text-2xl md:text-4xl text-lightSky">
        Let&apos;s work together
      </h3>
      <p>
        Interested in collaborating on a project or have an idea in mind? Drop a
        message below, and let&apos;s create something amazing together!
      </p>
      <>
        {success ? (
          <Success status={status} />
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col  gap-4 ">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Input
                type="text"
                id="Name"
                name="Name"
                required
                placeholder="Your Name"
                value={formData.Name}
                onChange={handleChange}
                disabled={loading}
                //disabled={loading}
                // if some text area is disabled this css is used
                className="disabled:bg-white/5 disabled:text-grey-800 disabled:placeholder:text-grey-700"
              />
              <Input
                type="email"
                id="Email"
                name="Email"
                required
                placeholder="Email Address"
                value={formData.Email}
                onChange={handleChange}
                disabled={loading}
                //disabled={loading}
                // if some text area is disabled this css is used
                className="disabled:bg-white/5 disabled:text-grey-800 disabled:placeholder:text-grey-700"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Input
                type="text"
                id="Phone"
                name="Phone"
                placeholder="Phone Number"
                value={formData.Phone}
                onChange={handleChange}
                disabled={loading}
                //disabled={loading}
                // if some text area is disabled this css is used
                className="disabled:bg-white/5 disabled:text-grey-800 disabled:placeholder:text-grey-700"
              />
              <Input
                type="text"
                id="Address"
                name="Address"
                placeholder="Address"
                value={formData.Address}
                onChange={handleChange}
                disabled={loading}
                //disabled={loading}
                // if some text area is disabled this css is used
                className="disabled:bg-white/5 disabled:text-grey-800 disabled:placeholder:text-grey-700"
              />
            </div>
            <Textarea
              name="Message"
              placeholder="Text Here"
              rows={7}
              value={formData.Message}
              onChange={handleChange}
              disabled={loading}
              //disabled={loading}
              // if some text area is disabled this css is used
              className="disabled:bg-white/5 disabled:text-grey-800 disabled:placeholder:text-grey-700"
            />
            <Select onValueChange={handleSelectChange} disabled={loading}>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent className="bg-bodyColor text-white">
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="Web Development">
                    Web Development
                  </SelectItem>
                  <SelectItem value="App Development">
                    App Development
                  </SelectItem>
                  <SelectItem value="SEO Optimization">
                    SEO Optimization
                  </SelectItem>
                  <SelectItem value="Deployment">Deployment</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button
              disabled={loading}
              type="submit"
              className="w-full py-4 bg-lightSky/5 text-white/80 border border-lightSky hover:bg-lightSky/10 hover:border-lightSky hover:text-hoverColor hoverEffect"
            >
              {loading ? "Submitting message..." : "Send Message"}
            </Button>
          </form>
        )}
      </>
    </div>
  );
};

export default ContactForm;
