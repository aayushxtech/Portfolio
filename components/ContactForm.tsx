"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  interface FormState {
    name: string;
    email: string;
    message: string;
  }

  interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
    form?: string;
  }

  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if 60 seconds have passed since last submission
    const now = Date.now();
    if (now - lastSubmissionTime < 60000) {
      setErrors((prev) => ({
        ...prev,
        form: "Please wait a minute before sending another message",
      }));
      return;
    }

    if (!validateForm()) return;

    setStatus("loading");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setLastSubmissionTime(now);

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-300 mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-gray-800/50 border 
            ${errors.name ? "border-red-500" : "border-gray-700"}
            text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 
            transition-colors duration-200`}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-300 mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-gray-800/50 border 
            ${errors.email ? "border-red-500" : "border-gray-700"}
            text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 
            transition-colors duration-200`}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-gray-800/50 border 
            ${errors.message ? "border-red-500" : "border-gray-700"}
            text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 
            transition-colors duration-200 min-h-[150px] resize-y`}
            placeholder="Your message..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
          )}
        </div>

        {/* Status Messages */}
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-green-400 bg-green-400/10 p-4 rounded-lg"
          >
            <CheckCircle className="w-5 h-5" />
            <span>Message sent successfully!</span>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-lg"
          >
            <AlertCircle className="w-5 h-5" />
            <span>Failed to send message. Please try again.</span>
          </motion.div>
        )}

        {errors.form && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-lg"
          >
            <AlertCircle className="w-5 h-5" />
            <span>{errors.form}</span>
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={status === "loading"}
          className={`group relative w-full px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 
            bg-size-200 bg-pos-0 hover:bg-pos-100 text-white rounded-lg font-semibold 
            transition-all duration-500 ease-out flex items-center justify-center gap-2
            shadow-[0_4px_20px_-1px_rgba(79,70,229,0.3)]
            hover:shadow-[0_4px_20px_-1px_rgba(79,70,229,0.5)]
            disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <span>{status === "loading" ? "Sending..." : "Send Message"}</span>
          <Send className="w-4 h-4" />
          <motion.span
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 
              opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
            style={{ filter: "blur(8px)" }}
          />
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
