const computedVersions = require("./utils/computeVersion.ts");
const observers = require("./utils/observer.ts");

module.exports = {
  ...computedVersions,
  ...observers,
};
