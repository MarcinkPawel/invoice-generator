const localStorageKey = "customer";

export const saveCustomerInLocalStorage = (customers) => {
  try {
    localStorage.setItem(localStorageKey, JSON.stringify(customers));
  } catch (error) {
    console.error("Error saving customer data to localStorage:", error);
  }
};

export const getCustomerFromLocalStorage = () => 
JSON.parse(localStorage.getItem(localStorageKey)) || [];
