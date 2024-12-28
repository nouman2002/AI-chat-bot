import { Product, products } from '../data/products';

export function searchProducts(query: string): Product[] {
  const searchTerms = query.toLowerCase().split(' ');
  return products.filter(product => 
    searchTerms.some(term =>
      product.name.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term) ||
      product.color.toLowerCase().includes(term) ||
      product.size.toLowerCase().includes(term)
    )
  );
}

export function getProductInfo(productId: number): Product | undefined {
  return products.find(p => p.id === productId);
}

export function checkStock(productId: number): number {
  return products.find(p => p.id === productId)?.stockQuantity ?? 0;
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}