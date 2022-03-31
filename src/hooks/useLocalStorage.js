const prefixStorage = 'test-react-';

const useLocalStorage = () => {
  const setItem = (name, item) => {
    localStorage.setItem(`${prefixStorage}${name}`, item);
  };

  const getItem = (name, item) =>
    localStorage.getItem(`${prefixStorage}${name}`, item);

  const removeItem = (name) => {
    localStorage.removeItem(`${prefixStorage}${name}`);
  };

  return { setItem, getItem, removeItem };
};

export default useLocalStorage;