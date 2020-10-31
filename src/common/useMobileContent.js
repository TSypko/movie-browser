import { useState, useEffect } from "react";
import { theme } from "../theme";

export default () => {
  const [mobileContent, setMobileContent] = useState(false);
  const mobileBreakpoint = +theme.breakpoints.mobileMax.slice(0, -2);

  const onWidthChange = () => {
    if (window.innerWidth <= mobileBreakpoint) {
      setMobileContent(true);
    } else {
      setMobileContent(false);
    }
  };

  useEffect(() => {
    onWidthChange();
    window.addEventListener("resize", onWidthChange);
    return () => window.removeEventListener("resize", onWidthChange);
  });

  return mobileContent;
}