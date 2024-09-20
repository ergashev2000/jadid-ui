import React from "react";

interface RouteItemType {
  className?: string;
  dropdownProps?: object;
  href?: string;
  menu?: object;
  onClick?: (e: React.MouseEvent) => void;
  title: React.ReactNode;
  icon?: React.ReactNode;
}

interface SeparatorType {
  type: "separator";
  separator?: React.ReactNode;
}

type BreadcrumbItem = RouteItemType | SeparatorType;

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  itemRender?: (
    route: RouteItemType,
    params: any,
    routes: BreadcrumbItem[],
    paths: string[]
  ) => React.ReactNode;
  params?: object;
  separator?: React.ReactNode;
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  itemRender,
  params = {},
  separator = "/",
  className,
}) => {
  return (
    <nav className={`flex items-center text-sm ${className}`}>
      {items.map((item, index) => {
        if ("type" in item && item.type === "separator") {
          return (
            <span key={index} className="mx-2 text-gray-400">
              {item.separator || separator}
            </span>
          );
        }

        const { title, href, onClick, icon } = item as RouteItemType;

        return (
          <React.Fragment key={index}>
            {itemRender ? (
              itemRender(item as RouteItemType, params, items, [])
            ) : (
              <span className={`flex items-center`}>
                {icon && <span className="mr-1">{icon}</span>}
                {href ? (
                  <a
                    href={href}
                    className={`flex items-center ${className}`}
                  >
                    {title}
                  </a>
                ) : (
                  <button
                    onClick={onClick}
                    className={`flex items-center ${className}`}
                  >
                    {title}
                  </button>
                )}
              </span>
            )}
            {index < items.length - 1 && (
              <span className={`mx-2 text-gray-400`}>{separator}</span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
