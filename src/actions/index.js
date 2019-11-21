import jsonPlaceholder from "../apis/jsonPlaceholder";

export const getPostList = async () => {
  try {
    const response = await jsonPlaceholder.get("/posts");
    return { type: "GET_POST_LIST", payload: response };
  } catch (error) {
    throw error;
  }
};
