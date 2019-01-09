import * as React from "react"

import Layout from "../layouts/index"
import Header from "../components/header"
// import Footer from "../components/footer"
// import { Link } from "gatsby"

interface IndexPageProps {}

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    return(
      <Layout>
        <Header headerText="Inicio" />
        <p>
          Bienvenido a sarama sanación del alma.
        </p>
      </Layout>
    )
  }
}
