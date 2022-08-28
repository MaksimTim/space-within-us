import React from "react";

const About = () => {
  return (
    <div className="grid justify-items-center p-2 m-10 border-2 rounded-md shadow-md">
      <h1 className="text-xl m-1">Hello! It's me, Max.</h1>
      <img
        width={650}
        src={
          "https://sun9-86.userapi.com/impf/c626626/v626626923/2cdb7/L3NYeSyAg2s.jpg?size=2560x1707&quality=96&sign=c4b8e5a91bb769a83b671f1c694af029&type=album"
        }
        alt={"myPhoto"}
      />
      <div className="text-xl my-2">I am a junior frontend developer.</div>
      <div className='bg-blue-100 rounded-md p-2'>
        <div className="font-bold text-center">My stack:</div>
        <ul>
          <li>JavaScript, TypeScript</li>
          <li>React</li>
          <li>Redux ToolKit (RTK Query)</li>
          <li>CSS (sass)</li>
          <li>Tailwind CSS</li>
          <li></li>
        </ul>
      </div>
        <div className='text-center my-1'>
            <div className="font-bold text-center">My resources:</div>
            <div><a className='text-blue-900 no-underline hover:underline' href='https://github.com/MaksimTim'>GitHub</a></div>
            <div><a className='text-blue-900 no-underline hover:underline' href='https://www.codewars.com/users/MaksimTim'>Codewars</a></div>
            <div><a className='text-blue-900 no-underline hover:underline' href='https://vk.com/makstrueman'>VK</a></div>
        </div>
    </div>
  );
};

export default About;
