import { gql } from "@apollo/client";

// Mutación para login (actualizada según tu backend)
export const LOGIN_MUTATION = gql`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      accessToken
      user {
        id
        email
        name
        roles
        isActive
        createdAt
        updatedAt
      }
    }
  }
`;

// Mutación para registro
export const REGISTER_MUTATION = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      accessToken
      user {
        id
        email
        name
        roles
        isActive
        createdAt
        updatedAt
      }
    }
  }
`;

// Mutación para logout
export const LOGOUT_MUTATION = gql`
  mutation Logout {
    logout {
      success
      message
    }
  }
`;

// Query para verificar el estado de autenticación
export const CHECK_AUTH_STATUS = gql`
  query CheckAuthStatus {
    checkAuthStatus {
      ...AuthUserInfo
    }
  }
`;

// Mutación para refresh token
export const REFRESH_TOKEN_MUTATION = gql`
  mutation RefreshToken {
    refreshToken {
      ...AuthUserInfo
    }
  }
`;
