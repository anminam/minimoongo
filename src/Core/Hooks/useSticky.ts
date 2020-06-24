import { useEffect, useState, useRef, useCallback } from "react";

const useSticky = () => {
  const [isSticky, setSticky] = useState(false);
  const [initValue, setInitValue] = useState<number | null>(null);
  const element = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (element) {
      console.log(window.scrollY, initValue);
      // window.scrollY > element.current.getBoundingClientRect().bottom
      window.scrollY > (initValue || 0) ? setSticky(true) : setSticky(false);
    }
  };

  // This function handle the scroll performance issue
  // const debounce = (func, wait = 20, immediate = true) => {
  //   let timeOut;
  //   return () => {
  //     let context = this,
  //       args = arguments;
  //     const later = () => {
  //       timeOut = null;
  //       if (!immediate) func.apply(context, args);
  //     };
  //     const callNow = immediate && !timeOut;
  //     clearTimeout(timeOut);
  //     timeOut = setTimeout(later, wait);
  //     if (callNow) func.apply(context, args);
  //   };
  // };

  useEffect(() => {
    // window.addEventListener("scroll", debounce(handleScroll));
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // 이게 바뀌면 초기화가 '잘' 되나?
  useEffect(() => {
    const offsetTop = element.current?.offsetTop || 0;
    setInitValue(offsetTop);
  }, [element]);

  return { isSticky, element };
};

export default useSticky;
