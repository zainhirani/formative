import service from "./index";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return service({
    body: {
      email,
      password,
    },
    noAuth: true,
    method: "POST",
    url: "/auth/local",
  });
}

export async function getUser(token: string) {
  return service({
    method: "GET",
    url: "/auth/profile",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
