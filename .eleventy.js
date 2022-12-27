module.exports - function(eleventyconfig) { 

    eleventyconfig.addPassthroughCopy('./styles'); 
    eleventyconfig.addPassthroughCopy('./images'); 
    return { 
        dir: { 
            input: "src",
            output: "_public"
        }
    }
}