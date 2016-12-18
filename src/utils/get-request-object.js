let requestObject = null;

function createRequestObject() {
    
}

export default function() {
    if (requestObject) {
        return requestObject;
    } else {
        return createRequestObject();
    }
}