import { UserType } from 'core/userManagement';

type TokenPayload = {
  // eslint-disable-next-line camelcase
  token_type: 'access' | 'refresh';
  exp: number;
  jti: string;
  // eslint-disable-next-line camelcase
  user_id: number;
  // eslint-disable-next-line camelcase
  user_type: UserType;
};

const parseJwt = (token: string): TokenPayload => {
  // Copied from https://stackoverflow.com/a/38552302
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join('')
  );

  return JSON.parse(jsonPayload);
};

const getUserIdAndTypeFromToken = (
  accessToken: string
): { id: number; userType: UserType } => {
  const tokenPayload = parseJwt(accessToken);
  return {
    id: tokenPayload.user_id,
    userType: tokenPayload.user_type,
  };
};

export default getUserIdAndTypeFromToken;
