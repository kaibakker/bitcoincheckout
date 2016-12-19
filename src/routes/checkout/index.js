import CheckoutView from "./components/checkout-view";

import IndexPanel from "components/IndexPanel";
import BitcoinPanel from "components/Panels/BitcoinPanel"
import ShapeShiftPanel from "components/Panels/ShapeShiftPanel"
import CoinbasePanel from "components/Panels/CoinbasePanel"


// Sync route definition
export default {
    path: "checkout",
    component : CheckoutView,
    indexRoute: {
        component: IndexPanel,
    },
    childRoutes: [{
        path: "bitcoin_address",
        component: BitcoinPanel
    }, {
        path: "shapeshift",
        component: ShapeShiftPanel
    }, {
        path: "coinbase",
        component: CoinbasePanel
    }],
};
