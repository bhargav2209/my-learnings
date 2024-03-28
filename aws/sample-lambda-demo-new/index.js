exports.handler = async (event) => {
    console.log("Hello from the Lambda function!");
    return {
        statusCode: 200,
        body: JSON.stringify('Hello World from Lambda!'),
    };
};
