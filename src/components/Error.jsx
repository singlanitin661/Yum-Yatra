import { useRouteError, Link } from "react-router-dom";
import logo from "./404_Error.png";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#edebe6]">
      <img src={logo} alt="Error Image" className="mb-4 max-w-full" />
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center">
        Oops! The restaurant you're looking for can't be found.
      </h1>
      {err.data && (
        <h3 className="py-2 text-sm md:text-base lg:text-lg">{err.data}</h3>
      )}
      <div className="mt-4">
        <Link
          to="/"
          className="text-white py-2 px-6 rounded-full text-sm md:text-base lg:text-lg hover:bg-gray-600 transition duration-300 inline-block  bg-black"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
