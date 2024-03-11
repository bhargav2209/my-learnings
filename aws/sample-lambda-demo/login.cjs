module.exports = function performLogin(userName, password) {
    if (isValidUser(userName, password)) {
        return 'login success';
    } else {
        return 'log in fail';
    }
}

function isValidUser(userName, password) {
    if (userName === "admin" && password === "admin") {
        return true;
    } else {
        return false;
    }
}




