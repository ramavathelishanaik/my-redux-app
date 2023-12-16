const store = require("../rtk_demo/app/store");
const cakeActions = require("../rtk_demo/features/cake/cakeSlice").cakeActions;
const icecreamActions =
  require("../rtk_demo/features/icecream/icecreamSlice").icecreamActions;

const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log("initial store", store.getState());

const unsubscribe = store.subscribe(() => {
  // console.log("updated state", store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());

// store.dispatch(cakeActions.restocked(20));

// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());

// store.dispatch(icecreamActions.restocked(100));

// unsubscribe();
