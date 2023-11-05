const useSmallSearch = () => {
  const smallSearch = async (url) => {
    const data = await fetch(url)
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        return [];
      });
    return data;
  };
  return { smallSearch };
};

export default useSmallSearch;
