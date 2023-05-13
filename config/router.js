const studentRouter = require("../app/student/student-router");
const mathRouter = require("../app/shared/math/math-router");

const router = (app) => {
    app.use("/api/student", studentRouter);
    app.use("/api/math", mathRouter);
};

module.exports = router;
