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

// // Registration
// export async function register({
//   email,
//   password,
//   username,
//   first_name,
//   last_name,
//   nick_name,
//   gender,
//   rfu_id,
//   year_of_graduation,
//   program,
//   birth_place,
// }: {
//   email: string;
//   password: string;
//   username: string;
//   first_name: string;
//   last_name: string;
//   nick_name: string;
//   gender: string;
//   rfu_id: number | string;
//   year_of_graduation: number | string;
//   program: string;
//   birth_place: string;
// }) {
//   console.log("inside register");
//   return service({
//     method: "POST",
//     noAuth: true,
//     url: `/auth/signup`,
//     body: {
//       email,
//       password,
//       username,
//       first_name,
//       last_name,
//       nick_name,
//       gender,
//       rfu_id,
//       year_of_graduation,
//       program,
//       birth_place,
//     },
//   });
// }

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
