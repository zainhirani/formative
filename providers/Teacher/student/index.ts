import {
  UseMutationResult,
    UseQueryResult,
    useMutation,
    useQuery,
    useQueryClient,
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

  //Enroll
  export function useStudentEnroll(
    props: Student.EnrollProps = {},
  ): UseMutationResult<
    Student.EnrollResponse,
    {
      message?: string;
    },
    Student.EnrollMutationPayload
  > {
    const queryClient = useQueryClient();
    return useMutation((payload) => api.enroll({ ...props, data: payload }), {
      mutationKey: `${KEY} | Create`,
      onSuccess: () => {
        queryClient.invalidateQueries(['Students']);
      },
      retry: 0,
    });
  }