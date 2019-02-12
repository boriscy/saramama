import * as React from 'react'
import PropTypes from 'prop-types'
import Nav from './nav'

import '../styles/main.scss'
import 'bootstrap/dist/css/bootstrap.css'

const Layout = ({ children }) => (
  <div>
    <Nav />
    <div>{children}</div>
  </div>
)
Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
