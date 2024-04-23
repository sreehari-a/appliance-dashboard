import { ThemeProvider } from "styled-components";
import { worker } from "../mocks/browser";
import { Location } from "../pages/Devices/types";
import theme from "../theme";

export const getLocationString = (location?: Location) => {
  const { city, state, country } = location || {};
  return `${city ? `${city}, ` : ""}${state ? `${state}, ` : ""}${
    country ? `${country}` : ""
  }`;
};

export const getDateString = (dateString: string) => {
  const date = new Date(dateString); // 2009-11-10
  const formattedDate = date.toLocaleString("default", {
    day: "2-digit",
    month: "short",
  });
  return formattedDate;
};

export const formatString = (text: string, ...values: string[]) => {
  let formattedText = text;
  let index=0;
  values.map(value => {
    if(typeof value ==="string") {
      formattedText = formattedText.replace(`{${index}}`,value)
    }
    index+=1;
  })
  return formattedText;
}


export const ThemeWrapper = (element: JSX.Element) => {
  return (
      <ThemeProvider theme={theme}>
          {element}
      </ThemeProvider>
  )
}

export const CustomFetchCall =  async(url: string, init?: RequestInit) => {
  await worker.start();
  const res = await  fetch(url, init);
  worker.resetHandlers();
  return res;
}

export default {
  getLocationString,
  getDateString,
  ThemeWrapper
};
