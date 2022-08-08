const resizeWindow = (width: number, height: number) => {
  window.innerHeight = height;
  window.innerWidth = width;
  window.dispatchEvent(new Event("resize"));
};

export default resizeWindow;
