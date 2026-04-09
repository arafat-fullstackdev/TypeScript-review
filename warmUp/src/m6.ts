{
  //promise

  type Something = { something: string };

  type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };

  const createPromise = (): Promise<Something> => {
    return new Promise((resolve, reject) => {
      const data: Something = { something: "some thing" };

      if (data) {
        resolve(data);
      } else {
        reject("Somethisng Error");
      }
    });
  };
  // calling Promise function
  const showDate = async (): Promise<Something> => {
    const data: Something = await createPromise();
    //console.log(data);
    return data;
  };
  showDate();

  // Server data
  const getToDO = async ():Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/2");

    const data = await response.json();
    return data;
    //console.log(data);
  };
  getToDO();
}
