import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cdmApi } from "../../../misc/cdmApi";
import { useEffect, useState } from "react";
import ShopCard from "../../../components/ShopCard";

export default function Shop() {
  const [acc, setAcc] = useState([]);
  const [mer, setMer] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchInfo = async () => {
    try {
      const res = await cdmApi.getShopByType("accessories");
      const other = await cdmApi.getShopByType("merchandise");
      const data = await cdmApi.getAllShop();

      // console.log(data);
      setAcc(res.data);
      console.log(res.data);
      setMer(other.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="bg-white dark:bg-slate-800">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only dark:text-white">Products</h2>
        <form className="mb-5">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
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
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </form>
        {/* Accessories */}
        <div className="flex mb-4 ">
          <h1 className="text-xl dark:text-white">Vehicle Accessories</h1>

          <a
            href="/shop/accessories"
            className="flex ml-auto hover:cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              className="mt-1 dark:text-white"
            />
            <h1 className="ml-4 dark:text-white">See all</h1>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {acc
            .filter((product) =>
              product.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((product) => (
              <ShopCard
                data={{
                  id: product.id,
                  imgSrc: product.image_url,
                  name: product.name,
                  price: product.price,
                }}
              />
            ))}
        </div>
        {/* Collection & Merchandise */}
        <div className="flex mt-8 mb-4 ">
          <h1 className="text-xl dark:text-white">Collection & Merchandise</h1>
          <a
            href="/shop/merchandise"
            className="flex ml-auto hover:cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              className="mt-1 dark:text-white"
            />
            <h1 className="ml-4 dark:text-white">See all</h1>
          </a>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {mer.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase())).map((product) => (
      <ShopCard data={{id: product.id ,imgSrc: product.image_url, name: product.name, price: product.price}} />
  ))}
        </div>
      </div>
    </div>
  );
}
