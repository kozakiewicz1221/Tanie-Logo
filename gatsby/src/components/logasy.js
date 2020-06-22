import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../style/logasy.scss"


const Logasy = function () {



  return (
    < StaticQuery
      query={graphql`
    query clientquery {
      allFile(filter: {relativeDirectory: {eq: "logasy/picked"}}) {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid

                    }
            }
          }
        }
      }
    }

    `}
      render={data => (

        <section className="logos-wrapper container" >

          <h2>Przykładowe realizacje</h2>
          <p>Zrealizowaliśmy ponad 5000 różnych projektów graficznych dla naszych klientów z 6 kontynentów. Z wieloma z nich współpracujemy na stałe. Zaprojektujmy teraz Twoje nowe logo :)
</p>
          <div className="logos-grid">
            {data.allFile.edges.map((logo) =>
              <div className="logo-item" key={logo.node.id}>
                <Img className="img" fluid={logo.node.childImageSharp.fluid} />
              </div>
            )}
          </div>


        </section>
      )}
    />
  )

}
export default Logasy