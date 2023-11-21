module.exports = eleventyConfig => {
eleventyConfig.addWatchTarget("api");
    eleventyConfig.addPairedShortcode("title", function(content, arg) {
            return `<p class="${arg}">${content}</p>`
    });
    /*
     * eleventyConfig.addShortcode("title", function(arg) {
        return `<h1>${arg}</h1>`;
    });
    */
  // Use the eleventyConfig object's built in methods to customize
    return {
    dir: {
      input: "src",
    },
    templateFormats: [ "md", "njk", "html", ],
            markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
        html:true,
  };
};
