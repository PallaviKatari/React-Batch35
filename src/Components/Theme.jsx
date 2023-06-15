import { useState, useEffect } from "react";

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Theme() {
  const time = useTime();
  const [color, setColor] = useState("lightcoral");
  return (
    <div style={{ marginTop: 50, marginLeft: 100 }}>
      <p>
        Pick a color:{" "}
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="lightcoral">lightcoral</option>
          <option value="green">green</option>
          <option value="rebeccapurple">rebeccapurple</option>
          <option value="red">red</option>
          <option value="purple">purple</option>
        </select>
      </p>
      <Clock color={color} time={time.toLocaleTimeString()} />
    </div>
  );
}

function Clock({ color, time }) {
  return <h1 style={{ color: color }}>{time}</h1>;
}
