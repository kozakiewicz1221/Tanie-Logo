import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import { Table } from "react-bootstrap"

const Admin = () => {
  const [db, setDb] = useState()
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3400/api/admin")
      let data = await response.json()
      await setDb(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <SEO title="Page two" />
      <div className="p-8 bg-gray-900">
        <h1 className="text-teal-400">Admin</h1>
        <div className="bg-gray-100 p-2">
          <Link
            className="mr-3 text-gray-700 font-semibold text-sm"
            to="/zamowienie"
          >
            Zamowienie
          </Link>
          <Link className="mr-3 text-gray-700 font-semibold text-sm" to="/">
            Home
          </Link>
        </div>
        <div className="bg-gray-700 text-gray-100 p-4 mt-4 overflow-x-scroll">
          <Table striped bordered variant="dark" responsive className="text-xs">
            <thead>
              <tr className="text-xs">
                <th>#</th>
                <th>IMIE</th>
                <th>TELEFON</th>
                <th>EMAIL</th>
                <th>QTY</th>
                <th>DODATKOWE</th>
                <th>PRAWA</th>
                <th>CZAS REALIZACJI</th>
                <th>OPIS</th>
                <th>PLATNOŚĆ</th>
                <th>FVAT</th>
                <th>FILE</th>
                <th>DATA</th>
              </tr>
            </thead>
            <tbody>
              {db &&
                db.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.qty}</td>
                    <td>{item.dodatkowe}</td>
                    <td>{item.prawa == 0 ? "NIE" : "TAK"}</td>
                    <td>{item.czas}</td>
                    <td>{item.opis}</td>
                    <td>{item.payment}</td>
                    <td>{item.fvat}</td>
                    <td>{item.file.data}</td>

                    <td>{item.date}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default Admin
