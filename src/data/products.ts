export interface Product {
  id: number;
  category: string;
  name: string;
  size: string;
  color: string;
  price: number;
  stockQuantity: number;
}

export const products: Product[] = [
  { id: 1, category: 'Shirt', name: 'Casual Cotton Shirt', size: 'M', color: 'Blue', price: 19.99, stockQuantity: 50 },
  { id: 2, category: 'Shirt', name: 'Formal White Shirt', size: 'L', color: 'White', price: 29.99, stockQuantity: 30 },
  { id: 3, category: 'Pants', name: 'Denim Jeans', size: 'XL', color: 'Black', price: 49.99, stockQuantity: 25 },
  { id: 4, category: 'Pants', name: 'Chino Trousers', size: 'M', color: 'Khaki', price: 39.99, stockQuantity: 40 },
  { id: 5, category: 'Dress', name: 'Summer Floral Dress', size: 'S', color: 'Yellow', price: 59.99, stockQuantity: 15 },
  { id: 6, category: 'Jacket', name: 'Leather Jacket', size: 'L', color: 'Brown', price: 89.99, stockQuantity: 10 },
  { id: 7, category: 'Jacket', name: 'Winter Puffer Coat', size: 'XL', color: 'Green', price: 99.99, stockQuantity: 8 },
  { id: 8, category: 'T-Shirt', name: 'Graphic T-Shirt', size: 'M', color: 'Red', price: 14.99, stockQuantity: 60 },
  { id: 9, category: 'T-Shirt', name: 'Plain Black Tee', size: 'S', color: 'Black', price: 9.99, stockQuantity: 100 },
  { id: 10, category: 'Skirt', name: 'Pleated Midi Skirt', size: 'M', color: 'Pink', price: 34.99, stockQuantity: 20 }
];