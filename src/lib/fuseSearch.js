import Fuse from "fuse.js";

const fuseOptions = {
  shouldSort: true,
  threshold: 0.4,
  minMatchCharLength: 3,
  keys: ["title", "composer", "comments"],
};

const fuseSearch = (array, query) => {
  const fuse = new Fuse(array, fuseOptions);
  const resultArray = [];
  if (query.length > 2) {
    const result = fuse.search(query);
    result.forEach((item) => {
      resultArray.push(item.item);
    });
  }
  return resultArray;
};

export default fuseSearch;
