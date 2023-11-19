module.exports = eleventyConfig => {
eleventyConfig.addWatchTarget("src/api");
  // Use the eleventyConfig object's built in methods to customize
    return {
    dir: {
      input: "src",
      output: "public",
    },
    templateFormats: [ "md", "njk", "html", ],
            markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
        html:true,
  };
};
