const studentRouter = require('./student.route');
const mathRouter = require('./math.route');

const routes = (app) => {
    app.use('/api/student', studentRouter);
    app.use('/api/math', mathRouter);
}

module.exports = routes;