import { User, ApiContext } from "@/types/data";
import { fetcher } from "@/utils/index";

export type SigninParmas = {
  username: string;
  password: string;
};

const signin = async (
  context: ApiContext,
  params: SigninParmas
): Promise<User> =>
  await fetcher(`${context.apiRootUrl.replace(/\/$/g, "")}/auth/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

export default signin;
