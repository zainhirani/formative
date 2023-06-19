import service from "services";

// Login
export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return service({
    method: "POST",
    noAuth: true,
    url: `/auth/login`,
    body: {
      email,
      password,
    },
  });
}

export async function getUser(token: string) {
  return service({
    method: "GET",
    url: "/user",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
