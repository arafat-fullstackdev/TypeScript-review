"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    //funstion with generic
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const res = createArray("Programming");
    const res2 = createArrayWithGeneric(1);
    const res3 = createArrayWithGeneric({
        id: 20,
        name: "Hey",
        email: "hey@gmail.com",
    });
    //Tuple
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const tupleUser = createArrayWithTuple("hello", 90);
    const tupleUser1 = createArrayWithTuple("hello", {
        role: true,
    });
    const studentCourse = (student) => {
        const course = "AWS";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = studentCourse({
        name: "Neil",
        id: "03",
        email: "neil@yahoo.com",
    });
    const student2 = studentCourse({
        name: "Neil",
        id: "03",
        email: "neil@yahoo.com",
        devTYpe: "NLWD",
    });
}
//# sourceMappingURL=m4.js.map