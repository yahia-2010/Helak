import { useEffect, useRef } from "react";

const useSearch = (searchValue: string, searchValues: string[]) => {
  const results = useRef<string[]>([]);

  useEffect(() => {
    results.current = searchValues;
    if (searchValue) {
      const newResults = searchValues.filter((value) => {
        return new RegExp(searchValue).test(value);
      });
      results.current = newResults;
    }
  }, [searchValue]);

  return results;
};

export default useSearch;
