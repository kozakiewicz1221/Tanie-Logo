import React from "react"

const Cootrzymam = () => {
  const data = [
    {
      title: "Pliki wektorowe do druku",
      content:
        "Każdy z naszych projektów logotypów jest skalowalny i 100% przygotowany do druku, pieczątek, reklam, szyldów (CDR, AI, EPS, PDF, SVG)",
    },
    {
      title: "Pliki do użytku w internecie",
      content:
        "Standardowe formaty plików graficznych (.jpg .png .bmp) do korzystania w internecie, reklamie i social mediach.",
    },
    {
      title: "Pliki źródłowe (do dalszej edycji)",
      content:
        "Niezależnie od pakietu, który wybierzesz otrzymujesz od nas pliki źródłowe, które możesz dowolnie edytować.",
    },
    {
      title: "Gotowość do użytku w social mediach",
      content:
        "Przygotujemy dla Ciebie pliki o dowolnej rozdzielczości, które będziesz mógł ustawić jako zdjęcia profilowe na FB, LinkedIn, Twitter albo w innych portalach społecznościowych.",
    },
    {
      title: "Prawa autorskie",
      content:
        "Po wykonaniu zlecenia otrzymasz od nas umowę o przeniesienie praw autorskich na Ciebie bądź twoją firmę.",
    },
    {
      title: "Poprawki w cenie",
      content:
        "Spokojnie, jeśli tanie logo Ci się nie spodoba to pamiętaj, że przysługują Ci 2 poprawki do każdej propozycji logotypu.",
    },
  ]
  return (
    <section className="container mx-auto flex items-center flex-col p-8 md:p-16 mt-4 md:-mt-4">
      <div className="mytitle mb-4 md:mb-8 ml-4">
        <h2 className="gradient-text text-3xl md:text-4xl ">Co otrzymam? </h2>
      </div>
      <div className="flex flex-row flex-wrap">
        {data.map(item => {
          return (
            <div className="mt-6 md:mt-0 sm:w-full md:w-1/2 lg:w-1/3 p-1 md:p-4 h-auto flex flex-col  flex-auto ">
              <div className="  shadow bg-gray-100 rounded-lg p-4  flex flex-col flex-auto">
                <h3 className="text-base gradient-text">{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Cootrzymam
