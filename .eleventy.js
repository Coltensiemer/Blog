const { DateTime } = require("luxon");



module.exports = function(eleventyConfig) { 

    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/scripts"); 
    eleventyConfig.addPassthroughCopy("./src/assests"); 
    eleventyConfig.addPassthroughCopy("./src/admin"); 
    eleventyConfig.addPassthroughCopy("./src/php");

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toFormat("LLL yyyy");
      });

    return { 
        dir: { 
            input: "src",
            output: "public"
        }
    }
}


