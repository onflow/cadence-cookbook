const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleNameMapper: {
    "react-markdown":
      "<rootDir>/node_modules/react-markdown/react-markdown.min.js",
      "rehype-highlight":
      "<rootDir>/node_modules/rehype-highlight/lib/index.js",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(rehype-raw|unist-util-find-after|hast-util-is-element|rehype-highlight|fault|hast-util-to-text|lowlight|markdown-table|mdast-util-gfm-task-list-item|mdast-util-gfm-table|mdast-util-gfm-strikethrough|micromark-util-decode-numeric-character-reference|micromark-util-decode-string|mdast-util-to-markdown|mdast-util-gfm-footnote|escape-string-regexp|ccount|mdast-util-find-and-replace|mdast-util-gfm-autolink-literal|mdast-util-gfm|micromark-extension-gfm-task-list-item|micromark-extension-gfm-tagfilter|micromark|micromark-extension-gfm-table|micromark-extension-gfm-strikethrough|micromark-util-html-tag-name|micromark-util-normalize-identifier|micromark-factory-whitespace|micromark-factory-title|micromark-factory-label|micromark-factory-destination|micromark-util-subtokenize|decode-named-character-reference|micromark-util-character|micromark-factory-space|micromark-util-character|micromark-util-resolve-all|micromark-util-classify-character|micromark-core-commonmark|micromark-extension-gfm-footnote|micromark-util-encode|micromark-util-sanitize-uri|micromark-util-character|micromark-extension-gfm-autolink-literal|micromark-util-combine-extensions|micromark-util-chunked|remark-gfm|micromark-extension-gfm|hast-util-raw|unist-util-position|unist-util-visit|unist-util-visit-parents|unist-util-is|hast-util-from-parse5|hastscript|property-information|hast-util-parse-selector|space-separated-tokens|comma-separated-tokens|vfile-location|web-namespaces|hast-util-to-parse5|zwitch|html-void-elements)/)",
  ],
  clearMocks: true,
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = async () => ({
  ...(await createJestConfig(customJestConfig)()),
  transformIgnorePatterns: [
    "node_modules/(?!(rehype-raw|unist-util-find-after|hast-util-is-element|rehype-highlight|hast-util-to-text|fault|lowlight|markdown-table|mdast-util-gfm-task-list-item|mdast-util-gfm-table|mdast-util-gfm-strikethrough|micromark-util-decode-numeric-character-reference|micromark-util-decode-string|mdast-util-to-markdown|mdast-util-gfm-footnote|escape-string-regexp|ccount|mdast-util-find-and-replace|mdast-util-gfm-autolink-literal|mdast-util-gfm|micromark-extension-gfm-task-list-item|micromark-extension-gfm-tagfilter|micromark|micromark-extension-gfm-table|micromark-extension-gfm-strikethrough|micromark-util-html-tag-name|micromark-util-normalize-identifier|micromark-factory-whitespace|micromark-factory-title|micromark-factory-label|micromark-factory-destination|micromark-util-subtokenize|decode-named-character-reference|micromark-util-character|micromark-factory-space|micromark-util-character|micromark-util-resolve-all|micromark-util-classify-character|micromark-core-commonmark|micromark-extension-gfm-footnote|micromark-util-encode|micromark-util-sanitize-uri|micromark-util-character|micromark-extension-gfm-autolink-literal|micromark-util-combine-extensions|remark-gfm|micromark-util-chunked|micromark-extension-gfm|hast-util-raw|unist-util-position|unist-util-visit|unist-util-visit-parents|unist-util-is|hast-util-from-parse5|hastscript|property-information|hast-util-parse-selector|space-separated-tokens|comma-separated-tokens|vfile-location|web-namespaces|hast-util-to-parse5|zwitch|html-void-elements)/)",
  ],
});
