import { ApiContext } from "@/types/data";
import { fetcher } from "@/utils/index";

export type GetUserParams = {
  id: number;
};

const getUser = async (context: ApiContext, { id }: GetUserParams) =>
  await fetcher(`${context.apiRootUrl.replace(/\/$/g, "")}/users/`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

export default getUser;
