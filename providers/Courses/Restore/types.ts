import { type } from "os";

export namespace RestoreCourse {
  export type Item = {
    id: number;
    course_name: string;
    active: boolean;
    userId: number;
    createdAt: string | Date;
    updatedAt: string | Date;
    deletedAt?: string | Date | null;
    courseTarget?: {
      courseId: number | null;
      programs: string | null;
    };
  };

  //Listing
  export type ListingProps = {
    SearchBy: string | null;
    Limit: number | null;
    Page?: number;
  };
  export type ListingResponse = { data: Item[] };
  export interface ListingAPIPayload extends ListingProps {}

  //Create
  export type CreateProps = {};
  export type CreateResponse = {
    id: number;
    course_name: string;
    active: boolean;
    userId: number;
    createdAt: string | Date;
    updatedAt: string | Date;
    deletedAt?: string | Date | null;
  };
  export type CreateMutationPayload = {
    ids: number[];
  };
  export interface CreateAPIPayload extends CreateProps {
    data: CreateMutationPayload;
  }
}
