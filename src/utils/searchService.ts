/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { debounce } from "./debounce";

function fetchSearchResults(
  search: string,
  filter: string,
  page: number
): Promise<any> {
  const params = new URLSearchParams();
  if (search) {
    params.append("search", search);
  }
  if (filter) {
    params.append("filter", filter);
  }
  if (page) {
    params.append("page", page.toString());
  }

  return axios
    .get(`${import.meta.env.VITE_BK_URL_LINK}/product/get?${params.toString()}`)
    .then((response) => response.data);
}

const debouncedFetchSearchResults = debounce(fetchSearchResults, 300);

export { debouncedFetchSearchResults, fetchSearchResults };
