import React, { useEffect, useState } from "react";
import CarCard from "../../../components/CarCard";
import "../../../components/CarCard/CarCard.css";
import SortCarSideBar from "../../../components/SortCarSideBar";
import { cdmApi } from "../../../misc/cdmApi";
import axios from "axios";
function Vehicle() {
  const gradientBlack = "linear-gradient(to bottom, #000000, #ffffff)";
  const gradientRed = "linear-gradient(to bottom, #f90000, #fff8f8)";
  const gradientBlue = "linear-gradient(to bottom, #ececec, #0071f9)";
  const gradientGreen = "linear-gradient(to bottom, #ececec, #055904)";
  const gradientGray = "linear-gradient(to bottom, #ffffff, #cfd1cf)";
  const [cars, setCars] = useState([]);
  // const url = "http://localhost:9296/api/v1/products/getAllCars";
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [sortBy, setSortBy] = useState("model");
  const [direction, setDirection] = useState("ASC");
  const [model, setModel] = useState("Beta Model");

  useEffect(() => {
    fetchCars();
  }, [sortBy, direction, page, size, model]);


  const handleChangeModel = (model) => {
    setModel(model);
  };

  const handleSortDirection = (e) => {
    setDirection(e.target.value);
  };

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  const handleSearch = async (value) => {
    if (value === "") {
      fetchCars();
    } else {
      const data = await cdmApi.getCarByNameContaining(value);
      setData(data.data);
    }
  };

  const fetchCars = async () => {
    if (model !== "") {
      const res = await cdmApi.getAllCarsByModel(model);
      setData(res.data);
      console.log(res.data);
      return;
    }
    try {
        const res = await cdmApi.getAllCars(page, size, sortBy, direction);
        setData(res.data.content);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container-flex dark:bg-slate-800 h-screen">
      <div className="vehicle-models-sort ">
        <div className="hidden bg-white xl:block bg-gray-100 xl:bg-white max-w-96 dark:bg-slate-800 dark:border dark:border-white dark:pb-48">
          <form
            className="mt-5 sm:mb-0 sm:mt-2 sm:px-4
          "
          >
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only  dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                onChange={(e) => {
                  handleSearch(e.target.value);
                }}
                type="search"
                id="default-search"
                class="dark:bg-gray-500 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-black focus:border-black dark:border-none dark:placeholder-white dark:text-white"
                placeholder="Search by name"
                required
              />
            </div>
          </form>

          <div>
            <p className="article-car-sort mt-2 dark:text-white">Sort by</p>
          </div>

          <select className="select-car-sort dark:bg-gray-500 dark:text-white dark:border-none" onChange={handleSortBy}>
            <option value="model" className="dark:text-white">model</option>
            <option value="orgPrice" className="dark:text-white">price</option>
            <option value="perMonthPrice" className="dark:text-white">Price per month</option>
            <option value="range" className="dark:text-white">Range</option>
            <option value="topSpeed" className="dark:text-white">Top speed</option>
            <option value="timeToReach" className="dark:text-white">0-60 mph</option>
          </select>

          <div>
            <p className="article-car-sort mt-2 dark:text-white ">Sort direction</p>
          </div>

          <select className="select-car-sort dark:bg-gray-500 dark:text-white dark:border-none" onChange={handleSortDirection}>
            <option value="ASC" className="dark:text-white">Low to High</option>
            <option value="DESC" className="dark:text-white">High to Low</option>
          </select>
          <p className="article-car-sort dark:text-white">Model</p>

          <div className="container-flex">
            <input
              className="radio-car-sort"
              type="radio"
              name="radio-model"
              onClick={() => handleChangeModel("Model S")}
            />
            <div
              className="container-flex"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <p className="radio-text-car-sort dark:text-white">Model S</p>
            </div>
          </div>
          <div className="container-flex">
            <input
              className="radio-car-sort"
              type="radio"
              name="radio-model"
              onClick={() => handleChangeModel("Model 3")}
            />
            <div
              className="container-flex"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <p className="radio-text-car-sort dark:text-white">Model 3</p>
            </div>
          </div>
          <div className="container-flex">
            <input
              className="radio-car-sort"
              type="radio"
              name="radio-model"
              onClick={() => handleChangeModel("Model X")}
            />
            <div
              className="container-flex"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <p className="radio-text-car-sort dark:text-white">Model X</p>
            </div>
          </div>
          <div className="container-flex">
            <input
              className="radio-car-sort"
              type="radio"
              name="radio-model"
              onClick={() => handleChangeModel("Model Y")}
            />
            <div
              className="container-flex"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <p className="radio-text-car-sort dark:text-white">Model Y</p>
            </div>
          </div>
          <div className="container-flex">
            <input
              className="radio-car-sort"
              type="radio"
              name="radio-model"
              onClick={() => handleChangeModel("Beta Model")}
            />
            <div
              className="container-flex"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <p className="radio-text-car-sort dark:text-white">Beta Model</p>
            </div>
          </div>
          <div className="container-flex">
            <input
              className="radio-car-sort dark:bg-white"
              type="radio"
              name="radio-model"
              onClick={() => handleChangeModel("")}
            />
            <div
              className="container-flex"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <p className="radio-text-car-sort dark:text-white">All</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 flex flex-wrap dark:bg-slate-800">
        {data.map((dataObj, index) => {
          return (
            <CarCard
              data={{
                key: index,
                model: dataObj.model,
                price: dataObj.orgPrice,
                priceAfterDiscount: dataObj.disPrice,
                type: dataObj.trim,
                pricepermonth: dataObj.perMonthPrice,
                image: (
                  <img src={dataObj.imgSrc} alt="xe" className="card__img" />
                ),
                fig1: dataObj.range,
                fig2: dataObj.topSpeed,
                fig3: dataObj.timeToReach,
                feature: dataObj.tech,
                power: dataObj.gift,
                mileodometer: dataObj.odo,
                isAvailable: dataObj.status,
                id: dataObj.id,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Vehicle;
