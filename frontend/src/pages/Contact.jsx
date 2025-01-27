import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion"; // Import framer-motion

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, description };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (data.success) {
        toast.success("Form submitted successfully!", {
          duration: 3000, // Show toast for 3 seconds
          position: "top-center",
        });

        // Navigate to home after the toast shows
        setTimeout(() => {
          navigate("/"); // Redirect to homepage
        }, 3000); // Match the duration of the toast
      } else {
        toast.error("Something went wrong, please try again.", {
          position: "top-center",
        });
      }
    } catch (error) {
      toast.error("An error occurred while submitting the form.", {
        position: "top-center",
      });
    }
  };

  return (
    <div className='container mx-auto p-8'>
      <motion.h2
        className='text-3xl font-bold text-center mb-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Contact Form
      </motion.h2>
      <motion.form
        onSubmit={handleSubmit}
        className='max-w-md mx-auto'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className='mb-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <label className='block text-lg font-medium mb-2'>Name</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full p-3 border border-gray-300 rounded-md'
            required
          />
        </motion.div>

        <motion.div
          className='mb-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <label className='block text-lg font-medium mb-2'>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full p-3 border border-gray-300 rounded-md'
            required
          />
        </motion.div>

        <motion.div
          className='mb-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <label className='block text-lg font-medium mb-2'>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='w-full p-3 border border-gray-300 rounded-md'
            rows='5'
            required
          />
        </motion.div>

        <motion.div
          className='text-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <button
            type='submit'
            className='bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600'
          >
            Submit
          </button>
        </motion.div>
      </motion.form>
      <Toaster />
    </div>
  );
};

export default Contact;
