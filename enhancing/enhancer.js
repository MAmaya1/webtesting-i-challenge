module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  // item.enhancement === 20 ? 20 : item.enhancement += 1
  if (item.enhancement < 20) {
    item.enhancement += 1
  } else {
    item.enhancement = 20
  }
  return {...item};
}

function fail(item) {
  // item.enhancement > 16 ? item.enhancement -= 1 : item.enhancement
  if (item.enhancement >= 15) {
    if (item.enhancement > 16) {
      item.enhancement -= 1;
    }
    item.durability -= 10;
  } else {
    item.durability -= 5;
  }
  // item.enhancement >= 15 ? item.durability -= 10 : item.durability -= 5
  return {...item};
}

function repair(item) {
  return {
    name: item.name,
    enhancement: item.enhancement,
    durability: item.durability < 100 ? 100 : item.durability
  };
}

function get(item) {
  if (item.enhancement === 0) {
    name: item.name
  } else {
    item.name = `[+${item.enhancement}] ${item.name}`
  }
  return { ...item };
}
