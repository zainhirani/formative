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
    year_of_graduation: number;
    program: string;
    birth_place: string;
    name?: string;
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
    year_of_graduation: number;
    program: string;
    birth_place: string;
  };
  export interface CreateAPIPayload extends CreateProps {
    data: CreateMutationPayload;
  }

  // Detail
  export type DetailProps = {};
  export type DetailResponse = Fields;
  export interface DetailAPIPayload extends DetailProps {}
}
