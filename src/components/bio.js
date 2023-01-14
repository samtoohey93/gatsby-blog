/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            linkedin
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile.jpeg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <>
          <section className="links">
            <p>
              I'm a Front-End developer with a focus on React and a penchant for
              User Experience. I've been in a constant state of learning for the
              past 5 years - and I have a few projects under my belt. And yes,
              this is <i>simple</i> because I just want something basic and fast
              - the blog is intended to be styled in the same vein as marco.org
            </p>
            <p>
              Blog by <strong>{author.name}</strong> <br></br>
              Who {author?.summary || null}
              <br></br>
              {` `}
              Things you can do: <br></br>
              <a href={`https://twitter.com/${social?.twitter || ``}`}>
                Follow me on Twitter
              </a>
              <a href={`https://techhub.social/@${social?.twitter || ``}`}>
                <br></br> Follow on Mastodon
              </a>
              <a href={social?.linkedin || ``}>
                <br></br> Check out my LinkedIn
              </a>
              <a href={social?.agency || ``}>
                <br></br> Hire my Agency
              </a>
            </p>{" "}
          </section>
        </>
      )}
    </div>
  )
}

export default Bio
