import CheckoutView from "./../checkout/components/checkout-view";

import DevelopmentPanel from "components/Panels/DevelopmentPanel";
import IdealPanel from "components/Panels/IdealPanel"
import CompletePanel from "components/Panels/CompletePanel"
import BitcoinProtocolHandlerPanel from "components/Panels/BitcoinProtocolHandlerPanel"

import SharePanel from "components/Panels/SharePanel"


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
