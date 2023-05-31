//Register API Integration

import service from "services";
import { Register } from "./types";

// signup Create
export async function create(
  props: Register.CreateAPIPayload,
): Promise<Register.CreateResponse> {
  return service({
    method: "POST",
    url: `/auth/signup`,
    body: props.data,
  });
}

// user Detail
export async function detail(
  props?: Register.DetailAPIPayload,
): Promise<Register.DetailResponse> {
  return service({
    method: "GET",
    url: `/user`,
  });
}

// User Update
export async function registerUpdate(
  props: Register.CreateAPIPayload,
): Promise<Register.CreateResponse> {
  return service({
    method: "POST",
    url: `/user`,
    body: props.data,
  });
}
