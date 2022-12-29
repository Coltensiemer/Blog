module.exports = function(eleventyConfig) { 

    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/scripts"); 
    eleventyConfig.addPassthroughCopy("./src/assests"); 
    
    return { 
        dir: { 
            input: "src",
            output: "public"
        }
    }
}


