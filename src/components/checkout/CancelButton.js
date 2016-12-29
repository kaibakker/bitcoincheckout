var React = require("react");


import makeRequestFromProtocolURI from "utils/get-request-object";

export default function CancelButton(props) {
    var request = makeRequestFromProtocolURI()
    console.log(request)
    if(request.cancel_url) {
        return <a className="btn btn-info" href={makeRequestFromProtocolURI().cancel_url}>cancel</a>;
    } else {
        return null
    }
}
