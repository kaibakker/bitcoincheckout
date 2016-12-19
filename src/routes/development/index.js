import CheckoutView from "./../checkout/components/checkout-view";

import DevelopmentPanel from "components/development/DevelopmentPanel";
import IdealPanel from "components/development/IdealPanel"
import CompletePanel from "components/development/CompletePanel"
import BitcoinProtocolHandlerPanel from "components/development/BitcoinProtocolHandlerPanel"

import SharePanel from "components/development/SharePanel"


// Sync route definition
export default {
    path: "development",
    component : CheckoutView,
    indexRoute: {
        component: DevelopmentPanel,
    },
    childRoutes: [{
        path: "ideal",
        component: IdealPanel
    }, {
        path: "complete",
        component: CompletePanel
    }, {
        path: "handler",
        component: BitcoinProtocolHandlerPanel
    }, {
        path: "share",
        component: SharePanel
    }],
};
