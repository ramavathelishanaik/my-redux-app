const initialState = {
  name: "ramavath elisha naiik",
  address: {
    street: "atchammakunta",
    mandal: "macherla",
    district: "Guntur",
  },
};

const STREET_UPDATED = "STREET_UPDATED";

const streetupdate = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //ice_creams

    case STREET_UPDATED:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };

      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });

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
store.dispatch(streetupdate("atchammakunta tanda"));
