/**
 * Operator function that takes a value and returns a new value.
 */
export type Operator<A, B> = (v: A) => B;

/**
 * Get the return type of the last operator in a list of operators.
 */
export type LastOperatorReturn<T extends Operator<unknown, unknown>[]> =
  T extends [...Operator<unknown, unknown>[], Operator<unknown, infer R>] ? R
    : never;

/**
 * Pipes a value through a series of operator functions.
 * Supports type inference for both the operator functions and the return value of the final operator.
 *
 * > [!NOTE]
 * >
 * > If the number of operators exceeds 20, the operator functions' types will default to
 * > `Operator<unknown, unknown>`, requiring explicit type annotations.
 *
 * @param value - The initial value to be processed through the operators.
 * @param operators - A sequence of functions to apply to the value.
 * @returns The final value after being processed through all the operators.
 *
 * @example
 * ```ts
 * import { pipe } from "@core/pipe";
 *
 * const result = pipe(
 *   1,
 *   (v) => v + 1,  // inferred as (v: number) => number
 *   (v) => v * 2,  // inferred as (v: number) => number
 *   (v) => v.toString(), // inferred as (v: number) => string
 * );
 * console.log(result); // "4"
 * ```
 */
export function pipe<V>(value: V): V;
export function pipe<V, T01>(value: V, o01: Operator<V, T01>): T01;
export function pipe<V, T01, T02>(
  value: V,
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
): T02;
export function pipe<V, T01, T02, T03>(
  value: V,
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
): T03;
export function pipe<V, T01, T02, T03, T04>(
  value: V,
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
): T04;
export function pipe<V, T01, T02, T03, T04, T05>(
  value: V,
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
): T05;
export function pipe<V, T01, T02, T03, T04, T05, T06>(
  value: V,
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
): T06;
export function pipe<V, T01, T02, T03, T04, T05, T06, T07>(
  value: V,
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
  o07: Operator<T06, T07>,
): T07;
export function pipe<V, T01, T02, T03, T04, T05, T06, T07, T08>(
  value: V,
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
  o07: Operator<T06, T07>,
  o08: Operator<T07, T08>,
): T08;
export function pipe<V, T01, T02, T03, T04, T05, T06, T07, T08, T09>(
  value: V,
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
  o07: Operator<T06, T07>,
  o08: Operator<T07, T08>,
  o09: Operator<T08, T09>,
): T09;
export function pipe<V, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10>(
  value: V,
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
  o07: Operator<T06, T07>,
  o08: Operator<T07, T08>,
  o09: Operator<T08, T09>,
  o10: Operator<T09, T10>,
): T10;
export function pipe<V, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11>(
  value: V,
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
  o07: Operator<T06, T07>,
  o08: Operator<T07, T08>,
  o09: Operator<T08, T09>,
  o10: Operator<T09, T10>,
  o11: Operator<T10, T11>,
): T11;
export function pipe<
  V,
  T01,
  T02,
  T03,
  T04,
  T05,
  T06,
  T07,
  T08,
  T09,
  T10,
  T11,
  T12,
>(
  value: V,
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
  o07: Operator<T06, T07>,
  o08: Operator<T07, T08>,
  o09: Operator<T08, T09>,
  o10: Operator<T09, T10>,
  o11: Operator<T10, T11>,
  o12: Operator<T11, T12>,
): T12;
export function pipe<
  V,
  T01,
  T02,
  T03,
  T04,
  T05,
  T06,
  T07,
  T08,
  T09,
  T10,
  T11,
  T12,
  T13,
>(
  value: V,
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
  o07: Operator<T06, T07>,
  o08: Operator<T07, T08>,
  o09: Operator<T08, T09>,
  o10: Operator<T09, T10>,
  o11: Operator<T10, T11>,
  o12: Operator<T11, T12>,
  o13: Operator<T12, T13>,
): T13;
export function pipe<
  V,
  T01,
  T02,
  T03,
  T04,
  T05,
  T06,
  T07,
  T08,
  T09,
  T10,
  T11,
  T12,
  T13,
  T14,
>(
  value: V,
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
  o07: Operator<T06, T07>,
  o08: Operator<T07, T08>,
  o09: Operator<T08, T09>,
  o10: Operator<T09, T10>,
  o11: Operator<T10, T11>,
  o12: Operator<T11, T12>,
  o13: Operator<T12, T13>,
  o14: Operator<T13, T14>,
): T14;
export function pipe<
  V,
  T01,
  T02,
  T03,
  T04,
  T05,
  T06,
  T07,
  T08,
  T09,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
>(
  value: V,
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
  o07: Operator<T06, T07>,
  o08: Operator<T07, T08>,
  o09: Operator<T08, T09>,
  o10: Operator<T09, T10>,
  o11: Operator<T10, T11>,
  o12: Operator<T11, T12>,
  o13: Operator<T12, T13>,
  o14: Operator<T13, T14>,
  o15: Operator<T14, T15>,
): T15;
export function pipe<
  V,
  T01,
  T02,
  T03,
  T04,
  T05,
  T06,
  T07,
  T08,
  T09,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
>(
  value: V,
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
  o07: Operator<T06, T07>,
  o08: Operator<T07, T08>,
  o09: Operator<T08, T09>,
  o10: Operator<T09, T10>,
  o11: Operator<T10, T11>,
  o12: Operator<T11, T12>,
  o13: Operator<T12, T13>,
  o14: Operator<T13, T14>,
  o15: Operator<T14, T15>,
  o16: Operator<T15, T16>,
): T16;
export function pipe<
  V,
  T01,
  T02,
  T03,
  T04,
  T05,
  T06,
  T07,
  T08,
  T09,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
>(
  value: V,
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
  o07: Operator<T06, T07>,
  o08: Operator<T07, T08>,
  o09: Operator<T08, T09>,
  o10: Operator<T09, T10>,
  o11: Operator<T10, T11>,
  o12: Operator<T11, T12>,
  o13: Operator<T12, T13>,
  o14: Operator<T13, T14>,
  o15: Operator<T14, T15>,
  o16: Operator<T15, T16>,
  o17: Operator<T16, T17>,
): T17;
export function pipe<
  V,
  T01,
  T02,
  T03,
  T04,
  T05,
  T06,
  T07,
  T08,
  T09,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
>(
  value: V,
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
  o07: Operator<T06, T07>,
  o08: Operator<T07, T08>,
  o09: Operator<T08, T09>,
  o10: Operator<T09, T10>,
  o11: Operator<T10, T11>,
  o12: Operator<T11, T12>,
  o13: Operator<T12, T13>,
  o14: Operator<T13, T14>,
  o15: Operator<T14, T15>,
  o16: Operator<T15, T16>,
  o17: Operator<T16, T17>,
  o18: Operator<T17, T18>,
): T18;
export function pipe<
  V,
  T01,
  T02,
  T03,
  T04,
  T05,
  T06,
  T07,
  T08,
  T09,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19,
>(
  value: V,
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
  o07: Operator<T06, T07>,
  o08: Operator<T07, T08>,
  o09: Operator<T08, T09>,
  o10: Operator<T09, T10>,
  o11: Operator<T10, T11>,
  o12: Operator<T11, T12>,
  o13: Operator<T12, T13>,
  o14: Operator<T13, T14>,
  o15: Operator<T14, T15>,
  o16: Operator<T15, T16>,
  o17: Operator<T16, T17>,
  o18: Operator<T17, T18>,
  o19: Operator<T18, T19>,
): T19;
export function pipe<
  V,
  T01,
  T02,
  T03,
  T04,
  T05,
  T06,
  T07,
  T08,
  T09,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19,
  T20,
>(
  value: V,
  o01: Operator<V, T01>,
  o02: Operator<T01, T02>,
  o03: Operator<T02, T03>,
  o04: Operator<T03, T04>,
  o05: Operator<T04, T05>,
  o06: Operator<T05, T06>,
  o07: Operator<T06, T07>,
  o08: Operator<T07, T08>,
  o09: Operator<T08, T09>,
  o10: Operator<T09, T10>,
  o11: Operator<T10, T11>,
  o12: Operator<T11, T12>,
  o13: Operator<T12, T13>,
  o14: Operator<T13, T14>,
  o15: Operator<T14, T15>,
  o16: Operator<T15, T16>,
  o17: Operator<T16, T17>,
  o18: Operator<T17, T18>,
  o19: Operator<T18, T19>,
  o20: Operator<T19, T20>,
): T20;

// deno-lint-ignore no-explicit-any
export function pipe<V, Operators extends Operator<any, unknown>[]>(
  value: V,
  ...operators: Operators
): LastOperatorReturn<Operators>;

// deno-lint-ignore no-explicit-any
export function pipe<V>(value: V, ...operators: Operator<unknown, any>[]) {
  return operators.reduce(
    (result, next) => next(result),
    value,
  );
}
