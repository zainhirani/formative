import { type } from "os";

export namespace Student {
  export type Item = {
    id: number;
    last_name:string;
    first_name:string
    username:string;
    year_of_graduation:Date | null;
    program:string;
    email: string;
    createdAt: string | Date;
    updatedAt: string | Date;
  };

  //Listing
  export type ListingProps = {
    yop?:number,
    program?:string,
    SearchBy?:string,
    Limit?:number,
    Page?:number
  };
  export type ListingResponse = {data:Item[],count:number}
  export interface ListingAPIPayload extends ListingProps {}


  ///enroll student
  export type EnrollProps = {};
  export type EnrollResponse = {
   data:boolean
  }
  export type EnrollMutationPayload = {
    courseName:string
    userIds:string[]
  }
  export interface EnrollAPIPayload extends EnrollProps {
    data: EnrollMutationPayload
  }

}
