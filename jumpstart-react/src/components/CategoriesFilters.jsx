import React from "react";
import "./CategoriesFilters.css";

const CategoriesFilters = () => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-10">
          <div className="">
            <div className="input-group input-height ">
              <input
                type="text"
                className="form-control input-height"
                placeholder="Search for a category"
              ></input>
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="dropdown">
            <button
              className="btn btn-large btn-secondary dropdown-toggle p-3 rounded-pill"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
            >
              Filter categories
            </button>
            <div className="dropdown-menu">
              <button className="dropdown-item">
                <h5>Most Popular</h5>
              </button>
              <button className="dropdown-item">
                <h5>Discover</h5>
              </button>
              <button className="dropdown-item">
                <h5>Another</h5>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesFilters;
