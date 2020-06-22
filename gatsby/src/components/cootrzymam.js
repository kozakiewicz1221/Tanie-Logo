import React, { useState } from "react"
import "../style/cootrzymam.scss"
import blob1 from '../images/blob1.png'
import blob2 from '../images/blob2.png'

const Cootrzymam = () => {

  return (
    <section className="cootrzymam-wrapper">


      <h2 >Co dokładnie otrzymam?</h2>
      <div className="cootrzymam-inner container">
        <div>
          <h3>Pliki wektorowe do druku</h3>
          <p>Każdy z naszych projektów logotypów jest skalowalny i 100% przygotowany do druku, pieczątek, reklam, szyldów (CDR, AI, EPS, PDF, SVG)</p>
        </div>
        <div>
          <h3>Pliki do użytku w internecie</h3>
          <p>Standardowe formaty plików graficznych (.jpg .png .bmp) do korzystania w internecie, reklamie i social mediach.
</p>
        </div>
        <div>
          <h3>Pliki źródłowe (do dalszej edycji)</h3>
          <p>Niezależnie od pakietu, który wybierzesz otrzymujesz od nas pliki źródłowe, które możesz dowolnie edytować.
</p>
        </div>
        <div>
          <h3>Prawa autorskie</h3>
          <p>Po wykonaniu zlecenia otrzymasz od nas umowę o przeniesienie praw autorskich na Ciebie bądź twoją firmę.</p>
        </div>
        <div>
          <h3>Poprawki w cenie</h3>
          <p>Spokojnie, jeśli tanie logo Ci się nie spodoba to pamiętaj, że przysługują Ci 2 poprawki do każdej propozycji logotypu.
</p>
        </div>
        <div>
          <h3>Gotowość do użytku w social mediach</h3>
          <p>Przygotujemy dla Ciebie pliki o dowolnej rozdzielczości, które będziesz mógł ustawić jako zdjęcia profilowe na FB, LinkedIn, Twitter albo w innych portalach społecznościowych.</p>
        </div>


      </div>

    </section>
  )
}

export default Cootrzymam
