import { useState } from "react";
import ToastUtility from "./ToastUtility";

export default function ToastProp() {
  const [input, setInput] = useState(null);
  const [timer, setTimer] = useState(null);
  const [position, setPosition] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const delay = ["2000", "3000", "4000", "5000"];
  function handleInput(e) {
    setInput(e.target.value);
  }
  function handleDelay(e) {
    setTimer(Number(e.target.value));
    // console.log(timer);
  }
  function handlePosition(e) {
    setPosition(e.target.value);
  }
  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <div>
        <h1>Toast Notification</h1>
        <div></div>
        <label htmlFor=" "> Enter the Notification Type : </label>
        <input
          type="text"
          value={input}
          placeholder=" Eg: success"
          onChange={handleInput}
        />
        <div>
          <label htmlFor="">Select the Delay </label>
          <select name="" id="" onChange={handleDelay}>
            <option value="--select the value--">--select the value--</option>
            {delay.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <div>
            <input
              type="radio"
              name="position"
              value="Top-right"
              onChange={handlePosition}
            />
            <label>Top-right</label>
          </div>

          <div>
            <input
              type="radio"
              name="position"
              value="Top-left"
              onChange={handlePosition}
            />
            <label>Top-left</label>
          </div>

          <div>
            <input
              type="radio"
              name="position"
              value="Bottom-right"
              onChange={handlePosition}
            />
            <label>Bottom-right</label>
          </div>

          <div>
            <input
              type="radio"
              name="position"
              value="Bottom-left"
              onChange={handlePosition}
            />
            <label>Bottom-left</label>
          </div>
        </div>
        <div>
          <button onClick={handleClick}>Push the ToastNotification</button>
        </div>
        <ToastUtility
          msgInput={input}
          delayTime={timer}
          toastPosition={position}
          toastNotification={isVisible}
          setIsVisible={setIsVisible}
        />
      </div>
    </div>
  );
}
