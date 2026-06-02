const getExpiryDate = (days = 30) => {

    const expiryDate = new Date();

    expiryDate.setDate(
        expiryDate.getDate() + days
    );

    return expiryDate;

};

const isSubscriptionActive = (expiryDate) => {

    if (!expiryDate) {
        return false;
    }

    return new Date(expiryDate) > new Date();

};

module.exports = {
    getExpiryDate,
    isSubscriptionActive
};