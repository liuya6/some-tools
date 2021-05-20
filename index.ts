const computedVersions = require("./utils/computeVersion.ts");
const observers = require("./utils/observer.ts");

console.log({
  ...computedVersions,
  ...observers,
});

module.exports = {
  ...computedVersions,
  ...observers,
};
