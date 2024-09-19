import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { ChevronLeft, ChevronRight } from "../../assets/svgs/svgIcons";

export interface PaginationProps {
  align?: "start" | "center" | "end";
  current?: number;
  defaultCurrent?: number;
  defaultPageSize?: number;
  disabled?: boolean;
  hideOnSinglePage?: boolean;
  itemRender?: (
    page: number,
    type: "page" | "prev" | "next",
    originalElement: React.ReactNode
  ) => React.ReactNode;
  pageSize?: number;
  pageSizeOptions?: (string | number)[];
  showQuickJumper?: boolean | { goButton: React.ReactNode };
  showSizeChanger?: boolean;
  showTitle?: boolean;
  showTotal?: (total: number, range: [number, number]) => React.ReactNode;
  size?: "default" | "small";
  total: number;
  onChange: (page: number, pageSize: number) => void;
  onShowSizeChange?: (current: number, size: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  align = "center",
  current,
  defaultCurrent = 1,
  defaultPageSize = 10,
  disabled = false,
  hideOnSinglePage = false,
  itemRender,
  pageSize = defaultPageSize,
  pageSizeOptions = [10, 20, 50, 100],
  showQuickJumper = false,
  showSizeChanger = true,
  showTitle = true,
  showTotal,
  size = "default",
  total,
  onChange,
  onShowSizeChange,
}) => {
  const [activePage, setActivePage] = useState(current || defaultCurrent);
  const [activePageSize, setActivePageSize] = useState(pageSize);

  const totalPages = Math.ceil(total / activePageSize);

  useEffect(() => {
    if (current) {
      setActivePage(current);
    }
  }, [current]);

  const handlePageChange = (page: number) => {
    setActivePage(page);
    if (onChange) onChange(page, activePageSize);
  };

  const handlePageSizeChange = (size: number) => {
    setActivePageSize(size);
    if (onShowSizeChange) onShowSizeChange(activePage, size);
    handlePageChange(1);
  };

  if (hideOnSinglePage && totalPages <= 1) {
    return null;
  }
  const buttonSize = size === "small" ? "w-8 h-8" : "w-10 h-10";

  const renderPageButtons = () => {
    const buttons = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            disabled={disabled}
            className={classNames(
              `px-2 py-1 border rounded-md mx-1 ${buttonSize}`,
              {
                "border border-blue-500 text-white bg-blue-500":
                  activePage === i,
                "border border-blue-500 text-black bg-transparent dark:text-white":
                  activePage !== i,
                "disabled:opacity-50": disabled,
              }
            )}
          >
            {itemRender ? itemRender(i, "page", null) : i}
          </button>
        );
      }
    } else {
      buttons.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          disabled={disabled}
          className={classNames(`${buttonSize} border rounded-md mx-1`, {
            "bg-blue-500 text-white": activePage === 1,
            "border-gray-200 hover:bg-blue-500 text-black bg-transparent dark:text-white":
              activePage !== 1,
            "disabled:opacity-50": disabled,
          })}
        >
          1
        </button>
      );

      if (activePage > 4) {
        buttons.push(
          <span key="ellipsis-start" className="mx-1">
            ...
          </span>
        );
      }

      const start = Math.max(2, activePage - 1);
      const end = Math.min(totalPages - 1, activePage + 1);

      for (let i = start; i <= end; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            disabled={disabled}
            className={classNames(`${buttonSize} border rounded-md mx-1`, {
              "bg-blue-500 text-white": activePage === i,
              "border-gray-200 hover:bg-blue-500 text-black bg-transparent dark:text-white":
                activePage !== i,
              "disabled:opacity-50": disabled,
            })}
          >
            {itemRender ? itemRender(i, "page", null) : i}
          </button>
        );
      }

      if (activePage < totalPages - 4) {
        buttons.push(
          <span key="ellipsis-end" className="mx-1">
            ...
          </span>
        );
      }

      buttons.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          disabled={disabled}
          className={classNames(`${buttonSize} border rounded-md mx-1`, {
            "bg-blue-500 text-white": activePage === totalPages,
            "hover:bg-blue-500 text-black bg-transparent dark:text-white":
              activePage !== totalPages,
            "disabled:opacity-50": disabled,
          })}
        >
          {totalPages}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div
      className={classNames(
        "pagination flex text-black dark:text-white items-center",
        {
          "justify-start": align === "start",
          "justify-center": align === "center",
          "justify-end": align === "end",
          "text-sm": size === "small",
        }
      )}
    >
      {showTitle && (
        <div className="pagination-title font-semibold mr-4 dark:text-white">
          Pagination
        </div>
      )}

      <button
        onClick={() => handlePageChange(Math.max(activePage - 1, 1))}
        disabled={activePage === 1 || disabled}
        className={`${buttonSize} flex justify-center items-center border border-blue-500 rounded-md bg-transparent hover:bg-blue-500 disabled:opacity-50 text-black dark:text-white`}
      >
        <ChevronLeft />
      </button>

      {renderPageButtons()}

      <button
        onClick={() => handlePageChange(Math.min(activePage + 1, totalPages))}
        disabled={activePage === totalPages || disabled}
        className={`${buttonSize} flex justify-center items-center border border-blue-500 rounded-md bg-transparent hover:bg-blue-400 disabled:opacity-50 text-black dark:text-white`}
      >
        <ChevronRight />
      </button>

      {showSizeChanger && (
        <select
          onChange={(e) => handlePageSizeChange(Number(e.target.value))}
          value={activePageSize}
          className={`${buttonSize} w-auto ml-4 border rounded-md p-1 bg-transparent text-black dark:text-white`}
        >
          {pageSizeOptions.map((option) => (
            <option
              key={option}
              value={option}
              className="bg-white text-black dark:bg-gray-800 dark:text-white"
            >
              {option}
            </option>
          ))}
        </select>
      )}

      {showQuickJumper && (
        <div className="ml-4">
          Jump to page:
          <input
            type="number"
            min={1}
            max={totalPages}
            className={`${buttonSize} w-auto border rounded-md p-1 mx-1 bg-transparent text-black dark:text-white`}
            onChange={(e) => handlePageChange(Number(e.target.value))}
          />
          {typeof showQuickJumper === "object" && showQuickJumper.goButton}
        </div>
      )}

      {showTotal && (
        <div className="ml-4 dark:text-white">
          {showTotal(total, [
            (activePage - 1) * activePageSize + 1,
            Math.min(activePage * activePageSize, total),
          ])}
        </div>
      )}
    </div>
  );
};

export default Pagination;
