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
  return state;
};

console.log(reducer(0, null)); // -> 0

const source = of("World").pipe(map(x => `Hello ${x}!`));

source.subscribe(console.log);
