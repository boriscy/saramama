import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "gatsby"

export default () => (
  <div>
    <Header headerText="Inicio" />
    <h1 style={{ color: 'teal' }}>Saramama</h1>
    <p>
      Bienvenido a sarama sanación del alma.
    </p>
    <Link to="/contact">Contacto</Link>
    <Footer />
  </div>
)
