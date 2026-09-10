
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model Examination
 * 
 */
export type Examination = $Result.DefaultSelection<Prisma.$ExaminationPayload>
/**
 * Model Therapy
 * 
 */
export type Therapy = $Result.DefaultSelection<Prisma.$TherapyPayload>
/**
 * Model TherapyItem
 * 
 */
export type TherapyItem = $Result.DefaultSelection<Prisma.$TherapyItemPayload>
/**
 * Model ClinicSettings
 * 
 */
export type ClinicSettings = $Result.DefaultSelection<Prisma.$ClinicSettingsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Departments
 * const departments = await prisma.department.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Departments
   * const departments = await prisma.department.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.examination`: Exposes CRUD operations for the **Examination** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Examinations
    * const examinations = await prisma.examination.findMany()
    * ```
    */
  get examination(): Prisma.ExaminationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.therapy`: Exposes CRUD operations for the **Therapy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Therapies
    * const therapies = await prisma.therapy.findMany()
    * ```
    */
  get therapy(): Prisma.TherapyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.therapyItem`: Exposes CRUD operations for the **TherapyItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TherapyItems
    * const therapyItems = await prisma.therapyItem.findMany()
    * ```
    */
  get therapyItem(): Prisma.TherapyItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clinicSettings`: Exposes CRUD operations for the **ClinicSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClinicSettings
    * const clinicSettings = await prisma.clinicSettings.findMany()
    * ```
    */
  get clinicSettings(): Prisma.ClinicSettingsDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Department: 'Department',
    Patient: 'Patient',
    Examination: 'Examination',
    Therapy: 'Therapy',
    TherapyItem: 'TherapyItem',
    ClinicSettings: 'ClinicSettings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "department" | "patient" | "examination" | "therapy" | "therapyItem" | "clinicSettings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Examination: {
        payload: Prisma.$ExaminationPayload<ExtArgs>
        fields: Prisma.ExaminationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExaminationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExaminationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload>
          }
          findFirst: {
            args: Prisma.ExaminationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExaminationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload>
          }
          findMany: {
            args: Prisma.ExaminationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload>[]
          }
          create: {
            args: Prisma.ExaminationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload>
          }
          createMany: {
            args: Prisma.ExaminationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExaminationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload>[]
          }
          delete: {
            args: Prisma.ExaminationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload>
          }
          update: {
            args: Prisma.ExaminationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload>
          }
          deleteMany: {
            args: Prisma.ExaminationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExaminationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExaminationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload>[]
          }
          upsert: {
            args: Prisma.ExaminationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload>
          }
          aggregate: {
            args: Prisma.ExaminationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExamination>
          }
          groupBy: {
            args: Prisma.ExaminationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExaminationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExaminationCountArgs<ExtArgs>
            result: $Utils.Optional<ExaminationCountAggregateOutputType> | number
          }
        }
      }
      Therapy: {
        payload: Prisma.$TherapyPayload<ExtArgs>
        fields: Prisma.TherapyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TherapyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TherapyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapyPayload>
          }
          findFirst: {
            args: Prisma.TherapyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TherapyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapyPayload>
          }
          findMany: {
            args: Prisma.TherapyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapyPayload>[]
          }
          create: {
            args: Prisma.TherapyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapyPayload>
          }
          createMany: {
            args: Prisma.TherapyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TherapyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapyPayload>[]
          }
          delete: {
            args: Prisma.TherapyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapyPayload>
          }
          update: {
            args: Prisma.TherapyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapyPayload>
          }
          deleteMany: {
            args: Prisma.TherapyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TherapyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TherapyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapyPayload>[]
          }
          upsert: {
            args: Prisma.TherapyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapyPayload>
          }
          aggregate: {
            args: Prisma.TherapyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTherapy>
          }
          groupBy: {
            args: Prisma.TherapyGroupByArgs<ExtArgs>
            result: $Utils.Optional<TherapyGroupByOutputType>[]
          }
          count: {
            args: Prisma.TherapyCountArgs<ExtArgs>
            result: $Utils.Optional<TherapyCountAggregateOutputType> | number
          }
        }
      }
      TherapyItem: {
        payload: Prisma.$TherapyItemPayload<ExtArgs>
        fields: Prisma.TherapyItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TherapyItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapyItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TherapyItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapyItemPayload>
          }
          findFirst: {
            args: Prisma.TherapyItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapyItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TherapyItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapyItemPayload>
          }
          findMany: {
            args: Prisma.TherapyItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapyItemPayload>[]
          }
          create: {
            args: Prisma.TherapyItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapyItemPayload>
          }
          createMany: {
            args: Prisma.TherapyItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TherapyItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapyItemPayload>[]
          }
          delete: {
            args: Prisma.TherapyItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapyItemPayload>
          }
          update: {
            args: Prisma.TherapyItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapyItemPayload>
          }
          deleteMany: {
            args: Prisma.TherapyItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TherapyItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TherapyItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapyItemPayload>[]
          }
          upsert: {
            args: Prisma.TherapyItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapyItemPayload>
          }
          aggregate: {
            args: Prisma.TherapyItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTherapyItem>
          }
          groupBy: {
            args: Prisma.TherapyItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<TherapyItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.TherapyItemCountArgs<ExtArgs>
            result: $Utils.Optional<TherapyItemCountAggregateOutputType> | number
          }
        }
      }
      ClinicSettings: {
        payload: Prisma.$ClinicSettingsPayload<ExtArgs>
        fields: Prisma.ClinicSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClinicSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClinicSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicSettingsPayload>
          }
          findFirst: {
            args: Prisma.ClinicSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClinicSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicSettingsPayload>
          }
          findMany: {
            args: Prisma.ClinicSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicSettingsPayload>[]
          }
          create: {
            args: Prisma.ClinicSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicSettingsPayload>
          }
          createMany: {
            args: Prisma.ClinicSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClinicSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicSettingsPayload>[]
          }
          delete: {
            args: Prisma.ClinicSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicSettingsPayload>
          }
          update: {
            args: Prisma.ClinicSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicSettingsPayload>
          }
          deleteMany: {
            args: Prisma.ClinicSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClinicSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClinicSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicSettingsPayload>[]
          }
          upsert: {
            args: Prisma.ClinicSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicSettingsPayload>
          }
          aggregate: {
            args: Prisma.ClinicSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClinicSettings>
          }
          groupBy: {
            args: Prisma.ClinicSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClinicSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClinicSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<ClinicSettingsCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    department?: DepartmentOmit
    patient?: PatientOmit
    examination?: ExaminationOmit
    therapy?: TherapyOmit
    therapyItem?: TherapyItemOmit
    clinicSettings?: ClinicSettingsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    examinations: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examinations?: boolean | DepartmentCountOutputTypeCountExaminationsArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountExaminationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExaminationWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    examinations: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examinations?: boolean | PatientCountOutputTypeCountExaminationsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountExaminationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExaminationWhereInput
  }


  /**
   * Count Type TherapyCountOutputType
   */

  export type TherapyCountOutputType = {
    items: number
  }

  export type TherapyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | TherapyCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * TherapyCountOutputType without action
   */
  export type TherapyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapyCountOutputType
     */
    select?: TherapyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TherapyCountOutputType without action
   */
  export type TherapyCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TherapyItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: string
    name: string
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    examinations?: boolean | Department$examinationsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    name?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examinations?: boolean | Department$examinationsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      examinations: Prisma.$ExaminationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.updateManyAndReturn({
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
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
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
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    examinations<T extends Department$examinationsArgs<ExtArgs> = {}>(args?: Subset<T, Department$examinationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'String'>
    readonly name: FieldRef<"Department", 'String'>
    readonly active: FieldRef<"Department", 'Boolean'>
    readonly createdAt: FieldRef<"Department", 'DateTime'>
    readonly updatedAt: FieldRef<"Department", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.examinations
   */
  export type Department$examinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    where?: ExaminationWhereInput
    orderBy?: ExaminationOrderByWithRelationInput | ExaminationOrderByWithRelationInput[]
    cursor?: ExaminationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExaminationScalarFieldEnum | ExaminationScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientMinAggregateOutputType = {
    id: string | null
    recordNumber: string | null
    firstName: string | null
    lastName: string | null
    dateOfBirth: Date | null
    nationalId: string | null
    address: string | null
    phone: string | null
    note: string | null
    lockedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    recordNumber: string | null
    firstName: string | null
    lastName: string | null
    dateOfBirth: Date | null
    nationalId: string | null
    address: string | null
    phone: string | null
    note: string | null
    lockedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    recordNumber: number
    firstName: number
    lastName: number
    dateOfBirth: number
    nationalId: number
    address: number
    phone: number
    note: number
    lockedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientMinAggregateInputType = {
    id?: true
    recordNumber?: true
    firstName?: true
    lastName?: true
    dateOfBirth?: true
    nationalId?: true
    address?: true
    phone?: true
    note?: true
    lockedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    recordNumber?: true
    firstName?: true
    lastName?: true
    dateOfBirth?: true
    nationalId?: true
    address?: true
    phone?: true
    note?: true
    lockedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    recordNumber?: true
    firstName?: true
    lastName?: true
    dateOfBirth?: true
    nationalId?: true
    address?: true
    phone?: true
    note?: true
    lockedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
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
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: string
    recordNumber: string
    firstName: string
    lastName: string
    dateOfBirth: Date | null
    nationalId: string | null
    address: string | null
    phone: string | null
    note: string | null
    lockedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recordNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    nationalId?: boolean
    address?: boolean
    phone?: boolean
    note?: boolean
    lockedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    examinations?: boolean | Patient$examinationsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recordNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    nationalId?: boolean
    address?: boolean
    phone?: boolean
    note?: boolean
    lockedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recordNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    nationalId?: boolean
    address?: boolean
    phone?: boolean
    note?: boolean
    lockedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    recordNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    nationalId?: boolean
    address?: boolean
    phone?: boolean
    note?: boolean
    lockedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recordNumber" | "firstName" | "lastName" | "dateOfBirth" | "nationalId" | "address" | "phone" | "note" | "lockedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examinations?: boolean | Patient$examinationsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      examinations: Prisma.$ExaminationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recordNumber: string
      firstName: string
      lastName: string
      dateOfBirth: Date | null
      nationalId: string | null
      address: string | null
      phone: string | null
      note: string | null
      lockedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
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
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
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
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    examinations<T extends Patient$examinationsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$examinationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'String'>
    readonly recordNumber: FieldRef<"Patient", 'String'>
    readonly firstName: FieldRef<"Patient", 'String'>
    readonly lastName: FieldRef<"Patient", 'String'>
    readonly dateOfBirth: FieldRef<"Patient", 'DateTime'>
    readonly nationalId: FieldRef<"Patient", 'String'>
    readonly address: FieldRef<"Patient", 'String'>
    readonly phone: FieldRef<"Patient", 'String'>
    readonly note: FieldRef<"Patient", 'String'>
    readonly lockedAt: FieldRef<"Patient", 'DateTime'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
    readonly updatedAt: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
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
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
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
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
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
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.examinations
   */
  export type Patient$examinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    where?: ExaminationWhereInput
    orderBy?: ExaminationOrderByWithRelationInput | ExaminationOrderByWithRelationInput[]
    cursor?: ExaminationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExaminationScalarFieldEnum | ExaminationScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model Examination
   */

  export type AggregateExamination = {
    _count: ExaminationCountAggregateOutputType | null
    _min: ExaminationMinAggregateOutputType | null
    _max: ExaminationMaxAggregateOutputType | null
  }

  export type ExaminationMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    departmentId: string | null
    examinationAt: Date | null
    doctorName: string | null
    diagnosis: string | null
    findings: string | null
    recommendation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExaminationMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    departmentId: string | null
    examinationAt: Date | null
    doctorName: string | null
    diagnosis: string | null
    findings: string | null
    recommendation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExaminationCountAggregateOutputType = {
    id: number
    patientId: number
    departmentId: number
    examinationAt: number
    doctorName: number
    diagnosis: number
    findings: number
    recommendation: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExaminationMinAggregateInputType = {
    id?: true
    patientId?: true
    departmentId?: true
    examinationAt?: true
    doctorName?: true
    diagnosis?: true
    findings?: true
    recommendation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExaminationMaxAggregateInputType = {
    id?: true
    patientId?: true
    departmentId?: true
    examinationAt?: true
    doctorName?: true
    diagnosis?: true
    findings?: true
    recommendation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExaminationCountAggregateInputType = {
    id?: true
    patientId?: true
    departmentId?: true
    examinationAt?: true
    doctorName?: true
    diagnosis?: true
    findings?: true
    recommendation?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExaminationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Examination to aggregate.
     */
    where?: ExaminationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examinations to fetch.
     */
    orderBy?: ExaminationOrderByWithRelationInput | ExaminationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExaminationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Examinations
    **/
    _count?: true | ExaminationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExaminationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExaminationMaxAggregateInputType
  }

  export type GetExaminationAggregateType<T extends ExaminationAggregateArgs> = {
        [P in keyof T & keyof AggregateExamination]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamination[P]>
      : GetScalarType<T[P], AggregateExamination[P]>
  }




  export type ExaminationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExaminationWhereInput
    orderBy?: ExaminationOrderByWithAggregationInput | ExaminationOrderByWithAggregationInput[]
    by: ExaminationScalarFieldEnum[] | ExaminationScalarFieldEnum
    having?: ExaminationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExaminationCountAggregateInputType | true
    _min?: ExaminationMinAggregateInputType
    _max?: ExaminationMaxAggregateInputType
  }

  export type ExaminationGroupByOutputType = {
    id: string
    patientId: string
    departmentId: string
    examinationAt: Date
    doctorName: string
    diagnosis: string | null
    findings: string | null
    recommendation: string | null
    createdAt: Date
    updatedAt: Date
    _count: ExaminationCountAggregateOutputType | null
    _min: ExaminationMinAggregateOutputType | null
    _max: ExaminationMaxAggregateOutputType | null
  }

  type GetExaminationGroupByPayload<T extends ExaminationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExaminationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExaminationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExaminationGroupByOutputType[P]>
            : GetScalarType<T[P], ExaminationGroupByOutputType[P]>
        }
      >
    >


  export type ExaminationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    departmentId?: boolean
    examinationAt?: boolean
    doctorName?: boolean
    diagnosis?: boolean
    findings?: boolean
    recommendation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    therapy?: boolean | Examination$therapyArgs<ExtArgs>
  }, ExtArgs["result"]["examination"]>

  export type ExaminationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    departmentId?: boolean
    examinationAt?: boolean
    doctorName?: boolean
    diagnosis?: boolean
    findings?: boolean
    recommendation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examination"]>

  export type ExaminationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    departmentId?: boolean
    examinationAt?: boolean
    doctorName?: boolean
    diagnosis?: boolean
    findings?: boolean
    recommendation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examination"]>

  export type ExaminationSelectScalar = {
    id?: boolean
    patientId?: boolean
    departmentId?: boolean
    examinationAt?: boolean
    doctorName?: boolean
    diagnosis?: boolean
    findings?: boolean
    recommendation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExaminationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "departmentId" | "examinationAt" | "doctorName" | "diagnosis" | "findings" | "recommendation" | "createdAt" | "updatedAt", ExtArgs["result"]["examination"]>
  export type ExaminationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    therapy?: boolean | Examination$therapyArgs<ExtArgs>
  }
  export type ExaminationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }
  export type ExaminationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }

  export type $ExaminationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Examination"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      department: Prisma.$DepartmentPayload<ExtArgs>
      therapy: Prisma.$TherapyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      departmentId: string
      examinationAt: Date
      doctorName: string
      diagnosis: string | null
      findings: string | null
      recommendation: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["examination"]>
    composites: {}
  }

  type ExaminationGetPayload<S extends boolean | null | undefined | ExaminationDefaultArgs> = $Result.GetResult<Prisma.$ExaminationPayload, S>

  type ExaminationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExaminationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExaminationCountAggregateInputType | true
    }

  export interface ExaminationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Examination'], meta: { name: 'Examination' } }
    /**
     * Find zero or one Examination that matches the filter.
     * @param {ExaminationFindUniqueArgs} args - Arguments to find a Examination
     * @example
     * // Get one Examination
     * const examination = await prisma.examination.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExaminationFindUniqueArgs>(args: SelectSubset<T, ExaminationFindUniqueArgs<ExtArgs>>): Prisma__ExaminationClient<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Examination that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExaminationFindUniqueOrThrowArgs} args - Arguments to find a Examination
     * @example
     * // Get one Examination
     * const examination = await prisma.examination.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExaminationFindUniqueOrThrowArgs>(args: SelectSubset<T, ExaminationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExaminationClient<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Examination that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminationFindFirstArgs} args - Arguments to find a Examination
     * @example
     * // Get one Examination
     * const examination = await prisma.examination.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExaminationFindFirstArgs>(args?: SelectSubset<T, ExaminationFindFirstArgs<ExtArgs>>): Prisma__ExaminationClient<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Examination that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminationFindFirstOrThrowArgs} args - Arguments to find a Examination
     * @example
     * // Get one Examination
     * const examination = await prisma.examination.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExaminationFindFirstOrThrowArgs>(args?: SelectSubset<T, ExaminationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExaminationClient<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Examinations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Examinations
     * const examinations = await prisma.examination.findMany()
     * 
     * // Get first 10 Examinations
     * const examinations = await prisma.examination.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examinationWithIdOnly = await prisma.examination.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExaminationFindManyArgs>(args?: SelectSubset<T, ExaminationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Examination.
     * @param {ExaminationCreateArgs} args - Arguments to create a Examination.
     * @example
     * // Create one Examination
     * const Examination = await prisma.examination.create({
     *   data: {
     *     // ... data to create a Examination
     *   }
     * })
     * 
     */
    create<T extends ExaminationCreateArgs>(args: SelectSubset<T, ExaminationCreateArgs<ExtArgs>>): Prisma__ExaminationClient<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Examinations.
     * @param {ExaminationCreateManyArgs} args - Arguments to create many Examinations.
     * @example
     * // Create many Examinations
     * const examination = await prisma.examination.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExaminationCreateManyArgs>(args?: SelectSubset<T, ExaminationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Examinations and returns the data saved in the database.
     * @param {ExaminationCreateManyAndReturnArgs} args - Arguments to create many Examinations.
     * @example
     * // Create many Examinations
     * const examination = await prisma.examination.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Examinations and only return the `id`
     * const examinationWithIdOnly = await prisma.examination.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExaminationCreateManyAndReturnArgs>(args?: SelectSubset<T, ExaminationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Examination.
     * @param {ExaminationDeleteArgs} args - Arguments to delete one Examination.
     * @example
     * // Delete one Examination
     * const Examination = await prisma.examination.delete({
     *   where: {
     *     // ... filter to delete one Examination
     *   }
     * })
     * 
     */
    delete<T extends ExaminationDeleteArgs>(args: SelectSubset<T, ExaminationDeleteArgs<ExtArgs>>): Prisma__ExaminationClient<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Examination.
     * @param {ExaminationUpdateArgs} args - Arguments to update one Examination.
     * @example
     * // Update one Examination
     * const examination = await prisma.examination.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExaminationUpdateArgs>(args: SelectSubset<T, ExaminationUpdateArgs<ExtArgs>>): Prisma__ExaminationClient<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Examinations.
     * @param {ExaminationDeleteManyArgs} args - Arguments to filter Examinations to delete.
     * @example
     * // Delete a few Examinations
     * const { count } = await prisma.examination.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExaminationDeleteManyArgs>(args?: SelectSubset<T, ExaminationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Examinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Examinations
     * const examination = await prisma.examination.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExaminationUpdateManyArgs>(args: SelectSubset<T, ExaminationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Examinations and returns the data updated in the database.
     * @param {ExaminationUpdateManyAndReturnArgs} args - Arguments to update many Examinations.
     * @example
     * // Update many Examinations
     * const examination = await prisma.examination.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Examinations and only return the `id`
     * const examinationWithIdOnly = await prisma.examination.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExaminationUpdateManyAndReturnArgs>(args: SelectSubset<T, ExaminationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Examination.
     * @param {ExaminationUpsertArgs} args - Arguments to update or create a Examination.
     * @example
     * // Update or create a Examination
     * const examination = await prisma.examination.upsert({
     *   create: {
     *     // ... data to create a Examination
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Examination we want to update
     *   }
     * })
     */
    upsert<T extends ExaminationUpsertArgs>(args: SelectSubset<T, ExaminationUpsertArgs<ExtArgs>>): Prisma__ExaminationClient<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Examinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminationCountArgs} args - Arguments to filter Examinations to count.
     * @example
     * // Count the number of Examinations
     * const count = await prisma.examination.count({
     *   where: {
     *     // ... the filter for the Examinations we want to count
     *   }
     * })
    **/
    count<T extends ExaminationCountArgs>(
      args?: Subset<T, ExaminationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExaminationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Examination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExaminationAggregateArgs>(args: Subset<T, ExaminationAggregateArgs>): Prisma.PrismaPromise<GetExaminationAggregateType<T>>

    /**
     * Group by Examination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminationGroupByArgs} args - Group by arguments.
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
      T extends ExaminationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExaminationGroupByArgs['orderBy'] }
        : { orderBy?: ExaminationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExaminationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExaminationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Examination model
   */
  readonly fields: ExaminationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Examination.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExaminationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    therapy<T extends Examination$therapyArgs<ExtArgs> = {}>(args?: Subset<T, Examination$therapyArgs<ExtArgs>>): Prisma__TherapyClient<$Result.GetResult<Prisma.$TherapyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Examination model
   */
  interface ExaminationFieldRefs {
    readonly id: FieldRef<"Examination", 'String'>
    readonly patientId: FieldRef<"Examination", 'String'>
    readonly departmentId: FieldRef<"Examination", 'String'>
    readonly examinationAt: FieldRef<"Examination", 'DateTime'>
    readonly doctorName: FieldRef<"Examination", 'String'>
    readonly diagnosis: FieldRef<"Examination", 'String'>
    readonly findings: FieldRef<"Examination", 'String'>
    readonly recommendation: FieldRef<"Examination", 'String'>
    readonly createdAt: FieldRef<"Examination", 'DateTime'>
    readonly updatedAt: FieldRef<"Examination", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Examination findUnique
   */
  export type ExaminationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    /**
     * Filter, which Examination to fetch.
     */
    where: ExaminationWhereUniqueInput
  }

  /**
   * Examination findUniqueOrThrow
   */
  export type ExaminationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    /**
     * Filter, which Examination to fetch.
     */
    where: ExaminationWhereUniqueInput
  }

  /**
   * Examination findFirst
   */
  export type ExaminationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    /**
     * Filter, which Examination to fetch.
     */
    where?: ExaminationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examinations to fetch.
     */
    orderBy?: ExaminationOrderByWithRelationInput | ExaminationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Examinations.
     */
    cursor?: ExaminationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Examinations.
     */
    distinct?: ExaminationScalarFieldEnum | ExaminationScalarFieldEnum[]
  }

  /**
   * Examination findFirstOrThrow
   */
  export type ExaminationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    /**
     * Filter, which Examination to fetch.
     */
    where?: ExaminationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examinations to fetch.
     */
    orderBy?: ExaminationOrderByWithRelationInput | ExaminationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Examinations.
     */
    cursor?: ExaminationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Examinations.
     */
    distinct?: ExaminationScalarFieldEnum | ExaminationScalarFieldEnum[]
  }

  /**
   * Examination findMany
   */
  export type ExaminationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    /**
     * Filter, which Examinations to fetch.
     */
    where?: ExaminationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examinations to fetch.
     */
    orderBy?: ExaminationOrderByWithRelationInput | ExaminationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Examinations.
     */
    cursor?: ExaminationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Examinations.
     */
    distinct?: ExaminationScalarFieldEnum | ExaminationScalarFieldEnum[]
  }

  /**
   * Examination create
   */
  export type ExaminationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    /**
     * The data needed to create a Examination.
     */
    data: XOR<ExaminationCreateInput, ExaminationUncheckedCreateInput>
  }

  /**
   * Examination createMany
   */
  export type ExaminationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Examinations.
     */
    data: ExaminationCreateManyInput | ExaminationCreateManyInput[]
  }

  /**
   * Examination createManyAndReturn
   */
  export type ExaminationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * The data used to create many Examinations.
     */
    data: ExaminationCreateManyInput | ExaminationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Examination update
   */
  export type ExaminationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    /**
     * The data needed to update a Examination.
     */
    data: XOR<ExaminationUpdateInput, ExaminationUncheckedUpdateInput>
    /**
     * Choose, which Examination to update.
     */
    where: ExaminationWhereUniqueInput
  }

  /**
   * Examination updateMany
   */
  export type ExaminationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Examinations.
     */
    data: XOR<ExaminationUpdateManyMutationInput, ExaminationUncheckedUpdateManyInput>
    /**
     * Filter which Examinations to update
     */
    where?: ExaminationWhereInput
    /**
     * Limit how many Examinations to update.
     */
    limit?: number
  }

  /**
   * Examination updateManyAndReturn
   */
  export type ExaminationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * The data used to update Examinations.
     */
    data: XOR<ExaminationUpdateManyMutationInput, ExaminationUncheckedUpdateManyInput>
    /**
     * Filter which Examinations to update
     */
    where?: ExaminationWhereInput
    /**
     * Limit how many Examinations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Examination upsert
   */
  export type ExaminationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    /**
     * The filter to search for the Examination to update in case it exists.
     */
    where: ExaminationWhereUniqueInput
    /**
     * In case the Examination found by the `where` argument doesn't exist, create a new Examination with this data.
     */
    create: XOR<ExaminationCreateInput, ExaminationUncheckedCreateInput>
    /**
     * In case the Examination was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExaminationUpdateInput, ExaminationUncheckedUpdateInput>
  }

  /**
   * Examination delete
   */
  export type ExaminationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    /**
     * Filter which Examination to delete.
     */
    where: ExaminationWhereUniqueInput
  }

  /**
   * Examination deleteMany
   */
  export type ExaminationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Examinations to delete
     */
    where?: ExaminationWhereInput
    /**
     * Limit how many Examinations to delete.
     */
    limit?: number
  }

  /**
   * Examination.therapy
   */
  export type Examination$therapyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapy
     */
    select?: TherapySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapy
     */
    omit?: TherapyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapyInclude<ExtArgs> | null
    where?: TherapyWhereInput
  }

  /**
   * Examination without action
   */
  export type ExaminationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
  }


  /**
   * Model Therapy
   */

  export type AggregateTherapy = {
    _count: TherapyCountAggregateOutputType | null
    _min: TherapyMinAggregateOutputType | null
    _max: TherapyMaxAggregateOutputType | null
  }

  export type TherapyMinAggregateOutputType = {
    id: string | null
    examinationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TherapyMaxAggregateOutputType = {
    id: string | null
    examinationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TherapyCountAggregateOutputType = {
    id: number
    examinationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TherapyMinAggregateInputType = {
    id?: true
    examinationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TherapyMaxAggregateInputType = {
    id?: true
    examinationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TherapyCountAggregateInputType = {
    id?: true
    examinationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TherapyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Therapy to aggregate.
     */
    where?: TherapyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Therapies to fetch.
     */
    orderBy?: TherapyOrderByWithRelationInput | TherapyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TherapyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Therapies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Therapies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Therapies
    **/
    _count?: true | TherapyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TherapyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TherapyMaxAggregateInputType
  }

  export type GetTherapyAggregateType<T extends TherapyAggregateArgs> = {
        [P in keyof T & keyof AggregateTherapy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTherapy[P]>
      : GetScalarType<T[P], AggregateTherapy[P]>
  }




  export type TherapyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TherapyWhereInput
    orderBy?: TherapyOrderByWithAggregationInput | TherapyOrderByWithAggregationInput[]
    by: TherapyScalarFieldEnum[] | TherapyScalarFieldEnum
    having?: TherapyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TherapyCountAggregateInputType | true
    _min?: TherapyMinAggregateInputType
    _max?: TherapyMaxAggregateInputType
  }

  export type TherapyGroupByOutputType = {
    id: string
    examinationId: string
    createdAt: Date
    updatedAt: Date
    _count: TherapyCountAggregateOutputType | null
    _min: TherapyMinAggregateOutputType | null
    _max: TherapyMaxAggregateOutputType | null
  }

  type GetTherapyGroupByPayload<T extends TherapyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TherapyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TherapyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TherapyGroupByOutputType[P]>
            : GetScalarType<T[P], TherapyGroupByOutputType[P]>
        }
      >
    >


  export type TherapySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examinationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    examination?: boolean | ExaminationDefaultArgs<ExtArgs>
    items?: boolean | Therapy$itemsArgs<ExtArgs>
    _count?: boolean | TherapyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["therapy"]>

  export type TherapySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examinationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    examination?: boolean | ExaminationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["therapy"]>

  export type TherapySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examinationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    examination?: boolean | ExaminationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["therapy"]>

  export type TherapySelectScalar = {
    id?: boolean
    examinationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TherapyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "examinationId" | "createdAt" | "updatedAt", ExtArgs["result"]["therapy"]>
  export type TherapyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examination?: boolean | ExaminationDefaultArgs<ExtArgs>
    items?: boolean | Therapy$itemsArgs<ExtArgs>
    _count?: boolean | TherapyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TherapyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examination?: boolean | ExaminationDefaultArgs<ExtArgs>
  }
  export type TherapyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examination?: boolean | ExaminationDefaultArgs<ExtArgs>
  }

  export type $TherapyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Therapy"
    objects: {
      examination: Prisma.$ExaminationPayload<ExtArgs>
      items: Prisma.$TherapyItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      examinationId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["therapy"]>
    composites: {}
  }

  type TherapyGetPayload<S extends boolean | null | undefined | TherapyDefaultArgs> = $Result.GetResult<Prisma.$TherapyPayload, S>

  type TherapyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TherapyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TherapyCountAggregateInputType | true
    }

  export interface TherapyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Therapy'], meta: { name: 'Therapy' } }
    /**
     * Find zero or one Therapy that matches the filter.
     * @param {TherapyFindUniqueArgs} args - Arguments to find a Therapy
     * @example
     * // Get one Therapy
     * const therapy = await prisma.therapy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TherapyFindUniqueArgs>(args: SelectSubset<T, TherapyFindUniqueArgs<ExtArgs>>): Prisma__TherapyClient<$Result.GetResult<Prisma.$TherapyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Therapy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TherapyFindUniqueOrThrowArgs} args - Arguments to find a Therapy
     * @example
     * // Get one Therapy
     * const therapy = await prisma.therapy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TherapyFindUniqueOrThrowArgs>(args: SelectSubset<T, TherapyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TherapyClient<$Result.GetResult<Prisma.$TherapyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Therapy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapyFindFirstArgs} args - Arguments to find a Therapy
     * @example
     * // Get one Therapy
     * const therapy = await prisma.therapy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TherapyFindFirstArgs>(args?: SelectSubset<T, TherapyFindFirstArgs<ExtArgs>>): Prisma__TherapyClient<$Result.GetResult<Prisma.$TherapyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Therapy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapyFindFirstOrThrowArgs} args - Arguments to find a Therapy
     * @example
     * // Get one Therapy
     * const therapy = await prisma.therapy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TherapyFindFirstOrThrowArgs>(args?: SelectSubset<T, TherapyFindFirstOrThrowArgs<ExtArgs>>): Prisma__TherapyClient<$Result.GetResult<Prisma.$TherapyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Therapies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Therapies
     * const therapies = await prisma.therapy.findMany()
     * 
     * // Get first 10 Therapies
     * const therapies = await prisma.therapy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const therapyWithIdOnly = await prisma.therapy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TherapyFindManyArgs>(args?: SelectSubset<T, TherapyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Therapy.
     * @param {TherapyCreateArgs} args - Arguments to create a Therapy.
     * @example
     * // Create one Therapy
     * const Therapy = await prisma.therapy.create({
     *   data: {
     *     // ... data to create a Therapy
     *   }
     * })
     * 
     */
    create<T extends TherapyCreateArgs>(args: SelectSubset<T, TherapyCreateArgs<ExtArgs>>): Prisma__TherapyClient<$Result.GetResult<Prisma.$TherapyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Therapies.
     * @param {TherapyCreateManyArgs} args - Arguments to create many Therapies.
     * @example
     * // Create many Therapies
     * const therapy = await prisma.therapy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TherapyCreateManyArgs>(args?: SelectSubset<T, TherapyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Therapies and returns the data saved in the database.
     * @param {TherapyCreateManyAndReturnArgs} args - Arguments to create many Therapies.
     * @example
     * // Create many Therapies
     * const therapy = await prisma.therapy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Therapies and only return the `id`
     * const therapyWithIdOnly = await prisma.therapy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TherapyCreateManyAndReturnArgs>(args?: SelectSubset<T, TherapyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Therapy.
     * @param {TherapyDeleteArgs} args - Arguments to delete one Therapy.
     * @example
     * // Delete one Therapy
     * const Therapy = await prisma.therapy.delete({
     *   where: {
     *     // ... filter to delete one Therapy
     *   }
     * })
     * 
     */
    delete<T extends TherapyDeleteArgs>(args: SelectSubset<T, TherapyDeleteArgs<ExtArgs>>): Prisma__TherapyClient<$Result.GetResult<Prisma.$TherapyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Therapy.
     * @param {TherapyUpdateArgs} args - Arguments to update one Therapy.
     * @example
     * // Update one Therapy
     * const therapy = await prisma.therapy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TherapyUpdateArgs>(args: SelectSubset<T, TherapyUpdateArgs<ExtArgs>>): Prisma__TherapyClient<$Result.GetResult<Prisma.$TherapyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Therapies.
     * @param {TherapyDeleteManyArgs} args - Arguments to filter Therapies to delete.
     * @example
     * // Delete a few Therapies
     * const { count } = await prisma.therapy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TherapyDeleteManyArgs>(args?: SelectSubset<T, TherapyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Therapies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Therapies
     * const therapy = await prisma.therapy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TherapyUpdateManyArgs>(args: SelectSubset<T, TherapyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Therapies and returns the data updated in the database.
     * @param {TherapyUpdateManyAndReturnArgs} args - Arguments to update many Therapies.
     * @example
     * // Update many Therapies
     * const therapy = await prisma.therapy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Therapies and only return the `id`
     * const therapyWithIdOnly = await prisma.therapy.updateManyAndReturn({
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
    updateManyAndReturn<T extends TherapyUpdateManyAndReturnArgs>(args: SelectSubset<T, TherapyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Therapy.
     * @param {TherapyUpsertArgs} args - Arguments to update or create a Therapy.
     * @example
     * // Update or create a Therapy
     * const therapy = await prisma.therapy.upsert({
     *   create: {
     *     // ... data to create a Therapy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Therapy we want to update
     *   }
     * })
     */
    upsert<T extends TherapyUpsertArgs>(args: SelectSubset<T, TherapyUpsertArgs<ExtArgs>>): Prisma__TherapyClient<$Result.GetResult<Prisma.$TherapyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Therapies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapyCountArgs} args - Arguments to filter Therapies to count.
     * @example
     * // Count the number of Therapies
     * const count = await prisma.therapy.count({
     *   where: {
     *     // ... the filter for the Therapies we want to count
     *   }
     * })
    **/
    count<T extends TherapyCountArgs>(
      args?: Subset<T, TherapyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TherapyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Therapy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TherapyAggregateArgs>(args: Subset<T, TherapyAggregateArgs>): Prisma.PrismaPromise<GetTherapyAggregateType<T>>

    /**
     * Group by Therapy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapyGroupByArgs} args - Group by arguments.
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
      T extends TherapyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TherapyGroupByArgs['orderBy'] }
        : { orderBy?: TherapyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TherapyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTherapyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Therapy model
   */
  readonly fields: TherapyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Therapy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TherapyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    examination<T extends ExaminationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExaminationDefaultArgs<ExtArgs>>): Prisma__ExaminationClient<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Therapy$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Therapy$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapyItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Therapy model
   */
  interface TherapyFieldRefs {
    readonly id: FieldRef<"Therapy", 'String'>
    readonly examinationId: FieldRef<"Therapy", 'String'>
    readonly createdAt: FieldRef<"Therapy", 'DateTime'>
    readonly updatedAt: FieldRef<"Therapy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Therapy findUnique
   */
  export type TherapyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapy
     */
    select?: TherapySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapy
     */
    omit?: TherapyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapyInclude<ExtArgs> | null
    /**
     * Filter, which Therapy to fetch.
     */
    where: TherapyWhereUniqueInput
  }

  /**
   * Therapy findUniqueOrThrow
   */
  export type TherapyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapy
     */
    select?: TherapySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapy
     */
    omit?: TherapyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapyInclude<ExtArgs> | null
    /**
     * Filter, which Therapy to fetch.
     */
    where: TherapyWhereUniqueInput
  }

  /**
   * Therapy findFirst
   */
  export type TherapyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapy
     */
    select?: TherapySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapy
     */
    omit?: TherapyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapyInclude<ExtArgs> | null
    /**
     * Filter, which Therapy to fetch.
     */
    where?: TherapyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Therapies to fetch.
     */
    orderBy?: TherapyOrderByWithRelationInput | TherapyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Therapies.
     */
    cursor?: TherapyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Therapies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Therapies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Therapies.
     */
    distinct?: TherapyScalarFieldEnum | TherapyScalarFieldEnum[]
  }

  /**
   * Therapy findFirstOrThrow
   */
  export type TherapyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapy
     */
    select?: TherapySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapy
     */
    omit?: TherapyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapyInclude<ExtArgs> | null
    /**
     * Filter, which Therapy to fetch.
     */
    where?: TherapyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Therapies to fetch.
     */
    orderBy?: TherapyOrderByWithRelationInput | TherapyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Therapies.
     */
    cursor?: TherapyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Therapies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Therapies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Therapies.
     */
    distinct?: TherapyScalarFieldEnum | TherapyScalarFieldEnum[]
  }

  /**
   * Therapy findMany
   */
  export type TherapyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapy
     */
    select?: TherapySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapy
     */
    omit?: TherapyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapyInclude<ExtArgs> | null
    /**
     * Filter, which Therapies to fetch.
     */
    where?: TherapyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Therapies to fetch.
     */
    orderBy?: TherapyOrderByWithRelationInput | TherapyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Therapies.
     */
    cursor?: TherapyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Therapies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Therapies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Therapies.
     */
    distinct?: TherapyScalarFieldEnum | TherapyScalarFieldEnum[]
  }

  /**
   * Therapy create
   */
  export type TherapyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapy
     */
    select?: TherapySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapy
     */
    omit?: TherapyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapyInclude<ExtArgs> | null
    /**
     * The data needed to create a Therapy.
     */
    data: XOR<TherapyCreateInput, TherapyUncheckedCreateInput>
  }

  /**
   * Therapy createMany
   */
  export type TherapyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Therapies.
     */
    data: TherapyCreateManyInput | TherapyCreateManyInput[]
  }

  /**
   * Therapy createManyAndReturn
   */
  export type TherapyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapy
     */
    select?: TherapySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Therapy
     */
    omit?: TherapyOmit<ExtArgs> | null
    /**
     * The data used to create many Therapies.
     */
    data: TherapyCreateManyInput | TherapyCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Therapy update
   */
  export type TherapyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapy
     */
    select?: TherapySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapy
     */
    omit?: TherapyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapyInclude<ExtArgs> | null
    /**
     * The data needed to update a Therapy.
     */
    data: XOR<TherapyUpdateInput, TherapyUncheckedUpdateInput>
    /**
     * Choose, which Therapy to update.
     */
    where: TherapyWhereUniqueInput
  }

  /**
   * Therapy updateMany
   */
  export type TherapyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Therapies.
     */
    data: XOR<TherapyUpdateManyMutationInput, TherapyUncheckedUpdateManyInput>
    /**
     * Filter which Therapies to update
     */
    where?: TherapyWhereInput
    /**
     * Limit how many Therapies to update.
     */
    limit?: number
  }

  /**
   * Therapy updateManyAndReturn
   */
  export type TherapyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapy
     */
    select?: TherapySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Therapy
     */
    omit?: TherapyOmit<ExtArgs> | null
    /**
     * The data used to update Therapies.
     */
    data: XOR<TherapyUpdateManyMutationInput, TherapyUncheckedUpdateManyInput>
    /**
     * Filter which Therapies to update
     */
    where?: TherapyWhereInput
    /**
     * Limit how many Therapies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Therapy upsert
   */
  export type TherapyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapy
     */
    select?: TherapySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapy
     */
    omit?: TherapyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapyInclude<ExtArgs> | null
    /**
     * The filter to search for the Therapy to update in case it exists.
     */
    where: TherapyWhereUniqueInput
    /**
     * In case the Therapy found by the `where` argument doesn't exist, create a new Therapy with this data.
     */
    create: XOR<TherapyCreateInput, TherapyUncheckedCreateInput>
    /**
     * In case the Therapy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TherapyUpdateInput, TherapyUncheckedUpdateInput>
  }

  /**
   * Therapy delete
   */
  export type TherapyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapy
     */
    select?: TherapySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapy
     */
    omit?: TherapyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapyInclude<ExtArgs> | null
    /**
     * Filter which Therapy to delete.
     */
    where: TherapyWhereUniqueInput
  }

  /**
   * Therapy deleteMany
   */
  export type TherapyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Therapies to delete
     */
    where?: TherapyWhereInput
    /**
     * Limit how many Therapies to delete.
     */
    limit?: number
  }

  /**
   * Therapy.items
   */
  export type Therapy$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapyItem
     */
    select?: TherapyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapyItem
     */
    omit?: TherapyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapyItemInclude<ExtArgs> | null
    where?: TherapyItemWhereInput
    orderBy?: TherapyItemOrderByWithRelationInput | TherapyItemOrderByWithRelationInput[]
    cursor?: TherapyItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TherapyItemScalarFieldEnum | TherapyItemScalarFieldEnum[]
  }

  /**
   * Therapy without action
   */
  export type TherapyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapy
     */
    select?: TherapySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapy
     */
    omit?: TherapyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapyInclude<ExtArgs> | null
  }


  /**
   * Model TherapyItem
   */

  export type AggregateTherapyItem = {
    _count: TherapyItemCountAggregateOutputType | null
    _min: TherapyItemMinAggregateOutputType | null
    _max: TherapyItemMaxAggregateOutputType | null
  }

  export type TherapyItemMinAggregateOutputType = {
    id: string | null
    therapyId: string | null
    medicineName: string | null
    dosage: string | null
    administrationRoute: string | null
    duration: string | null
    note: string | null
    createdAt: Date | null
  }

  export type TherapyItemMaxAggregateOutputType = {
    id: string | null
    therapyId: string | null
    medicineName: string | null
    dosage: string | null
    administrationRoute: string | null
    duration: string | null
    note: string | null
    createdAt: Date | null
  }

  export type TherapyItemCountAggregateOutputType = {
    id: number
    therapyId: number
    medicineName: number
    dosage: number
    administrationRoute: number
    duration: number
    note: number
    createdAt: number
    _all: number
  }


  export type TherapyItemMinAggregateInputType = {
    id?: true
    therapyId?: true
    medicineName?: true
    dosage?: true
    administrationRoute?: true
    duration?: true
    note?: true
    createdAt?: true
  }

  export type TherapyItemMaxAggregateInputType = {
    id?: true
    therapyId?: true
    medicineName?: true
    dosage?: true
    administrationRoute?: true
    duration?: true
    note?: true
    createdAt?: true
  }

  export type TherapyItemCountAggregateInputType = {
    id?: true
    therapyId?: true
    medicineName?: true
    dosage?: true
    administrationRoute?: true
    duration?: true
    note?: true
    createdAt?: true
    _all?: true
  }

  export type TherapyItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TherapyItem to aggregate.
     */
    where?: TherapyItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapyItems to fetch.
     */
    orderBy?: TherapyItemOrderByWithRelationInput | TherapyItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TherapyItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapyItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapyItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TherapyItems
    **/
    _count?: true | TherapyItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TherapyItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TherapyItemMaxAggregateInputType
  }

  export type GetTherapyItemAggregateType<T extends TherapyItemAggregateArgs> = {
        [P in keyof T & keyof AggregateTherapyItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTherapyItem[P]>
      : GetScalarType<T[P], AggregateTherapyItem[P]>
  }




  export type TherapyItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TherapyItemWhereInput
    orderBy?: TherapyItemOrderByWithAggregationInput | TherapyItemOrderByWithAggregationInput[]
    by: TherapyItemScalarFieldEnum[] | TherapyItemScalarFieldEnum
    having?: TherapyItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TherapyItemCountAggregateInputType | true
    _min?: TherapyItemMinAggregateInputType
    _max?: TherapyItemMaxAggregateInputType
  }

  export type TherapyItemGroupByOutputType = {
    id: string
    therapyId: string
    medicineName: string
    dosage: string | null
    administrationRoute: string | null
    duration: string | null
    note: string | null
    createdAt: Date
    _count: TherapyItemCountAggregateOutputType | null
    _min: TherapyItemMinAggregateOutputType | null
    _max: TherapyItemMaxAggregateOutputType | null
  }

  type GetTherapyItemGroupByPayload<T extends TherapyItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TherapyItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TherapyItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TherapyItemGroupByOutputType[P]>
            : GetScalarType<T[P], TherapyItemGroupByOutputType[P]>
        }
      >
    >


  export type TherapyItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    therapyId?: boolean
    medicineName?: boolean
    dosage?: boolean
    administrationRoute?: boolean
    duration?: boolean
    note?: boolean
    createdAt?: boolean
    therapy?: boolean | TherapyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["therapyItem"]>

  export type TherapyItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    therapyId?: boolean
    medicineName?: boolean
    dosage?: boolean
    administrationRoute?: boolean
    duration?: boolean
    note?: boolean
    createdAt?: boolean
    therapy?: boolean | TherapyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["therapyItem"]>

  export type TherapyItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    therapyId?: boolean
    medicineName?: boolean
    dosage?: boolean
    administrationRoute?: boolean
    duration?: boolean
    note?: boolean
    createdAt?: boolean
    therapy?: boolean | TherapyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["therapyItem"]>

  export type TherapyItemSelectScalar = {
    id?: boolean
    therapyId?: boolean
    medicineName?: boolean
    dosage?: boolean
    administrationRoute?: boolean
    duration?: boolean
    note?: boolean
    createdAt?: boolean
  }

  export type TherapyItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "therapyId" | "medicineName" | "dosage" | "administrationRoute" | "duration" | "note" | "createdAt", ExtArgs["result"]["therapyItem"]>
  export type TherapyItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapy?: boolean | TherapyDefaultArgs<ExtArgs>
  }
  export type TherapyItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapy?: boolean | TherapyDefaultArgs<ExtArgs>
  }
  export type TherapyItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapy?: boolean | TherapyDefaultArgs<ExtArgs>
  }

  export type $TherapyItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TherapyItem"
    objects: {
      therapy: Prisma.$TherapyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      therapyId: string
      medicineName: string
      dosage: string | null
      administrationRoute: string | null
      duration: string | null
      note: string | null
      createdAt: Date
    }, ExtArgs["result"]["therapyItem"]>
    composites: {}
  }

  type TherapyItemGetPayload<S extends boolean | null | undefined | TherapyItemDefaultArgs> = $Result.GetResult<Prisma.$TherapyItemPayload, S>

  type TherapyItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TherapyItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TherapyItemCountAggregateInputType | true
    }

  export interface TherapyItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TherapyItem'], meta: { name: 'TherapyItem' } }
    /**
     * Find zero or one TherapyItem that matches the filter.
     * @param {TherapyItemFindUniqueArgs} args - Arguments to find a TherapyItem
     * @example
     * // Get one TherapyItem
     * const therapyItem = await prisma.therapyItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TherapyItemFindUniqueArgs>(args: SelectSubset<T, TherapyItemFindUniqueArgs<ExtArgs>>): Prisma__TherapyItemClient<$Result.GetResult<Prisma.$TherapyItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TherapyItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TherapyItemFindUniqueOrThrowArgs} args - Arguments to find a TherapyItem
     * @example
     * // Get one TherapyItem
     * const therapyItem = await prisma.therapyItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TherapyItemFindUniqueOrThrowArgs>(args: SelectSubset<T, TherapyItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TherapyItemClient<$Result.GetResult<Prisma.$TherapyItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TherapyItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapyItemFindFirstArgs} args - Arguments to find a TherapyItem
     * @example
     * // Get one TherapyItem
     * const therapyItem = await prisma.therapyItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TherapyItemFindFirstArgs>(args?: SelectSubset<T, TherapyItemFindFirstArgs<ExtArgs>>): Prisma__TherapyItemClient<$Result.GetResult<Prisma.$TherapyItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TherapyItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapyItemFindFirstOrThrowArgs} args - Arguments to find a TherapyItem
     * @example
     * // Get one TherapyItem
     * const therapyItem = await prisma.therapyItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TherapyItemFindFirstOrThrowArgs>(args?: SelectSubset<T, TherapyItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__TherapyItemClient<$Result.GetResult<Prisma.$TherapyItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TherapyItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapyItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TherapyItems
     * const therapyItems = await prisma.therapyItem.findMany()
     * 
     * // Get first 10 TherapyItems
     * const therapyItems = await prisma.therapyItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const therapyItemWithIdOnly = await prisma.therapyItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TherapyItemFindManyArgs>(args?: SelectSubset<T, TherapyItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapyItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TherapyItem.
     * @param {TherapyItemCreateArgs} args - Arguments to create a TherapyItem.
     * @example
     * // Create one TherapyItem
     * const TherapyItem = await prisma.therapyItem.create({
     *   data: {
     *     // ... data to create a TherapyItem
     *   }
     * })
     * 
     */
    create<T extends TherapyItemCreateArgs>(args: SelectSubset<T, TherapyItemCreateArgs<ExtArgs>>): Prisma__TherapyItemClient<$Result.GetResult<Prisma.$TherapyItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TherapyItems.
     * @param {TherapyItemCreateManyArgs} args - Arguments to create many TherapyItems.
     * @example
     * // Create many TherapyItems
     * const therapyItem = await prisma.therapyItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TherapyItemCreateManyArgs>(args?: SelectSubset<T, TherapyItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TherapyItems and returns the data saved in the database.
     * @param {TherapyItemCreateManyAndReturnArgs} args - Arguments to create many TherapyItems.
     * @example
     * // Create many TherapyItems
     * const therapyItem = await prisma.therapyItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TherapyItems and only return the `id`
     * const therapyItemWithIdOnly = await prisma.therapyItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TherapyItemCreateManyAndReturnArgs>(args?: SelectSubset<T, TherapyItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapyItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TherapyItem.
     * @param {TherapyItemDeleteArgs} args - Arguments to delete one TherapyItem.
     * @example
     * // Delete one TherapyItem
     * const TherapyItem = await prisma.therapyItem.delete({
     *   where: {
     *     // ... filter to delete one TherapyItem
     *   }
     * })
     * 
     */
    delete<T extends TherapyItemDeleteArgs>(args: SelectSubset<T, TherapyItemDeleteArgs<ExtArgs>>): Prisma__TherapyItemClient<$Result.GetResult<Prisma.$TherapyItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TherapyItem.
     * @param {TherapyItemUpdateArgs} args - Arguments to update one TherapyItem.
     * @example
     * // Update one TherapyItem
     * const therapyItem = await prisma.therapyItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TherapyItemUpdateArgs>(args: SelectSubset<T, TherapyItemUpdateArgs<ExtArgs>>): Prisma__TherapyItemClient<$Result.GetResult<Prisma.$TherapyItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TherapyItems.
     * @param {TherapyItemDeleteManyArgs} args - Arguments to filter TherapyItems to delete.
     * @example
     * // Delete a few TherapyItems
     * const { count } = await prisma.therapyItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TherapyItemDeleteManyArgs>(args?: SelectSubset<T, TherapyItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TherapyItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapyItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TherapyItems
     * const therapyItem = await prisma.therapyItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TherapyItemUpdateManyArgs>(args: SelectSubset<T, TherapyItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TherapyItems and returns the data updated in the database.
     * @param {TherapyItemUpdateManyAndReturnArgs} args - Arguments to update many TherapyItems.
     * @example
     * // Update many TherapyItems
     * const therapyItem = await prisma.therapyItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TherapyItems and only return the `id`
     * const therapyItemWithIdOnly = await prisma.therapyItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends TherapyItemUpdateManyAndReturnArgs>(args: SelectSubset<T, TherapyItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapyItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TherapyItem.
     * @param {TherapyItemUpsertArgs} args - Arguments to update or create a TherapyItem.
     * @example
     * // Update or create a TherapyItem
     * const therapyItem = await prisma.therapyItem.upsert({
     *   create: {
     *     // ... data to create a TherapyItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TherapyItem we want to update
     *   }
     * })
     */
    upsert<T extends TherapyItemUpsertArgs>(args: SelectSubset<T, TherapyItemUpsertArgs<ExtArgs>>): Prisma__TherapyItemClient<$Result.GetResult<Prisma.$TherapyItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TherapyItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapyItemCountArgs} args - Arguments to filter TherapyItems to count.
     * @example
     * // Count the number of TherapyItems
     * const count = await prisma.therapyItem.count({
     *   where: {
     *     // ... the filter for the TherapyItems we want to count
     *   }
     * })
    **/
    count<T extends TherapyItemCountArgs>(
      args?: Subset<T, TherapyItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TherapyItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TherapyItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapyItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TherapyItemAggregateArgs>(args: Subset<T, TherapyItemAggregateArgs>): Prisma.PrismaPromise<GetTherapyItemAggregateType<T>>

    /**
     * Group by TherapyItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapyItemGroupByArgs} args - Group by arguments.
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
      T extends TherapyItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TherapyItemGroupByArgs['orderBy'] }
        : { orderBy?: TherapyItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TherapyItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTherapyItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TherapyItem model
   */
  readonly fields: TherapyItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TherapyItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TherapyItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    therapy<T extends TherapyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TherapyDefaultArgs<ExtArgs>>): Prisma__TherapyClient<$Result.GetResult<Prisma.$TherapyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TherapyItem model
   */
  interface TherapyItemFieldRefs {
    readonly id: FieldRef<"TherapyItem", 'String'>
    readonly therapyId: FieldRef<"TherapyItem", 'String'>
    readonly medicineName: FieldRef<"TherapyItem", 'String'>
    readonly dosage: FieldRef<"TherapyItem", 'String'>
    readonly administrationRoute: FieldRef<"TherapyItem", 'String'>
    readonly duration: FieldRef<"TherapyItem", 'String'>
    readonly note: FieldRef<"TherapyItem", 'String'>
    readonly createdAt: FieldRef<"TherapyItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TherapyItem findUnique
   */
  export type TherapyItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapyItem
     */
    select?: TherapyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapyItem
     */
    omit?: TherapyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapyItemInclude<ExtArgs> | null
    /**
     * Filter, which TherapyItem to fetch.
     */
    where: TherapyItemWhereUniqueInput
  }

  /**
   * TherapyItem findUniqueOrThrow
   */
  export type TherapyItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapyItem
     */
    select?: TherapyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapyItem
     */
    omit?: TherapyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapyItemInclude<ExtArgs> | null
    /**
     * Filter, which TherapyItem to fetch.
     */
    where: TherapyItemWhereUniqueInput
  }

  /**
   * TherapyItem findFirst
   */
  export type TherapyItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapyItem
     */
    select?: TherapyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapyItem
     */
    omit?: TherapyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapyItemInclude<ExtArgs> | null
    /**
     * Filter, which TherapyItem to fetch.
     */
    where?: TherapyItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapyItems to fetch.
     */
    orderBy?: TherapyItemOrderByWithRelationInput | TherapyItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TherapyItems.
     */
    cursor?: TherapyItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapyItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapyItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TherapyItems.
     */
    distinct?: TherapyItemScalarFieldEnum | TherapyItemScalarFieldEnum[]
  }

  /**
   * TherapyItem findFirstOrThrow
   */
  export type TherapyItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapyItem
     */
    select?: TherapyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapyItem
     */
    omit?: TherapyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapyItemInclude<ExtArgs> | null
    /**
     * Filter, which TherapyItem to fetch.
     */
    where?: TherapyItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapyItems to fetch.
     */
    orderBy?: TherapyItemOrderByWithRelationInput | TherapyItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TherapyItems.
     */
    cursor?: TherapyItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapyItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapyItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TherapyItems.
     */
    distinct?: TherapyItemScalarFieldEnum | TherapyItemScalarFieldEnum[]
  }

  /**
   * TherapyItem findMany
   */
  export type TherapyItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapyItem
     */
    select?: TherapyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapyItem
     */
    omit?: TherapyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapyItemInclude<ExtArgs> | null
    /**
     * Filter, which TherapyItems to fetch.
     */
    where?: TherapyItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapyItems to fetch.
     */
    orderBy?: TherapyItemOrderByWithRelationInput | TherapyItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TherapyItems.
     */
    cursor?: TherapyItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapyItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapyItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TherapyItems.
     */
    distinct?: TherapyItemScalarFieldEnum | TherapyItemScalarFieldEnum[]
  }

  /**
   * TherapyItem create
   */
  export type TherapyItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapyItem
     */
    select?: TherapyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapyItem
     */
    omit?: TherapyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapyItemInclude<ExtArgs> | null
    /**
     * The data needed to create a TherapyItem.
     */
    data: XOR<TherapyItemCreateInput, TherapyItemUncheckedCreateInput>
  }

  /**
   * TherapyItem createMany
   */
  export type TherapyItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TherapyItems.
     */
    data: TherapyItemCreateManyInput | TherapyItemCreateManyInput[]
  }

  /**
   * TherapyItem createManyAndReturn
   */
  export type TherapyItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapyItem
     */
    select?: TherapyItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TherapyItem
     */
    omit?: TherapyItemOmit<ExtArgs> | null
    /**
     * The data used to create many TherapyItems.
     */
    data: TherapyItemCreateManyInput | TherapyItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapyItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TherapyItem update
   */
  export type TherapyItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapyItem
     */
    select?: TherapyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapyItem
     */
    omit?: TherapyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapyItemInclude<ExtArgs> | null
    /**
     * The data needed to update a TherapyItem.
     */
    data: XOR<TherapyItemUpdateInput, TherapyItemUncheckedUpdateInput>
    /**
     * Choose, which TherapyItem to update.
     */
    where: TherapyItemWhereUniqueInput
  }

  /**
   * TherapyItem updateMany
   */
  export type TherapyItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TherapyItems.
     */
    data: XOR<TherapyItemUpdateManyMutationInput, TherapyItemUncheckedUpdateManyInput>
    /**
     * Filter which TherapyItems to update
     */
    where?: TherapyItemWhereInput
    /**
     * Limit how many TherapyItems to update.
     */
    limit?: number
  }

  /**
   * TherapyItem updateManyAndReturn
   */
  export type TherapyItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapyItem
     */
    select?: TherapyItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TherapyItem
     */
    omit?: TherapyItemOmit<ExtArgs> | null
    /**
     * The data used to update TherapyItems.
     */
    data: XOR<TherapyItemUpdateManyMutationInput, TherapyItemUncheckedUpdateManyInput>
    /**
     * Filter which TherapyItems to update
     */
    where?: TherapyItemWhereInput
    /**
     * Limit how many TherapyItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapyItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TherapyItem upsert
   */
  export type TherapyItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapyItem
     */
    select?: TherapyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapyItem
     */
    omit?: TherapyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapyItemInclude<ExtArgs> | null
    /**
     * The filter to search for the TherapyItem to update in case it exists.
     */
    where: TherapyItemWhereUniqueInput
    /**
     * In case the TherapyItem found by the `where` argument doesn't exist, create a new TherapyItem with this data.
     */
    create: XOR<TherapyItemCreateInput, TherapyItemUncheckedCreateInput>
    /**
     * In case the TherapyItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TherapyItemUpdateInput, TherapyItemUncheckedUpdateInput>
  }

  /**
   * TherapyItem delete
   */
  export type TherapyItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapyItem
     */
    select?: TherapyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapyItem
     */
    omit?: TherapyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapyItemInclude<ExtArgs> | null
    /**
     * Filter which TherapyItem to delete.
     */
    where: TherapyItemWhereUniqueInput
  }

  /**
   * TherapyItem deleteMany
   */
  export type TherapyItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TherapyItems to delete
     */
    where?: TherapyItemWhereInput
    /**
     * Limit how many TherapyItems to delete.
     */
    limit?: number
  }

  /**
   * TherapyItem without action
   */
  export type TherapyItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapyItem
     */
    select?: TherapyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapyItem
     */
    omit?: TherapyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapyItemInclude<ExtArgs> | null
  }


  /**
   * Model ClinicSettings
   */

  export type AggregateClinicSettings = {
    _count: ClinicSettingsCountAggregateOutputType | null
    _avg: ClinicSettingsAvgAggregateOutputType | null
    _sum: ClinicSettingsSumAggregateOutputType | null
    _min: ClinicSettingsMinAggregateOutputType | null
    _max: ClinicSettingsMaxAggregateOutputType | null
  }

  export type ClinicSettingsAvgAggregateOutputType = {
    id: number | null
  }

  export type ClinicSettingsSumAggregateOutputType = {
    id: number | null
  }

  export type ClinicSettingsMinAggregateOutputType = {
    id: number | null
    clinicName: string | null
    address: string | null
    phone: string | null
    email: string | null
    doctorName: string | null
    departmentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClinicSettingsMaxAggregateOutputType = {
    id: number | null
    clinicName: string | null
    address: string | null
    phone: string | null
    email: string | null
    doctorName: string | null
    departmentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClinicSettingsCountAggregateOutputType = {
    id: number
    clinicName: number
    address: number
    phone: number
    email: number
    doctorName: number
    departmentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClinicSettingsAvgAggregateInputType = {
    id?: true
  }

  export type ClinicSettingsSumAggregateInputType = {
    id?: true
  }

  export type ClinicSettingsMinAggregateInputType = {
    id?: true
    clinicName?: true
    address?: true
    phone?: true
    email?: true
    doctorName?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClinicSettingsMaxAggregateInputType = {
    id?: true
    clinicName?: true
    address?: true
    phone?: true
    email?: true
    doctorName?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClinicSettingsCountAggregateInputType = {
    id?: true
    clinicName?: true
    address?: true
    phone?: true
    email?: true
    doctorName?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClinicSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClinicSettings to aggregate.
     */
    where?: ClinicSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClinicSettings to fetch.
     */
    orderBy?: ClinicSettingsOrderByWithRelationInput | ClinicSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClinicSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClinicSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClinicSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClinicSettings
    **/
    _count?: true | ClinicSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClinicSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClinicSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClinicSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClinicSettingsMaxAggregateInputType
  }

  export type GetClinicSettingsAggregateType<T extends ClinicSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateClinicSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClinicSettings[P]>
      : GetScalarType<T[P], AggregateClinicSettings[P]>
  }




  export type ClinicSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClinicSettingsWhereInput
    orderBy?: ClinicSettingsOrderByWithAggregationInput | ClinicSettingsOrderByWithAggregationInput[]
    by: ClinicSettingsScalarFieldEnum[] | ClinicSettingsScalarFieldEnum
    having?: ClinicSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClinicSettingsCountAggregateInputType | true
    _avg?: ClinicSettingsAvgAggregateInputType
    _sum?: ClinicSettingsSumAggregateInputType
    _min?: ClinicSettingsMinAggregateInputType
    _max?: ClinicSettingsMaxAggregateInputType
  }

  export type ClinicSettingsGroupByOutputType = {
    id: number
    clinicName: string
    address: string
    phone: string
    email: string
    doctorName: string
    departmentId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ClinicSettingsCountAggregateOutputType | null
    _avg: ClinicSettingsAvgAggregateOutputType | null
    _sum: ClinicSettingsSumAggregateOutputType | null
    _min: ClinicSettingsMinAggregateOutputType | null
    _max: ClinicSettingsMaxAggregateOutputType | null
  }

  type GetClinicSettingsGroupByPayload<T extends ClinicSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClinicSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClinicSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClinicSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], ClinicSettingsGroupByOutputType[P]>
        }
      >
    >


  export type ClinicSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicName?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    doctorName?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["clinicSettings"]>

  export type ClinicSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicName?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    doctorName?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["clinicSettings"]>

  export type ClinicSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicName?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    doctorName?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["clinicSettings"]>

  export type ClinicSettingsSelectScalar = {
    id?: boolean
    clinicName?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    doctorName?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClinicSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clinicName" | "address" | "phone" | "email" | "doctorName" | "departmentId" | "createdAt" | "updatedAt", ExtArgs["result"]["clinicSettings"]>

  export type $ClinicSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClinicSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clinicName: string
      address: string
      phone: string
      email: string
      doctorName: string
      departmentId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["clinicSettings"]>
    composites: {}
  }

  type ClinicSettingsGetPayload<S extends boolean | null | undefined | ClinicSettingsDefaultArgs> = $Result.GetResult<Prisma.$ClinicSettingsPayload, S>

  type ClinicSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClinicSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClinicSettingsCountAggregateInputType | true
    }

  export interface ClinicSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClinicSettings'], meta: { name: 'ClinicSettings' } }
    /**
     * Find zero or one ClinicSettings that matches the filter.
     * @param {ClinicSettingsFindUniqueArgs} args - Arguments to find a ClinicSettings
     * @example
     * // Get one ClinicSettings
     * const clinicSettings = await prisma.clinicSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClinicSettingsFindUniqueArgs>(args: SelectSubset<T, ClinicSettingsFindUniqueArgs<ExtArgs>>): Prisma__ClinicSettingsClient<$Result.GetResult<Prisma.$ClinicSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClinicSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClinicSettingsFindUniqueOrThrowArgs} args - Arguments to find a ClinicSettings
     * @example
     * // Get one ClinicSettings
     * const clinicSettings = await prisma.clinicSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClinicSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, ClinicSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClinicSettingsClient<$Result.GetResult<Prisma.$ClinicSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClinicSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicSettingsFindFirstArgs} args - Arguments to find a ClinicSettings
     * @example
     * // Get one ClinicSettings
     * const clinicSettings = await prisma.clinicSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClinicSettingsFindFirstArgs>(args?: SelectSubset<T, ClinicSettingsFindFirstArgs<ExtArgs>>): Prisma__ClinicSettingsClient<$Result.GetResult<Prisma.$ClinicSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClinicSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicSettingsFindFirstOrThrowArgs} args - Arguments to find a ClinicSettings
     * @example
     * // Get one ClinicSettings
     * const clinicSettings = await prisma.clinicSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClinicSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, ClinicSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClinicSettingsClient<$Result.GetResult<Prisma.$ClinicSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClinicSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClinicSettings
     * const clinicSettings = await prisma.clinicSettings.findMany()
     * 
     * // Get first 10 ClinicSettings
     * const clinicSettings = await prisma.clinicSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clinicSettingsWithIdOnly = await prisma.clinicSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClinicSettingsFindManyArgs>(args?: SelectSubset<T, ClinicSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClinicSettings.
     * @param {ClinicSettingsCreateArgs} args - Arguments to create a ClinicSettings.
     * @example
     * // Create one ClinicSettings
     * const ClinicSettings = await prisma.clinicSettings.create({
     *   data: {
     *     // ... data to create a ClinicSettings
     *   }
     * })
     * 
     */
    create<T extends ClinicSettingsCreateArgs>(args: SelectSubset<T, ClinicSettingsCreateArgs<ExtArgs>>): Prisma__ClinicSettingsClient<$Result.GetResult<Prisma.$ClinicSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClinicSettings.
     * @param {ClinicSettingsCreateManyArgs} args - Arguments to create many ClinicSettings.
     * @example
     * // Create many ClinicSettings
     * const clinicSettings = await prisma.clinicSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClinicSettingsCreateManyArgs>(args?: SelectSubset<T, ClinicSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClinicSettings and returns the data saved in the database.
     * @param {ClinicSettingsCreateManyAndReturnArgs} args - Arguments to create many ClinicSettings.
     * @example
     * // Create many ClinicSettings
     * const clinicSettings = await prisma.clinicSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClinicSettings and only return the `id`
     * const clinicSettingsWithIdOnly = await prisma.clinicSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClinicSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, ClinicSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClinicSettings.
     * @param {ClinicSettingsDeleteArgs} args - Arguments to delete one ClinicSettings.
     * @example
     * // Delete one ClinicSettings
     * const ClinicSettings = await prisma.clinicSettings.delete({
     *   where: {
     *     // ... filter to delete one ClinicSettings
     *   }
     * })
     * 
     */
    delete<T extends ClinicSettingsDeleteArgs>(args: SelectSubset<T, ClinicSettingsDeleteArgs<ExtArgs>>): Prisma__ClinicSettingsClient<$Result.GetResult<Prisma.$ClinicSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClinicSettings.
     * @param {ClinicSettingsUpdateArgs} args - Arguments to update one ClinicSettings.
     * @example
     * // Update one ClinicSettings
     * const clinicSettings = await prisma.clinicSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClinicSettingsUpdateArgs>(args: SelectSubset<T, ClinicSettingsUpdateArgs<ExtArgs>>): Prisma__ClinicSettingsClient<$Result.GetResult<Prisma.$ClinicSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClinicSettings.
     * @param {ClinicSettingsDeleteManyArgs} args - Arguments to filter ClinicSettings to delete.
     * @example
     * // Delete a few ClinicSettings
     * const { count } = await prisma.clinicSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClinicSettingsDeleteManyArgs>(args?: SelectSubset<T, ClinicSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClinicSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClinicSettings
     * const clinicSettings = await prisma.clinicSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClinicSettingsUpdateManyArgs>(args: SelectSubset<T, ClinicSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClinicSettings and returns the data updated in the database.
     * @param {ClinicSettingsUpdateManyAndReturnArgs} args - Arguments to update many ClinicSettings.
     * @example
     * // Update many ClinicSettings
     * const clinicSettings = await prisma.clinicSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClinicSettings and only return the `id`
     * const clinicSettingsWithIdOnly = await prisma.clinicSettings.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClinicSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, ClinicSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClinicSettings.
     * @param {ClinicSettingsUpsertArgs} args - Arguments to update or create a ClinicSettings.
     * @example
     * // Update or create a ClinicSettings
     * const clinicSettings = await prisma.clinicSettings.upsert({
     *   create: {
     *     // ... data to create a ClinicSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClinicSettings we want to update
     *   }
     * })
     */
    upsert<T extends ClinicSettingsUpsertArgs>(args: SelectSubset<T, ClinicSettingsUpsertArgs<ExtArgs>>): Prisma__ClinicSettingsClient<$Result.GetResult<Prisma.$ClinicSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClinicSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicSettingsCountArgs} args - Arguments to filter ClinicSettings to count.
     * @example
     * // Count the number of ClinicSettings
     * const count = await prisma.clinicSettings.count({
     *   where: {
     *     // ... the filter for the ClinicSettings we want to count
     *   }
     * })
    **/
    count<T extends ClinicSettingsCountArgs>(
      args?: Subset<T, ClinicSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClinicSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClinicSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClinicSettingsAggregateArgs>(args: Subset<T, ClinicSettingsAggregateArgs>): Prisma.PrismaPromise<GetClinicSettingsAggregateType<T>>

    /**
     * Group by ClinicSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicSettingsGroupByArgs} args - Group by arguments.
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
      T extends ClinicSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClinicSettingsGroupByArgs['orderBy'] }
        : { orderBy?: ClinicSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClinicSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClinicSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClinicSettings model
   */
  readonly fields: ClinicSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClinicSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClinicSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ClinicSettings model
   */
  interface ClinicSettingsFieldRefs {
    readonly id: FieldRef<"ClinicSettings", 'Int'>
    readonly clinicName: FieldRef<"ClinicSettings", 'String'>
    readonly address: FieldRef<"ClinicSettings", 'String'>
    readonly phone: FieldRef<"ClinicSettings", 'String'>
    readonly email: FieldRef<"ClinicSettings", 'String'>
    readonly doctorName: FieldRef<"ClinicSettings", 'String'>
    readonly departmentId: FieldRef<"ClinicSettings", 'String'>
    readonly createdAt: FieldRef<"ClinicSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"ClinicSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClinicSettings findUnique
   */
  export type ClinicSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicSettings
     */
    select?: ClinicSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicSettings
     */
    omit?: ClinicSettingsOmit<ExtArgs> | null
    /**
     * Filter, which ClinicSettings to fetch.
     */
    where: ClinicSettingsWhereUniqueInput
  }

  /**
   * ClinicSettings findUniqueOrThrow
   */
  export type ClinicSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicSettings
     */
    select?: ClinicSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicSettings
     */
    omit?: ClinicSettingsOmit<ExtArgs> | null
    /**
     * Filter, which ClinicSettings to fetch.
     */
    where: ClinicSettingsWhereUniqueInput
  }

  /**
   * ClinicSettings findFirst
   */
  export type ClinicSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicSettings
     */
    select?: ClinicSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicSettings
     */
    omit?: ClinicSettingsOmit<ExtArgs> | null
    /**
     * Filter, which ClinicSettings to fetch.
     */
    where?: ClinicSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClinicSettings to fetch.
     */
    orderBy?: ClinicSettingsOrderByWithRelationInput | ClinicSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClinicSettings.
     */
    cursor?: ClinicSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClinicSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClinicSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClinicSettings.
     */
    distinct?: ClinicSettingsScalarFieldEnum | ClinicSettingsScalarFieldEnum[]
  }

  /**
   * ClinicSettings findFirstOrThrow
   */
  export type ClinicSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicSettings
     */
    select?: ClinicSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicSettings
     */
    omit?: ClinicSettingsOmit<ExtArgs> | null
    /**
     * Filter, which ClinicSettings to fetch.
     */
    where?: ClinicSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClinicSettings to fetch.
     */
    orderBy?: ClinicSettingsOrderByWithRelationInput | ClinicSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClinicSettings.
     */
    cursor?: ClinicSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClinicSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClinicSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClinicSettings.
     */
    distinct?: ClinicSettingsScalarFieldEnum | ClinicSettingsScalarFieldEnum[]
  }

  /**
   * ClinicSettings findMany
   */
  export type ClinicSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicSettings
     */
    select?: ClinicSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicSettings
     */
    omit?: ClinicSettingsOmit<ExtArgs> | null
    /**
     * Filter, which ClinicSettings to fetch.
     */
    where?: ClinicSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClinicSettings to fetch.
     */
    orderBy?: ClinicSettingsOrderByWithRelationInput | ClinicSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClinicSettings.
     */
    cursor?: ClinicSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClinicSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClinicSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClinicSettings.
     */
    distinct?: ClinicSettingsScalarFieldEnum | ClinicSettingsScalarFieldEnum[]
  }

  /**
   * ClinicSettings create
   */
  export type ClinicSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicSettings
     */
    select?: ClinicSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicSettings
     */
    omit?: ClinicSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a ClinicSettings.
     */
    data: XOR<ClinicSettingsCreateInput, ClinicSettingsUncheckedCreateInput>
  }

  /**
   * ClinicSettings createMany
   */
  export type ClinicSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClinicSettings.
     */
    data: ClinicSettingsCreateManyInput | ClinicSettingsCreateManyInput[]
  }

  /**
   * ClinicSettings createManyAndReturn
   */
  export type ClinicSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicSettings
     */
    select?: ClinicSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicSettings
     */
    omit?: ClinicSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many ClinicSettings.
     */
    data: ClinicSettingsCreateManyInput | ClinicSettingsCreateManyInput[]
  }

  /**
   * ClinicSettings update
   */
  export type ClinicSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicSettings
     */
    select?: ClinicSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicSettings
     */
    omit?: ClinicSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a ClinicSettings.
     */
    data: XOR<ClinicSettingsUpdateInput, ClinicSettingsUncheckedUpdateInput>
    /**
     * Choose, which ClinicSettings to update.
     */
    where: ClinicSettingsWhereUniqueInput
  }

  /**
   * ClinicSettings updateMany
   */
  export type ClinicSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClinicSettings.
     */
    data: XOR<ClinicSettingsUpdateManyMutationInput, ClinicSettingsUncheckedUpdateManyInput>
    /**
     * Filter which ClinicSettings to update
     */
    where?: ClinicSettingsWhereInput
    /**
     * Limit how many ClinicSettings to update.
     */
    limit?: number
  }

  /**
   * ClinicSettings updateManyAndReturn
   */
  export type ClinicSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicSettings
     */
    select?: ClinicSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicSettings
     */
    omit?: ClinicSettingsOmit<ExtArgs> | null
    /**
     * The data used to update ClinicSettings.
     */
    data: XOR<ClinicSettingsUpdateManyMutationInput, ClinicSettingsUncheckedUpdateManyInput>
    /**
     * Filter which ClinicSettings to update
     */
    where?: ClinicSettingsWhereInput
    /**
     * Limit how many ClinicSettings to update.
     */
    limit?: number
  }

  /**
   * ClinicSettings upsert
   */
  export type ClinicSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicSettings
     */
    select?: ClinicSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicSettings
     */
    omit?: ClinicSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the ClinicSettings to update in case it exists.
     */
    where: ClinicSettingsWhereUniqueInput
    /**
     * In case the ClinicSettings found by the `where` argument doesn't exist, create a new ClinicSettings with this data.
     */
    create: XOR<ClinicSettingsCreateInput, ClinicSettingsUncheckedCreateInput>
    /**
     * In case the ClinicSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClinicSettingsUpdateInput, ClinicSettingsUncheckedUpdateInput>
  }

  /**
   * ClinicSettings delete
   */
  export type ClinicSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicSettings
     */
    select?: ClinicSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicSettings
     */
    omit?: ClinicSettingsOmit<ExtArgs> | null
    /**
     * Filter which ClinicSettings to delete.
     */
    where: ClinicSettingsWhereUniqueInput
  }

  /**
   * ClinicSettings deleteMany
   */
  export type ClinicSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClinicSettings to delete
     */
    where?: ClinicSettingsWhereInput
    /**
     * Limit how many ClinicSettings to delete.
     */
    limit?: number
  }

  /**
   * ClinicSettings without action
   */
  export type ClinicSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicSettings
     */
    select?: ClinicSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicSettings
     */
    omit?: ClinicSettingsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    recordNumber: 'recordNumber',
    firstName: 'firstName',
    lastName: 'lastName',
    dateOfBirth: 'dateOfBirth',
    nationalId: 'nationalId',
    address: 'address',
    phone: 'phone',
    note: 'note',
    lockedAt: 'lockedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const ExaminationScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    departmentId: 'departmentId',
    examinationAt: 'examinationAt',
    doctorName: 'doctorName',
    diagnosis: 'diagnosis',
    findings: 'findings',
    recommendation: 'recommendation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExaminationScalarFieldEnum = (typeof ExaminationScalarFieldEnum)[keyof typeof ExaminationScalarFieldEnum]


  export const TherapyScalarFieldEnum: {
    id: 'id',
    examinationId: 'examinationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TherapyScalarFieldEnum = (typeof TherapyScalarFieldEnum)[keyof typeof TherapyScalarFieldEnum]


  export const TherapyItemScalarFieldEnum: {
    id: 'id',
    therapyId: 'therapyId',
    medicineName: 'medicineName',
    dosage: 'dosage',
    administrationRoute: 'administrationRoute',
    duration: 'duration',
    note: 'note',
    createdAt: 'createdAt'
  };

  export type TherapyItemScalarFieldEnum = (typeof TherapyItemScalarFieldEnum)[keyof typeof TherapyItemScalarFieldEnum]


  export const ClinicSettingsScalarFieldEnum: {
    id: 'id',
    clinicName: 'clinicName',
    address: 'address',
    phone: 'phone',
    email: 'email',
    doctorName: 'doctorName',
    departmentId: 'departmentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClinicSettingsScalarFieldEnum = (typeof ClinicSettingsScalarFieldEnum)[keyof typeof ClinicSettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    active?: BoolFilter<"Department"> | boolean
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    examinations?: ExaminationListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    examinations?: ExaminationOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    name?: StringFilter<"Department"> | string
    active?: BoolFilter<"Department"> | boolean
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    examinations?: ExaminationListRelationFilter
  }, "id">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Department"> | string
    name?: StringWithAggregatesFilter<"Department"> | string
    active?: BoolWithAggregatesFilter<"Department"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: StringFilter<"Patient"> | string
    recordNumber?: StringFilter<"Patient"> | string
    firstName?: StringFilter<"Patient"> | string
    lastName?: StringFilter<"Patient"> | string
    dateOfBirth?: DateTimeNullableFilter<"Patient"> | Date | string | null
    nationalId?: StringNullableFilter<"Patient"> | string | null
    address?: StringNullableFilter<"Patient"> | string | null
    phone?: StringNullableFilter<"Patient"> | string | null
    note?: StringNullableFilter<"Patient"> | string | null
    lockedAt?: DateTimeNullableFilter<"Patient"> | Date | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    examinations?: ExaminationListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    recordNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    nationalId?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    lockedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    examinations?: ExaminationOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    recordNumber?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    firstName?: StringFilter<"Patient"> | string
    lastName?: StringFilter<"Patient"> | string
    dateOfBirth?: DateTimeNullableFilter<"Patient"> | Date | string | null
    nationalId?: StringNullableFilter<"Patient"> | string | null
    address?: StringNullableFilter<"Patient"> | string | null
    phone?: StringNullableFilter<"Patient"> | string | null
    note?: StringNullableFilter<"Patient"> | string | null
    lockedAt?: DateTimeNullableFilter<"Patient"> | Date | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    examinations?: ExaminationListRelationFilter
  }, "id" | "recordNumber">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    recordNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    nationalId?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    lockedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Patient"> | string
    recordNumber?: StringWithAggregatesFilter<"Patient"> | string
    firstName?: StringWithAggregatesFilter<"Patient"> | string
    lastName?: StringWithAggregatesFilter<"Patient"> | string
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null
    nationalId?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    address?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    note?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    lockedAt?: DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
  }

  export type ExaminationWhereInput = {
    AND?: ExaminationWhereInput | ExaminationWhereInput[]
    OR?: ExaminationWhereInput[]
    NOT?: ExaminationWhereInput | ExaminationWhereInput[]
    id?: StringFilter<"Examination"> | string
    patientId?: StringFilter<"Examination"> | string
    departmentId?: StringFilter<"Examination"> | string
    examinationAt?: DateTimeFilter<"Examination"> | Date | string
    doctorName?: StringFilter<"Examination"> | string
    diagnosis?: StringNullableFilter<"Examination"> | string | null
    findings?: StringNullableFilter<"Examination"> | string | null
    recommendation?: StringNullableFilter<"Examination"> | string | null
    createdAt?: DateTimeFilter<"Examination"> | Date | string
    updatedAt?: DateTimeFilter<"Examination"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    therapy?: XOR<TherapyNullableScalarRelationFilter, TherapyWhereInput> | null
  }

  export type ExaminationOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    departmentId?: SortOrder
    examinationAt?: SortOrder
    doctorName?: SortOrder
    diagnosis?: SortOrderInput | SortOrder
    findings?: SortOrderInput | SortOrder
    recommendation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    department?: DepartmentOrderByWithRelationInput
    therapy?: TherapyOrderByWithRelationInput
  }

  export type ExaminationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExaminationWhereInput | ExaminationWhereInput[]
    OR?: ExaminationWhereInput[]
    NOT?: ExaminationWhereInput | ExaminationWhereInput[]
    patientId?: StringFilter<"Examination"> | string
    departmentId?: StringFilter<"Examination"> | string
    examinationAt?: DateTimeFilter<"Examination"> | Date | string
    doctorName?: StringFilter<"Examination"> | string
    diagnosis?: StringNullableFilter<"Examination"> | string | null
    findings?: StringNullableFilter<"Examination"> | string | null
    recommendation?: StringNullableFilter<"Examination"> | string | null
    createdAt?: DateTimeFilter<"Examination"> | Date | string
    updatedAt?: DateTimeFilter<"Examination"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    therapy?: XOR<TherapyNullableScalarRelationFilter, TherapyWhereInput> | null
  }, "id">

  export type ExaminationOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    departmentId?: SortOrder
    examinationAt?: SortOrder
    doctorName?: SortOrder
    diagnosis?: SortOrderInput | SortOrder
    findings?: SortOrderInput | SortOrder
    recommendation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExaminationCountOrderByAggregateInput
    _max?: ExaminationMaxOrderByAggregateInput
    _min?: ExaminationMinOrderByAggregateInput
  }

  export type ExaminationScalarWhereWithAggregatesInput = {
    AND?: ExaminationScalarWhereWithAggregatesInput | ExaminationScalarWhereWithAggregatesInput[]
    OR?: ExaminationScalarWhereWithAggregatesInput[]
    NOT?: ExaminationScalarWhereWithAggregatesInput | ExaminationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Examination"> | string
    patientId?: StringWithAggregatesFilter<"Examination"> | string
    departmentId?: StringWithAggregatesFilter<"Examination"> | string
    examinationAt?: DateTimeWithAggregatesFilter<"Examination"> | Date | string
    doctorName?: StringWithAggregatesFilter<"Examination"> | string
    diagnosis?: StringNullableWithAggregatesFilter<"Examination"> | string | null
    findings?: StringNullableWithAggregatesFilter<"Examination"> | string | null
    recommendation?: StringNullableWithAggregatesFilter<"Examination"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Examination"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Examination"> | Date | string
  }

  export type TherapyWhereInput = {
    AND?: TherapyWhereInput | TherapyWhereInput[]
    OR?: TherapyWhereInput[]
    NOT?: TherapyWhereInput | TherapyWhereInput[]
    id?: StringFilter<"Therapy"> | string
    examinationId?: StringFilter<"Therapy"> | string
    createdAt?: DateTimeFilter<"Therapy"> | Date | string
    updatedAt?: DateTimeFilter<"Therapy"> | Date | string
    examination?: XOR<ExaminationScalarRelationFilter, ExaminationWhereInput>
    items?: TherapyItemListRelationFilter
  }

  export type TherapyOrderByWithRelationInput = {
    id?: SortOrder
    examinationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    examination?: ExaminationOrderByWithRelationInput
    items?: TherapyItemOrderByRelationAggregateInput
  }

  export type TherapyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    examinationId?: string
    AND?: TherapyWhereInput | TherapyWhereInput[]
    OR?: TherapyWhereInput[]
    NOT?: TherapyWhereInput | TherapyWhereInput[]
    createdAt?: DateTimeFilter<"Therapy"> | Date | string
    updatedAt?: DateTimeFilter<"Therapy"> | Date | string
    examination?: XOR<ExaminationScalarRelationFilter, ExaminationWhereInput>
    items?: TherapyItemListRelationFilter
  }, "id" | "examinationId">

  export type TherapyOrderByWithAggregationInput = {
    id?: SortOrder
    examinationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TherapyCountOrderByAggregateInput
    _max?: TherapyMaxOrderByAggregateInput
    _min?: TherapyMinOrderByAggregateInput
  }

  export type TherapyScalarWhereWithAggregatesInput = {
    AND?: TherapyScalarWhereWithAggregatesInput | TherapyScalarWhereWithAggregatesInput[]
    OR?: TherapyScalarWhereWithAggregatesInput[]
    NOT?: TherapyScalarWhereWithAggregatesInput | TherapyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Therapy"> | string
    examinationId?: StringWithAggregatesFilter<"Therapy"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Therapy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Therapy"> | Date | string
  }

  export type TherapyItemWhereInput = {
    AND?: TherapyItemWhereInput | TherapyItemWhereInput[]
    OR?: TherapyItemWhereInput[]
    NOT?: TherapyItemWhereInput | TherapyItemWhereInput[]
    id?: StringFilter<"TherapyItem"> | string
    therapyId?: StringFilter<"TherapyItem"> | string
    medicineName?: StringFilter<"TherapyItem"> | string
    dosage?: StringNullableFilter<"TherapyItem"> | string | null
    administrationRoute?: StringNullableFilter<"TherapyItem"> | string | null
    duration?: StringNullableFilter<"TherapyItem"> | string | null
    note?: StringNullableFilter<"TherapyItem"> | string | null
    createdAt?: DateTimeFilter<"TherapyItem"> | Date | string
    therapy?: XOR<TherapyScalarRelationFilter, TherapyWhereInput>
  }

  export type TherapyItemOrderByWithRelationInput = {
    id?: SortOrder
    therapyId?: SortOrder
    medicineName?: SortOrder
    dosage?: SortOrderInput | SortOrder
    administrationRoute?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    therapy?: TherapyOrderByWithRelationInput
  }

  export type TherapyItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TherapyItemWhereInput | TherapyItemWhereInput[]
    OR?: TherapyItemWhereInput[]
    NOT?: TherapyItemWhereInput | TherapyItemWhereInput[]
    therapyId?: StringFilter<"TherapyItem"> | string
    medicineName?: StringFilter<"TherapyItem"> | string
    dosage?: StringNullableFilter<"TherapyItem"> | string | null
    administrationRoute?: StringNullableFilter<"TherapyItem"> | string | null
    duration?: StringNullableFilter<"TherapyItem"> | string | null
    note?: StringNullableFilter<"TherapyItem"> | string | null
    createdAt?: DateTimeFilter<"TherapyItem"> | Date | string
    therapy?: XOR<TherapyScalarRelationFilter, TherapyWhereInput>
  }, "id">

  export type TherapyItemOrderByWithAggregationInput = {
    id?: SortOrder
    therapyId?: SortOrder
    medicineName?: SortOrder
    dosage?: SortOrderInput | SortOrder
    administrationRoute?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TherapyItemCountOrderByAggregateInput
    _max?: TherapyItemMaxOrderByAggregateInput
    _min?: TherapyItemMinOrderByAggregateInput
  }

  export type TherapyItemScalarWhereWithAggregatesInput = {
    AND?: TherapyItemScalarWhereWithAggregatesInput | TherapyItemScalarWhereWithAggregatesInput[]
    OR?: TherapyItemScalarWhereWithAggregatesInput[]
    NOT?: TherapyItemScalarWhereWithAggregatesInput | TherapyItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TherapyItem"> | string
    therapyId?: StringWithAggregatesFilter<"TherapyItem"> | string
    medicineName?: StringWithAggregatesFilter<"TherapyItem"> | string
    dosage?: StringNullableWithAggregatesFilter<"TherapyItem"> | string | null
    administrationRoute?: StringNullableWithAggregatesFilter<"TherapyItem"> | string | null
    duration?: StringNullableWithAggregatesFilter<"TherapyItem"> | string | null
    note?: StringNullableWithAggregatesFilter<"TherapyItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TherapyItem"> | Date | string
  }

  export type ClinicSettingsWhereInput = {
    AND?: ClinicSettingsWhereInput | ClinicSettingsWhereInput[]
    OR?: ClinicSettingsWhereInput[]
    NOT?: ClinicSettingsWhereInput | ClinicSettingsWhereInput[]
    id?: IntFilter<"ClinicSettings"> | number
    clinicName?: StringFilter<"ClinicSettings"> | string
    address?: StringFilter<"ClinicSettings"> | string
    phone?: StringFilter<"ClinicSettings"> | string
    email?: StringFilter<"ClinicSettings"> | string
    doctorName?: StringFilter<"ClinicSettings"> | string
    departmentId?: StringNullableFilter<"ClinicSettings"> | string | null
    createdAt?: DateTimeFilter<"ClinicSettings"> | Date | string
    updatedAt?: DateTimeFilter<"ClinicSettings"> | Date | string
  }

  export type ClinicSettingsOrderByWithRelationInput = {
    id?: SortOrder
    clinicName?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    doctorName?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClinicSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClinicSettingsWhereInput | ClinicSettingsWhereInput[]
    OR?: ClinicSettingsWhereInput[]
    NOT?: ClinicSettingsWhereInput | ClinicSettingsWhereInput[]
    clinicName?: StringFilter<"ClinicSettings"> | string
    address?: StringFilter<"ClinicSettings"> | string
    phone?: StringFilter<"ClinicSettings"> | string
    email?: StringFilter<"ClinicSettings"> | string
    doctorName?: StringFilter<"ClinicSettings"> | string
    departmentId?: StringNullableFilter<"ClinicSettings"> | string | null
    createdAt?: DateTimeFilter<"ClinicSettings"> | Date | string
    updatedAt?: DateTimeFilter<"ClinicSettings"> | Date | string
  }, "id">

  export type ClinicSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    clinicName?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    doctorName?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClinicSettingsCountOrderByAggregateInput
    _avg?: ClinicSettingsAvgOrderByAggregateInput
    _max?: ClinicSettingsMaxOrderByAggregateInput
    _min?: ClinicSettingsMinOrderByAggregateInput
    _sum?: ClinicSettingsSumOrderByAggregateInput
  }

  export type ClinicSettingsScalarWhereWithAggregatesInput = {
    AND?: ClinicSettingsScalarWhereWithAggregatesInput | ClinicSettingsScalarWhereWithAggregatesInput[]
    OR?: ClinicSettingsScalarWhereWithAggregatesInput[]
    NOT?: ClinicSettingsScalarWhereWithAggregatesInput | ClinicSettingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ClinicSettings"> | number
    clinicName?: StringWithAggregatesFilter<"ClinicSettings"> | string
    address?: StringWithAggregatesFilter<"ClinicSettings"> | string
    phone?: StringWithAggregatesFilter<"ClinicSettings"> | string
    email?: StringWithAggregatesFilter<"ClinicSettings"> | string
    doctorName?: StringWithAggregatesFilter<"ClinicSettings"> | string
    departmentId?: StringNullableWithAggregatesFilter<"ClinicSettings"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ClinicSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ClinicSettings"> | Date | string
  }

  export type DepartmentCreateInput = {
    id?: string
    name: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    examinations?: ExaminationCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: string
    name: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    examinations?: ExaminationUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examinations?: ExaminationUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examinations?: ExaminationUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: string
    name: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateInput = {
    id?: string
    recordNumber: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    nationalId?: string | null
    address?: string | null
    phone?: string | null
    note?: string | null
    lockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    examinations?: ExaminationCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: string
    recordNumber: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    nationalId?: string | null
    address?: string | null
    phone?: string | null
    note?: string | null
    lockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    examinations?: ExaminationUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recordNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationalId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examinations?: ExaminationUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recordNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationalId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examinations?: ExaminationUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: string
    recordNumber: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    nationalId?: string | null
    address?: string | null
    phone?: string | null
    note?: string | null
    lockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    recordNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationalId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recordNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationalId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExaminationCreateInput = {
    id?: string
    examinationAt?: Date | string
    doctorName: string
    diagnosis?: string | null
    findings?: string | null
    recommendation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutExaminationsInput
    department: DepartmentCreateNestedOneWithoutExaminationsInput
    therapy?: TherapyCreateNestedOneWithoutExaminationInput
  }

  export type ExaminationUncheckedCreateInput = {
    id?: string
    patientId: string
    departmentId: string
    examinationAt?: Date | string
    doctorName: string
    diagnosis?: string | null
    findings?: string | null
    recommendation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    therapy?: TherapyUncheckedCreateNestedOneWithoutExaminationInput
  }

  export type ExaminationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    examinationAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorName?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    findings?: NullableStringFieldUpdateOperationsInput | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutExaminationsNestedInput
    department?: DepartmentUpdateOneRequiredWithoutExaminationsNestedInput
    therapy?: TherapyUpdateOneWithoutExaminationNestedInput
  }

  export type ExaminationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    examinationAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorName?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    findings?: NullableStringFieldUpdateOperationsInput | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapy?: TherapyUncheckedUpdateOneWithoutExaminationNestedInput
  }

  export type ExaminationCreateManyInput = {
    id?: string
    patientId: string
    departmentId: string
    examinationAt?: Date | string
    doctorName: string
    diagnosis?: string | null
    findings?: string | null
    recommendation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExaminationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    examinationAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorName?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    findings?: NullableStringFieldUpdateOperationsInput | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExaminationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    examinationAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorName?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    findings?: NullableStringFieldUpdateOperationsInput | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapyCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    examination: ExaminationCreateNestedOneWithoutTherapyInput
    items?: TherapyItemCreateNestedManyWithoutTherapyInput
  }

  export type TherapyUncheckedCreateInput = {
    id?: string
    examinationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: TherapyItemUncheckedCreateNestedManyWithoutTherapyInput
  }

  export type TherapyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examination?: ExaminationUpdateOneRequiredWithoutTherapyNestedInput
    items?: TherapyItemUpdateManyWithoutTherapyNestedInput
  }

  export type TherapyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    examinationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: TherapyItemUncheckedUpdateManyWithoutTherapyNestedInput
  }

  export type TherapyCreateManyInput = {
    id?: string
    examinationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TherapyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    examinationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapyItemCreateInput = {
    id?: string
    medicineName: string
    dosage?: string | null
    administrationRoute?: string | null
    duration?: string | null
    note?: string | null
    createdAt?: Date | string
    therapy: TherapyCreateNestedOneWithoutItemsInput
  }

  export type TherapyItemUncheckedCreateInput = {
    id?: string
    therapyId: string
    medicineName: string
    dosage?: string | null
    administrationRoute?: string | null
    duration?: string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type TherapyItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    administrationRoute?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapy?: TherapyUpdateOneRequiredWithoutItemsNestedInput
  }

  export type TherapyItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    therapyId?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    administrationRoute?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapyItemCreateManyInput = {
    id?: string
    therapyId: string
    medicineName: string
    dosage?: string | null
    administrationRoute?: string | null
    duration?: string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type TherapyItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    administrationRoute?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapyItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    therapyId?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    administrationRoute?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClinicSettingsCreateInput = {
    id?: number
    clinicName?: string
    address?: string
    phone?: string
    email?: string
    doctorName?: string
    departmentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClinicSettingsUncheckedCreateInput = {
    id?: number
    clinicName?: string
    address?: string
    phone?: string
    email?: string
    doctorName?: string
    departmentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClinicSettingsUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clinicName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    doctorName?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClinicSettingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clinicName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    doctorName?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClinicSettingsCreateManyInput = {
    id?: number
    clinicName?: string
    address?: string
    phone?: string
    email?: string
    doctorName?: string
    departmentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClinicSettingsUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    clinicName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    doctorName?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClinicSettingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clinicName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    doctorName?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ExaminationListRelationFilter = {
    every?: ExaminationWhereInput
    some?: ExaminationWhereInput
    none?: ExaminationWhereInput
  }

  export type ExaminationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    recordNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    nationalId?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    note?: SortOrder
    lockedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    recordNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    nationalId?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    note?: SortOrder
    lockedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    recordNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    nationalId?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    note?: SortOrder
    lockedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type DepartmentScalarRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type TherapyNullableScalarRelationFilter = {
    is?: TherapyWhereInput | null
    isNot?: TherapyWhereInput | null
  }

  export type ExaminationCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    departmentId?: SortOrder
    examinationAt?: SortOrder
    doctorName?: SortOrder
    diagnosis?: SortOrder
    findings?: SortOrder
    recommendation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExaminationMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    departmentId?: SortOrder
    examinationAt?: SortOrder
    doctorName?: SortOrder
    diagnosis?: SortOrder
    findings?: SortOrder
    recommendation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExaminationMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    departmentId?: SortOrder
    examinationAt?: SortOrder
    doctorName?: SortOrder
    diagnosis?: SortOrder
    findings?: SortOrder
    recommendation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExaminationScalarRelationFilter = {
    is?: ExaminationWhereInput
    isNot?: ExaminationWhereInput
  }

  export type TherapyItemListRelationFilter = {
    every?: TherapyItemWhereInput
    some?: TherapyItemWhereInput
    none?: TherapyItemWhereInput
  }

  export type TherapyItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TherapyCountOrderByAggregateInput = {
    id?: SortOrder
    examinationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TherapyMaxOrderByAggregateInput = {
    id?: SortOrder
    examinationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TherapyMinOrderByAggregateInput = {
    id?: SortOrder
    examinationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TherapyScalarRelationFilter = {
    is?: TherapyWhereInput
    isNot?: TherapyWhereInput
  }

  export type TherapyItemCountOrderByAggregateInput = {
    id?: SortOrder
    therapyId?: SortOrder
    medicineName?: SortOrder
    dosage?: SortOrder
    administrationRoute?: SortOrder
    duration?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type TherapyItemMaxOrderByAggregateInput = {
    id?: SortOrder
    therapyId?: SortOrder
    medicineName?: SortOrder
    dosage?: SortOrder
    administrationRoute?: SortOrder
    duration?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type TherapyItemMinOrderByAggregateInput = {
    id?: SortOrder
    therapyId?: SortOrder
    medicineName?: SortOrder
    dosage?: SortOrder
    administrationRoute?: SortOrder
    duration?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ClinicSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    clinicName?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    doctorName?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClinicSettingsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClinicSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    clinicName?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    doctorName?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClinicSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    clinicName?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    doctorName?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClinicSettingsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type ExaminationCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<ExaminationCreateWithoutDepartmentInput, ExaminationUncheckedCreateWithoutDepartmentInput> | ExaminationCreateWithoutDepartmentInput[] | ExaminationUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: ExaminationCreateOrConnectWithoutDepartmentInput | ExaminationCreateOrConnectWithoutDepartmentInput[]
    createMany?: ExaminationCreateManyDepartmentInputEnvelope
    connect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
  }

  export type ExaminationUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<ExaminationCreateWithoutDepartmentInput, ExaminationUncheckedCreateWithoutDepartmentInput> | ExaminationCreateWithoutDepartmentInput[] | ExaminationUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: ExaminationCreateOrConnectWithoutDepartmentInput | ExaminationCreateOrConnectWithoutDepartmentInput[]
    createMany?: ExaminationCreateManyDepartmentInputEnvelope
    connect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ExaminationUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<ExaminationCreateWithoutDepartmentInput, ExaminationUncheckedCreateWithoutDepartmentInput> | ExaminationCreateWithoutDepartmentInput[] | ExaminationUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: ExaminationCreateOrConnectWithoutDepartmentInput | ExaminationCreateOrConnectWithoutDepartmentInput[]
    upsert?: ExaminationUpsertWithWhereUniqueWithoutDepartmentInput | ExaminationUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: ExaminationCreateManyDepartmentInputEnvelope
    set?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    disconnect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    delete?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    connect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    update?: ExaminationUpdateWithWhereUniqueWithoutDepartmentInput | ExaminationUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: ExaminationUpdateManyWithWhereWithoutDepartmentInput | ExaminationUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: ExaminationScalarWhereInput | ExaminationScalarWhereInput[]
  }

  export type ExaminationUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<ExaminationCreateWithoutDepartmentInput, ExaminationUncheckedCreateWithoutDepartmentInput> | ExaminationCreateWithoutDepartmentInput[] | ExaminationUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: ExaminationCreateOrConnectWithoutDepartmentInput | ExaminationCreateOrConnectWithoutDepartmentInput[]
    upsert?: ExaminationUpsertWithWhereUniqueWithoutDepartmentInput | ExaminationUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: ExaminationCreateManyDepartmentInputEnvelope
    set?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    disconnect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    delete?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    connect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    update?: ExaminationUpdateWithWhereUniqueWithoutDepartmentInput | ExaminationUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: ExaminationUpdateManyWithWhereWithoutDepartmentInput | ExaminationUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: ExaminationScalarWhereInput | ExaminationScalarWhereInput[]
  }

  export type ExaminationCreateNestedManyWithoutPatientInput = {
    create?: XOR<ExaminationCreateWithoutPatientInput, ExaminationUncheckedCreateWithoutPatientInput> | ExaminationCreateWithoutPatientInput[] | ExaminationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ExaminationCreateOrConnectWithoutPatientInput | ExaminationCreateOrConnectWithoutPatientInput[]
    createMany?: ExaminationCreateManyPatientInputEnvelope
    connect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
  }

  export type ExaminationUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<ExaminationCreateWithoutPatientInput, ExaminationUncheckedCreateWithoutPatientInput> | ExaminationCreateWithoutPatientInput[] | ExaminationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ExaminationCreateOrConnectWithoutPatientInput | ExaminationCreateOrConnectWithoutPatientInput[]
    createMany?: ExaminationCreateManyPatientInputEnvelope
    connect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ExaminationUpdateManyWithoutPatientNestedInput = {
    create?: XOR<ExaminationCreateWithoutPatientInput, ExaminationUncheckedCreateWithoutPatientInput> | ExaminationCreateWithoutPatientInput[] | ExaminationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ExaminationCreateOrConnectWithoutPatientInput | ExaminationCreateOrConnectWithoutPatientInput[]
    upsert?: ExaminationUpsertWithWhereUniqueWithoutPatientInput | ExaminationUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: ExaminationCreateManyPatientInputEnvelope
    set?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    disconnect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    delete?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    connect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    update?: ExaminationUpdateWithWhereUniqueWithoutPatientInput | ExaminationUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: ExaminationUpdateManyWithWhereWithoutPatientInput | ExaminationUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: ExaminationScalarWhereInput | ExaminationScalarWhereInput[]
  }

  export type ExaminationUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<ExaminationCreateWithoutPatientInput, ExaminationUncheckedCreateWithoutPatientInput> | ExaminationCreateWithoutPatientInput[] | ExaminationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ExaminationCreateOrConnectWithoutPatientInput | ExaminationCreateOrConnectWithoutPatientInput[]
    upsert?: ExaminationUpsertWithWhereUniqueWithoutPatientInput | ExaminationUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: ExaminationCreateManyPatientInputEnvelope
    set?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    disconnect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    delete?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    connect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    update?: ExaminationUpdateWithWhereUniqueWithoutPatientInput | ExaminationUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: ExaminationUpdateManyWithWhereWithoutPatientInput | ExaminationUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: ExaminationScalarWhereInput | ExaminationScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutExaminationsInput = {
    create?: XOR<PatientCreateWithoutExaminationsInput, PatientUncheckedCreateWithoutExaminationsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutExaminationsInput
    connect?: PatientWhereUniqueInput
  }

  export type DepartmentCreateNestedOneWithoutExaminationsInput = {
    create?: XOR<DepartmentCreateWithoutExaminationsInput, DepartmentUncheckedCreateWithoutExaminationsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutExaminationsInput
    connect?: DepartmentWhereUniqueInput
  }

  export type TherapyCreateNestedOneWithoutExaminationInput = {
    create?: XOR<TherapyCreateWithoutExaminationInput, TherapyUncheckedCreateWithoutExaminationInput>
    connectOrCreate?: TherapyCreateOrConnectWithoutExaminationInput
    connect?: TherapyWhereUniqueInput
  }

  export type TherapyUncheckedCreateNestedOneWithoutExaminationInput = {
    create?: XOR<TherapyCreateWithoutExaminationInput, TherapyUncheckedCreateWithoutExaminationInput>
    connectOrCreate?: TherapyCreateOrConnectWithoutExaminationInput
    connect?: TherapyWhereUniqueInput
  }

  export type PatientUpdateOneRequiredWithoutExaminationsNestedInput = {
    create?: XOR<PatientCreateWithoutExaminationsInput, PatientUncheckedCreateWithoutExaminationsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutExaminationsInput
    upsert?: PatientUpsertWithoutExaminationsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutExaminationsInput, PatientUpdateWithoutExaminationsInput>, PatientUncheckedUpdateWithoutExaminationsInput>
  }

  export type DepartmentUpdateOneRequiredWithoutExaminationsNestedInput = {
    create?: XOR<DepartmentCreateWithoutExaminationsInput, DepartmentUncheckedCreateWithoutExaminationsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutExaminationsInput
    upsert?: DepartmentUpsertWithoutExaminationsInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutExaminationsInput, DepartmentUpdateWithoutExaminationsInput>, DepartmentUncheckedUpdateWithoutExaminationsInput>
  }

  export type TherapyUpdateOneWithoutExaminationNestedInput = {
    create?: XOR<TherapyCreateWithoutExaminationInput, TherapyUncheckedCreateWithoutExaminationInput>
    connectOrCreate?: TherapyCreateOrConnectWithoutExaminationInput
    upsert?: TherapyUpsertWithoutExaminationInput
    disconnect?: TherapyWhereInput | boolean
    delete?: TherapyWhereInput | boolean
    connect?: TherapyWhereUniqueInput
    update?: XOR<XOR<TherapyUpdateToOneWithWhereWithoutExaminationInput, TherapyUpdateWithoutExaminationInput>, TherapyUncheckedUpdateWithoutExaminationInput>
  }

  export type TherapyUncheckedUpdateOneWithoutExaminationNestedInput = {
    create?: XOR<TherapyCreateWithoutExaminationInput, TherapyUncheckedCreateWithoutExaminationInput>
    connectOrCreate?: TherapyCreateOrConnectWithoutExaminationInput
    upsert?: TherapyUpsertWithoutExaminationInput
    disconnect?: TherapyWhereInput | boolean
    delete?: TherapyWhereInput | boolean
    connect?: TherapyWhereUniqueInput
    update?: XOR<XOR<TherapyUpdateToOneWithWhereWithoutExaminationInput, TherapyUpdateWithoutExaminationInput>, TherapyUncheckedUpdateWithoutExaminationInput>
  }

  export type ExaminationCreateNestedOneWithoutTherapyInput = {
    create?: XOR<ExaminationCreateWithoutTherapyInput, ExaminationUncheckedCreateWithoutTherapyInput>
    connectOrCreate?: ExaminationCreateOrConnectWithoutTherapyInput
    connect?: ExaminationWhereUniqueInput
  }

  export type TherapyItemCreateNestedManyWithoutTherapyInput = {
    create?: XOR<TherapyItemCreateWithoutTherapyInput, TherapyItemUncheckedCreateWithoutTherapyInput> | TherapyItemCreateWithoutTherapyInput[] | TherapyItemUncheckedCreateWithoutTherapyInput[]
    connectOrCreate?: TherapyItemCreateOrConnectWithoutTherapyInput | TherapyItemCreateOrConnectWithoutTherapyInput[]
    createMany?: TherapyItemCreateManyTherapyInputEnvelope
    connect?: TherapyItemWhereUniqueInput | TherapyItemWhereUniqueInput[]
  }

  export type TherapyItemUncheckedCreateNestedManyWithoutTherapyInput = {
    create?: XOR<TherapyItemCreateWithoutTherapyInput, TherapyItemUncheckedCreateWithoutTherapyInput> | TherapyItemCreateWithoutTherapyInput[] | TherapyItemUncheckedCreateWithoutTherapyInput[]
    connectOrCreate?: TherapyItemCreateOrConnectWithoutTherapyInput | TherapyItemCreateOrConnectWithoutTherapyInput[]
    createMany?: TherapyItemCreateManyTherapyInputEnvelope
    connect?: TherapyItemWhereUniqueInput | TherapyItemWhereUniqueInput[]
  }

  export type ExaminationUpdateOneRequiredWithoutTherapyNestedInput = {
    create?: XOR<ExaminationCreateWithoutTherapyInput, ExaminationUncheckedCreateWithoutTherapyInput>
    connectOrCreate?: ExaminationCreateOrConnectWithoutTherapyInput
    upsert?: ExaminationUpsertWithoutTherapyInput
    connect?: ExaminationWhereUniqueInput
    update?: XOR<XOR<ExaminationUpdateToOneWithWhereWithoutTherapyInput, ExaminationUpdateWithoutTherapyInput>, ExaminationUncheckedUpdateWithoutTherapyInput>
  }

  export type TherapyItemUpdateManyWithoutTherapyNestedInput = {
    create?: XOR<TherapyItemCreateWithoutTherapyInput, TherapyItemUncheckedCreateWithoutTherapyInput> | TherapyItemCreateWithoutTherapyInput[] | TherapyItemUncheckedCreateWithoutTherapyInput[]
    connectOrCreate?: TherapyItemCreateOrConnectWithoutTherapyInput | TherapyItemCreateOrConnectWithoutTherapyInput[]
    upsert?: TherapyItemUpsertWithWhereUniqueWithoutTherapyInput | TherapyItemUpsertWithWhereUniqueWithoutTherapyInput[]
    createMany?: TherapyItemCreateManyTherapyInputEnvelope
    set?: TherapyItemWhereUniqueInput | TherapyItemWhereUniqueInput[]
    disconnect?: TherapyItemWhereUniqueInput | TherapyItemWhereUniqueInput[]
    delete?: TherapyItemWhereUniqueInput | TherapyItemWhereUniqueInput[]
    connect?: TherapyItemWhereUniqueInput | TherapyItemWhereUniqueInput[]
    update?: TherapyItemUpdateWithWhereUniqueWithoutTherapyInput | TherapyItemUpdateWithWhereUniqueWithoutTherapyInput[]
    updateMany?: TherapyItemUpdateManyWithWhereWithoutTherapyInput | TherapyItemUpdateManyWithWhereWithoutTherapyInput[]
    deleteMany?: TherapyItemScalarWhereInput | TherapyItemScalarWhereInput[]
  }

  export type TherapyItemUncheckedUpdateManyWithoutTherapyNestedInput = {
    create?: XOR<TherapyItemCreateWithoutTherapyInput, TherapyItemUncheckedCreateWithoutTherapyInput> | TherapyItemCreateWithoutTherapyInput[] | TherapyItemUncheckedCreateWithoutTherapyInput[]
    connectOrCreate?: TherapyItemCreateOrConnectWithoutTherapyInput | TherapyItemCreateOrConnectWithoutTherapyInput[]
    upsert?: TherapyItemUpsertWithWhereUniqueWithoutTherapyInput | TherapyItemUpsertWithWhereUniqueWithoutTherapyInput[]
    createMany?: TherapyItemCreateManyTherapyInputEnvelope
    set?: TherapyItemWhereUniqueInput | TherapyItemWhereUniqueInput[]
    disconnect?: TherapyItemWhereUniqueInput | TherapyItemWhereUniqueInput[]
    delete?: TherapyItemWhereUniqueInput | TherapyItemWhereUniqueInput[]
    connect?: TherapyItemWhereUniqueInput | TherapyItemWhereUniqueInput[]
    update?: TherapyItemUpdateWithWhereUniqueWithoutTherapyInput | TherapyItemUpdateWithWhereUniqueWithoutTherapyInput[]
    updateMany?: TherapyItemUpdateManyWithWhereWithoutTherapyInput | TherapyItemUpdateManyWithWhereWithoutTherapyInput[]
    deleteMany?: TherapyItemScalarWhereInput | TherapyItemScalarWhereInput[]
  }

  export type TherapyCreateNestedOneWithoutItemsInput = {
    create?: XOR<TherapyCreateWithoutItemsInput, TherapyUncheckedCreateWithoutItemsInput>
    connectOrCreate?: TherapyCreateOrConnectWithoutItemsInput
    connect?: TherapyWhereUniqueInput
  }

  export type TherapyUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<TherapyCreateWithoutItemsInput, TherapyUncheckedCreateWithoutItemsInput>
    connectOrCreate?: TherapyCreateOrConnectWithoutItemsInput
    upsert?: TherapyUpsertWithoutItemsInput
    connect?: TherapyWhereUniqueInput
    update?: XOR<XOR<TherapyUpdateToOneWithWhereWithoutItemsInput, TherapyUpdateWithoutItemsInput>, TherapyUncheckedUpdateWithoutItemsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ExaminationCreateWithoutDepartmentInput = {
    id?: string
    examinationAt?: Date | string
    doctorName: string
    diagnosis?: string | null
    findings?: string | null
    recommendation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutExaminationsInput
    therapy?: TherapyCreateNestedOneWithoutExaminationInput
  }

  export type ExaminationUncheckedCreateWithoutDepartmentInput = {
    id?: string
    patientId: string
    examinationAt?: Date | string
    doctorName: string
    diagnosis?: string | null
    findings?: string | null
    recommendation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    therapy?: TherapyUncheckedCreateNestedOneWithoutExaminationInput
  }

  export type ExaminationCreateOrConnectWithoutDepartmentInput = {
    where: ExaminationWhereUniqueInput
    create: XOR<ExaminationCreateWithoutDepartmentInput, ExaminationUncheckedCreateWithoutDepartmentInput>
  }

  export type ExaminationCreateManyDepartmentInputEnvelope = {
    data: ExaminationCreateManyDepartmentInput | ExaminationCreateManyDepartmentInput[]
  }

  export type ExaminationUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: ExaminationWhereUniqueInput
    update: XOR<ExaminationUpdateWithoutDepartmentInput, ExaminationUncheckedUpdateWithoutDepartmentInput>
    create: XOR<ExaminationCreateWithoutDepartmentInput, ExaminationUncheckedCreateWithoutDepartmentInput>
  }

  export type ExaminationUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: ExaminationWhereUniqueInput
    data: XOR<ExaminationUpdateWithoutDepartmentInput, ExaminationUncheckedUpdateWithoutDepartmentInput>
  }

  export type ExaminationUpdateManyWithWhereWithoutDepartmentInput = {
    where: ExaminationScalarWhereInput
    data: XOR<ExaminationUpdateManyMutationInput, ExaminationUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type ExaminationScalarWhereInput = {
    AND?: ExaminationScalarWhereInput | ExaminationScalarWhereInput[]
    OR?: ExaminationScalarWhereInput[]
    NOT?: ExaminationScalarWhereInput | ExaminationScalarWhereInput[]
    id?: StringFilter<"Examination"> | string
    patientId?: StringFilter<"Examination"> | string
    departmentId?: StringFilter<"Examination"> | string
    examinationAt?: DateTimeFilter<"Examination"> | Date | string
    doctorName?: StringFilter<"Examination"> | string
    diagnosis?: StringNullableFilter<"Examination"> | string | null
    findings?: StringNullableFilter<"Examination"> | string | null
    recommendation?: StringNullableFilter<"Examination"> | string | null
    createdAt?: DateTimeFilter<"Examination"> | Date | string
    updatedAt?: DateTimeFilter<"Examination"> | Date | string
  }

  export type ExaminationCreateWithoutPatientInput = {
    id?: string
    examinationAt?: Date | string
    doctorName: string
    diagnosis?: string | null
    findings?: string | null
    recommendation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    department: DepartmentCreateNestedOneWithoutExaminationsInput
    therapy?: TherapyCreateNestedOneWithoutExaminationInput
  }

  export type ExaminationUncheckedCreateWithoutPatientInput = {
    id?: string
    departmentId: string
    examinationAt?: Date | string
    doctorName: string
    diagnosis?: string | null
    findings?: string | null
    recommendation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    therapy?: TherapyUncheckedCreateNestedOneWithoutExaminationInput
  }

  export type ExaminationCreateOrConnectWithoutPatientInput = {
    where: ExaminationWhereUniqueInput
    create: XOR<ExaminationCreateWithoutPatientInput, ExaminationUncheckedCreateWithoutPatientInput>
  }

  export type ExaminationCreateManyPatientInputEnvelope = {
    data: ExaminationCreateManyPatientInput | ExaminationCreateManyPatientInput[]
  }

  export type ExaminationUpsertWithWhereUniqueWithoutPatientInput = {
    where: ExaminationWhereUniqueInput
    update: XOR<ExaminationUpdateWithoutPatientInput, ExaminationUncheckedUpdateWithoutPatientInput>
    create: XOR<ExaminationCreateWithoutPatientInput, ExaminationUncheckedCreateWithoutPatientInput>
  }

  export type ExaminationUpdateWithWhereUniqueWithoutPatientInput = {
    where: ExaminationWhereUniqueInput
    data: XOR<ExaminationUpdateWithoutPatientInput, ExaminationUncheckedUpdateWithoutPatientInput>
  }

  export type ExaminationUpdateManyWithWhereWithoutPatientInput = {
    where: ExaminationScalarWhereInput
    data: XOR<ExaminationUpdateManyMutationInput, ExaminationUncheckedUpdateManyWithoutPatientInput>
  }

  export type PatientCreateWithoutExaminationsInput = {
    id?: string
    recordNumber: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    nationalId?: string | null
    address?: string | null
    phone?: string | null
    note?: string | null
    lockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUncheckedCreateWithoutExaminationsInput = {
    id?: string
    recordNumber: string
    firstName: string
    lastName: string
    dateOfBirth?: Date | string | null
    nationalId?: string | null
    address?: string | null
    phone?: string | null
    note?: string | null
    lockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientCreateOrConnectWithoutExaminationsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutExaminationsInput, PatientUncheckedCreateWithoutExaminationsInput>
  }

  export type DepartmentCreateWithoutExaminationsInput = {
    id?: string
    name: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUncheckedCreateWithoutExaminationsInput = {
    id?: string
    name: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentCreateOrConnectWithoutExaminationsInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutExaminationsInput, DepartmentUncheckedCreateWithoutExaminationsInput>
  }

  export type TherapyCreateWithoutExaminationInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: TherapyItemCreateNestedManyWithoutTherapyInput
  }

  export type TherapyUncheckedCreateWithoutExaminationInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: TherapyItemUncheckedCreateNestedManyWithoutTherapyInput
  }

  export type TherapyCreateOrConnectWithoutExaminationInput = {
    where: TherapyWhereUniqueInput
    create: XOR<TherapyCreateWithoutExaminationInput, TherapyUncheckedCreateWithoutExaminationInput>
  }

  export type PatientUpsertWithoutExaminationsInput = {
    update: XOR<PatientUpdateWithoutExaminationsInput, PatientUncheckedUpdateWithoutExaminationsInput>
    create: XOR<PatientCreateWithoutExaminationsInput, PatientUncheckedCreateWithoutExaminationsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutExaminationsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutExaminationsInput, PatientUncheckedUpdateWithoutExaminationsInput>
  }

  export type PatientUpdateWithoutExaminationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    recordNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationalId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateWithoutExaminationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    recordNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationalId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUpsertWithoutExaminationsInput = {
    update: XOR<DepartmentUpdateWithoutExaminationsInput, DepartmentUncheckedUpdateWithoutExaminationsInput>
    create: XOR<DepartmentCreateWithoutExaminationsInput, DepartmentUncheckedCreateWithoutExaminationsInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutExaminationsInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutExaminationsInput, DepartmentUncheckedUpdateWithoutExaminationsInput>
  }

  export type DepartmentUpdateWithoutExaminationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateWithoutExaminationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapyUpsertWithoutExaminationInput = {
    update: XOR<TherapyUpdateWithoutExaminationInput, TherapyUncheckedUpdateWithoutExaminationInput>
    create: XOR<TherapyCreateWithoutExaminationInput, TherapyUncheckedCreateWithoutExaminationInput>
    where?: TherapyWhereInput
  }

  export type TherapyUpdateToOneWithWhereWithoutExaminationInput = {
    where?: TherapyWhereInput
    data: XOR<TherapyUpdateWithoutExaminationInput, TherapyUncheckedUpdateWithoutExaminationInput>
  }

  export type TherapyUpdateWithoutExaminationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: TherapyItemUpdateManyWithoutTherapyNestedInput
  }

  export type TherapyUncheckedUpdateWithoutExaminationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: TherapyItemUncheckedUpdateManyWithoutTherapyNestedInput
  }

  export type ExaminationCreateWithoutTherapyInput = {
    id?: string
    examinationAt?: Date | string
    doctorName: string
    diagnosis?: string | null
    findings?: string | null
    recommendation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutExaminationsInput
    department: DepartmentCreateNestedOneWithoutExaminationsInput
  }

  export type ExaminationUncheckedCreateWithoutTherapyInput = {
    id?: string
    patientId: string
    departmentId: string
    examinationAt?: Date | string
    doctorName: string
    diagnosis?: string | null
    findings?: string | null
    recommendation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExaminationCreateOrConnectWithoutTherapyInput = {
    where: ExaminationWhereUniqueInput
    create: XOR<ExaminationCreateWithoutTherapyInput, ExaminationUncheckedCreateWithoutTherapyInput>
  }

  export type TherapyItemCreateWithoutTherapyInput = {
    id?: string
    medicineName: string
    dosage?: string | null
    administrationRoute?: string | null
    duration?: string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type TherapyItemUncheckedCreateWithoutTherapyInput = {
    id?: string
    medicineName: string
    dosage?: string | null
    administrationRoute?: string | null
    duration?: string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type TherapyItemCreateOrConnectWithoutTherapyInput = {
    where: TherapyItemWhereUniqueInput
    create: XOR<TherapyItemCreateWithoutTherapyInput, TherapyItemUncheckedCreateWithoutTherapyInput>
  }

  export type TherapyItemCreateManyTherapyInputEnvelope = {
    data: TherapyItemCreateManyTherapyInput | TherapyItemCreateManyTherapyInput[]
  }

  export type ExaminationUpsertWithoutTherapyInput = {
    update: XOR<ExaminationUpdateWithoutTherapyInput, ExaminationUncheckedUpdateWithoutTherapyInput>
    create: XOR<ExaminationCreateWithoutTherapyInput, ExaminationUncheckedCreateWithoutTherapyInput>
    where?: ExaminationWhereInput
  }

  export type ExaminationUpdateToOneWithWhereWithoutTherapyInput = {
    where?: ExaminationWhereInput
    data: XOR<ExaminationUpdateWithoutTherapyInput, ExaminationUncheckedUpdateWithoutTherapyInput>
  }

  export type ExaminationUpdateWithoutTherapyInput = {
    id?: StringFieldUpdateOperationsInput | string
    examinationAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorName?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    findings?: NullableStringFieldUpdateOperationsInput | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutExaminationsNestedInput
    department?: DepartmentUpdateOneRequiredWithoutExaminationsNestedInput
  }

  export type ExaminationUncheckedUpdateWithoutTherapyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    examinationAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorName?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    findings?: NullableStringFieldUpdateOperationsInput | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapyItemUpsertWithWhereUniqueWithoutTherapyInput = {
    where: TherapyItemWhereUniqueInput
    update: XOR<TherapyItemUpdateWithoutTherapyInput, TherapyItemUncheckedUpdateWithoutTherapyInput>
    create: XOR<TherapyItemCreateWithoutTherapyInput, TherapyItemUncheckedCreateWithoutTherapyInput>
  }

  export type TherapyItemUpdateWithWhereUniqueWithoutTherapyInput = {
    where: TherapyItemWhereUniqueInput
    data: XOR<TherapyItemUpdateWithoutTherapyInput, TherapyItemUncheckedUpdateWithoutTherapyInput>
  }

  export type TherapyItemUpdateManyWithWhereWithoutTherapyInput = {
    where: TherapyItemScalarWhereInput
    data: XOR<TherapyItemUpdateManyMutationInput, TherapyItemUncheckedUpdateManyWithoutTherapyInput>
  }

  export type TherapyItemScalarWhereInput = {
    AND?: TherapyItemScalarWhereInput | TherapyItemScalarWhereInput[]
    OR?: TherapyItemScalarWhereInput[]
    NOT?: TherapyItemScalarWhereInput | TherapyItemScalarWhereInput[]
    id?: StringFilter<"TherapyItem"> | string
    therapyId?: StringFilter<"TherapyItem"> | string
    medicineName?: StringFilter<"TherapyItem"> | string
    dosage?: StringNullableFilter<"TherapyItem"> | string | null
    administrationRoute?: StringNullableFilter<"TherapyItem"> | string | null
    duration?: StringNullableFilter<"TherapyItem"> | string | null
    note?: StringNullableFilter<"TherapyItem"> | string | null
    createdAt?: DateTimeFilter<"TherapyItem"> | Date | string
  }

  export type TherapyCreateWithoutItemsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    examination: ExaminationCreateNestedOneWithoutTherapyInput
  }

  export type TherapyUncheckedCreateWithoutItemsInput = {
    id?: string
    examinationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TherapyCreateOrConnectWithoutItemsInput = {
    where: TherapyWhereUniqueInput
    create: XOR<TherapyCreateWithoutItemsInput, TherapyUncheckedCreateWithoutItemsInput>
  }

  export type TherapyUpsertWithoutItemsInput = {
    update: XOR<TherapyUpdateWithoutItemsInput, TherapyUncheckedUpdateWithoutItemsInput>
    create: XOR<TherapyCreateWithoutItemsInput, TherapyUncheckedCreateWithoutItemsInput>
    where?: TherapyWhereInput
  }

  export type TherapyUpdateToOneWithWhereWithoutItemsInput = {
    where?: TherapyWhereInput
    data: XOR<TherapyUpdateWithoutItemsInput, TherapyUncheckedUpdateWithoutItemsInput>
  }

  export type TherapyUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examination?: ExaminationUpdateOneRequiredWithoutTherapyNestedInput
  }

  export type TherapyUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    examinationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExaminationCreateManyDepartmentInput = {
    id?: string
    patientId: string
    examinationAt?: Date | string
    doctorName: string
    diagnosis?: string | null
    findings?: string | null
    recommendation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExaminationUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    examinationAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorName?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    findings?: NullableStringFieldUpdateOperationsInput | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutExaminationsNestedInput
    therapy?: TherapyUpdateOneWithoutExaminationNestedInput
  }

  export type ExaminationUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    examinationAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorName?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    findings?: NullableStringFieldUpdateOperationsInput | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapy?: TherapyUncheckedUpdateOneWithoutExaminationNestedInput
  }

  export type ExaminationUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    examinationAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorName?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    findings?: NullableStringFieldUpdateOperationsInput | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExaminationCreateManyPatientInput = {
    id?: string
    departmentId: string
    examinationAt?: Date | string
    doctorName: string
    diagnosis?: string | null
    findings?: string | null
    recommendation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExaminationUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    examinationAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorName?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    findings?: NullableStringFieldUpdateOperationsInput | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutExaminationsNestedInput
    therapy?: TherapyUpdateOneWithoutExaminationNestedInput
  }

  export type ExaminationUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    examinationAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorName?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    findings?: NullableStringFieldUpdateOperationsInput | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapy?: TherapyUncheckedUpdateOneWithoutExaminationNestedInput
  }

  export type ExaminationUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    examinationAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorName?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    findings?: NullableStringFieldUpdateOperationsInput | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapyItemCreateManyTherapyInput = {
    id?: string
    medicineName: string
    dosage?: string | null
    administrationRoute?: string | null
    duration?: string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type TherapyItemUpdateWithoutTherapyInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    administrationRoute?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapyItemUncheckedUpdateWithoutTherapyInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    administrationRoute?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapyItemUncheckedUpdateManyWithoutTherapyInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    administrationRoute?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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