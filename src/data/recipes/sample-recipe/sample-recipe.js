
// Pass the file path of each code file to render
const contractPath = "sample-recipe/cadence/contract.cdc";
const transactionPath = "sample-recipe/cadence/transaction.cdc";
const testPath = "sample-recipe/cadence/tests.cdc";

export const sampleRecipe = {
  slug: "sample-recipe",
  title: "Sample Recipe Submodule",
  module: "Submodule Example",
  author: "Lorem ipsum",
  coverUrl: "/assets/images/sample_recipe_cover.png",
  createdAt: Date.now(),
  description: "Example of sourcing a recipe from a git submodule",
  excerpt:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  smartContractCode: contractPath,
  smartContractExplanation: "Lorem ipsum smart contract explanation",
  transactionCode: transactionPath,
  transactionExplanation: "Lorem ipsum transaction explanation",
  testCasesExplanation: "Lorem ipsum test cases explanation",
  testCasesCode: testPath,
  tags: ["NFTs", "NFT Storefront", "Cadence", "Smart Contract"],
  comments: [],
};
