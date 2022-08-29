import helakMock from "@/mocks/helakMock.json";

const fetchHelak = (
  name: string
): { res: HalakaInterface | undefined; err: any } => {
  const halaka = helakMock.find((halaka) => halaka.name === name);
  return { res: halaka, err: null };
};

export default fetchHelak;
