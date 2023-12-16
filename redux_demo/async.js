const initialState = {
  loading: true,
  data: [],
  error: "",
};

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILED = "FETCH_USER_FAILED";

const fetchrequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchsuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

const fetchfail = (error) => {
  return {
    type: FETCH_USER_FAILED,
    error: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_USER_FAILED:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
  }
};
