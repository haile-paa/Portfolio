import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/admin/messages`
        );
        const result = await response.json();
        console.log(result); // Log the full response to check the structure
        if (result.success) {
          setMessages(result.data); // Set the messages array from the 'data' property
        } else {
          console.error("Failed to fetch messages");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching messages:", error);
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) {
    return <p>Loading messages...</p>;
  }

  return (
    <div className='container mx-auto p-8'>
      <h1 className='text-3xl font-bold mb-6'>User Messages</h1>
      {messages.length > 0 ? (
        <div className='overflow-x-auto'>
          <table className='table-auto w-full border-collapse border border-gray-200'>
            <thead>
              <tr>
                <th className='border border-gray-300 px-4 py-2'>Name</th>
                <th className='border border-gray-300 px-4 py-2'>Email</th>
                <th className='border border-gray-300 px-4 py-2'>
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg, index) => (
                <tr key={index}>
                  <td className='border border-gray-300 px-4 py-2'>
                    {msg.name}
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    {msg.email}
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    {msg.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No messages found.</p>
      )}
    </div>
  );
};

export default Dashboard;
