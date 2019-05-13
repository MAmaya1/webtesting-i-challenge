module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return {
    name: item.name,
    enhancement: item.enhancement,
    durability: item.durability < 100 ? 100 : item.durability
  };
}

function get(item) {
  return { ...item };
}
