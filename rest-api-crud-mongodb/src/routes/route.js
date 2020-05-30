const studentRouter = require('./student.route');

const routes = (app) => {
    app.use('/api/student', studentRouter);
}

module.exports = routes;