import Config from './config';

/**
 * Default configuration values for the image responsiver plugin.
 */
const defaults: Config = {
  rootDir: "./src",
  imagesDirs: "assets/imgs",
  imageExtensions: [".png", ".jpg", ".jpeg", ".gif", ".webp"],
  conversionSizes: [240, 480, 768, 1280, 1920],
  outputFileTypes: [".avif", ".webp", ".jpg"],
  htmlDirs: "./src",
  htmlFileType: ".html",
  imgTagRegex: /<img\s+[^>]*src=["']([^"']+)["'][^>]*alt=["']([^"']+)["'][^>]*>/g
}

export default defaults;