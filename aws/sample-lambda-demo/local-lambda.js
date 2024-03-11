const handler = require('./index.cjs').handler;

const localRun = async () => {
    const loginSuccessResponse = await handler({userName: 'admin', password: 'admin'});
    const loginFailResponse = await handler({userName: 'admin', password: '11'});
    console.log(loginSuccessResponse)
    console.log(loginFailResponse)
}

localRun();
