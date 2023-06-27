import service from "services";
import { Question } from "./types";

//GET Listing

export async function listing(
  props: Question.ListingAPIPayload,
): Promise<Question.ListingResponse> {
  return service({
    method: "GET",
    url: `/questions/category/${props.id}`,
    ...props,
  });
}

//Detail
export async function detail(
  props: Question.DetailAPIPayload,
): Promise<Question.DetailResponse> {
  return service({
    method: "GET",
    url: `/questions/${props.id}`,
  });
}
