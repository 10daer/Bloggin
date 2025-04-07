export class ProductMatcher {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  findCompatibleProducts(targetProduct) {
    // Example logic: match products with same category or similar tags
    return this.products.filter(
      (product) =>
        product.id !== targetProduct.id &&
        product.category === targetProduct.category
    );
  }
}
