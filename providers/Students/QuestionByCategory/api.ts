import service from "services";
import { Question } from "./types";

//GET Listing

export async function listing(
  props: Question.ListingAPIPayload,
): Promise<Question.ListingResponse> {
  return service({
    method: "GET",
    url: `/questions/category/${props.id}`,
    queryParams: props,
  });
}
