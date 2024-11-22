import path from "path";
module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "src"), // This resolves @ to the src/ folder
    },
  },
};
