const studentRouter = require('../app/student/student.route');
const mathRouter = require('../app/shared/math/math.route');

const routes = (app) => {
    app.use('/api/student', studentRouter);
    app.use('/api/math', mathRouter);
}

module.exports = routes;