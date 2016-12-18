import CheckoutView from "./components/checkout-view";
import IndexView from "./components/index-view";

// Sync route definition
export default {
    path: "checkout",
    component : CheckoutView,
    indexRoute: {
        component: IndexView,
    },
    childRoutes: [],
};
