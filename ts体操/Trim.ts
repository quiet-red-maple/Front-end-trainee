namespace TrimModule {
  type Trim<T extends string> = T extends
    | `${" " | "\n" | "\t"}${infer R}`
    | `${infer R}${" " | "\n" | "\t"}`
    ? Trim<R>
    : T;
  type trimed = Trim<"  Hello World  ">; // expected to be 'Hello World'
}
