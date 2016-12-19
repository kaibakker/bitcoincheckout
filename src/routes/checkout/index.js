import CheckoutView from "./components/checkout-view";

import IndexPanel from "components/checkout/IndexPanel";
import BitcoinPanel from "components/checkout/BitcoinPanel"
import ShapeShiftPanel from "components/checkout/ShapeShiftPanel"
import CoinbasePanel from "components/checkout/CoinbasePanel"


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
