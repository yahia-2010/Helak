/* eslint-disable @typescript-eslint/no-explicit-any */
import bestHelakMock from "../mocks/bestHelakMock.json";

const fetchBestHelak = (): { res: HalakaInterface[]; err: any } => {
  return { res: bestHelakMock, err: null };
};

export default fetchBestHelak;
