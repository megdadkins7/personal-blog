import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from "../components/seo"

const StyledH3 = styled.h3`
  font-weight: 600;
`;

const StyledLink = styled(props => <Link {...props} />)`
  color: #5E6472;
  Hover:hover {
    color: #7AD6D4;
  }
  `;

function BlogPage({ data }) {
  return (
    <Layout>
      <SEO title="Blog" />
      <h1 style={{ marginBottom: '30px'}}>LATEST POSTS</h1>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <StyledLink className='Hover' to={post.node.frontmatter.path}><StyledH3>{post.node.frontmatter.title.toUpperCase()}</StyledH3></StyledLink>
          <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
          <br />
          <br />
          <Link to={post.node.frontmatter.path}>Read More...</Link>
          <br />
          <br />
          <hr />
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark
      (sort: { fields: [frontmatter___date], order: DESC })
      {
        edges{
          node{
            id
            frontmatter{
              path
              title
              date
              author
            }
          }
        }
      }
  }
`

export default BlogPage