import secureLocalStorage from "react-secure-storage";

// set access token
export const setAccessToken = (access_token) => {
  secureLocalStorage.setItem(
    import.meta.env.VITE_SECURE_LOCAL_STORAGE_HASH_KEY,
    access_token
  );
};

// get access token
export const getAccessToken = () => {
  const accessToken = secureLocalStorage.getItem(
    import.meta.env.VITE_SECURE_LOCAL_STORAGE_HASH_KEY
  );
  return accessToken;
};
// remove access token
export const removeAccessToken = () => {
  secureLocalStorage.removeItem(
    import.meta.env.VITE_SECURE_LOCAL_STORAGE_HASH_KEY
  );
};
