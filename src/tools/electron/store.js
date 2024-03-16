const Store = require("electron-store");
const {
  migration_1_0_0,
} = require("../../core/utility/migrations");

const store = new Store({
  migrations: {
    "<1.0.0": (store) => {
      migration_1_0_0(store);
    }
  },
});

module.exports = store;
