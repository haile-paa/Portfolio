import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

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
      <h2 className='text-3xl font-bold text-center mb-4'>Contact Form</h2>
      <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
        <div className='mb-4'>
          <label className='block text-lg font-medium mb-2'>Name</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full p-3 border border-gray-300 rounded-md'
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-lg font-medium mb-2'>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full p-3 border border-gray-300 rounded-md'
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-lg font-medium mb-2'>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='w-full p-3 border border-gray-300 rounded-md'
            rows='5'
            required
          />
        </div>

        <div className='text-center'>
          <button
            type='submit'
            className='bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600'
          >
            Submit
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default Contact;
