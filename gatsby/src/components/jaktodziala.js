import React, { useState } from "react"
import "../style/jaktodziala.scss"
import blob1 from '../images/blob1.png'
import blob2 from '../images/blob2.png'
const Jaktodziala = () => {

  return (

    <section className="jaktodziala-wrapper ">
      <img className="blob1" src={blob1}></img>
      <img className="blob2" src={blob2}></img>

      <h2 >Jak działa Tanie-logo.pl?</h2>
      <div className="jaktodziala-inner container">
        <div>
          <h3>1. Dokonaj zakupu </h3>
          <p>Zamów Logo i dokonaj płatności oraz podaj nam jak najwięcej informacji dot. Twoich projektów tj. profil działalności Twojej firmy, kolorystyka, styl. Możesz załączyć prosty szkic jeśli masz ochotę :)</p>
        </div>
        <div>
          <h3>2. W ciągu kilku dni projektujemy Twoje logo</h3>
          <p>Nasi graficy tworzą dla Ciebie projekt według twoich wytycznych wkładając w to całe serce  ????</p>
        </div>
        <div>
          <h3>3. Otrzymujesz Logo i zgłaszasz nam poprawki</h3>
          <p>Przysługują Ci poprawki do każdego projektu graficznego. Działamy dopóki nie będziesz zadowolony w 100%
</p>
        </div>
        <div>
          <h3>4. Dostajesz komplet plików + prawa autorskie</h3>
          <p>Po akceptacji zlecenia, otrzymujesz od nas komplet plików graficznych w formatach PDF, SVG, JPG, PNG, EPS oraz pełne prawa autorskie</p>
        </div>
      </div>

      <div className="container" style={{ marginTop: "55px" }}>
        <p className="ptag">Wiele lat spędziliśmy niezliczone godziny na ulepszaniu i testowaniu naszego procesu projektowego. Teraz możemy dostarczyć najwyższej jakości projekty logo w ciągu zaledwie trzech dni. Naszym priorytetem numer jeden jest stworzenie logo, które kochasz. Logo, które wyróżnia Twoją firmę z tłumu. Wszystko zaczyna się od burzy mózgów. Następnie nasz zespół rysuje szkice najlepszych pomysłów z burzy mózgów. Gdy projekty zostaną dopracowane do perfekcji, będziesz miał okazję zobaczyć owoce tego zorientowanego na szczegóły procesu.</p>
      </div>
    </section>


  )
}

export default Jaktodziala
