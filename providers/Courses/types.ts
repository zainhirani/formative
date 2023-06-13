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
    course?: string | null;
  };

  //Listing
  export type ListingProps = {};
  export type ListingResponse = [Item]
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
  }
  export type CreateMutationPayload = {
    course_name:string
  }
  export interface CreateAPIPayload extends CreateProps {
    data: CreateMutationPayload
  }

  // Detail
  export type DetailProps = {
    id:number
  }
  export type DetailResponse = {
    id: number;
    course_name: string;
    active: boolean;
    userId: number;
    createdAt: string | Date;
    updatedAt: string | Date;
    deletedAt?: string | Date | null;
    course?: string | null;
  }
  export interface DetailAPIPayload extends DetailProps {}


  //Update
  export type UpdateProps = {
    id:number,
  }
  export type UpdateResponse = {
    data:boolean
  }
  export type UpdateMutationPayload = {
    course_name:string
  }
  export interface UpdateAPIPayload extends UpdateProps {
    data:UpdateMutationPayload
  }

  //Remove

  export type RemoveProps = {}
  export type RemoveResponse = {
    data:boolean
  }
  export type RemoveMutationPayload = {
    id:number
  }
  export interface RemoveAPIPayload extends RemoveMutationPayload{}

}
