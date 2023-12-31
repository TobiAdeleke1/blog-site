/**
 * @typedef {Object} Links
 * @prop {string} github Your github repository
 */

/**
 * @typedef {Object} MetaConfig
 * @prop {string} title Your website title
 * @prop {string} description Your website description
 * @prop {string} author Maybe your name
 * @prop {string} siteUrl Your website URL
 * @prop {string} lang Your website Language
 * @prop {string} utterances Github repository to store comments
 * @prop {Links} links
 * @prop {string} favicon Favicon Path
 */

/** @type {MetaConfig} */
const metaConfig = {
  title: "Tblog",
  description: `Blog`,
  author: "Tobi",
  // siteUrl: "https://gatsby-starter-apple.netlify.app",
  siteUrl: "https://coruscating-caramel-c94a39.netlify.app/",
  lang: "en",
  utterances: "",
  links: {
    github: "https://github.com/TobiAdeleke1",
  },
  favicon: "src/images/icon.png",
}

// eslint-disable-next-line no-undef
module.exports = metaConfig
