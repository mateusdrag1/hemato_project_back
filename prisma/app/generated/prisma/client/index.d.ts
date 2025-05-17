
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Patients
 * 
 */
export type Patients = $Result.DefaultSelection<Prisma.$PatientsPayload>
/**
 * Model Erythrocyte
 * 
 */
export type Erythrocyte = $Result.DefaultSelection<Prisma.$ErythrocytePayload>
/**
 * Model Leukocyte
 * 
 */
export type Leukocyte = $Result.DefaultSelection<Prisma.$LeukocytePayload>
/**
 * Model Platelets
 * 
 */
export type Platelets = $Result.DefaultSelection<Prisma.$PlateletsPayload>
/**
 * Model Urine
 * 
 */
export type Urine = $Result.DefaultSelection<Prisma.$UrinePayload>
/**
 * Model Cell
 * 
 */
export type Cell = $Result.DefaultSelection<Prisma.$CellPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Mention
 * 
 */
export type Mention = $Result.DefaultSelection<Prisma.$MentionPayload>
/**
 * Model CellMention
 * 
 */
export type CellMention = $Result.DefaultSelection<Prisma.$CellMentionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patients`: Exposes CRUD operations for the **Patients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patients.findMany()
    * ```
    */
  get patients(): Prisma.PatientsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.erythrocyte`: Exposes CRUD operations for the **Erythrocyte** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Erythrocytes
    * const erythrocytes = await prisma.erythrocyte.findMany()
    * ```
    */
  get erythrocyte(): Prisma.ErythrocyteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leukocyte`: Exposes CRUD operations for the **Leukocyte** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leukocytes
    * const leukocytes = await prisma.leukocyte.findMany()
    * ```
    */
  get leukocyte(): Prisma.LeukocyteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.platelets`: Exposes CRUD operations for the **Platelets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Platelets
    * const platelets = await prisma.platelets.findMany()
    * ```
    */
  get platelets(): Prisma.PlateletsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.urine`: Exposes CRUD operations for the **Urine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Urines
    * const urines = await prisma.urine.findMany()
    * ```
    */
  get urine(): Prisma.UrineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cell`: Exposes CRUD operations for the **Cell** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cells
    * const cells = await prisma.cell.findMany()
    * ```
    */
  get cell(): Prisma.CellDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mention`: Exposes CRUD operations for the **Mention** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mentions
    * const mentions = await prisma.mention.findMany()
    * ```
    */
  get mention(): Prisma.MentionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cellMention`: Exposes CRUD operations for the **CellMention** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CellMentions
    * const cellMentions = await prisma.cellMention.findMany()
    * ```
    */
  get cellMention(): Prisma.CellMentionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Patients: 'Patients',
    Erythrocyte: 'Erythrocyte',
    Leukocyte: 'Leukocyte',
    Platelets: 'Platelets',
    Urine: 'Urine',
    Cell: 'Cell',
    Category: 'Category',
    Mention: 'Mention',
    CellMention: 'CellMention'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "patients" | "erythrocyte" | "leukocyte" | "platelets" | "urine" | "cell" | "category" | "mention" | "cellMention"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Patients: {
        payload: Prisma.$PatientsPayload<ExtArgs>
        fields: Prisma.PatientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          findFirst: {
            args: Prisma.PatientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          findMany: {
            args: Prisma.PatientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>[]
          }
          create: {
            args: Prisma.PatientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          createMany: {
            args: Prisma.PatientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>[]
          }
          delete: {
            args: Prisma.PatientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          update: {
            args: Prisma.PatientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          deleteMany: {
            args: Prisma.PatientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>[]
          }
          upsert: {
            args: Prisma.PatientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          aggregate: {
            args: Prisma.PatientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatients>
          }
          groupBy: {
            args: Prisma.PatientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientsCountArgs<ExtArgs>
            result: $Utils.Optional<PatientsCountAggregateOutputType> | number
          }
        }
      }
      Erythrocyte: {
        payload: Prisma.$ErythrocytePayload<ExtArgs>
        fields: Prisma.ErythrocyteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ErythrocyteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErythrocytePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ErythrocyteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErythrocytePayload>
          }
          findFirst: {
            args: Prisma.ErythrocyteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErythrocytePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ErythrocyteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErythrocytePayload>
          }
          findMany: {
            args: Prisma.ErythrocyteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErythrocytePayload>[]
          }
          create: {
            args: Prisma.ErythrocyteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErythrocytePayload>
          }
          createMany: {
            args: Prisma.ErythrocyteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ErythrocyteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErythrocytePayload>[]
          }
          delete: {
            args: Prisma.ErythrocyteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErythrocytePayload>
          }
          update: {
            args: Prisma.ErythrocyteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErythrocytePayload>
          }
          deleteMany: {
            args: Prisma.ErythrocyteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ErythrocyteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ErythrocyteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErythrocytePayload>[]
          }
          upsert: {
            args: Prisma.ErythrocyteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErythrocytePayload>
          }
          aggregate: {
            args: Prisma.ErythrocyteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateErythrocyte>
          }
          groupBy: {
            args: Prisma.ErythrocyteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ErythrocyteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ErythrocyteCountArgs<ExtArgs>
            result: $Utils.Optional<ErythrocyteCountAggregateOutputType> | number
          }
        }
      }
      Leukocyte: {
        payload: Prisma.$LeukocytePayload<ExtArgs>
        fields: Prisma.LeukocyteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeukocyteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeukocytePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeukocyteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeukocytePayload>
          }
          findFirst: {
            args: Prisma.LeukocyteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeukocytePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeukocyteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeukocytePayload>
          }
          findMany: {
            args: Prisma.LeukocyteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeukocytePayload>[]
          }
          create: {
            args: Prisma.LeukocyteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeukocytePayload>
          }
          createMany: {
            args: Prisma.LeukocyteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeukocyteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeukocytePayload>[]
          }
          delete: {
            args: Prisma.LeukocyteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeukocytePayload>
          }
          update: {
            args: Prisma.LeukocyteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeukocytePayload>
          }
          deleteMany: {
            args: Prisma.LeukocyteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeukocyteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeukocyteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeukocytePayload>[]
          }
          upsert: {
            args: Prisma.LeukocyteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeukocytePayload>
          }
          aggregate: {
            args: Prisma.LeukocyteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeukocyte>
          }
          groupBy: {
            args: Prisma.LeukocyteGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeukocyteGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeukocyteCountArgs<ExtArgs>
            result: $Utils.Optional<LeukocyteCountAggregateOutputType> | number
          }
        }
      }
      Platelets: {
        payload: Prisma.$PlateletsPayload<ExtArgs>
        fields: Prisma.PlateletsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlateletsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlateletsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlateletsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlateletsPayload>
          }
          findFirst: {
            args: Prisma.PlateletsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlateletsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlateletsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlateletsPayload>
          }
          findMany: {
            args: Prisma.PlateletsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlateletsPayload>[]
          }
          create: {
            args: Prisma.PlateletsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlateletsPayload>
          }
          createMany: {
            args: Prisma.PlateletsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlateletsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlateletsPayload>[]
          }
          delete: {
            args: Prisma.PlateletsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlateletsPayload>
          }
          update: {
            args: Prisma.PlateletsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlateletsPayload>
          }
          deleteMany: {
            args: Prisma.PlateletsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlateletsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlateletsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlateletsPayload>[]
          }
          upsert: {
            args: Prisma.PlateletsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlateletsPayload>
          }
          aggregate: {
            args: Prisma.PlateletsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlatelets>
          }
          groupBy: {
            args: Prisma.PlateletsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlateletsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlateletsCountArgs<ExtArgs>
            result: $Utils.Optional<PlateletsCountAggregateOutputType> | number
          }
        }
      }
      Urine: {
        payload: Prisma.$UrinePayload<ExtArgs>
        fields: Prisma.UrineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UrineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UrineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrinePayload>
          }
          findFirst: {
            args: Prisma.UrineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UrineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrinePayload>
          }
          findMany: {
            args: Prisma.UrineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrinePayload>[]
          }
          create: {
            args: Prisma.UrineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrinePayload>
          }
          createMany: {
            args: Prisma.UrineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UrineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrinePayload>[]
          }
          delete: {
            args: Prisma.UrineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrinePayload>
          }
          update: {
            args: Prisma.UrineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrinePayload>
          }
          deleteMany: {
            args: Prisma.UrineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UrineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UrineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrinePayload>[]
          }
          upsert: {
            args: Prisma.UrineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrinePayload>
          }
          aggregate: {
            args: Prisma.UrineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUrine>
          }
          groupBy: {
            args: Prisma.UrineGroupByArgs<ExtArgs>
            result: $Utils.Optional<UrineGroupByOutputType>[]
          }
          count: {
            args: Prisma.UrineCountArgs<ExtArgs>
            result: $Utils.Optional<UrineCountAggregateOutputType> | number
          }
        }
      }
      Cell: {
        payload: Prisma.$CellPayload<ExtArgs>
        fields: Prisma.CellFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CellFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CellFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload>
          }
          findFirst: {
            args: Prisma.CellFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CellFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload>
          }
          findMany: {
            args: Prisma.CellFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload>[]
          }
          create: {
            args: Prisma.CellCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload>
          }
          createMany: {
            args: Prisma.CellCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CellCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload>[]
          }
          delete: {
            args: Prisma.CellDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload>
          }
          update: {
            args: Prisma.CellUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload>
          }
          deleteMany: {
            args: Prisma.CellDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CellUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CellUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload>[]
          }
          upsert: {
            args: Prisma.CellUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload>
          }
          aggregate: {
            args: Prisma.CellAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCell>
          }
          groupBy: {
            args: Prisma.CellGroupByArgs<ExtArgs>
            result: $Utils.Optional<CellGroupByOutputType>[]
          }
          count: {
            args: Prisma.CellCountArgs<ExtArgs>
            result: $Utils.Optional<CellCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Mention: {
        payload: Prisma.$MentionPayload<ExtArgs>
        fields: Prisma.MentionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MentionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MentionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentionPayload>
          }
          findFirst: {
            args: Prisma.MentionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MentionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentionPayload>
          }
          findMany: {
            args: Prisma.MentionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentionPayload>[]
          }
          create: {
            args: Prisma.MentionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentionPayload>
          }
          createMany: {
            args: Prisma.MentionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MentionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentionPayload>[]
          }
          delete: {
            args: Prisma.MentionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentionPayload>
          }
          update: {
            args: Prisma.MentionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentionPayload>
          }
          deleteMany: {
            args: Prisma.MentionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MentionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MentionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentionPayload>[]
          }
          upsert: {
            args: Prisma.MentionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentionPayload>
          }
          aggregate: {
            args: Prisma.MentionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMention>
          }
          groupBy: {
            args: Prisma.MentionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MentionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MentionCountArgs<ExtArgs>
            result: $Utils.Optional<MentionCountAggregateOutputType> | number
          }
        }
      }
      CellMention: {
        payload: Prisma.$CellMentionPayload<ExtArgs>
        fields: Prisma.CellMentionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CellMentionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellMentionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CellMentionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellMentionPayload>
          }
          findFirst: {
            args: Prisma.CellMentionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellMentionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CellMentionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellMentionPayload>
          }
          findMany: {
            args: Prisma.CellMentionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellMentionPayload>[]
          }
          create: {
            args: Prisma.CellMentionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellMentionPayload>
          }
          createMany: {
            args: Prisma.CellMentionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CellMentionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellMentionPayload>[]
          }
          delete: {
            args: Prisma.CellMentionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellMentionPayload>
          }
          update: {
            args: Prisma.CellMentionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellMentionPayload>
          }
          deleteMany: {
            args: Prisma.CellMentionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CellMentionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CellMentionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellMentionPayload>[]
          }
          upsert: {
            args: Prisma.CellMentionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellMentionPayload>
          }
          aggregate: {
            args: Prisma.CellMentionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCellMention>
          }
          groupBy: {
            args: Prisma.CellMentionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CellMentionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CellMentionCountArgs<ExtArgs>
            result: $Utils.Optional<CellMentionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    patients?: PatientsOmit
    erythrocyte?: ErythrocyteOmit
    leukocyte?: LeukocyteOmit
    platelets?: PlateletsOmit
    urine?: UrineOmit
    cell?: CellOmit
    category?: CategoryOmit
    mention?: MentionOmit
    cellMention?: CellMentionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    patients: number
    cell: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | UserCountOutputTypeCountPatientsArgs
    cell?: boolean | UserCountOutputTypeCountCellArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCellArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CellWhereInput
  }


  /**
   * Count Type PatientsCountOutputType
   */

  export type PatientsCountOutputType = {
    erythrocyte: number
    leukocyte: number
    platelets: number
    urine: number
  }

  export type PatientsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    erythrocyte?: boolean | PatientsCountOutputTypeCountErythrocyteArgs
    leukocyte?: boolean | PatientsCountOutputTypeCountLeukocyteArgs
    platelets?: boolean | PatientsCountOutputTypeCountPlateletsArgs
    urine?: boolean | PatientsCountOutputTypeCountUrineArgs
  }

  // Custom InputTypes
  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientsCountOutputType
     */
    select?: PatientsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeCountErythrocyteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ErythrocyteWhereInput
  }

  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeCountLeukocyteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeukocyteWhereInput
  }

  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeCountPlateletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlateletsWhereInput
  }

  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeCountUrineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UrineWhereInput
  }


  /**
   * Count Type CellCountOutputType
   */

  export type CellCountOutputType = {
    cell_mentions: number
  }

  export type CellCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cell_mentions?: boolean | CellCountOutputTypeCountCell_mentionsArgs
  }

  // Custom InputTypes
  /**
   * CellCountOutputType without action
   */
  export type CellCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellCountOutputType
     */
    select?: CellCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CellCountOutputType without action
   */
  export type CellCountOutputTypeCountCell_mentionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CellMentionWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    cell: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cell?: boolean | CategoryCountOutputTypeCountCellArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountCellArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CellWhereInput
  }


  /**
   * Count Type MentionCountOutputType
   */

  export type MentionCountOutputType = {
    cell_mentions: number
  }

  export type MentionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cell_mentions?: boolean | MentionCountOutputTypeCountCell_mentionsArgs
  }

  // Custom InputTypes
  /**
   * MentionCountOutputType without action
   */
  export type MentionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentionCountOutputType
     */
    select?: MentionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MentionCountOutputType without action
   */
  export type MentionCountOutputTypeCountCell_mentionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CellMentionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    role: string
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    patients?: boolean | User$patientsArgs<ExtArgs>
    cell?: boolean | User$cellArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | User$patientsArgs<ExtArgs>
    cell?: boolean | User$cellArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      patients: Prisma.$PatientsPayload<ExtArgs>[]
      cell: Prisma.$CellPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      role: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patients<T extends User$patientsArgs<ExtArgs> = {}>(args?: Subset<T, User$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cell<T extends User$cellArgs<ExtArgs> = {}>(args?: Subset<T, User$cellArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.patients
   */
  export type User$patientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    where?: PatientsWhereInput
    orderBy?: PatientsOrderByWithRelationInput | PatientsOrderByWithRelationInput[]
    cursor?: PatientsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * User.cell
   */
  export type User$cellArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    where?: CellWhereInput
    orderBy?: CellOrderByWithRelationInput | CellOrderByWithRelationInput[]
    cursor?: CellWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CellScalarFieldEnum | CellScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Patients
   */

  export type AggregatePatients = {
    _count: PatientsCountAggregateOutputType | null
    _avg: PatientsAvgAggregateOutputType | null
    _sum: PatientsSumAggregateOutputType | null
    _min: PatientsMinAggregateOutputType | null
    _max: PatientsMaxAggregateOutputType | null
  }

  export type PatientsAvgAggregateOutputType = {
    age: number | null
  }

  export type PatientsSumAggregateOutputType = {
    age: number | null
  }

  export type PatientsMinAggregateOutputType = {
    id: string | null
    blade: string | null
    age: number | null
    genre: string | null
    created_at: Date | null
    updated_at: Date | null
    ownerId: string | null
  }

  export type PatientsMaxAggregateOutputType = {
    id: string | null
    blade: string | null
    age: number | null
    genre: string | null
    created_at: Date | null
    updated_at: Date | null
    ownerId: string | null
  }

  export type PatientsCountAggregateOutputType = {
    id: number
    blade: number
    age: number
    genre: number
    created_at: number
    updated_at: number
    ownerId: number
    _all: number
  }


  export type PatientsAvgAggregateInputType = {
    age?: true
  }

  export type PatientsSumAggregateInputType = {
    age?: true
  }

  export type PatientsMinAggregateInputType = {
    id?: true
    blade?: true
    age?: true
    genre?: true
    created_at?: true
    updated_at?: true
    ownerId?: true
  }

  export type PatientsMaxAggregateInputType = {
    id?: true
    blade?: true
    age?: true
    genre?: true
    created_at?: true
    updated_at?: true
    ownerId?: true
  }

  export type PatientsCountAggregateInputType = {
    id?: true
    blade?: true
    age?: true
    genre?: true
    created_at?: true
    updated_at?: true
    ownerId?: true
    _all?: true
  }

  export type PatientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to aggregate.
     */
    where?: PatientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientsOrderByWithRelationInput | PatientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientsMaxAggregateInputType
  }

  export type GetPatientsAggregateType<T extends PatientsAggregateArgs> = {
        [P in keyof T & keyof AggregatePatients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatients[P]>
      : GetScalarType<T[P], AggregatePatients[P]>
  }




  export type PatientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientsWhereInput
    orderBy?: PatientsOrderByWithAggregationInput | PatientsOrderByWithAggregationInput[]
    by: PatientsScalarFieldEnum[] | PatientsScalarFieldEnum
    having?: PatientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientsCountAggregateInputType | true
    _avg?: PatientsAvgAggregateInputType
    _sum?: PatientsSumAggregateInputType
    _min?: PatientsMinAggregateInputType
    _max?: PatientsMaxAggregateInputType
  }

  export type PatientsGroupByOutputType = {
    id: string
    blade: string
    age: number
    genre: string
    created_at: Date
    updated_at: Date
    ownerId: string
    _count: PatientsCountAggregateOutputType | null
    _avg: PatientsAvgAggregateOutputType | null
    _sum: PatientsSumAggregateOutputType | null
    _min: PatientsMinAggregateOutputType | null
    _max: PatientsMaxAggregateOutputType | null
  }

  type GetPatientsGroupByPayload<T extends PatientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientsGroupByOutputType[P]>
            : GetScalarType<T[P], PatientsGroupByOutputType[P]>
        }
      >
    >


  export type PatientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blade?: boolean
    age?: boolean
    genre?: boolean
    created_at?: boolean
    updated_at?: boolean
    ownerId?: boolean
    erythrocyte?: boolean | Patients$erythrocyteArgs<ExtArgs>
    leukocyte?: boolean | Patients$leukocyteArgs<ExtArgs>
    platelets?: boolean | Patients$plateletsArgs<ExtArgs>
    urine?: boolean | Patients$urineArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PatientsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patients"]>

  export type PatientsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blade?: boolean
    age?: boolean
    genre?: boolean
    created_at?: boolean
    updated_at?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patients"]>

  export type PatientsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blade?: boolean
    age?: boolean
    genre?: boolean
    created_at?: boolean
    updated_at?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patients"]>

  export type PatientsSelectScalar = {
    id?: boolean
    blade?: boolean
    age?: boolean
    genre?: boolean
    created_at?: boolean
    updated_at?: boolean
    ownerId?: boolean
  }

  export type PatientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blade" | "age" | "genre" | "created_at" | "updated_at" | "ownerId", ExtArgs["result"]["patients"]>
  export type PatientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    erythrocyte?: boolean | Patients$erythrocyteArgs<ExtArgs>
    leukocyte?: boolean | Patients$leukocyteArgs<ExtArgs>
    platelets?: boolean | Patients$plateletsArgs<ExtArgs>
    urine?: boolean | Patients$urineArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PatientsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PatientsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PatientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patients"
    objects: {
      erythrocyte: Prisma.$ErythrocytePayload<ExtArgs>[]
      leukocyte: Prisma.$LeukocytePayload<ExtArgs>[]
      platelets: Prisma.$PlateletsPayload<ExtArgs>[]
      urine: Prisma.$UrinePayload<ExtArgs>[]
      owner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      blade: string
      age: number
      genre: string
      created_at: Date
      updated_at: Date
      ownerId: string
    }, ExtArgs["result"]["patients"]>
    composites: {}
  }

  type PatientsGetPayload<S extends boolean | null | undefined | PatientsDefaultArgs> = $Result.GetResult<Prisma.$PatientsPayload, S>

  type PatientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientsCountAggregateInputType | true
    }

  export interface PatientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patients'], meta: { name: 'Patients' } }
    /**
     * Find zero or one Patients that matches the filter.
     * @param {PatientsFindUniqueArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientsFindUniqueArgs>(args: SelectSubset<T, PatientsFindUniqueArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientsFindUniqueOrThrowArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientsFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsFindFirstArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientsFindFirstArgs>(args?: SelectSubset<T, PatientsFindFirstArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsFindFirstOrThrowArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientsFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patients.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patients.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientsWithIdOnly = await prisma.patients.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientsFindManyArgs>(args?: SelectSubset<T, PatientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patients.
     * @param {PatientsCreateArgs} args - Arguments to create a Patients.
     * @example
     * // Create one Patients
     * const Patients = await prisma.patients.create({
     *   data: {
     *     // ... data to create a Patients
     *   }
     * })
     * 
     */
    create<T extends PatientsCreateArgs>(args: SelectSubset<T, PatientsCreateArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientsCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patients = await prisma.patients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientsCreateManyArgs>(args?: SelectSubset<T, PatientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientsCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patients = await prisma.patients.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientsWithIdOnly = await prisma.patients.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientsCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patients.
     * @param {PatientsDeleteArgs} args - Arguments to delete one Patients.
     * @example
     * // Delete one Patients
     * const Patients = await prisma.patients.delete({
     *   where: {
     *     // ... filter to delete one Patients
     *   }
     * })
     * 
     */
    delete<T extends PatientsDeleteArgs>(args: SelectSubset<T, PatientsDeleteArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patients.
     * @param {PatientsUpdateArgs} args - Arguments to update one Patients.
     * @example
     * // Update one Patients
     * const patients = await prisma.patients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientsUpdateArgs>(args: SelectSubset<T, PatientsUpdateArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientsDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientsDeleteManyArgs>(args?: SelectSubset<T, PatientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patients = await prisma.patients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientsUpdateManyArgs>(args: SelectSubset<T, PatientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientsUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patients = await prisma.patients.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientsWithIdOnly = await prisma.patients.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientsUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patients.
     * @param {PatientsUpsertArgs} args - Arguments to update or create a Patients.
     * @example
     * // Update or create a Patients
     * const patients = await prisma.patients.upsert({
     *   create: {
     *     // ... data to create a Patients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patients we want to update
     *   }
     * })
     */
    upsert<T extends PatientsUpsertArgs>(args: SelectSubset<T, PatientsUpsertArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patients.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientsCountArgs>(
      args?: Subset<T, PatientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientsAggregateArgs>(args: Subset<T, PatientsAggregateArgs>): Prisma.PrismaPromise<GetPatientsAggregateType<T>>

    /**
     * Group by Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientsGroupByArgs['orderBy'] }
        : { orderBy?: PatientsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patients model
   */
  readonly fields: PatientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    erythrocyte<T extends Patients$erythrocyteArgs<ExtArgs> = {}>(args?: Subset<T, Patients$erythrocyteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErythrocytePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leukocyte<T extends Patients$leukocyteArgs<ExtArgs> = {}>(args?: Subset<T, Patients$leukocyteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeukocytePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    platelets<T extends Patients$plateletsArgs<ExtArgs> = {}>(args?: Subset<T, Patients$plateletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlateletsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    urine<T extends Patients$urineArgs<ExtArgs> = {}>(args?: Subset<T, Patients$urineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Patients model
   */
  interface PatientsFieldRefs {
    readonly id: FieldRef<"Patients", 'String'>
    readonly blade: FieldRef<"Patients", 'String'>
    readonly age: FieldRef<"Patients", 'Int'>
    readonly genre: FieldRef<"Patients", 'String'>
    readonly created_at: FieldRef<"Patients", 'DateTime'>
    readonly updated_at: FieldRef<"Patients", 'DateTime'>
    readonly ownerId: FieldRef<"Patients", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Patients findUnique
   */
  export type PatientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where: PatientsWhereUniqueInput
  }

  /**
   * Patients findUniqueOrThrow
   */
  export type PatientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where: PatientsWhereUniqueInput
  }

  /**
   * Patients findFirst
   */
  export type PatientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientsOrderByWithRelationInput | PatientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * Patients findFirstOrThrow
   */
  export type PatientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientsOrderByWithRelationInput | PatientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * Patients findMany
   */
  export type PatientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientsOrderByWithRelationInput | PatientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * Patients create
   */
  export type PatientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * The data needed to create a Patients.
     */
    data: XOR<PatientsCreateInput, PatientsUncheckedCreateInput>
  }

  /**
   * Patients createMany
   */
  export type PatientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientsCreateManyInput | PatientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patients createManyAndReturn
   */
  export type PatientsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientsCreateManyInput | PatientsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patients update
   */
  export type PatientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * The data needed to update a Patients.
     */
    data: XOR<PatientsUpdateInput, PatientsUncheckedUpdateInput>
    /**
     * Choose, which Patients to update.
     */
    where: PatientsWhereUniqueInput
  }

  /**
   * Patients updateMany
   */
  export type PatientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientsUpdateManyMutationInput, PatientsUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientsWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patients updateManyAndReturn
   */
  export type PatientsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientsUpdateManyMutationInput, PatientsUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientsWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patients upsert
   */
  export type PatientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * The filter to search for the Patients to update in case it exists.
     */
    where: PatientsWhereUniqueInput
    /**
     * In case the Patients found by the `where` argument doesn't exist, create a new Patients with this data.
     */
    create: XOR<PatientsCreateInput, PatientsUncheckedCreateInput>
    /**
     * In case the Patients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientsUpdateInput, PatientsUncheckedUpdateInput>
  }

  /**
   * Patients delete
   */
  export type PatientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter which Patients to delete.
     */
    where: PatientsWhereUniqueInput
  }

  /**
   * Patients deleteMany
   */
  export type PatientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientsWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patients.erythrocyte
   */
  export type Patients$erythrocyteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Erythrocyte
     */
    select?: ErythrocyteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Erythrocyte
     */
    omit?: ErythrocyteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErythrocyteInclude<ExtArgs> | null
    where?: ErythrocyteWhereInput
    orderBy?: ErythrocyteOrderByWithRelationInput | ErythrocyteOrderByWithRelationInput[]
    cursor?: ErythrocyteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ErythrocyteScalarFieldEnum | ErythrocyteScalarFieldEnum[]
  }

  /**
   * Patients.leukocyte
   */
  export type Patients$leukocyteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leukocyte
     */
    select?: LeukocyteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leukocyte
     */
    omit?: LeukocyteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeukocyteInclude<ExtArgs> | null
    where?: LeukocyteWhereInput
    orderBy?: LeukocyteOrderByWithRelationInput | LeukocyteOrderByWithRelationInput[]
    cursor?: LeukocyteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeukocyteScalarFieldEnum | LeukocyteScalarFieldEnum[]
  }

  /**
   * Patients.platelets
   */
  export type Patients$plateletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platelets
     */
    select?: PlateletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platelets
     */
    omit?: PlateletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlateletsInclude<ExtArgs> | null
    where?: PlateletsWhereInput
    orderBy?: PlateletsOrderByWithRelationInput | PlateletsOrderByWithRelationInput[]
    cursor?: PlateletsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlateletsScalarFieldEnum | PlateletsScalarFieldEnum[]
  }

  /**
   * Patients.urine
   */
  export type Patients$urineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urine
     */
    select?: UrineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Urine
     */
    omit?: UrineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrineInclude<ExtArgs> | null
    where?: UrineWhereInput
    orderBy?: UrineOrderByWithRelationInput | UrineOrderByWithRelationInput[]
    cursor?: UrineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UrineScalarFieldEnum | UrineScalarFieldEnum[]
  }

  /**
   * Patients without action
   */
  export type PatientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
  }


  /**
   * Model Erythrocyte
   */

  export type AggregateErythrocyte = {
    _count: ErythrocyteCountAggregateOutputType | null
    _avg: ErythrocyteAvgAggregateOutputType | null
    _sum: ErythrocyteSumAggregateOutputType | null
    _min: ErythrocyteMinAggregateOutputType | null
    _max: ErythrocyteMaxAggregateOutputType | null
  }

  export type ErythrocyteAvgAggregateOutputType = {
    id: number | null
    erythrocyte: number | null
    hemoglobin: number | null
    hematocrit: number | null
    RDW: number | null
  }

  export type ErythrocyteSumAggregateOutputType = {
    id: number | null
    erythrocyte: number | null
    hemoglobin: number | null
    hematocrit: number | null
    RDW: number | null
  }

  export type ErythrocyteMinAggregateOutputType = {
    id: number | null
    erythrocyte: number | null
    hemoglobin: number | null
    hematocrit: number | null
    RDW: number | null
    patient_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ErythrocyteMaxAggregateOutputType = {
    id: number | null
    erythrocyte: number | null
    hemoglobin: number | null
    hematocrit: number | null
    RDW: number | null
    patient_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ErythrocyteCountAggregateOutputType = {
    id: number
    erythrocyte: number
    hemoglobin: number
    hematocrit: number
    RDW: number
    patient_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ErythrocyteAvgAggregateInputType = {
    id?: true
    erythrocyte?: true
    hemoglobin?: true
    hematocrit?: true
    RDW?: true
  }

  export type ErythrocyteSumAggregateInputType = {
    id?: true
    erythrocyte?: true
    hemoglobin?: true
    hematocrit?: true
    RDW?: true
  }

  export type ErythrocyteMinAggregateInputType = {
    id?: true
    erythrocyte?: true
    hemoglobin?: true
    hematocrit?: true
    RDW?: true
    patient_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ErythrocyteMaxAggregateInputType = {
    id?: true
    erythrocyte?: true
    hemoglobin?: true
    hematocrit?: true
    RDW?: true
    patient_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ErythrocyteCountAggregateInputType = {
    id?: true
    erythrocyte?: true
    hemoglobin?: true
    hematocrit?: true
    RDW?: true
    patient_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ErythrocyteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Erythrocyte to aggregate.
     */
    where?: ErythrocyteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Erythrocytes to fetch.
     */
    orderBy?: ErythrocyteOrderByWithRelationInput | ErythrocyteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ErythrocyteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Erythrocytes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Erythrocytes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Erythrocytes
    **/
    _count?: true | ErythrocyteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ErythrocyteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ErythrocyteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ErythrocyteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ErythrocyteMaxAggregateInputType
  }

  export type GetErythrocyteAggregateType<T extends ErythrocyteAggregateArgs> = {
        [P in keyof T & keyof AggregateErythrocyte]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateErythrocyte[P]>
      : GetScalarType<T[P], AggregateErythrocyte[P]>
  }




  export type ErythrocyteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ErythrocyteWhereInput
    orderBy?: ErythrocyteOrderByWithAggregationInput | ErythrocyteOrderByWithAggregationInput[]
    by: ErythrocyteScalarFieldEnum[] | ErythrocyteScalarFieldEnum
    having?: ErythrocyteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ErythrocyteCountAggregateInputType | true
    _avg?: ErythrocyteAvgAggregateInputType
    _sum?: ErythrocyteSumAggregateInputType
    _min?: ErythrocyteMinAggregateInputType
    _max?: ErythrocyteMaxAggregateInputType
  }

  export type ErythrocyteGroupByOutputType = {
    id: number
    erythrocyte: number | null
    hemoglobin: number | null
    hematocrit: number | null
    RDW: number | null
    patient_id: string
    created_at: Date
    updated_at: Date
    _count: ErythrocyteCountAggregateOutputType | null
    _avg: ErythrocyteAvgAggregateOutputType | null
    _sum: ErythrocyteSumAggregateOutputType | null
    _min: ErythrocyteMinAggregateOutputType | null
    _max: ErythrocyteMaxAggregateOutputType | null
  }

  type GetErythrocyteGroupByPayload<T extends ErythrocyteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ErythrocyteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ErythrocyteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ErythrocyteGroupByOutputType[P]>
            : GetScalarType<T[P], ErythrocyteGroupByOutputType[P]>
        }
      >
    >


  export type ErythrocyteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    erythrocyte?: boolean
    hemoglobin?: boolean
    hematocrit?: boolean
    RDW?: boolean
    patient_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["erythrocyte"]>

  export type ErythrocyteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    erythrocyte?: boolean
    hemoglobin?: boolean
    hematocrit?: boolean
    RDW?: boolean
    patient_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["erythrocyte"]>

  export type ErythrocyteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    erythrocyte?: boolean
    hemoglobin?: boolean
    hematocrit?: boolean
    RDW?: boolean
    patient_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["erythrocyte"]>

  export type ErythrocyteSelectScalar = {
    id?: boolean
    erythrocyte?: boolean
    hemoglobin?: boolean
    hematocrit?: boolean
    RDW?: boolean
    patient_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ErythrocyteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "erythrocyte" | "hemoglobin" | "hematocrit" | "RDW" | "patient_id" | "created_at" | "updated_at", ExtArgs["result"]["erythrocyte"]>
  export type ErythrocyteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }
  export type ErythrocyteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }
  export type ErythrocyteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }

  export type $ErythrocytePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Erythrocyte"
    objects: {
      patient: Prisma.$PatientsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      erythrocyte: number | null
      hemoglobin: number | null
      hematocrit: number | null
      RDW: number | null
      patient_id: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["erythrocyte"]>
    composites: {}
  }

  type ErythrocyteGetPayload<S extends boolean | null | undefined | ErythrocyteDefaultArgs> = $Result.GetResult<Prisma.$ErythrocytePayload, S>

  type ErythrocyteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ErythrocyteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ErythrocyteCountAggregateInputType | true
    }

  export interface ErythrocyteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Erythrocyte'], meta: { name: 'Erythrocyte' } }
    /**
     * Find zero or one Erythrocyte that matches the filter.
     * @param {ErythrocyteFindUniqueArgs} args - Arguments to find a Erythrocyte
     * @example
     * // Get one Erythrocyte
     * const erythrocyte = await prisma.erythrocyte.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ErythrocyteFindUniqueArgs>(args: SelectSubset<T, ErythrocyteFindUniqueArgs<ExtArgs>>): Prisma__ErythrocyteClient<$Result.GetResult<Prisma.$ErythrocytePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Erythrocyte that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ErythrocyteFindUniqueOrThrowArgs} args - Arguments to find a Erythrocyte
     * @example
     * // Get one Erythrocyte
     * const erythrocyte = await prisma.erythrocyte.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ErythrocyteFindUniqueOrThrowArgs>(args: SelectSubset<T, ErythrocyteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ErythrocyteClient<$Result.GetResult<Prisma.$ErythrocytePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Erythrocyte that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErythrocyteFindFirstArgs} args - Arguments to find a Erythrocyte
     * @example
     * // Get one Erythrocyte
     * const erythrocyte = await prisma.erythrocyte.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ErythrocyteFindFirstArgs>(args?: SelectSubset<T, ErythrocyteFindFirstArgs<ExtArgs>>): Prisma__ErythrocyteClient<$Result.GetResult<Prisma.$ErythrocytePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Erythrocyte that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErythrocyteFindFirstOrThrowArgs} args - Arguments to find a Erythrocyte
     * @example
     * // Get one Erythrocyte
     * const erythrocyte = await prisma.erythrocyte.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ErythrocyteFindFirstOrThrowArgs>(args?: SelectSubset<T, ErythrocyteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ErythrocyteClient<$Result.GetResult<Prisma.$ErythrocytePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Erythrocytes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErythrocyteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Erythrocytes
     * const erythrocytes = await prisma.erythrocyte.findMany()
     * 
     * // Get first 10 Erythrocytes
     * const erythrocytes = await prisma.erythrocyte.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const erythrocyteWithIdOnly = await prisma.erythrocyte.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ErythrocyteFindManyArgs>(args?: SelectSubset<T, ErythrocyteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErythrocytePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Erythrocyte.
     * @param {ErythrocyteCreateArgs} args - Arguments to create a Erythrocyte.
     * @example
     * // Create one Erythrocyte
     * const Erythrocyte = await prisma.erythrocyte.create({
     *   data: {
     *     // ... data to create a Erythrocyte
     *   }
     * })
     * 
     */
    create<T extends ErythrocyteCreateArgs>(args: SelectSubset<T, ErythrocyteCreateArgs<ExtArgs>>): Prisma__ErythrocyteClient<$Result.GetResult<Prisma.$ErythrocytePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Erythrocytes.
     * @param {ErythrocyteCreateManyArgs} args - Arguments to create many Erythrocytes.
     * @example
     * // Create many Erythrocytes
     * const erythrocyte = await prisma.erythrocyte.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ErythrocyteCreateManyArgs>(args?: SelectSubset<T, ErythrocyteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Erythrocytes and returns the data saved in the database.
     * @param {ErythrocyteCreateManyAndReturnArgs} args - Arguments to create many Erythrocytes.
     * @example
     * // Create many Erythrocytes
     * const erythrocyte = await prisma.erythrocyte.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Erythrocytes and only return the `id`
     * const erythrocyteWithIdOnly = await prisma.erythrocyte.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ErythrocyteCreateManyAndReturnArgs>(args?: SelectSubset<T, ErythrocyteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErythrocytePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Erythrocyte.
     * @param {ErythrocyteDeleteArgs} args - Arguments to delete one Erythrocyte.
     * @example
     * // Delete one Erythrocyte
     * const Erythrocyte = await prisma.erythrocyte.delete({
     *   where: {
     *     // ... filter to delete one Erythrocyte
     *   }
     * })
     * 
     */
    delete<T extends ErythrocyteDeleteArgs>(args: SelectSubset<T, ErythrocyteDeleteArgs<ExtArgs>>): Prisma__ErythrocyteClient<$Result.GetResult<Prisma.$ErythrocytePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Erythrocyte.
     * @param {ErythrocyteUpdateArgs} args - Arguments to update one Erythrocyte.
     * @example
     * // Update one Erythrocyte
     * const erythrocyte = await prisma.erythrocyte.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ErythrocyteUpdateArgs>(args: SelectSubset<T, ErythrocyteUpdateArgs<ExtArgs>>): Prisma__ErythrocyteClient<$Result.GetResult<Prisma.$ErythrocytePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Erythrocytes.
     * @param {ErythrocyteDeleteManyArgs} args - Arguments to filter Erythrocytes to delete.
     * @example
     * // Delete a few Erythrocytes
     * const { count } = await prisma.erythrocyte.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ErythrocyteDeleteManyArgs>(args?: SelectSubset<T, ErythrocyteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Erythrocytes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErythrocyteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Erythrocytes
     * const erythrocyte = await prisma.erythrocyte.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ErythrocyteUpdateManyArgs>(args: SelectSubset<T, ErythrocyteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Erythrocytes and returns the data updated in the database.
     * @param {ErythrocyteUpdateManyAndReturnArgs} args - Arguments to update many Erythrocytes.
     * @example
     * // Update many Erythrocytes
     * const erythrocyte = await prisma.erythrocyte.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Erythrocytes and only return the `id`
     * const erythrocyteWithIdOnly = await prisma.erythrocyte.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ErythrocyteUpdateManyAndReturnArgs>(args: SelectSubset<T, ErythrocyteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErythrocytePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Erythrocyte.
     * @param {ErythrocyteUpsertArgs} args - Arguments to update or create a Erythrocyte.
     * @example
     * // Update or create a Erythrocyte
     * const erythrocyte = await prisma.erythrocyte.upsert({
     *   create: {
     *     // ... data to create a Erythrocyte
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Erythrocyte we want to update
     *   }
     * })
     */
    upsert<T extends ErythrocyteUpsertArgs>(args: SelectSubset<T, ErythrocyteUpsertArgs<ExtArgs>>): Prisma__ErythrocyteClient<$Result.GetResult<Prisma.$ErythrocytePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Erythrocytes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErythrocyteCountArgs} args - Arguments to filter Erythrocytes to count.
     * @example
     * // Count the number of Erythrocytes
     * const count = await prisma.erythrocyte.count({
     *   where: {
     *     // ... the filter for the Erythrocytes we want to count
     *   }
     * })
    **/
    count<T extends ErythrocyteCountArgs>(
      args?: Subset<T, ErythrocyteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ErythrocyteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Erythrocyte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErythrocyteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ErythrocyteAggregateArgs>(args: Subset<T, ErythrocyteAggregateArgs>): Prisma.PrismaPromise<GetErythrocyteAggregateType<T>>

    /**
     * Group by Erythrocyte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErythrocyteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ErythrocyteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ErythrocyteGroupByArgs['orderBy'] }
        : { orderBy?: ErythrocyteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ErythrocyteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetErythrocyteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Erythrocyte model
   */
  readonly fields: ErythrocyteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Erythrocyte.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ErythrocyteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientsDefaultArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Erythrocyte model
   */
  interface ErythrocyteFieldRefs {
    readonly id: FieldRef<"Erythrocyte", 'Int'>
    readonly erythrocyte: FieldRef<"Erythrocyte", 'Float'>
    readonly hemoglobin: FieldRef<"Erythrocyte", 'Float'>
    readonly hematocrit: FieldRef<"Erythrocyte", 'Float'>
    readonly RDW: FieldRef<"Erythrocyte", 'Float'>
    readonly patient_id: FieldRef<"Erythrocyte", 'String'>
    readonly created_at: FieldRef<"Erythrocyte", 'DateTime'>
    readonly updated_at: FieldRef<"Erythrocyte", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Erythrocyte findUnique
   */
  export type ErythrocyteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Erythrocyte
     */
    select?: ErythrocyteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Erythrocyte
     */
    omit?: ErythrocyteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErythrocyteInclude<ExtArgs> | null
    /**
     * Filter, which Erythrocyte to fetch.
     */
    where: ErythrocyteWhereUniqueInput
  }

  /**
   * Erythrocyte findUniqueOrThrow
   */
  export type ErythrocyteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Erythrocyte
     */
    select?: ErythrocyteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Erythrocyte
     */
    omit?: ErythrocyteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErythrocyteInclude<ExtArgs> | null
    /**
     * Filter, which Erythrocyte to fetch.
     */
    where: ErythrocyteWhereUniqueInput
  }

  /**
   * Erythrocyte findFirst
   */
  export type ErythrocyteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Erythrocyte
     */
    select?: ErythrocyteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Erythrocyte
     */
    omit?: ErythrocyteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErythrocyteInclude<ExtArgs> | null
    /**
     * Filter, which Erythrocyte to fetch.
     */
    where?: ErythrocyteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Erythrocytes to fetch.
     */
    orderBy?: ErythrocyteOrderByWithRelationInput | ErythrocyteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Erythrocytes.
     */
    cursor?: ErythrocyteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Erythrocytes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Erythrocytes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Erythrocytes.
     */
    distinct?: ErythrocyteScalarFieldEnum | ErythrocyteScalarFieldEnum[]
  }

  /**
   * Erythrocyte findFirstOrThrow
   */
  export type ErythrocyteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Erythrocyte
     */
    select?: ErythrocyteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Erythrocyte
     */
    omit?: ErythrocyteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErythrocyteInclude<ExtArgs> | null
    /**
     * Filter, which Erythrocyte to fetch.
     */
    where?: ErythrocyteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Erythrocytes to fetch.
     */
    orderBy?: ErythrocyteOrderByWithRelationInput | ErythrocyteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Erythrocytes.
     */
    cursor?: ErythrocyteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Erythrocytes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Erythrocytes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Erythrocytes.
     */
    distinct?: ErythrocyteScalarFieldEnum | ErythrocyteScalarFieldEnum[]
  }

  /**
   * Erythrocyte findMany
   */
  export type ErythrocyteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Erythrocyte
     */
    select?: ErythrocyteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Erythrocyte
     */
    omit?: ErythrocyteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErythrocyteInclude<ExtArgs> | null
    /**
     * Filter, which Erythrocytes to fetch.
     */
    where?: ErythrocyteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Erythrocytes to fetch.
     */
    orderBy?: ErythrocyteOrderByWithRelationInput | ErythrocyteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Erythrocytes.
     */
    cursor?: ErythrocyteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Erythrocytes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Erythrocytes.
     */
    skip?: number
    distinct?: ErythrocyteScalarFieldEnum | ErythrocyteScalarFieldEnum[]
  }

  /**
   * Erythrocyte create
   */
  export type ErythrocyteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Erythrocyte
     */
    select?: ErythrocyteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Erythrocyte
     */
    omit?: ErythrocyteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErythrocyteInclude<ExtArgs> | null
    /**
     * The data needed to create a Erythrocyte.
     */
    data: XOR<ErythrocyteCreateInput, ErythrocyteUncheckedCreateInput>
  }

  /**
   * Erythrocyte createMany
   */
  export type ErythrocyteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Erythrocytes.
     */
    data: ErythrocyteCreateManyInput | ErythrocyteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Erythrocyte createManyAndReturn
   */
  export type ErythrocyteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Erythrocyte
     */
    select?: ErythrocyteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Erythrocyte
     */
    omit?: ErythrocyteOmit<ExtArgs> | null
    /**
     * The data used to create many Erythrocytes.
     */
    data: ErythrocyteCreateManyInput | ErythrocyteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErythrocyteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Erythrocyte update
   */
  export type ErythrocyteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Erythrocyte
     */
    select?: ErythrocyteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Erythrocyte
     */
    omit?: ErythrocyteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErythrocyteInclude<ExtArgs> | null
    /**
     * The data needed to update a Erythrocyte.
     */
    data: XOR<ErythrocyteUpdateInput, ErythrocyteUncheckedUpdateInput>
    /**
     * Choose, which Erythrocyte to update.
     */
    where: ErythrocyteWhereUniqueInput
  }

  /**
   * Erythrocyte updateMany
   */
  export type ErythrocyteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Erythrocytes.
     */
    data: XOR<ErythrocyteUpdateManyMutationInput, ErythrocyteUncheckedUpdateManyInput>
    /**
     * Filter which Erythrocytes to update
     */
    where?: ErythrocyteWhereInput
    /**
     * Limit how many Erythrocytes to update.
     */
    limit?: number
  }

  /**
   * Erythrocyte updateManyAndReturn
   */
  export type ErythrocyteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Erythrocyte
     */
    select?: ErythrocyteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Erythrocyte
     */
    omit?: ErythrocyteOmit<ExtArgs> | null
    /**
     * The data used to update Erythrocytes.
     */
    data: XOR<ErythrocyteUpdateManyMutationInput, ErythrocyteUncheckedUpdateManyInput>
    /**
     * Filter which Erythrocytes to update
     */
    where?: ErythrocyteWhereInput
    /**
     * Limit how many Erythrocytes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErythrocyteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Erythrocyte upsert
   */
  export type ErythrocyteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Erythrocyte
     */
    select?: ErythrocyteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Erythrocyte
     */
    omit?: ErythrocyteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErythrocyteInclude<ExtArgs> | null
    /**
     * The filter to search for the Erythrocyte to update in case it exists.
     */
    where: ErythrocyteWhereUniqueInput
    /**
     * In case the Erythrocyte found by the `where` argument doesn't exist, create a new Erythrocyte with this data.
     */
    create: XOR<ErythrocyteCreateInput, ErythrocyteUncheckedCreateInput>
    /**
     * In case the Erythrocyte was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ErythrocyteUpdateInput, ErythrocyteUncheckedUpdateInput>
  }

  /**
   * Erythrocyte delete
   */
  export type ErythrocyteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Erythrocyte
     */
    select?: ErythrocyteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Erythrocyte
     */
    omit?: ErythrocyteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErythrocyteInclude<ExtArgs> | null
    /**
     * Filter which Erythrocyte to delete.
     */
    where: ErythrocyteWhereUniqueInput
  }

  /**
   * Erythrocyte deleteMany
   */
  export type ErythrocyteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Erythrocytes to delete
     */
    where?: ErythrocyteWhereInput
    /**
     * Limit how many Erythrocytes to delete.
     */
    limit?: number
  }

  /**
   * Erythrocyte without action
   */
  export type ErythrocyteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Erythrocyte
     */
    select?: ErythrocyteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Erythrocyte
     */
    omit?: ErythrocyteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErythrocyteInclude<ExtArgs> | null
  }


  /**
   * Model Leukocyte
   */

  export type AggregateLeukocyte = {
    _count: LeukocyteCountAggregateOutputType | null
    _avg: LeukocyteAvgAggregateOutputType | null
    _sum: LeukocyteSumAggregateOutputType | null
    _min: LeukocyteMinAggregateOutputType | null
    _max: LeukocyteMaxAggregateOutputType | null
  }

  export type LeukocyteAvgAggregateOutputType = {
    id: number | null
    leukocyte: number | null
    neutrophils: number | null
    bandNeutrophils: number | null
    lymphocytes: number | null
    monocytes: number | null
    eosinophils: number | null
    basophils: number | null
  }

  export type LeukocyteSumAggregateOutputType = {
    id: number | null
    leukocyte: number | null
    neutrophils: number | null
    bandNeutrophils: number | null
    lymphocytes: number | null
    monocytes: number | null
    eosinophils: number | null
    basophils: number | null
  }

  export type LeukocyteMinAggregateOutputType = {
    id: number | null
    leukocyte: number | null
    neutrophils: number | null
    bandNeutrophils: number | null
    lymphocytes: number | null
    monocytes: number | null
    eosinophils: number | null
    basophils: number | null
    patient_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LeukocyteMaxAggregateOutputType = {
    id: number | null
    leukocyte: number | null
    neutrophils: number | null
    bandNeutrophils: number | null
    lymphocytes: number | null
    monocytes: number | null
    eosinophils: number | null
    basophils: number | null
    patient_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LeukocyteCountAggregateOutputType = {
    id: number
    leukocyte: number
    neutrophils: number
    bandNeutrophils: number
    lymphocytes: number
    monocytes: number
    eosinophils: number
    basophils: number
    patient_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type LeukocyteAvgAggregateInputType = {
    id?: true
    leukocyte?: true
    neutrophils?: true
    bandNeutrophils?: true
    lymphocytes?: true
    monocytes?: true
    eosinophils?: true
    basophils?: true
  }

  export type LeukocyteSumAggregateInputType = {
    id?: true
    leukocyte?: true
    neutrophils?: true
    bandNeutrophils?: true
    lymphocytes?: true
    monocytes?: true
    eosinophils?: true
    basophils?: true
  }

  export type LeukocyteMinAggregateInputType = {
    id?: true
    leukocyte?: true
    neutrophils?: true
    bandNeutrophils?: true
    lymphocytes?: true
    monocytes?: true
    eosinophils?: true
    basophils?: true
    patient_id?: true
    created_at?: true
    updated_at?: true
  }

  export type LeukocyteMaxAggregateInputType = {
    id?: true
    leukocyte?: true
    neutrophils?: true
    bandNeutrophils?: true
    lymphocytes?: true
    monocytes?: true
    eosinophils?: true
    basophils?: true
    patient_id?: true
    created_at?: true
    updated_at?: true
  }

  export type LeukocyteCountAggregateInputType = {
    id?: true
    leukocyte?: true
    neutrophils?: true
    bandNeutrophils?: true
    lymphocytes?: true
    monocytes?: true
    eosinophils?: true
    basophils?: true
    patient_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type LeukocyteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leukocyte to aggregate.
     */
    where?: LeukocyteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leukocytes to fetch.
     */
    orderBy?: LeukocyteOrderByWithRelationInput | LeukocyteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeukocyteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leukocytes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leukocytes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leukocytes
    **/
    _count?: true | LeukocyteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeukocyteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeukocyteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeukocyteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeukocyteMaxAggregateInputType
  }

  export type GetLeukocyteAggregateType<T extends LeukocyteAggregateArgs> = {
        [P in keyof T & keyof AggregateLeukocyte]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeukocyte[P]>
      : GetScalarType<T[P], AggregateLeukocyte[P]>
  }




  export type LeukocyteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeukocyteWhereInput
    orderBy?: LeukocyteOrderByWithAggregationInput | LeukocyteOrderByWithAggregationInput[]
    by: LeukocyteScalarFieldEnum[] | LeukocyteScalarFieldEnum
    having?: LeukocyteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeukocyteCountAggregateInputType | true
    _avg?: LeukocyteAvgAggregateInputType
    _sum?: LeukocyteSumAggregateInputType
    _min?: LeukocyteMinAggregateInputType
    _max?: LeukocyteMaxAggregateInputType
  }

  export type LeukocyteGroupByOutputType = {
    id: number
    leukocyte: number | null
    neutrophils: number | null
    bandNeutrophils: number | null
    lymphocytes: number | null
    monocytes: number | null
    eosinophils: number | null
    basophils: number | null
    patient_id: string
    created_at: Date
    updated_at: Date
    _count: LeukocyteCountAggregateOutputType | null
    _avg: LeukocyteAvgAggregateOutputType | null
    _sum: LeukocyteSumAggregateOutputType | null
    _min: LeukocyteMinAggregateOutputType | null
    _max: LeukocyteMaxAggregateOutputType | null
  }

  type GetLeukocyteGroupByPayload<T extends LeukocyteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeukocyteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeukocyteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeukocyteGroupByOutputType[P]>
            : GetScalarType<T[P], LeukocyteGroupByOutputType[P]>
        }
      >
    >


  export type LeukocyteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leukocyte?: boolean
    neutrophils?: boolean
    bandNeutrophils?: boolean
    lymphocytes?: boolean
    monocytes?: boolean
    eosinophils?: boolean
    basophils?: boolean
    patient_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leukocyte"]>

  export type LeukocyteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leukocyte?: boolean
    neutrophils?: boolean
    bandNeutrophils?: boolean
    lymphocytes?: boolean
    monocytes?: boolean
    eosinophils?: boolean
    basophils?: boolean
    patient_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leukocyte"]>

  export type LeukocyteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leukocyte?: boolean
    neutrophils?: boolean
    bandNeutrophils?: boolean
    lymphocytes?: boolean
    monocytes?: boolean
    eosinophils?: boolean
    basophils?: boolean
    patient_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leukocyte"]>

  export type LeukocyteSelectScalar = {
    id?: boolean
    leukocyte?: boolean
    neutrophils?: boolean
    bandNeutrophils?: boolean
    lymphocytes?: boolean
    monocytes?: boolean
    eosinophils?: boolean
    basophils?: boolean
    patient_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type LeukocyteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leukocyte" | "neutrophils" | "bandNeutrophils" | "lymphocytes" | "monocytes" | "eosinophils" | "basophils" | "patient_id" | "created_at" | "updated_at", ExtArgs["result"]["leukocyte"]>
  export type LeukocyteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }
  export type LeukocyteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }
  export type LeukocyteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }

  export type $LeukocytePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Leukocyte"
    objects: {
      patient: Prisma.$PatientsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      leukocyte: number | null
      neutrophils: number | null
      bandNeutrophils: number | null
      lymphocytes: number | null
      monocytes: number | null
      eosinophils: number | null
      basophils: number | null
      patient_id: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["leukocyte"]>
    composites: {}
  }

  type LeukocyteGetPayload<S extends boolean | null | undefined | LeukocyteDefaultArgs> = $Result.GetResult<Prisma.$LeukocytePayload, S>

  type LeukocyteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeukocyteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeukocyteCountAggregateInputType | true
    }

  export interface LeukocyteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Leukocyte'], meta: { name: 'Leukocyte' } }
    /**
     * Find zero or one Leukocyte that matches the filter.
     * @param {LeukocyteFindUniqueArgs} args - Arguments to find a Leukocyte
     * @example
     * // Get one Leukocyte
     * const leukocyte = await prisma.leukocyte.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeukocyteFindUniqueArgs>(args: SelectSubset<T, LeukocyteFindUniqueArgs<ExtArgs>>): Prisma__LeukocyteClient<$Result.GetResult<Prisma.$LeukocytePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leukocyte that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeukocyteFindUniqueOrThrowArgs} args - Arguments to find a Leukocyte
     * @example
     * // Get one Leukocyte
     * const leukocyte = await prisma.leukocyte.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeukocyteFindUniqueOrThrowArgs>(args: SelectSubset<T, LeukocyteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeukocyteClient<$Result.GetResult<Prisma.$LeukocytePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leukocyte that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeukocyteFindFirstArgs} args - Arguments to find a Leukocyte
     * @example
     * // Get one Leukocyte
     * const leukocyte = await prisma.leukocyte.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeukocyteFindFirstArgs>(args?: SelectSubset<T, LeukocyteFindFirstArgs<ExtArgs>>): Prisma__LeukocyteClient<$Result.GetResult<Prisma.$LeukocytePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leukocyte that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeukocyteFindFirstOrThrowArgs} args - Arguments to find a Leukocyte
     * @example
     * // Get one Leukocyte
     * const leukocyte = await prisma.leukocyte.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeukocyteFindFirstOrThrowArgs>(args?: SelectSubset<T, LeukocyteFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeukocyteClient<$Result.GetResult<Prisma.$LeukocytePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leukocytes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeukocyteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leukocytes
     * const leukocytes = await prisma.leukocyte.findMany()
     * 
     * // Get first 10 Leukocytes
     * const leukocytes = await prisma.leukocyte.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leukocyteWithIdOnly = await prisma.leukocyte.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeukocyteFindManyArgs>(args?: SelectSubset<T, LeukocyteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeukocytePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leukocyte.
     * @param {LeukocyteCreateArgs} args - Arguments to create a Leukocyte.
     * @example
     * // Create one Leukocyte
     * const Leukocyte = await prisma.leukocyte.create({
     *   data: {
     *     // ... data to create a Leukocyte
     *   }
     * })
     * 
     */
    create<T extends LeukocyteCreateArgs>(args: SelectSubset<T, LeukocyteCreateArgs<ExtArgs>>): Prisma__LeukocyteClient<$Result.GetResult<Prisma.$LeukocytePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leukocytes.
     * @param {LeukocyteCreateManyArgs} args - Arguments to create many Leukocytes.
     * @example
     * // Create many Leukocytes
     * const leukocyte = await prisma.leukocyte.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeukocyteCreateManyArgs>(args?: SelectSubset<T, LeukocyteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leukocytes and returns the data saved in the database.
     * @param {LeukocyteCreateManyAndReturnArgs} args - Arguments to create many Leukocytes.
     * @example
     * // Create many Leukocytes
     * const leukocyte = await prisma.leukocyte.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leukocytes and only return the `id`
     * const leukocyteWithIdOnly = await prisma.leukocyte.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeukocyteCreateManyAndReturnArgs>(args?: SelectSubset<T, LeukocyteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeukocytePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leukocyte.
     * @param {LeukocyteDeleteArgs} args - Arguments to delete one Leukocyte.
     * @example
     * // Delete one Leukocyte
     * const Leukocyte = await prisma.leukocyte.delete({
     *   where: {
     *     // ... filter to delete one Leukocyte
     *   }
     * })
     * 
     */
    delete<T extends LeukocyteDeleteArgs>(args: SelectSubset<T, LeukocyteDeleteArgs<ExtArgs>>): Prisma__LeukocyteClient<$Result.GetResult<Prisma.$LeukocytePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leukocyte.
     * @param {LeukocyteUpdateArgs} args - Arguments to update one Leukocyte.
     * @example
     * // Update one Leukocyte
     * const leukocyte = await prisma.leukocyte.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeukocyteUpdateArgs>(args: SelectSubset<T, LeukocyteUpdateArgs<ExtArgs>>): Prisma__LeukocyteClient<$Result.GetResult<Prisma.$LeukocytePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leukocytes.
     * @param {LeukocyteDeleteManyArgs} args - Arguments to filter Leukocytes to delete.
     * @example
     * // Delete a few Leukocytes
     * const { count } = await prisma.leukocyte.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeukocyteDeleteManyArgs>(args?: SelectSubset<T, LeukocyteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leukocytes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeukocyteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leukocytes
     * const leukocyte = await prisma.leukocyte.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeukocyteUpdateManyArgs>(args: SelectSubset<T, LeukocyteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leukocytes and returns the data updated in the database.
     * @param {LeukocyteUpdateManyAndReturnArgs} args - Arguments to update many Leukocytes.
     * @example
     * // Update many Leukocytes
     * const leukocyte = await prisma.leukocyte.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leukocytes and only return the `id`
     * const leukocyteWithIdOnly = await prisma.leukocyte.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeukocyteUpdateManyAndReturnArgs>(args: SelectSubset<T, LeukocyteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeukocytePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leukocyte.
     * @param {LeukocyteUpsertArgs} args - Arguments to update or create a Leukocyte.
     * @example
     * // Update or create a Leukocyte
     * const leukocyte = await prisma.leukocyte.upsert({
     *   create: {
     *     // ... data to create a Leukocyte
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leukocyte we want to update
     *   }
     * })
     */
    upsert<T extends LeukocyteUpsertArgs>(args: SelectSubset<T, LeukocyteUpsertArgs<ExtArgs>>): Prisma__LeukocyteClient<$Result.GetResult<Prisma.$LeukocytePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leukocytes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeukocyteCountArgs} args - Arguments to filter Leukocytes to count.
     * @example
     * // Count the number of Leukocytes
     * const count = await prisma.leukocyte.count({
     *   where: {
     *     // ... the filter for the Leukocytes we want to count
     *   }
     * })
    **/
    count<T extends LeukocyteCountArgs>(
      args?: Subset<T, LeukocyteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeukocyteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leukocyte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeukocyteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeukocyteAggregateArgs>(args: Subset<T, LeukocyteAggregateArgs>): Prisma.PrismaPromise<GetLeukocyteAggregateType<T>>

    /**
     * Group by Leukocyte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeukocyteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeukocyteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeukocyteGroupByArgs['orderBy'] }
        : { orderBy?: LeukocyteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeukocyteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeukocyteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Leukocyte model
   */
  readonly fields: LeukocyteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Leukocyte.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeukocyteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientsDefaultArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Leukocyte model
   */
  interface LeukocyteFieldRefs {
    readonly id: FieldRef<"Leukocyte", 'Int'>
    readonly leukocyte: FieldRef<"Leukocyte", 'Float'>
    readonly neutrophils: FieldRef<"Leukocyte", 'Float'>
    readonly bandNeutrophils: FieldRef<"Leukocyte", 'Float'>
    readonly lymphocytes: FieldRef<"Leukocyte", 'Float'>
    readonly monocytes: FieldRef<"Leukocyte", 'Float'>
    readonly eosinophils: FieldRef<"Leukocyte", 'Float'>
    readonly basophils: FieldRef<"Leukocyte", 'Float'>
    readonly patient_id: FieldRef<"Leukocyte", 'String'>
    readonly created_at: FieldRef<"Leukocyte", 'DateTime'>
    readonly updated_at: FieldRef<"Leukocyte", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Leukocyte findUnique
   */
  export type LeukocyteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leukocyte
     */
    select?: LeukocyteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leukocyte
     */
    omit?: LeukocyteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeukocyteInclude<ExtArgs> | null
    /**
     * Filter, which Leukocyte to fetch.
     */
    where: LeukocyteWhereUniqueInput
  }

  /**
   * Leukocyte findUniqueOrThrow
   */
  export type LeukocyteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leukocyte
     */
    select?: LeukocyteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leukocyte
     */
    omit?: LeukocyteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeukocyteInclude<ExtArgs> | null
    /**
     * Filter, which Leukocyte to fetch.
     */
    where: LeukocyteWhereUniqueInput
  }

  /**
   * Leukocyte findFirst
   */
  export type LeukocyteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leukocyte
     */
    select?: LeukocyteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leukocyte
     */
    omit?: LeukocyteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeukocyteInclude<ExtArgs> | null
    /**
     * Filter, which Leukocyte to fetch.
     */
    where?: LeukocyteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leukocytes to fetch.
     */
    orderBy?: LeukocyteOrderByWithRelationInput | LeukocyteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leukocytes.
     */
    cursor?: LeukocyteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leukocytes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leukocytes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leukocytes.
     */
    distinct?: LeukocyteScalarFieldEnum | LeukocyteScalarFieldEnum[]
  }

  /**
   * Leukocyte findFirstOrThrow
   */
  export type LeukocyteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leukocyte
     */
    select?: LeukocyteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leukocyte
     */
    omit?: LeukocyteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeukocyteInclude<ExtArgs> | null
    /**
     * Filter, which Leukocyte to fetch.
     */
    where?: LeukocyteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leukocytes to fetch.
     */
    orderBy?: LeukocyteOrderByWithRelationInput | LeukocyteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leukocytes.
     */
    cursor?: LeukocyteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leukocytes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leukocytes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leukocytes.
     */
    distinct?: LeukocyteScalarFieldEnum | LeukocyteScalarFieldEnum[]
  }

  /**
   * Leukocyte findMany
   */
  export type LeukocyteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leukocyte
     */
    select?: LeukocyteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leukocyte
     */
    omit?: LeukocyteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeukocyteInclude<ExtArgs> | null
    /**
     * Filter, which Leukocytes to fetch.
     */
    where?: LeukocyteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leukocytes to fetch.
     */
    orderBy?: LeukocyteOrderByWithRelationInput | LeukocyteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leukocytes.
     */
    cursor?: LeukocyteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leukocytes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leukocytes.
     */
    skip?: number
    distinct?: LeukocyteScalarFieldEnum | LeukocyteScalarFieldEnum[]
  }

  /**
   * Leukocyte create
   */
  export type LeukocyteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leukocyte
     */
    select?: LeukocyteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leukocyte
     */
    omit?: LeukocyteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeukocyteInclude<ExtArgs> | null
    /**
     * The data needed to create a Leukocyte.
     */
    data: XOR<LeukocyteCreateInput, LeukocyteUncheckedCreateInput>
  }

  /**
   * Leukocyte createMany
   */
  export type LeukocyteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leukocytes.
     */
    data: LeukocyteCreateManyInput | LeukocyteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Leukocyte createManyAndReturn
   */
  export type LeukocyteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leukocyte
     */
    select?: LeukocyteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leukocyte
     */
    omit?: LeukocyteOmit<ExtArgs> | null
    /**
     * The data used to create many Leukocytes.
     */
    data: LeukocyteCreateManyInput | LeukocyteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeukocyteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Leukocyte update
   */
  export type LeukocyteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leukocyte
     */
    select?: LeukocyteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leukocyte
     */
    omit?: LeukocyteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeukocyteInclude<ExtArgs> | null
    /**
     * The data needed to update a Leukocyte.
     */
    data: XOR<LeukocyteUpdateInput, LeukocyteUncheckedUpdateInput>
    /**
     * Choose, which Leukocyte to update.
     */
    where: LeukocyteWhereUniqueInput
  }

  /**
   * Leukocyte updateMany
   */
  export type LeukocyteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leukocytes.
     */
    data: XOR<LeukocyteUpdateManyMutationInput, LeukocyteUncheckedUpdateManyInput>
    /**
     * Filter which Leukocytes to update
     */
    where?: LeukocyteWhereInput
    /**
     * Limit how many Leukocytes to update.
     */
    limit?: number
  }

  /**
   * Leukocyte updateManyAndReturn
   */
  export type LeukocyteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leukocyte
     */
    select?: LeukocyteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leukocyte
     */
    omit?: LeukocyteOmit<ExtArgs> | null
    /**
     * The data used to update Leukocytes.
     */
    data: XOR<LeukocyteUpdateManyMutationInput, LeukocyteUncheckedUpdateManyInput>
    /**
     * Filter which Leukocytes to update
     */
    where?: LeukocyteWhereInput
    /**
     * Limit how many Leukocytes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeukocyteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Leukocyte upsert
   */
  export type LeukocyteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leukocyte
     */
    select?: LeukocyteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leukocyte
     */
    omit?: LeukocyteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeukocyteInclude<ExtArgs> | null
    /**
     * The filter to search for the Leukocyte to update in case it exists.
     */
    where: LeukocyteWhereUniqueInput
    /**
     * In case the Leukocyte found by the `where` argument doesn't exist, create a new Leukocyte with this data.
     */
    create: XOR<LeukocyteCreateInput, LeukocyteUncheckedCreateInput>
    /**
     * In case the Leukocyte was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeukocyteUpdateInput, LeukocyteUncheckedUpdateInput>
  }

  /**
   * Leukocyte delete
   */
  export type LeukocyteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leukocyte
     */
    select?: LeukocyteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leukocyte
     */
    omit?: LeukocyteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeukocyteInclude<ExtArgs> | null
    /**
     * Filter which Leukocyte to delete.
     */
    where: LeukocyteWhereUniqueInput
  }

  /**
   * Leukocyte deleteMany
   */
  export type LeukocyteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leukocytes to delete
     */
    where?: LeukocyteWhereInput
    /**
     * Limit how many Leukocytes to delete.
     */
    limit?: number
  }

  /**
   * Leukocyte without action
   */
  export type LeukocyteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leukocyte
     */
    select?: LeukocyteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leukocyte
     */
    omit?: LeukocyteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeukocyteInclude<ExtArgs> | null
  }


  /**
   * Model Platelets
   */

  export type AggregatePlatelets = {
    _count: PlateletsCountAggregateOutputType | null
    _avg: PlateletsAvgAggregateOutputType | null
    _sum: PlateletsSumAggregateOutputType | null
    _min: PlateletsMinAggregateOutputType | null
    _max: PlateletsMaxAggregateOutputType | null
  }

  export type PlateletsAvgAggregateOutputType = {
    id: number | null
    platelets: number | null
  }

  export type PlateletsSumAggregateOutputType = {
    id: number | null
    platelets: number | null
  }

  export type PlateletsMinAggregateOutputType = {
    id: number | null
    platelets: number | null
    patient_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PlateletsMaxAggregateOutputType = {
    id: number | null
    platelets: number | null
    patient_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PlateletsCountAggregateOutputType = {
    id: number
    platelets: number
    patient_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PlateletsAvgAggregateInputType = {
    id?: true
    platelets?: true
  }

  export type PlateletsSumAggregateInputType = {
    id?: true
    platelets?: true
  }

  export type PlateletsMinAggregateInputType = {
    id?: true
    platelets?: true
    patient_id?: true
    created_at?: true
    updated_at?: true
  }

  export type PlateletsMaxAggregateInputType = {
    id?: true
    platelets?: true
    patient_id?: true
    created_at?: true
    updated_at?: true
  }

  export type PlateletsCountAggregateInputType = {
    id?: true
    platelets?: true
    patient_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PlateletsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Platelets to aggregate.
     */
    where?: PlateletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platelets to fetch.
     */
    orderBy?: PlateletsOrderByWithRelationInput | PlateletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlateletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platelets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platelets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Platelets
    **/
    _count?: true | PlateletsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlateletsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlateletsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlateletsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlateletsMaxAggregateInputType
  }

  export type GetPlateletsAggregateType<T extends PlateletsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlatelets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlatelets[P]>
      : GetScalarType<T[P], AggregatePlatelets[P]>
  }




  export type PlateletsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlateletsWhereInput
    orderBy?: PlateletsOrderByWithAggregationInput | PlateletsOrderByWithAggregationInput[]
    by: PlateletsScalarFieldEnum[] | PlateletsScalarFieldEnum
    having?: PlateletsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlateletsCountAggregateInputType | true
    _avg?: PlateletsAvgAggregateInputType
    _sum?: PlateletsSumAggregateInputType
    _min?: PlateletsMinAggregateInputType
    _max?: PlateletsMaxAggregateInputType
  }

  export type PlateletsGroupByOutputType = {
    id: number
    platelets: number | null
    patient_id: string
    created_at: Date
    updated_at: Date
    _count: PlateletsCountAggregateOutputType | null
    _avg: PlateletsAvgAggregateOutputType | null
    _sum: PlateletsSumAggregateOutputType | null
    _min: PlateletsMinAggregateOutputType | null
    _max: PlateletsMaxAggregateOutputType | null
  }

  type GetPlateletsGroupByPayload<T extends PlateletsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlateletsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlateletsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlateletsGroupByOutputType[P]>
            : GetScalarType<T[P], PlateletsGroupByOutputType[P]>
        }
      >
    >


  export type PlateletsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platelets?: boolean
    patient_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["platelets"]>

  export type PlateletsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platelets?: boolean
    patient_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["platelets"]>

  export type PlateletsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platelets?: boolean
    patient_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["platelets"]>

  export type PlateletsSelectScalar = {
    id?: boolean
    platelets?: boolean
    patient_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PlateletsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "platelets" | "patient_id" | "created_at" | "updated_at", ExtArgs["result"]["platelets"]>
  export type PlateletsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }
  export type PlateletsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }
  export type PlateletsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }

  export type $PlateletsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Platelets"
    objects: {
      patient: Prisma.$PatientsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      platelets: number | null
      patient_id: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["platelets"]>
    composites: {}
  }

  type PlateletsGetPayload<S extends boolean | null | undefined | PlateletsDefaultArgs> = $Result.GetResult<Prisma.$PlateletsPayload, S>

  type PlateletsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlateletsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlateletsCountAggregateInputType | true
    }

  export interface PlateletsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Platelets'], meta: { name: 'Platelets' } }
    /**
     * Find zero or one Platelets that matches the filter.
     * @param {PlateletsFindUniqueArgs} args - Arguments to find a Platelets
     * @example
     * // Get one Platelets
     * const platelets = await prisma.platelets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlateletsFindUniqueArgs>(args: SelectSubset<T, PlateletsFindUniqueArgs<ExtArgs>>): Prisma__PlateletsClient<$Result.GetResult<Prisma.$PlateletsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Platelets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlateletsFindUniqueOrThrowArgs} args - Arguments to find a Platelets
     * @example
     * // Get one Platelets
     * const platelets = await prisma.platelets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlateletsFindUniqueOrThrowArgs>(args: SelectSubset<T, PlateletsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlateletsClient<$Result.GetResult<Prisma.$PlateletsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Platelets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlateletsFindFirstArgs} args - Arguments to find a Platelets
     * @example
     * // Get one Platelets
     * const platelets = await prisma.platelets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlateletsFindFirstArgs>(args?: SelectSubset<T, PlateletsFindFirstArgs<ExtArgs>>): Prisma__PlateletsClient<$Result.GetResult<Prisma.$PlateletsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Platelets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlateletsFindFirstOrThrowArgs} args - Arguments to find a Platelets
     * @example
     * // Get one Platelets
     * const platelets = await prisma.platelets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlateletsFindFirstOrThrowArgs>(args?: SelectSubset<T, PlateletsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlateletsClient<$Result.GetResult<Prisma.$PlateletsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Platelets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlateletsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Platelets
     * const platelets = await prisma.platelets.findMany()
     * 
     * // Get first 10 Platelets
     * const platelets = await prisma.platelets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plateletsWithIdOnly = await prisma.platelets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlateletsFindManyArgs>(args?: SelectSubset<T, PlateletsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlateletsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Platelets.
     * @param {PlateletsCreateArgs} args - Arguments to create a Platelets.
     * @example
     * // Create one Platelets
     * const Platelets = await prisma.platelets.create({
     *   data: {
     *     // ... data to create a Platelets
     *   }
     * })
     * 
     */
    create<T extends PlateletsCreateArgs>(args: SelectSubset<T, PlateletsCreateArgs<ExtArgs>>): Prisma__PlateletsClient<$Result.GetResult<Prisma.$PlateletsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Platelets.
     * @param {PlateletsCreateManyArgs} args - Arguments to create many Platelets.
     * @example
     * // Create many Platelets
     * const platelets = await prisma.platelets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlateletsCreateManyArgs>(args?: SelectSubset<T, PlateletsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Platelets and returns the data saved in the database.
     * @param {PlateletsCreateManyAndReturnArgs} args - Arguments to create many Platelets.
     * @example
     * // Create many Platelets
     * const platelets = await prisma.platelets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Platelets and only return the `id`
     * const plateletsWithIdOnly = await prisma.platelets.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlateletsCreateManyAndReturnArgs>(args?: SelectSubset<T, PlateletsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlateletsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Platelets.
     * @param {PlateletsDeleteArgs} args - Arguments to delete one Platelets.
     * @example
     * // Delete one Platelets
     * const Platelets = await prisma.platelets.delete({
     *   where: {
     *     // ... filter to delete one Platelets
     *   }
     * })
     * 
     */
    delete<T extends PlateletsDeleteArgs>(args: SelectSubset<T, PlateletsDeleteArgs<ExtArgs>>): Prisma__PlateletsClient<$Result.GetResult<Prisma.$PlateletsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Platelets.
     * @param {PlateletsUpdateArgs} args - Arguments to update one Platelets.
     * @example
     * // Update one Platelets
     * const platelets = await prisma.platelets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlateletsUpdateArgs>(args: SelectSubset<T, PlateletsUpdateArgs<ExtArgs>>): Prisma__PlateletsClient<$Result.GetResult<Prisma.$PlateletsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Platelets.
     * @param {PlateletsDeleteManyArgs} args - Arguments to filter Platelets to delete.
     * @example
     * // Delete a few Platelets
     * const { count } = await prisma.platelets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlateletsDeleteManyArgs>(args?: SelectSubset<T, PlateletsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Platelets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlateletsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Platelets
     * const platelets = await prisma.platelets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlateletsUpdateManyArgs>(args: SelectSubset<T, PlateletsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Platelets and returns the data updated in the database.
     * @param {PlateletsUpdateManyAndReturnArgs} args - Arguments to update many Platelets.
     * @example
     * // Update many Platelets
     * const platelets = await prisma.platelets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Platelets and only return the `id`
     * const plateletsWithIdOnly = await prisma.platelets.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlateletsUpdateManyAndReturnArgs>(args: SelectSubset<T, PlateletsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlateletsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Platelets.
     * @param {PlateletsUpsertArgs} args - Arguments to update or create a Platelets.
     * @example
     * // Update or create a Platelets
     * const platelets = await prisma.platelets.upsert({
     *   create: {
     *     // ... data to create a Platelets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Platelets we want to update
     *   }
     * })
     */
    upsert<T extends PlateletsUpsertArgs>(args: SelectSubset<T, PlateletsUpsertArgs<ExtArgs>>): Prisma__PlateletsClient<$Result.GetResult<Prisma.$PlateletsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Platelets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlateletsCountArgs} args - Arguments to filter Platelets to count.
     * @example
     * // Count the number of Platelets
     * const count = await prisma.platelets.count({
     *   where: {
     *     // ... the filter for the Platelets we want to count
     *   }
     * })
    **/
    count<T extends PlateletsCountArgs>(
      args?: Subset<T, PlateletsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlateletsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Platelets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlateletsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlateletsAggregateArgs>(args: Subset<T, PlateletsAggregateArgs>): Prisma.PrismaPromise<GetPlateletsAggregateType<T>>

    /**
     * Group by Platelets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlateletsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlateletsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlateletsGroupByArgs['orderBy'] }
        : { orderBy?: PlateletsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlateletsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlateletsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Platelets model
   */
  readonly fields: PlateletsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Platelets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlateletsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientsDefaultArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Platelets model
   */
  interface PlateletsFieldRefs {
    readonly id: FieldRef<"Platelets", 'Int'>
    readonly platelets: FieldRef<"Platelets", 'Float'>
    readonly patient_id: FieldRef<"Platelets", 'String'>
    readonly created_at: FieldRef<"Platelets", 'DateTime'>
    readonly updated_at: FieldRef<"Platelets", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Platelets findUnique
   */
  export type PlateletsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platelets
     */
    select?: PlateletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platelets
     */
    omit?: PlateletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlateletsInclude<ExtArgs> | null
    /**
     * Filter, which Platelets to fetch.
     */
    where: PlateletsWhereUniqueInput
  }

  /**
   * Platelets findUniqueOrThrow
   */
  export type PlateletsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platelets
     */
    select?: PlateletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platelets
     */
    omit?: PlateletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlateletsInclude<ExtArgs> | null
    /**
     * Filter, which Platelets to fetch.
     */
    where: PlateletsWhereUniqueInput
  }

  /**
   * Platelets findFirst
   */
  export type PlateletsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platelets
     */
    select?: PlateletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platelets
     */
    omit?: PlateletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlateletsInclude<ExtArgs> | null
    /**
     * Filter, which Platelets to fetch.
     */
    where?: PlateletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platelets to fetch.
     */
    orderBy?: PlateletsOrderByWithRelationInput | PlateletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platelets.
     */
    cursor?: PlateletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platelets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platelets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platelets.
     */
    distinct?: PlateletsScalarFieldEnum | PlateletsScalarFieldEnum[]
  }

  /**
   * Platelets findFirstOrThrow
   */
  export type PlateletsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platelets
     */
    select?: PlateletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platelets
     */
    omit?: PlateletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlateletsInclude<ExtArgs> | null
    /**
     * Filter, which Platelets to fetch.
     */
    where?: PlateletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platelets to fetch.
     */
    orderBy?: PlateletsOrderByWithRelationInput | PlateletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platelets.
     */
    cursor?: PlateletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platelets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platelets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platelets.
     */
    distinct?: PlateletsScalarFieldEnum | PlateletsScalarFieldEnum[]
  }

  /**
   * Platelets findMany
   */
  export type PlateletsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platelets
     */
    select?: PlateletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platelets
     */
    omit?: PlateletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlateletsInclude<ExtArgs> | null
    /**
     * Filter, which Platelets to fetch.
     */
    where?: PlateletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platelets to fetch.
     */
    orderBy?: PlateletsOrderByWithRelationInput | PlateletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Platelets.
     */
    cursor?: PlateletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platelets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platelets.
     */
    skip?: number
    distinct?: PlateletsScalarFieldEnum | PlateletsScalarFieldEnum[]
  }

  /**
   * Platelets create
   */
  export type PlateletsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platelets
     */
    select?: PlateletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platelets
     */
    omit?: PlateletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlateletsInclude<ExtArgs> | null
    /**
     * The data needed to create a Platelets.
     */
    data: XOR<PlateletsCreateInput, PlateletsUncheckedCreateInput>
  }

  /**
   * Platelets createMany
   */
  export type PlateletsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Platelets.
     */
    data: PlateletsCreateManyInput | PlateletsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Platelets createManyAndReturn
   */
  export type PlateletsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platelets
     */
    select?: PlateletsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Platelets
     */
    omit?: PlateletsOmit<ExtArgs> | null
    /**
     * The data used to create many Platelets.
     */
    data: PlateletsCreateManyInput | PlateletsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlateletsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Platelets update
   */
  export type PlateletsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platelets
     */
    select?: PlateletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platelets
     */
    omit?: PlateletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlateletsInclude<ExtArgs> | null
    /**
     * The data needed to update a Platelets.
     */
    data: XOR<PlateletsUpdateInput, PlateletsUncheckedUpdateInput>
    /**
     * Choose, which Platelets to update.
     */
    where: PlateletsWhereUniqueInput
  }

  /**
   * Platelets updateMany
   */
  export type PlateletsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Platelets.
     */
    data: XOR<PlateletsUpdateManyMutationInput, PlateletsUncheckedUpdateManyInput>
    /**
     * Filter which Platelets to update
     */
    where?: PlateletsWhereInput
    /**
     * Limit how many Platelets to update.
     */
    limit?: number
  }

  /**
   * Platelets updateManyAndReturn
   */
  export type PlateletsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platelets
     */
    select?: PlateletsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Platelets
     */
    omit?: PlateletsOmit<ExtArgs> | null
    /**
     * The data used to update Platelets.
     */
    data: XOR<PlateletsUpdateManyMutationInput, PlateletsUncheckedUpdateManyInput>
    /**
     * Filter which Platelets to update
     */
    where?: PlateletsWhereInput
    /**
     * Limit how many Platelets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlateletsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Platelets upsert
   */
  export type PlateletsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platelets
     */
    select?: PlateletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platelets
     */
    omit?: PlateletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlateletsInclude<ExtArgs> | null
    /**
     * The filter to search for the Platelets to update in case it exists.
     */
    where: PlateletsWhereUniqueInput
    /**
     * In case the Platelets found by the `where` argument doesn't exist, create a new Platelets with this data.
     */
    create: XOR<PlateletsCreateInput, PlateletsUncheckedCreateInput>
    /**
     * In case the Platelets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlateletsUpdateInput, PlateletsUncheckedUpdateInput>
  }

  /**
   * Platelets delete
   */
  export type PlateletsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platelets
     */
    select?: PlateletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platelets
     */
    omit?: PlateletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlateletsInclude<ExtArgs> | null
    /**
     * Filter which Platelets to delete.
     */
    where: PlateletsWhereUniqueInput
  }

  /**
   * Platelets deleteMany
   */
  export type PlateletsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Platelets to delete
     */
    where?: PlateletsWhereInput
    /**
     * Limit how many Platelets to delete.
     */
    limit?: number
  }

  /**
   * Platelets without action
   */
  export type PlateletsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platelets
     */
    select?: PlateletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platelets
     */
    omit?: PlateletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlateletsInclude<ExtArgs> | null
  }


  /**
   * Model Urine
   */

  export type AggregateUrine = {
    _count: UrineCountAggregateOutputType | null
    _avg: UrineAvgAggregateOutputType | null
    _sum: UrineSumAggregateOutputType | null
    _min: UrineMinAggregateOutputType | null
    _max: UrineMaxAggregateOutputType | null
  }

  export type UrineAvgAggregateOutputType = {
    id: number | null
    volume: number | null
    ph: number | null
    density: number | null
  }

  export type UrineSumAggregateOutputType = {
    id: number | null
    volume: number | null
    ph: number | null
    density: number | null
  }

  export type UrineMinAggregateOutputType = {
    id: number | null
    volume: number | null
    color: string | null
    ph: number | null
    density: number | null
    protein: string | null
    glucose: string | null
    ketones: string | null
    nitrites: boolean | null
    hemoglobin: string | null
    urobilinogen: string | null
    sed_leukocytes: string | null
    sed_erythrocytes: string | null
    sed_epithelial: string | null
    sed_mucus: string | null
    sed_cylinders: string | null
    sed_crystals: string | null
    sed_bacteria: string | null
    created_at: Date | null
    updated_at: Date | null
    patient_id: string | null
  }

  export type UrineMaxAggregateOutputType = {
    id: number | null
    volume: number | null
    color: string | null
    ph: number | null
    density: number | null
    protein: string | null
    glucose: string | null
    ketones: string | null
    nitrites: boolean | null
    hemoglobin: string | null
    urobilinogen: string | null
    sed_leukocytes: string | null
    sed_erythrocytes: string | null
    sed_epithelial: string | null
    sed_mucus: string | null
    sed_cylinders: string | null
    sed_crystals: string | null
    sed_bacteria: string | null
    created_at: Date | null
    updated_at: Date | null
    patient_id: string | null
  }

  export type UrineCountAggregateOutputType = {
    id: number
    volume: number
    color: number
    ph: number
    density: number
    protein: number
    glucose: number
    ketones: number
    nitrites: number
    hemoglobin: number
    urobilinogen: number
    sed_leukocytes: number
    sed_erythrocytes: number
    sed_epithelial: number
    sed_mucus: number
    sed_cylinders: number
    sed_crystals: number
    sed_bacteria: number
    created_at: number
    updated_at: number
    patient_id: number
    _all: number
  }


  export type UrineAvgAggregateInputType = {
    id?: true
    volume?: true
    ph?: true
    density?: true
  }

  export type UrineSumAggregateInputType = {
    id?: true
    volume?: true
    ph?: true
    density?: true
  }

  export type UrineMinAggregateInputType = {
    id?: true
    volume?: true
    color?: true
    ph?: true
    density?: true
    protein?: true
    glucose?: true
    ketones?: true
    nitrites?: true
    hemoglobin?: true
    urobilinogen?: true
    sed_leukocytes?: true
    sed_erythrocytes?: true
    sed_epithelial?: true
    sed_mucus?: true
    sed_cylinders?: true
    sed_crystals?: true
    sed_bacteria?: true
    created_at?: true
    updated_at?: true
    patient_id?: true
  }

  export type UrineMaxAggregateInputType = {
    id?: true
    volume?: true
    color?: true
    ph?: true
    density?: true
    protein?: true
    glucose?: true
    ketones?: true
    nitrites?: true
    hemoglobin?: true
    urobilinogen?: true
    sed_leukocytes?: true
    sed_erythrocytes?: true
    sed_epithelial?: true
    sed_mucus?: true
    sed_cylinders?: true
    sed_crystals?: true
    sed_bacteria?: true
    created_at?: true
    updated_at?: true
    patient_id?: true
  }

  export type UrineCountAggregateInputType = {
    id?: true
    volume?: true
    color?: true
    ph?: true
    density?: true
    protein?: true
    glucose?: true
    ketones?: true
    nitrites?: true
    hemoglobin?: true
    urobilinogen?: true
    sed_leukocytes?: true
    sed_erythrocytes?: true
    sed_epithelial?: true
    sed_mucus?: true
    sed_cylinders?: true
    sed_crystals?: true
    sed_bacteria?: true
    created_at?: true
    updated_at?: true
    patient_id?: true
    _all?: true
  }

  export type UrineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Urine to aggregate.
     */
    where?: UrineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urines to fetch.
     */
    orderBy?: UrineOrderByWithRelationInput | UrineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UrineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Urines
    **/
    _count?: true | UrineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UrineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UrineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UrineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UrineMaxAggregateInputType
  }

  export type GetUrineAggregateType<T extends UrineAggregateArgs> = {
        [P in keyof T & keyof AggregateUrine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUrine[P]>
      : GetScalarType<T[P], AggregateUrine[P]>
  }




  export type UrineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UrineWhereInput
    orderBy?: UrineOrderByWithAggregationInput | UrineOrderByWithAggregationInput[]
    by: UrineScalarFieldEnum[] | UrineScalarFieldEnum
    having?: UrineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UrineCountAggregateInputType | true
    _avg?: UrineAvgAggregateInputType
    _sum?: UrineSumAggregateInputType
    _min?: UrineMinAggregateInputType
    _max?: UrineMaxAggregateInputType
  }

  export type UrineGroupByOutputType = {
    id: number
    volume: number | null
    color: string | null
    ph: number | null
    density: number | null
    protein: string | null
    glucose: string | null
    ketones: string | null
    nitrites: boolean | null
    hemoglobin: string | null
    urobilinogen: string | null
    sed_leukocytes: string | null
    sed_erythrocytes: string | null
    sed_epithelial: string | null
    sed_mucus: string | null
    sed_cylinders: string | null
    sed_crystals: string | null
    sed_bacteria: string | null
    created_at: Date
    updated_at: Date
    patient_id: string
    _count: UrineCountAggregateOutputType | null
    _avg: UrineAvgAggregateOutputType | null
    _sum: UrineSumAggregateOutputType | null
    _min: UrineMinAggregateOutputType | null
    _max: UrineMaxAggregateOutputType | null
  }

  type GetUrineGroupByPayload<T extends UrineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UrineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UrineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UrineGroupByOutputType[P]>
            : GetScalarType<T[P], UrineGroupByOutputType[P]>
        }
      >
    >


  export type UrineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    volume?: boolean
    color?: boolean
    ph?: boolean
    density?: boolean
    protein?: boolean
    glucose?: boolean
    ketones?: boolean
    nitrites?: boolean
    hemoglobin?: boolean
    urobilinogen?: boolean
    sed_leukocytes?: boolean
    sed_erythrocytes?: boolean
    sed_epithelial?: boolean
    sed_mucus?: boolean
    sed_cylinders?: boolean
    sed_crystals?: boolean
    sed_bacteria?: boolean
    created_at?: boolean
    updated_at?: boolean
    patient_id?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["urine"]>

  export type UrineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    volume?: boolean
    color?: boolean
    ph?: boolean
    density?: boolean
    protein?: boolean
    glucose?: boolean
    ketones?: boolean
    nitrites?: boolean
    hemoglobin?: boolean
    urobilinogen?: boolean
    sed_leukocytes?: boolean
    sed_erythrocytes?: boolean
    sed_epithelial?: boolean
    sed_mucus?: boolean
    sed_cylinders?: boolean
    sed_crystals?: boolean
    sed_bacteria?: boolean
    created_at?: boolean
    updated_at?: boolean
    patient_id?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["urine"]>

  export type UrineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    volume?: boolean
    color?: boolean
    ph?: boolean
    density?: boolean
    protein?: boolean
    glucose?: boolean
    ketones?: boolean
    nitrites?: boolean
    hemoglobin?: boolean
    urobilinogen?: boolean
    sed_leukocytes?: boolean
    sed_erythrocytes?: boolean
    sed_epithelial?: boolean
    sed_mucus?: boolean
    sed_cylinders?: boolean
    sed_crystals?: boolean
    sed_bacteria?: boolean
    created_at?: boolean
    updated_at?: boolean
    patient_id?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["urine"]>

  export type UrineSelectScalar = {
    id?: boolean
    volume?: boolean
    color?: boolean
    ph?: boolean
    density?: boolean
    protein?: boolean
    glucose?: boolean
    ketones?: boolean
    nitrites?: boolean
    hemoglobin?: boolean
    urobilinogen?: boolean
    sed_leukocytes?: boolean
    sed_erythrocytes?: boolean
    sed_epithelial?: boolean
    sed_mucus?: boolean
    sed_cylinders?: boolean
    sed_crystals?: boolean
    sed_bacteria?: boolean
    created_at?: boolean
    updated_at?: boolean
    patient_id?: boolean
  }

  export type UrineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "volume" | "color" | "ph" | "density" | "protein" | "glucose" | "ketones" | "nitrites" | "hemoglobin" | "urobilinogen" | "sed_leukocytes" | "sed_erythrocytes" | "sed_epithelial" | "sed_mucus" | "sed_cylinders" | "sed_crystals" | "sed_bacteria" | "created_at" | "updated_at" | "patient_id", ExtArgs["result"]["urine"]>
  export type UrineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }
  export type UrineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }
  export type UrineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }

  export type $UrinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Urine"
    objects: {
      patient: Prisma.$PatientsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      volume: number | null
      color: string | null
      ph: number | null
      density: number | null
      protein: string | null
      glucose: string | null
      ketones: string | null
      nitrites: boolean | null
      hemoglobin: string | null
      urobilinogen: string | null
      sed_leukocytes: string | null
      sed_erythrocytes: string | null
      sed_epithelial: string | null
      sed_mucus: string | null
      sed_cylinders: string | null
      sed_crystals: string | null
      sed_bacteria: string | null
      created_at: Date
      updated_at: Date
      patient_id: string
    }, ExtArgs["result"]["urine"]>
    composites: {}
  }

  type UrineGetPayload<S extends boolean | null | undefined | UrineDefaultArgs> = $Result.GetResult<Prisma.$UrinePayload, S>

  type UrineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UrineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UrineCountAggregateInputType | true
    }

  export interface UrineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Urine'], meta: { name: 'Urine' } }
    /**
     * Find zero or one Urine that matches the filter.
     * @param {UrineFindUniqueArgs} args - Arguments to find a Urine
     * @example
     * // Get one Urine
     * const urine = await prisma.urine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UrineFindUniqueArgs>(args: SelectSubset<T, UrineFindUniqueArgs<ExtArgs>>): Prisma__UrineClient<$Result.GetResult<Prisma.$UrinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Urine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UrineFindUniqueOrThrowArgs} args - Arguments to find a Urine
     * @example
     * // Get one Urine
     * const urine = await prisma.urine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UrineFindUniqueOrThrowArgs>(args: SelectSubset<T, UrineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UrineClient<$Result.GetResult<Prisma.$UrinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Urine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrineFindFirstArgs} args - Arguments to find a Urine
     * @example
     * // Get one Urine
     * const urine = await prisma.urine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UrineFindFirstArgs>(args?: SelectSubset<T, UrineFindFirstArgs<ExtArgs>>): Prisma__UrineClient<$Result.GetResult<Prisma.$UrinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Urine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrineFindFirstOrThrowArgs} args - Arguments to find a Urine
     * @example
     * // Get one Urine
     * const urine = await prisma.urine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UrineFindFirstOrThrowArgs>(args?: SelectSubset<T, UrineFindFirstOrThrowArgs<ExtArgs>>): Prisma__UrineClient<$Result.GetResult<Prisma.$UrinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Urines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Urines
     * const urines = await prisma.urine.findMany()
     * 
     * // Get first 10 Urines
     * const urines = await prisma.urine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const urineWithIdOnly = await prisma.urine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UrineFindManyArgs>(args?: SelectSubset<T, UrineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Urine.
     * @param {UrineCreateArgs} args - Arguments to create a Urine.
     * @example
     * // Create one Urine
     * const Urine = await prisma.urine.create({
     *   data: {
     *     // ... data to create a Urine
     *   }
     * })
     * 
     */
    create<T extends UrineCreateArgs>(args: SelectSubset<T, UrineCreateArgs<ExtArgs>>): Prisma__UrineClient<$Result.GetResult<Prisma.$UrinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Urines.
     * @param {UrineCreateManyArgs} args - Arguments to create many Urines.
     * @example
     * // Create many Urines
     * const urine = await prisma.urine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UrineCreateManyArgs>(args?: SelectSubset<T, UrineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Urines and returns the data saved in the database.
     * @param {UrineCreateManyAndReturnArgs} args - Arguments to create many Urines.
     * @example
     * // Create many Urines
     * const urine = await prisma.urine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Urines and only return the `id`
     * const urineWithIdOnly = await prisma.urine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UrineCreateManyAndReturnArgs>(args?: SelectSubset<T, UrineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Urine.
     * @param {UrineDeleteArgs} args - Arguments to delete one Urine.
     * @example
     * // Delete one Urine
     * const Urine = await prisma.urine.delete({
     *   where: {
     *     // ... filter to delete one Urine
     *   }
     * })
     * 
     */
    delete<T extends UrineDeleteArgs>(args: SelectSubset<T, UrineDeleteArgs<ExtArgs>>): Prisma__UrineClient<$Result.GetResult<Prisma.$UrinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Urine.
     * @param {UrineUpdateArgs} args - Arguments to update one Urine.
     * @example
     * // Update one Urine
     * const urine = await prisma.urine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UrineUpdateArgs>(args: SelectSubset<T, UrineUpdateArgs<ExtArgs>>): Prisma__UrineClient<$Result.GetResult<Prisma.$UrinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Urines.
     * @param {UrineDeleteManyArgs} args - Arguments to filter Urines to delete.
     * @example
     * // Delete a few Urines
     * const { count } = await prisma.urine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UrineDeleteManyArgs>(args?: SelectSubset<T, UrineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Urines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Urines
     * const urine = await prisma.urine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UrineUpdateManyArgs>(args: SelectSubset<T, UrineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Urines and returns the data updated in the database.
     * @param {UrineUpdateManyAndReturnArgs} args - Arguments to update many Urines.
     * @example
     * // Update many Urines
     * const urine = await prisma.urine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Urines and only return the `id`
     * const urineWithIdOnly = await prisma.urine.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UrineUpdateManyAndReturnArgs>(args: SelectSubset<T, UrineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Urine.
     * @param {UrineUpsertArgs} args - Arguments to update or create a Urine.
     * @example
     * // Update or create a Urine
     * const urine = await prisma.urine.upsert({
     *   create: {
     *     // ... data to create a Urine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Urine we want to update
     *   }
     * })
     */
    upsert<T extends UrineUpsertArgs>(args: SelectSubset<T, UrineUpsertArgs<ExtArgs>>): Prisma__UrineClient<$Result.GetResult<Prisma.$UrinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Urines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrineCountArgs} args - Arguments to filter Urines to count.
     * @example
     * // Count the number of Urines
     * const count = await prisma.urine.count({
     *   where: {
     *     // ... the filter for the Urines we want to count
     *   }
     * })
    **/
    count<T extends UrineCountArgs>(
      args?: Subset<T, UrineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UrineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Urine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UrineAggregateArgs>(args: Subset<T, UrineAggregateArgs>): Prisma.PrismaPromise<GetUrineAggregateType<T>>

    /**
     * Group by Urine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UrineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UrineGroupByArgs['orderBy'] }
        : { orderBy?: UrineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UrineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUrineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Urine model
   */
  readonly fields: UrineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Urine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UrineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientsDefaultArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Urine model
   */
  interface UrineFieldRefs {
    readonly id: FieldRef<"Urine", 'Int'>
    readonly volume: FieldRef<"Urine", 'Float'>
    readonly color: FieldRef<"Urine", 'String'>
    readonly ph: FieldRef<"Urine", 'Float'>
    readonly density: FieldRef<"Urine", 'Float'>
    readonly protein: FieldRef<"Urine", 'String'>
    readonly glucose: FieldRef<"Urine", 'String'>
    readonly ketones: FieldRef<"Urine", 'String'>
    readonly nitrites: FieldRef<"Urine", 'Boolean'>
    readonly hemoglobin: FieldRef<"Urine", 'String'>
    readonly urobilinogen: FieldRef<"Urine", 'String'>
    readonly sed_leukocytes: FieldRef<"Urine", 'String'>
    readonly sed_erythrocytes: FieldRef<"Urine", 'String'>
    readonly sed_epithelial: FieldRef<"Urine", 'String'>
    readonly sed_mucus: FieldRef<"Urine", 'String'>
    readonly sed_cylinders: FieldRef<"Urine", 'String'>
    readonly sed_crystals: FieldRef<"Urine", 'String'>
    readonly sed_bacteria: FieldRef<"Urine", 'String'>
    readonly created_at: FieldRef<"Urine", 'DateTime'>
    readonly updated_at: FieldRef<"Urine", 'DateTime'>
    readonly patient_id: FieldRef<"Urine", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Urine findUnique
   */
  export type UrineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urine
     */
    select?: UrineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Urine
     */
    omit?: UrineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrineInclude<ExtArgs> | null
    /**
     * Filter, which Urine to fetch.
     */
    where: UrineWhereUniqueInput
  }

  /**
   * Urine findUniqueOrThrow
   */
  export type UrineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urine
     */
    select?: UrineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Urine
     */
    omit?: UrineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrineInclude<ExtArgs> | null
    /**
     * Filter, which Urine to fetch.
     */
    where: UrineWhereUniqueInput
  }

  /**
   * Urine findFirst
   */
  export type UrineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urine
     */
    select?: UrineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Urine
     */
    omit?: UrineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrineInclude<ExtArgs> | null
    /**
     * Filter, which Urine to fetch.
     */
    where?: UrineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urines to fetch.
     */
    orderBy?: UrineOrderByWithRelationInput | UrineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Urines.
     */
    cursor?: UrineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Urines.
     */
    distinct?: UrineScalarFieldEnum | UrineScalarFieldEnum[]
  }

  /**
   * Urine findFirstOrThrow
   */
  export type UrineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urine
     */
    select?: UrineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Urine
     */
    omit?: UrineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrineInclude<ExtArgs> | null
    /**
     * Filter, which Urine to fetch.
     */
    where?: UrineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urines to fetch.
     */
    orderBy?: UrineOrderByWithRelationInput | UrineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Urines.
     */
    cursor?: UrineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Urines.
     */
    distinct?: UrineScalarFieldEnum | UrineScalarFieldEnum[]
  }

  /**
   * Urine findMany
   */
  export type UrineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urine
     */
    select?: UrineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Urine
     */
    omit?: UrineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrineInclude<ExtArgs> | null
    /**
     * Filter, which Urines to fetch.
     */
    where?: UrineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urines to fetch.
     */
    orderBy?: UrineOrderByWithRelationInput | UrineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Urines.
     */
    cursor?: UrineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urines.
     */
    skip?: number
    distinct?: UrineScalarFieldEnum | UrineScalarFieldEnum[]
  }

  /**
   * Urine create
   */
  export type UrineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urine
     */
    select?: UrineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Urine
     */
    omit?: UrineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrineInclude<ExtArgs> | null
    /**
     * The data needed to create a Urine.
     */
    data: XOR<UrineCreateInput, UrineUncheckedCreateInput>
  }

  /**
   * Urine createMany
   */
  export type UrineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Urines.
     */
    data: UrineCreateManyInput | UrineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Urine createManyAndReturn
   */
  export type UrineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urine
     */
    select?: UrineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Urine
     */
    omit?: UrineOmit<ExtArgs> | null
    /**
     * The data used to create many Urines.
     */
    data: UrineCreateManyInput | UrineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Urine update
   */
  export type UrineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urine
     */
    select?: UrineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Urine
     */
    omit?: UrineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrineInclude<ExtArgs> | null
    /**
     * The data needed to update a Urine.
     */
    data: XOR<UrineUpdateInput, UrineUncheckedUpdateInput>
    /**
     * Choose, which Urine to update.
     */
    where: UrineWhereUniqueInput
  }

  /**
   * Urine updateMany
   */
  export type UrineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Urines.
     */
    data: XOR<UrineUpdateManyMutationInput, UrineUncheckedUpdateManyInput>
    /**
     * Filter which Urines to update
     */
    where?: UrineWhereInput
    /**
     * Limit how many Urines to update.
     */
    limit?: number
  }

  /**
   * Urine updateManyAndReturn
   */
  export type UrineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urine
     */
    select?: UrineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Urine
     */
    omit?: UrineOmit<ExtArgs> | null
    /**
     * The data used to update Urines.
     */
    data: XOR<UrineUpdateManyMutationInput, UrineUncheckedUpdateManyInput>
    /**
     * Filter which Urines to update
     */
    where?: UrineWhereInput
    /**
     * Limit how many Urines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Urine upsert
   */
  export type UrineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urine
     */
    select?: UrineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Urine
     */
    omit?: UrineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrineInclude<ExtArgs> | null
    /**
     * The filter to search for the Urine to update in case it exists.
     */
    where: UrineWhereUniqueInput
    /**
     * In case the Urine found by the `where` argument doesn't exist, create a new Urine with this data.
     */
    create: XOR<UrineCreateInput, UrineUncheckedCreateInput>
    /**
     * In case the Urine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UrineUpdateInput, UrineUncheckedUpdateInput>
  }

  /**
   * Urine delete
   */
  export type UrineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urine
     */
    select?: UrineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Urine
     */
    omit?: UrineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrineInclude<ExtArgs> | null
    /**
     * Filter which Urine to delete.
     */
    where: UrineWhereUniqueInput
  }

  /**
   * Urine deleteMany
   */
  export type UrineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Urines to delete
     */
    where?: UrineWhereInput
    /**
     * Limit how many Urines to delete.
     */
    limit?: number
  }

  /**
   * Urine without action
   */
  export type UrineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urine
     */
    select?: UrineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Urine
     */
    omit?: UrineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrineInclude<ExtArgs> | null
  }


  /**
   * Model Cell
   */

  export type AggregateCell = {
    _count: CellCountAggregateOutputType | null
    _avg: CellAvgAggregateOutputType | null
    _sum: CellSumAggregateOutputType | null
    _min: CellMinAggregateOutputType | null
    _max: CellMaxAggregateOutputType | null
  }

  export type CellAvgAggregateOutputType = {
    id: number | null
    category_id: number | null
  }

  export type CellSumAggregateOutputType = {
    id: number | null
    category_id: number | null
  }

  export type CellMinAggregateOutputType = {
    id: number | null
    name: string | null
    morphology: string | null
    clinical_relevance: string | null
    image: string | null
    category_id: number | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
  }

  export type CellMaxAggregateOutputType = {
    id: number | null
    name: string | null
    morphology: string | null
    clinical_relevance: string | null
    image: string | null
    category_id: number | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
  }

  export type CellCountAggregateOutputType = {
    id: number
    name: number
    morphology: number
    clinical_relevance: number
    image: number
    category_id: number
    created_at: number
    updated_at: number
    created_by: number
    _all: number
  }


  export type CellAvgAggregateInputType = {
    id?: true
    category_id?: true
  }

  export type CellSumAggregateInputType = {
    id?: true
    category_id?: true
  }

  export type CellMinAggregateInputType = {
    id?: true
    name?: true
    morphology?: true
    clinical_relevance?: true
    image?: true
    category_id?: true
    created_at?: true
    updated_at?: true
    created_by?: true
  }

  export type CellMaxAggregateInputType = {
    id?: true
    name?: true
    morphology?: true
    clinical_relevance?: true
    image?: true
    category_id?: true
    created_at?: true
    updated_at?: true
    created_by?: true
  }

  export type CellCountAggregateInputType = {
    id?: true
    name?: true
    morphology?: true
    clinical_relevance?: true
    image?: true
    category_id?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    _all?: true
  }

  export type CellAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cell to aggregate.
     */
    where?: CellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cells to fetch.
     */
    orderBy?: CellOrderByWithRelationInput | CellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cells
    **/
    _count?: true | CellCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CellAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CellSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CellMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CellMaxAggregateInputType
  }

  export type GetCellAggregateType<T extends CellAggregateArgs> = {
        [P in keyof T & keyof AggregateCell]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCell[P]>
      : GetScalarType<T[P], AggregateCell[P]>
  }




  export type CellGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CellWhereInput
    orderBy?: CellOrderByWithAggregationInput | CellOrderByWithAggregationInput[]
    by: CellScalarFieldEnum[] | CellScalarFieldEnum
    having?: CellScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CellCountAggregateInputType | true
    _avg?: CellAvgAggregateInputType
    _sum?: CellSumAggregateInputType
    _min?: CellMinAggregateInputType
    _max?: CellMaxAggregateInputType
  }

  export type CellGroupByOutputType = {
    id: number
    name: string
    morphology: string
    clinical_relevance: string
    image: string
    category_id: number
    created_at: Date
    updated_at: Date
    created_by: string
    _count: CellCountAggregateOutputType | null
    _avg: CellAvgAggregateOutputType | null
    _sum: CellSumAggregateOutputType | null
    _min: CellMinAggregateOutputType | null
    _max: CellMaxAggregateOutputType | null
  }

  type GetCellGroupByPayload<T extends CellGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CellGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CellGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CellGroupByOutputType[P]>
            : GetScalarType<T[P], CellGroupByOutputType[P]>
        }
      >
    >


  export type CellSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    morphology?: boolean
    clinical_relevance?: boolean
    image?: boolean
    category_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    cell_mentions?: boolean | Cell$cell_mentionsArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | CellCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cell"]>

  export type CellSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    morphology?: boolean
    clinical_relevance?: boolean
    image?: boolean
    category_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cell"]>

  export type CellSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    morphology?: boolean
    clinical_relevance?: boolean
    image?: boolean
    category_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cell"]>

  export type CellSelectScalar = {
    id?: boolean
    name?: boolean
    morphology?: boolean
    clinical_relevance?: boolean
    image?: boolean
    category_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
  }

  export type CellOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "morphology" | "clinical_relevance" | "image" | "category_id" | "created_at" | "updated_at" | "created_by", ExtArgs["result"]["cell"]>
  export type CellInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    cell_mentions?: boolean | Cell$cell_mentionsArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | CellCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CellIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CellIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CellPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cell"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      cell_mentions: Prisma.$CellMentionPayload<ExtArgs>[]
      owner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      morphology: string
      clinical_relevance: string
      image: string
      category_id: number
      created_at: Date
      updated_at: Date
      created_by: string
    }, ExtArgs["result"]["cell"]>
    composites: {}
  }

  type CellGetPayload<S extends boolean | null | undefined | CellDefaultArgs> = $Result.GetResult<Prisma.$CellPayload, S>

  type CellCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CellFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CellCountAggregateInputType | true
    }

  export interface CellDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cell'], meta: { name: 'Cell' } }
    /**
     * Find zero or one Cell that matches the filter.
     * @param {CellFindUniqueArgs} args - Arguments to find a Cell
     * @example
     * // Get one Cell
     * const cell = await prisma.cell.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CellFindUniqueArgs>(args: SelectSubset<T, CellFindUniqueArgs<ExtArgs>>): Prisma__CellClient<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cell that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CellFindUniqueOrThrowArgs} args - Arguments to find a Cell
     * @example
     * // Get one Cell
     * const cell = await prisma.cell.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CellFindUniqueOrThrowArgs>(args: SelectSubset<T, CellFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CellClient<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cell that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellFindFirstArgs} args - Arguments to find a Cell
     * @example
     * // Get one Cell
     * const cell = await prisma.cell.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CellFindFirstArgs>(args?: SelectSubset<T, CellFindFirstArgs<ExtArgs>>): Prisma__CellClient<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cell that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellFindFirstOrThrowArgs} args - Arguments to find a Cell
     * @example
     * // Get one Cell
     * const cell = await prisma.cell.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CellFindFirstOrThrowArgs>(args?: SelectSubset<T, CellFindFirstOrThrowArgs<ExtArgs>>): Prisma__CellClient<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cells that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cells
     * const cells = await prisma.cell.findMany()
     * 
     * // Get first 10 Cells
     * const cells = await prisma.cell.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cellWithIdOnly = await prisma.cell.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CellFindManyArgs>(args?: SelectSubset<T, CellFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cell.
     * @param {CellCreateArgs} args - Arguments to create a Cell.
     * @example
     * // Create one Cell
     * const Cell = await prisma.cell.create({
     *   data: {
     *     // ... data to create a Cell
     *   }
     * })
     * 
     */
    create<T extends CellCreateArgs>(args: SelectSubset<T, CellCreateArgs<ExtArgs>>): Prisma__CellClient<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cells.
     * @param {CellCreateManyArgs} args - Arguments to create many Cells.
     * @example
     * // Create many Cells
     * const cell = await prisma.cell.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CellCreateManyArgs>(args?: SelectSubset<T, CellCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cells and returns the data saved in the database.
     * @param {CellCreateManyAndReturnArgs} args - Arguments to create many Cells.
     * @example
     * // Create many Cells
     * const cell = await prisma.cell.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cells and only return the `id`
     * const cellWithIdOnly = await prisma.cell.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CellCreateManyAndReturnArgs>(args?: SelectSubset<T, CellCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cell.
     * @param {CellDeleteArgs} args - Arguments to delete one Cell.
     * @example
     * // Delete one Cell
     * const Cell = await prisma.cell.delete({
     *   where: {
     *     // ... filter to delete one Cell
     *   }
     * })
     * 
     */
    delete<T extends CellDeleteArgs>(args: SelectSubset<T, CellDeleteArgs<ExtArgs>>): Prisma__CellClient<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cell.
     * @param {CellUpdateArgs} args - Arguments to update one Cell.
     * @example
     * // Update one Cell
     * const cell = await prisma.cell.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CellUpdateArgs>(args: SelectSubset<T, CellUpdateArgs<ExtArgs>>): Prisma__CellClient<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cells.
     * @param {CellDeleteManyArgs} args - Arguments to filter Cells to delete.
     * @example
     * // Delete a few Cells
     * const { count } = await prisma.cell.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CellDeleteManyArgs>(args?: SelectSubset<T, CellDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cells.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cells
     * const cell = await prisma.cell.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CellUpdateManyArgs>(args: SelectSubset<T, CellUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cells and returns the data updated in the database.
     * @param {CellUpdateManyAndReturnArgs} args - Arguments to update many Cells.
     * @example
     * // Update many Cells
     * const cell = await prisma.cell.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cells and only return the `id`
     * const cellWithIdOnly = await prisma.cell.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CellUpdateManyAndReturnArgs>(args: SelectSubset<T, CellUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cell.
     * @param {CellUpsertArgs} args - Arguments to update or create a Cell.
     * @example
     * // Update or create a Cell
     * const cell = await prisma.cell.upsert({
     *   create: {
     *     // ... data to create a Cell
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cell we want to update
     *   }
     * })
     */
    upsert<T extends CellUpsertArgs>(args: SelectSubset<T, CellUpsertArgs<ExtArgs>>): Prisma__CellClient<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cells.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellCountArgs} args - Arguments to filter Cells to count.
     * @example
     * // Count the number of Cells
     * const count = await prisma.cell.count({
     *   where: {
     *     // ... the filter for the Cells we want to count
     *   }
     * })
    **/
    count<T extends CellCountArgs>(
      args?: Subset<T, CellCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CellCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cell.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CellAggregateArgs>(args: Subset<T, CellAggregateArgs>): Prisma.PrismaPromise<GetCellAggregateType<T>>

    /**
     * Group by Cell.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CellGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CellGroupByArgs['orderBy'] }
        : { orderBy?: CellGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CellGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCellGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cell model
   */
  readonly fields: CellFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cell.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CellClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cell_mentions<T extends Cell$cell_mentionsArgs<ExtArgs> = {}>(args?: Subset<T, Cell$cell_mentionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CellMentionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cell model
   */
  interface CellFieldRefs {
    readonly id: FieldRef<"Cell", 'Int'>
    readonly name: FieldRef<"Cell", 'String'>
    readonly morphology: FieldRef<"Cell", 'String'>
    readonly clinical_relevance: FieldRef<"Cell", 'String'>
    readonly image: FieldRef<"Cell", 'String'>
    readonly category_id: FieldRef<"Cell", 'Int'>
    readonly created_at: FieldRef<"Cell", 'DateTime'>
    readonly updated_at: FieldRef<"Cell", 'DateTime'>
    readonly created_by: FieldRef<"Cell", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cell findUnique
   */
  export type CellFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    /**
     * Filter, which Cell to fetch.
     */
    where: CellWhereUniqueInput
  }

  /**
   * Cell findUniqueOrThrow
   */
  export type CellFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    /**
     * Filter, which Cell to fetch.
     */
    where: CellWhereUniqueInput
  }

  /**
   * Cell findFirst
   */
  export type CellFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    /**
     * Filter, which Cell to fetch.
     */
    where?: CellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cells to fetch.
     */
    orderBy?: CellOrderByWithRelationInput | CellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cells.
     */
    cursor?: CellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cells.
     */
    distinct?: CellScalarFieldEnum | CellScalarFieldEnum[]
  }

  /**
   * Cell findFirstOrThrow
   */
  export type CellFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    /**
     * Filter, which Cell to fetch.
     */
    where?: CellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cells to fetch.
     */
    orderBy?: CellOrderByWithRelationInput | CellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cells.
     */
    cursor?: CellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cells.
     */
    distinct?: CellScalarFieldEnum | CellScalarFieldEnum[]
  }

  /**
   * Cell findMany
   */
  export type CellFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    /**
     * Filter, which Cells to fetch.
     */
    where?: CellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cells to fetch.
     */
    orderBy?: CellOrderByWithRelationInput | CellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cells.
     */
    cursor?: CellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cells.
     */
    skip?: number
    distinct?: CellScalarFieldEnum | CellScalarFieldEnum[]
  }

  /**
   * Cell create
   */
  export type CellCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    /**
     * The data needed to create a Cell.
     */
    data: XOR<CellCreateInput, CellUncheckedCreateInput>
  }

  /**
   * Cell createMany
   */
  export type CellCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cells.
     */
    data: CellCreateManyInput | CellCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cell createManyAndReturn
   */
  export type CellCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * The data used to create many Cells.
     */
    data: CellCreateManyInput | CellCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cell update
   */
  export type CellUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    /**
     * The data needed to update a Cell.
     */
    data: XOR<CellUpdateInput, CellUncheckedUpdateInput>
    /**
     * Choose, which Cell to update.
     */
    where: CellWhereUniqueInput
  }

  /**
   * Cell updateMany
   */
  export type CellUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cells.
     */
    data: XOR<CellUpdateManyMutationInput, CellUncheckedUpdateManyInput>
    /**
     * Filter which Cells to update
     */
    where?: CellWhereInput
    /**
     * Limit how many Cells to update.
     */
    limit?: number
  }

  /**
   * Cell updateManyAndReturn
   */
  export type CellUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * The data used to update Cells.
     */
    data: XOR<CellUpdateManyMutationInput, CellUncheckedUpdateManyInput>
    /**
     * Filter which Cells to update
     */
    where?: CellWhereInput
    /**
     * Limit how many Cells to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cell upsert
   */
  export type CellUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    /**
     * The filter to search for the Cell to update in case it exists.
     */
    where: CellWhereUniqueInput
    /**
     * In case the Cell found by the `where` argument doesn't exist, create a new Cell with this data.
     */
    create: XOR<CellCreateInput, CellUncheckedCreateInput>
    /**
     * In case the Cell was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CellUpdateInput, CellUncheckedUpdateInput>
  }

  /**
   * Cell delete
   */
  export type CellDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    /**
     * Filter which Cell to delete.
     */
    where: CellWhereUniqueInput
  }

  /**
   * Cell deleteMany
   */
  export type CellDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cells to delete
     */
    where?: CellWhereInput
    /**
     * Limit how many Cells to delete.
     */
    limit?: number
  }

  /**
   * Cell.cell_mentions
   */
  export type Cell$cell_mentionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellMention
     */
    select?: CellMentionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CellMention
     */
    omit?: CellMentionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellMentionInclude<ExtArgs> | null
    where?: CellMentionWhereInput
    orderBy?: CellMentionOrderByWithRelationInput | CellMentionOrderByWithRelationInput[]
    cursor?: CellMentionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CellMentionScalarFieldEnum | CellMentionScalarFieldEnum[]
  }

  /**
   * Cell without action
   */
  export type CellDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    created_at: Date
    updated_at: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    cell?: boolean | Category$cellArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cell?: boolean | Category$cellArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      cell: Prisma.$CellPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cell<T extends Category$cellArgs<ExtArgs> = {}>(args?: Subset<T, Category$cellArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly created_at: FieldRef<"Category", 'DateTime'>
    readonly updated_at: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.cell
   */
  export type Category$cellArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    where?: CellWhereInput
    orderBy?: CellOrderByWithRelationInput | CellOrderByWithRelationInput[]
    cursor?: CellWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CellScalarFieldEnum | CellScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Mention
   */

  export type AggregateMention = {
    _count: MentionCountAggregateOutputType | null
    _avg: MentionAvgAggregateOutputType | null
    _sum: MentionSumAggregateOutputType | null
    _min: MentionMinAggregateOutputType | null
    _max: MentionMaxAggregateOutputType | null
  }

  export type MentionAvgAggregateOutputType = {
    id: number | null
  }

  export type MentionSumAggregateOutputType = {
    id: number | null
  }

  export type MentionMinAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MentionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MentionCountAggregateOutputType = {
    id: number
    name: number
    url: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type MentionAvgAggregateInputType = {
    id?: true
  }

  export type MentionSumAggregateInputType = {
    id?: true
  }

  export type MentionMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    created_at?: true
    updated_at?: true
  }

  export type MentionMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    created_at?: true
    updated_at?: true
  }

  export type MentionCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type MentionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mention to aggregate.
     */
    where?: MentionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mentions to fetch.
     */
    orderBy?: MentionOrderByWithRelationInput | MentionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MentionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mentions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mentions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mentions
    **/
    _count?: true | MentionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MentionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MentionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MentionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MentionMaxAggregateInputType
  }

  export type GetMentionAggregateType<T extends MentionAggregateArgs> = {
        [P in keyof T & keyof AggregateMention]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMention[P]>
      : GetScalarType<T[P], AggregateMention[P]>
  }




  export type MentionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MentionWhereInput
    orderBy?: MentionOrderByWithAggregationInput | MentionOrderByWithAggregationInput[]
    by: MentionScalarFieldEnum[] | MentionScalarFieldEnum
    having?: MentionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MentionCountAggregateInputType | true
    _avg?: MentionAvgAggregateInputType
    _sum?: MentionSumAggregateInputType
    _min?: MentionMinAggregateInputType
    _max?: MentionMaxAggregateInputType
  }

  export type MentionGroupByOutputType = {
    id: number
    name: string
    url: string | null
    created_at: Date
    updated_at: Date
    _count: MentionCountAggregateOutputType | null
    _avg: MentionAvgAggregateOutputType | null
    _sum: MentionSumAggregateOutputType | null
    _min: MentionMinAggregateOutputType | null
    _max: MentionMaxAggregateOutputType | null
  }

  type GetMentionGroupByPayload<T extends MentionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MentionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MentionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MentionGroupByOutputType[P]>
            : GetScalarType<T[P], MentionGroupByOutputType[P]>
        }
      >
    >


  export type MentionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    created_at?: boolean
    updated_at?: boolean
    cell_mentions?: boolean | Mention$cell_mentionsArgs<ExtArgs>
    _count?: boolean | MentionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mention"]>

  export type MentionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["mention"]>

  export type MentionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["mention"]>

  export type MentionSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type MentionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url" | "created_at" | "updated_at", ExtArgs["result"]["mention"]>
  export type MentionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cell_mentions?: boolean | Mention$cell_mentionsArgs<ExtArgs>
    _count?: boolean | MentionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MentionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MentionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MentionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mention"
    objects: {
      cell_mentions: Prisma.$CellMentionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      url: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["mention"]>
    composites: {}
  }

  type MentionGetPayload<S extends boolean | null | undefined | MentionDefaultArgs> = $Result.GetResult<Prisma.$MentionPayload, S>

  type MentionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MentionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MentionCountAggregateInputType | true
    }

  export interface MentionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mention'], meta: { name: 'Mention' } }
    /**
     * Find zero or one Mention that matches the filter.
     * @param {MentionFindUniqueArgs} args - Arguments to find a Mention
     * @example
     * // Get one Mention
     * const mention = await prisma.mention.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MentionFindUniqueArgs>(args: SelectSubset<T, MentionFindUniqueArgs<ExtArgs>>): Prisma__MentionClient<$Result.GetResult<Prisma.$MentionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mention that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MentionFindUniqueOrThrowArgs} args - Arguments to find a Mention
     * @example
     * // Get one Mention
     * const mention = await prisma.mention.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MentionFindUniqueOrThrowArgs>(args: SelectSubset<T, MentionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MentionClient<$Result.GetResult<Prisma.$MentionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mention that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentionFindFirstArgs} args - Arguments to find a Mention
     * @example
     * // Get one Mention
     * const mention = await prisma.mention.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MentionFindFirstArgs>(args?: SelectSubset<T, MentionFindFirstArgs<ExtArgs>>): Prisma__MentionClient<$Result.GetResult<Prisma.$MentionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mention that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentionFindFirstOrThrowArgs} args - Arguments to find a Mention
     * @example
     * // Get one Mention
     * const mention = await prisma.mention.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MentionFindFirstOrThrowArgs>(args?: SelectSubset<T, MentionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MentionClient<$Result.GetResult<Prisma.$MentionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mentions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mentions
     * const mentions = await prisma.mention.findMany()
     * 
     * // Get first 10 Mentions
     * const mentions = await prisma.mention.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mentionWithIdOnly = await prisma.mention.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MentionFindManyArgs>(args?: SelectSubset<T, MentionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mention.
     * @param {MentionCreateArgs} args - Arguments to create a Mention.
     * @example
     * // Create one Mention
     * const Mention = await prisma.mention.create({
     *   data: {
     *     // ... data to create a Mention
     *   }
     * })
     * 
     */
    create<T extends MentionCreateArgs>(args: SelectSubset<T, MentionCreateArgs<ExtArgs>>): Prisma__MentionClient<$Result.GetResult<Prisma.$MentionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mentions.
     * @param {MentionCreateManyArgs} args - Arguments to create many Mentions.
     * @example
     * // Create many Mentions
     * const mention = await prisma.mention.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MentionCreateManyArgs>(args?: SelectSubset<T, MentionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mentions and returns the data saved in the database.
     * @param {MentionCreateManyAndReturnArgs} args - Arguments to create many Mentions.
     * @example
     * // Create many Mentions
     * const mention = await prisma.mention.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mentions and only return the `id`
     * const mentionWithIdOnly = await prisma.mention.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MentionCreateManyAndReturnArgs>(args?: SelectSubset<T, MentionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mention.
     * @param {MentionDeleteArgs} args - Arguments to delete one Mention.
     * @example
     * // Delete one Mention
     * const Mention = await prisma.mention.delete({
     *   where: {
     *     // ... filter to delete one Mention
     *   }
     * })
     * 
     */
    delete<T extends MentionDeleteArgs>(args: SelectSubset<T, MentionDeleteArgs<ExtArgs>>): Prisma__MentionClient<$Result.GetResult<Prisma.$MentionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mention.
     * @param {MentionUpdateArgs} args - Arguments to update one Mention.
     * @example
     * // Update one Mention
     * const mention = await prisma.mention.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MentionUpdateArgs>(args: SelectSubset<T, MentionUpdateArgs<ExtArgs>>): Prisma__MentionClient<$Result.GetResult<Prisma.$MentionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mentions.
     * @param {MentionDeleteManyArgs} args - Arguments to filter Mentions to delete.
     * @example
     * // Delete a few Mentions
     * const { count } = await prisma.mention.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MentionDeleteManyArgs>(args?: SelectSubset<T, MentionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mentions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mentions
     * const mention = await prisma.mention.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MentionUpdateManyArgs>(args: SelectSubset<T, MentionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mentions and returns the data updated in the database.
     * @param {MentionUpdateManyAndReturnArgs} args - Arguments to update many Mentions.
     * @example
     * // Update many Mentions
     * const mention = await prisma.mention.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mentions and only return the `id`
     * const mentionWithIdOnly = await prisma.mention.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MentionUpdateManyAndReturnArgs>(args: SelectSubset<T, MentionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mention.
     * @param {MentionUpsertArgs} args - Arguments to update or create a Mention.
     * @example
     * // Update or create a Mention
     * const mention = await prisma.mention.upsert({
     *   create: {
     *     // ... data to create a Mention
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mention we want to update
     *   }
     * })
     */
    upsert<T extends MentionUpsertArgs>(args: SelectSubset<T, MentionUpsertArgs<ExtArgs>>): Prisma__MentionClient<$Result.GetResult<Prisma.$MentionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mentions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentionCountArgs} args - Arguments to filter Mentions to count.
     * @example
     * // Count the number of Mentions
     * const count = await prisma.mention.count({
     *   where: {
     *     // ... the filter for the Mentions we want to count
     *   }
     * })
    **/
    count<T extends MentionCountArgs>(
      args?: Subset<T, MentionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MentionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mention.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MentionAggregateArgs>(args: Subset<T, MentionAggregateArgs>): Prisma.PrismaPromise<GetMentionAggregateType<T>>

    /**
     * Group by Mention.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MentionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MentionGroupByArgs['orderBy'] }
        : { orderBy?: MentionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MentionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMentionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mention model
   */
  readonly fields: MentionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mention.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MentionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cell_mentions<T extends Mention$cell_mentionsArgs<ExtArgs> = {}>(args?: Subset<T, Mention$cell_mentionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CellMentionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mention model
   */
  interface MentionFieldRefs {
    readonly id: FieldRef<"Mention", 'Int'>
    readonly name: FieldRef<"Mention", 'String'>
    readonly url: FieldRef<"Mention", 'String'>
    readonly created_at: FieldRef<"Mention", 'DateTime'>
    readonly updated_at: FieldRef<"Mention", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mention findUnique
   */
  export type MentionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mention
     */
    select?: MentionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mention
     */
    omit?: MentionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentionInclude<ExtArgs> | null
    /**
     * Filter, which Mention to fetch.
     */
    where: MentionWhereUniqueInput
  }

  /**
   * Mention findUniqueOrThrow
   */
  export type MentionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mention
     */
    select?: MentionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mention
     */
    omit?: MentionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentionInclude<ExtArgs> | null
    /**
     * Filter, which Mention to fetch.
     */
    where: MentionWhereUniqueInput
  }

  /**
   * Mention findFirst
   */
  export type MentionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mention
     */
    select?: MentionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mention
     */
    omit?: MentionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentionInclude<ExtArgs> | null
    /**
     * Filter, which Mention to fetch.
     */
    where?: MentionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mentions to fetch.
     */
    orderBy?: MentionOrderByWithRelationInput | MentionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mentions.
     */
    cursor?: MentionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mentions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mentions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mentions.
     */
    distinct?: MentionScalarFieldEnum | MentionScalarFieldEnum[]
  }

  /**
   * Mention findFirstOrThrow
   */
  export type MentionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mention
     */
    select?: MentionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mention
     */
    omit?: MentionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentionInclude<ExtArgs> | null
    /**
     * Filter, which Mention to fetch.
     */
    where?: MentionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mentions to fetch.
     */
    orderBy?: MentionOrderByWithRelationInput | MentionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mentions.
     */
    cursor?: MentionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mentions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mentions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mentions.
     */
    distinct?: MentionScalarFieldEnum | MentionScalarFieldEnum[]
  }

  /**
   * Mention findMany
   */
  export type MentionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mention
     */
    select?: MentionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mention
     */
    omit?: MentionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentionInclude<ExtArgs> | null
    /**
     * Filter, which Mentions to fetch.
     */
    where?: MentionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mentions to fetch.
     */
    orderBy?: MentionOrderByWithRelationInput | MentionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mentions.
     */
    cursor?: MentionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mentions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mentions.
     */
    skip?: number
    distinct?: MentionScalarFieldEnum | MentionScalarFieldEnum[]
  }

  /**
   * Mention create
   */
  export type MentionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mention
     */
    select?: MentionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mention
     */
    omit?: MentionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentionInclude<ExtArgs> | null
    /**
     * The data needed to create a Mention.
     */
    data: XOR<MentionCreateInput, MentionUncheckedCreateInput>
  }

  /**
   * Mention createMany
   */
  export type MentionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mentions.
     */
    data: MentionCreateManyInput | MentionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mention createManyAndReturn
   */
  export type MentionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mention
     */
    select?: MentionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mention
     */
    omit?: MentionOmit<ExtArgs> | null
    /**
     * The data used to create many Mentions.
     */
    data: MentionCreateManyInput | MentionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mention update
   */
  export type MentionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mention
     */
    select?: MentionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mention
     */
    omit?: MentionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentionInclude<ExtArgs> | null
    /**
     * The data needed to update a Mention.
     */
    data: XOR<MentionUpdateInput, MentionUncheckedUpdateInput>
    /**
     * Choose, which Mention to update.
     */
    where: MentionWhereUniqueInput
  }

  /**
   * Mention updateMany
   */
  export type MentionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mentions.
     */
    data: XOR<MentionUpdateManyMutationInput, MentionUncheckedUpdateManyInput>
    /**
     * Filter which Mentions to update
     */
    where?: MentionWhereInput
    /**
     * Limit how many Mentions to update.
     */
    limit?: number
  }

  /**
   * Mention updateManyAndReturn
   */
  export type MentionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mention
     */
    select?: MentionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mention
     */
    omit?: MentionOmit<ExtArgs> | null
    /**
     * The data used to update Mentions.
     */
    data: XOR<MentionUpdateManyMutationInput, MentionUncheckedUpdateManyInput>
    /**
     * Filter which Mentions to update
     */
    where?: MentionWhereInput
    /**
     * Limit how many Mentions to update.
     */
    limit?: number
  }

  /**
   * Mention upsert
   */
  export type MentionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mention
     */
    select?: MentionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mention
     */
    omit?: MentionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentionInclude<ExtArgs> | null
    /**
     * The filter to search for the Mention to update in case it exists.
     */
    where: MentionWhereUniqueInput
    /**
     * In case the Mention found by the `where` argument doesn't exist, create a new Mention with this data.
     */
    create: XOR<MentionCreateInput, MentionUncheckedCreateInput>
    /**
     * In case the Mention was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MentionUpdateInput, MentionUncheckedUpdateInput>
  }

  /**
   * Mention delete
   */
  export type MentionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mention
     */
    select?: MentionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mention
     */
    omit?: MentionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentionInclude<ExtArgs> | null
    /**
     * Filter which Mention to delete.
     */
    where: MentionWhereUniqueInput
  }

  /**
   * Mention deleteMany
   */
  export type MentionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mentions to delete
     */
    where?: MentionWhereInput
    /**
     * Limit how many Mentions to delete.
     */
    limit?: number
  }

  /**
   * Mention.cell_mentions
   */
  export type Mention$cell_mentionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellMention
     */
    select?: CellMentionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CellMention
     */
    omit?: CellMentionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellMentionInclude<ExtArgs> | null
    where?: CellMentionWhereInput
    orderBy?: CellMentionOrderByWithRelationInput | CellMentionOrderByWithRelationInput[]
    cursor?: CellMentionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CellMentionScalarFieldEnum | CellMentionScalarFieldEnum[]
  }

  /**
   * Mention without action
   */
  export type MentionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mention
     */
    select?: MentionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mention
     */
    omit?: MentionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentionInclude<ExtArgs> | null
  }


  /**
   * Model CellMention
   */

  export type AggregateCellMention = {
    _count: CellMentionCountAggregateOutputType | null
    _avg: CellMentionAvgAggregateOutputType | null
    _sum: CellMentionSumAggregateOutputType | null
    _min: CellMentionMinAggregateOutputType | null
    _max: CellMentionMaxAggregateOutputType | null
  }

  export type CellMentionAvgAggregateOutputType = {
    id: number | null
    cell_id: number | null
    mention_id: number | null
  }

  export type CellMentionSumAggregateOutputType = {
    id: number | null
    cell_id: number | null
    mention_id: number | null
  }

  export type CellMentionMinAggregateOutputType = {
    id: number | null
    cell_id: number | null
    mention_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CellMentionMaxAggregateOutputType = {
    id: number | null
    cell_id: number | null
    mention_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CellMentionCountAggregateOutputType = {
    id: number
    cell_id: number
    mention_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CellMentionAvgAggregateInputType = {
    id?: true
    cell_id?: true
    mention_id?: true
  }

  export type CellMentionSumAggregateInputType = {
    id?: true
    cell_id?: true
    mention_id?: true
  }

  export type CellMentionMinAggregateInputType = {
    id?: true
    cell_id?: true
    mention_id?: true
    created_at?: true
    updated_at?: true
  }

  export type CellMentionMaxAggregateInputType = {
    id?: true
    cell_id?: true
    mention_id?: true
    created_at?: true
    updated_at?: true
  }

  export type CellMentionCountAggregateInputType = {
    id?: true
    cell_id?: true
    mention_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CellMentionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CellMention to aggregate.
     */
    where?: CellMentionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CellMentions to fetch.
     */
    orderBy?: CellMentionOrderByWithRelationInput | CellMentionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CellMentionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CellMentions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CellMentions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CellMentions
    **/
    _count?: true | CellMentionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CellMentionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CellMentionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CellMentionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CellMentionMaxAggregateInputType
  }

  export type GetCellMentionAggregateType<T extends CellMentionAggregateArgs> = {
        [P in keyof T & keyof AggregateCellMention]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCellMention[P]>
      : GetScalarType<T[P], AggregateCellMention[P]>
  }




  export type CellMentionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CellMentionWhereInput
    orderBy?: CellMentionOrderByWithAggregationInput | CellMentionOrderByWithAggregationInput[]
    by: CellMentionScalarFieldEnum[] | CellMentionScalarFieldEnum
    having?: CellMentionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CellMentionCountAggregateInputType | true
    _avg?: CellMentionAvgAggregateInputType
    _sum?: CellMentionSumAggregateInputType
    _min?: CellMentionMinAggregateInputType
    _max?: CellMentionMaxAggregateInputType
  }

  export type CellMentionGroupByOutputType = {
    id: number
    cell_id: number
    mention_id: number
    created_at: Date
    updated_at: Date
    _count: CellMentionCountAggregateOutputType | null
    _avg: CellMentionAvgAggregateOutputType | null
    _sum: CellMentionSumAggregateOutputType | null
    _min: CellMentionMinAggregateOutputType | null
    _max: CellMentionMaxAggregateOutputType | null
  }

  type GetCellMentionGroupByPayload<T extends CellMentionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CellMentionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CellMentionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CellMentionGroupByOutputType[P]>
            : GetScalarType<T[P], CellMentionGroupByOutputType[P]>
        }
      >
    >


  export type CellMentionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cell_id?: boolean
    mention_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    cell?: boolean | CellDefaultArgs<ExtArgs>
    mention?: boolean | MentionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cellMention"]>

  export type CellMentionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cell_id?: boolean
    mention_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    cell?: boolean | CellDefaultArgs<ExtArgs>
    mention?: boolean | MentionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cellMention"]>

  export type CellMentionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cell_id?: boolean
    mention_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    cell?: boolean | CellDefaultArgs<ExtArgs>
    mention?: boolean | MentionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cellMention"]>

  export type CellMentionSelectScalar = {
    id?: boolean
    cell_id?: boolean
    mention_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CellMentionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cell_id" | "mention_id" | "created_at" | "updated_at", ExtArgs["result"]["cellMention"]>
  export type CellMentionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cell?: boolean | CellDefaultArgs<ExtArgs>
    mention?: boolean | MentionDefaultArgs<ExtArgs>
  }
  export type CellMentionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cell?: boolean | CellDefaultArgs<ExtArgs>
    mention?: boolean | MentionDefaultArgs<ExtArgs>
  }
  export type CellMentionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cell?: boolean | CellDefaultArgs<ExtArgs>
    mention?: boolean | MentionDefaultArgs<ExtArgs>
  }

  export type $CellMentionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CellMention"
    objects: {
      cell: Prisma.$CellPayload<ExtArgs>
      mention: Prisma.$MentionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cell_id: number
      mention_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["cellMention"]>
    composites: {}
  }

  type CellMentionGetPayload<S extends boolean | null | undefined | CellMentionDefaultArgs> = $Result.GetResult<Prisma.$CellMentionPayload, S>

  type CellMentionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CellMentionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CellMentionCountAggregateInputType | true
    }

  export interface CellMentionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CellMention'], meta: { name: 'CellMention' } }
    /**
     * Find zero or one CellMention that matches the filter.
     * @param {CellMentionFindUniqueArgs} args - Arguments to find a CellMention
     * @example
     * // Get one CellMention
     * const cellMention = await prisma.cellMention.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CellMentionFindUniqueArgs>(args: SelectSubset<T, CellMentionFindUniqueArgs<ExtArgs>>): Prisma__CellMentionClient<$Result.GetResult<Prisma.$CellMentionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CellMention that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CellMentionFindUniqueOrThrowArgs} args - Arguments to find a CellMention
     * @example
     * // Get one CellMention
     * const cellMention = await prisma.cellMention.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CellMentionFindUniqueOrThrowArgs>(args: SelectSubset<T, CellMentionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CellMentionClient<$Result.GetResult<Prisma.$CellMentionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CellMention that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellMentionFindFirstArgs} args - Arguments to find a CellMention
     * @example
     * // Get one CellMention
     * const cellMention = await prisma.cellMention.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CellMentionFindFirstArgs>(args?: SelectSubset<T, CellMentionFindFirstArgs<ExtArgs>>): Prisma__CellMentionClient<$Result.GetResult<Prisma.$CellMentionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CellMention that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellMentionFindFirstOrThrowArgs} args - Arguments to find a CellMention
     * @example
     * // Get one CellMention
     * const cellMention = await prisma.cellMention.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CellMentionFindFirstOrThrowArgs>(args?: SelectSubset<T, CellMentionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CellMentionClient<$Result.GetResult<Prisma.$CellMentionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CellMentions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellMentionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CellMentions
     * const cellMentions = await prisma.cellMention.findMany()
     * 
     * // Get first 10 CellMentions
     * const cellMentions = await prisma.cellMention.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cellMentionWithIdOnly = await prisma.cellMention.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CellMentionFindManyArgs>(args?: SelectSubset<T, CellMentionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CellMentionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CellMention.
     * @param {CellMentionCreateArgs} args - Arguments to create a CellMention.
     * @example
     * // Create one CellMention
     * const CellMention = await prisma.cellMention.create({
     *   data: {
     *     // ... data to create a CellMention
     *   }
     * })
     * 
     */
    create<T extends CellMentionCreateArgs>(args: SelectSubset<T, CellMentionCreateArgs<ExtArgs>>): Prisma__CellMentionClient<$Result.GetResult<Prisma.$CellMentionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CellMentions.
     * @param {CellMentionCreateManyArgs} args - Arguments to create many CellMentions.
     * @example
     * // Create many CellMentions
     * const cellMention = await prisma.cellMention.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CellMentionCreateManyArgs>(args?: SelectSubset<T, CellMentionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CellMentions and returns the data saved in the database.
     * @param {CellMentionCreateManyAndReturnArgs} args - Arguments to create many CellMentions.
     * @example
     * // Create many CellMentions
     * const cellMention = await prisma.cellMention.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CellMentions and only return the `id`
     * const cellMentionWithIdOnly = await prisma.cellMention.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CellMentionCreateManyAndReturnArgs>(args?: SelectSubset<T, CellMentionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CellMentionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CellMention.
     * @param {CellMentionDeleteArgs} args - Arguments to delete one CellMention.
     * @example
     * // Delete one CellMention
     * const CellMention = await prisma.cellMention.delete({
     *   where: {
     *     // ... filter to delete one CellMention
     *   }
     * })
     * 
     */
    delete<T extends CellMentionDeleteArgs>(args: SelectSubset<T, CellMentionDeleteArgs<ExtArgs>>): Prisma__CellMentionClient<$Result.GetResult<Prisma.$CellMentionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CellMention.
     * @param {CellMentionUpdateArgs} args - Arguments to update one CellMention.
     * @example
     * // Update one CellMention
     * const cellMention = await prisma.cellMention.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CellMentionUpdateArgs>(args: SelectSubset<T, CellMentionUpdateArgs<ExtArgs>>): Prisma__CellMentionClient<$Result.GetResult<Prisma.$CellMentionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CellMentions.
     * @param {CellMentionDeleteManyArgs} args - Arguments to filter CellMentions to delete.
     * @example
     * // Delete a few CellMentions
     * const { count } = await prisma.cellMention.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CellMentionDeleteManyArgs>(args?: SelectSubset<T, CellMentionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CellMentions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellMentionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CellMentions
     * const cellMention = await prisma.cellMention.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CellMentionUpdateManyArgs>(args: SelectSubset<T, CellMentionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CellMentions and returns the data updated in the database.
     * @param {CellMentionUpdateManyAndReturnArgs} args - Arguments to update many CellMentions.
     * @example
     * // Update many CellMentions
     * const cellMention = await prisma.cellMention.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CellMentions and only return the `id`
     * const cellMentionWithIdOnly = await prisma.cellMention.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CellMentionUpdateManyAndReturnArgs>(args: SelectSubset<T, CellMentionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CellMentionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CellMention.
     * @param {CellMentionUpsertArgs} args - Arguments to update or create a CellMention.
     * @example
     * // Update or create a CellMention
     * const cellMention = await prisma.cellMention.upsert({
     *   create: {
     *     // ... data to create a CellMention
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CellMention we want to update
     *   }
     * })
     */
    upsert<T extends CellMentionUpsertArgs>(args: SelectSubset<T, CellMentionUpsertArgs<ExtArgs>>): Prisma__CellMentionClient<$Result.GetResult<Prisma.$CellMentionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CellMentions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellMentionCountArgs} args - Arguments to filter CellMentions to count.
     * @example
     * // Count the number of CellMentions
     * const count = await prisma.cellMention.count({
     *   where: {
     *     // ... the filter for the CellMentions we want to count
     *   }
     * })
    **/
    count<T extends CellMentionCountArgs>(
      args?: Subset<T, CellMentionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CellMentionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CellMention.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellMentionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CellMentionAggregateArgs>(args: Subset<T, CellMentionAggregateArgs>): Prisma.PrismaPromise<GetCellMentionAggregateType<T>>

    /**
     * Group by CellMention.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellMentionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CellMentionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CellMentionGroupByArgs['orderBy'] }
        : { orderBy?: CellMentionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CellMentionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCellMentionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CellMention model
   */
  readonly fields: CellMentionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CellMention.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CellMentionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cell<T extends CellDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CellDefaultArgs<ExtArgs>>): Prisma__CellClient<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mention<T extends MentionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MentionDefaultArgs<ExtArgs>>): Prisma__MentionClient<$Result.GetResult<Prisma.$MentionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CellMention model
   */
  interface CellMentionFieldRefs {
    readonly id: FieldRef<"CellMention", 'Int'>
    readonly cell_id: FieldRef<"CellMention", 'Int'>
    readonly mention_id: FieldRef<"CellMention", 'Int'>
    readonly created_at: FieldRef<"CellMention", 'DateTime'>
    readonly updated_at: FieldRef<"CellMention", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CellMention findUnique
   */
  export type CellMentionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellMention
     */
    select?: CellMentionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CellMention
     */
    omit?: CellMentionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellMentionInclude<ExtArgs> | null
    /**
     * Filter, which CellMention to fetch.
     */
    where: CellMentionWhereUniqueInput
  }

  /**
   * CellMention findUniqueOrThrow
   */
  export type CellMentionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellMention
     */
    select?: CellMentionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CellMention
     */
    omit?: CellMentionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellMentionInclude<ExtArgs> | null
    /**
     * Filter, which CellMention to fetch.
     */
    where: CellMentionWhereUniqueInput
  }

  /**
   * CellMention findFirst
   */
  export type CellMentionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellMention
     */
    select?: CellMentionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CellMention
     */
    omit?: CellMentionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellMentionInclude<ExtArgs> | null
    /**
     * Filter, which CellMention to fetch.
     */
    where?: CellMentionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CellMentions to fetch.
     */
    orderBy?: CellMentionOrderByWithRelationInput | CellMentionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CellMentions.
     */
    cursor?: CellMentionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CellMentions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CellMentions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CellMentions.
     */
    distinct?: CellMentionScalarFieldEnum | CellMentionScalarFieldEnum[]
  }

  /**
   * CellMention findFirstOrThrow
   */
  export type CellMentionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellMention
     */
    select?: CellMentionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CellMention
     */
    omit?: CellMentionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellMentionInclude<ExtArgs> | null
    /**
     * Filter, which CellMention to fetch.
     */
    where?: CellMentionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CellMentions to fetch.
     */
    orderBy?: CellMentionOrderByWithRelationInput | CellMentionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CellMentions.
     */
    cursor?: CellMentionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CellMentions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CellMentions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CellMentions.
     */
    distinct?: CellMentionScalarFieldEnum | CellMentionScalarFieldEnum[]
  }

  /**
   * CellMention findMany
   */
  export type CellMentionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellMention
     */
    select?: CellMentionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CellMention
     */
    omit?: CellMentionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellMentionInclude<ExtArgs> | null
    /**
     * Filter, which CellMentions to fetch.
     */
    where?: CellMentionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CellMentions to fetch.
     */
    orderBy?: CellMentionOrderByWithRelationInput | CellMentionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CellMentions.
     */
    cursor?: CellMentionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CellMentions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CellMentions.
     */
    skip?: number
    distinct?: CellMentionScalarFieldEnum | CellMentionScalarFieldEnum[]
  }

  /**
   * CellMention create
   */
  export type CellMentionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellMention
     */
    select?: CellMentionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CellMention
     */
    omit?: CellMentionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellMentionInclude<ExtArgs> | null
    /**
     * The data needed to create a CellMention.
     */
    data: XOR<CellMentionCreateInput, CellMentionUncheckedCreateInput>
  }

  /**
   * CellMention createMany
   */
  export type CellMentionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CellMentions.
     */
    data: CellMentionCreateManyInput | CellMentionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CellMention createManyAndReturn
   */
  export type CellMentionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellMention
     */
    select?: CellMentionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CellMention
     */
    omit?: CellMentionOmit<ExtArgs> | null
    /**
     * The data used to create many CellMentions.
     */
    data: CellMentionCreateManyInput | CellMentionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellMentionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CellMention update
   */
  export type CellMentionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellMention
     */
    select?: CellMentionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CellMention
     */
    omit?: CellMentionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellMentionInclude<ExtArgs> | null
    /**
     * The data needed to update a CellMention.
     */
    data: XOR<CellMentionUpdateInput, CellMentionUncheckedUpdateInput>
    /**
     * Choose, which CellMention to update.
     */
    where: CellMentionWhereUniqueInput
  }

  /**
   * CellMention updateMany
   */
  export type CellMentionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CellMentions.
     */
    data: XOR<CellMentionUpdateManyMutationInput, CellMentionUncheckedUpdateManyInput>
    /**
     * Filter which CellMentions to update
     */
    where?: CellMentionWhereInput
    /**
     * Limit how many CellMentions to update.
     */
    limit?: number
  }

  /**
   * CellMention updateManyAndReturn
   */
  export type CellMentionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellMention
     */
    select?: CellMentionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CellMention
     */
    omit?: CellMentionOmit<ExtArgs> | null
    /**
     * The data used to update CellMentions.
     */
    data: XOR<CellMentionUpdateManyMutationInput, CellMentionUncheckedUpdateManyInput>
    /**
     * Filter which CellMentions to update
     */
    where?: CellMentionWhereInput
    /**
     * Limit how many CellMentions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellMentionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CellMention upsert
   */
  export type CellMentionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellMention
     */
    select?: CellMentionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CellMention
     */
    omit?: CellMentionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellMentionInclude<ExtArgs> | null
    /**
     * The filter to search for the CellMention to update in case it exists.
     */
    where: CellMentionWhereUniqueInput
    /**
     * In case the CellMention found by the `where` argument doesn't exist, create a new CellMention with this data.
     */
    create: XOR<CellMentionCreateInput, CellMentionUncheckedCreateInput>
    /**
     * In case the CellMention was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CellMentionUpdateInput, CellMentionUncheckedUpdateInput>
  }

  /**
   * CellMention delete
   */
  export type CellMentionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellMention
     */
    select?: CellMentionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CellMention
     */
    omit?: CellMentionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellMentionInclude<ExtArgs> | null
    /**
     * Filter which CellMention to delete.
     */
    where: CellMentionWhereUniqueInput
  }

  /**
   * CellMention deleteMany
   */
  export type CellMentionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CellMentions to delete
     */
    where?: CellMentionWhereInput
    /**
     * Limit how many CellMentions to delete.
     */
    limit?: number
  }

  /**
   * CellMention without action
   */
  export type CellMentionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellMention
     */
    select?: CellMentionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CellMention
     */
    omit?: CellMentionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellMentionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PatientsScalarFieldEnum: {
    id: 'id',
    blade: 'blade',
    age: 'age',
    genre: 'genre',
    created_at: 'created_at',
    updated_at: 'updated_at',
    ownerId: 'ownerId'
  };

  export type PatientsScalarFieldEnum = (typeof PatientsScalarFieldEnum)[keyof typeof PatientsScalarFieldEnum]


  export const ErythrocyteScalarFieldEnum: {
    id: 'id',
    erythrocyte: 'erythrocyte',
    hemoglobin: 'hemoglobin',
    hematocrit: 'hematocrit',
    RDW: 'RDW',
    patient_id: 'patient_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ErythrocyteScalarFieldEnum = (typeof ErythrocyteScalarFieldEnum)[keyof typeof ErythrocyteScalarFieldEnum]


  export const LeukocyteScalarFieldEnum: {
    id: 'id',
    leukocyte: 'leukocyte',
    neutrophils: 'neutrophils',
    bandNeutrophils: 'bandNeutrophils',
    lymphocytes: 'lymphocytes',
    monocytes: 'monocytes',
    eosinophils: 'eosinophils',
    basophils: 'basophils',
    patient_id: 'patient_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type LeukocyteScalarFieldEnum = (typeof LeukocyteScalarFieldEnum)[keyof typeof LeukocyteScalarFieldEnum]


  export const PlateletsScalarFieldEnum: {
    id: 'id',
    platelets: 'platelets',
    patient_id: 'patient_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PlateletsScalarFieldEnum = (typeof PlateletsScalarFieldEnum)[keyof typeof PlateletsScalarFieldEnum]


  export const UrineScalarFieldEnum: {
    id: 'id',
    volume: 'volume',
    color: 'color',
    ph: 'ph',
    density: 'density',
    protein: 'protein',
    glucose: 'glucose',
    ketones: 'ketones',
    nitrites: 'nitrites',
    hemoglobin: 'hemoglobin',
    urobilinogen: 'urobilinogen',
    sed_leukocytes: 'sed_leukocytes',
    sed_erythrocytes: 'sed_erythrocytes',
    sed_epithelial: 'sed_epithelial',
    sed_mucus: 'sed_mucus',
    sed_cylinders: 'sed_cylinders',
    sed_crystals: 'sed_crystals',
    sed_bacteria: 'sed_bacteria',
    created_at: 'created_at',
    updated_at: 'updated_at',
    patient_id: 'patient_id'
  };

  export type UrineScalarFieldEnum = (typeof UrineScalarFieldEnum)[keyof typeof UrineScalarFieldEnum]


  export const CellScalarFieldEnum: {
    id: 'id',
    name: 'name',
    morphology: 'morphology',
    clinical_relevance: 'clinical_relevance',
    image: 'image',
    category_id: 'category_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by'
  };

  export type CellScalarFieldEnum = (typeof CellScalarFieldEnum)[keyof typeof CellScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const MentionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type MentionScalarFieldEnum = (typeof MentionScalarFieldEnum)[keyof typeof MentionScalarFieldEnum]


  export const CellMentionScalarFieldEnum: {
    id: 'id',
    cell_id: 'cell_id',
    mention_id: 'mention_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CellMentionScalarFieldEnum = (typeof CellMentionScalarFieldEnum)[keyof typeof CellMentionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    patients?: PatientsListRelationFilter
    cell?: CellListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    patients?: PatientsOrderByRelationAggregateInput
    cell?: CellOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    patients?: PatientsListRelationFilter
    cell?: CellListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PatientsWhereInput = {
    AND?: PatientsWhereInput | PatientsWhereInput[]
    OR?: PatientsWhereInput[]
    NOT?: PatientsWhereInput | PatientsWhereInput[]
    id?: StringFilter<"Patients"> | string
    blade?: StringFilter<"Patients"> | string
    age?: IntFilter<"Patients"> | number
    genre?: StringFilter<"Patients"> | string
    created_at?: DateTimeFilter<"Patients"> | Date | string
    updated_at?: DateTimeFilter<"Patients"> | Date | string
    ownerId?: StringFilter<"Patients"> | string
    erythrocyte?: ErythrocyteListRelationFilter
    leukocyte?: LeukocyteListRelationFilter
    platelets?: PlateletsListRelationFilter
    urine?: UrineListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PatientsOrderByWithRelationInput = {
    id?: SortOrder
    blade?: SortOrder
    age?: SortOrder
    genre?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    ownerId?: SortOrder
    erythrocyte?: ErythrocyteOrderByRelationAggregateInput
    leukocyte?: LeukocyteOrderByRelationAggregateInput
    platelets?: PlateletsOrderByRelationAggregateInput
    urine?: UrineOrderByRelationAggregateInput
    owner?: UserOrderByWithRelationInput
  }

  export type PatientsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PatientsWhereInput | PatientsWhereInput[]
    OR?: PatientsWhereInput[]
    NOT?: PatientsWhereInput | PatientsWhereInput[]
    blade?: StringFilter<"Patients"> | string
    age?: IntFilter<"Patients"> | number
    genre?: StringFilter<"Patients"> | string
    created_at?: DateTimeFilter<"Patients"> | Date | string
    updated_at?: DateTimeFilter<"Patients"> | Date | string
    ownerId?: StringFilter<"Patients"> | string
    erythrocyte?: ErythrocyteListRelationFilter
    leukocyte?: LeukocyteListRelationFilter
    platelets?: PlateletsListRelationFilter
    urine?: UrineListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PatientsOrderByWithAggregationInput = {
    id?: SortOrder
    blade?: SortOrder
    age?: SortOrder
    genre?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    ownerId?: SortOrder
    _count?: PatientsCountOrderByAggregateInput
    _avg?: PatientsAvgOrderByAggregateInput
    _max?: PatientsMaxOrderByAggregateInput
    _min?: PatientsMinOrderByAggregateInput
    _sum?: PatientsSumOrderByAggregateInput
  }

  export type PatientsScalarWhereWithAggregatesInput = {
    AND?: PatientsScalarWhereWithAggregatesInput | PatientsScalarWhereWithAggregatesInput[]
    OR?: PatientsScalarWhereWithAggregatesInput[]
    NOT?: PatientsScalarWhereWithAggregatesInput | PatientsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Patients"> | string
    blade?: StringWithAggregatesFilter<"Patients"> | string
    age?: IntWithAggregatesFilter<"Patients"> | number
    genre?: StringWithAggregatesFilter<"Patients"> | string
    created_at?: DateTimeWithAggregatesFilter<"Patients"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Patients"> | Date | string
    ownerId?: StringWithAggregatesFilter<"Patients"> | string
  }

  export type ErythrocyteWhereInput = {
    AND?: ErythrocyteWhereInput | ErythrocyteWhereInput[]
    OR?: ErythrocyteWhereInput[]
    NOT?: ErythrocyteWhereInput | ErythrocyteWhereInput[]
    id?: IntFilter<"Erythrocyte"> | number
    erythrocyte?: FloatNullableFilter<"Erythrocyte"> | number | null
    hemoglobin?: FloatNullableFilter<"Erythrocyte"> | number | null
    hematocrit?: FloatNullableFilter<"Erythrocyte"> | number | null
    RDW?: FloatNullableFilter<"Erythrocyte"> | number | null
    patient_id?: StringFilter<"Erythrocyte"> | string
    created_at?: DateTimeFilter<"Erythrocyte"> | Date | string
    updated_at?: DateTimeFilter<"Erythrocyte"> | Date | string
    patient?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
  }

  export type ErythrocyteOrderByWithRelationInput = {
    id?: SortOrder
    erythrocyte?: SortOrderInput | SortOrder
    hemoglobin?: SortOrderInput | SortOrder
    hematocrit?: SortOrderInput | SortOrder
    RDW?: SortOrderInput | SortOrder
    patient_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    patient?: PatientsOrderByWithRelationInput
  }

  export type ErythrocyteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ErythrocyteWhereInput | ErythrocyteWhereInput[]
    OR?: ErythrocyteWhereInput[]
    NOT?: ErythrocyteWhereInput | ErythrocyteWhereInput[]
    erythrocyte?: FloatNullableFilter<"Erythrocyte"> | number | null
    hemoglobin?: FloatNullableFilter<"Erythrocyte"> | number | null
    hematocrit?: FloatNullableFilter<"Erythrocyte"> | number | null
    RDW?: FloatNullableFilter<"Erythrocyte"> | number | null
    patient_id?: StringFilter<"Erythrocyte"> | string
    created_at?: DateTimeFilter<"Erythrocyte"> | Date | string
    updated_at?: DateTimeFilter<"Erythrocyte"> | Date | string
    patient?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
  }, "id">

  export type ErythrocyteOrderByWithAggregationInput = {
    id?: SortOrder
    erythrocyte?: SortOrderInput | SortOrder
    hemoglobin?: SortOrderInput | SortOrder
    hematocrit?: SortOrderInput | SortOrder
    RDW?: SortOrderInput | SortOrder
    patient_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ErythrocyteCountOrderByAggregateInput
    _avg?: ErythrocyteAvgOrderByAggregateInput
    _max?: ErythrocyteMaxOrderByAggregateInput
    _min?: ErythrocyteMinOrderByAggregateInput
    _sum?: ErythrocyteSumOrderByAggregateInput
  }

  export type ErythrocyteScalarWhereWithAggregatesInput = {
    AND?: ErythrocyteScalarWhereWithAggregatesInput | ErythrocyteScalarWhereWithAggregatesInput[]
    OR?: ErythrocyteScalarWhereWithAggregatesInput[]
    NOT?: ErythrocyteScalarWhereWithAggregatesInput | ErythrocyteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Erythrocyte"> | number
    erythrocyte?: FloatNullableWithAggregatesFilter<"Erythrocyte"> | number | null
    hemoglobin?: FloatNullableWithAggregatesFilter<"Erythrocyte"> | number | null
    hematocrit?: FloatNullableWithAggregatesFilter<"Erythrocyte"> | number | null
    RDW?: FloatNullableWithAggregatesFilter<"Erythrocyte"> | number | null
    patient_id?: StringWithAggregatesFilter<"Erythrocyte"> | string
    created_at?: DateTimeWithAggregatesFilter<"Erythrocyte"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Erythrocyte"> | Date | string
  }

  export type LeukocyteWhereInput = {
    AND?: LeukocyteWhereInput | LeukocyteWhereInput[]
    OR?: LeukocyteWhereInput[]
    NOT?: LeukocyteWhereInput | LeukocyteWhereInput[]
    id?: IntFilter<"Leukocyte"> | number
    leukocyte?: FloatNullableFilter<"Leukocyte"> | number | null
    neutrophils?: FloatNullableFilter<"Leukocyte"> | number | null
    bandNeutrophils?: FloatNullableFilter<"Leukocyte"> | number | null
    lymphocytes?: FloatNullableFilter<"Leukocyte"> | number | null
    monocytes?: FloatNullableFilter<"Leukocyte"> | number | null
    eosinophils?: FloatNullableFilter<"Leukocyte"> | number | null
    basophils?: FloatNullableFilter<"Leukocyte"> | number | null
    patient_id?: StringFilter<"Leukocyte"> | string
    created_at?: DateTimeFilter<"Leukocyte"> | Date | string
    updated_at?: DateTimeFilter<"Leukocyte"> | Date | string
    patient?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
  }

  export type LeukocyteOrderByWithRelationInput = {
    id?: SortOrder
    leukocyte?: SortOrderInput | SortOrder
    neutrophils?: SortOrderInput | SortOrder
    bandNeutrophils?: SortOrderInput | SortOrder
    lymphocytes?: SortOrderInput | SortOrder
    monocytes?: SortOrderInput | SortOrder
    eosinophils?: SortOrderInput | SortOrder
    basophils?: SortOrderInput | SortOrder
    patient_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    patient?: PatientsOrderByWithRelationInput
  }

  export type LeukocyteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LeukocyteWhereInput | LeukocyteWhereInput[]
    OR?: LeukocyteWhereInput[]
    NOT?: LeukocyteWhereInput | LeukocyteWhereInput[]
    leukocyte?: FloatNullableFilter<"Leukocyte"> | number | null
    neutrophils?: FloatNullableFilter<"Leukocyte"> | number | null
    bandNeutrophils?: FloatNullableFilter<"Leukocyte"> | number | null
    lymphocytes?: FloatNullableFilter<"Leukocyte"> | number | null
    monocytes?: FloatNullableFilter<"Leukocyte"> | number | null
    eosinophils?: FloatNullableFilter<"Leukocyte"> | number | null
    basophils?: FloatNullableFilter<"Leukocyte"> | number | null
    patient_id?: StringFilter<"Leukocyte"> | string
    created_at?: DateTimeFilter<"Leukocyte"> | Date | string
    updated_at?: DateTimeFilter<"Leukocyte"> | Date | string
    patient?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
  }, "id">

  export type LeukocyteOrderByWithAggregationInput = {
    id?: SortOrder
    leukocyte?: SortOrderInput | SortOrder
    neutrophils?: SortOrderInput | SortOrder
    bandNeutrophils?: SortOrderInput | SortOrder
    lymphocytes?: SortOrderInput | SortOrder
    monocytes?: SortOrderInput | SortOrder
    eosinophils?: SortOrderInput | SortOrder
    basophils?: SortOrderInput | SortOrder
    patient_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: LeukocyteCountOrderByAggregateInput
    _avg?: LeukocyteAvgOrderByAggregateInput
    _max?: LeukocyteMaxOrderByAggregateInput
    _min?: LeukocyteMinOrderByAggregateInput
    _sum?: LeukocyteSumOrderByAggregateInput
  }

  export type LeukocyteScalarWhereWithAggregatesInput = {
    AND?: LeukocyteScalarWhereWithAggregatesInput | LeukocyteScalarWhereWithAggregatesInput[]
    OR?: LeukocyteScalarWhereWithAggregatesInput[]
    NOT?: LeukocyteScalarWhereWithAggregatesInput | LeukocyteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Leukocyte"> | number
    leukocyte?: FloatNullableWithAggregatesFilter<"Leukocyte"> | number | null
    neutrophils?: FloatNullableWithAggregatesFilter<"Leukocyte"> | number | null
    bandNeutrophils?: FloatNullableWithAggregatesFilter<"Leukocyte"> | number | null
    lymphocytes?: FloatNullableWithAggregatesFilter<"Leukocyte"> | number | null
    monocytes?: FloatNullableWithAggregatesFilter<"Leukocyte"> | number | null
    eosinophils?: FloatNullableWithAggregatesFilter<"Leukocyte"> | number | null
    basophils?: FloatNullableWithAggregatesFilter<"Leukocyte"> | number | null
    patient_id?: StringWithAggregatesFilter<"Leukocyte"> | string
    created_at?: DateTimeWithAggregatesFilter<"Leukocyte"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Leukocyte"> | Date | string
  }

  export type PlateletsWhereInput = {
    AND?: PlateletsWhereInput | PlateletsWhereInput[]
    OR?: PlateletsWhereInput[]
    NOT?: PlateletsWhereInput | PlateletsWhereInput[]
    id?: IntFilter<"Platelets"> | number
    platelets?: FloatNullableFilter<"Platelets"> | number | null
    patient_id?: StringFilter<"Platelets"> | string
    created_at?: DateTimeFilter<"Platelets"> | Date | string
    updated_at?: DateTimeFilter<"Platelets"> | Date | string
    patient?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
  }

  export type PlateletsOrderByWithRelationInput = {
    id?: SortOrder
    platelets?: SortOrderInput | SortOrder
    patient_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    patient?: PatientsOrderByWithRelationInput
  }

  export type PlateletsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlateletsWhereInput | PlateletsWhereInput[]
    OR?: PlateletsWhereInput[]
    NOT?: PlateletsWhereInput | PlateletsWhereInput[]
    platelets?: FloatNullableFilter<"Platelets"> | number | null
    patient_id?: StringFilter<"Platelets"> | string
    created_at?: DateTimeFilter<"Platelets"> | Date | string
    updated_at?: DateTimeFilter<"Platelets"> | Date | string
    patient?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
  }, "id">

  export type PlateletsOrderByWithAggregationInput = {
    id?: SortOrder
    platelets?: SortOrderInput | SortOrder
    patient_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PlateletsCountOrderByAggregateInput
    _avg?: PlateletsAvgOrderByAggregateInput
    _max?: PlateletsMaxOrderByAggregateInput
    _min?: PlateletsMinOrderByAggregateInput
    _sum?: PlateletsSumOrderByAggregateInput
  }

  export type PlateletsScalarWhereWithAggregatesInput = {
    AND?: PlateletsScalarWhereWithAggregatesInput | PlateletsScalarWhereWithAggregatesInput[]
    OR?: PlateletsScalarWhereWithAggregatesInput[]
    NOT?: PlateletsScalarWhereWithAggregatesInput | PlateletsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Platelets"> | number
    platelets?: FloatNullableWithAggregatesFilter<"Platelets"> | number | null
    patient_id?: StringWithAggregatesFilter<"Platelets"> | string
    created_at?: DateTimeWithAggregatesFilter<"Platelets"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Platelets"> | Date | string
  }

  export type UrineWhereInput = {
    AND?: UrineWhereInput | UrineWhereInput[]
    OR?: UrineWhereInput[]
    NOT?: UrineWhereInput | UrineWhereInput[]
    id?: IntFilter<"Urine"> | number
    volume?: FloatNullableFilter<"Urine"> | number | null
    color?: StringNullableFilter<"Urine"> | string | null
    ph?: FloatNullableFilter<"Urine"> | number | null
    density?: FloatNullableFilter<"Urine"> | number | null
    protein?: StringNullableFilter<"Urine"> | string | null
    glucose?: StringNullableFilter<"Urine"> | string | null
    ketones?: StringNullableFilter<"Urine"> | string | null
    nitrites?: BoolNullableFilter<"Urine"> | boolean | null
    hemoglobin?: StringNullableFilter<"Urine"> | string | null
    urobilinogen?: StringNullableFilter<"Urine"> | string | null
    sed_leukocytes?: StringNullableFilter<"Urine"> | string | null
    sed_erythrocytes?: StringNullableFilter<"Urine"> | string | null
    sed_epithelial?: StringNullableFilter<"Urine"> | string | null
    sed_mucus?: StringNullableFilter<"Urine"> | string | null
    sed_cylinders?: StringNullableFilter<"Urine"> | string | null
    sed_crystals?: StringNullableFilter<"Urine"> | string | null
    sed_bacteria?: StringNullableFilter<"Urine"> | string | null
    created_at?: DateTimeFilter<"Urine"> | Date | string
    updated_at?: DateTimeFilter<"Urine"> | Date | string
    patient_id?: StringFilter<"Urine"> | string
    patient?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
  }

  export type UrineOrderByWithRelationInput = {
    id?: SortOrder
    volume?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    ph?: SortOrderInput | SortOrder
    density?: SortOrderInput | SortOrder
    protein?: SortOrderInput | SortOrder
    glucose?: SortOrderInput | SortOrder
    ketones?: SortOrderInput | SortOrder
    nitrites?: SortOrderInput | SortOrder
    hemoglobin?: SortOrderInput | SortOrder
    urobilinogen?: SortOrderInput | SortOrder
    sed_leukocytes?: SortOrderInput | SortOrder
    sed_erythrocytes?: SortOrderInput | SortOrder
    sed_epithelial?: SortOrderInput | SortOrder
    sed_mucus?: SortOrderInput | SortOrder
    sed_cylinders?: SortOrderInput | SortOrder
    sed_crystals?: SortOrderInput | SortOrder
    sed_bacteria?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    patient_id?: SortOrder
    patient?: PatientsOrderByWithRelationInput
  }

  export type UrineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UrineWhereInput | UrineWhereInput[]
    OR?: UrineWhereInput[]
    NOT?: UrineWhereInput | UrineWhereInput[]
    volume?: FloatNullableFilter<"Urine"> | number | null
    color?: StringNullableFilter<"Urine"> | string | null
    ph?: FloatNullableFilter<"Urine"> | number | null
    density?: FloatNullableFilter<"Urine"> | number | null
    protein?: StringNullableFilter<"Urine"> | string | null
    glucose?: StringNullableFilter<"Urine"> | string | null
    ketones?: StringNullableFilter<"Urine"> | string | null
    nitrites?: BoolNullableFilter<"Urine"> | boolean | null
    hemoglobin?: StringNullableFilter<"Urine"> | string | null
    urobilinogen?: StringNullableFilter<"Urine"> | string | null
    sed_leukocytes?: StringNullableFilter<"Urine"> | string | null
    sed_erythrocytes?: StringNullableFilter<"Urine"> | string | null
    sed_epithelial?: StringNullableFilter<"Urine"> | string | null
    sed_mucus?: StringNullableFilter<"Urine"> | string | null
    sed_cylinders?: StringNullableFilter<"Urine"> | string | null
    sed_crystals?: StringNullableFilter<"Urine"> | string | null
    sed_bacteria?: StringNullableFilter<"Urine"> | string | null
    created_at?: DateTimeFilter<"Urine"> | Date | string
    updated_at?: DateTimeFilter<"Urine"> | Date | string
    patient_id?: StringFilter<"Urine"> | string
    patient?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
  }, "id">

  export type UrineOrderByWithAggregationInput = {
    id?: SortOrder
    volume?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    ph?: SortOrderInput | SortOrder
    density?: SortOrderInput | SortOrder
    protein?: SortOrderInput | SortOrder
    glucose?: SortOrderInput | SortOrder
    ketones?: SortOrderInput | SortOrder
    nitrites?: SortOrderInput | SortOrder
    hemoglobin?: SortOrderInput | SortOrder
    urobilinogen?: SortOrderInput | SortOrder
    sed_leukocytes?: SortOrderInput | SortOrder
    sed_erythrocytes?: SortOrderInput | SortOrder
    sed_epithelial?: SortOrderInput | SortOrder
    sed_mucus?: SortOrderInput | SortOrder
    sed_cylinders?: SortOrderInput | SortOrder
    sed_crystals?: SortOrderInput | SortOrder
    sed_bacteria?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    patient_id?: SortOrder
    _count?: UrineCountOrderByAggregateInput
    _avg?: UrineAvgOrderByAggregateInput
    _max?: UrineMaxOrderByAggregateInput
    _min?: UrineMinOrderByAggregateInput
    _sum?: UrineSumOrderByAggregateInput
  }

  export type UrineScalarWhereWithAggregatesInput = {
    AND?: UrineScalarWhereWithAggregatesInput | UrineScalarWhereWithAggregatesInput[]
    OR?: UrineScalarWhereWithAggregatesInput[]
    NOT?: UrineScalarWhereWithAggregatesInput | UrineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Urine"> | number
    volume?: FloatNullableWithAggregatesFilter<"Urine"> | number | null
    color?: StringNullableWithAggregatesFilter<"Urine"> | string | null
    ph?: FloatNullableWithAggregatesFilter<"Urine"> | number | null
    density?: FloatNullableWithAggregatesFilter<"Urine"> | number | null
    protein?: StringNullableWithAggregatesFilter<"Urine"> | string | null
    glucose?: StringNullableWithAggregatesFilter<"Urine"> | string | null
    ketones?: StringNullableWithAggregatesFilter<"Urine"> | string | null
    nitrites?: BoolNullableWithAggregatesFilter<"Urine"> | boolean | null
    hemoglobin?: StringNullableWithAggregatesFilter<"Urine"> | string | null
    urobilinogen?: StringNullableWithAggregatesFilter<"Urine"> | string | null
    sed_leukocytes?: StringNullableWithAggregatesFilter<"Urine"> | string | null
    sed_erythrocytes?: StringNullableWithAggregatesFilter<"Urine"> | string | null
    sed_epithelial?: StringNullableWithAggregatesFilter<"Urine"> | string | null
    sed_mucus?: StringNullableWithAggregatesFilter<"Urine"> | string | null
    sed_cylinders?: StringNullableWithAggregatesFilter<"Urine"> | string | null
    sed_crystals?: StringNullableWithAggregatesFilter<"Urine"> | string | null
    sed_bacteria?: StringNullableWithAggregatesFilter<"Urine"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Urine"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Urine"> | Date | string
    patient_id?: StringWithAggregatesFilter<"Urine"> | string
  }

  export type CellWhereInput = {
    AND?: CellWhereInput | CellWhereInput[]
    OR?: CellWhereInput[]
    NOT?: CellWhereInput | CellWhereInput[]
    id?: IntFilter<"Cell"> | number
    name?: StringFilter<"Cell"> | string
    morphology?: StringFilter<"Cell"> | string
    clinical_relevance?: StringFilter<"Cell"> | string
    image?: StringFilter<"Cell"> | string
    category_id?: IntFilter<"Cell"> | number
    created_at?: DateTimeFilter<"Cell"> | Date | string
    updated_at?: DateTimeFilter<"Cell"> | Date | string
    created_by?: StringFilter<"Cell"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    cell_mentions?: CellMentionListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CellOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    morphology?: SortOrder
    clinical_relevance?: SortOrder
    image?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    category?: CategoryOrderByWithRelationInput
    cell_mentions?: CellMentionOrderByRelationAggregateInput
    owner?: UserOrderByWithRelationInput
  }

  export type CellWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CellWhereInput | CellWhereInput[]
    OR?: CellWhereInput[]
    NOT?: CellWhereInput | CellWhereInput[]
    name?: StringFilter<"Cell"> | string
    morphology?: StringFilter<"Cell"> | string
    clinical_relevance?: StringFilter<"Cell"> | string
    image?: StringFilter<"Cell"> | string
    category_id?: IntFilter<"Cell"> | number
    created_at?: DateTimeFilter<"Cell"> | Date | string
    updated_at?: DateTimeFilter<"Cell"> | Date | string
    created_by?: StringFilter<"Cell"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    cell_mentions?: CellMentionListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CellOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    morphology?: SortOrder
    clinical_relevance?: SortOrder
    image?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    _count?: CellCountOrderByAggregateInput
    _avg?: CellAvgOrderByAggregateInput
    _max?: CellMaxOrderByAggregateInput
    _min?: CellMinOrderByAggregateInput
    _sum?: CellSumOrderByAggregateInput
  }

  export type CellScalarWhereWithAggregatesInput = {
    AND?: CellScalarWhereWithAggregatesInput | CellScalarWhereWithAggregatesInput[]
    OR?: CellScalarWhereWithAggregatesInput[]
    NOT?: CellScalarWhereWithAggregatesInput | CellScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cell"> | number
    name?: StringWithAggregatesFilter<"Cell"> | string
    morphology?: StringWithAggregatesFilter<"Cell"> | string
    clinical_relevance?: StringWithAggregatesFilter<"Cell"> | string
    image?: StringWithAggregatesFilter<"Cell"> | string
    category_id?: IntWithAggregatesFilter<"Cell"> | number
    created_at?: DateTimeWithAggregatesFilter<"Cell"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Cell"> | Date | string
    created_by?: StringWithAggregatesFilter<"Cell"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    created_at?: DateTimeFilter<"Category"> | Date | string
    updated_at?: DateTimeFilter<"Category"> | Date | string
    cell?: CellListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    cell?: CellOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    created_at?: DateTimeFilter<"Category"> | Date | string
    updated_at?: DateTimeFilter<"Category"> | Date | string
    cell?: CellListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    created_at?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type MentionWhereInput = {
    AND?: MentionWhereInput | MentionWhereInput[]
    OR?: MentionWhereInput[]
    NOT?: MentionWhereInput | MentionWhereInput[]
    id?: IntFilter<"Mention"> | number
    name?: StringFilter<"Mention"> | string
    url?: StringNullableFilter<"Mention"> | string | null
    created_at?: DateTimeFilter<"Mention"> | Date | string
    updated_at?: DateTimeFilter<"Mention"> | Date | string
    cell_mentions?: CellMentionListRelationFilter
  }

  export type MentionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    cell_mentions?: CellMentionOrderByRelationAggregateInput
  }

  export type MentionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MentionWhereInput | MentionWhereInput[]
    OR?: MentionWhereInput[]
    NOT?: MentionWhereInput | MentionWhereInput[]
    name?: StringFilter<"Mention"> | string
    url?: StringNullableFilter<"Mention"> | string | null
    created_at?: DateTimeFilter<"Mention"> | Date | string
    updated_at?: DateTimeFilter<"Mention"> | Date | string
    cell_mentions?: CellMentionListRelationFilter
  }, "id">

  export type MentionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: MentionCountOrderByAggregateInput
    _avg?: MentionAvgOrderByAggregateInput
    _max?: MentionMaxOrderByAggregateInput
    _min?: MentionMinOrderByAggregateInput
    _sum?: MentionSumOrderByAggregateInput
  }

  export type MentionScalarWhereWithAggregatesInput = {
    AND?: MentionScalarWhereWithAggregatesInput | MentionScalarWhereWithAggregatesInput[]
    OR?: MentionScalarWhereWithAggregatesInput[]
    NOT?: MentionScalarWhereWithAggregatesInput | MentionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mention"> | number
    name?: StringWithAggregatesFilter<"Mention"> | string
    url?: StringNullableWithAggregatesFilter<"Mention"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Mention"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Mention"> | Date | string
  }

  export type CellMentionWhereInput = {
    AND?: CellMentionWhereInput | CellMentionWhereInput[]
    OR?: CellMentionWhereInput[]
    NOT?: CellMentionWhereInput | CellMentionWhereInput[]
    id?: IntFilter<"CellMention"> | number
    cell_id?: IntFilter<"CellMention"> | number
    mention_id?: IntFilter<"CellMention"> | number
    created_at?: DateTimeFilter<"CellMention"> | Date | string
    updated_at?: DateTimeFilter<"CellMention"> | Date | string
    cell?: XOR<CellScalarRelationFilter, CellWhereInput>
    mention?: XOR<MentionScalarRelationFilter, MentionWhereInput>
  }

  export type CellMentionOrderByWithRelationInput = {
    id?: SortOrder
    cell_id?: SortOrder
    mention_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    cell?: CellOrderByWithRelationInput
    mention?: MentionOrderByWithRelationInput
  }

  export type CellMentionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CellMentionWhereInput | CellMentionWhereInput[]
    OR?: CellMentionWhereInput[]
    NOT?: CellMentionWhereInput | CellMentionWhereInput[]
    cell_id?: IntFilter<"CellMention"> | number
    mention_id?: IntFilter<"CellMention"> | number
    created_at?: DateTimeFilter<"CellMention"> | Date | string
    updated_at?: DateTimeFilter<"CellMention"> | Date | string
    cell?: XOR<CellScalarRelationFilter, CellWhereInput>
    mention?: XOR<MentionScalarRelationFilter, MentionWhereInput>
  }, "id">

  export type CellMentionOrderByWithAggregationInput = {
    id?: SortOrder
    cell_id?: SortOrder
    mention_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CellMentionCountOrderByAggregateInput
    _avg?: CellMentionAvgOrderByAggregateInput
    _max?: CellMentionMaxOrderByAggregateInput
    _min?: CellMentionMinOrderByAggregateInput
    _sum?: CellMentionSumOrderByAggregateInput
  }

  export type CellMentionScalarWhereWithAggregatesInput = {
    AND?: CellMentionScalarWhereWithAggregatesInput | CellMentionScalarWhereWithAggregatesInput[]
    OR?: CellMentionScalarWhereWithAggregatesInput[]
    NOT?: CellMentionScalarWhereWithAggregatesInput | CellMentionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CellMention"> | number
    cell_id?: IntWithAggregatesFilter<"CellMention"> | number
    mention_id?: IntWithAggregatesFilter<"CellMention"> | number
    created_at?: DateTimeWithAggregatesFilter<"CellMention"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"CellMention"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    created_at?: Date | string
    updated_at?: Date | string
    patients?: PatientsCreateNestedManyWithoutOwnerInput
    cell?: CellCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    created_at?: Date | string
    updated_at?: Date | string
    patients?: PatientsUncheckedCreateNestedManyWithoutOwnerInput
    cell?: CellUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientsUpdateManyWithoutOwnerNestedInput
    cell?: CellUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientsUncheckedUpdateManyWithoutOwnerNestedInput
    cell?: CellUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientsCreateInput = {
    id?: string
    blade: string
    age: number
    genre: string
    created_at?: Date | string
    updated_at?: Date | string
    erythrocyte?: ErythrocyteCreateNestedManyWithoutPatientInput
    leukocyte?: LeukocyteCreateNestedManyWithoutPatientInput
    platelets?: PlateletsCreateNestedManyWithoutPatientInput
    urine?: UrineCreateNestedManyWithoutPatientInput
    owner: UserCreateNestedOneWithoutPatientsInput
  }

  export type PatientsUncheckedCreateInput = {
    id?: string
    blade: string
    age: number
    genre: string
    created_at?: Date | string
    updated_at?: Date | string
    ownerId: string
    erythrocyte?: ErythrocyteUncheckedCreateNestedManyWithoutPatientInput
    leukocyte?: LeukocyteUncheckedCreateNestedManyWithoutPatientInput
    platelets?: PlateletsUncheckedCreateNestedManyWithoutPatientInput
    urine?: UrineUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    blade?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    erythrocyte?: ErythrocyteUpdateManyWithoutPatientNestedInput
    leukocyte?: LeukocyteUpdateManyWithoutPatientNestedInput
    platelets?: PlateletsUpdateManyWithoutPatientNestedInput
    urine?: UrineUpdateManyWithoutPatientNestedInput
    owner?: UserUpdateOneRequiredWithoutPatientsNestedInput
  }

  export type PatientsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    blade?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    erythrocyte?: ErythrocyteUncheckedUpdateManyWithoutPatientNestedInput
    leukocyte?: LeukocyteUncheckedUpdateManyWithoutPatientNestedInput
    platelets?: PlateletsUncheckedUpdateManyWithoutPatientNestedInput
    urine?: UrineUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientsCreateManyInput = {
    id?: string
    blade: string
    age: number
    genre: string
    created_at?: Date | string
    updated_at?: Date | string
    ownerId: string
  }

  export type PatientsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    blade?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    blade?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type ErythrocyteCreateInput = {
    erythrocyte?: number | null
    hemoglobin?: number | null
    hematocrit?: number | null
    RDW?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    patient: PatientsCreateNestedOneWithoutErythrocyteInput
  }

  export type ErythrocyteUncheckedCreateInput = {
    id?: number
    erythrocyte?: number | null
    hemoglobin?: number | null
    hematocrit?: number | null
    RDW?: number | null
    patient_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ErythrocyteUpdateInput = {
    erythrocyte?: NullableFloatFieldUpdateOperationsInput | number | null
    hemoglobin?: NullableFloatFieldUpdateOperationsInput | number | null
    hematocrit?: NullableFloatFieldUpdateOperationsInput | number | null
    RDW?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientsUpdateOneRequiredWithoutErythrocyteNestedInput
  }

  export type ErythrocyteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    erythrocyte?: NullableFloatFieldUpdateOperationsInput | number | null
    hemoglobin?: NullableFloatFieldUpdateOperationsInput | number | null
    hematocrit?: NullableFloatFieldUpdateOperationsInput | number | null
    RDW?: NullableFloatFieldUpdateOperationsInput | number | null
    patient_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ErythrocyteCreateManyInput = {
    id?: number
    erythrocyte?: number | null
    hemoglobin?: number | null
    hematocrit?: number | null
    RDW?: number | null
    patient_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ErythrocyteUpdateManyMutationInput = {
    erythrocyte?: NullableFloatFieldUpdateOperationsInput | number | null
    hemoglobin?: NullableFloatFieldUpdateOperationsInput | number | null
    hematocrit?: NullableFloatFieldUpdateOperationsInput | number | null
    RDW?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ErythrocyteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    erythrocyte?: NullableFloatFieldUpdateOperationsInput | number | null
    hemoglobin?: NullableFloatFieldUpdateOperationsInput | number | null
    hematocrit?: NullableFloatFieldUpdateOperationsInput | number | null
    RDW?: NullableFloatFieldUpdateOperationsInput | number | null
    patient_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeukocyteCreateInput = {
    leukocyte?: number | null
    neutrophils?: number | null
    bandNeutrophils?: number | null
    lymphocytes?: number | null
    monocytes?: number | null
    eosinophils?: number | null
    basophils?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    patient: PatientsCreateNestedOneWithoutLeukocyteInput
  }

  export type LeukocyteUncheckedCreateInput = {
    id?: number
    leukocyte?: number | null
    neutrophils?: number | null
    bandNeutrophils?: number | null
    lymphocytes?: number | null
    monocytes?: number | null
    eosinophils?: number | null
    basophils?: number | null
    patient_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LeukocyteUpdateInput = {
    leukocyte?: NullableFloatFieldUpdateOperationsInput | number | null
    neutrophils?: NullableFloatFieldUpdateOperationsInput | number | null
    bandNeutrophils?: NullableFloatFieldUpdateOperationsInput | number | null
    lymphocytes?: NullableFloatFieldUpdateOperationsInput | number | null
    monocytes?: NullableFloatFieldUpdateOperationsInput | number | null
    eosinophils?: NullableFloatFieldUpdateOperationsInput | number | null
    basophils?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientsUpdateOneRequiredWithoutLeukocyteNestedInput
  }

  export type LeukocyteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    leukocyte?: NullableFloatFieldUpdateOperationsInput | number | null
    neutrophils?: NullableFloatFieldUpdateOperationsInput | number | null
    bandNeutrophils?: NullableFloatFieldUpdateOperationsInput | number | null
    lymphocytes?: NullableFloatFieldUpdateOperationsInput | number | null
    monocytes?: NullableFloatFieldUpdateOperationsInput | number | null
    eosinophils?: NullableFloatFieldUpdateOperationsInput | number | null
    basophils?: NullableFloatFieldUpdateOperationsInput | number | null
    patient_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeukocyteCreateManyInput = {
    id?: number
    leukocyte?: number | null
    neutrophils?: number | null
    bandNeutrophils?: number | null
    lymphocytes?: number | null
    monocytes?: number | null
    eosinophils?: number | null
    basophils?: number | null
    patient_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LeukocyteUpdateManyMutationInput = {
    leukocyte?: NullableFloatFieldUpdateOperationsInput | number | null
    neutrophils?: NullableFloatFieldUpdateOperationsInput | number | null
    bandNeutrophils?: NullableFloatFieldUpdateOperationsInput | number | null
    lymphocytes?: NullableFloatFieldUpdateOperationsInput | number | null
    monocytes?: NullableFloatFieldUpdateOperationsInput | number | null
    eosinophils?: NullableFloatFieldUpdateOperationsInput | number | null
    basophils?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeukocyteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    leukocyte?: NullableFloatFieldUpdateOperationsInput | number | null
    neutrophils?: NullableFloatFieldUpdateOperationsInput | number | null
    bandNeutrophils?: NullableFloatFieldUpdateOperationsInput | number | null
    lymphocytes?: NullableFloatFieldUpdateOperationsInput | number | null
    monocytes?: NullableFloatFieldUpdateOperationsInput | number | null
    eosinophils?: NullableFloatFieldUpdateOperationsInput | number | null
    basophils?: NullableFloatFieldUpdateOperationsInput | number | null
    patient_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlateletsCreateInput = {
    platelets?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    patient: PatientsCreateNestedOneWithoutPlateletsInput
  }

  export type PlateletsUncheckedCreateInput = {
    id?: number
    platelets?: number | null
    patient_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PlateletsUpdateInput = {
    platelets?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientsUpdateOneRequiredWithoutPlateletsNestedInput
  }

  export type PlateletsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    platelets?: NullableFloatFieldUpdateOperationsInput | number | null
    patient_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlateletsCreateManyInput = {
    id?: number
    platelets?: number | null
    patient_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PlateletsUpdateManyMutationInput = {
    platelets?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlateletsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    platelets?: NullableFloatFieldUpdateOperationsInput | number | null
    patient_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UrineCreateInput = {
    volume?: number | null
    color?: string | null
    ph?: number | null
    density?: number | null
    protein?: string | null
    glucose?: string | null
    ketones?: string | null
    nitrites?: boolean | null
    hemoglobin?: string | null
    urobilinogen?: string | null
    sed_leukocytes?: string | null
    sed_erythrocytes?: string | null
    sed_epithelial?: string | null
    sed_mucus?: string | null
    sed_cylinders?: string | null
    sed_crystals?: string | null
    sed_bacteria?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    patient: PatientsCreateNestedOneWithoutUrineInput
  }

  export type UrineUncheckedCreateInput = {
    id?: number
    volume?: number | null
    color?: string | null
    ph?: number | null
    density?: number | null
    protein?: string | null
    glucose?: string | null
    ketones?: string | null
    nitrites?: boolean | null
    hemoglobin?: string | null
    urobilinogen?: string | null
    sed_leukocytes?: string | null
    sed_erythrocytes?: string | null
    sed_epithelial?: string | null
    sed_mucus?: string | null
    sed_cylinders?: string | null
    sed_crystals?: string | null
    sed_bacteria?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    patient_id: string
  }

  export type UrineUpdateInput = {
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    ph?: NullableFloatFieldUpdateOperationsInput | number | null
    density?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableStringFieldUpdateOperationsInput | string | null
    glucose?: NullableStringFieldUpdateOperationsInput | string | null
    ketones?: NullableStringFieldUpdateOperationsInput | string | null
    nitrites?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hemoglobin?: NullableStringFieldUpdateOperationsInput | string | null
    urobilinogen?: NullableStringFieldUpdateOperationsInput | string | null
    sed_leukocytes?: NullableStringFieldUpdateOperationsInput | string | null
    sed_erythrocytes?: NullableStringFieldUpdateOperationsInput | string | null
    sed_epithelial?: NullableStringFieldUpdateOperationsInput | string | null
    sed_mucus?: NullableStringFieldUpdateOperationsInput | string | null
    sed_cylinders?: NullableStringFieldUpdateOperationsInput | string | null
    sed_crystals?: NullableStringFieldUpdateOperationsInput | string | null
    sed_bacteria?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientsUpdateOneRequiredWithoutUrineNestedInput
  }

  export type UrineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    ph?: NullableFloatFieldUpdateOperationsInput | number | null
    density?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableStringFieldUpdateOperationsInput | string | null
    glucose?: NullableStringFieldUpdateOperationsInput | string | null
    ketones?: NullableStringFieldUpdateOperationsInput | string | null
    nitrites?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hemoglobin?: NullableStringFieldUpdateOperationsInput | string | null
    urobilinogen?: NullableStringFieldUpdateOperationsInput | string | null
    sed_leukocytes?: NullableStringFieldUpdateOperationsInput | string | null
    sed_erythrocytes?: NullableStringFieldUpdateOperationsInput | string | null
    sed_epithelial?: NullableStringFieldUpdateOperationsInput | string | null
    sed_mucus?: NullableStringFieldUpdateOperationsInput | string | null
    sed_cylinders?: NullableStringFieldUpdateOperationsInput | string | null
    sed_crystals?: NullableStringFieldUpdateOperationsInput | string | null
    sed_bacteria?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient_id?: StringFieldUpdateOperationsInput | string
  }

  export type UrineCreateManyInput = {
    id?: number
    volume?: number | null
    color?: string | null
    ph?: number | null
    density?: number | null
    protein?: string | null
    glucose?: string | null
    ketones?: string | null
    nitrites?: boolean | null
    hemoglobin?: string | null
    urobilinogen?: string | null
    sed_leukocytes?: string | null
    sed_erythrocytes?: string | null
    sed_epithelial?: string | null
    sed_mucus?: string | null
    sed_cylinders?: string | null
    sed_crystals?: string | null
    sed_bacteria?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    patient_id: string
  }

  export type UrineUpdateManyMutationInput = {
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    ph?: NullableFloatFieldUpdateOperationsInput | number | null
    density?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableStringFieldUpdateOperationsInput | string | null
    glucose?: NullableStringFieldUpdateOperationsInput | string | null
    ketones?: NullableStringFieldUpdateOperationsInput | string | null
    nitrites?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hemoglobin?: NullableStringFieldUpdateOperationsInput | string | null
    urobilinogen?: NullableStringFieldUpdateOperationsInput | string | null
    sed_leukocytes?: NullableStringFieldUpdateOperationsInput | string | null
    sed_erythrocytes?: NullableStringFieldUpdateOperationsInput | string | null
    sed_epithelial?: NullableStringFieldUpdateOperationsInput | string | null
    sed_mucus?: NullableStringFieldUpdateOperationsInput | string | null
    sed_cylinders?: NullableStringFieldUpdateOperationsInput | string | null
    sed_crystals?: NullableStringFieldUpdateOperationsInput | string | null
    sed_bacteria?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UrineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    ph?: NullableFloatFieldUpdateOperationsInput | number | null
    density?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableStringFieldUpdateOperationsInput | string | null
    glucose?: NullableStringFieldUpdateOperationsInput | string | null
    ketones?: NullableStringFieldUpdateOperationsInput | string | null
    nitrites?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hemoglobin?: NullableStringFieldUpdateOperationsInput | string | null
    urobilinogen?: NullableStringFieldUpdateOperationsInput | string | null
    sed_leukocytes?: NullableStringFieldUpdateOperationsInput | string | null
    sed_erythrocytes?: NullableStringFieldUpdateOperationsInput | string | null
    sed_epithelial?: NullableStringFieldUpdateOperationsInput | string | null
    sed_mucus?: NullableStringFieldUpdateOperationsInput | string | null
    sed_cylinders?: NullableStringFieldUpdateOperationsInput | string | null
    sed_crystals?: NullableStringFieldUpdateOperationsInput | string | null
    sed_bacteria?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient_id?: StringFieldUpdateOperationsInput | string
  }

  export type CellCreateInput = {
    name: string
    morphology: string
    clinical_relevance: string
    image: string
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutCellInput
    cell_mentions?: CellMentionCreateNestedManyWithoutCellInput
    owner: UserCreateNestedOneWithoutCellInput
  }

  export type CellUncheckedCreateInput = {
    id?: number
    name: string
    morphology: string
    clinical_relevance: string
    image: string
    category_id: number
    created_at?: Date | string
    updated_at?: Date | string
    created_by: string
    cell_mentions?: CellMentionUncheckedCreateNestedManyWithoutCellInput
  }

  export type CellUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    morphology?: StringFieldUpdateOperationsInput | string
    clinical_relevance?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutCellNestedInput
    cell_mentions?: CellMentionUpdateManyWithoutCellNestedInput
    owner?: UserUpdateOneRequiredWithoutCellNestedInput
  }

  export type CellUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    morphology?: StringFieldUpdateOperationsInput | string
    clinical_relevance?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    cell_mentions?: CellMentionUncheckedUpdateManyWithoutCellNestedInput
  }

  export type CellCreateManyInput = {
    id?: number
    name: string
    morphology: string
    clinical_relevance: string
    image: string
    category_id: number
    created_at?: Date | string
    updated_at?: Date | string
    created_by: string
  }

  export type CellUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    morphology?: StringFieldUpdateOperationsInput | string
    clinical_relevance?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CellUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    morphology?: StringFieldUpdateOperationsInput | string
    clinical_relevance?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    cell?: CellCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    cell?: CellUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cell?: CellUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cell?: CellUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentionCreateInput = {
    name: string
    url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    cell_mentions?: CellMentionCreateNestedManyWithoutMentionInput
  }

  export type MentionUncheckedCreateInput = {
    id?: number
    name: string
    url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    cell_mentions?: CellMentionUncheckedCreateNestedManyWithoutMentionInput
  }

  export type MentionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cell_mentions?: CellMentionUpdateManyWithoutMentionNestedInput
  }

  export type MentionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cell_mentions?: CellMentionUncheckedUpdateManyWithoutMentionNestedInput
  }

  export type MentionCreateManyInput = {
    id?: number
    name: string
    url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MentionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CellMentionCreateInput = {
    created_at?: Date | string
    updated_at?: Date | string
    cell: CellCreateNestedOneWithoutCell_mentionsInput
    mention: MentionCreateNestedOneWithoutCell_mentionsInput
  }

  export type CellMentionUncheckedCreateInput = {
    id?: number
    cell_id: number
    mention_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CellMentionUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cell?: CellUpdateOneRequiredWithoutCell_mentionsNestedInput
    mention?: MentionUpdateOneRequiredWithoutCell_mentionsNestedInput
  }

  export type CellMentionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cell_id?: IntFieldUpdateOperationsInput | number
    mention_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CellMentionCreateManyInput = {
    id?: number
    cell_id: number
    mention_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CellMentionUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CellMentionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cell_id?: IntFieldUpdateOperationsInput | number
    mention_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PatientsListRelationFilter = {
    every?: PatientsWhereInput
    some?: PatientsWhereInput
    none?: PatientsWhereInput
  }

  export type CellListRelationFilter = {
    every?: CellWhereInput
    some?: CellWhereInput
    none?: CellWhereInput
  }

  export type PatientsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CellOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ErythrocyteListRelationFilter = {
    every?: ErythrocyteWhereInput
    some?: ErythrocyteWhereInput
    none?: ErythrocyteWhereInput
  }

  export type LeukocyteListRelationFilter = {
    every?: LeukocyteWhereInput
    some?: LeukocyteWhereInput
    none?: LeukocyteWhereInput
  }

  export type PlateletsListRelationFilter = {
    every?: PlateletsWhereInput
    some?: PlateletsWhereInput
    none?: PlateletsWhereInput
  }

  export type UrineListRelationFilter = {
    every?: UrineWhereInput
    some?: UrineWhereInput
    none?: UrineWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ErythrocyteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeukocyteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlateletsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UrineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientsCountOrderByAggregateInput = {
    id?: SortOrder
    blade?: SortOrder
    age?: SortOrder
    genre?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    ownerId?: SortOrder
  }

  export type PatientsAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type PatientsMaxOrderByAggregateInput = {
    id?: SortOrder
    blade?: SortOrder
    age?: SortOrder
    genre?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    ownerId?: SortOrder
  }

  export type PatientsMinOrderByAggregateInput = {
    id?: SortOrder
    blade?: SortOrder
    age?: SortOrder
    genre?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    ownerId?: SortOrder
  }

  export type PatientsSumOrderByAggregateInput = {
    age?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PatientsScalarRelationFilter = {
    is?: PatientsWhereInput
    isNot?: PatientsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ErythrocyteCountOrderByAggregateInput = {
    id?: SortOrder
    erythrocyte?: SortOrder
    hemoglobin?: SortOrder
    hematocrit?: SortOrder
    RDW?: SortOrder
    patient_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ErythrocyteAvgOrderByAggregateInput = {
    id?: SortOrder
    erythrocyte?: SortOrder
    hemoglobin?: SortOrder
    hematocrit?: SortOrder
    RDW?: SortOrder
  }

  export type ErythrocyteMaxOrderByAggregateInput = {
    id?: SortOrder
    erythrocyte?: SortOrder
    hemoglobin?: SortOrder
    hematocrit?: SortOrder
    RDW?: SortOrder
    patient_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ErythrocyteMinOrderByAggregateInput = {
    id?: SortOrder
    erythrocyte?: SortOrder
    hemoglobin?: SortOrder
    hematocrit?: SortOrder
    RDW?: SortOrder
    patient_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ErythrocyteSumOrderByAggregateInput = {
    id?: SortOrder
    erythrocyte?: SortOrder
    hemoglobin?: SortOrder
    hematocrit?: SortOrder
    RDW?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type LeukocyteCountOrderByAggregateInput = {
    id?: SortOrder
    leukocyte?: SortOrder
    neutrophils?: SortOrder
    bandNeutrophils?: SortOrder
    lymphocytes?: SortOrder
    monocytes?: SortOrder
    eosinophils?: SortOrder
    basophils?: SortOrder
    patient_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LeukocyteAvgOrderByAggregateInput = {
    id?: SortOrder
    leukocyte?: SortOrder
    neutrophils?: SortOrder
    bandNeutrophils?: SortOrder
    lymphocytes?: SortOrder
    monocytes?: SortOrder
    eosinophils?: SortOrder
    basophils?: SortOrder
  }

  export type LeukocyteMaxOrderByAggregateInput = {
    id?: SortOrder
    leukocyte?: SortOrder
    neutrophils?: SortOrder
    bandNeutrophils?: SortOrder
    lymphocytes?: SortOrder
    monocytes?: SortOrder
    eosinophils?: SortOrder
    basophils?: SortOrder
    patient_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LeukocyteMinOrderByAggregateInput = {
    id?: SortOrder
    leukocyte?: SortOrder
    neutrophils?: SortOrder
    bandNeutrophils?: SortOrder
    lymphocytes?: SortOrder
    monocytes?: SortOrder
    eosinophils?: SortOrder
    basophils?: SortOrder
    patient_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LeukocyteSumOrderByAggregateInput = {
    id?: SortOrder
    leukocyte?: SortOrder
    neutrophils?: SortOrder
    bandNeutrophils?: SortOrder
    lymphocytes?: SortOrder
    monocytes?: SortOrder
    eosinophils?: SortOrder
    basophils?: SortOrder
  }

  export type PlateletsCountOrderByAggregateInput = {
    id?: SortOrder
    platelets?: SortOrder
    patient_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PlateletsAvgOrderByAggregateInput = {
    id?: SortOrder
    platelets?: SortOrder
  }

  export type PlateletsMaxOrderByAggregateInput = {
    id?: SortOrder
    platelets?: SortOrder
    patient_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PlateletsMinOrderByAggregateInput = {
    id?: SortOrder
    platelets?: SortOrder
    patient_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PlateletsSumOrderByAggregateInput = {
    id?: SortOrder
    platelets?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UrineCountOrderByAggregateInput = {
    id?: SortOrder
    volume?: SortOrder
    color?: SortOrder
    ph?: SortOrder
    density?: SortOrder
    protein?: SortOrder
    glucose?: SortOrder
    ketones?: SortOrder
    nitrites?: SortOrder
    hemoglobin?: SortOrder
    urobilinogen?: SortOrder
    sed_leukocytes?: SortOrder
    sed_erythrocytes?: SortOrder
    sed_epithelial?: SortOrder
    sed_mucus?: SortOrder
    sed_cylinders?: SortOrder
    sed_crystals?: SortOrder
    sed_bacteria?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    patient_id?: SortOrder
  }

  export type UrineAvgOrderByAggregateInput = {
    id?: SortOrder
    volume?: SortOrder
    ph?: SortOrder
    density?: SortOrder
  }

  export type UrineMaxOrderByAggregateInput = {
    id?: SortOrder
    volume?: SortOrder
    color?: SortOrder
    ph?: SortOrder
    density?: SortOrder
    protein?: SortOrder
    glucose?: SortOrder
    ketones?: SortOrder
    nitrites?: SortOrder
    hemoglobin?: SortOrder
    urobilinogen?: SortOrder
    sed_leukocytes?: SortOrder
    sed_erythrocytes?: SortOrder
    sed_epithelial?: SortOrder
    sed_mucus?: SortOrder
    sed_cylinders?: SortOrder
    sed_crystals?: SortOrder
    sed_bacteria?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    patient_id?: SortOrder
  }

  export type UrineMinOrderByAggregateInput = {
    id?: SortOrder
    volume?: SortOrder
    color?: SortOrder
    ph?: SortOrder
    density?: SortOrder
    protein?: SortOrder
    glucose?: SortOrder
    ketones?: SortOrder
    nitrites?: SortOrder
    hemoglobin?: SortOrder
    urobilinogen?: SortOrder
    sed_leukocytes?: SortOrder
    sed_erythrocytes?: SortOrder
    sed_epithelial?: SortOrder
    sed_mucus?: SortOrder
    sed_cylinders?: SortOrder
    sed_crystals?: SortOrder
    sed_bacteria?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    patient_id?: SortOrder
  }

  export type UrineSumOrderByAggregateInput = {
    id?: SortOrder
    volume?: SortOrder
    ph?: SortOrder
    density?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type CellMentionListRelationFilter = {
    every?: CellMentionWhereInput
    some?: CellMentionWhereInput
    none?: CellMentionWhereInput
  }

  export type CellMentionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CellCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    morphology?: SortOrder
    clinical_relevance?: SortOrder
    image?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
  }

  export type CellAvgOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
  }

  export type CellMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    morphology?: SortOrder
    clinical_relevance?: SortOrder
    image?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
  }

  export type CellMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    morphology?: SortOrder
    clinical_relevance?: SortOrder
    image?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
  }

  export type CellSumOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MentionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MentionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MentionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MentionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MentionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CellScalarRelationFilter = {
    is?: CellWhereInput
    isNot?: CellWhereInput
  }

  export type MentionScalarRelationFilter = {
    is?: MentionWhereInput
    isNot?: MentionWhereInput
  }

  export type CellMentionCountOrderByAggregateInput = {
    id?: SortOrder
    cell_id?: SortOrder
    mention_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CellMentionAvgOrderByAggregateInput = {
    id?: SortOrder
    cell_id?: SortOrder
    mention_id?: SortOrder
  }

  export type CellMentionMaxOrderByAggregateInput = {
    id?: SortOrder
    cell_id?: SortOrder
    mention_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CellMentionMinOrderByAggregateInput = {
    id?: SortOrder
    cell_id?: SortOrder
    mention_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CellMentionSumOrderByAggregateInput = {
    id?: SortOrder
    cell_id?: SortOrder
    mention_id?: SortOrder
  }

  export type PatientsCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PatientsCreateWithoutOwnerInput, PatientsUncheckedCreateWithoutOwnerInput> | PatientsCreateWithoutOwnerInput[] | PatientsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PatientsCreateOrConnectWithoutOwnerInput | PatientsCreateOrConnectWithoutOwnerInput[]
    createMany?: PatientsCreateManyOwnerInputEnvelope
    connect?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
  }

  export type CellCreateNestedManyWithoutOwnerInput = {
    create?: XOR<CellCreateWithoutOwnerInput, CellUncheckedCreateWithoutOwnerInput> | CellCreateWithoutOwnerInput[] | CellUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CellCreateOrConnectWithoutOwnerInput | CellCreateOrConnectWithoutOwnerInput[]
    createMany?: CellCreateManyOwnerInputEnvelope
    connect?: CellWhereUniqueInput | CellWhereUniqueInput[]
  }

  export type PatientsUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PatientsCreateWithoutOwnerInput, PatientsUncheckedCreateWithoutOwnerInput> | PatientsCreateWithoutOwnerInput[] | PatientsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PatientsCreateOrConnectWithoutOwnerInput | PatientsCreateOrConnectWithoutOwnerInput[]
    createMany?: PatientsCreateManyOwnerInputEnvelope
    connect?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
  }

  export type CellUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<CellCreateWithoutOwnerInput, CellUncheckedCreateWithoutOwnerInput> | CellCreateWithoutOwnerInput[] | CellUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CellCreateOrConnectWithoutOwnerInput | CellCreateOrConnectWithoutOwnerInput[]
    createMany?: CellCreateManyOwnerInputEnvelope
    connect?: CellWhereUniqueInput | CellWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PatientsUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PatientsCreateWithoutOwnerInput, PatientsUncheckedCreateWithoutOwnerInput> | PatientsCreateWithoutOwnerInput[] | PatientsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PatientsCreateOrConnectWithoutOwnerInput | PatientsCreateOrConnectWithoutOwnerInput[]
    upsert?: PatientsUpsertWithWhereUniqueWithoutOwnerInput | PatientsUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PatientsCreateManyOwnerInputEnvelope
    set?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
    disconnect?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
    delete?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
    connect?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
    update?: PatientsUpdateWithWhereUniqueWithoutOwnerInput | PatientsUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PatientsUpdateManyWithWhereWithoutOwnerInput | PatientsUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PatientsScalarWhereInput | PatientsScalarWhereInput[]
  }

  export type CellUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<CellCreateWithoutOwnerInput, CellUncheckedCreateWithoutOwnerInput> | CellCreateWithoutOwnerInput[] | CellUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CellCreateOrConnectWithoutOwnerInput | CellCreateOrConnectWithoutOwnerInput[]
    upsert?: CellUpsertWithWhereUniqueWithoutOwnerInput | CellUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: CellCreateManyOwnerInputEnvelope
    set?: CellWhereUniqueInput | CellWhereUniqueInput[]
    disconnect?: CellWhereUniqueInput | CellWhereUniqueInput[]
    delete?: CellWhereUniqueInput | CellWhereUniqueInput[]
    connect?: CellWhereUniqueInput | CellWhereUniqueInput[]
    update?: CellUpdateWithWhereUniqueWithoutOwnerInput | CellUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: CellUpdateManyWithWhereWithoutOwnerInput | CellUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: CellScalarWhereInput | CellScalarWhereInput[]
  }

  export type PatientsUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PatientsCreateWithoutOwnerInput, PatientsUncheckedCreateWithoutOwnerInput> | PatientsCreateWithoutOwnerInput[] | PatientsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PatientsCreateOrConnectWithoutOwnerInput | PatientsCreateOrConnectWithoutOwnerInput[]
    upsert?: PatientsUpsertWithWhereUniqueWithoutOwnerInput | PatientsUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PatientsCreateManyOwnerInputEnvelope
    set?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
    disconnect?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
    delete?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
    connect?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
    update?: PatientsUpdateWithWhereUniqueWithoutOwnerInput | PatientsUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PatientsUpdateManyWithWhereWithoutOwnerInput | PatientsUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PatientsScalarWhereInput | PatientsScalarWhereInput[]
  }

  export type CellUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<CellCreateWithoutOwnerInput, CellUncheckedCreateWithoutOwnerInput> | CellCreateWithoutOwnerInput[] | CellUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CellCreateOrConnectWithoutOwnerInput | CellCreateOrConnectWithoutOwnerInput[]
    upsert?: CellUpsertWithWhereUniqueWithoutOwnerInput | CellUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: CellCreateManyOwnerInputEnvelope
    set?: CellWhereUniqueInput | CellWhereUniqueInput[]
    disconnect?: CellWhereUniqueInput | CellWhereUniqueInput[]
    delete?: CellWhereUniqueInput | CellWhereUniqueInput[]
    connect?: CellWhereUniqueInput | CellWhereUniqueInput[]
    update?: CellUpdateWithWhereUniqueWithoutOwnerInput | CellUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: CellUpdateManyWithWhereWithoutOwnerInput | CellUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: CellScalarWhereInput | CellScalarWhereInput[]
  }

  export type ErythrocyteCreateNestedManyWithoutPatientInput = {
    create?: XOR<ErythrocyteCreateWithoutPatientInput, ErythrocyteUncheckedCreateWithoutPatientInput> | ErythrocyteCreateWithoutPatientInput[] | ErythrocyteUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ErythrocyteCreateOrConnectWithoutPatientInput | ErythrocyteCreateOrConnectWithoutPatientInput[]
    createMany?: ErythrocyteCreateManyPatientInputEnvelope
    connect?: ErythrocyteWhereUniqueInput | ErythrocyteWhereUniqueInput[]
  }

  export type LeukocyteCreateNestedManyWithoutPatientInput = {
    create?: XOR<LeukocyteCreateWithoutPatientInput, LeukocyteUncheckedCreateWithoutPatientInput> | LeukocyteCreateWithoutPatientInput[] | LeukocyteUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LeukocyteCreateOrConnectWithoutPatientInput | LeukocyteCreateOrConnectWithoutPatientInput[]
    createMany?: LeukocyteCreateManyPatientInputEnvelope
    connect?: LeukocyteWhereUniqueInput | LeukocyteWhereUniqueInput[]
  }

  export type PlateletsCreateNestedManyWithoutPatientInput = {
    create?: XOR<PlateletsCreateWithoutPatientInput, PlateletsUncheckedCreateWithoutPatientInput> | PlateletsCreateWithoutPatientInput[] | PlateletsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PlateletsCreateOrConnectWithoutPatientInput | PlateletsCreateOrConnectWithoutPatientInput[]
    createMany?: PlateletsCreateManyPatientInputEnvelope
    connect?: PlateletsWhereUniqueInput | PlateletsWhereUniqueInput[]
  }

  export type UrineCreateNestedManyWithoutPatientInput = {
    create?: XOR<UrineCreateWithoutPatientInput, UrineUncheckedCreateWithoutPatientInput> | UrineCreateWithoutPatientInput[] | UrineUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: UrineCreateOrConnectWithoutPatientInput | UrineCreateOrConnectWithoutPatientInput[]
    createMany?: UrineCreateManyPatientInputEnvelope
    connect?: UrineWhereUniqueInput | UrineWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPatientsInput = {
    create?: XOR<UserCreateWithoutPatientsInput, UserUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientsInput
    connect?: UserWhereUniqueInput
  }

  export type ErythrocyteUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<ErythrocyteCreateWithoutPatientInput, ErythrocyteUncheckedCreateWithoutPatientInput> | ErythrocyteCreateWithoutPatientInput[] | ErythrocyteUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ErythrocyteCreateOrConnectWithoutPatientInput | ErythrocyteCreateOrConnectWithoutPatientInput[]
    createMany?: ErythrocyteCreateManyPatientInputEnvelope
    connect?: ErythrocyteWhereUniqueInput | ErythrocyteWhereUniqueInput[]
  }

  export type LeukocyteUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<LeukocyteCreateWithoutPatientInput, LeukocyteUncheckedCreateWithoutPatientInput> | LeukocyteCreateWithoutPatientInput[] | LeukocyteUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LeukocyteCreateOrConnectWithoutPatientInput | LeukocyteCreateOrConnectWithoutPatientInput[]
    createMany?: LeukocyteCreateManyPatientInputEnvelope
    connect?: LeukocyteWhereUniqueInput | LeukocyteWhereUniqueInput[]
  }

  export type PlateletsUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<PlateletsCreateWithoutPatientInput, PlateletsUncheckedCreateWithoutPatientInput> | PlateletsCreateWithoutPatientInput[] | PlateletsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PlateletsCreateOrConnectWithoutPatientInput | PlateletsCreateOrConnectWithoutPatientInput[]
    createMany?: PlateletsCreateManyPatientInputEnvelope
    connect?: PlateletsWhereUniqueInput | PlateletsWhereUniqueInput[]
  }

  export type UrineUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<UrineCreateWithoutPatientInput, UrineUncheckedCreateWithoutPatientInput> | UrineCreateWithoutPatientInput[] | UrineUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: UrineCreateOrConnectWithoutPatientInput | UrineCreateOrConnectWithoutPatientInput[]
    createMany?: UrineCreateManyPatientInputEnvelope
    connect?: UrineWhereUniqueInput | UrineWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ErythrocyteUpdateManyWithoutPatientNestedInput = {
    create?: XOR<ErythrocyteCreateWithoutPatientInput, ErythrocyteUncheckedCreateWithoutPatientInput> | ErythrocyteCreateWithoutPatientInput[] | ErythrocyteUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ErythrocyteCreateOrConnectWithoutPatientInput | ErythrocyteCreateOrConnectWithoutPatientInput[]
    upsert?: ErythrocyteUpsertWithWhereUniqueWithoutPatientInput | ErythrocyteUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: ErythrocyteCreateManyPatientInputEnvelope
    set?: ErythrocyteWhereUniqueInput | ErythrocyteWhereUniqueInput[]
    disconnect?: ErythrocyteWhereUniqueInput | ErythrocyteWhereUniqueInput[]
    delete?: ErythrocyteWhereUniqueInput | ErythrocyteWhereUniqueInput[]
    connect?: ErythrocyteWhereUniqueInput | ErythrocyteWhereUniqueInput[]
    update?: ErythrocyteUpdateWithWhereUniqueWithoutPatientInput | ErythrocyteUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: ErythrocyteUpdateManyWithWhereWithoutPatientInput | ErythrocyteUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: ErythrocyteScalarWhereInput | ErythrocyteScalarWhereInput[]
  }

  export type LeukocyteUpdateManyWithoutPatientNestedInput = {
    create?: XOR<LeukocyteCreateWithoutPatientInput, LeukocyteUncheckedCreateWithoutPatientInput> | LeukocyteCreateWithoutPatientInput[] | LeukocyteUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LeukocyteCreateOrConnectWithoutPatientInput | LeukocyteCreateOrConnectWithoutPatientInput[]
    upsert?: LeukocyteUpsertWithWhereUniqueWithoutPatientInput | LeukocyteUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: LeukocyteCreateManyPatientInputEnvelope
    set?: LeukocyteWhereUniqueInput | LeukocyteWhereUniqueInput[]
    disconnect?: LeukocyteWhereUniqueInput | LeukocyteWhereUniqueInput[]
    delete?: LeukocyteWhereUniqueInput | LeukocyteWhereUniqueInput[]
    connect?: LeukocyteWhereUniqueInput | LeukocyteWhereUniqueInput[]
    update?: LeukocyteUpdateWithWhereUniqueWithoutPatientInput | LeukocyteUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: LeukocyteUpdateManyWithWhereWithoutPatientInput | LeukocyteUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: LeukocyteScalarWhereInput | LeukocyteScalarWhereInput[]
  }

  export type PlateletsUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PlateletsCreateWithoutPatientInput, PlateletsUncheckedCreateWithoutPatientInput> | PlateletsCreateWithoutPatientInput[] | PlateletsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PlateletsCreateOrConnectWithoutPatientInput | PlateletsCreateOrConnectWithoutPatientInput[]
    upsert?: PlateletsUpsertWithWhereUniqueWithoutPatientInput | PlateletsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PlateletsCreateManyPatientInputEnvelope
    set?: PlateletsWhereUniqueInput | PlateletsWhereUniqueInput[]
    disconnect?: PlateletsWhereUniqueInput | PlateletsWhereUniqueInput[]
    delete?: PlateletsWhereUniqueInput | PlateletsWhereUniqueInput[]
    connect?: PlateletsWhereUniqueInput | PlateletsWhereUniqueInput[]
    update?: PlateletsUpdateWithWhereUniqueWithoutPatientInput | PlateletsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PlateletsUpdateManyWithWhereWithoutPatientInput | PlateletsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PlateletsScalarWhereInput | PlateletsScalarWhereInput[]
  }

  export type UrineUpdateManyWithoutPatientNestedInput = {
    create?: XOR<UrineCreateWithoutPatientInput, UrineUncheckedCreateWithoutPatientInput> | UrineCreateWithoutPatientInput[] | UrineUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: UrineCreateOrConnectWithoutPatientInput | UrineCreateOrConnectWithoutPatientInput[]
    upsert?: UrineUpsertWithWhereUniqueWithoutPatientInput | UrineUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: UrineCreateManyPatientInputEnvelope
    set?: UrineWhereUniqueInput | UrineWhereUniqueInput[]
    disconnect?: UrineWhereUniqueInput | UrineWhereUniqueInput[]
    delete?: UrineWhereUniqueInput | UrineWhereUniqueInput[]
    connect?: UrineWhereUniqueInput | UrineWhereUniqueInput[]
    update?: UrineUpdateWithWhereUniqueWithoutPatientInput | UrineUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: UrineUpdateManyWithWhereWithoutPatientInput | UrineUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: UrineScalarWhereInput | UrineScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPatientsNestedInput = {
    create?: XOR<UserCreateWithoutPatientsInput, UserUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientsInput
    upsert?: UserUpsertWithoutPatientsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientsInput, UserUpdateWithoutPatientsInput>, UserUncheckedUpdateWithoutPatientsInput>
  }

  export type ErythrocyteUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<ErythrocyteCreateWithoutPatientInput, ErythrocyteUncheckedCreateWithoutPatientInput> | ErythrocyteCreateWithoutPatientInput[] | ErythrocyteUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ErythrocyteCreateOrConnectWithoutPatientInput | ErythrocyteCreateOrConnectWithoutPatientInput[]
    upsert?: ErythrocyteUpsertWithWhereUniqueWithoutPatientInput | ErythrocyteUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: ErythrocyteCreateManyPatientInputEnvelope
    set?: ErythrocyteWhereUniqueInput | ErythrocyteWhereUniqueInput[]
    disconnect?: ErythrocyteWhereUniqueInput | ErythrocyteWhereUniqueInput[]
    delete?: ErythrocyteWhereUniqueInput | ErythrocyteWhereUniqueInput[]
    connect?: ErythrocyteWhereUniqueInput | ErythrocyteWhereUniqueInput[]
    update?: ErythrocyteUpdateWithWhereUniqueWithoutPatientInput | ErythrocyteUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: ErythrocyteUpdateManyWithWhereWithoutPatientInput | ErythrocyteUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: ErythrocyteScalarWhereInput | ErythrocyteScalarWhereInput[]
  }

  export type LeukocyteUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<LeukocyteCreateWithoutPatientInput, LeukocyteUncheckedCreateWithoutPatientInput> | LeukocyteCreateWithoutPatientInput[] | LeukocyteUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LeukocyteCreateOrConnectWithoutPatientInput | LeukocyteCreateOrConnectWithoutPatientInput[]
    upsert?: LeukocyteUpsertWithWhereUniqueWithoutPatientInput | LeukocyteUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: LeukocyteCreateManyPatientInputEnvelope
    set?: LeukocyteWhereUniqueInput | LeukocyteWhereUniqueInput[]
    disconnect?: LeukocyteWhereUniqueInput | LeukocyteWhereUniqueInput[]
    delete?: LeukocyteWhereUniqueInput | LeukocyteWhereUniqueInput[]
    connect?: LeukocyteWhereUniqueInput | LeukocyteWhereUniqueInput[]
    update?: LeukocyteUpdateWithWhereUniqueWithoutPatientInput | LeukocyteUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: LeukocyteUpdateManyWithWhereWithoutPatientInput | LeukocyteUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: LeukocyteScalarWhereInput | LeukocyteScalarWhereInput[]
  }

  export type PlateletsUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PlateletsCreateWithoutPatientInput, PlateletsUncheckedCreateWithoutPatientInput> | PlateletsCreateWithoutPatientInput[] | PlateletsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PlateletsCreateOrConnectWithoutPatientInput | PlateletsCreateOrConnectWithoutPatientInput[]
    upsert?: PlateletsUpsertWithWhereUniqueWithoutPatientInput | PlateletsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PlateletsCreateManyPatientInputEnvelope
    set?: PlateletsWhereUniqueInput | PlateletsWhereUniqueInput[]
    disconnect?: PlateletsWhereUniqueInput | PlateletsWhereUniqueInput[]
    delete?: PlateletsWhereUniqueInput | PlateletsWhereUniqueInput[]
    connect?: PlateletsWhereUniqueInput | PlateletsWhereUniqueInput[]
    update?: PlateletsUpdateWithWhereUniqueWithoutPatientInput | PlateletsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PlateletsUpdateManyWithWhereWithoutPatientInput | PlateletsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PlateletsScalarWhereInput | PlateletsScalarWhereInput[]
  }

  export type UrineUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<UrineCreateWithoutPatientInput, UrineUncheckedCreateWithoutPatientInput> | UrineCreateWithoutPatientInput[] | UrineUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: UrineCreateOrConnectWithoutPatientInput | UrineCreateOrConnectWithoutPatientInput[]
    upsert?: UrineUpsertWithWhereUniqueWithoutPatientInput | UrineUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: UrineCreateManyPatientInputEnvelope
    set?: UrineWhereUniqueInput | UrineWhereUniqueInput[]
    disconnect?: UrineWhereUniqueInput | UrineWhereUniqueInput[]
    delete?: UrineWhereUniqueInput | UrineWhereUniqueInput[]
    connect?: UrineWhereUniqueInput | UrineWhereUniqueInput[]
    update?: UrineUpdateWithWhereUniqueWithoutPatientInput | UrineUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: UrineUpdateManyWithWhereWithoutPatientInput | UrineUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: UrineScalarWhereInput | UrineScalarWhereInput[]
  }

  export type PatientsCreateNestedOneWithoutErythrocyteInput = {
    create?: XOR<PatientsCreateWithoutErythrocyteInput, PatientsUncheckedCreateWithoutErythrocyteInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutErythrocyteInput
    connect?: PatientsWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PatientsUpdateOneRequiredWithoutErythrocyteNestedInput = {
    create?: XOR<PatientsCreateWithoutErythrocyteInput, PatientsUncheckedCreateWithoutErythrocyteInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutErythrocyteInput
    upsert?: PatientsUpsertWithoutErythrocyteInput
    connect?: PatientsWhereUniqueInput
    update?: XOR<XOR<PatientsUpdateToOneWithWhereWithoutErythrocyteInput, PatientsUpdateWithoutErythrocyteInput>, PatientsUncheckedUpdateWithoutErythrocyteInput>
  }

  export type PatientsCreateNestedOneWithoutLeukocyteInput = {
    create?: XOR<PatientsCreateWithoutLeukocyteInput, PatientsUncheckedCreateWithoutLeukocyteInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutLeukocyteInput
    connect?: PatientsWhereUniqueInput
  }

  export type PatientsUpdateOneRequiredWithoutLeukocyteNestedInput = {
    create?: XOR<PatientsCreateWithoutLeukocyteInput, PatientsUncheckedCreateWithoutLeukocyteInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutLeukocyteInput
    upsert?: PatientsUpsertWithoutLeukocyteInput
    connect?: PatientsWhereUniqueInput
    update?: XOR<XOR<PatientsUpdateToOneWithWhereWithoutLeukocyteInput, PatientsUpdateWithoutLeukocyteInput>, PatientsUncheckedUpdateWithoutLeukocyteInput>
  }

  export type PatientsCreateNestedOneWithoutPlateletsInput = {
    create?: XOR<PatientsCreateWithoutPlateletsInput, PatientsUncheckedCreateWithoutPlateletsInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutPlateletsInput
    connect?: PatientsWhereUniqueInput
  }

  export type PatientsUpdateOneRequiredWithoutPlateletsNestedInput = {
    create?: XOR<PatientsCreateWithoutPlateletsInput, PatientsUncheckedCreateWithoutPlateletsInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutPlateletsInput
    upsert?: PatientsUpsertWithoutPlateletsInput
    connect?: PatientsWhereUniqueInput
    update?: XOR<XOR<PatientsUpdateToOneWithWhereWithoutPlateletsInput, PatientsUpdateWithoutPlateletsInput>, PatientsUncheckedUpdateWithoutPlateletsInput>
  }

  export type PatientsCreateNestedOneWithoutUrineInput = {
    create?: XOR<PatientsCreateWithoutUrineInput, PatientsUncheckedCreateWithoutUrineInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutUrineInput
    connect?: PatientsWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type PatientsUpdateOneRequiredWithoutUrineNestedInput = {
    create?: XOR<PatientsCreateWithoutUrineInput, PatientsUncheckedCreateWithoutUrineInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutUrineInput
    upsert?: PatientsUpsertWithoutUrineInput
    connect?: PatientsWhereUniqueInput
    update?: XOR<XOR<PatientsUpdateToOneWithWhereWithoutUrineInput, PatientsUpdateWithoutUrineInput>, PatientsUncheckedUpdateWithoutUrineInput>
  }

  export type CategoryCreateNestedOneWithoutCellInput = {
    create?: XOR<CategoryCreateWithoutCellInput, CategoryUncheckedCreateWithoutCellInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCellInput
    connect?: CategoryWhereUniqueInput
  }

  export type CellMentionCreateNestedManyWithoutCellInput = {
    create?: XOR<CellMentionCreateWithoutCellInput, CellMentionUncheckedCreateWithoutCellInput> | CellMentionCreateWithoutCellInput[] | CellMentionUncheckedCreateWithoutCellInput[]
    connectOrCreate?: CellMentionCreateOrConnectWithoutCellInput | CellMentionCreateOrConnectWithoutCellInput[]
    createMany?: CellMentionCreateManyCellInputEnvelope
    connect?: CellMentionWhereUniqueInput | CellMentionWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCellInput = {
    create?: XOR<UserCreateWithoutCellInput, UserUncheckedCreateWithoutCellInput>
    connectOrCreate?: UserCreateOrConnectWithoutCellInput
    connect?: UserWhereUniqueInput
  }

  export type CellMentionUncheckedCreateNestedManyWithoutCellInput = {
    create?: XOR<CellMentionCreateWithoutCellInput, CellMentionUncheckedCreateWithoutCellInput> | CellMentionCreateWithoutCellInput[] | CellMentionUncheckedCreateWithoutCellInput[]
    connectOrCreate?: CellMentionCreateOrConnectWithoutCellInput | CellMentionCreateOrConnectWithoutCellInput[]
    createMany?: CellMentionCreateManyCellInputEnvelope
    connect?: CellMentionWhereUniqueInput | CellMentionWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutCellNestedInput = {
    create?: XOR<CategoryCreateWithoutCellInput, CategoryUncheckedCreateWithoutCellInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCellInput
    upsert?: CategoryUpsertWithoutCellInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutCellInput, CategoryUpdateWithoutCellInput>, CategoryUncheckedUpdateWithoutCellInput>
  }

  export type CellMentionUpdateManyWithoutCellNestedInput = {
    create?: XOR<CellMentionCreateWithoutCellInput, CellMentionUncheckedCreateWithoutCellInput> | CellMentionCreateWithoutCellInput[] | CellMentionUncheckedCreateWithoutCellInput[]
    connectOrCreate?: CellMentionCreateOrConnectWithoutCellInput | CellMentionCreateOrConnectWithoutCellInput[]
    upsert?: CellMentionUpsertWithWhereUniqueWithoutCellInput | CellMentionUpsertWithWhereUniqueWithoutCellInput[]
    createMany?: CellMentionCreateManyCellInputEnvelope
    set?: CellMentionWhereUniqueInput | CellMentionWhereUniqueInput[]
    disconnect?: CellMentionWhereUniqueInput | CellMentionWhereUniqueInput[]
    delete?: CellMentionWhereUniqueInput | CellMentionWhereUniqueInput[]
    connect?: CellMentionWhereUniqueInput | CellMentionWhereUniqueInput[]
    update?: CellMentionUpdateWithWhereUniqueWithoutCellInput | CellMentionUpdateWithWhereUniqueWithoutCellInput[]
    updateMany?: CellMentionUpdateManyWithWhereWithoutCellInput | CellMentionUpdateManyWithWhereWithoutCellInput[]
    deleteMany?: CellMentionScalarWhereInput | CellMentionScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCellNestedInput = {
    create?: XOR<UserCreateWithoutCellInput, UserUncheckedCreateWithoutCellInput>
    connectOrCreate?: UserCreateOrConnectWithoutCellInput
    upsert?: UserUpsertWithoutCellInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCellInput, UserUpdateWithoutCellInput>, UserUncheckedUpdateWithoutCellInput>
  }

  export type CellMentionUncheckedUpdateManyWithoutCellNestedInput = {
    create?: XOR<CellMentionCreateWithoutCellInput, CellMentionUncheckedCreateWithoutCellInput> | CellMentionCreateWithoutCellInput[] | CellMentionUncheckedCreateWithoutCellInput[]
    connectOrCreate?: CellMentionCreateOrConnectWithoutCellInput | CellMentionCreateOrConnectWithoutCellInput[]
    upsert?: CellMentionUpsertWithWhereUniqueWithoutCellInput | CellMentionUpsertWithWhereUniqueWithoutCellInput[]
    createMany?: CellMentionCreateManyCellInputEnvelope
    set?: CellMentionWhereUniqueInput | CellMentionWhereUniqueInput[]
    disconnect?: CellMentionWhereUniqueInput | CellMentionWhereUniqueInput[]
    delete?: CellMentionWhereUniqueInput | CellMentionWhereUniqueInput[]
    connect?: CellMentionWhereUniqueInput | CellMentionWhereUniqueInput[]
    update?: CellMentionUpdateWithWhereUniqueWithoutCellInput | CellMentionUpdateWithWhereUniqueWithoutCellInput[]
    updateMany?: CellMentionUpdateManyWithWhereWithoutCellInput | CellMentionUpdateManyWithWhereWithoutCellInput[]
    deleteMany?: CellMentionScalarWhereInput | CellMentionScalarWhereInput[]
  }

  export type CellCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CellCreateWithoutCategoryInput, CellUncheckedCreateWithoutCategoryInput> | CellCreateWithoutCategoryInput[] | CellUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CellCreateOrConnectWithoutCategoryInput | CellCreateOrConnectWithoutCategoryInput[]
    createMany?: CellCreateManyCategoryInputEnvelope
    connect?: CellWhereUniqueInput | CellWhereUniqueInput[]
  }

  export type CellUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CellCreateWithoutCategoryInput, CellUncheckedCreateWithoutCategoryInput> | CellCreateWithoutCategoryInput[] | CellUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CellCreateOrConnectWithoutCategoryInput | CellCreateOrConnectWithoutCategoryInput[]
    createMany?: CellCreateManyCategoryInputEnvelope
    connect?: CellWhereUniqueInput | CellWhereUniqueInput[]
  }

  export type CellUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CellCreateWithoutCategoryInput, CellUncheckedCreateWithoutCategoryInput> | CellCreateWithoutCategoryInput[] | CellUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CellCreateOrConnectWithoutCategoryInput | CellCreateOrConnectWithoutCategoryInput[]
    upsert?: CellUpsertWithWhereUniqueWithoutCategoryInput | CellUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CellCreateManyCategoryInputEnvelope
    set?: CellWhereUniqueInput | CellWhereUniqueInput[]
    disconnect?: CellWhereUniqueInput | CellWhereUniqueInput[]
    delete?: CellWhereUniqueInput | CellWhereUniqueInput[]
    connect?: CellWhereUniqueInput | CellWhereUniqueInput[]
    update?: CellUpdateWithWhereUniqueWithoutCategoryInput | CellUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CellUpdateManyWithWhereWithoutCategoryInput | CellUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CellScalarWhereInput | CellScalarWhereInput[]
  }

  export type CellUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CellCreateWithoutCategoryInput, CellUncheckedCreateWithoutCategoryInput> | CellCreateWithoutCategoryInput[] | CellUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CellCreateOrConnectWithoutCategoryInput | CellCreateOrConnectWithoutCategoryInput[]
    upsert?: CellUpsertWithWhereUniqueWithoutCategoryInput | CellUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CellCreateManyCategoryInputEnvelope
    set?: CellWhereUniqueInput | CellWhereUniqueInput[]
    disconnect?: CellWhereUniqueInput | CellWhereUniqueInput[]
    delete?: CellWhereUniqueInput | CellWhereUniqueInput[]
    connect?: CellWhereUniqueInput | CellWhereUniqueInput[]
    update?: CellUpdateWithWhereUniqueWithoutCategoryInput | CellUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CellUpdateManyWithWhereWithoutCategoryInput | CellUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CellScalarWhereInput | CellScalarWhereInput[]
  }

  export type CellMentionCreateNestedManyWithoutMentionInput = {
    create?: XOR<CellMentionCreateWithoutMentionInput, CellMentionUncheckedCreateWithoutMentionInput> | CellMentionCreateWithoutMentionInput[] | CellMentionUncheckedCreateWithoutMentionInput[]
    connectOrCreate?: CellMentionCreateOrConnectWithoutMentionInput | CellMentionCreateOrConnectWithoutMentionInput[]
    createMany?: CellMentionCreateManyMentionInputEnvelope
    connect?: CellMentionWhereUniqueInput | CellMentionWhereUniqueInput[]
  }

  export type CellMentionUncheckedCreateNestedManyWithoutMentionInput = {
    create?: XOR<CellMentionCreateWithoutMentionInput, CellMentionUncheckedCreateWithoutMentionInput> | CellMentionCreateWithoutMentionInput[] | CellMentionUncheckedCreateWithoutMentionInput[]
    connectOrCreate?: CellMentionCreateOrConnectWithoutMentionInput | CellMentionCreateOrConnectWithoutMentionInput[]
    createMany?: CellMentionCreateManyMentionInputEnvelope
    connect?: CellMentionWhereUniqueInput | CellMentionWhereUniqueInput[]
  }

  export type CellMentionUpdateManyWithoutMentionNestedInput = {
    create?: XOR<CellMentionCreateWithoutMentionInput, CellMentionUncheckedCreateWithoutMentionInput> | CellMentionCreateWithoutMentionInput[] | CellMentionUncheckedCreateWithoutMentionInput[]
    connectOrCreate?: CellMentionCreateOrConnectWithoutMentionInput | CellMentionCreateOrConnectWithoutMentionInput[]
    upsert?: CellMentionUpsertWithWhereUniqueWithoutMentionInput | CellMentionUpsertWithWhereUniqueWithoutMentionInput[]
    createMany?: CellMentionCreateManyMentionInputEnvelope
    set?: CellMentionWhereUniqueInput | CellMentionWhereUniqueInput[]
    disconnect?: CellMentionWhereUniqueInput | CellMentionWhereUniqueInput[]
    delete?: CellMentionWhereUniqueInput | CellMentionWhereUniqueInput[]
    connect?: CellMentionWhereUniqueInput | CellMentionWhereUniqueInput[]
    update?: CellMentionUpdateWithWhereUniqueWithoutMentionInput | CellMentionUpdateWithWhereUniqueWithoutMentionInput[]
    updateMany?: CellMentionUpdateManyWithWhereWithoutMentionInput | CellMentionUpdateManyWithWhereWithoutMentionInput[]
    deleteMany?: CellMentionScalarWhereInput | CellMentionScalarWhereInput[]
  }

  export type CellMentionUncheckedUpdateManyWithoutMentionNestedInput = {
    create?: XOR<CellMentionCreateWithoutMentionInput, CellMentionUncheckedCreateWithoutMentionInput> | CellMentionCreateWithoutMentionInput[] | CellMentionUncheckedCreateWithoutMentionInput[]
    connectOrCreate?: CellMentionCreateOrConnectWithoutMentionInput | CellMentionCreateOrConnectWithoutMentionInput[]
    upsert?: CellMentionUpsertWithWhereUniqueWithoutMentionInput | CellMentionUpsertWithWhereUniqueWithoutMentionInput[]
    createMany?: CellMentionCreateManyMentionInputEnvelope
    set?: CellMentionWhereUniqueInput | CellMentionWhereUniqueInput[]
    disconnect?: CellMentionWhereUniqueInput | CellMentionWhereUniqueInput[]
    delete?: CellMentionWhereUniqueInput | CellMentionWhereUniqueInput[]
    connect?: CellMentionWhereUniqueInput | CellMentionWhereUniqueInput[]
    update?: CellMentionUpdateWithWhereUniqueWithoutMentionInput | CellMentionUpdateWithWhereUniqueWithoutMentionInput[]
    updateMany?: CellMentionUpdateManyWithWhereWithoutMentionInput | CellMentionUpdateManyWithWhereWithoutMentionInput[]
    deleteMany?: CellMentionScalarWhereInput | CellMentionScalarWhereInput[]
  }

  export type CellCreateNestedOneWithoutCell_mentionsInput = {
    create?: XOR<CellCreateWithoutCell_mentionsInput, CellUncheckedCreateWithoutCell_mentionsInput>
    connectOrCreate?: CellCreateOrConnectWithoutCell_mentionsInput
    connect?: CellWhereUniqueInput
  }

  export type MentionCreateNestedOneWithoutCell_mentionsInput = {
    create?: XOR<MentionCreateWithoutCell_mentionsInput, MentionUncheckedCreateWithoutCell_mentionsInput>
    connectOrCreate?: MentionCreateOrConnectWithoutCell_mentionsInput
    connect?: MentionWhereUniqueInput
  }

  export type CellUpdateOneRequiredWithoutCell_mentionsNestedInput = {
    create?: XOR<CellCreateWithoutCell_mentionsInput, CellUncheckedCreateWithoutCell_mentionsInput>
    connectOrCreate?: CellCreateOrConnectWithoutCell_mentionsInput
    upsert?: CellUpsertWithoutCell_mentionsInput
    connect?: CellWhereUniqueInput
    update?: XOR<XOR<CellUpdateToOneWithWhereWithoutCell_mentionsInput, CellUpdateWithoutCell_mentionsInput>, CellUncheckedUpdateWithoutCell_mentionsInput>
  }

  export type MentionUpdateOneRequiredWithoutCell_mentionsNestedInput = {
    create?: XOR<MentionCreateWithoutCell_mentionsInput, MentionUncheckedCreateWithoutCell_mentionsInput>
    connectOrCreate?: MentionCreateOrConnectWithoutCell_mentionsInput
    upsert?: MentionUpsertWithoutCell_mentionsInput
    connect?: MentionWhereUniqueInput
    update?: XOR<XOR<MentionUpdateToOneWithWhereWithoutCell_mentionsInput, MentionUpdateWithoutCell_mentionsInput>, MentionUncheckedUpdateWithoutCell_mentionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type PatientsCreateWithoutOwnerInput = {
    id?: string
    blade: string
    age: number
    genre: string
    created_at?: Date | string
    updated_at?: Date | string
    erythrocyte?: ErythrocyteCreateNestedManyWithoutPatientInput
    leukocyte?: LeukocyteCreateNestedManyWithoutPatientInput
    platelets?: PlateletsCreateNestedManyWithoutPatientInput
    urine?: UrineCreateNestedManyWithoutPatientInput
  }

  export type PatientsUncheckedCreateWithoutOwnerInput = {
    id?: string
    blade: string
    age: number
    genre: string
    created_at?: Date | string
    updated_at?: Date | string
    erythrocyte?: ErythrocyteUncheckedCreateNestedManyWithoutPatientInput
    leukocyte?: LeukocyteUncheckedCreateNestedManyWithoutPatientInput
    platelets?: PlateletsUncheckedCreateNestedManyWithoutPatientInput
    urine?: UrineUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientsCreateOrConnectWithoutOwnerInput = {
    where: PatientsWhereUniqueInput
    create: XOR<PatientsCreateWithoutOwnerInput, PatientsUncheckedCreateWithoutOwnerInput>
  }

  export type PatientsCreateManyOwnerInputEnvelope = {
    data: PatientsCreateManyOwnerInput | PatientsCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type CellCreateWithoutOwnerInput = {
    name: string
    morphology: string
    clinical_relevance: string
    image: string
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutCellInput
    cell_mentions?: CellMentionCreateNestedManyWithoutCellInput
  }

  export type CellUncheckedCreateWithoutOwnerInput = {
    id?: number
    name: string
    morphology: string
    clinical_relevance: string
    image: string
    category_id: number
    created_at?: Date | string
    updated_at?: Date | string
    cell_mentions?: CellMentionUncheckedCreateNestedManyWithoutCellInput
  }

  export type CellCreateOrConnectWithoutOwnerInput = {
    where: CellWhereUniqueInput
    create: XOR<CellCreateWithoutOwnerInput, CellUncheckedCreateWithoutOwnerInput>
  }

  export type CellCreateManyOwnerInputEnvelope = {
    data: CellCreateManyOwnerInput | CellCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type PatientsUpsertWithWhereUniqueWithoutOwnerInput = {
    where: PatientsWhereUniqueInput
    update: XOR<PatientsUpdateWithoutOwnerInput, PatientsUncheckedUpdateWithoutOwnerInput>
    create: XOR<PatientsCreateWithoutOwnerInput, PatientsUncheckedCreateWithoutOwnerInput>
  }

  export type PatientsUpdateWithWhereUniqueWithoutOwnerInput = {
    where: PatientsWhereUniqueInput
    data: XOR<PatientsUpdateWithoutOwnerInput, PatientsUncheckedUpdateWithoutOwnerInput>
  }

  export type PatientsUpdateManyWithWhereWithoutOwnerInput = {
    where: PatientsScalarWhereInput
    data: XOR<PatientsUpdateManyMutationInput, PatientsUncheckedUpdateManyWithoutOwnerInput>
  }

  export type PatientsScalarWhereInput = {
    AND?: PatientsScalarWhereInput | PatientsScalarWhereInput[]
    OR?: PatientsScalarWhereInput[]
    NOT?: PatientsScalarWhereInput | PatientsScalarWhereInput[]
    id?: StringFilter<"Patients"> | string
    blade?: StringFilter<"Patients"> | string
    age?: IntFilter<"Patients"> | number
    genre?: StringFilter<"Patients"> | string
    created_at?: DateTimeFilter<"Patients"> | Date | string
    updated_at?: DateTimeFilter<"Patients"> | Date | string
    ownerId?: StringFilter<"Patients"> | string
  }

  export type CellUpsertWithWhereUniqueWithoutOwnerInput = {
    where: CellWhereUniqueInput
    update: XOR<CellUpdateWithoutOwnerInput, CellUncheckedUpdateWithoutOwnerInput>
    create: XOR<CellCreateWithoutOwnerInput, CellUncheckedCreateWithoutOwnerInput>
  }

  export type CellUpdateWithWhereUniqueWithoutOwnerInput = {
    where: CellWhereUniqueInput
    data: XOR<CellUpdateWithoutOwnerInput, CellUncheckedUpdateWithoutOwnerInput>
  }

  export type CellUpdateManyWithWhereWithoutOwnerInput = {
    where: CellScalarWhereInput
    data: XOR<CellUpdateManyMutationInput, CellUncheckedUpdateManyWithoutOwnerInput>
  }

  export type CellScalarWhereInput = {
    AND?: CellScalarWhereInput | CellScalarWhereInput[]
    OR?: CellScalarWhereInput[]
    NOT?: CellScalarWhereInput | CellScalarWhereInput[]
    id?: IntFilter<"Cell"> | number
    name?: StringFilter<"Cell"> | string
    morphology?: StringFilter<"Cell"> | string
    clinical_relevance?: StringFilter<"Cell"> | string
    image?: StringFilter<"Cell"> | string
    category_id?: IntFilter<"Cell"> | number
    created_at?: DateTimeFilter<"Cell"> | Date | string
    updated_at?: DateTimeFilter<"Cell"> | Date | string
    created_by?: StringFilter<"Cell"> | string
  }

  export type ErythrocyteCreateWithoutPatientInput = {
    erythrocyte?: number | null
    hemoglobin?: number | null
    hematocrit?: number | null
    RDW?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ErythrocyteUncheckedCreateWithoutPatientInput = {
    id?: number
    erythrocyte?: number | null
    hemoglobin?: number | null
    hematocrit?: number | null
    RDW?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ErythrocyteCreateOrConnectWithoutPatientInput = {
    where: ErythrocyteWhereUniqueInput
    create: XOR<ErythrocyteCreateWithoutPatientInput, ErythrocyteUncheckedCreateWithoutPatientInput>
  }

  export type ErythrocyteCreateManyPatientInputEnvelope = {
    data: ErythrocyteCreateManyPatientInput | ErythrocyteCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type LeukocyteCreateWithoutPatientInput = {
    leukocyte?: number | null
    neutrophils?: number | null
    bandNeutrophils?: number | null
    lymphocytes?: number | null
    monocytes?: number | null
    eosinophils?: number | null
    basophils?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LeukocyteUncheckedCreateWithoutPatientInput = {
    id?: number
    leukocyte?: number | null
    neutrophils?: number | null
    bandNeutrophils?: number | null
    lymphocytes?: number | null
    monocytes?: number | null
    eosinophils?: number | null
    basophils?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LeukocyteCreateOrConnectWithoutPatientInput = {
    where: LeukocyteWhereUniqueInput
    create: XOR<LeukocyteCreateWithoutPatientInput, LeukocyteUncheckedCreateWithoutPatientInput>
  }

  export type LeukocyteCreateManyPatientInputEnvelope = {
    data: LeukocyteCreateManyPatientInput | LeukocyteCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type PlateletsCreateWithoutPatientInput = {
    platelets?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PlateletsUncheckedCreateWithoutPatientInput = {
    id?: number
    platelets?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PlateletsCreateOrConnectWithoutPatientInput = {
    where: PlateletsWhereUniqueInput
    create: XOR<PlateletsCreateWithoutPatientInput, PlateletsUncheckedCreateWithoutPatientInput>
  }

  export type PlateletsCreateManyPatientInputEnvelope = {
    data: PlateletsCreateManyPatientInput | PlateletsCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type UrineCreateWithoutPatientInput = {
    volume?: number | null
    color?: string | null
    ph?: number | null
    density?: number | null
    protein?: string | null
    glucose?: string | null
    ketones?: string | null
    nitrites?: boolean | null
    hemoglobin?: string | null
    urobilinogen?: string | null
    sed_leukocytes?: string | null
    sed_erythrocytes?: string | null
    sed_epithelial?: string | null
    sed_mucus?: string | null
    sed_cylinders?: string | null
    sed_crystals?: string | null
    sed_bacteria?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UrineUncheckedCreateWithoutPatientInput = {
    id?: number
    volume?: number | null
    color?: string | null
    ph?: number | null
    density?: number | null
    protein?: string | null
    glucose?: string | null
    ketones?: string | null
    nitrites?: boolean | null
    hemoglobin?: string | null
    urobilinogen?: string | null
    sed_leukocytes?: string | null
    sed_erythrocytes?: string | null
    sed_epithelial?: string | null
    sed_mucus?: string | null
    sed_cylinders?: string | null
    sed_crystals?: string | null
    sed_bacteria?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UrineCreateOrConnectWithoutPatientInput = {
    where: UrineWhereUniqueInput
    create: XOR<UrineCreateWithoutPatientInput, UrineUncheckedCreateWithoutPatientInput>
  }

  export type UrineCreateManyPatientInputEnvelope = {
    data: UrineCreateManyPatientInput | UrineCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPatientsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    created_at?: Date | string
    updated_at?: Date | string
    cell?: CellCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutPatientsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    created_at?: Date | string
    updated_at?: Date | string
    cell?: CellUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutPatientsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientsInput, UserUncheckedCreateWithoutPatientsInput>
  }

  export type ErythrocyteUpsertWithWhereUniqueWithoutPatientInput = {
    where: ErythrocyteWhereUniqueInput
    update: XOR<ErythrocyteUpdateWithoutPatientInput, ErythrocyteUncheckedUpdateWithoutPatientInput>
    create: XOR<ErythrocyteCreateWithoutPatientInput, ErythrocyteUncheckedCreateWithoutPatientInput>
  }

  export type ErythrocyteUpdateWithWhereUniqueWithoutPatientInput = {
    where: ErythrocyteWhereUniqueInput
    data: XOR<ErythrocyteUpdateWithoutPatientInput, ErythrocyteUncheckedUpdateWithoutPatientInput>
  }

  export type ErythrocyteUpdateManyWithWhereWithoutPatientInput = {
    where: ErythrocyteScalarWhereInput
    data: XOR<ErythrocyteUpdateManyMutationInput, ErythrocyteUncheckedUpdateManyWithoutPatientInput>
  }

  export type ErythrocyteScalarWhereInput = {
    AND?: ErythrocyteScalarWhereInput | ErythrocyteScalarWhereInput[]
    OR?: ErythrocyteScalarWhereInput[]
    NOT?: ErythrocyteScalarWhereInput | ErythrocyteScalarWhereInput[]
    id?: IntFilter<"Erythrocyte"> | number
    erythrocyte?: FloatNullableFilter<"Erythrocyte"> | number | null
    hemoglobin?: FloatNullableFilter<"Erythrocyte"> | number | null
    hematocrit?: FloatNullableFilter<"Erythrocyte"> | number | null
    RDW?: FloatNullableFilter<"Erythrocyte"> | number | null
    patient_id?: StringFilter<"Erythrocyte"> | string
    created_at?: DateTimeFilter<"Erythrocyte"> | Date | string
    updated_at?: DateTimeFilter<"Erythrocyte"> | Date | string
  }

  export type LeukocyteUpsertWithWhereUniqueWithoutPatientInput = {
    where: LeukocyteWhereUniqueInput
    update: XOR<LeukocyteUpdateWithoutPatientInput, LeukocyteUncheckedUpdateWithoutPatientInput>
    create: XOR<LeukocyteCreateWithoutPatientInput, LeukocyteUncheckedCreateWithoutPatientInput>
  }

  export type LeukocyteUpdateWithWhereUniqueWithoutPatientInput = {
    where: LeukocyteWhereUniqueInput
    data: XOR<LeukocyteUpdateWithoutPatientInput, LeukocyteUncheckedUpdateWithoutPatientInput>
  }

  export type LeukocyteUpdateManyWithWhereWithoutPatientInput = {
    where: LeukocyteScalarWhereInput
    data: XOR<LeukocyteUpdateManyMutationInput, LeukocyteUncheckedUpdateManyWithoutPatientInput>
  }

  export type LeukocyteScalarWhereInput = {
    AND?: LeukocyteScalarWhereInput | LeukocyteScalarWhereInput[]
    OR?: LeukocyteScalarWhereInput[]
    NOT?: LeukocyteScalarWhereInput | LeukocyteScalarWhereInput[]
    id?: IntFilter<"Leukocyte"> | number
    leukocyte?: FloatNullableFilter<"Leukocyte"> | number | null
    neutrophils?: FloatNullableFilter<"Leukocyte"> | number | null
    bandNeutrophils?: FloatNullableFilter<"Leukocyte"> | number | null
    lymphocytes?: FloatNullableFilter<"Leukocyte"> | number | null
    monocytes?: FloatNullableFilter<"Leukocyte"> | number | null
    eosinophils?: FloatNullableFilter<"Leukocyte"> | number | null
    basophils?: FloatNullableFilter<"Leukocyte"> | number | null
    patient_id?: StringFilter<"Leukocyte"> | string
    created_at?: DateTimeFilter<"Leukocyte"> | Date | string
    updated_at?: DateTimeFilter<"Leukocyte"> | Date | string
  }

  export type PlateletsUpsertWithWhereUniqueWithoutPatientInput = {
    where: PlateletsWhereUniqueInput
    update: XOR<PlateletsUpdateWithoutPatientInput, PlateletsUncheckedUpdateWithoutPatientInput>
    create: XOR<PlateletsCreateWithoutPatientInput, PlateletsUncheckedCreateWithoutPatientInput>
  }

  export type PlateletsUpdateWithWhereUniqueWithoutPatientInput = {
    where: PlateletsWhereUniqueInput
    data: XOR<PlateletsUpdateWithoutPatientInput, PlateletsUncheckedUpdateWithoutPatientInput>
  }

  export type PlateletsUpdateManyWithWhereWithoutPatientInput = {
    where: PlateletsScalarWhereInput
    data: XOR<PlateletsUpdateManyMutationInput, PlateletsUncheckedUpdateManyWithoutPatientInput>
  }

  export type PlateletsScalarWhereInput = {
    AND?: PlateletsScalarWhereInput | PlateletsScalarWhereInput[]
    OR?: PlateletsScalarWhereInput[]
    NOT?: PlateletsScalarWhereInput | PlateletsScalarWhereInput[]
    id?: IntFilter<"Platelets"> | number
    platelets?: FloatNullableFilter<"Platelets"> | number | null
    patient_id?: StringFilter<"Platelets"> | string
    created_at?: DateTimeFilter<"Platelets"> | Date | string
    updated_at?: DateTimeFilter<"Platelets"> | Date | string
  }

  export type UrineUpsertWithWhereUniqueWithoutPatientInput = {
    where: UrineWhereUniqueInput
    update: XOR<UrineUpdateWithoutPatientInput, UrineUncheckedUpdateWithoutPatientInput>
    create: XOR<UrineCreateWithoutPatientInput, UrineUncheckedCreateWithoutPatientInput>
  }

  export type UrineUpdateWithWhereUniqueWithoutPatientInput = {
    where: UrineWhereUniqueInput
    data: XOR<UrineUpdateWithoutPatientInput, UrineUncheckedUpdateWithoutPatientInput>
  }

  export type UrineUpdateManyWithWhereWithoutPatientInput = {
    where: UrineScalarWhereInput
    data: XOR<UrineUpdateManyMutationInput, UrineUncheckedUpdateManyWithoutPatientInput>
  }

  export type UrineScalarWhereInput = {
    AND?: UrineScalarWhereInput | UrineScalarWhereInput[]
    OR?: UrineScalarWhereInput[]
    NOT?: UrineScalarWhereInput | UrineScalarWhereInput[]
    id?: IntFilter<"Urine"> | number
    volume?: FloatNullableFilter<"Urine"> | number | null
    color?: StringNullableFilter<"Urine"> | string | null
    ph?: FloatNullableFilter<"Urine"> | number | null
    density?: FloatNullableFilter<"Urine"> | number | null
    protein?: StringNullableFilter<"Urine"> | string | null
    glucose?: StringNullableFilter<"Urine"> | string | null
    ketones?: StringNullableFilter<"Urine"> | string | null
    nitrites?: BoolNullableFilter<"Urine"> | boolean | null
    hemoglobin?: StringNullableFilter<"Urine"> | string | null
    urobilinogen?: StringNullableFilter<"Urine"> | string | null
    sed_leukocytes?: StringNullableFilter<"Urine"> | string | null
    sed_erythrocytes?: StringNullableFilter<"Urine"> | string | null
    sed_epithelial?: StringNullableFilter<"Urine"> | string | null
    sed_mucus?: StringNullableFilter<"Urine"> | string | null
    sed_cylinders?: StringNullableFilter<"Urine"> | string | null
    sed_crystals?: StringNullableFilter<"Urine"> | string | null
    sed_bacteria?: StringNullableFilter<"Urine"> | string | null
    created_at?: DateTimeFilter<"Urine"> | Date | string
    updated_at?: DateTimeFilter<"Urine"> | Date | string
    patient_id?: StringFilter<"Urine"> | string
  }

  export type UserUpsertWithoutPatientsInput = {
    update: XOR<UserUpdateWithoutPatientsInput, UserUncheckedUpdateWithoutPatientsInput>
    create: XOR<UserCreateWithoutPatientsInput, UserUncheckedCreateWithoutPatientsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientsInput, UserUncheckedUpdateWithoutPatientsInput>
  }

  export type UserUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cell?: CellUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cell?: CellUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type PatientsCreateWithoutErythrocyteInput = {
    id?: string
    blade: string
    age: number
    genre: string
    created_at?: Date | string
    updated_at?: Date | string
    leukocyte?: LeukocyteCreateNestedManyWithoutPatientInput
    platelets?: PlateletsCreateNestedManyWithoutPatientInput
    urine?: UrineCreateNestedManyWithoutPatientInput
    owner: UserCreateNestedOneWithoutPatientsInput
  }

  export type PatientsUncheckedCreateWithoutErythrocyteInput = {
    id?: string
    blade: string
    age: number
    genre: string
    created_at?: Date | string
    updated_at?: Date | string
    ownerId: string
    leukocyte?: LeukocyteUncheckedCreateNestedManyWithoutPatientInput
    platelets?: PlateletsUncheckedCreateNestedManyWithoutPatientInput
    urine?: UrineUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientsCreateOrConnectWithoutErythrocyteInput = {
    where: PatientsWhereUniqueInput
    create: XOR<PatientsCreateWithoutErythrocyteInput, PatientsUncheckedCreateWithoutErythrocyteInput>
  }

  export type PatientsUpsertWithoutErythrocyteInput = {
    update: XOR<PatientsUpdateWithoutErythrocyteInput, PatientsUncheckedUpdateWithoutErythrocyteInput>
    create: XOR<PatientsCreateWithoutErythrocyteInput, PatientsUncheckedCreateWithoutErythrocyteInput>
    where?: PatientsWhereInput
  }

  export type PatientsUpdateToOneWithWhereWithoutErythrocyteInput = {
    where?: PatientsWhereInput
    data: XOR<PatientsUpdateWithoutErythrocyteInput, PatientsUncheckedUpdateWithoutErythrocyteInput>
  }

  export type PatientsUpdateWithoutErythrocyteInput = {
    id?: StringFieldUpdateOperationsInput | string
    blade?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leukocyte?: LeukocyteUpdateManyWithoutPatientNestedInput
    platelets?: PlateletsUpdateManyWithoutPatientNestedInput
    urine?: UrineUpdateManyWithoutPatientNestedInput
    owner?: UserUpdateOneRequiredWithoutPatientsNestedInput
  }

  export type PatientsUncheckedUpdateWithoutErythrocyteInput = {
    id?: StringFieldUpdateOperationsInput | string
    blade?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    leukocyte?: LeukocyteUncheckedUpdateManyWithoutPatientNestedInput
    platelets?: PlateletsUncheckedUpdateManyWithoutPatientNestedInput
    urine?: UrineUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientsCreateWithoutLeukocyteInput = {
    id?: string
    blade: string
    age: number
    genre: string
    created_at?: Date | string
    updated_at?: Date | string
    erythrocyte?: ErythrocyteCreateNestedManyWithoutPatientInput
    platelets?: PlateletsCreateNestedManyWithoutPatientInput
    urine?: UrineCreateNestedManyWithoutPatientInput
    owner: UserCreateNestedOneWithoutPatientsInput
  }

  export type PatientsUncheckedCreateWithoutLeukocyteInput = {
    id?: string
    blade: string
    age: number
    genre: string
    created_at?: Date | string
    updated_at?: Date | string
    ownerId: string
    erythrocyte?: ErythrocyteUncheckedCreateNestedManyWithoutPatientInput
    platelets?: PlateletsUncheckedCreateNestedManyWithoutPatientInput
    urine?: UrineUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientsCreateOrConnectWithoutLeukocyteInput = {
    where: PatientsWhereUniqueInput
    create: XOR<PatientsCreateWithoutLeukocyteInput, PatientsUncheckedCreateWithoutLeukocyteInput>
  }

  export type PatientsUpsertWithoutLeukocyteInput = {
    update: XOR<PatientsUpdateWithoutLeukocyteInput, PatientsUncheckedUpdateWithoutLeukocyteInput>
    create: XOR<PatientsCreateWithoutLeukocyteInput, PatientsUncheckedCreateWithoutLeukocyteInput>
    where?: PatientsWhereInput
  }

  export type PatientsUpdateToOneWithWhereWithoutLeukocyteInput = {
    where?: PatientsWhereInput
    data: XOR<PatientsUpdateWithoutLeukocyteInput, PatientsUncheckedUpdateWithoutLeukocyteInput>
  }

  export type PatientsUpdateWithoutLeukocyteInput = {
    id?: StringFieldUpdateOperationsInput | string
    blade?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    erythrocyte?: ErythrocyteUpdateManyWithoutPatientNestedInput
    platelets?: PlateletsUpdateManyWithoutPatientNestedInput
    urine?: UrineUpdateManyWithoutPatientNestedInput
    owner?: UserUpdateOneRequiredWithoutPatientsNestedInput
  }

  export type PatientsUncheckedUpdateWithoutLeukocyteInput = {
    id?: StringFieldUpdateOperationsInput | string
    blade?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    erythrocyte?: ErythrocyteUncheckedUpdateManyWithoutPatientNestedInput
    platelets?: PlateletsUncheckedUpdateManyWithoutPatientNestedInput
    urine?: UrineUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientsCreateWithoutPlateletsInput = {
    id?: string
    blade: string
    age: number
    genre: string
    created_at?: Date | string
    updated_at?: Date | string
    erythrocyte?: ErythrocyteCreateNestedManyWithoutPatientInput
    leukocyte?: LeukocyteCreateNestedManyWithoutPatientInput
    urine?: UrineCreateNestedManyWithoutPatientInput
    owner: UserCreateNestedOneWithoutPatientsInput
  }

  export type PatientsUncheckedCreateWithoutPlateletsInput = {
    id?: string
    blade: string
    age: number
    genre: string
    created_at?: Date | string
    updated_at?: Date | string
    ownerId: string
    erythrocyte?: ErythrocyteUncheckedCreateNestedManyWithoutPatientInput
    leukocyte?: LeukocyteUncheckedCreateNestedManyWithoutPatientInput
    urine?: UrineUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientsCreateOrConnectWithoutPlateletsInput = {
    where: PatientsWhereUniqueInput
    create: XOR<PatientsCreateWithoutPlateletsInput, PatientsUncheckedCreateWithoutPlateletsInput>
  }

  export type PatientsUpsertWithoutPlateletsInput = {
    update: XOR<PatientsUpdateWithoutPlateletsInput, PatientsUncheckedUpdateWithoutPlateletsInput>
    create: XOR<PatientsCreateWithoutPlateletsInput, PatientsUncheckedCreateWithoutPlateletsInput>
    where?: PatientsWhereInput
  }

  export type PatientsUpdateToOneWithWhereWithoutPlateletsInput = {
    where?: PatientsWhereInput
    data: XOR<PatientsUpdateWithoutPlateletsInput, PatientsUncheckedUpdateWithoutPlateletsInput>
  }

  export type PatientsUpdateWithoutPlateletsInput = {
    id?: StringFieldUpdateOperationsInput | string
    blade?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    erythrocyte?: ErythrocyteUpdateManyWithoutPatientNestedInput
    leukocyte?: LeukocyteUpdateManyWithoutPatientNestedInput
    urine?: UrineUpdateManyWithoutPatientNestedInput
    owner?: UserUpdateOneRequiredWithoutPatientsNestedInput
  }

  export type PatientsUncheckedUpdateWithoutPlateletsInput = {
    id?: StringFieldUpdateOperationsInput | string
    blade?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    erythrocyte?: ErythrocyteUncheckedUpdateManyWithoutPatientNestedInput
    leukocyte?: LeukocyteUncheckedUpdateManyWithoutPatientNestedInput
    urine?: UrineUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientsCreateWithoutUrineInput = {
    id?: string
    blade: string
    age: number
    genre: string
    created_at?: Date | string
    updated_at?: Date | string
    erythrocyte?: ErythrocyteCreateNestedManyWithoutPatientInput
    leukocyte?: LeukocyteCreateNestedManyWithoutPatientInput
    platelets?: PlateletsCreateNestedManyWithoutPatientInput
    owner: UserCreateNestedOneWithoutPatientsInput
  }

  export type PatientsUncheckedCreateWithoutUrineInput = {
    id?: string
    blade: string
    age: number
    genre: string
    created_at?: Date | string
    updated_at?: Date | string
    ownerId: string
    erythrocyte?: ErythrocyteUncheckedCreateNestedManyWithoutPatientInput
    leukocyte?: LeukocyteUncheckedCreateNestedManyWithoutPatientInput
    platelets?: PlateletsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientsCreateOrConnectWithoutUrineInput = {
    where: PatientsWhereUniqueInput
    create: XOR<PatientsCreateWithoutUrineInput, PatientsUncheckedCreateWithoutUrineInput>
  }

  export type PatientsUpsertWithoutUrineInput = {
    update: XOR<PatientsUpdateWithoutUrineInput, PatientsUncheckedUpdateWithoutUrineInput>
    create: XOR<PatientsCreateWithoutUrineInput, PatientsUncheckedCreateWithoutUrineInput>
    where?: PatientsWhereInput
  }

  export type PatientsUpdateToOneWithWhereWithoutUrineInput = {
    where?: PatientsWhereInput
    data: XOR<PatientsUpdateWithoutUrineInput, PatientsUncheckedUpdateWithoutUrineInput>
  }

  export type PatientsUpdateWithoutUrineInput = {
    id?: StringFieldUpdateOperationsInput | string
    blade?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    erythrocyte?: ErythrocyteUpdateManyWithoutPatientNestedInput
    leukocyte?: LeukocyteUpdateManyWithoutPatientNestedInput
    platelets?: PlateletsUpdateManyWithoutPatientNestedInput
    owner?: UserUpdateOneRequiredWithoutPatientsNestedInput
  }

  export type PatientsUncheckedUpdateWithoutUrineInput = {
    id?: StringFieldUpdateOperationsInput | string
    blade?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    erythrocyte?: ErythrocyteUncheckedUpdateManyWithoutPatientNestedInput
    leukocyte?: LeukocyteUncheckedUpdateManyWithoutPatientNestedInput
    platelets?: PlateletsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type CategoryCreateWithoutCellInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoryUncheckedCreateWithoutCellInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoryCreateOrConnectWithoutCellInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutCellInput, CategoryUncheckedCreateWithoutCellInput>
  }

  export type CellMentionCreateWithoutCellInput = {
    created_at?: Date | string
    updated_at?: Date | string
    mention: MentionCreateNestedOneWithoutCell_mentionsInput
  }

  export type CellMentionUncheckedCreateWithoutCellInput = {
    id?: number
    mention_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CellMentionCreateOrConnectWithoutCellInput = {
    where: CellMentionWhereUniqueInput
    create: XOR<CellMentionCreateWithoutCellInput, CellMentionUncheckedCreateWithoutCellInput>
  }

  export type CellMentionCreateManyCellInputEnvelope = {
    data: CellMentionCreateManyCellInput | CellMentionCreateManyCellInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCellInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    created_at?: Date | string
    updated_at?: Date | string
    patients?: PatientsCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutCellInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    created_at?: Date | string
    updated_at?: Date | string
    patients?: PatientsUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutCellInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCellInput, UserUncheckedCreateWithoutCellInput>
  }

  export type CategoryUpsertWithoutCellInput = {
    update: XOR<CategoryUpdateWithoutCellInput, CategoryUncheckedUpdateWithoutCellInput>
    create: XOR<CategoryCreateWithoutCellInput, CategoryUncheckedCreateWithoutCellInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutCellInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutCellInput, CategoryUncheckedUpdateWithoutCellInput>
  }

  export type CategoryUpdateWithoutCellInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutCellInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CellMentionUpsertWithWhereUniqueWithoutCellInput = {
    where: CellMentionWhereUniqueInput
    update: XOR<CellMentionUpdateWithoutCellInput, CellMentionUncheckedUpdateWithoutCellInput>
    create: XOR<CellMentionCreateWithoutCellInput, CellMentionUncheckedCreateWithoutCellInput>
  }

  export type CellMentionUpdateWithWhereUniqueWithoutCellInput = {
    where: CellMentionWhereUniqueInput
    data: XOR<CellMentionUpdateWithoutCellInput, CellMentionUncheckedUpdateWithoutCellInput>
  }

  export type CellMentionUpdateManyWithWhereWithoutCellInput = {
    where: CellMentionScalarWhereInput
    data: XOR<CellMentionUpdateManyMutationInput, CellMentionUncheckedUpdateManyWithoutCellInput>
  }

  export type CellMentionScalarWhereInput = {
    AND?: CellMentionScalarWhereInput | CellMentionScalarWhereInput[]
    OR?: CellMentionScalarWhereInput[]
    NOT?: CellMentionScalarWhereInput | CellMentionScalarWhereInput[]
    id?: IntFilter<"CellMention"> | number
    cell_id?: IntFilter<"CellMention"> | number
    mention_id?: IntFilter<"CellMention"> | number
    created_at?: DateTimeFilter<"CellMention"> | Date | string
    updated_at?: DateTimeFilter<"CellMention"> | Date | string
  }

  export type UserUpsertWithoutCellInput = {
    update: XOR<UserUpdateWithoutCellInput, UserUncheckedUpdateWithoutCellInput>
    create: XOR<UserCreateWithoutCellInput, UserUncheckedCreateWithoutCellInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCellInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCellInput, UserUncheckedUpdateWithoutCellInput>
  }

  export type UserUpdateWithoutCellInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientsUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutCellInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientsUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type CellCreateWithoutCategoryInput = {
    name: string
    morphology: string
    clinical_relevance: string
    image: string
    created_at?: Date | string
    updated_at?: Date | string
    cell_mentions?: CellMentionCreateNestedManyWithoutCellInput
    owner: UserCreateNestedOneWithoutCellInput
  }

  export type CellUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    morphology: string
    clinical_relevance: string
    image: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by: string
    cell_mentions?: CellMentionUncheckedCreateNestedManyWithoutCellInput
  }

  export type CellCreateOrConnectWithoutCategoryInput = {
    where: CellWhereUniqueInput
    create: XOR<CellCreateWithoutCategoryInput, CellUncheckedCreateWithoutCategoryInput>
  }

  export type CellCreateManyCategoryInputEnvelope = {
    data: CellCreateManyCategoryInput | CellCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CellUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CellWhereUniqueInput
    update: XOR<CellUpdateWithoutCategoryInput, CellUncheckedUpdateWithoutCategoryInput>
    create: XOR<CellCreateWithoutCategoryInput, CellUncheckedCreateWithoutCategoryInput>
  }

  export type CellUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CellWhereUniqueInput
    data: XOR<CellUpdateWithoutCategoryInput, CellUncheckedUpdateWithoutCategoryInput>
  }

  export type CellUpdateManyWithWhereWithoutCategoryInput = {
    where: CellScalarWhereInput
    data: XOR<CellUpdateManyMutationInput, CellUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CellMentionCreateWithoutMentionInput = {
    created_at?: Date | string
    updated_at?: Date | string
    cell: CellCreateNestedOneWithoutCell_mentionsInput
  }

  export type CellMentionUncheckedCreateWithoutMentionInput = {
    id?: number
    cell_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CellMentionCreateOrConnectWithoutMentionInput = {
    where: CellMentionWhereUniqueInput
    create: XOR<CellMentionCreateWithoutMentionInput, CellMentionUncheckedCreateWithoutMentionInput>
  }

  export type CellMentionCreateManyMentionInputEnvelope = {
    data: CellMentionCreateManyMentionInput | CellMentionCreateManyMentionInput[]
    skipDuplicates?: boolean
  }

  export type CellMentionUpsertWithWhereUniqueWithoutMentionInput = {
    where: CellMentionWhereUniqueInput
    update: XOR<CellMentionUpdateWithoutMentionInput, CellMentionUncheckedUpdateWithoutMentionInput>
    create: XOR<CellMentionCreateWithoutMentionInput, CellMentionUncheckedCreateWithoutMentionInput>
  }

  export type CellMentionUpdateWithWhereUniqueWithoutMentionInput = {
    where: CellMentionWhereUniqueInput
    data: XOR<CellMentionUpdateWithoutMentionInput, CellMentionUncheckedUpdateWithoutMentionInput>
  }

  export type CellMentionUpdateManyWithWhereWithoutMentionInput = {
    where: CellMentionScalarWhereInput
    data: XOR<CellMentionUpdateManyMutationInput, CellMentionUncheckedUpdateManyWithoutMentionInput>
  }

  export type CellCreateWithoutCell_mentionsInput = {
    name: string
    morphology: string
    clinical_relevance: string
    image: string
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutCellInput
    owner: UserCreateNestedOneWithoutCellInput
  }

  export type CellUncheckedCreateWithoutCell_mentionsInput = {
    id?: number
    name: string
    morphology: string
    clinical_relevance: string
    image: string
    category_id: number
    created_at?: Date | string
    updated_at?: Date | string
    created_by: string
  }

  export type CellCreateOrConnectWithoutCell_mentionsInput = {
    where: CellWhereUniqueInput
    create: XOR<CellCreateWithoutCell_mentionsInput, CellUncheckedCreateWithoutCell_mentionsInput>
  }

  export type MentionCreateWithoutCell_mentionsInput = {
    name: string
    url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MentionUncheckedCreateWithoutCell_mentionsInput = {
    id?: number
    name: string
    url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MentionCreateOrConnectWithoutCell_mentionsInput = {
    where: MentionWhereUniqueInput
    create: XOR<MentionCreateWithoutCell_mentionsInput, MentionUncheckedCreateWithoutCell_mentionsInput>
  }

  export type CellUpsertWithoutCell_mentionsInput = {
    update: XOR<CellUpdateWithoutCell_mentionsInput, CellUncheckedUpdateWithoutCell_mentionsInput>
    create: XOR<CellCreateWithoutCell_mentionsInput, CellUncheckedCreateWithoutCell_mentionsInput>
    where?: CellWhereInput
  }

  export type CellUpdateToOneWithWhereWithoutCell_mentionsInput = {
    where?: CellWhereInput
    data: XOR<CellUpdateWithoutCell_mentionsInput, CellUncheckedUpdateWithoutCell_mentionsInput>
  }

  export type CellUpdateWithoutCell_mentionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    morphology?: StringFieldUpdateOperationsInput | string
    clinical_relevance?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutCellNestedInput
    owner?: UserUpdateOneRequiredWithoutCellNestedInput
  }

  export type CellUncheckedUpdateWithoutCell_mentionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    morphology?: StringFieldUpdateOperationsInput | string
    clinical_relevance?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type MentionUpsertWithoutCell_mentionsInput = {
    update: XOR<MentionUpdateWithoutCell_mentionsInput, MentionUncheckedUpdateWithoutCell_mentionsInput>
    create: XOR<MentionCreateWithoutCell_mentionsInput, MentionUncheckedCreateWithoutCell_mentionsInput>
    where?: MentionWhereInput
  }

  export type MentionUpdateToOneWithWhereWithoutCell_mentionsInput = {
    where?: MentionWhereInput
    data: XOR<MentionUpdateWithoutCell_mentionsInput, MentionUncheckedUpdateWithoutCell_mentionsInput>
  }

  export type MentionUpdateWithoutCell_mentionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentionUncheckedUpdateWithoutCell_mentionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientsCreateManyOwnerInput = {
    id?: string
    blade: string
    age: number
    genre: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CellCreateManyOwnerInput = {
    id?: number
    name: string
    morphology: string
    clinical_relevance: string
    image: string
    category_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PatientsUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    blade?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    erythrocyte?: ErythrocyteUpdateManyWithoutPatientNestedInput
    leukocyte?: LeukocyteUpdateManyWithoutPatientNestedInput
    platelets?: PlateletsUpdateManyWithoutPatientNestedInput
    urine?: UrineUpdateManyWithoutPatientNestedInput
  }

  export type PatientsUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    blade?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    erythrocyte?: ErythrocyteUncheckedUpdateManyWithoutPatientNestedInput
    leukocyte?: LeukocyteUncheckedUpdateManyWithoutPatientNestedInput
    platelets?: PlateletsUncheckedUpdateManyWithoutPatientNestedInput
    urine?: UrineUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientsUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    blade?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CellUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    morphology?: StringFieldUpdateOperationsInput | string
    clinical_relevance?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutCellNestedInput
    cell_mentions?: CellMentionUpdateManyWithoutCellNestedInput
  }

  export type CellUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    morphology?: StringFieldUpdateOperationsInput | string
    clinical_relevance?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cell_mentions?: CellMentionUncheckedUpdateManyWithoutCellNestedInput
  }

  export type CellUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    morphology?: StringFieldUpdateOperationsInput | string
    clinical_relevance?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ErythrocyteCreateManyPatientInput = {
    id?: number
    erythrocyte?: number | null
    hemoglobin?: number | null
    hematocrit?: number | null
    RDW?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LeukocyteCreateManyPatientInput = {
    id?: number
    leukocyte?: number | null
    neutrophils?: number | null
    bandNeutrophils?: number | null
    lymphocytes?: number | null
    monocytes?: number | null
    eosinophils?: number | null
    basophils?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PlateletsCreateManyPatientInput = {
    id?: number
    platelets?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UrineCreateManyPatientInput = {
    id?: number
    volume?: number | null
    color?: string | null
    ph?: number | null
    density?: number | null
    protein?: string | null
    glucose?: string | null
    ketones?: string | null
    nitrites?: boolean | null
    hemoglobin?: string | null
    urobilinogen?: string | null
    sed_leukocytes?: string | null
    sed_erythrocytes?: string | null
    sed_epithelial?: string | null
    sed_mucus?: string | null
    sed_cylinders?: string | null
    sed_crystals?: string | null
    sed_bacteria?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ErythrocyteUpdateWithoutPatientInput = {
    erythrocyte?: NullableFloatFieldUpdateOperationsInput | number | null
    hemoglobin?: NullableFloatFieldUpdateOperationsInput | number | null
    hematocrit?: NullableFloatFieldUpdateOperationsInput | number | null
    RDW?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ErythrocyteUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    erythrocyte?: NullableFloatFieldUpdateOperationsInput | number | null
    hemoglobin?: NullableFloatFieldUpdateOperationsInput | number | null
    hematocrit?: NullableFloatFieldUpdateOperationsInput | number | null
    RDW?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ErythrocyteUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    erythrocyte?: NullableFloatFieldUpdateOperationsInput | number | null
    hemoglobin?: NullableFloatFieldUpdateOperationsInput | number | null
    hematocrit?: NullableFloatFieldUpdateOperationsInput | number | null
    RDW?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeukocyteUpdateWithoutPatientInput = {
    leukocyte?: NullableFloatFieldUpdateOperationsInput | number | null
    neutrophils?: NullableFloatFieldUpdateOperationsInput | number | null
    bandNeutrophils?: NullableFloatFieldUpdateOperationsInput | number | null
    lymphocytes?: NullableFloatFieldUpdateOperationsInput | number | null
    monocytes?: NullableFloatFieldUpdateOperationsInput | number | null
    eosinophils?: NullableFloatFieldUpdateOperationsInput | number | null
    basophils?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeukocyteUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    leukocyte?: NullableFloatFieldUpdateOperationsInput | number | null
    neutrophils?: NullableFloatFieldUpdateOperationsInput | number | null
    bandNeutrophils?: NullableFloatFieldUpdateOperationsInput | number | null
    lymphocytes?: NullableFloatFieldUpdateOperationsInput | number | null
    monocytes?: NullableFloatFieldUpdateOperationsInput | number | null
    eosinophils?: NullableFloatFieldUpdateOperationsInput | number | null
    basophils?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeukocyteUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    leukocyte?: NullableFloatFieldUpdateOperationsInput | number | null
    neutrophils?: NullableFloatFieldUpdateOperationsInput | number | null
    bandNeutrophils?: NullableFloatFieldUpdateOperationsInput | number | null
    lymphocytes?: NullableFloatFieldUpdateOperationsInput | number | null
    monocytes?: NullableFloatFieldUpdateOperationsInput | number | null
    eosinophils?: NullableFloatFieldUpdateOperationsInput | number | null
    basophils?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlateletsUpdateWithoutPatientInput = {
    platelets?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlateletsUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    platelets?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlateletsUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    platelets?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UrineUpdateWithoutPatientInput = {
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    ph?: NullableFloatFieldUpdateOperationsInput | number | null
    density?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableStringFieldUpdateOperationsInput | string | null
    glucose?: NullableStringFieldUpdateOperationsInput | string | null
    ketones?: NullableStringFieldUpdateOperationsInput | string | null
    nitrites?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hemoglobin?: NullableStringFieldUpdateOperationsInput | string | null
    urobilinogen?: NullableStringFieldUpdateOperationsInput | string | null
    sed_leukocytes?: NullableStringFieldUpdateOperationsInput | string | null
    sed_erythrocytes?: NullableStringFieldUpdateOperationsInput | string | null
    sed_epithelial?: NullableStringFieldUpdateOperationsInput | string | null
    sed_mucus?: NullableStringFieldUpdateOperationsInput | string | null
    sed_cylinders?: NullableStringFieldUpdateOperationsInput | string | null
    sed_crystals?: NullableStringFieldUpdateOperationsInput | string | null
    sed_bacteria?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UrineUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    ph?: NullableFloatFieldUpdateOperationsInput | number | null
    density?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableStringFieldUpdateOperationsInput | string | null
    glucose?: NullableStringFieldUpdateOperationsInput | string | null
    ketones?: NullableStringFieldUpdateOperationsInput | string | null
    nitrites?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hemoglobin?: NullableStringFieldUpdateOperationsInput | string | null
    urobilinogen?: NullableStringFieldUpdateOperationsInput | string | null
    sed_leukocytes?: NullableStringFieldUpdateOperationsInput | string | null
    sed_erythrocytes?: NullableStringFieldUpdateOperationsInput | string | null
    sed_epithelial?: NullableStringFieldUpdateOperationsInput | string | null
    sed_mucus?: NullableStringFieldUpdateOperationsInput | string | null
    sed_cylinders?: NullableStringFieldUpdateOperationsInput | string | null
    sed_crystals?: NullableStringFieldUpdateOperationsInput | string | null
    sed_bacteria?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UrineUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    ph?: NullableFloatFieldUpdateOperationsInput | number | null
    density?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableStringFieldUpdateOperationsInput | string | null
    glucose?: NullableStringFieldUpdateOperationsInput | string | null
    ketones?: NullableStringFieldUpdateOperationsInput | string | null
    nitrites?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hemoglobin?: NullableStringFieldUpdateOperationsInput | string | null
    urobilinogen?: NullableStringFieldUpdateOperationsInput | string | null
    sed_leukocytes?: NullableStringFieldUpdateOperationsInput | string | null
    sed_erythrocytes?: NullableStringFieldUpdateOperationsInput | string | null
    sed_epithelial?: NullableStringFieldUpdateOperationsInput | string | null
    sed_mucus?: NullableStringFieldUpdateOperationsInput | string | null
    sed_cylinders?: NullableStringFieldUpdateOperationsInput | string | null
    sed_crystals?: NullableStringFieldUpdateOperationsInput | string | null
    sed_bacteria?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CellMentionCreateManyCellInput = {
    id?: number
    mention_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CellMentionUpdateWithoutCellInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mention?: MentionUpdateOneRequiredWithoutCell_mentionsNestedInput
  }

  export type CellMentionUncheckedUpdateWithoutCellInput = {
    id?: IntFieldUpdateOperationsInput | number
    mention_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CellMentionUncheckedUpdateManyWithoutCellInput = {
    id?: IntFieldUpdateOperationsInput | number
    mention_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CellCreateManyCategoryInput = {
    id?: number
    name: string
    morphology: string
    clinical_relevance: string
    image: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by: string
  }

  export type CellUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    morphology?: StringFieldUpdateOperationsInput | string
    clinical_relevance?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cell_mentions?: CellMentionUpdateManyWithoutCellNestedInput
    owner?: UserUpdateOneRequiredWithoutCellNestedInput
  }

  export type CellUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    morphology?: StringFieldUpdateOperationsInput | string
    clinical_relevance?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    cell_mentions?: CellMentionUncheckedUpdateManyWithoutCellNestedInput
  }

  export type CellUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    morphology?: StringFieldUpdateOperationsInput | string
    clinical_relevance?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type CellMentionCreateManyMentionInput = {
    id?: number
    cell_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CellMentionUpdateWithoutMentionInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cell?: CellUpdateOneRequiredWithoutCell_mentionsNestedInput
  }

  export type CellMentionUncheckedUpdateWithoutMentionInput = {
    id?: IntFieldUpdateOperationsInput | number
    cell_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CellMentionUncheckedUpdateManyWithoutMentionInput = {
    id?: IntFieldUpdateOperationsInput | number
    cell_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}