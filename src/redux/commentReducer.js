import { COMMENT_CREATE, COMMENT_LOAD, COMMNET_DELETE, COMMNET_UPDATE } from "./types";

const initialState = {
  comments: [],
};

export const commentReducer = (state = initialState, action) => {
  console.log("comments Reducer >>>", action);
  switch (action.type) {
    case COMMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, action.data],
      };

    case COMMENT_LOAD:
      const commentsNew = action.data.map(res => {
        return {
          text: res.name,
          id: res.id
        }
      })
      return {
        ...state,
        comments: commentsNew,
      };

    case COMMNET_UPDATE:
      const { data } = action;
      const { comments } = state;
      const itemIndex = comments.findIndex((res) => res.id === data.id);
      const nextComments = [
        ...comments.slice(0, itemIndex),
        data,
        ...comments.slice(itemIndex + 1),
      ];
      return {
        ...state,
        comments: nextComments,
      };

    case COMMNET_DELETE:
      return (() => {
        const { id } = action;
        const { comments } = state;
        const itemIndex = comments.findIndex((res) => res.id === id);

        const nextComments = [
          ...comments.slice(0, itemIndex),
          ...comments.slice(itemIndex + 1),
        ];

        return {
          ...state,
          comments: nextComments,
        };
      })();

    default:
      return state;
  }
};
