import bestHelakMock from "@/mocks/helakMock.json";

const fetchBestHelak = (): { res: HalakaInterface[]; err: any } => {
  return { res: bestHelakMock, err: null };
};

export default fetchBestHelak;
