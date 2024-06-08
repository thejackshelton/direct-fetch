import { component$, $, useSignal } from "@builder.io/qwik";

export const Counter = component$(() => {
  const count = useSignal(0);

  const handleCount$ = $(() => {
    count.value++;
  });

  return <button onClick$={handleCount$}>{count.value}</button>;
});
