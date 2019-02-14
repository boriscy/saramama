import * as React from "react"
import Layout from "../layouts/index"
import Footer from "../components/footer"
// import { Link } from "gatsby"

interface IndexPageProps {}

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    return(
      <Layout>
        <div className="page-home">
          <div className="parallax sun">
          </div>
          <div className="page-title">
            <h1 className="title">
              Sara<span className="bold">Mama</span>
            </h1>

            <h2 className="title">Potencia tu sanador interior</h2>
          </div>
          <div className="container">
            {/*
            <ul>
              <li>Conciente de nuestro origen divino, honro la Vida en la Tierra y bendigo la naturaleza divina de todos los seres.</li>

              <li>Vivir bien es vivir a corazón abierto, transformando la escacez en abudancia y el egoismo en generosidad.</li>

              <li>Levanto las medicinas de la Tierra y del mundo honrando los 4 elementos: tierra, agua, fuego y aire. Conjuncionando mis 3 aspectos: físico, psicológico y espiritual. Físico, emocional y mental. Mis 3 realidades.</li>

              <li>Me abstengo de alimentar mi propia mentira, mi propia falsedad. Me abstengo de alimentar la mentira de los demás. Rechaso lo falso.</li>

              <li>Son mi familia las plantas, las piedras, los animales, las momtañas, los rios, los humanos, los hermanos de arriba y los hermanos de abajo.</li>

              <li>Pongo en práctica todas las enseñanzas con acciones concretas por el bien común</li>

              <li>Pongo al servicio mis acciones cotidianas en pós del bien común, del Nosotros.</li>
            </ul>
            */}
          </div>
        </div>

        <Footer />
      </Layout>
    )
  }
}
