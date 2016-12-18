let requestObject = null;

function createRequestObject() {
    var request = null;
    
    try {
        var uri = decodeURIComponent(window.location.search.replace("?u=", ""));

        if(uri != "") {
            var [network_address, pairs] = uri.split("?");
            var [network, address] = network_address.split(":");
            request.network = network;
            request.address = address;

            pairs.split("&").forEach(function(part) {
                var item = part.split("=");
                request[item[0]] =  item[1];
            });
        }
    } catch(err) {
        console.error("Something went wrong while parsing the url parameters", err);
    }

    requestObject = request;
    return request;
}

export default function() {
    if (requestObject) {
        return requestObject;
    } else {
        return createRequestObject();
    }
}