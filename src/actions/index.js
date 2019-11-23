import jsonPlaceholder from "../apis/jsonPlaceholder";

// badアプローチ
// export const getPostList = async () => {
//   try {
//     const response = await jsonPlaceholder.get("/posts");
//     return { type: "GET_POST_LIST", payload: response };
//   } catch (error) {
//     throw error;
//   }
// };

//badアプローチ２
//promiseオブジェクトが返ってくるだけ
export const getPostList = () => {
  try {
    const response = jsonPlaceholder.get("/posts");
    return { type: "GET_POST_LIST", payload: response };
  } catch (error) {
    throw error;
  }
};
