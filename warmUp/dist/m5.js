"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    // constraints
    const studentCourse = (student) => {
        const course = "AWS";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = studentCourse({
        name: "Neil",
        id: 63,
        email: "neil@yahoo.com",
    });
    const student2 = studentCourse({
        name: "Neil",
        id: 503,
        email: "neil@yahoo.com",
        devTYpe: "NLWD",
    });
    const student3 = studentCourse({
        id: 5678,
        name: 'mr. h',
        email: 'xc@gmailail.com'
    });
    const person = "bike";
    const getPersonInfo = (obj, key) => {
        return obj[key];
    };
    const userInfo = {
        name: 'Sibham',
        age: '44',
        city: 'cml'
    };
    const car = {
        model: 'Toyota',
        year: '2344',
    };
    const res = getPersonInfo(car, 'model');
}
//# sourceMappingURL=m5.js.map