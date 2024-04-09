const handler = async (event) => {
    const input = event.input1;
    const result = input * 2;
    return { result };
};

exports.handler = handler
