module.exports = {
  "extends": ["react-app"],
  "rules": {
  },
  "overrides": [
    {
      "files": ["**/*.tsx?(x)"],
      "rules": {
// ******** add ignore rules here *********
        "react-hooks/exhaustive-deps": "off",
      }
    }
  ]
}
