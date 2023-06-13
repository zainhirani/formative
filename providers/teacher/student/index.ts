import {
    UseQueryResult,
    useQuery,
  } from "react-query";
  import * as api from "./api";
  import { Student } from "./types";

  const KEY = 'Students'

  export function getKeyFromProps(
    props: any,
    type: "LISTING" | "DETAIL",
  ): string[] {
    const key = [KEY, type];
    key.push(props);
    return key;
  }

  //Listing
  export function useStudentListing (props:Student.ListingProps):UseQueryResult<Student.ListingResponse>{
    return useQuery(getKeyFromProps(props, 'LISTING'), () => api.listing(props))
  }