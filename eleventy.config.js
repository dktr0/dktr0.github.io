export default function(eleventyConfig) {
  eleventyConfig.setOutputDirectory("docs");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("background.jpg");
};

