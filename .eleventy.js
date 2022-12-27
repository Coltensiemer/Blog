module.exports - function(eleventyconfig) { 

    eleventyconfig.addPassthroughCopy('./css'); 
    eleventyconfig.addPassthroughCopy('./images'); 
    return { 
        dir: { 
            input: "src",
            output: "_public"
        }
    }
}