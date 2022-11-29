import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bpchar: any;
  jsonb: any;
  numeric: any;
  smallint: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "app" */
export type App = {
  __typename?: 'app';
  id: Scalars['uuid'];
  imgUrl?: Maybe<Scalars['String']>;
  isZKP: Scalars['Boolean'];
  name: Scalars['String'];
};

/** aggregated selection of "app" */
export type App_Aggregate = {
  __typename?: 'app_aggregate';
  aggregate?: Maybe<App_Aggregate_Fields>;
  nodes: Array<App>;
};

/** aggregate fields of "app" */
export type App_Aggregate_Fields = {
  __typename?: 'app_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<App_Max_Fields>;
  min?: Maybe<App_Min_Fields>;
};

/** aggregate fields of "app" */
export type App_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<App_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "app". All fields are combined with a logical 'AND'. */
export type App_Bool_Exp = {
  _and?: InputMaybe<Array<App_Bool_Exp>>;
  _not?: InputMaybe<App_Bool_Exp>;
  _or?: InputMaybe<Array<App_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  imgUrl?: InputMaybe<String_Comparison_Exp>;
  isZKP?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "app" */
export enum App_Constraint {
  /** unique or primary key constraint on columns "id" */
  AppsPkey = 'apps_pkey',
}

/** input type for inserting data into table "app" */
export type App_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  imgUrl?: InputMaybe<Scalars['String']>;
  isZKP?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type App_Max_Fields = {
  __typename?: 'app_max_fields';
  id?: Maybe<Scalars['uuid']>;
  imgUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type App_Min_Fields = {
  __typename?: 'app_min_fields';
  id?: Maybe<Scalars['uuid']>;
  imgUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "app" */
export type App_Mutation_Response = {
  __typename?: 'app_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<App>;
};

/** on_conflict condition type for table "app" */
export type App_On_Conflict = {
  constraint: App_Constraint;
  update_columns?: Array<App_Update_Column>;
  where?: InputMaybe<App_Bool_Exp>;
};

/** Ordering options when selecting data from "app". */
export type App_Order_By = {
  id?: InputMaybe<Order_By>;
  imgUrl?: InputMaybe<Order_By>;
  isZKP?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: app */
export type App_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "app" */
export enum App_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ImgUrl = 'imgUrl',
  /** column name */
  IsZkp = 'isZKP',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "app" */
export type App_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  imgUrl?: InputMaybe<Scalars['String']>;
  isZKP?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "app" */
export type App_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: App_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type App_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  imgUrl?: InputMaybe<Scalars['String']>;
  isZKP?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "app" */
export enum App_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ImgUrl = 'imgUrl',
  /** column name */
  IsZkp = 'isZKP',
  /** column name */
  Name = 'name',
}

export type App_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<App_Set_Input>;
  where: App_Bool_Exp;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']>;
  _gt?: InputMaybe<Scalars['bpchar']>;
  _gte?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']>;
  _in?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']>;
  _lt?: InputMaybe<Scalars['bpchar']>;
  _lte?: InputMaybe<Scalars['bpchar']>;
  _neq?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** columns and relationships of "gate" */
export type Gate = {
  __typename?: 'gate';
  attributes?: Maybe<Scalars['jsonb']>;
  contractAddress: Scalars['String'];
  discount: Scalars['numeric'];
  id: Scalars['uuid'];
  product_id?: Maybe<Scalars['uuid']>;
};

/** columns and relationships of "gate" */
export type GateAttributesArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "gate" */
export type Gate_Aggregate = {
  __typename?: 'gate_aggregate';
  aggregate?: Maybe<Gate_Aggregate_Fields>;
  nodes: Array<Gate>;
};

/** aggregate fields of "gate" */
export type Gate_Aggregate_Fields = {
  __typename?: 'gate_aggregate_fields';
  avg?: Maybe<Gate_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Gate_Max_Fields>;
  min?: Maybe<Gate_Min_Fields>;
  stddev?: Maybe<Gate_Stddev_Fields>;
  stddev_pop?: Maybe<Gate_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Gate_Stddev_Samp_Fields>;
  sum?: Maybe<Gate_Sum_Fields>;
  var_pop?: Maybe<Gate_Var_Pop_Fields>;
  var_samp?: Maybe<Gate_Var_Samp_Fields>;
  variance?: Maybe<Gate_Variance_Fields>;
};

/** aggregate fields of "gate" */
export type Gate_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Gate_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Gate_Append_Input = {
  attributes?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Gate_Avg_Fields = {
  __typename?: 'gate_avg_fields';
  discount?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "gate". All fields are combined with a logical 'AND'. */
export type Gate_Bool_Exp = {
  _and?: InputMaybe<Array<Gate_Bool_Exp>>;
  _not?: InputMaybe<Gate_Bool_Exp>;
  _or?: InputMaybe<Array<Gate_Bool_Exp>>;
  attributes?: InputMaybe<Jsonb_Comparison_Exp>;
  contractAddress?: InputMaybe<String_Comparison_Exp>;
  discount?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  product_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "gate" */
export enum Gate_Constraint {
  /** unique or primary key constraint on columns "id" */
  GatePkey = 'gate_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Gate_Delete_At_Path_Input = {
  attributes?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Gate_Delete_Elem_Input = {
  attributes?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Gate_Delete_Key_Input = {
  attributes?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "gate" */
export type Gate_Inc_Input = {
  discount?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "gate" */
export type Gate_Insert_Input = {
  attributes?: InputMaybe<Scalars['jsonb']>;
  contractAddress?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['uuid']>;
  product_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Gate_Max_Fields = {
  __typename?: 'gate_max_fields';
  contractAddress?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  product_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Gate_Min_Fields = {
  __typename?: 'gate_min_fields';
  contractAddress?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  product_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "gate" */
export type Gate_Mutation_Response = {
  __typename?: 'gate_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Gate>;
};

/** on_conflict condition type for table "gate" */
export type Gate_On_Conflict = {
  constraint: Gate_Constraint;
  update_columns?: Array<Gate_Update_Column>;
  where?: InputMaybe<Gate_Bool_Exp>;
};

/** Ordering options when selecting data from "gate". */
export type Gate_Order_By = {
  attributes?: InputMaybe<Order_By>;
  contractAddress?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: gate */
export type Gate_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Gate_Prepend_Input = {
  attributes?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "gate" */
export enum Gate_Select_Column {
  /** column name */
  Attributes = 'attributes',
  /** column name */
  ContractAddress = 'contractAddress',
  /** column name */
  Discount = 'discount',
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'product_id',
}

/** input type for updating data in table "gate" */
export type Gate_Set_Input = {
  attributes?: InputMaybe<Scalars['jsonb']>;
  contractAddress?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['uuid']>;
  product_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Gate_Stddev_Fields = {
  __typename?: 'gate_stddev_fields';
  discount?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Gate_Stddev_Pop_Fields = {
  __typename?: 'gate_stddev_pop_fields';
  discount?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Gate_Stddev_Samp_Fields = {
  __typename?: 'gate_stddev_samp_fields';
  discount?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "gate" */
export type Gate_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Gate_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Gate_Stream_Cursor_Value_Input = {
  attributes?: InputMaybe<Scalars['jsonb']>;
  contractAddress?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['uuid']>;
  product_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Gate_Sum_Fields = {
  __typename?: 'gate_sum_fields';
  discount?: Maybe<Scalars['numeric']>;
};

/** update columns of table "gate" */
export enum Gate_Update_Column {
  /** column name */
  Attributes = 'attributes',
  /** column name */
  ContractAddress = 'contractAddress',
  /** column name */
  Discount = 'discount',
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'product_id',
}

export type Gate_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Gate_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Gate_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Gate_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Gate_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Gate_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Gate_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Gate_Set_Input>;
  where: Gate_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Gate_Var_Pop_Fields = {
  __typename?: 'gate_var_pop_fields';
  discount?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Gate_Var_Samp_Fields = {
  __typename?: 'gate_var_samp_fields';
  discount?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Gate_Variance_Fields = {
  __typename?: 'gate_variance_fields';
  discount?: Maybe<Scalars['Float']>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "app" */
  delete_app?: Maybe<App_Mutation_Response>;
  /** delete single row from the table: "app" */
  delete_app_by_pk?: Maybe<App>;
  /** delete data from the table: "gate" */
  delete_gate?: Maybe<Gate_Mutation_Response>;
  /** delete single row from the table: "gate" */
  delete_gate_by_pk?: Maybe<Gate>;
  /** delete data from the table: "product" */
  delete_product?: Maybe<Product_Mutation_Response>;
  /** delete single row from the table: "product" */
  delete_product_by_pk?: Maybe<Product>;
  /** insert data into the table: "app" */
  insert_app?: Maybe<App_Mutation_Response>;
  /** insert a single row into the table: "app" */
  insert_app_one?: Maybe<App>;
  /** insert data into the table: "gate" */
  insert_gate?: Maybe<Gate_Mutation_Response>;
  /** insert a single row into the table: "gate" */
  insert_gate_one?: Maybe<Gate>;
  /** insert data into the table: "product" */
  insert_product?: Maybe<Product_Mutation_Response>;
  /** insert a single row into the table: "product" */
  insert_product_one?: Maybe<Product>;
  /** update data of the table: "app" */
  update_app?: Maybe<App_Mutation_Response>;
  /** update single row of the table: "app" */
  update_app_by_pk?: Maybe<App>;
  /** update multiples rows of table: "app" */
  update_app_many?: Maybe<Array<Maybe<App_Mutation_Response>>>;
  /** update data of the table: "gate" */
  update_gate?: Maybe<Gate_Mutation_Response>;
  /** update single row of the table: "gate" */
  update_gate_by_pk?: Maybe<Gate>;
  /** update multiples rows of table: "gate" */
  update_gate_many?: Maybe<Array<Maybe<Gate_Mutation_Response>>>;
  /** update data of the table: "product" */
  update_product?: Maybe<Product_Mutation_Response>;
  /** update single row of the table: "product" */
  update_product_by_pk?: Maybe<Product>;
  /** update multiples rows of table: "product" */
  update_product_many?: Maybe<Array<Maybe<Product_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_AppArgs = {
  where: App_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_App_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_GateArgs = {
  where: Gate_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Gate_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_ProductArgs = {
  where: Product_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Product_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootInsert_AppArgs = {
  objects: Array<App_Insert_Input>;
  on_conflict?: InputMaybe<App_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_App_OneArgs = {
  object: App_Insert_Input;
  on_conflict?: InputMaybe<App_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_GateArgs = {
  objects: Array<Gate_Insert_Input>;
  on_conflict?: InputMaybe<Gate_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Gate_OneArgs = {
  object: Gate_Insert_Input;
  on_conflict?: InputMaybe<Gate_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ProductArgs = {
  objects: Array<Product_Insert_Input>;
  on_conflict?: InputMaybe<Product_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Product_OneArgs = {
  object: Product_Insert_Input;
  on_conflict?: InputMaybe<Product_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_AppArgs = {
  _set?: InputMaybe<App_Set_Input>;
  where: App_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_App_By_PkArgs = {
  _set?: InputMaybe<App_Set_Input>;
  pk_columns: App_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_App_ManyArgs = {
  updates: Array<App_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_GateArgs = {
  _append?: InputMaybe<Gate_Append_Input>;
  _delete_at_path?: InputMaybe<Gate_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Gate_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Gate_Delete_Key_Input>;
  _inc?: InputMaybe<Gate_Inc_Input>;
  _prepend?: InputMaybe<Gate_Prepend_Input>;
  _set?: InputMaybe<Gate_Set_Input>;
  where: Gate_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Gate_By_PkArgs = {
  _append?: InputMaybe<Gate_Append_Input>;
  _delete_at_path?: InputMaybe<Gate_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Gate_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Gate_Delete_Key_Input>;
  _inc?: InputMaybe<Gate_Inc_Input>;
  _prepend?: InputMaybe<Gate_Prepend_Input>;
  _set?: InputMaybe<Gate_Set_Input>;
  pk_columns: Gate_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Gate_ManyArgs = {
  updates: Array<Gate_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ProductArgs = {
  _inc?: InputMaybe<Product_Inc_Input>;
  _set?: InputMaybe<Product_Set_Input>;
  where: Product_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Product_By_PkArgs = {
  _inc?: InputMaybe<Product_Inc_Input>;
  _set?: InputMaybe<Product_Set_Input>;
  pk_columns: Product_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Product_ManyArgs = {
  updates: Array<Product_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "product" */
export type Product = {
  __typename?: 'product';
  app_id: Scalars['uuid'];
  collection?: Maybe<Scalars['bpchar']>;
  curation?: Maybe<Scalars['bpchar']>;
  description?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['smallint']>;
  id: Scalars['uuid'];
  image?: Maybe<Scalars['bpchar']>;
  isDiscountGated: Scalars['Boolean'];
  name: Scalars['String'];
  poapId?: Maybe<Scalars['numeric']>;
  price: Scalars['numeric'];
};

/** aggregated selection of "product" */
export type Product_Aggregate = {
  __typename?: 'product_aggregate';
  aggregate?: Maybe<Product_Aggregate_Fields>;
  nodes: Array<Product>;
};

/** aggregate fields of "product" */
export type Product_Aggregate_Fields = {
  __typename?: 'product_aggregate_fields';
  avg?: Maybe<Product_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Product_Max_Fields>;
  min?: Maybe<Product_Min_Fields>;
  stddev?: Maybe<Product_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Sum_Fields>;
  var_pop?: Maybe<Product_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Var_Samp_Fields>;
  variance?: Maybe<Product_Variance_Fields>;
};

/** aggregate fields of "product" */
export type Product_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Product_Avg_Fields = {
  __typename?: 'product_avg_fields';
  discount?: Maybe<Scalars['Float']>;
  poapId?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "product". All fields are combined with a logical 'AND'. */
export type Product_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Bool_Exp>>;
  _not?: InputMaybe<Product_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Bool_Exp>>;
  app_id?: InputMaybe<Uuid_Comparison_Exp>;
  collection?: InputMaybe<Bpchar_Comparison_Exp>;
  curation?: InputMaybe<Bpchar_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  discount?: InputMaybe<Smallint_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<Bpchar_Comparison_Exp>;
  isDiscountGated?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  poapId?: InputMaybe<Numeric_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "product" */
export enum Product_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductPkey = 'product_pkey',
}

/** input type for incrementing numeric columns in table "product" */
export type Product_Inc_Input = {
  discount?: InputMaybe<Scalars['smallint']>;
  poapId?: InputMaybe<Scalars['numeric']>;
  price?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "product" */
export type Product_Insert_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  collection?: InputMaybe<Scalars['bpchar']>;
  curation?: InputMaybe<Scalars['bpchar']>;
  description?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['smallint']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['bpchar']>;
  isDiscountGated?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  poapId?: InputMaybe<Scalars['numeric']>;
  price?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Product_Max_Fields = {
  __typename?: 'product_max_fields';
  app_id?: Maybe<Scalars['uuid']>;
  collection?: Maybe<Scalars['bpchar']>;
  curation?: Maybe<Scalars['bpchar']>;
  description?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['bpchar']>;
  name?: Maybe<Scalars['String']>;
  poapId?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Product_Min_Fields = {
  __typename?: 'product_min_fields';
  app_id?: Maybe<Scalars['uuid']>;
  collection?: Maybe<Scalars['bpchar']>;
  curation?: Maybe<Scalars['bpchar']>;
  description?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['bpchar']>;
  name?: Maybe<Scalars['String']>;
  poapId?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "product" */
export type Product_Mutation_Response = {
  __typename?: 'product_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Product>;
};

/** on_conflict condition type for table "product" */
export type Product_On_Conflict = {
  constraint: Product_Constraint;
  update_columns?: Array<Product_Update_Column>;
  where?: InputMaybe<Product_Bool_Exp>;
};

/** Ordering options when selecting data from "product". */
export type Product_Order_By = {
  app_id?: InputMaybe<Order_By>;
  collection?: InputMaybe<Order_By>;
  curation?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  isDiscountGated?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  poapId?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product */
export type Product_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "product" */
export enum Product_Select_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  Collection = 'collection',
  /** column name */
  Curation = 'curation',
  /** column name */
  Description = 'description',
  /** column name */
  Discount = 'discount',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  IsDiscountGated = 'isDiscountGated',
  /** column name */
  Name = 'name',
  /** column name */
  PoapId = 'poapId',
  /** column name */
  Price = 'price',
}

/** input type for updating data in table "product" */
export type Product_Set_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  collection?: InputMaybe<Scalars['bpchar']>;
  curation?: InputMaybe<Scalars['bpchar']>;
  description?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['smallint']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['bpchar']>;
  isDiscountGated?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  poapId?: InputMaybe<Scalars['numeric']>;
  price?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Product_Stddev_Fields = {
  __typename?: 'product_stddev_fields';
  discount?: Maybe<Scalars['Float']>;
  poapId?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Product_Stddev_Pop_Fields = {
  __typename?: 'product_stddev_pop_fields';
  discount?: Maybe<Scalars['Float']>;
  poapId?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Product_Stddev_Samp_Fields = {
  __typename?: 'product_stddev_samp_fields';
  discount?: Maybe<Scalars['Float']>;
  poapId?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "product" */
export type Product_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Stream_Cursor_Value_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  collection?: InputMaybe<Scalars['bpchar']>;
  curation?: InputMaybe<Scalars['bpchar']>;
  description?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['smallint']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['bpchar']>;
  isDiscountGated?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  poapId?: InputMaybe<Scalars['numeric']>;
  price?: InputMaybe<Scalars['numeric']>;
};

/** aggregate sum on columns */
export type Product_Sum_Fields = {
  __typename?: 'product_sum_fields';
  discount?: Maybe<Scalars['smallint']>;
  poapId?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
};

/** update columns of table "product" */
export enum Product_Update_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  Collection = 'collection',
  /** column name */
  Curation = 'curation',
  /** column name */
  Description = 'description',
  /** column name */
  Discount = 'discount',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  IsDiscountGated = 'isDiscountGated',
  /** column name */
  Name = 'name',
  /** column name */
  PoapId = 'poapId',
  /** column name */
  Price = 'price',
}

export type Product_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Product_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Set_Input>;
  where: Product_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Product_Var_Pop_Fields = {
  __typename?: 'product_var_pop_fields';
  discount?: Maybe<Scalars['Float']>;
  poapId?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Product_Var_Samp_Fields = {
  __typename?: 'product_var_samp_fields';
  discount?: Maybe<Scalars['Float']>;
  poapId?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Product_Variance_Fields = {
  __typename?: 'product_variance_fields';
  discount?: Maybe<Scalars['Float']>;
  poapId?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "app" */
  app: Array<App>;
  /** fetch aggregated fields from the table: "app" */
  app_aggregate: App_Aggregate;
  /** fetch data from the table: "app" using primary key columns */
  app_by_pk?: Maybe<App>;
  /** fetch data from the table: "gate" */
  gate: Array<Gate>;
  /** fetch aggregated fields from the table: "gate" */
  gate_aggregate: Gate_Aggregate;
  /** fetch data from the table: "gate" using primary key columns */
  gate_by_pk?: Maybe<Gate>;
  /** fetch data from the table: "product" */
  product: Array<Product>;
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: Product_Aggregate;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>;
};

export type Query_RootAppArgs = {
  distinct_on?: InputMaybe<Array<App_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Order_By>>;
  where?: InputMaybe<App_Bool_Exp>;
};

export type Query_RootApp_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Order_By>>;
  where?: InputMaybe<App_Bool_Exp>;
};

export type Query_RootApp_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootGateArgs = {
  distinct_on?: InputMaybe<Array<Gate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gate_Order_By>>;
  where?: InputMaybe<Gate_Bool_Exp>;
};

export type Query_RootGate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gate_Order_By>>;
  where?: InputMaybe<Gate_Bool_Exp>;
};

export type Query_RootGate_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootProductArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};

export type Query_RootProduct_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};

export type Query_RootProduct_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']>;
  _gt?: InputMaybe<Scalars['smallint']>;
  _gte?: InputMaybe<Scalars['smallint']>;
  _in?: InputMaybe<Array<Scalars['smallint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['smallint']>;
  _lte?: InputMaybe<Scalars['smallint']>;
  _neq?: InputMaybe<Scalars['smallint']>;
  _nin?: InputMaybe<Array<Scalars['smallint']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "app" */
  app: Array<App>;
  /** fetch aggregated fields from the table: "app" */
  app_aggregate: App_Aggregate;
  /** fetch data from the table: "app" using primary key columns */
  app_by_pk?: Maybe<App>;
  /** fetch data from the table in a streaming manner: "app" */
  app_stream: Array<App>;
  /** fetch data from the table: "gate" */
  gate: Array<Gate>;
  /** fetch aggregated fields from the table: "gate" */
  gate_aggregate: Gate_Aggregate;
  /** fetch data from the table: "gate" using primary key columns */
  gate_by_pk?: Maybe<Gate>;
  /** fetch data from the table in a streaming manner: "gate" */
  gate_stream: Array<Gate>;
  /** fetch data from the table: "product" */
  product: Array<Product>;
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: Product_Aggregate;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>;
  /** fetch data from the table in a streaming manner: "product" */
  product_stream: Array<Product>;
};

export type Subscription_RootAppArgs = {
  distinct_on?: InputMaybe<Array<App_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Order_By>>;
  where?: InputMaybe<App_Bool_Exp>;
};

export type Subscription_RootApp_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Order_By>>;
  where?: InputMaybe<App_Bool_Exp>;
};

export type Subscription_RootApp_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootApp_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<App_Stream_Cursor_Input>>;
  where?: InputMaybe<App_Bool_Exp>;
};

export type Subscription_RootGateArgs = {
  distinct_on?: InputMaybe<Array<Gate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gate_Order_By>>;
  where?: InputMaybe<Gate_Bool_Exp>;
};

export type Subscription_RootGate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gate_Order_By>>;
  where?: InputMaybe<Gate_Bool_Exp>;
};

export type Subscription_RootGate_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootGate_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Gate_Stream_Cursor_Input>>;
  where?: InputMaybe<Gate_Bool_Exp>;
};

export type Subscription_RootProductArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};

export type Subscription_RootProduct_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};

export type Subscription_RootProduct_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootProduct_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Product_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Bool_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetAppQueryVariables = Exact<{
  appId: Scalars['uuid'];
}>;

export type GetAppQuery = {
  __typename?: 'query_root';
  app?: { __typename?: 'app'; id: any; name: string; imgUrl?: string | null } | null;
};

export type GetAdminQueryVariables = Exact<{
  appId: Scalars['uuid'];
}>;

export type GetAdminQuery = {
  __typename?: 'query_root';
  app?: { __typename?: 'app'; id: any; name: string; imgUrl?: string | null } | null;
  products: Array<{
    __typename?: 'product';
    collection?: any | null;
    curation?: any | null;
    discount?: any | null;
    id: any;
    image?: any | null;
    name: string;
    price: any;
    poapId?: any | null;
  }>;
};

export type UpdateAppMutationVariables = Exact<{
  appId: Scalars['uuid'];
  newName: Scalars['String'];
  newImgUrl: Scalars['String'];
}>;

export type UpdateAppMutation = {
  __typename?: 'mutation_root';
  update_app?: {
    __typename?: 'app_mutation_response';
    returning: Array<{ __typename?: 'app'; id: any; name: string; imgUrl?: string | null }>;
  } | null;
};

export type App_Mutation_ResponseFragmentFragment = {
  __typename?: 'app_mutation_response';
  returning: Array<{ __typename?: 'app'; id: any; name: string; imgUrl?: string | null }>;
};

export type CreateGateMutationVariables = Exact<{
  attributes: Scalars['jsonb'];
  contractAddress: Scalars['String'];
  discount: Scalars['numeric'];
  productId: Scalars['uuid'];
}>;

export type CreateGateMutation = {
  __typename?: 'mutation_root';
  insert_gate_one?: {
    __typename?: 'gate';
    attributes?: any | null;
    contractAddress: string;
    discount: any;
    id: any;
    product_id?: any | null;
  } | null;
};

export type DeleteGateFromIdMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type DeleteGateFromIdMutation = {
  __typename?: 'mutation_root';
  delete_gate?: {
    __typename?: 'gate_mutation_response';
    returning: Array<{ __typename?: 'gate'; id: any }>;
  } | null;
};

export type GetGateFromProductQueryVariables = Exact<{
  productId?: InputMaybe<Scalars['uuid']>;
}>;

export type GetGateFromProductQuery = {
  __typename?: 'query_root';
  gates: Array<{
    __typename?: 'gate';
    attributes?: any | null;
    contractAddress: string;
    discount: any;
    id: any;
    product_id?: any | null;
  }>;
};

export type CreateProductMutationVariables = Exact<{
  appId: Scalars['uuid'];
  price?: InputMaybe<Scalars['numeric']>;
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['bpchar']>;
  discount?: InputMaybe<Scalars['smallint']>;
  curation?: InputMaybe<Scalars['bpchar']>;
  collection?: InputMaybe<Scalars['bpchar']>;
  poapId?: InputMaybe<Scalars['numeric']>;
  isDiscountGated?: InputMaybe<Scalars['Boolean']>;
}>;

export type CreateProductMutation = {
  __typename?: 'mutation_root';
  insert_product_one?: {
    __typename?: 'product';
    app_id: any;
    collection?: any | null;
    curation?: any | null;
    discount?: any | null;
    id: any;
    image?: any | null;
    name: string;
    description?: string | null;
    price: any;
    poapId?: any | null;
    isDiscountGated: boolean;
  } | null;
};

export type DeleteProductMutationVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']>;
}>;

export type DeleteProductMutation = {
  __typename?: 'mutation_root';
  delete_product?: {
    __typename?: 'product_mutation_response';
    returning: Array<{ __typename?: 'product'; app_id: any }>;
  } | null;
};

export type EditProductMutationVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']>;
  collection?: InputMaybe<Scalars['bpchar']>;
  curation?: InputMaybe<Scalars['bpchar']>;
  discount?: InputMaybe<Scalars['smallint']>;
  image?: InputMaybe<Scalars['bpchar']>;
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  poapId?: InputMaybe<Scalars['numeric']>;
  isDiscountGated?: InputMaybe<Scalars['Boolean']>;
}>;

export type EditProductMutation = {
  __typename?: 'mutation_root';
  update_product?: {
    __typename?: 'product_mutation_response';
    returning: Array<{
      __typename?: 'product';
      collection?: any | null;
      curation?: any | null;
      discount?: any | null;
      id: any;
      image?: any | null;
      name: string;
      description?: string | null;
      price: any;
      poapId?: any | null;
      isDiscountGated: boolean;
    }>;
  } | null;
};

export type GetProductByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type GetProductByIdQuery = {
  __typename?: 'query_root';
  product_by_pk?: {
    __typename?: 'product';
    app_id: any;
    collection?: any | null;
    curation?: any | null;
    discount?: any | null;
    id: any;
    image?: any | null;
    name: string;
    description?: string | null;
    price: any;
    poapId?: any | null;
    isDiscountGated: boolean;
  } | null;
};

export type GetProductsQueryVariables = Exact<{
  appId: Scalars['uuid'];
}>;

export type GetProductsQuery = {
  __typename?: 'query_root';
  products: Array<{
    __typename?: 'product';
    app_id: any;
    collection?: any | null;
    curation?: any | null;
    discount?: any | null;
    id: any;
    image?: any | null;
    name: string;
    description?: string | null;
    price: any;
    poapId?: any | null;
    isDiscountGated: boolean;
  }>;
};

export const App_Mutation_ResponseFragmentFragmentDoc = gql`
  fragment app_mutation_responseFragment on app_mutation_response {
    returning {
      id
      name
      imgUrl
    }
  }
`;
export const GetAppDocument = gql`
  query getApp($appId: uuid!) {
    app: app_by_pk(id: $appId) {
      id
      name
      imgUrl
    }
  }
`;

/**
 * __useGetAppQuery__
 *
 * To run a query within a React component, call `useGetAppQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAppQuery({
 *   variables: {
 *      appId: // value for 'appId'
 *   },
 * });
 */
export function useGetAppQuery(
  baseOptions: Apollo.QueryHookOptions<GetAppQuery, GetAppQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAppQuery, GetAppQueryVariables>(GetAppDocument, options);
}
export function useGetAppLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAppQuery, GetAppQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAppQuery, GetAppQueryVariables>(GetAppDocument, options);
}
export type GetAppQueryHookResult = ReturnType<typeof useGetAppQuery>;
export type GetAppLazyQueryHookResult = ReturnType<typeof useGetAppLazyQuery>;
export type GetAppQueryResult = Apollo.QueryResult<GetAppQuery, GetAppQueryVariables>;
export const GetAdminDocument = gql`
  query getAdmin($appId: uuid!) {
    app: app_by_pk(id: $appId) {
      id
      name
      imgUrl
    }
    products: product(where: { app_id: { _eq: $appId } }) {
      collection
      curation
      discount
      id
      image
      name
      price
      poapId
    }
  }
`;

/**
 * __useGetAdminQuery__
 *
 * To run a query within a React component, call `useGetAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminQuery({
 *   variables: {
 *      appId: // value for 'appId'
 *   },
 * });
 */
export function useGetAdminQuery(
  baseOptions: Apollo.QueryHookOptions<GetAdminQuery, GetAdminQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAdminQuery, GetAdminQueryVariables>(GetAdminDocument, options);
}
export function useGetAdminLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAdminQuery, GetAdminQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAdminQuery, GetAdminQueryVariables>(GetAdminDocument, options);
}
export type GetAdminQueryHookResult = ReturnType<typeof useGetAdminQuery>;
export type GetAdminLazyQueryHookResult = ReturnType<typeof useGetAdminLazyQuery>;
export type GetAdminQueryResult = Apollo.QueryResult<GetAdminQuery, GetAdminQueryVariables>;
export const UpdateAppDocument = gql`
  mutation UpdateApp($appId: uuid!, $newName: String!, $newImgUrl: String!) {
    update_app(where: { id: { _eq: $appId } }, _set: { name: $newName, imgUrl: $newImgUrl }) {
      ...app_mutation_responseFragment
    }
  }
  ${App_Mutation_ResponseFragmentFragmentDoc}
`;
export type UpdateAppMutationFn = Apollo.MutationFunction<
  UpdateAppMutation,
  UpdateAppMutationVariables
>;

/**
 * __useUpdateAppMutation__
 *
 * To run a mutation, you first call `useUpdateAppMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAppMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAppMutation, { data, loading, error }] = useUpdateAppMutation({
 *   variables: {
 *      appId: // value for 'appId'
 *      newName: // value for 'newName'
 *      newImgUrl: // value for 'newImgUrl'
 *   },
 * });
 */
export function useUpdateAppMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateAppMutation, UpdateAppMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateAppMutation, UpdateAppMutationVariables>(
    UpdateAppDocument,
    options,
  );
}
export type UpdateAppMutationHookResult = ReturnType<typeof useUpdateAppMutation>;
export type UpdateAppMutationResult = Apollo.MutationResult<UpdateAppMutation>;
export type UpdateAppMutationOptions = Apollo.BaseMutationOptions<
  UpdateAppMutation,
  UpdateAppMutationVariables
>;
export const CreateGateDocument = gql`
  mutation CreateGate(
    $attributes: jsonb!
    $contractAddress: String!
    $discount: numeric!
    $productId: uuid!
  ) {
    insert_gate_one(
      object: {
        attributes: $attributes
        contractAddress: $contractAddress
        discount: $discount
        product_id: $productId
      }
    ) {
      attributes
      contractAddress
      discount
      id
      product_id
    }
  }
`;
export type CreateGateMutationFn = Apollo.MutationFunction<
  CreateGateMutation,
  CreateGateMutationVariables
>;

/**
 * __useCreateGateMutation__
 *
 * To run a mutation, you first call `useCreateGateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGateMutation, { data, loading, error }] = useCreateGateMutation({
 *   variables: {
 *      attributes: // value for 'attributes'
 *      contractAddress: // value for 'contractAddress'
 *      discount: // value for 'discount'
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useCreateGateMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateGateMutation, CreateGateMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateGateMutation, CreateGateMutationVariables>(
    CreateGateDocument,
    options,
  );
}
export type CreateGateMutationHookResult = ReturnType<typeof useCreateGateMutation>;
export type CreateGateMutationResult = Apollo.MutationResult<CreateGateMutation>;
export type CreateGateMutationOptions = Apollo.BaseMutationOptions<
  CreateGateMutation,
  CreateGateMutationVariables
>;
export const DeleteGateFromIdDocument = gql`
  mutation DeleteGateFromId($id: uuid!) {
    delete_gate(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;
export type DeleteGateFromIdMutationFn = Apollo.MutationFunction<
  DeleteGateFromIdMutation,
  DeleteGateFromIdMutationVariables
>;

/**
 * __useDeleteGateFromIdMutation__
 *
 * To run a mutation, you first call `useDeleteGateFromIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGateFromIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGateFromIdMutation, { data, loading, error }] = useDeleteGateFromIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteGateFromIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteGateFromIdMutation,
    DeleteGateFromIdMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteGateFromIdMutation, DeleteGateFromIdMutationVariables>(
    DeleteGateFromIdDocument,
    options,
  );
}
export type DeleteGateFromIdMutationHookResult = ReturnType<typeof useDeleteGateFromIdMutation>;
export type DeleteGateFromIdMutationResult = Apollo.MutationResult<DeleteGateFromIdMutation>;
export type DeleteGateFromIdMutationOptions = Apollo.BaseMutationOptions<
  DeleteGateFromIdMutation,
  DeleteGateFromIdMutationVariables
>;
export const GetGateFromProductDocument = gql`
  query GetGateFromProduct($productId: uuid) {
    gates: gate(where: { product_id: { _eq: $productId } }) {
      attributes
      contractAddress
      discount
      id
      product_id
    }
  }
`;

/**
 * __useGetGateFromProductQuery__
 *
 * To run a query within a React component, call `useGetGateFromProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGateFromProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGateFromProductQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useGetGateFromProductQuery(
  baseOptions?: Apollo.QueryHookOptions<GetGateFromProductQuery, GetGateFromProductQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetGateFromProductQuery, GetGateFromProductQueryVariables>(
    GetGateFromProductDocument,
    options,
  );
}
export function useGetGateFromProductLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetGateFromProductQuery,
    GetGateFromProductQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetGateFromProductQuery, GetGateFromProductQueryVariables>(
    GetGateFromProductDocument,
    options,
  );
}
export type GetGateFromProductQueryHookResult = ReturnType<typeof useGetGateFromProductQuery>;
export type GetGateFromProductLazyQueryHookResult = ReturnType<
  typeof useGetGateFromProductLazyQuery
>;
export type GetGateFromProductQueryResult = Apollo.QueryResult<
  GetGateFromProductQuery,
  GetGateFromProductQueryVariables
>;
export const CreateProductDocument = gql`
  mutation CreateProduct(
    $appId: uuid!
    $price: numeric
    $name: String
    $description: String
    $image: bpchar
    $discount: smallint
    $curation: bpchar
    $collection: bpchar
    $poapId: numeric
    $isDiscountGated: Boolean
  ) {
    insert_product_one(
      object: {
        app_id: $appId
        discount: $discount
        image: $image
        name: $name
        description: $description
        price: $price
        curation: $curation
        collection: $collection
        poapId: $poapId
        isDiscountGated: $isDiscountGated
      }
    ) {
      app_id
      collection
      curation
      discount
      id
      image
      name
      description
      price
      poapId
      isDiscountGated
    }
  }
`;
export type CreateProductMutationFn = Apollo.MutationFunction<
  CreateProductMutation,
  CreateProductMutationVariables
>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      appId: // value for 'appId'
 *      price: // value for 'price'
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      image: // value for 'image'
 *      discount: // value for 'discount'
 *      curation: // value for 'curation'
 *      collection: // value for 'collection'
 *      poapId: // value for 'poapId'
 *      isDiscountGated: // value for 'isDiscountGated'
 *   },
 * });
 */
export function useCreateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(
    CreateProductDocument,
    options,
  );
}
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<
  CreateProductMutation,
  CreateProductMutationVariables
>;
export const DeleteProductDocument = gql`
  mutation DeleteProduct($id: uuid) {
    delete_product(where: { id: { _eq: $id } }) {
      returning {
        app_id
      }
    }
  }
`;
export type DeleteProductMutationFn = Apollo.MutationFunction<
  DeleteProductMutation,
  DeleteProductMutationVariables
>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(
    DeleteProductDocument,
    options,
  );
}
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<
  DeleteProductMutation,
  DeleteProductMutationVariables
>;
export const EditProductDocument = gql`
  mutation EditProduct(
    $id: uuid
    $collection: bpchar
    $curation: bpchar
    $discount: smallint
    $image: bpchar
    $name: String
    $description: String
    $price: numeric
    $poapId: numeric
    $isDiscountGated: Boolean
  ) {
    update_product(
      _set: {
        collection: $collection
        curation: $curation
        discount: $discount
        image: $image
        name: $name
        description: $description
        price: $price
        poapId: $poapId
        isDiscountGated: $isDiscountGated
      }
      where: { id: { _eq: $id } }
    ) {
      returning {
        collection
        curation
        discount
        id
        image
        name
        description
        price
        poapId
        isDiscountGated
      }
    }
  }
`;
export type EditProductMutationFn = Apollo.MutationFunction<
  EditProductMutation,
  EditProductMutationVariables
>;

/**
 * __useEditProductMutation__
 *
 * To run a mutation, you first call `useEditProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editProductMutation, { data, loading, error }] = useEditProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *      collection: // value for 'collection'
 *      curation: // value for 'curation'
 *      discount: // value for 'discount'
 *      image: // value for 'image'
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      price: // value for 'price'
 *      poapId: // value for 'poapId'
 *      isDiscountGated: // value for 'isDiscountGated'
 *   },
 * });
 */
export function useEditProductMutation(
  baseOptions?: Apollo.MutationHookOptions<EditProductMutation, EditProductMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<EditProductMutation, EditProductMutationVariables>(
    EditProductDocument,
    options,
  );
}
export type EditProductMutationHookResult = ReturnType<typeof useEditProductMutation>;
export type EditProductMutationResult = Apollo.MutationResult<EditProductMutation>;
export type EditProductMutationOptions = Apollo.BaseMutationOptions<
  EditProductMutation,
  EditProductMutationVariables
>;
export const GetProductByIdDocument = gql`
  query GetProductById($id: uuid!) {
    product_by_pk(id: $id) {
      app_id
      collection
      curation
      discount
      id
      image
      name
      description
      price
      poapId
      isDiscountGated
    }
  }
`;

/**
 * __useGetProductByIdQuery__
 *
 * To run a query within a React component, call `useGetProductByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductByIdQuery(
  baseOptions: Apollo.QueryHookOptions<GetProductByIdQuery, GetProductByIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(
    GetProductByIdDocument,
    options,
  );
}
export function useGetProductByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetProductByIdQuery, GetProductByIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(
    GetProductByIdDocument,
    options,
  );
}
export type GetProductByIdQueryHookResult = ReturnType<typeof useGetProductByIdQuery>;
export type GetProductByIdLazyQueryHookResult = ReturnType<typeof useGetProductByIdLazyQuery>;
export type GetProductByIdQueryResult = Apollo.QueryResult<
  GetProductByIdQuery,
  GetProductByIdQueryVariables
>;
export const GetProductsDocument = gql`
  query GetProducts($appId: uuid!) {
    products: product(where: { app_id: { _eq: $appId } }) {
      app_id
      collection
      curation
      discount
      id
      image
      name
      description
      price
      poapId
      isDiscountGated
    }
  }
`;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *      appId: // value for 'appId'
 *   },
 * });
 */
export function useGetProductsQuery(
  baseOptions: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
}
export function useGetProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(
    GetProductsDocument,
    options,
  );
}
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<
  GetProductsQuery,
  GetProductsQueryVariables
>;
