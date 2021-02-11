import { of } from "rxjs";
import { map } from "rxjs/operators";

interface Action {
  type: string;
  payload?: any;
}

interface Reducer<T> {
  (state: T, action: Action): T;
}

let reducer: Reducer<number> = (state: number, action: Action) => {
  switch (action.type) {
    case "up":
      return state + 1;
    case "down":
      return state - 1;
    case "build":
      return state + action.payload;
    case "middle":
      return state;
    default:
      return state;
  }
};

let goUp: Action = { type: "up" };
let goDown: Action = { type: "down" };
let middle: Action = { type: "middle" };
let build: Action = { type: "build", payload: 3 };

console.log("go Up >> " + reducer(0, goUp));

console.log("go Down >> " + reducer(0, goDown));

console.log("Stay there >> " + reducer(0, middle));
console.log("Build here >> " + reducer(3, build));

const source = of("World").pipe(map(x => `Hello ${x}!`));

source.subscribe(console.log);
