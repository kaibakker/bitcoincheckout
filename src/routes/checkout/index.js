import CheckoutView from "./components/checkout-view";

import IndexPanel from "components/checkout/IndexPanel";
import BitcoinPanel from "components/checkout/BitcoinPanel"
import ShapeShiftPanel from "components/checkout/ShapeShiftPanel"
import CoinbasePanel from "components/checkout/CoinbasePanel"

import makeRequestFromProtocolURI from "utils/get-request-object";

function requireRequest(nextState, replace) {
    console.log(makeRequestFromProtocolURI().amount == undefined)
    if (makeRequestFromProtocolURI().amount == undefined) {
        replace({
            pathname: '/create',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}
// Sync route definition
export default {
    path: "checkout",
    component: CheckoutView,
    onEnter: requireRequest,
    indexRoute: {
        component: IndexPanel,
    },
    childRoutes: [{
        path: "bitcoin_address",
        component: BitcoinPanel,
        onEnter: requireRequest,
    }, {
        path: "shapeshift",
        component: ShapeShiftPanel,
        onEnter: requireRequest,
    }, {
        path: "coinbase",
        component: CoinbasePanel,
        onEnter: requireRequest,
    }],
};
