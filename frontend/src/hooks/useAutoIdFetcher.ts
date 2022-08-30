import React, { useEffect, useState } from "react";

const useAutoIdFetcher = (
  values: {
    IDs?: number[];
    setter: React.Dispatch<React.SetStateAction<any[]>>;
  }[],
  fetcher: (id: number) => { res: any; err: any },
  setError: (value: any) => void
) => {
  useEffect(() => {
    values.forEach((value) => {
      value.setter(() => {
        return value.IDs
          ? (value.IDs?.map((id) => {
              const { res, err } = fetcher(id);
              setError(err);
              return res;
            }).filter((value) => value) as any[])
          : [];
      });
    });
  }, [...values.map((value) => value.IDs)]);
};

export default useAutoIdFetcher;
