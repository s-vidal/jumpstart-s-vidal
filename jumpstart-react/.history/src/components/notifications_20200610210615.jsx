import React, {useState} from "react";
import "./Category.css";
import Filters from "../components/Filters";

const NotificationsItems = (props) => {
  const [successSubmit, setSuccessSubmit] = useState("");
  const {title, description, img, onClick, id, color} = props;

  const handleOnSubmit = () => {
    setSuccessSubmit(true);
    setTimeout(() => {
      setSuccessSubmit(false);
    }, 2000);
  };

  const defineColor = () => {
    if (color === "red") {
      return "category-div shadow-lg bg-yoga";
    } else if (id == 1) {
      return "category-div shadow-lg bg-hiking";
    } else if (id == 2) {
      return "category-div shadow-lg bg-2";
    } else if (id == 3) {
      return "category-div shadow-lg bg-3";
    } else if (id == 4) {
      return "category-div shadow-lg bg-4";
    } else if (id == 5) {
      return "category-div shadow-lg bg-5";
    } else if (id == 6) {
      return "category-div shadow-lg bg-6";
    } else if (id == 7) {
      return "category-div shadow-lg bg-7";
    } else if (id == 8) {
      return "category-div shadow-lg bg-8";
    } else if (id == 9) {
      return "category-div shadow-lg bg-9";
    } else if (id == 10) {
      return "category-div shadow-lg bg-10";
    } else if (id == 11) {
      return "category-div shadow-lg bg-11";
    }
  };

  return (
    <>
      <div className="mt-3">
        {successSubmit && (
          <div className="alert alert-success" role="alert">
            <h1>request sent succesfully</h1>
          </div>
        )}
        <button
          data-toggle="collapse"
          data-target={`#${title}`}
          className="btn hover-btn "
        >
          <div className={defineColor()}>
            <div className="row">
              <div className="col-1">
                <img src={img} width="150" className="ml-5 mt-2" />
              </div>
              <div className="col-10">
                <div className="row justify-content-center">
                  <div className="col-6 align-text-center ">
                    <h1 className="pt-5">{title}</h1>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-12 align-text-center pt-4"></div>
                  <h5>{description}</h5>
                </div>
              </div>
            </div>
          </div>
        </button>
        <div>
          <div className="collapse" id={title}></div>
        </div>
      </div>
    </>
  );
};

export default NotificationsItems;
