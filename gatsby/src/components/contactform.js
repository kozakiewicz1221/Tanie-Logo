import React, { useState, useRef } from "react"
import axios from 'axios';

const Contactform = () => {
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [message, setMessage] = useState("")
  const [paypalCheck, setPaypalCheck] = useState(false)
  const [logoQty, setLogoQty] = useState(null)

  const paypal = useRef(null);


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

    console.log(logoQty)
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

    <form class="order-form" >
      {logoQty}
      <fieldset onChange={logoQtyHandler}>
        <input id="logo-qty" name="logo-qty" type="radio" value="85"></input>
        <label for="logo-qty">1szt</label>

        <input id="logo-qty2" name="logo-qty" type="radio" value="135"></input>
        <label for="logo-qty2">2szt</label>

        <input id="logo-qty3" name="logo-qty" type="radio" value="175"></input>
        <label for="logo-qty3">3 szt</label>

      </fieldset>


      <label for="name">Name:</label>
      <input type="text" id="name" placeholder="name" name="name" onChange={nameStateHandler} />

      <label for="mail">E-mail:</label>
      <input type="email" id="mail" name="email" onChange={mailStateHandler} />

      <label for="msg">Message:</label>
      <textarea id="msg" name="message" onChange={messageStateHandler}></textarea>
      <input id="paypal" name="paypal" type="checkbox" onChange={togglePaypal}></input>
      <label for="paypal">Paypal</label>

      <input id="dotpay" name="dotpay" type="checkbox" ></input>
      <button type="submit" onClick={clickHandler} >Send your message</button>
    </form >
  )
}

export default Contactform
