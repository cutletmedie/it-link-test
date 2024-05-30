'use client'

import {Counter} from "@/components/counter";

export default function Home() {
  return (
      <>
          <Counter content={(index, incrementHandler, decrementHandler) => (
            <>
                <span>{index}</span>
                <button onClick={decrementHandler}>уменьшить</button>
                <button onClick={incrementHandler}>увеличить</button>
            </>)}
          />
          <Counter />
      </>
  );
}
