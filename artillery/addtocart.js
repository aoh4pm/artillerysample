const { testCart } = require('./commands/addtocart.js');


async function artilleryScript(page)
{
    await testCart(page)
}

module.exports = {
    artilleryScript
};
