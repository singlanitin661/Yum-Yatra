import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-wrap items-center justify-center mx-28">
        <div className="about-left px-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Welcome to <br /> The world of
            
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-orange-500 pl-12 my-5 py-4 rounded-lg text-white">
              Tasty & Fresh Food
            </h1>
          <h4 className="text-lg md:text-xl lg:text-2xl xl:text-3xl pt-4 italic">
            "Better you will feel if you eat a Namaste
            <span className="text-dark-orange">Food</span> healthy meal"
          </h4>
        </div>
        <div className="about-right px-4 ml-auto">
          <img
            src="https://png.pngtree.com/png-clipart/20230414/original/pngtree-isolated-burger-on-transparent-background-png-image_9055072.png"
            alt="Food Image"
            className="w-full md:w-96 lg:w-96 xl:w-96"
          />
        </div>
      </div>
    );
  }
}

export default About;
