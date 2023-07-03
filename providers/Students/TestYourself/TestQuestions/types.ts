export namespace TestQuestion {
  export type Item = {
    option_selected: string | null;
    questionId: number;
    start_time: number;
    end_time: number;
  };

  //Test Question

  export type TestProps = {};
  export type TestResponse = {
    option_selected: string | null;
    questionId: number;
    start_time: number;
    end_time: number;
    data?: boolean;
  };
  export type TestMutationPayload = {
    option_selected: string | null;
    questionId: number;
    start_time: number;
    end_time: number;
  };
  export interface TestAPIPayload extends TestProps {
    data: TestMutationPayload;
  }
}
