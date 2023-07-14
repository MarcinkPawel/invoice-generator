const localStorageKey = "invoiceProducts";

export const saveProductsInLocalStorage = (products) => {
  try {
    localStorage.setItem(localStorageKey, JSON.stringify(products));
  } catch (error) {
    console.error("Error saving customer data to localStorage:", error);
  }
};

export const getProductsFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || [];
