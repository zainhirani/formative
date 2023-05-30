//Register API Integration

import service from "services";
import { Register, Profile } from "./types";

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

// Detail
export async function detail(
  props: Register.DetailAPIPayload,
): Promise<Register.DetailResponse> {
  return service({
    method: "GET",
    url: `/user`,
  });
}

//Profile API Integration

// Create
export async function createProfile(
  props: Profile.CreateAPIPayload,
): Promise<Profile.CreateResponse> {
  return service({
    method: "POST",
    url: `/user/profile`,
    body: props.data,
  });
}

// Detail
export async function detailProfile(
  props: Profile.DetailAPIPayload,
): Promise<Profile.DetailResponse> {
  return service({
    method: "GET",
    url: `/user/profile`,
  });
}
