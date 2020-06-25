import React from "react"

const Counter = () => {
  const data = [
    {
      title: "12",
      content: "Lat doświadczenia",
    },
    {
      title: "10.000+",
      content: "Zrealizowanych projektów",
    },
    {
      title: "5000+",
      content: "Zadowolonych klientów",
    },
    {
      title: "100%",
      content: "Profesjonalnej i kompleksowej obsługi",
    },
  ]
  return (
    <section className=" container mx-auto bg-gradient  rounded-lg  flexflex-col pb-10 pt-10 md:pt-10 p-6 mb-8">
      <div className="mytitle mb-4 md:mb-8 ml-4">
        <h2 className="text-white text-center text-3xl md:text-4xl ">
          Zaufaj profesjonalistom
        </h2>
      </div>
      <div className="flex flex-row flex-wrap  items-center justify-center ">
        {data.map(item => {
          return (
            <div className="mt-4 md:mt-0 sm:w-full md:w-1/2 lg:w-1/4 p-1 md:p-4 ">
              <div className=" flex flex-col text-center items-center justify-center  bg-gray-100 rounded-lg px-4 py-6 shadow-xl">
                <h3 className="text-base font-black text-4xl gradient-text">
                  {item.title}
                </h3>
                <p>{item.content}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Counter
