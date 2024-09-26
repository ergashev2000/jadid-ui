import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { XClose } from "../../assets/svgs/svgIcons";

export interface NotificationProps {
  message: React.ReactNode;
  description: React.ReactNode;
  duration?: number;
  showProgress?: boolean;
  pauseOnHover?: boolean;
  placement?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  icon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onClose?: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  message,
  description,
  duration = 5,
  showProgress = false,
  pauseOnHover = true,
  placement = "topRight",
  icon,
  closeIcon,
  className,
  onClick,
  onClose,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(100);
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [isEntering, setIsEntering] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsEntering(false), 50);
  }, []);

  useEffect(() => {
    if (duration && duration > 0) {
      let interval: NodeJS.Timeout;
      let startTime = Date.now();
      const totalDuration = duration * 1000;

      if (!isHovered) {
        interval = setInterval(() => {
          const elapsed = Date.now() - startTime;
          const newProgress = Math.max(0, 100 - (elapsed / totalDuration) * 100);
          setProgress(newProgress);

          if (newProgress <= 0) {
            clearInterval(interval);
            handleClose();
          }
        }, 100);
      }

      return () => clearInterval(interval);
    }
    return undefined
  }, [duration, isHovered]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose && onClose();
    }, 300);
  };

  if (!isVisible) return null;

  const modalClasses = classNames(
    "fixed p-4 max-w-sm w-full bg-white rounded-lg shadow-lg z-50 transition-all duration-300",
    className,
    {
      "top-4 right-4 transform translate-x-full opacity-0": placement === "topRight" && isExiting,
      "top-4 right-4 transform translate-x-0 opacity-100": placement === "topRight" && !isExiting && !isEntering,
      "top-4 right-4 transform translate-x-full opacity-0 entering": placement === "topRight" && isEntering,
      "top-4 left-4 transform -translate-x-full opacity-0": placement === "topLeft" && isExiting,
      "top-4 left-4 transform translate-x-0 opacity-100": placement === "topLeft" && !isExiting && !isEntering,
      "top-4 left-4 transform -translate-x-full opacity-0 entering": placement === "topLeft" && isEntering,
      "bottom-4 right-4 transform translate-x-full opacity-0": placement === "bottomRight" && isExiting,
      "bottom-4 right-4 transform translate-x-0 opacity-100": placement === "bottomRight" && !isExiting && !isEntering,
      "bottom-4 right-4 transform translate-x-full opacity-0 entering": placement === "bottomRight" && isEntering,
      "bottom-4 left-4 transform -translate-x-full opacity-0": placement === "bottomLeft" && isExiting,
      "bottom-4 left-4 transform translate-x-0 opacity-100": placement === "bottomLeft" && !isExiting && !isEntering,
      "bottom-4 left-4 transform -translate-x-full opacity-0 entering": placement === "bottomLeft" && isEntering,
    }
  );

  return (
    <div
      className={modalClasses}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
      onClick={onClick}
    >
      <div className="flex items-start">
        {icon && <div className="mr-3">{icon}</div>}
        <div className="flex-1">
          <div className="font-bold text-lg">{message}</div>
          <div className="text-gray-600">{description}</div>
        </div>
        <button
          className="ml-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white rounded hover:bg-gray-100 transition-all duration-300 w-5 h-5 flex justify-center items-center [&>svg]:w-4"
          onClick={handleClose}
        >
          {closeIcon ? closeIcon : <XClose />}
        </button>
      </div>

      {showProgress && (
        <div className="relative w-full h-1 mt-2 bg-gray-300 rounded overflow-hidden">
          <div
            style={{ width: `${progress}%`, transition: "width 0.2s" }}
            className="absolute top-0 left-0 h-full bg-blue-500 rounded"
          ></div>
        </div>
      )}
    </div>
  );
};

export default Notification;
