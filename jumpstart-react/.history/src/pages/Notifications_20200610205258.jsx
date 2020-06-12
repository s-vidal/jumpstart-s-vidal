import React, {useState, useEffect} from "react";
import NotificationsItems from "../components/notifications";
import "./Main.css";
import CategoriesFilters from "../components/CategoriesFilters";
import "./Notifications.css";

const Notifications = (props) => {
  const [category, setCategory] = useState("");
  const {status, username} = props;
  const [sent, setSent] = useState(false);

  const handleOnClick = (title) => {
    setCategory(title);
  };

  useEffect(() => {
    let isSent = localStorage.getItem("sent");
    setSent(isSent);
  });

  return (
    <div>
      <div className="title-div">
        <div className="container ">
          <div className="row justify-content-center pt-4 mb-5">
            <div className="col-6 align-text-center">
              <h1 className="text-header">Activity Feed </h1>
            </div>
          </div>
        </div>
      </div>
      <>
        <div className="categories-div">
          <div className="container">
            <div className="row">
              <div className="col-12 justify-content-center d-flex">
                <h3>Hello, {username}!</h3>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-12 justify-content-center d-flex">
                <h2>Here is what going on:</h2>
              </div>
            </div>
          </div>
          <h1></h1>
          <div className="container pt-4 mb-5 pb-5">
            <div className="d-flex flex-wrap justify-content-center recommended-div">
              {sent && (
                <div className="mb-5">
                  <NotificationsItems
                    status="recommended"
                    id="recommened"
                    title="Hiking"
                    description="Improve your kooking skills, and impress your relatives"
                    img=""
                    onClick={handleOnClick}
                    img={process.env.PUBLIC_URL + "/cooking.svg"}
                    showModal={false}
                  />
                </div>
              )}
              {sent && (
                <NotificationsItems
                  status="approved"
                  id="red"
                  title="Yoga"
                  description="Improve your kooking skills, and impress your relatives"
                  img=""
                  onClick={handleOnClick}
                  img={process.env.PUBLIC_URL + "/the-warrior-2.svg"}
                  showModal={true}
                />
              )}
              <NotificationsItems
                status="pending"
                id="6"
                title="City Tour"
                description="Discover new places, in great company."
                img=""
                onClick={handleOnClick}
                img={process.env.PUBLIC_URL + "/paris.svg"}
                showModal={false}
              />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Notifications;
