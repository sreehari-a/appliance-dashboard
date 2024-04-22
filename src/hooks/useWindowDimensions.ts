import { useEffect, useLayoutEffect, useState } from "react";

function getWindowDimensions(element: HTMLDivElement | null) {
  const { clientWidth: width, clientHeight: height } = element || {};
  return {
    width,
    height,
  };
}
function useWindowDimensions(element: HTMLDivElement | null) {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(element)
  );

  useLayoutEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions(element));
    }
    handleResize()
    if (element) {
      element?.addEventListener("resize", handleResize);
    }
  }, [element]);
  return windowDimensions;
}
export default useWindowDimensions;
