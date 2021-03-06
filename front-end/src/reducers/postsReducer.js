import {
  GET_POSTS,
  SEARCH,
  COMPANY_OFFERS,
  COMPANY_INFO
} from "../actions/types";

const initialState = {
  posts: [],
  companyPosts: [],
  companyInfo: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: [action.payload]
      };
    case SEARCH:
      return {
        ...state,
        posts: [action.payload]
      };
    case COMPANY_OFFERS:
      return {
        ...state,
        companyPosts: [action.payload]
      };
    case COMPANY_INFO:
      return {
        ...state,
        companyInfo: [action.payload]
      };

    default:
      return state;
  }
};
