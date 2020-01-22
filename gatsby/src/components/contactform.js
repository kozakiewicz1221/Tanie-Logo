import React, { useState, useRef } from "react"
import axios from 'axios';
import "../style/form.scss"
import ReactTooltip from 'react-tooltip'
import { GoQuestion } from "react-icons/go";

const Contactform = () => {
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [message, setMessage] = useState("")
  const [paypalCheck, setPaypalCheck] = useState(false)
  const [logoQty, setLogoQty] = useState(85)



  const clickHandler = (e) => {
    e.preventDefault();
    console.log("Data sent")

    axios({
      method: 'post',
      url: 'http://localhost:3400/order',
      data: {
        Name: name,
        Mail: mail,
        Message: message
      }
    });

    if (paypalCheck) {
      window.location.href = "http://paypal.com"
    }
    else {
      window.location.href = "https://dotpay.pl"
    }

  }

  const nameStateHandler = (e) => {
    setName(e.target.value)
  }

  const logoQtyHandler = (e) => {
    console.log(logoQty)
    setLogoQty(e.target.value)
  }

  const mailStateHandler = (e) => {
    setMail(e.target.value)
  }

  const messageStateHandler = (e) => {
    setMessage(e.target.value)
  }
  const togglePaypal = (e) => {

    setPaypalCheck(!paypalCheck)
    console.log(paypalCheck)
  }

  return (
    <div className="form-wrapper">
      <ReactTooltip place="right" effect="solid" className="tooltip" />

      <form class="order-form" >
        <div className="form-inner-wrap">
          <div className="form-left-col">
            <h3>PODSUMOWANIE</h3>

            <h4>Twoje zamówienie</h4>
            <ul>
              <li>Pakiet standard <span className="span-price"> 105zł</span></li>
              <li>Favicon <span className="span-price"> 19zł</span></li>
            </ul>
            <h4>Czas realizacji<span className="span-price"> 2-7 dni</span></h4>
            <h4>Prawa autorskie<span className="span-price"> NIE</span></h4>
            <h4>Niezaleznie od wybranego pakietu, otrzymujesz:</h4>
            <ul>
              <li>Pakiet standard </li>
              <li>Favicon </li>
            </ul>
            <div className="total-amount-box">
              <div className="amount-inner">
                Do zapłaty: {logoQty}zł
              </div>
            </div>


            <span>Wybierz sposób płatności:</span>
            <fieldset class="payment-wrapper">

              <input id="dotpay" name="payment" type="radio" value="85" ></input>
              <label for="dotpay" data-tip="Expresowe płatności bankowe oraz BLIK">Dotpay <GoQuestion class="info-icon" /></label>
              <input id="paypal" name="payment" type="radio" value="135"></input>
              <label for="paypal" data-tip="Płatności kartą bankową oraz środkami na koncie PayPal">Paypal <GoQuestion class="info-icon" /></label>
              <input id="przelew" name="payment" type="radio" value="175"></input>
              <label for="przelew" data-tip="Płatnośc zwykłym przelewem bankowym.">Przelew <GoQuestion class="info-icon" /></label>
            </fieldset>

            <input name="policy" type="checkbox" value="0" ></input>
            <label for="policy">Zapoznałem się z regulaminem i polityką prywatności</label>
          </div>

          <div className="form-right-col">
            <h3>Wybierz pakiet</h3>

            <fieldset onChange={logoQtyHandler}>
              <input id="logo-qty" name="logo-qty" type="radio" value="85" ></input>
              <label for="logo-qty">1 logo<span className="span-price"> 85zł</span></label>
              <input id="logo-qty2" name="logo-qty" type="radio" value="135"></input>
              <label for="logo-qty2">2 logo <span className="span-price">135zł</span></label>
              <input id="logo-qty3" name="logo-qty" type="radio" value="175"></input>
              <label for="logo-qty3">3 logo <span className="span-price"> 175zl</span> </label>
            </fieldset>

            <h3>Wybierz dodatkowe usługi</h3>
            <fieldset >
              <input name="favicon" id="favicon" type="checkbox" value="85" ></input>
              <label for="favicon">Favicon</label>
              <input name="ulotka" id="ulotka" type="checkbox" value="135"></input>
              <label for="ulotka">Ulotka</label>
              <input name="rollup" id="rollup" type="checkbox" value="175"></input>
              <label for="rollup">Roll-up </label>
            </fieldset>
            <h3>Czas realizacji</h3>
            <fieldset >
              <input name="standard" type="radio" value="0" ></input>
              <label for="standard">Standard 2-7 dni (FREE)</label>
              <input name="express" type="radio" value="55"></input>
              <label for="express">Express (2 dni)</label>
              <input name="turbo" type="radio" value="95"></input>
              <label for="turbo">Turbo (24h)</label>
            </fieldset>
            <label for="name">Name:</label>
            <input type="text" id="name" placeholder="name" name="name" onChange={nameStateHandler} />

            <label for="mail">E-mail:</label>
            <input type="email" id="mail" name="email" onChange={mailStateHandler} />

            <label for="msg">Message:</label>
            <textarea id="msg" name="message" onChange={messageStateHandler}></textarea>

            <button type="submit" onClick={clickHandler} >Send your message</button>
          </div>

        </div>

      </form >
    </div>
  )
}

export default Contactform
