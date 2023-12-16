const redux = require("redux");
const createStore = redux.createStore();
const bindActionCreator = redux.bindActionCreators;

//multiple reducers and combined reducers
const combineReducers = redux.combineReducers;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCK = "CAKE_RESTOCK";
const ICE_CREAM_ORDERED = "ICE_CREAM_ORDERED";
const ICE_CREAM_RESTOCKED = "ICE_CREAM_RESTOCKED";

//cakes
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

function restock(payload = 1) {
  return {
    type: CAKE_RESTOCK,
    payload: payload,
  };
}
//ice_creams
function orderIceCream(payload = 1) {
  return {
    type: ICE_CREAM_ORDERED,
    payload: payload,
  };
}

function restockIceCream(payload = 1) {
  return {
    type: ICE_CREAM_RESTOCKED,
    payload: payload,
  };
}

//reducer function

const initialState = {
  noOfCakes: 10,
  noOfIceCreams: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    case CAKE_RESTOCK:
      return {
        ...state,
        noOfCakes: state.noOfCakes + action.payload,
      };

    //ice_creams

    case ICE_CREAM_ORDERED:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams - 1,
      };
    case ICE_CREAM_RESTOCKED:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

//creating store
const store = createStore(reducer);

//getState()
console.log("initial state", store.getState());

//listners
const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

//dispatch()
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

//restocking cakes
store.dispatch(restock(20));
store.dispatch(restock(2));
//ice_creams
store.dispatch(orderIceCream(2));
store.dispatch(restockIceCream(30));

//action creator helper functions
//this below bindActionCreator does the same job like above store.dispatch()

const actions = bindActionCreator({ orderCake, restock }, store.dispatch);
actions.orderCake();
actions.restock();
//ice_creams
actions.orderIceCream();
actions.restockIceCream();

unsubscribe();

//multiple reducers

const initial_cakesState = {
  noOfCakes: 10,
};

const initial_IceCreamState = {
  noOfIceCreams: 20,
};

const iceCreamReducer = (state = initial_IceCreamState, action) => {
  switch (action.type) {
    //ice_creams

    case ICE_CREAM_ORDERED:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams - 1,
      };
    case ICE_CREAM_RESTOCKED:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

const cakeReducer = (state = initial_cakesState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    case CAKE_RESTOCK:
      return {
        ...state,
        noOfCakes: state.noOfCakes + action.payload,
      };
    default:
      return state;
  }
};

//multiple reducer and combined reducers
const rootreduceer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer,
});


const store123 = createStore(rootreduceer);
