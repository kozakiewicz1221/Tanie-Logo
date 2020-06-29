import React, { useEffect } from "react";
import "./layout.css";
import Header from "./header";
import MyFooter from "./footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillStar } from "react-icons/ai";

const Layout = ({ children }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      const reviews = [
        "Bardzo szybka realizacja i profesjonalna obsługa klienta",
        "Porządna firma, zleciłem im już kilka projektów. Zawsze zadowolony",
        "Bardzo ładne logo dostałam. Wielkie dzięki",
        "Good job!",
        "W takiej cenie nie spodziewalem się dobrej jakości, ale się myliłem. Nieźle",
      ];
      const random = Math.floor(Math.random() * reviews.length);
      toast(
        <div
          onClick={() => clearInterval(interval)}
          className='flex flex-row flex-no-wrap  p-1'
        >
          <div className='w-1/6 mr-4'>
            <img
              className='rounded-full '
              src='https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'
            />
          </div>

          <div className='w-5/6 flex flex-col'>
            <span className='font-semibold text-sm text-gray-700'>
              Majka J.
            </span>
            <span className='text-xs text-gray-700 leading-tight'>
              {reviews[random]}
            </span>
            <div className='flex flex-row flex-no-wrap mt-2 mb-1 -ml-1'>
              <AiFillStar className='text-orange-400 ' />
              <AiFillStar className='text-orange-400' />
              <AiFillStar className='text-orange-400' />
              <AiFillStar className='text-orange-400' />
              <AiFillStar className='text-orange-400' />
            </div>
            <img
              className='rounded-full absolute  '
              style={{ width: "30px", bottom: "-20px", right: "7px" }}
              src='https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'
            />
          </div>
        </div>
      );
    }, 11000);
  }, []);

  return (
    <>
      <Header />

      <main>{children}</main>

      <footer>
        <MyFooter />
      </footer>
      <ToastContainer
        pauseOnFocusLoss={false}
        limit={1}
        position='bottom-left'
        closeOnClick
        pauseOnHover
      />
    </>
  );
};

export default Layout;
