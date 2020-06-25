import React from "react"

const Jaktodziala = () => {
  const data = [
    {
      title: "1. Wypełnij formularz zamówienia logo",
      content:
        "Podaj nam informacje dot. Twoich projektów, opisz profil działalności Twojej firmy, ustal kolorystykę, styl itp. Możesz załączyć nam szkice albo inspiracje",
    },
    {
      title: "2. Otrzymaj wstępne propozycje logotypów",
      content:
        " Nasi graficy tworzą dla Ciebie propozycje logo według twoich wytycznych.",
    },
    {
      title: "3. Zgłoś poprawki do projektów",
      content:
        "Przysługują Ci poprawki do każdej propozycji logo. Naszym priorytetem jest Twoje zadowolenie",
    },
    {
      title: "4. Otrzymaj gotowe logo",
      content:
        "Po akceptacji zlecenia, otrzymujesz od nas komplet plików graficznych w formatach PDF, SVG, JPG, PNG, EPS oraz pełne prawa autorskie",
    },
  ]
  return (
    <section className="bg-gray-100   p-8 md:p-16 ">
      <div className="container mx-auto  flex items-center flex-col">
        <div className="mytitle  mb-4 md:mb-8 ml-4">
          <h2 className="gradient-text text-3xl md:text-4xl ">
            Etapy projektowania logo
          </h2>
        </div>
        <div className="flex flex-row flex-wrap ">
          {data.map(item => {
            return (
              <div className="mt-6 md:mt-0 sm:w-full md:w-1/2 lg:w-1/4 p-1 md:p-4 h-auto flex flex-col  flex-auto">
                <div className=" shadow bg-white rounded-lg p-4  flex flex-col flex-auto">
                  <h3 className="text-base gradient-text">{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Jaktodziala
