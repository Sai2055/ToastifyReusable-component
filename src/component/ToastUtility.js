import { useEffect } from "react";

export default function ToastUtility({
  msgInput,
  delayTime,
  toastPosition,
  toastNotification,
  setIsVisible,
}) {
  useEffect(() => {
    let timerId = setTimeout(() => {
      setIsVisible(false);
    }, delayTime);
    return () => clearTimeout(timerId);
  }, [msgInput, toastNotification, delayTime]);

  const positionStyles = {
    "Top-right": { top: "20px", right: "20px" },
    "Top-left": { top: "20px", left: "20px" },
    "Bottom-right": { bottom: "20px", right: "20px" },
    "Bottom-left": { bottom: "20px", left: "20px" },
  };
  return (
    <div>
      {toastNotification && (
        <div
          className={`Notification  ${msgInput?.toLowerCase()}`}
          style={{
            position: "absolute",
            ...positionStyles[toastPosition],
          }}
        >
          {msgInput}
        </div>
      )}
    </div>
  );
}
