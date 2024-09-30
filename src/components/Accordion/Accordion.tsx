import { ChevronRight } from "../../assets/svgs/svgIcons";
import React, { useState, useRef } from "react";
import clsx from "clsx";

interface AccordionItem {
  key: string;
  label: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  bordered?: boolean;
  collapsible?: "header" | "icon" | "disabled";
  defaultActiveKey?: string[];
  expandIconPosition?: "start" | "end";
  ghost?: boolean;
  onChange?: (activeKeys: string[]) => void;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  bordered = true,
  collapsible = "header",
  defaultActiveKey = [],
  expandIconPosition = "end",
  ghost = false,
  onChange,
}) => {
  const [activeKeys, setActiveKeys] = useState<string[]>(defaultActiveKey);

  const toggleAccordion = (key: string) => {
    let updatedKeys;
    if (activeKeys.includes(key)) {
      updatedKeys = activeKeys.filter((activeKey) => activeKey !== key);
    } else {
      updatedKeys = [...activeKeys, key];
    }
    setActiveKeys(updatedKeys);
    if (onChange) onChange(updatedKeys);
  };

  return (
    <div
      className={clsx("w-full", {
        "bg-transparent": ghost,
        "bg-white": !ghost,
        "border border-gray-300": bordered,
      })}
    >
      {items.map((item) => (
        <AccordionItemComponent
          key={item.key}
          item={item}
          active={activeKeys.includes(item.key)}
          toggleAccordion={toggleAccordion}
          collapsible={collapsible}
          expandIconPosition={expandIconPosition}
          ghost={ghost}
          bordered={bordered}
        />
      ))}
    </div>
  );
};

interface AccordionItemProps {
  item: AccordionItem;
  active: boolean;
  toggleAccordion: (key: string) => void;
  collapsible: "header" | "icon" | "disabled";
  expandIconPosition: "start" | "end";
  ghost: boolean;
  bordered: boolean;
}

const AccordionItemComponent: React.FC<AccordionItemProps> = ({
  item,
  active,
  toggleAccordion,
  collapsible,
  expandIconPosition,
  ghost,
  bordered,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      key={item.key}
      className={clsx("border-b last:border-b-0", {
        "border-gray-200": bordered,
      })}
    >
      <button
        onClick={() =>
          collapsible !== "disabled" ? toggleAccordion(item.key) : undefined
        }
        className={clsx(
          "w-full p-4 text-left font-medium flex items-center justify-between",
          collapsible === "header" && "cursor-pointer",
          ghost ? "hover:bg-gray-100" : "bg-gray-100 hover:bg-gray-200",
          { "text-blue-600": active, "text-gray-900": !active }
        )}
      >
        <span>{item.label}</span>
        {collapsible !== "disabled" && (
          <div className="h-4 block">
            {expandIconPosition === "start" ? (
              <div
                className={clsx("transition-transform duration-300", {
                  "rotate-90": active,
                })}
              >
                <ChevronRight />
              </div>
            ) : (
              <div
                className={clsx("transition-transform duration-300", {
                  "rotate-90": active,
                })}
              >
                <ChevronRight />
              </div>
            )}
          </div>
        )}
      </button>

      {/* Smooth transition for the content */}
      <div
        ref={contentRef}
        className={clsx(
          "overflow-hidden transition-all duration-500 ease-in-out",
          { "max-h-[500px]": active, "max-h-0": !active }
        )}
        style={{ maxHeight: active ? contentRef.current?.scrollHeight : 0 }}
      >
        <div className="p-4 bg-white text-gray-700">{item.content}</div>
      </div>
    </div>
  );
};

export default Accordion;
