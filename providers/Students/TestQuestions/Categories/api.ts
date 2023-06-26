import service from "services";
import { Category } from "./types";

//GET Listing

export async function listing(
  props?: Category.ListingAPIPayload,
): Promise<Category.ListingResponse> {
  return service({
    method: "GET",
    url: `/categories`,
    ...props,
  });
}
