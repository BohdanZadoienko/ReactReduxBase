import {
  INCREMENT_LIKES,
  INCREMENT_DISLIKES,
  INPUT_TEXT,
  COMMENT_CREATE,
  COMMNET_UPDATE,
  COMMNET_DELETE,
  COMMENT_LOAD,
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  ERROR_DISPLAY_ON,
  ERROR_DISPLAY_OFF,
} from "./types";

export function incrementLikes() {
  return {
    type: INCREMENT_LIKES,
  };
}

export function incrementDislikes() {
  return {
    type: INCREMENT_DISLIKES,
  };
}

export function inputText(text) {
  return {
    type: INPUT_TEXT,
    text,
  };
}

export function commentCreate(text, id) {
  return {
    type: COMMENT_CREATE,
    data: { text, id },
  };
}

export function commentUpdate(text, id) {
  return {
    type: COMMNET_UPDATE,
    data: { text, id },
  };
}

export function commentDelete(id) {
  return {
    type: COMMNET_DELETE,
    id,
  };
}

export function loaderOn() {
  return {
    type: LOADER_DISPLAY_ON,
  };
}

export function loaderOff() {
  return {
    type: LOADER_DISPLAY_OFF,
  };
}

export function commenstLoad() {
  return async (dispath) => {
    try {
      dispath(loaderOn());
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments?_limit=10"
      );
      const jsonData = await response.json();

      setTimeout(() => {
        dispath({
          type: COMMENT_LOAD,
          data: jsonData,
        });
        dispath(loaderOff());
      }, 1000);
    } catch (err) {
      dispath(errorOn("ERROR: Try later"));
      dispath(loaderOff());
    }
  };
}

export function errorOn(text) {
  return (dispath) => {
    dispath({
      type: ERROR_DISPLAY_ON,
      text,
    });

    setTimeout(()=>{
      dispath(errorOff())
    }, 2000)

  };
}
export function errorOff() {
  return {
    type: ERROR_DISPLAY_OFF,
  };
}
