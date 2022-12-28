module.exports = function(eleventyConfig) { 

    eleventyConfig.addPassthroughCopy("//src/css");
    eleventyConfig.addPassthroughCopy("./scripts");
    eleventyConfig.addPassthroughCopy("./index.html");
    
    return { 
        dir: { 
            input: "src",
            output: "public"
        }
    }
}


