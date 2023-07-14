const localStorageKey = "invoiceSettings";

export const saveInvoiceInLocalStorage = (invoice) => {
  try {
    localStorage.setItem(localStorageKey, JSON.stringify(invoice));
  } catch (error) {
    console.error("Error saving invoice settings to localStorage:", error);
  }
};

export const getInvoiceFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || [];