import CheckoutView from "./components/checkout-view";

import IndexView from "./components/index-view"
// Sync route definition
export default {
    path: "/checkout",
    component : CheckoutView,
    indexRoute: IndexView,
    childRoutes: [
        {
            path: "/index",
            component: IndexView
        }
    ]
};
