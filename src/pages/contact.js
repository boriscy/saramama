import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "gatsby"

export default () => (
  <div>
    <Header headerText="Contacto" />
    <h1 style={{ color: 'teal' }}>Contacto</h1>
    <Link to="/contact">Contacto</Link>
    <Footer />
  </div>
)
