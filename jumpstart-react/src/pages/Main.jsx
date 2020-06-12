import React, {useState, useEffect} from "react";
import Category from "../components/Category";
import "./Main.css";
import Filters from "../components/Filters";
import CategoriesFilters from "../components/CategoriesFilters";

const Main = () => {
  const [category, setCategory] = useState("");

  const handleOnClick = (title) => {
    setCategory(title);
  };

  return (
    <div>
      <div className="title-div">
        <div className="container ">
          <div className="row justify-content-center pt-4 mb-5">
            <div className="col-6 align-text-center">
              <h1 className="text-header">Activities </h1>
            </div>
          </div>
        </div>
      </div>
      <>
        <div className="categories-div">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex justify-content-end">
                <CategoriesFilters />
              </div>
            </div>
          </div>
          <div className="container pt-4">
            <div className="d-flex flex-wrap justify-content-center">
              <Category
                color="red"
                id="0"
                title="Yoga"
                description="Get flexible with friends"
                img={process.env.PUBLIC_URL + "/the-warrior-2.svg"}
                onClick={handleOnClick}
              />
              <Category
                id="1"
                title="Hiking"
                description="Go for a walk, make friends along the way"
                img=""
                onClick={handleOnClick}
                img={process.env.PUBLIC_URL + "/backpack.svg"}
              />
              <Category
                id="2"
                title="Board-games"
                description="Get smarter every day,and remember it's not winning that matters"
                img=""
                onClick={handleOnClick}
                img={process.env.PUBLIC_URL + "/chess.svg"}
              />
              <Category
                id="3"
                title="Cooking"
                description="Improve your kooking skills, and impress your relatives"
                img=""
                onClick={handleOnClick}
                img={process.env.PUBLIC_URL + "/cooking.svg"}
              />
              <Category
                id="4"
                title="Meditation"
                description="Calm your mind in those hard times"
                img=""
                onClick={handleOnClick}
                img={process.env.PUBLIC_URL + "/kapalbhati.svg"}
              />
              <Category
                id="5"
                title="TRX"
                description="Have an intensive workout"
                img=""
                onClick={handleOnClick}
                img={process.env.PUBLIC_URL + "/exercise.svg"}
              />
              <Category
                id="6"
                title="City Tour"
                description="Discover new places, in great company."
                img=""
                onClick={handleOnClick}
                img={process.env.PUBLIC_URL + "/paris.svg"}
              />
              <Category
                id="7"
                title="Pub Crawl"
                description="Visit the greatest bars in tows."
                img=""
                onClick={handleOnClick}
                img={process.env.PUBLIC_URL + "/beer.svg"}
              />
              <Category
                id="8"
                title="Lecture"
                description="Masters new Skills."
                img=""
                onClick={handleOnClick}
                img={process.env.PUBLIC_URL + "/teacher.svg"}
              />
              <Category
                id="9"
                title="Wood Work"
                description="Gain valuable skills."
                img=""
                onClick={handleOnClick}
                img={process.env.PUBLIC_URL + "/wood.svg"}
              />
              <Category
                id="10"
                title="Stand Up"
                description="get your own carreer started now."
                img=""
                onClick={handleOnClick}
                img={process.env.PUBLIC_URL + "/avatar.svg"}
              />
              <Category
                id="11"
                title="Escape Room"
                description="Can you get out in time?"
                img=""
                onClick={handleOnClick}
                img={process.env.PUBLIC_URL + "/key.svg"}
              />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Main;
