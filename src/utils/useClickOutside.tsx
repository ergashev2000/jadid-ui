import { useEffect, RefObject } from "react";

/**
 * Hook that detects clicks outside of the provided element
 * @param ref - The ref of the element to monitor for outside clicks
 * @param onClickOutside - Function to call when click outside is detected
 */
export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  onClickOutside: () => void
) => {
  useEffect(() => {
    // Handler function to detect outside clicks
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    // Add the event listener to detect clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
};
