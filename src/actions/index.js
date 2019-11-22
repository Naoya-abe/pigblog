import jsonPlaceholder from "../apis/jsonPlaceholder";

// リファクタリング
export const getPostList = () => async dispatch => {
  try {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({ type: "GET_POST_LIST", payload: response.data });
  } catch (error) {
    throw error;
  }
};

// オリジナル
// export const getPostList = () => {
//   return async function(dispatch) {
//     const response = await jsonPlaceholder.get("/posts");
//     dispatch({ type: "GET_POST_LIST", payload: response });
//   };
// };
