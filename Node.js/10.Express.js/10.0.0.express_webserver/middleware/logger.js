module.exports = {
    log: (req, res, next) => {
        console.log('Logging...');
        
        // Passing to next function in middleware pipeline.
        // If we dont do this request will hang.
        next();
    },
    auth: (req, res, next) => {
        console.log('Authenticating...');
        // Passing to next function in middleware pipeline.
        // If we dont do this request will hang.
        next();
    }
};
