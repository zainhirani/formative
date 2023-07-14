export namespace Profile {
  export type Fields = {
    date_of_birth: string;
    experience: number;
    working_part_time: boolean;
    athlete: string;
    concept: string;
    hobbies: string;
    learning_sequence: string;
    math_skills: string;
    study_prefer: string;
    taken_biochemistry: boolean;
    volunteer: boolean;
    password?: string;
  };

  // Create
  export type CreateProps = {};
  export type CreateResponse = {
    token: string;
    data: Fields;
  };
  export type CreateMutationPayload = {
    date_of_birth: string;
    experience: number;
    working_part_time: boolean;
    athlete: string;
    concept: string;
    hobbies: string;
    learning_sequence: string;
    math_skills: string;
    study_prefer: string;
    taken_biochemistry: boolean;
    volunteer: boolean;
    password?: string;
  };
  export interface CreateAPIPayload extends CreateProps {
    data: CreateMutationPayload;
  }

  // Detail
  export type DetailProps = {};
  export type DetailResponse = Fields;
  export interface DetailAPIPayload extends DetailProps {}

  //Get User

  export type Userprops = {};
  export type UserResponse = {
    id: number;
    email: string;
    name: string;
    username: string;
    phone: number | string | null;
    type: "ADMIN" | "STUDENT";
    status: string;
    profilePictureId: string | null;
    first_name: string;
    last_name: string;
    program: string;
  };

  export interface UserAPIPayload extends Userprops {}
}
