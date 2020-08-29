const {
  commerce, lorem, random, time, image,
} = require('faker');

module.exports = () => {
  const products = [];
  for (let i = 0; i < 9; i++) {
    products.push({
      id: i + 1,
      name: commerce.productName(),
      code: random.uuid(),
      product: commerce.product(),
      price: commerce.price(),
      description: lorem.sentences(),
      createdAt: time.recent,
      img: image.business(),
    });
  }
  return {
    products,
  };
};
