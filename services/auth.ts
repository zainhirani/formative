import service from "services";

// Login
export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  console.log("inside loginc");
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

// Registration
export async function register({
  name,
  email,
  number,
  password,
  password_repeat,
}: {
  name: string;
  email: string;
  number: number;
  password: string;
  password_repeat: string;
}) {
  console.log("inside register");
  return service({
    method: "POST",
    noAuth: true,
    url: `/auth/register`,
    body: {
      name,
      email,
      number,
      password,
      password_repeat,
    },
  });
}

// Rfresh Token
export async function refreshToken({
  refresh_token,
}: {
  refresh_token: string | any;
}) {
  console.log("inside refresh token");
  return service({
    method: "POST",
    noAuth: true,
    url: `/auth/refresh`,
    body: {
      refresh_token,
    },
  });
}
