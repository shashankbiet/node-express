const studentRouter = require("../app/student/student-router");
const mathRouter = require("../app/shared/math/math-router");

const routes = (app) => {
    app.use("/api/student", studentRouter);
    app.use("/api/math", mathRouter);
};

module.exports = routes;
