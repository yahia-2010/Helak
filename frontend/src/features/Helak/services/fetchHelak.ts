import helakMock from "@/mocks/helakMock.json";

const fetchHelak = (): { res: HalakaInterface[]; err: any } => {
  return { res: helakMock, err: null };
};

export default fetchHelak;
