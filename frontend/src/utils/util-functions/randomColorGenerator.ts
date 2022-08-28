const randomColorGenerator = (): [number, number, number] => {
  return [
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255),
  ];
};

export default randomColorGenerator;
