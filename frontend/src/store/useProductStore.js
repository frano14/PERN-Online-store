import { create } from "zustand";
import axios from "axios";

const useProductStore = create((set, get) => ({

  products: [],
  fetchLandingProducts: async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/product/landingPageProducts');
      set({ products: response.data.data });
      console.log(response.data.data);
      if (response.status === 200) {
      } else {
        console.log('Unexpected status:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },

  currentProduct: null,
  fetchCurrentProduct: async (id) => {
    try {
      if (get().currentProduct?.id === id) return; 
      set({ currentProduct: null }); 
  
      const response = await axios.get(`http://localhost:5000/api/product/${id}`);
      
      if (response.data.success) {
        const product = response.data.data;
        set({ currentProduct: product });  
      }
    } catch (err) {
      console.log("Error fetching product:", err);
    }
  }
  

}));

export default useProductStore;




/* import { create } from 'zustand';

const useProductStore = create((set) => ({
  products: [],
  similarProducts: [],
  
  addProduct: (product) => set((state) => ({
    products: [...state.products, product]
  })),
  
  setProducts: (products) => set({
    products
  }),

  currentProduct: null,

  setCurrentProduct: (product) => set({
      currentProduct: product
  })
}));

export default useProductStore;
 */