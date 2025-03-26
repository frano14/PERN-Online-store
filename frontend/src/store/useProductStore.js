import { create } from 'zustand';

const useProductStore = create((set) => ({
  products: [],
  
  addProduct: (product) => set((state) => ({
    products: [...state.products, product]
  })),
  
  setProducts: (products) => set({
    products: products
  }),
}));

export default useProductStore;
