import { useState, useEffect } from "react";

//user defined hook
export function useTime() {
  const [time, setTime] = useState(() => new Date());
  //The useEffect Hook allows you to perform side effects in your components.
  //Some examples of side effects are: fetching data, directly updating the DOM, and timers.
  //useEffect accepts two arguments. The second argument is optional.
  //useEffect(<function>, <dependency>)
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

//Theme using useState
export default function Theme() {
  const time = useTime();
  const [color, setColor] = useState("lightcoral");
  return (
    <div style={{ float: "right" ,marginRight:20}}>
      <p>
        <Avatar /> Pick a color:{" "}
        {/* color-lightcoral when the component is loaded */}
        {/* <p style={{color:color}}>{color}</p> */}
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="lightcoral">lightcoral</option>
          <option value="green">green</option>
          <option value="rebeccapurple">rebeccapurple</option>
          <option value="red">red</option>
          <option value="purple">purple</option>
          <option value="pink">pink</option>
          <option value="yellow">yellow</option>
        </select>
      </p>
      <Clock color={color} time={time.toLocaleTimeString()} />
    </div>
  );
}

//Applying the theme to the current time
//Clock - Child Component for Theme Component
function Clock({ color, time }) {
  return <h1 style={{ color: color }}>{time}</h1>;
}

//Avatar
//JavaScript in JSX with Curly Braces
function Avatar() {
  const avatar =
    "https://th.bing.com/th/id/R.9f2792eb1d7d6b632b49a3f480730783?rik=YwNxwb64q93SFg&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fdir%2fxRj%2fdirxRjx6T.png&ehk=DptJh%2fkpyKhs9ApitcZqaDtipy7YGQibdxkE7bsxcpE%3d&risl=&pid=ImgRaw&r=0";
  const description = "Jancy";
  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
      style={{ borderRadius: 70 }}
      height={100}
      width={100}
    />
  );
}
