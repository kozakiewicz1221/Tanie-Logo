import React, { useState, useRef } from "react"
import axios from 'axios';
import "../style/form.scss"
import ReactTooltip from 'react-tooltip'
import { GoQuestion } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";

import { Link } from "gatsby"

const Contactform = () => {
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [message, setMessage] = useState("")
  const [logoQty, setLogoQty] = useState(85)
  const [payments, setPayments] = useState("dotpay")
  const [time, setTime] = useState(0)
  const [timeLabel, setTimeLabel] = useState("")
  const [license, setLicense] = useState(0)



  const clickHandler = (e) => {
    e.preventDefault();
    console.log("Data sent")
    axios({
      method: 'post',
      url: 'http://localhost:3400/order',
      data: {
        Name: name,
        Mail: mail,
        Message: message,
        ilosc: logoQty,
        płatnosci: payments,
        CzasRealizacji: timeLabel

      }
    });
    window.location.href = "https://dotpay.pl"
  }



  const paymentsHandler = (e) => {
    console.log(payments)
    setPayments(e.target.value)
  }
  const logoQtyHandler = (e) => {
    setLogoQty(e.target.value)


  }
  const timeHandler = (e) => {
    console.log(time)

    setTime(e.target.value)
    setTimeLabel(e.target.id)

  }
  const nameStateHandler = (e) => {
    setName(e.target.value)
  }

  const mailStateHandler = (e) => {
    setMail(e.target.value)
  }

  const messageStateHandler = (e) => {
    setMessage(e.target.value)
  }
  const licenseHandler = (e) => {
    setLicense(e.target.value)
  }


  const total = parseInt(logoQty) + parseInt(time) + parseInt(license)



  return (
    <div className="form-wrapper">
      <ReactTooltip place="right" effect="float" className="tooltip" />

      <form class="order-form" >
        <div className="form-inner-wrap">
          <div className="form-left-col">
            <h3>PODSUMOWANIE ZAMÓWIENIA</h3>
            <ul>
              <li>Pakiet standard <span className="span-price"> 105zł</span></li>
              <li>Favicon <span className="span-price"> 19zł</span></li>
            </ul>


            <div className="total-amount-box">
              <div className="amount-inner">
                Do zapłaty: {total}zł
              </div>
              <h4>Czas realizacji <span className="span-price">
                {time == 0 ? "2-7 dni" : time == 55 ? "2 dni" : "24h"}</span></h4>
              {license == "99" ? <h4>Prawa autorskie<span className="span-price"> TAK</span></h4> : ''
              }
              <h4>Sposób płatności <span className="span-price"> {payments}</span></h4>
            </div>


            <span >Wybierz sposób płatności:</span>
            <fieldset
              className="payment-wrapper"
              onChange={paymentsHandler}>

              <div className="inner-payment">
                <div> <input id="dotpay" name="payment" type="radio" value="dotpay" defaultChecked></input>
                  <label for="dotpay" data-tip="Expresowe płatności bankowe oraz BLIK">Dotpay <GoQuestion class="info-icon" /></label></div>
                <div> <input id="paypal" name="payment" type="radio" value="paypal"></input>
                  <label for="paypal" data-tip="Płatności kartą bankową oraz środkami na koncie PayPal">Paypal <GoQuestion class="info-icon" /></label></div>
                <div> <input id="przelew" name="payment" type="radio" value="przelew"></input>
                  <label for="przelew" data-tip="Płatnośc zwykłym przelewem bankowym.">Przelew <GoQuestion class="info-icon" /></label></div>


              </div>

            </fieldset>
            <span >Podaj swoje dane:</span>

            <fieldset className="personal-data">
              <input type="text" id="name" placeholder="Imie i nazwisko" name="name" onChange={nameStateHandler} />
              <input type="email" id="mail" placeholder="E-mail" name="email" onChange={mailStateHandler} />
              <input type="tel" id="tel" placeholder="Telefon" name="tel" onChange={mailStateHandler} />
            </fieldset>

            <div className="policy-accept">
              <input name="policy" type="checkbox" value="0" ></input>
              <label for="policy">Zapoznałem się z <Link to="/regulamin">regulaminem</Link > <Link to="/polityka-prywatnosci">i polityką prywatności</Link ></label>
            </div>
            <button className="submit" type="submit" onClick={clickHandler} ><FiShoppingCart className="submit-icon" />
              Zamawiam !</button>

          </div>

          <div className="form-right-col">
            <h3><span className="number">1</span>Wybierz pakiet</h3>
            <p>Im więcej sztuk zamówisz tym mniej zapłacisz za sztukę.
              Każda propozycja logo staje się Twoją własnością. Nie musisz wybierać :)</p>
            <fieldset onChange={logoQtyHandler}>
              <input id="logo-qty" name="logo-qty" type="radio" value="85" defaultChecked></input>
              <label for="logo-qty">1 x logo<span className="span-price"> 85zł</span></label>
              <input id="logo-qty2" name="logo-qty" type="radio" value="145"></input>
              <label for="logo-qty2">2 x logo <span className="span-price">145zł</span></label>
              <input id="logo-qty3" name="logo-qty" type="radio" value="175"></input>
              <label for="logo-qty3">3 x logo <span className="span-price"> 175zl</span> </label>
              <input id="logo-qty4" name="logo-qty" type="radio" value="135"></input>
              <label for="logo-qty4">Logo + wizytówka<span className="span-price"> 135zl</span></label>
              <input id="logo-qty5" name="logo-qty" type="radio" value="150"></input>
              <label for="logo-qty5">Logo + ulotka<span className="span-price"> 150zl</span></label>
              <input id="logo-qty6" name="logo-qty" type="radio" value="0"></input>
              <label for="logo-qty6">Mam juz logo<span className="span-price"> 0zl</span></label>
            </fieldset>

            <h3><span className="number">2</span>Wybierz dodatkowe usługi</h3>
            <p>Projektujemy również inne rzeczy.</p>
            <fieldset >
              <input name="wizytowka" id="wizytowka" type="checkbox" value="85" ></input>
              <label for="wizytowka">Wizytowka 2-stronna<span className="span-price"> 69zl</span></label>
              <input name="favicon" id="favicon" type="checkbox" value="69" ></input>
              <label for="favicon">Favicon<span className="span-price"> 19zl</span></label>
              <input name="ulotka" id="ulotka" type="checkbox" value="135"></input>
              <label for="ulotka">Ulotka <span className="span-price"> 90zl</span></label>
              <input name="rollup" id="rollup" type="checkbox" value="175"></input>
              <label for="rollup">Roll-up <span className="span-price"> 99zl</span></label>
            </fieldset>

            <fieldset>
              <h3><span className="number">3</span>Opis Twojego projektu</h3>
              <p>Opisz profil swojej działalności, sugestie i inne uwagi dot. projektu/ów.</p>

              <textarea id="msg" name="message" onChange={messageStateHandler}></textarea>

            </fieldset>

            <h3><span className="number">4</span>Czas realizacji</h3>
            <p>Standardowy czas projektowania logotypu to najczęściej od 2 do 7 dni. Mozesz przyspieszyc realizację logo</p>

            <fieldset onChange={timeHandler}>
              <input id="standard" name="time" type="radio" value="0" defaultChecked></input>
              <label for="standard">Standard 2-7 dni <span className="span-price"> FREE</span></label>
              <input id="express" name="time" type="radio" value="55"></input>
              <label for="express">Express (2 dni) <span className="span-price"> 55zl</span></label>
              <input id="turbo" name="time" type="radio" value="115"></input>
              <label for="turbo">Turbo (24h) <span className="span-price"> 115zl</span></label>
            </fieldset>

            <h3><span className="number">5</span>Prawa autorskie</h3>
            <p>Otrzymasz umowę o przeniesienie pełnych praw autorskich i możliwość korzystania z logotypu w całkowicie dowolny sposób. Nic Cię nie ograniczy.</p>
            <fieldset onChange={licenseHandler}>
              <input id="license" name="license" type="radio" value="0" defaultChecked></input>
              <label for="license">NIE<span className="span-price"> 0zł</span></label>
              <input id="license2" name="license" type="radio" value="99"></input>
              <label for="license2">TAK <span className="span-price">99zł</span></label>


            </fieldset>



          </div>

        </div>

      </form >
    </div>
  )
}

export default Contactform
