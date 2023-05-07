const studentService = require("../app/student/student-service");
const mongoose = require("mongoose");
const db = require("../config/mongodb");
const Student = require("../app/student/student-model");

let stringify = (obj) => JSON.stringify(obj);

describe("CRUD Operations", () => {
    beforeAll(async () => {
        await db();
    });

    beforeEach(async () => {
        await Student.deleteMany();
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    test("should create and fetch student", async () => {
        let mockStudent1 = {
            _id: mongoose.Types.ObjectId(),
            name: "John",
            gender: "Male",
            email: "JohnTest@gmail.com",
            mobileNo: 1234567890,
        };
        await studentService.create(mockStudent1);
        let createdStudent = await studentService.get(mockStudent1["_id"]);
        await studentService.delete(mockStudent1["_id"]);
        expect(stringify(createdStudent)).toEqual(stringify(mockStudent1));
    }, 10000);

    test("should update name of the student", async () => {
        let mockStudent2 = {
            _id: mongoose.Types.ObjectId(),
            name: "Emma",
            gender: "Female",
            email: "EmmaTest@gmail.com",
            mobileNo: 1987456320,
        };
        await studentService.create(mockStudent2);

        let newName = "Harry";
        mockStudent2["name"] = newName;
        await studentService.update(mockStudent2["_id"], mockStudent2);
        let updatedStudent = await studentService.get(mockStudent2["_id"]);
        await studentService.delete(mockStudent2["_id"]);
        expect(updatedStudent["name"]).toBe(newName);
    }, 10000);

    test("should create and delete the student", async () => {
        let mockStudent3 = {
            _id: mongoose.Types.ObjectId(),
            name: "Jim",
            gender: "Male",
            email: "JimTest@gmail.com",
            mobileNo: 2387456320,
        };
        await studentService.create(mockStudent3);
        await studentService.delete(mockStudent3["_id"]);

        let deletedStudent = await studentService.get(mockStudent3["_id"]);
        expect(deletedStudent).toBeNull();
    }, 10000);
});
