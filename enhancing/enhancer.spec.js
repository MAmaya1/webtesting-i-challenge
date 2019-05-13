const enhancer = require('./enhancer.js');
// test away!

const broadsword = {
    name: 'Broadsword',
    enhancement: 10,
    durability: 55
}

// Should restore durability to 100

it('should restore durability to 100', () => {
    expect(enhancer.repair(broadsword)).toHaveProperty('durability', 100);
})