const performLogin = (userName, password) => {
    if (isValidUser(userName, password)) {
        return 'login success';
    } else {
        return 'log in fail';
    }
};

const login = (req, res) => {
    console.log("req body send ==>", req.body);
    const {userName, password} = req.body;
    const result = performLogin(userName, password);
    res.send(result);
};

function isValidUser(userName, password) {
    if (userName === "admin" && password === "admin") {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    login,
    performLogin
}




