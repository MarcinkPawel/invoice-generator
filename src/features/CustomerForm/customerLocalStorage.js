const localStorageKey = "customer";

export const saveCustomerInLocalStorage = (customer) => {
  try {
    localStorage.setItem(localStorageKey, JSON.stringify(customer));
  } catch (error) {
    console.error("Error saving customer data to localStorage:", error);
  }
};

export const getCustomerFromLocalStorage = () => 
JSON.parse(localStorage.getItem(localStorageKey)) || [];
