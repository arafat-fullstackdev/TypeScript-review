{
  //funstion with generic
  const createArray = (param: string): string[] => {
    return [param];
  };
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  type userInfo = { // type alias
    id: number;
    name: string;
    email: string;
  };
  const res = createArray("Programming");
  const res2 = createArrayWithGeneric<number>(1);
  const res3 = createArrayWithGeneric<userInfo>({
    id: 20,
    name: "Hey",
    email: "hey@gmail.com",
  });

  //Tuple
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const tupleUser = createArrayWithTuple<string, number>("hello", 90);
  const tupleUser1 = createArrayWithTuple<string, { role: boolean }>("hello", {
    role: true,
  });

  const studentCourse = <T>(student: T) => {
    const course = "AWS";
    return {
      ...student,
      course,
    };
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
