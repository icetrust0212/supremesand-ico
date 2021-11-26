import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

const Layout = ({ title, description, children }) => {
  return (
    <Fragment>
      <Helmet>
        {title && <title> {title} - Supreme Sand </title>}
        {description && <mata name='description' content={description} />}
      </Helmet>
      <Fragment>
        <div className="layout">
          {children}
        </div>
      </Fragment>
    </Fragment>
  )
}

export default Layout
