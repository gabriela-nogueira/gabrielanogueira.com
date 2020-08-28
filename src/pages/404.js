import React from "react"

import Layout from "../components/Layout"
import NotFound from "../components/NotFound"
import SEO from "../components/seo"
import Footer from "../components/Footer"

const NotFoundPage = () => (
  <>
  <Layout>
    <SEO title="404 : Opsss, nada foi enc..." />
    <NotFound></NotFound>
  </Layout>
  <Footer/>
  </>
)

export default NotFoundPage
