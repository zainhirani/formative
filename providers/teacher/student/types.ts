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
  export type ListingProps = {};
  export type ListingResponse = [Item]
  export interface ListingAPIPayload extends ListingProps {}

}
