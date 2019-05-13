const enhancer = require('./enhancer.js');
// test away!

const broadsword = {
    name: 'Broadsword',
    enhancement: 10,
    durability: 55
}

// Should increase enhancement by 1

it('should increase enhancement by 1', () => {
    expect(enhancer.succeed(broadsword)).toHaveProperty('enhancement', 11)
    expect(enhancer.succeed({enhancement: 8})).toHaveProperty('enhancement', 9)
})

// // Should decrease enhancement and durability on fail

it('should decrease enhancement by 1 if enhancement level is greater than 16', () => {
    expect(enhancer.fail({enhancement: 11, durability: 55})).toEqual({enhancement: 11, durability: 50})
})

it('should decrease enhancement by 1 if enhancement level is greater than 16', () => {
    expect(enhancer.fail({enhancement: 17, durability: 55})).toEqual({enhancement: 16, durability: 45})
})

it('should decrease durability by 10 if enhancement level is greater than or equal to 15', () => {
    expect(enhancer.fail({enhancement: 15, durability: 55})).toEqual({enhancement: 15, durability: 45})
})

// Should restore durability to 100

it('should restore durability to 100', () => {
    expect(enhancer.repair(broadsword)).toHaveProperty('durability', 100);
})

// Should add enhancement level to name

it('should add enhancement level to name', () => {
    expect(enhancer.get({name: 'Short Sword', enhancement: 12})).toHaveProperty('name', '[+12] Short Sword')
})