import service from "services";
import { RestoreCourse } from "./types";

//GET Restore Course Listing

export async function listing(
  props?: RestoreCourse.ListingAPIPayload,
): Promise<RestoreCourse.ListingResponse> {
  return service({
    method: "GET",
    url: `/courses/deleted/record`,
  });
}

// Restore
export async function restore(
  props: RestoreCourse.CreateAPIPayload,
): Promise<RestoreCourse.CreateResponse> {
  return service({
    method: "POST",
    url: `/courses/restore`,
    body: props.data,
  });
}
