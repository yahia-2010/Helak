import helakMock from "@/mocks/helakMock.json";

const fetchHelak = (
  id: number
): { res: HalakaInterface | undefined; err: any } => {
  const halaka = helakMock.find((halaka) => halaka.id === id);
  return { res: halaka, err: null };
};

export default fetchHelak;
