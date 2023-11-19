const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  let url ='localhost:9000/src/api/data.json';
//https://raw.githubusercontent.com/ProjectSakura/OTA/10/changelog/changelog_beryllium.txt

  /* This returns a promise */
  return EleventyFetch(url, {
    duration: "0", // save for 1 day
    type: "json"    // we’ll parse JSON for you
  });
};


