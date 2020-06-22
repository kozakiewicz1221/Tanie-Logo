import React, { useState } from "react"
import "../style/counter.scss"
import blob1 from '../images/blob1.png'
import blob2 from '../images/blob2.png'
const Counter = () => {

  return (
    <section className="counter-wrapper">
      <div className="counter-inner container">
        <div className="counter-col">
          <h2 >Zaufaj profesjonalistom</h2>
          <p>Budowanie solidnej podstawy biznesowej oznacza stworzenie logo, które inspiruje. Z naszą pomocą Twoje logo może zbudować wiarygodny wizerunek i stworzyć lojalność klientów. Wszystkie zaprojektowane przez nas loga mają jeden wspólny cel: zbudowanie silnej podstawy marketingowej dla Twojej firmy. Największe loga inspirują coś głębszego niż wiarygodność. Promieniują integralnością i wzbudzają zaufanie. Zaprojektujmy logo, które inspiruje razem.</p>
          <div className="cte-wrapper">
            <button className="btn1">Zobacz realizacje</button>
            <button className="btn2">Zamów Logo</button>

          </div>

        </div>
        <div className="counter-col">
          <img src={require('../images/tanie-logo-ilustracja-dlaczego-warto.png')}></img>

        </div>
      </div>

      <div className="counter-grid container">
        <div>
          <span className="counter-title">
            12
          </span>
          <span className="counter-text">
            lat doświadczenia
          </span>
        </div>

        <div>
          <span className="counter-title">
            5000+
          </span>
          <span className="counter-text">
            zrealizowanych projektów
        </span>
        </div>

        <div>
          <span className="counter-title">
            70%
          </span>
          <span className="counter-text">
            powracających klientów          </span>
        </div>

        <div>
          <span className="counter-title">
            100%
          </span>
          <span className="counter-text">
            zadowolenia          </span>
        </div>

      </div>

    </section>

  )
}

export default Counter
