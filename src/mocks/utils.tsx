import { worker } from "./browser";

export const CustomFetchCall = async (url: string, init?: RequestInit) => {
  await worker.start();
  const res = await fetch(url, init);
  worker.resetHandlers();
  return res;
};
