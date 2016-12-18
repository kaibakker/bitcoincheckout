

module.exports = {
    bitcoinURI: function(request) {
        return "bitcoin:" + request.address + "?amount=" + request.amount + "&label=" + request.label;
    }
}
