import service from "services";
import { TargetCourse } from "./types";

// Target A Course
export async function target(
  props: TargetCourse.CreateAPIPayload,
): Promise<TargetCourse.CreateResponse> {
  return service({
    method: "POST",
    url: `/courses/target`,
    body: props.data,
  });
}
