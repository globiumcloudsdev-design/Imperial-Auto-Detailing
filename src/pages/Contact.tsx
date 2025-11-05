"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Loader2,
  Calendar,
} from "lucide-react";
import ContactConfirmationModal from "@/components/ContactConfirmationModal";
import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zipCode: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, "");
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
        3,
        6
      )}-${phoneNumber.slice(6, 10)}`;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let formattedValue = value;
    if (name === "phone") {
      formattedValue = formatPhoneNumber(value);
    }
    setFormData((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setShowConfirmation(true);
        toast({
          title: "Message Sent",
          description: "Your inquiry has been received. Expect a prompt reply!",
          duration: 3000,
        });
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to send message.",
          variant: "destructive",
          duration: 3000,
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      zipCode: "",
      message: "",
    });
  };

  const primaryColor = "text-red-600";
  const primaryBg = "bg-red-600 hover:bg-red-700";
  const darkBg = "bg-gray-900 dark:bg-gray-950";

  const buttonClassName = `${primaryBg} text-white font-bold tracking-wider rounded-lg shadow-xl transition-all duration-300 transform hover:-translate-y-0.5`;

  const contactInfo = [
    {
      icon: Phone,
      title: "Immediate Assistance",
      detail: "(555) 555-DETAILING",
      link: "tel:+15555555555",
    },
    {
      icon: Mail,
      title: "General Inquiries",
      detail: "info@imperialautodetailing.com",
      link: "mailto:info@imperialautodetailing.com",
    },
    {
      icon: MapPin,
      title: "Mobile Service Coverage",
      detail: "Serving Premium Clients within 30 miles of Downtown.",
      link: "#",
    },
  ];

  const businessHours = [
    "Mon - Fri: 8:00 AM - 6:00 PM",
    "Saturday: 9:00 AM - 4:00 PM (By Appointment)",
    "Sunday: Closed",
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-200 pt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <motion.header
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <p className="text-xl font-semibold uppercase tracking-widest text-gray-500">
            Connect With Excellence
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4 tracking-tight">
            The <span className={primaryColor}>Imperial</span> Concierge
          </h1>
          <div className="w-32 h-1 bg-gray-300 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mt-6">
            Whether for a quote, scheduling, or a bespoke service consultation,
            our team is ready to assist you in preserving your vehicle's legacy.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Contact Info Column */}
          <motion.div
            className={`lg:col-span-1 ${darkBg} rounded-2xl shadow-2xl p-8 sticky top-10`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-3xl font-extrabold mb-8 text-white border-b border-red-600/50 pb-3">
              Elite Support
            </h2>

            <div className="space-y-8 mb-10">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <item.icon
                    size={28}
                    className={`mr-4 flex-shrink-0 mt-0.5 ${primaryColor}`}
                  />
                  <div>
                    <p className="font-bold uppercase text-sm tracking-wider text-red-500">
                      {item.title}
                    </p>
                    {item.link !== "#" ? (
                      <a
                        href={item.link}
                        className="text-gray-100 text-lg hover:text-red-400 transition-colors block mt-0.5"
                      >
                        {item.detail}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-lg mt-0.5">
                        {item.detail}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-red-600/50">
              <div className="flex items-center mb-4">
                <Clock size={24} className={`mr-3 ${primaryColor}`} />
                <p className="font-bold uppercase tracking-wider text-red-500 text-lg">
                  Operational Hours
                </p>
              </div>
              <ul className="space-y-1 text-gray-300 text-md pl-1">
                {businessHours.map((hour, index) => (
                  <li key={index} className="flex justify-between">
                    {hour}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-10">
              Submit Your Inquiry
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Full Name <span className={primaryColor}>*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Johnathan Doe"
                    className="h-12 border-gray-300 dark:border-gray-600 bg-gray-100 text-gray-900 focus:border-red-500 focus:ring-red-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email Address <span className={primaryColor}>*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="h-12 border-gray-300 dark:border-gray-600 bg-gray-100 text-gray-900 focus:border-red-500 focus:ring-red-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 555-5555"
                    className="h-12 border-gray-300 dark:border-gray-600 bg-gray-100 text-gray-900 focus:border-red-500 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="zipCode"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    ZIP Code
                  </label>
                  <Input
                    id="zipCode"
                    name="zipCode"
                    type="text"
                    value={formData.zipCode}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "").slice(0, 5);
                      setFormData((prev) => ({ ...prev, zipCode: value }));
                    }}
                    placeholder="12345"
                    maxLength={5}
                    className="h-12 border-gray-300 dark:border-gray-600 bg-gray-100 text-gray-900 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your vehicle and the service you need..."
                  rows={8}
                  className="border-gray-300 dark:border-gray-600 bg-gray-100 text-gray-900 focus:border-red-500 focus:ring-red-500"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <Button
                  type="submit"
                  className={`flex-1 h-14 text-xl group ${buttonClassName} shadow-red-500/60`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                      Dispatching Concierge...
                    </>
                  ) : (
                    <>
                      Send
                      <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="flex-none h-14 px-8 text-lg border-red-600 text-red-600 hover:bg-white hover:text-red-700"
                >
                  <a href="/booking" className="flex items-center">
                    <Calendar size={20} className="mr-2" />
                    Book Online
                  </a>
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Mobile Service Map Section */}
      <motion.div
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Our Mobile Showroom
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
            We bring the finest detailing services right to your home or office.
          </p>
        </div>

        <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-red-600">
          <Image
            src={"/about_us.png"}
            alt="Imperial Auto Detailing Service Area Map"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-60 dark:opacity-40 transition-opacity"
            priority
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="p-8 text-center border-2 border-red-600 bg-black/50 rounded-lg">
              <p className="text-white text-3xl font-extrabold tracking-widest uppercase">
                Your Location is Our Studio
              </p>
              <p className="text-red-400 text-xl mt-2 font-medium">
                Premier Mobile Detailing within 30 miles.
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center text-white text-sm font-semibold border-b border-red-600 hover:text-red-400 transition-colors"
              >
                View Full Coverage Map
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <ContactConfirmationModal
        open={showConfirmation}
        onClose={handleCloseConfirmation}
        formData={formData}
        title="Message Sent Successfully!"
        description={`Thank you ${formData.name}! Your Imperial inquiry has been submitted. We'll be in touch with you shortly at ${formData.email}.`}
      />
    </div>
  );
};

export default Contact;
