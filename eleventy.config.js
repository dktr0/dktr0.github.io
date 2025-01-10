export default function(eleventyConfig) {
  eleventyConfig.setOutputDirectory("docs");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("background.jpg");
  eleventyConfig.addPassthroughCopy({"game-design-course/mechanics-1.zip":"game-design-course/mechanics-1.zip"});
};

