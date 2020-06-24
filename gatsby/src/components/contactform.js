import React, { useState } from "react"

import axios from "axios"
import ReactTooltip from "react-tooltip"
import { GoQuestion } from "react-icons/go"
import { useForm } from "react-hook-form"
import { Link } from "gatsby"
import { AnimatePresence, motion } from "framer-motion"

const Contactform = () => {
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [tel, setTel] = useState("")
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    tel: "",
  })

  const [message, setMessage] = useState("")
  const [logoQty, setLogoQty] = useState(85)
  const [payments, setPayments] = useState("dotpay")
  const [time, setTime] = useState(0)
  const [timeLabel, setTimeLabel] = useState("standard")
  const [license, setLicense] = useState(0)
  const [fvat, setFvat] = useState(false)
  const [fvatDesc, setFvatdesc] = useState("")
  const [policy, setPolicy] = useState(false)
  const [dodatkowe, setDodatkowe] = useState([
    {
      name: "Wizytówka",
      amount: 65,
      checked: false,
      index: 0,
      tip:
        "Dwustronna wizytówka o dowolnym wymiarze. Najczęściej 90x55mm albo 85x50mm",
    },
    {
      name: "Ulotka 1-str",
      amount: 90,
      checked: false,
      index: 1,
      tip: "Jedno stronna ulotka o dowolnym wymiarze",
    },
    {
      name: "Ulotka 2-str",
      amount: 135,
      checked: false,
      index: 2,
      tip: "Dwu stronna ulotka składana o dowolnym wymiarze",
    },
    {
      name: "Favicon",
      amount: 19,
      checked: false,
      index: 3,
      tip: "Miniatura w karcie na pasku przeglądarki",
    },
    {
      name: "Plakat",
      amount: 120,
      checked: false,
      index: 4,
      tip: "Plakat o dowolnych wymiarach",
    },
    {
      name: "Baner na Facebooka",
      amount: 45,
      checked: false,
      index: 5,
      tip: "Baner na Facebooka zgodny z aktualnymi wymogami",
    },
    {
      name: "Projekt stopki e-mail",
      amount: 85,
      checked: false,
      index: 6,
      tip: "Projekt w formacie HTML oraz graficznym .png",
    },
    {
      name: "Księga znaku",
      amount: 699,
      checked: false,
      index: 7,
      tip: "Zaawansowana i rozbudowana księga znaku dla Twojej marki",
    },
    {
      name: "Dodatkowe 5 poprawek",
      amount: 59,
      checked: false,
      index: 8,
      tip:
        "Standardowo do kazdego projektu logo przysługują Ci dwie poprawki. Mozesz dokupic dodatkowe 5 poprawek logo",
    },
    {
      name: "Konsultacja z grafikiem",
      amount: 59,
      checked: false,
      index: 9,
      tip:
        "Konsultacja w sprawie projektowania logo z naszym grafikiem (do 30 min)",
    },
  ])
  const [dodatkoweQty, setDodatkoweQty] = useState(0)

  // REACT HOOKS FORM
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*"

    axios({
      method: "POST",
      url: "http://localhost:3400/api/order",
      headers: { "Access-Control-Allow-Origin": "*" },

      data: {
        name: customer.name,
        email: customer.email,
        tel: customer.tel,
        payment: payments,
        razem: total,
        logoQty: logoQty,
        dodatkowe: dodatkowe.filter(item => item.checked == true),
        description: message,
        license: license,
        time: timeLabel,
        fvat: fvatDesc,
        orderNr: orderNr,
      },
    }).then(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
  }
  console.log(errors)

  const orderNr = Math.floor(Math.random() * 59999)
  const orderNrLabel = "Zamówienie nr: " + orderNr
  console.log(orderNr)
  const total =
    parseInt(logoQty) +
    parseInt(time) +
    parseInt(license) +
    parseInt(dodatkoweQty)

  const DodatkoweHandler = e => {
    let index = e.target.id
    let robocze = [...dodatkowe]
    robocze[index].checked = !robocze[index].checked
    setDodatkowe(robocze)
    const sumaDodatkow = robocze.filter(item => item.checked == true)
    let totalDodatkiQty = 0
    for (var i = 0; i < sumaDodatkow.length; i++) {
      totalDodatkiQty = totalDodatkiQty + sumaDodatkow[i].amount
    }
    console.log("Total", totalDodatkiQty)
    console.log("Robocze", robocze)
    console.log("Suma dodatków", sumaDodatkow)
    setDodatkoweQty(totalDodatkiQty)
  }

  const dodatkoweOutput = dodatkowe.map(item => (
    <div key={item.name} onClick={DodatkoweHandler}>
      <input
        id={item.index}
        checked={item.checked}
        name={item.name}
        type="checkbox"
        value={item.amount}
      ></input>
      <label id={item.index} for={item.name}>
        {item.name}
        <span className={!item.checked ? "span-price" : "span-price-checked"}>
          {item.amount}zł
          <GoQuestion data-tip={item.tip} class="info-icon" />
        </span>
      </label>
    </div>
  ))

  const paymentsHandler = e => {
    console.log(payments)
    setPayments(e.target.value)
  }
  const logoQtyHandler = e => {
    setLogoQty(e.target.value)
  }
  const timeHandler = e => {
    console.log(time)
    setTime(e.target.value)
    setTimeLabel(e.target.id)
  }

  const messageStateHandler = e => {
    setMessage(e.target.value)
  }
  const licenseHandler = e => {
    setLicense(e.target.value)
  }
  const vatHandler = () => {
    setFvat(!fvat)
  }

  return (
    <div className="form-wrapper">
      <ReactTooltip className="rounded-lg " />

      <div className="mobile-result flex justify-center text-white  font-black text-lg  bg-gradient w-full fixed bottom-0 py-2 z-50">
        Wartość zamówienia: {total}zł
      </div>
      <form onSubmit={handleSubmit(onSubmit)} class="order-form">
        <div className="form-inner-wrap">
          <div className="form-left-col">
            <div className="sticky">
              <h3 style={{ marginTop: "-15px" }} className="totalprice  ">
                TWOJE ZAMÓWIENIE
              </h3>

              <ul className="order-list">
                <li>
                  {logoQty == 85
                    ? "1 x logo"
                    : logoQty == 125
                    ? "2 x logo"
                    : logoQty == 165
                    ? "3 x logo"
                    : logoQty == 0
                    ? "Mam logo"
                    : logoQty == 120
                    ? "Wektoryzacja logo"
                    : ""}
                </li>
                {dodatkowe
                  .filter(item => item.checked == true)
                  .map(item => {
                    return <li>{item.name}</li>
                  })}
                <li>Poprawki w cenie</li>

                <li>Pliki wektorowe</li>

                <li>Pliki rastrowe</li>

                <li>Pliki źródłowe</li>

                <li>PDF, SVG, EPS, JPG, PNG</li>
                {license == 0 ? (
                  <li>Licencja na korzystanie</li>
                ) : (
                  <li>Prawa autorskie</li>
                )}
              </ul>

              <div className="totalprice gradient-text ">
                DO ZAPŁATY: {total}zł
              </div>

              <span className="subtitle">Wybierz sposób płatności:</span>
              <fieldset className="payment-wrapper" onChange={paymentsHandler}>
                <div className="inner-payment">
                  <div>
                    {" "}
                    <input
                      id="dotpay"
                      name="payment"
                      type="radio"
                      value="dotpay"
                      defaultChecked
                    ></input>
                    <label for="dotpay">
                      Dotpay{" "}
                      <GoQuestion
                        data-tip="Expresowe płatności bankowe oraz BLIK"
                        class="info-icon"
                      />
                    </label>
                  </div>
                  <div>
                    {" "}
                    <input
                      id="paypal"
                      name="payment"
                      type="radio"
                      value="paypal"
                    ></input>
                    <label for="paypal">
                      Paypal{" "}
                      <GoQuestion
                        data-tip="Płatności kartą bankową oraz środkami na koncie PayPal"
                        class="info-icon"
                      />
                    </label>
                  </div>
                  <div>
                    {" "}
                    <input
                      id="przelew"
                      name="payment"
                      type="radio"
                      value="przelew"
                    ></input>
                    <label for="przelew">
                      Przelew{" "}
                      <GoQuestion
                        data-tip="Płatnośc zwykłym przelewem bankowym."
                        class="info-icon"
                      />
                    </label>
                  </div>
                </div>
              </fieldset>

              <div className="details-inputs">
                <div>
                  <input
                    type="text"
                    name="Firstname"
                    placeholder="Imię i nazwisko"
                    ref={register({ required: true, maxLength: 80 })}
                    onChange={e =>
                      setCustomer({ ...customer, name: e.target.value })
                    }
                  />
                </div>
                <div className="error">
                  {errors.Firstname && <span>Podaj imię i nazwisko</span>}
                </div>
              </div>
              <div className="details-inputs">
                <div>
                  <input
                    type="text"
                    placeholder="Adres e-mail"
                    name="email"
                    ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                    onChange={e =>
                      setCustomer({ ...customer, email: e.target.value })
                    }
                  />
                </div>

                <div className="error">
                  {errors.email && <span>Podaj poprawny adres e-mail</span>}
                </div>
              </div>

              <div className="details-inputs">
                <input
                  type="tel"
                  placeholder="Nr telefonu"
                  name="tel"
                  ref={register({ maxLength: 12 })}
                  onChange={e =>
                    setCustomer({ ...customer, tel: e.target.value })
                  }
                />
              </div>
              <div className="details-inputs">
                <div style={{ lineHeight: "1em", marginTop: "-8px" }}>
                  <label>
                    <input
                      type="checkbox"
                      placeholder="Policy"
                      name="policy"
                      ref={register({ required: true })}
                    />
                    Zapoznalem się z{" "}
                    <Link to="/polityka">Polityką prywatności</Link> oraz{" "}
                    <Link to="/regulamin">Regulaminem</Link>
                  </label>
                </div>
                <div>
                  <div className="error">
                    {errors.policy && <span>Zaznacz to pole</span>}
                  </div>
                </div>
              </div>

              <button className="submit mb-8 sm:mb-0" type="submit">
                Zamawiam !
              </button>
            </div>
          </div>

          <div className="form-right-col">
            <h3>
              <span className="number">1</span>Wybierz ilość propozycji logo
            </h3>
            <p>
              Określ ilość różnych konceptów logo, ktore chcesz otrzymać. Im
              więcej zamówisz tym mniej zapłacisz za każdy projekt. Wszystkie
              stają się Twoją własnością.
            </p>
            <fieldset onChange={logoQtyHandler}>
              <div className="flex-inputs">
                <div>
                  <input
                    id="logo-qty"
                    name="logo-qty"
                    type="radio"
                    value="85"
                    defaultChecked
                  ></input>
                  <label for="logo-qty">
                    <GoQuestion
                      data-tip="1 propozycja logo + 2 poprawki"
                      class="info-icon"
                    />
                    1 x logo
                    <span
                      className={
                        logoQty == 85 ? "span-price-checked" : "span-price"
                      }
                    >
                      85zł
                    </span>
                  </label>
                </div>
                <div>
                  <input
                    id="logo-qty2"
                    name="logo-qty"
                    type="radio"
                    value="125"
                  ></input>
                  <label for="logo-qty2">
                    2 x logo{" "}
                    <GoQuestion
                      data-tip="2 propozycje logo + 4 poprawki (łącznie)"
                      class="info-icon"
                    />
                    <span
                      className={
                        logoQty == 125 ? "span-price-checked" : "span-price"
                      }
                    >
                      125zł
                    </span>
                  </label>
                </div>
                <div>
                  {" "}
                  <input
                    id="logo-qty3"
                    name="logo-qty"
                    type="radio"
                    value="165"
                  ></input>
                  <label for="logo-qty3">
                    3 x logo{" "}
                    <GoQuestion
                      data-tip="3 propozycje logo + 6 poprawek (łącznie)"
                      class="info-icon"
                    />
                    <span
                      className={
                        logoQty == 165 ? "span-price-checked" : "span-price"
                      }
                    >
                      {" "}
                      165zl
                    </span>{" "}
                  </label>
                </div>

                <div>
                  <input
                    id="logo-qty6"
                    name="logo-qty"
                    type="radio"
                    value="0"
                  ></input>
                  <label for="logo-qty6">
                    Mam juz logo
                    <GoQuestion
                      data-tip="Wybierz jeśli potrzebujesz tylko dodatkowych usług"
                      class="info-icon"
                    />
                    <span
                      className={
                        logoQty == 0 ? "span-price-checked" : "span-price"
                      }
                    >
                      {" "}
                      0zl
                    </span>
                  </label>
                </div>
                <div>
                  <input
                    id="logo-qty7"
                    name="logo-qty"
                    type="radio"
                    value="120"
                  ></input>
                  <label for="logo-qty7">
                    Wektoryzacja logo{" "}
                    <GoQuestion
                      data-tip="Wybierz tę opcję jeśli chcesz przerobic swoje logo na format wektorowy. Plik załączysz niżej w formularzu"
                      class="info-icon"
                    />
                    <span
                      className={
                        logoQty == 120 ? "span-price-checked" : "span-price"
                      }
                    >
                      {" "}
                      120zl
                    </span>
                  </label>
                </div>
              </div>
            </fieldset>

            <h3>
              <span className="number">2</span>Wybierz dodatkowe usługi
            </h3>
            <p>Projektujemy również inne rzeczy.</p>
            <fieldset>
              <div className="flex-inputs">{dodatkoweOutput}</div>
            </fieldset>

            <fieldset>
              <h3>
                <span className="number">3</span>Opis swój projekt
              </h3>

              <textarea
                id="msg"
                name="message"
                placeholder="Opisz profil swojej działalności, sugestie i inne uwagi dot. projektu/ów."
                onChange={messageStateHandler}
              ></textarea>
            </fieldset>
            <fieldset>
              <h3>
                <span className="number">4</span>Załącz plik
              </h3>
              <p>
                Możesz załączyć szkice, koncepty, inspiracje albo gotowe logo,
                które wymaga wektoryzacji.
              </p>
            </fieldset>

            <h3>
              <span className="number">5</span>Czas realizacji
            </h3>
            <p>
              Standardowy czas projektowania logotypu to najczęściej od 2 do 7
              dni. Mozesz przyspieszyc realizację logo
            </p>

            <fieldset onChange={timeHandler}>
              <div className="flex-inputs block">
                <div>
                  {" "}
                  <input
                    id="standard"
                    name="time"
                    type="radio"
                    value="0"
                    defaultChecked
                  ></input>
                  <label for="standard">
                    Standard 2-7 dni <span className="span-price"> 0zł</span>
                  </label>
                </div>
                <div>
                  <input
                    id="express"
                    name="time"
                    type="radio"
                    value="55"
                  ></input>
                  <label for="express">
                    Express (2 dni) <span className="span-price"> 55zl</span>
                  </label>
                </div>
                <div>
                  <input
                    id="turbo"
                    name="time"
                    type="radio"
                    value="115"
                  ></input>
                  <label for="turbo">
                    Turbo (24h) <span className="span-price"> 115zl</span>
                  </label>
                </div>
              </div>
            </fieldset>

            <h3>
              <span className="number">6</span>Prawa autorskie
            </h3>
            <p>
              Do każego zamówienia otzymujesz za darmo licencję na korzystanie z
              logotypu. Mozesz kupic za 99zł prawa autorskie. Otrzymasz umowę o
              przeniesienie pełnych praw autorskich i możliwość korzystania z
              logotypu w całkowicie dowolny sposób.
            </p>
            <fieldset onChange={licenseHandler}>
              <div className="flex flex-row">
                <div className="">
                  <input
                    id="license"
                    name="license"
                    type="radio"
                    value="0"
                    defaultChecked
                  ></input>
                  <label for="license">
                    Licencja <span className="span-price"> 0zł</span>
                  </label>
                </div>
                <div>
                  <input
                    id="license2"
                    name="license"
                    type="radio"
                    value="99"
                  ></input>
                  <label for="license2">
                    Prawa autorskie <span className="span-price">99zł</span>
                  </label>
                </div>
              </div>
            </fieldset>
            <h3 className="mt-12">
              <span className="number">7</span>Faktura VAT?
            </h3>
            <p>Otrzymasz fakturę razem z projektami</p>

            <fieldset onChange={vatHandler}>
              <input
                id="fvat"
                name="fvat"
                type="radio"
                value="0"
                defaultChecked
              ></input>
              <label for="fvat">NIE</label>
              <input id="fvat2" name="fvat" type="radio" value="99"></input>
              <label for="fvat2">TAK </label>
            </fieldset>
            <AnimatePresence>
              {fvat == true && (
                <motion.fieldset
                  initial={{ x: -30 }}
                  animate={{ x: 0 }}
                  exit={{ x: -30, opacity: 0, transition: { duration: 0.2 } }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 14,
                  }}
                >
                  <p>Podaj dane do faktury</p>

                  <textarea
                    id="faktura"
                    name="faktura"
                    placeholder="Podaj NIP, nazwę firmy oraz adres"
                    onChange={e => setFvatdesc(e.target.value)}
                    className="-mt-2"
                  ></textarea>
                </motion.fieldset>
              )}
            </AnimatePresence>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contactform
