import React, { Fragment, useContext } from "react";
import ProductCategoryDropdown from "./ProductCategoryDropdown";
import { HomeContext } from "./index";

const ProductCategory = (props) => {
  const { data, dispatch } = useContext(HomeContext);

  return (
    <Fragment>
      <div className="flex justify-between font-medium">
        <div
          onClick={(e) =>
            dispatch({
              type: "categoryListDropdown",
              payload: !data.categoryListDropdown,
            })
          }
          className={`flex items-center space-x-1 cursor-pointer ${
            data.categoryListDropdown ? "text-blue-700" : ""
          }`}
        >
          <span className=" cat_down_head  md:text-lg hover:text-blue-700">
            Browse Categories
          </span>
          <svg
            className="w-6 h-6 cat_down_btn"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        <div className="flex space-x-2">
          <div
            onClick={(e) =>
              dispatch({
                type: "searchDropdown",
                payload: !data.searchDropdown,
              })
            }
            className={`flex items-center space-x-1 cursor-pointer ${
              data.searchDropdown ? "text-blue-700" : ""
            }`}
          >
            <span className="search_down md:text-lg">Search</span>
            <span>
              <svg
                className="w-4 h-4 text-gray-700 text-blue-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <ProductCategoryDropdown />
    </Fragment>
  );
};

export default ProductCategory;
