import React, { useState } from "react"
import "../style/faq.scss"

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';



const Faq = () => {

  return (
    <section className="faq-wrapper ">
      <div className="faq-inner container">

        <div className="col">
          <img src={require('../images/projektowanie-logotypów-najczęściej-zadawane-pytania.png')}></img>

        </div>
        <div className="col">
          <h3 className="subtitle">Projektowanie logo - FAQ</h3>
          <span style={{ marginBottom: "2330px !important" }} className="title">Najczęściej zadawane pytania</span>

          <Accordion  >
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Jak długo trwa projektowanie logo?                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Zazwyczaj projektujemy logo w ciągu 2-7 dni. Mozesz przyspieszyc realizację zamówienia.
                    </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Mam już logo, ale potrzebuję je przerobic na wektory    </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Mozemy pomóc. Wyślij swoje logo na naszą skrzynkę mailową w celu wyceny wektoryzacji. Najczęściej jest to koszt 70- 140 zl brutto.
                    </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Co jeśli logo mi się nie spodoba?                    </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Przysługują Ci dwie poprawki do kazdego projektu. Z doświadczenia wiemy, ze to najczęściej wystarcza by klient był zadowolony.
                    </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>


                  Czy będę mógł sam edytować Logo?       </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>Oczywiście. Otrzymasz od nas otwarte pliki źródłowe Twojego projektu. Możesz edytować go dowolnym programem graficznym do obróbki wektorowej np. Adobe Illustrator, Inkscape, Affinity Designer.
                     </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Czy otrzymam prawa autorskie?    </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>Oczywiście. Otrzymasz od nas otwarte pliki źródłowe Twojego projektu. Możesz edytować go dowolnym programem graficznym do obróbki wektorowej np. Adobe Illustrator, Inkscape, Affinity Designer.
                     </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Czy logo będzie wektorowe?   </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>Oczywiście. Otrzymasz logo w komplecie plików w róznych formatach (pdf, svg, eps, ai, png, jpeg, psd), rowniez wektorowych.
                     </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Czy robicie również inne projekty graficzne?
  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>Oczywiście. Otrzymasz logo w komplecie plików w róznych formatach (pdf, svg, eps, ai, png, jpeg, psd), rowniez wektorowych.
                     </p>
              </AccordionItemPanel>
            </AccordionItem>


          </Accordion>
        </div>




      </div>

    </section>

  )
}

export default Faq
