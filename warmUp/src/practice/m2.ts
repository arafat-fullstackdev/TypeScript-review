{
    //function with generic

    const arrayCreate=(param: string): string[]=>{
        return[param]
    }

     const arrayCreate1=<T>(param: T): T[]=>{
        return[param]
    }

    const res= arrayCreate('Generic Array');
    const resGeneric = arrayCreate1<boolean>(true);
    const resGeneric1 = arrayCreate1<{id:number;name:string}>({id:123,name:'Rayan Dal'})

 const arrayWithTuple=<M,N>(Param1:M,Param2:N):[M ,N]=>{
    return [Param1,Param2];
 }

 const arrayTuple= arrayWithTuple<string,number>('ArrayCode', 43);

}