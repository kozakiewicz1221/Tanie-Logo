import React from "react"
import { Accordion, AccordionPanel, Box } from "grommet"

const Faq = () => {
  const data = [
    {
      label: " Jak długo trwa zrobienie logo?",
      content:
        "Standardowy czas oczekiwania logo to 2-7, natomiast najczęściej jest to ok 3 dni. Możesz przyśpieszyć proces realizacji na życzenie.",
    },
    {
      label: " Czy będę mógł sam edytować Logo? ",
      content:
        "Oczywiście. Otrzymasz od nas otwarte pliki źródłowe Twojego projektu. Możesz edytować go dowolnym programem graficznym do obróbki wektorowej np. Adobe Illustrator, Inkscape, Affinity Designer.",
    },
    {
      label: " Czy otrzymam prawa autorskie?",
      content:
        "Przeniesiemy na Ciebie albo Twoją firmę pełne prawa autorskie. Koszt 99zł netto",
    },
    {
      label: " Co jeśli logo mi się nie spodoba?",
      content:
        "Bez obaw. Przysługują ci poprawki do każdego projektu, który dla Ciebie stworzymy. Zapewniamy 100% zadowolenia :)",
    },
  ]
  const data2 = [
    {
      label: " Czy logo będzie wektorowe?",
      content:
        "Oczywiście. Otrzymasz logo w komplecie plików w róznych formatach (pdf, svg, eps, ai, png, jpeg, psd), rowniez wektorowych.",
    },
    {
      label: " W jakich formatach otrzymam logo?",
      content:
        "Otrzymasz pełny komplet plików wektorowych, rastrowych w formatach takich jak: EPS/PDF/SVG/PNG/JPG. Otrzymasz pliki źródłowe do dalszej edycji w dowolnym programie do grafiki wektorowe",
    },

    {
      label: " Czy robicie również inne projekty graficzne?",
      content:
        "Tak, poza logotypami projektujemy również inne rodzaje grafik, zarówno do druku DTP jak i do użytku w internecie. Zaprojektujemy dowolną grafikę, ulotkę, wizytówkę, plakat, opakowanie, księge znaków, baner reklamowy lub cokolwiek innego. ",
    },
    {
      label: " Czy robicie również strony i sklepy internetowe?",
      content:
        "Tak, właściwie to się specjalizujemy w web designie i developmencie. Sprawdź nasze realizacje i skontaktuj się z nami w sprawie wyceny. Nasze portfolio stron internetowych i aplikacji tutaj: https://fancycode.dev/",
    },
  ]
  return (
    <section className="container mx-auto py-16 px-6 my-4 flex flex-col items-center">
      <div className="mytitle mb-4 md:mb-8 ml-4">
        <h2 className="gradient-text text-3xl md:text-4xl ">
          Najczęściej zadawane pytania{" "}
        </h2>
      </div>
      <div className="flex flex-wrap bg-gray-100 rounded-lg shadow">
        <div className="w-full md:w-1/2">
          <Accordion animate={true} multiple={true} margin="small">
            {data.map(item => {
              return (
                <AccordionPanel
                  label={item.label}
                  className="gradient-text py-2"
                >
                  <Box className="bg-gray-100 text-gray-700 px-2 pb-4">{item.content}</Box>
                </AccordionPanel>
              )
            })}
          </Accordion>
        </div>
        <div className="w-full md:w-1/2">
          <Accordion animate={true} multiple={true} margin="small">
            {data2.map(item => {
              return (
                <AccordionPanel
                  label={item.label}
                  className="gradient-text py-2"
                >
                  <Box className="bg-gray-100 px-2 pb-4 text-gray-700">{item.content}</Box>
                </AccordionPanel>
              )
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Faq
