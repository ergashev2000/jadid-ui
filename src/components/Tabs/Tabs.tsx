import React, { useState, useEffect, ReactNode, useRef } from "react";
import classNames from "classnames";

interface TabPaneProps {
  key: string;
  tab: ReactNode;
  children: ReactNode;
}

export interface TabsProps {
  defaultActiveKey?: string;
  className?: string;
  tabBarClassName?: string;
  contentClassName?: string;
  onTabChange?: (key: string) => void;
  vertical?: boolean;
  position?: "left" | "right";
  children?: React.ReactElement<
    TabPaneProps,
    string | React.JSXElementConstructor<any>
  >[];
}

export const TabPane: React.FC<TabPaneProps> = ({ children }) => {
  return <>{children}</>;
};

const Tabs: React.FC<TabsProps> = ({
  defaultActiveKey,
  className,
  tabBarClassName,
  contentClassName,
  onTabChange,
  vertical = false,
  position = "left",
  children = [],
}) => {
  const [activeKey, setActiveKey] = useState(
    defaultActiveKey || children[0]?.key
  );
  const [underlineStyle, setUnderlineStyle] = useState({});
  const tabListRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (key: string) => {
    setActiveKey(key);
    if (onTabChange) {
      onTabChange(key);
    }
  };

  const updateUnderline = () => {
    const activeTab = tabListRef.current?.querySelector(
      `[data-key="${activeKey}"]`
    ) as HTMLElement;

    if (activeTab) {
      const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = activeTab;

      setUnderlineStyle({
        width: vertical ? "2px" : `${offsetWidth}px`,
        height: vertical ? `${offsetHeight}px` : "2px",
        transform: vertical
          ? `translateY(${offsetTop}px)`
          : `translateX(${offsetLeft}px)`,
        transition: "transform 0.3s ease, width 0.3s ease, height 0.3s ease",
      });
    }
  };

  useEffect(() => {
    updateUnderline();
    window.addEventListener("resize", updateUnderline);
    return () => {
      window.removeEventListener("resize", updateUnderline);
    };
  }, [activeKey, vertical]);

  return (
    <div className={classNames("flex", className, { "flex-col": !vertical })}>
      {(!vertical || (vertical && position === "left")) && (
        <div
          ref={tabListRef}
          className={classNames("flex relative", tabBarClassName, {
            "flex-col ": vertical,
          })}
        >
          {children?.map((child) =>
            child ? (
              <button
                key={child.key}
                data-key={child.key}
                className={classNames(
                  "py-2 px-4 transition-colors duration-200 text-start relative",
                  activeKey === child.key
                    ? "text-blue-500 dark:text-blue-300"
                    : "hover:text-blue-500 dark:hover:text-blue-300",
                  vertical
                    ? "border-l-2 border-transparent dark:border-gray-700"
                    : "border-b-2 border-transparent dark:border-gray-700"
                )}
                onClick={() => handleTabClick(child.key as string)}
              >
                {child.props.tab}
              </button>
            ) : null
          )}
          <span
            className={`absolute bg-blue-500 dark:bg-blue-300 ${
              vertical ? "" : "bottom-0"
            }`}
            style={underlineStyle}
          />
        </div>
      )}

      <div
        className={classNames(
          "p-4 dark:bg-gray-800 dark:text-gray-200",
          contentClassName,
          {
            "w-4/5": vertical,
          }
        )}
      >
        {children?.map(
          (child) =>
            child &&
            activeKey === child.key && (
              <div key={child.key} className="tab-pane">
                {child.props.children}
              </div>
            )
        )}
      </div>

      {vertical && position === "right" && (
        <div
          ref={tabListRef}
          className={classNames(
            "flex flex-col relative",
            tabBarClassName,
            "ml-4"
          )}
        >
          {children?.map((child) =>
            child ? (
              <button
                key={child.key}
                data-key={child.key}
                className={classNames(
                  "py-2 px-4 transition-colors duration-200 relative",
                  activeKey === child.key
                    ? "text-blue-500 dark:text-blue-300"
                    : "hover:text-blue-500 dark:hover:text-blue-300",
                  "border-l-2 border-transparent dark:border-gray-700"
                )}
                onClick={() => handleTabClick(child.key as string)}
              >
                {child.props.tab}
              </button>
            ) : null
          )}
          <span
            className="absolute bg-blue-500 dark:bg-blue-300"
            style={underlineStyle}
          />
        </div>
      )}
    </div>
  );
};

export default Tabs;
