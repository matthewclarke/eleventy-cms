const EleventyFetch = require("@11ty/eleventy-fetch");
//const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
module.exports = async function() {
  let url ='http://localhost:9000/get-pages'
// const url = 'https://raw.githubusercontent.com/matthewclarke/eleventy-cms/master/src/api/data.json';
  //  let o = fetch(url).then(res => res.json()).then((data) => {
    //     console.log(data);
  //  });
  /* This returns a promise */
  return EleventyFetch(url, {
    duration: "0d", // save for 1 day
    type: "json"    // we’ll parse JSON for you
  });
};
