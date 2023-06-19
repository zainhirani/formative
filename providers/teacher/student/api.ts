import service from "services";
import { Student } from "./types";

//GET Profile

export async function listing(props?:Student.ListingAPIPayload):Promise<Student.ListingResponse> {
    return service ({
        method:'GET',
        url:`/user/students`,
        queryParams:props
        // ...props
    })
}

// Enroll
export async function enroll(
    props: Student.EnrollAPIPayload,
  ): Promise<Student.EnrollResponse> {
    return service({
      method: "POST",
      url: `/user/assign`,
      body: props.data,
    });
  }

  