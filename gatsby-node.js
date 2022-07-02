const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const ProductsPage = path.resolve(`./src/components/ProductsPage/index.js`)
  const ProductPage = path.resolve(`./src/components/ProductPage/index.js`)

  return graphql(graphQlQuery).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const { jsonData } = result.data

    const productArray = jsonData.edges[0].node.products.map(product => {
      return product
    })

    createPage({
      path: `/`,
      component: ProductsPage,
      context: {
        productData: productArray,
      },
    })

    productArray.forEach(product => {
      createPage({
        path: product.slug,
        component: ProductPage,
        context: {
          productData: product,
        },
      })
    })
  })
}

const graphQlQuery = `
{
  jsonData: allJsonFiles {
    edges {
      node {
        products {
          name
          slug
          description
          price
          size
          stripeUrl
          image{
						relativePath
            childImageSharp {
  						fixed(height: 260) {
                base64
                tracedSVG
                aspectRatio
                width
                height
                src
                srcSet
                srcWebp
                srcSetWebp
                originalName
                __typename
          		}
              fluid(maxWidth: 700) {
                base64
                aspectRatio
                src
                srcSet
                srcSetWebp
                srcWebp
                sizes
                originalImg
              }
            }
          }
        }
      }
    }
  }
}    
`
