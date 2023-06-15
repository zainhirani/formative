import service from "services";
import { Course } from "./types";

//GET Listing

export async function listing(
  props?: Course.ListingAPIPayload,
): Promise<Course.ListingResponse> {
  return service({
    method: "GET",
    url: `/courses`,
  });
}

// Create
export async function create(
  props: Course.CreateAPIPayload,
): Promise<Course.CreateResponse> {
  return service({
    method: "POST",
    url: `/courses`,
    body: props.data,
  });
}

//Detail
export async function detail(
  props: Course.DetailAPIPayload,
): Promise<Course.DetailResponse> {
  return service({
    method: "GET",
    url: `/courses/${props.id}`,
  });
}

// Update
export async function update(
  props: Course.UpdateAPIPayload,
): Promise<Course.UpdateResponse> {
  return service({
    method: "PATCH",
    url: `/courses/${props.id}`,
    body: props.data,
  });
}

// Remove
export async function remove(
  props: Course.RemoveAPIPayload,
): Promise<Course.RemoveResponse> {
  return service({
    method: "DELETE",
    url: `/courses/${props.id}`,
  });
}
