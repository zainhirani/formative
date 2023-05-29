//Register API Integration

export namespace Register {
  export type Fields = {
    email: string;
    password: string;
    username: string;
    first_name: string;
    last_name: string;
    nick_name: string;
    gender: string;
    rfu_id: number | string;
    year_of_graduation: number | string;
    program: string;
    birth_place: string;
  };

  // Create
  export type CreateProps = {};
  export type CreateResponse = {
    token: string;
    data: Fields;
  };
  export type CreateMutationPayload = {
    email: string;
    password: string;
    username: string;
    first_name: string;
    last_name: string;
    nick_name: string;
    gender: string;
    rfu_id: number | string;
    year_of_graduation: number | string;
    program: string;
    birth_place: string;
  };
  export interface CreateAPIPayload extends CreateProps {
    data: CreateMutationPayload;
  }

  // Detail
  export type DetailProps = {};
  export type DetailResponse = {
    data: Fields;
  };
  export interface DetailAPIPayload extends DetailProps {}
}

//Profile API Integration

export namespace Profile {
  export type Fields = {
    date_of_birth: string;
    experience: number | string;
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
    experience: number | string;
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
  export type DetailResponse = {
    data: Fields;
  };
  export interface DetailAPIPayload extends DetailProps {}
}
