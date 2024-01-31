import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="flex flex-wrap justify-around my-10">
      <div className="contact-left">
        <img
          src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1706313600&semt=ais"
          alt=""
        />
      </div>
      <div className="contact-right flex flex-col items-center justify-center text-2xl">
        <h1 className="text-4xl mb-6">Contact us</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center p-8"
        >
          <input
            type="text"
            placeholder="Name"
            required
            className="w-[400px] p-2 m-2 border-2 border-aabcca rounded"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-[400px] p-2 m-2 border-2 border-aabcca rounded"
          />
          <textarea
            placeholder="Type your Message here..."
            required
            className="w-[400px] p-2  m-2 border-2 border-aabcca rounded"
          ></textarea>
          <button
            type="submit"
            className="w-28 py-2 m-2 bg-gray-700 hover:bg-gray-900 text-white font-lg rounded"
          >
            Submit
          </button>
          {message && (
            <span className="mt-2">
              Thanks for contacting NamasteFood, We will reply ASAP.
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
