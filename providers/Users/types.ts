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
  };
  export interface CreateAPIPayload extends CreateProps {
    data: CreateMutationPayload;
  }

  // Detail
  export type DetailProps = {};
  export type DetailResponse = Fields;
  export interface DetailAPIPayload extends DetailProps {}
}
