import service from "services";
import { Register } from "./types";

// Create
export async function create(
  props: Register.CreateAPIPayload,
): Promise<Register.CreateResponse> {
  return service({
    method: "POST",
    url: `/auth/signup`,
    body: props.data,
  });
}
