import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import { useClickOutside } from "../../utils/useClickOutside";
import { XClose } from "../../assets/svgs/svgIcons";
import Button from "../../components/Button/Button";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [show, setShow] = useState(isOpen);
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, onClose);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      setTimeout(() => setShow(false), 300);
    }
  }, [isOpen]);

  if (!show) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className={classNames(
          "fixed inset-0 bg-black transition-opacity duration-300",
          isAnimating ? "opacity-50" : "opacity-0"
        )}
      ></div>

      <div
        ref={modalRef}
        className={classNames(
          "bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow-lg p-6 w-full max-w-lg transform transition-all duration-300",
          isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-95",
          className
        )}
      >
        {title && (
          <div className="flex justify-between items-center border-b pb-2 dark:border-gray-700">
            <h3 className="text-lg font-medium">{title}</h3>
            <button
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 w-7 h-7 flex justify-center items-center"
              onClick={onClose}
            >
              <XClose />
            </button>
          </div>
        )}

        <div className="mt-4">{children}</div>

        <div className="flex justify-end mt-6">
          <Button type="primary" onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
