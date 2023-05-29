import service from "services";
import { Profile } from "./types";

//Profile API Integration

// profile Create/update
export async function createProfile(
    props: Profile.CreateAPIPayload,
  ): Promise<Profile.CreateResponse> {
    return service({
      method: "POST",
      url: `/user/profile`,
      body: props.data,
    });
  }

  // profile Detail
  export async function detailProfile(
    props?: Profile.DetailAPIPayload,
  ): Promise<Profile.DetailResponse> {
    return service({
      method: "GET",
      url: `/user/profile`,
    });
  }
