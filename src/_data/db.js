const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  let url ='http://localhost:9000/src/api/data.json';
// const url = 'https://raw.githubusercontent.com/matthewclarke/eleventy-cms/master/src/api/data.json';

  /* This returns a promise */
  return EleventyFetch(url, {
    duration: "0", // save for 1 day
    type: "json"    // we’ll parse JSON for you
  });
};


