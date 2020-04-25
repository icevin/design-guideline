module.exports = function(eleventyConfig) {

    //Tell 11ty to search these directories for files
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.addPassthroughCopy('pages');
    eleventyConfig.addPassthroughCopy('_includes');

    //Add collection for committees
    eleventyConfig.addCollection('committees', collection => {
        return collection.getFilteredByGlob('_committees/*.md');
    });

    eleventyConfig.setLiquidOptions({
        dynamicPartials: false,
        root: [
          '_includes',
          '.'
        ]
      });

    //Tell 11ty that all files 
    return {
        passthroughFileCopy: true,
        pathPrefix: "/",
        dir: {
            input: "./",
            output: "_site",
            includes: "_includes",
            layouts: "_layouts"
        },
        htmlTemplateEngine: "liquid",
        markdownTemplateEngine: "njk",
        templateFormats: ["md", "html", "njk"]
    }
    
}