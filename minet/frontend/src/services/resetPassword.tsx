
import Api from "../utils/Api";

export const resetPassword = async (email: string, password: string) => {
  const response = await Api.patch(`/users/reset-password?email=${email}`, {FormData:password});
  return response.data;
};

