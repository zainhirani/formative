import { type } from "os";

export namespace Course {
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
      clas: string | undefined;
    };
  };

  //Listing
  export type ListingProps = {
    SearchBy: string | null;
    Limit: number | null;
  };
  export type ListingResponse = [Item];
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
    course_name: string;
  };
  export interface CreateAPIPayload extends CreateProps {
    data: CreateMutationPayload;
  }

  // Detail
  export type DetailProps = {
    id: number;
  };
  export type DetailResponse = {
    id: number;
    course_name: string;
    active: boolean;
    userId: number;
    createdAt: string | Date;
    updatedAt: string | Date;
    deletedAt?: string | Date | null;
    course?: {
      courseId: number | null;
      programs: string | null;
      clas: string | undefined;
    };
  };
  export interface DetailAPIPayload extends DetailProps {}

  //Update
  export type UpdateProps = {
    id: number;
  };
  export type UpdateResponse = {
    data: boolean;
  };
  export type UpdateMutationPayload = {
    course_name: string;
  };
  export interface UpdateAPIPayload extends UpdateProps {
    data: UpdateMutationPayload;
  }

  //Remove

  export type RemoveProps = {};
  export type RemoveResponse = {
    data: boolean;
  };
  export type RemoveMutationPayload = {
    id: number;
  };
  export interface RemoveAPIPayload extends RemoveMutationPayload {}

  //Duplicate
  export type DuplicateProps = {};
  export type DuplicateResponse = {
    data: boolean;
  };
  export type DuplicateMutationPayload = {
    id: number;
  };
  export interface DuplicateAPIPayload extends DuplicateMutationPayload {}
}
