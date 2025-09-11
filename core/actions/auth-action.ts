import apolloClient from "../../apolloClient";
import { LOGIN_MUTATION } from "../../graphql/mutations/auth";
import { User } from "../auth/interface/user.interface";

export interface AuthResponse {
  id: string;
  email: string;
  name: string;
  isActive: boolean;
  roles: string[];
  token: string;
}

const returnUserToken = (data: AuthResponse): { user: User; token: string } => {
  const { token, ...user } = data;

  return {
    user: user as User,
    token,
  };
};

export const authLogin = async (email: string, password: string) => {
  email = email.toLowerCase();

  try {
    const { data } = await apolloClient.mutate({
      mutation: LOGIN_MUTATION,
      variables: {
        loginInput: {
          email,
          password,
        },
      },
    });
    console.log(data);

    // if (data?.login) {
    //   return {
    //     user: data.login.user,
    //     token: data.login.accessToken,
    //   };
    // }

    return null;
  } catch (error) {
    console.log("Login error:", error);
    return null;
  }
};

// export const authCheckStatus = async () => {
//   try {
//     const { data } = await apolloClient.query({
//       query: CHECK_AUTH_STATUS,
//       fetchPolicy: "network-only", // Siempre verificar con el servidor
//     });

//     if (data?.checkAuthStatus) {
//       return {
//         user: data.checkAuthStatus.user,
//         token: data.checkAuthStatus.token,
//       };
//     }

//     return null;
//   } catch (error) {
//     console.log("Check auth status error:", error);
//     return null;
//   }
// };
