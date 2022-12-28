module.exports = function(eleventyConfig) { 

    eleventyConfig.addPassthroughCopy("/src/css");
    eleventyConfig.addPassthroughCopy("./scripts"); 
    
    return { 
        dir: { 
            input: "src",
            output: "public"
        }
    }
}


