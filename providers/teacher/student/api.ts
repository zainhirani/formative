import service from "services";
import { Student } from "./types";

//GET Profile

export async function listing(props?:Student.ListingAPIPayload):Promise<Student.ListingResponse> {
    return service ({
        method:'GET',
        url:`/user/students`,
        ...props
    })
}

  