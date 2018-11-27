import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div>
      {
        Object.keys(data.file.markdown)
          .map(key => (
            <div key={key}>
              <h1>Excerpt: {key}</h1>
              <div dangerouslySetInnerHTML={{ __html: data.file.markdown[key] }} />
            </div>
          ))
      }
    </div>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  {
    file(absolutePath:{regex:"/sample.md/"}) {
      markdown:childMarkdownRemark {
        plain:excerpt
        html:excerpt(format:HTML)
      }
    }
  }
`