const studentService = require('./student.service');
const mongoose = require('mongoose');
const db = require('../../config/mongodb');

let stringify = (obj) => JSON.stringify(obj);

describe('CRUD Operations', () => {
    beforeAll(async () => {
        await db();
    });

    afterAll(async () => {
    });

    test('should insert and fetch student', async () => {
        let mockStudent1 = {
            '_id': mongoose.Types.ObjectId(),
            'id': 101,
            'name': 'John',
            'gender': 'Male',
            'email': 'JohnTest@gmail.com',
            'mobileNo': 1234567890
        };
        await studentService.createStudent(mockStudent1);
        let insertedStudent = await studentService.getStudent(mockStudent1['_id']);
        await studentService.deleteStudent(mockStudent1['_id']);
        expect(stringify(insertedStudent)).toEqual(stringify(mockStudent1));
    }, 10000);

    test('should edit name of the student', async () => {
        let mockStudent2 = {
            '_id': mongoose.Types.ObjectId(),
            'id': 102,
            'name': 'Emma',
            'gender': 'Female',
            'email': 'EmmaTest@gmail.com',
            'mobileNo': 1987456320
        };
        await studentService.createStudent(mockStudent2);

        let newName = 'Harry';
        mockStudent2['name'] = newName;
        await studentService.editStudent(mockStudent2['_id'], mockStudent2);
        let editedStudent = await studentService.getStudent(mockStudent2['_id']);
        await studentService.deleteStudent(mockStudent2['_id']);
        expect(editedStudent['name']).toBe(newName);
    }, 10000);

    test('should create and delete the student', async () => {
        let mockStudent3 = {
            '_id': mongoose.Types.ObjectId(),
            'id': 103,
            'name': 'Jim',
            'gender': 'Male',
            'email': 'JimTest@gmail.com',
            'mobileNo': 2387456320
        };
        await studentService.createStudent(mockStudent3);
        await studentService.deleteStudent(mockStudent3['_id']);

        let editedStudent = await studentService.getStudent(mockStudent3['_id']);
        expect(editedStudent).toBeNull();
    }, 10000);
});