import service from "services";
import { TestQuestion } from "./types";

// Test
export async function test(
  props: TestQuestion.TestAPIPayload,
): Promise<TestQuestion.TestResponse> {
  return service({
    method: "POST",
    url: `/question-attempt/test`,
    body: props.data,
  });
}
