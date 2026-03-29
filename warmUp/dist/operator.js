"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    //1-11 Ternary, optional chaining & nullish coalescing operator
    const age = 15;
    const isAdult = age >= 18 ? "Adult" : "not Adult";
    //console.log({isAdult})
    //Nullable
    const searchName = (value) => {
        if (value) {
            console.log("Value earching..");
        }
        else {
            console.log('There is nothing to search');
        }
    };
    searchName("Hello TS");
}
//# sourceMappingURL=operator.js.map