import { type } from "os";

export namespace TargetCourse {
  export type Item = {
    id: number;
    courseId: number;
    programs: string | null;
    clas: string | null;
    userId: number;
    createdAt: string | Date;
    updatedAt: string | Date;
    deletedAt?: string | Date | null;
  };

  //Listing
  export type ListingProps = {};
  export type ListingResponse = [Item];
  export interface ListingAPIPayload extends ListingProps {}

  //Create
  export type CreateProps = {};
  export type CreateResponse = {
    id: number;
    courseId: number;
    programs: string | null;
    clas: string | null;
    userId: number;
    createdAt: string | Date;
    updatedAt: string | Date;
    deletedAt?: string | Date | null;
  };
  export type CreateMutationPayload = {
    courseId: number;
    programs: string;
    clas: number;
  };
  export interface CreateAPIPayload extends CreateProps {
    data: CreateMutationPayload;
  }
}
