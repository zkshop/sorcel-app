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
  jsonb: any;
  order_status: any;
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

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
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

/** app table */
export type App = {
  __typename?: 'app';
  deliveryTaxesTableName?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  imgUrl?: Maybe<Scalars['String']>;
  isZKP?: Maybe<Scalars['Boolean']>;
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
  deliveryTaxesTableName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  imgUrl?: InputMaybe<String_Comparison_Exp>;
  isZKP?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "app" */
export enum App_Constraint {
  /** unique or primary key constraint on columns "id" */
  AppPkey = 'app_pkey',
}

/** input type for inserting data into table "app" */
export type App_Insert_Input = {
  deliveryTaxesTableName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  imgUrl?: InputMaybe<Scalars['String']>;
  isZKP?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type App_Max_Fields = {
  __typename?: 'app_max_fields';
  deliveryTaxesTableName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  imgUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type App_Min_Fields = {
  __typename?: 'app_min_fields';
  deliveryTaxesTableName?: Maybe<Scalars['String']>;
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
  deliveryTaxesTableName?: InputMaybe<Order_By>;
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
  DeliveryTaxesTableName = 'deliveryTaxesTableName',
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
  deliveryTaxesTableName?: InputMaybe<Scalars['String']>;
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
  deliveryTaxesTableName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  imgUrl?: InputMaybe<Scalars['String']>;
  isZKP?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "app" */
export enum App_Update_Column {
  /** column name */
  DeliveryTaxesTableName = 'deliveryTaxesTableName',
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
  /** filter the rows which have to be updated */
  where: App_Bool_Exp;
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
  discount: Scalars['Int'];
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  product_id: Scalars['uuid'];
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
  discount?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  product_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "gate" */
export enum Gate_Constraint {
  /** unique or primary key constraint on columns "id" */
  GatePkey = 'Gate_pkey',
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
  discount?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "gate" */
export type Gate_Insert_Input = {
  attributes?: InputMaybe<Scalars['jsonb']>;
  contractAddress?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  product_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Gate_Max_Fields = {
  __typename?: 'gate_max_fields';
  contractAddress?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Gate_Min_Fields = {
  __typename?: 'gate_min_fields';
  contractAddress?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
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
  name?: InputMaybe<Order_By>;
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
  Name = 'name',
  /** column name */
  ProductId = 'product_id',
}

/** input type for updating data in table "gate" */
export type Gate_Set_Input = {
  attributes?: InputMaybe<Scalars['jsonb']>;
  contractAddress?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
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
  discount?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  product_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Gate_Sum_Fields = {
  __typename?: 'gate_sum_fields';
  discount?: Maybe<Scalars['Int']>;
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
  Name = 'name',
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
  /** filter the rows which have to be updated */
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
  /** delete data from the table: "order" */
  delete_order?: Maybe<Order_Mutation_Response>;
  /** delete single row from the table: "order" */
  delete_order_by_pk?: Maybe<Order>;
  /** delete data from the table: "product" */
  delete_product?: Maybe<Product_Mutation_Response>;
  /** delete single row from the table: "product" */
  delete_product_by_pk?: Maybe<Product>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "app" */
  insert_app?: Maybe<App_Mutation_Response>;
  /** insert a single row into the table: "app" */
  insert_app_one?: Maybe<App>;
  /** insert data into the table: "gate" */
  insert_gate?: Maybe<Gate_Mutation_Response>;
  /** insert a single row into the table: "gate" */
  insert_gate_one?: Maybe<Gate>;
  /** insert data into the table: "order" */
  insert_order?: Maybe<Order_Mutation_Response>;
  /** insert a single row into the table: "order" */
  insert_order_one?: Maybe<Order>;
  /** insert data into the table: "product" */
  insert_product?: Maybe<Product_Mutation_Response>;
  /** insert a single row into the table: "product" */
  insert_product_one?: Maybe<Product>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
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
  /** update data of the table: "order" */
  update_order?: Maybe<Order_Mutation_Response>;
  /** update single row of the table: "order" */
  update_order_by_pk?: Maybe<Order>;
  /** update multiples rows of table: "order" */
  update_order_many?: Maybe<Array<Maybe<Order_Mutation_Response>>>;
  /** update data of the table: "product" */
  update_product?: Maybe<Product_Mutation_Response>;
  /** update single row of the table: "product" */
  update_product_by_pk?: Maybe<Product>;
  /** update multiples rows of table: "product" */
  update_product_many?: Maybe<Array<Maybe<Product_Mutation_Response>>>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update multiples rows of table: "user" */
  update_user_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
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
export type Mutation_RootDelete_OrderArgs = {
  where: Order_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Order_By_PkArgs = {
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
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  email: Scalars['String'];
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
export type Mutation_RootInsert_OrderArgs = {
  objects: Array<Order_Insert_Input>;
  on_conflict?: InputMaybe<Order_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Order_OneArgs = {
  object: Order_Insert_Input;
  on_conflict?: InputMaybe<Order_On_Conflict>;
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
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
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
export type Mutation_RootUpdate_OrderArgs = {
  _set?: InputMaybe<Order_Set_Input>;
  where: Order_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Order_By_PkArgs = {
  _set?: InputMaybe<Order_Set_Input>;
  pk_columns: Order_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Order_ManyArgs = {
  updates: Array<Order_Updates>;
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

/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};

/** columns and relationships of "order" */
export type Order = {
  __typename?: 'order';
  address: Scalars['String'];
  app_id: Scalars['uuid'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  id: Scalars['uuid'];
  lastname: Scalars['String'];
  /** An object relationship */
  product: Product;
  product_id: Scalars['uuid'];
  status: Scalars['order_status'];
};

/** aggregated selection of "order" */
export type Order_Aggregate = {
  __typename?: 'order_aggregate';
  aggregate?: Maybe<Order_Aggregate_Fields>;
  nodes: Array<Order>;
};

/** aggregate fields of "order" */
export type Order_Aggregate_Fields = {
  __typename?: 'order_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Order_Max_Fields>;
  min?: Maybe<Order_Min_Fields>;
};

/** aggregate fields of "order" */
export type Order_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "order". All fields are combined with a logical 'AND'. */
export type Order_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Bool_Exp>>;
  _not?: InputMaybe<Order_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  app_id?: InputMaybe<Uuid_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  firstname?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lastname?: InputMaybe<String_Comparison_Exp>;
  product?: InputMaybe<Product_Bool_Exp>;
  product_id?: InputMaybe<Uuid_Comparison_Exp>;
  status?: InputMaybe<Order_Status_Comparison_Exp>;
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

/** unique or primary key constraints on table "order" */
export enum Order_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrderPkey = 'order_pkey',
}

/** input type for inserting data into table "order" */
export type Order_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  app_id?: InputMaybe<Scalars['uuid']>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastname?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<Product_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['order_status']>;
};

/** aggregate max on columns */
export type Order_Max_Fields = {
  __typename?: 'order_max_fields';
  address?: Maybe<Scalars['String']>;
  app_id?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastname?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['order_status']>;
};

/** aggregate min on columns */
export type Order_Min_Fields = {
  __typename?: 'order_min_fields';
  address?: Maybe<Scalars['String']>;
  app_id?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastname?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['order_status']>;
};

/** response of any mutation on the table "order" */
export type Order_Mutation_Response = {
  __typename?: 'order_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order>;
};

/** on_conflict condition type for table "order" */
export type Order_On_Conflict = {
  constraint: Order_Constraint;
  update_columns?: Array<Order_Update_Column>;
  where?: InputMaybe<Order_Bool_Exp>;
};

/** Ordering options when selecting data from "order". */
export type Order_Order_By = {
  address?: InputMaybe<Order_By>;
  app_id?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  firstname?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastname?: InputMaybe<Order_By>;
  product?: InputMaybe<Product_Order_By>;
  product_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order */
export type Order_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "order" */
export enum Order_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  AppId = 'app_id',
  /** column name */
  Email = 'email',
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Id = 'id',
  /** column name */
  Lastname = 'lastname',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Status = 'status',
}

/** input type for updating data in table "order" */
export type Order_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  app_id?: InputMaybe<Scalars['uuid']>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastname?: InputMaybe<Scalars['String']>;
  product_id?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['order_status']>;
};

/** Boolean expression to compare columns of type "order_status". All fields are combined with logical 'AND'. */
export type Order_Status_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['order_status']>;
  _gt?: InputMaybe<Scalars['order_status']>;
  _gte?: InputMaybe<Scalars['order_status']>;
  _in?: InputMaybe<Array<Scalars['order_status']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['order_status']>;
  _lte?: InputMaybe<Scalars['order_status']>;
  _neq?: InputMaybe<Scalars['order_status']>;
  _nin?: InputMaybe<Array<Scalars['order_status']>>;
};

/** Streaming cursor of the table "order" */
export type Order_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Order_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']>;
  app_id?: InputMaybe<Scalars['uuid']>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastname?: InputMaybe<Scalars['String']>;
  product_id?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['order_status']>;
};

/** update columns of table "order" */
export enum Order_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  AppId = 'app_id',
  /** column name */
  Email = 'email',
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Id = 'id',
  /** column name */
  Lastname = 'lastname',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Status = 'status',
}

export type Order_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Order_Set_Input>;
  /** filter the rows which have to be updated */
  where: Order_Bool_Exp;
};

/** columns and relationships of "product" */
export type Product = {
  __typename?: 'product';
  app_id: Scalars['uuid'];
  collection: Scalars['String'];
  curation?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  discount?: Maybe<Scalars['Int']>;
  id: Scalars['uuid'];
  image: Scalars['String'];
  isDiscountGated: Scalars['Boolean'];
  name: Scalars['String'];
  poapId?: Maybe<Scalars['Int']>;
  price: Scalars['Int'];
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
  collection?: InputMaybe<String_Comparison_Exp>;
  curation?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  discount?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  isDiscountGated?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  poapId?: InputMaybe<Int_Comparison_Exp>;
  price?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "product" */
export enum Product_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductPkey = 'product_pkey',
}

/** input type for incrementing numeric columns in table "product" */
export type Product_Inc_Input = {
  discount?: InputMaybe<Scalars['Int']>;
  poapId?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "product" */
export type Product_Insert_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  collection?: InputMaybe<Scalars['String']>;
  curation?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  isDiscountGated?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  poapId?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Product_Max_Fields = {
  __typename?: 'product_max_fields';
  app_id?: Maybe<Scalars['uuid']>;
  collection?: Maybe<Scalars['String']>;
  curation?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  poapId?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Product_Min_Fields = {
  __typename?: 'product_min_fields';
  app_id?: Maybe<Scalars['uuid']>;
  collection?: Maybe<Scalars['String']>;
  curation?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  poapId?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "product" */
export type Product_Mutation_Response = {
  __typename?: 'product_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Product>;
};

/** input type for inserting object relation for remote table "product" */
export type Product_Obj_Rel_Insert_Input = {
  data: Product_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_On_Conflict>;
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
  collection?: InputMaybe<Scalars['String']>;
  curation?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  isDiscountGated?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  poapId?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
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
  collection?: InputMaybe<Scalars['String']>;
  curation?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  isDiscountGated?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  poapId?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Product_Sum_Fields = {
  __typename?: 'product_sum_fields';
  discount?: Maybe<Scalars['Int']>;
  poapId?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
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
  /** filter the rows which have to be updated */
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
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: Order_Aggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk?: Maybe<Order>;
  /** fetch data from the table: "product" */
  product: Array<Product>;
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: Product_Aggregate;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
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

export type Query_RootOrderArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};

export type Query_RootOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};

export type Query_RootOrder_By_PkArgs = {
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

export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Query_RootUser_By_PkArgs = {
  email: Scalars['String'];
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
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: Order_Aggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk?: Maybe<Order>;
  /** fetch data from the table in a streaming manner: "order" */
  order_stream: Array<Order>;
  /** fetch data from the table: "product" */
  product: Array<Product>;
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: Product_Aggregate;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>;
  /** fetch data from the table in a streaming manner: "product" */
  product_stream: Array<Product>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "user" */
  user_stream: Array<User>;
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

export type Subscription_RootOrderArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};

export type Subscription_RootOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};

export type Subscription_RootOrder_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootOrder_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Order_Stream_Cursor_Input>>;
  where?: InputMaybe<Order_Bool_Exp>;
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

export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Subscription_RootUser_By_PkArgs = {
  email: Scalars['String'];
};

export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  app_id: Scalars['uuid'];
  email: Scalars['String'];
  id: Scalars['uuid'];
  role: Scalars['String'];
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};

/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  app_id?: InputMaybe<Uuid_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "email" */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint on columns "email" */
  UserPkey = 'user_pkey',
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  app_id?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  app_id?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  app_id?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  email: Scalars['String'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "user" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
}

export type User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Bool_Exp;
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
  app?: {
    __typename?: 'app';
    id: any;
    name: string;
    imgUrl?: string | null;
    deliveryTaxesTableName?: string | null;
  } | null;
};

export type GetAdminAppQueryVariables = Exact<{ [key: string]: never }>;

export type GetAdminAppQuery = {
  __typename?: 'query_root';
  app: Array<{ __typename?: 'app'; id: any; name: string; imgUrl?: string | null }>;
};

export type UpdateAppMutationVariables = Exact<{
  appId: Scalars['uuid'];
  newName: Scalars['String'];
  newImgUrl?: InputMaybe<Scalars['String']>;
}>;

export type UpdateAppMutation = {
  __typename?: 'mutation_root';
  update_app?: {
    __typename?: 'app_mutation_response';
    returning: Array<{ __typename?: 'app'; id: any; imgUrl?: string | null; name: string }>;
  } | null;
};

export type CreateGateMutationVariables = Exact<{
  attributes: Scalars['jsonb'];
  contractAddress: Scalars['String'];
  discount: Scalars['Int'];
  productId: Scalars['uuid'];
}>;

export type CreateGateMutation = {
  __typename?: 'mutation_root';
  insert_gate_one?: {
    __typename?: 'gate';
    attributes?: any | null;
    contractAddress: string;
    discount: number;
    id: any;
    product_id: any;
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

export type GetGatesQueryVariables = Exact<{ [key: string]: never }>;

export type GetGatesQuery = {
  __typename?: 'query_root';
  gates: Array<{
    __typename?: 'gate';
    attributes?: any | null;
    contractAddress: string;
    discount: number;
    id: any;
    product_id: any;
  }>;
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
    discount: number;
    id: any;
    product_id: any;
  }>;
};

export type CreateOrderMutationVariables = Exact<{
  address: Scalars['String'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  product_id: Scalars['uuid'];
  app_id: Scalars['uuid'];
}>;

export type CreateOrderMutation = {
  __typename?: 'mutation_root';
  insert_order_one?: {
    __typename?: 'order';
    address: string;
    app_id: any;
    email: string;
    firstname: string;
    id: any;
    lastname: string;
    product_id: any;
    status: any;
  } | null;
};

export type GetOrdersQueryVariables = Exact<{ [key: string]: never }>;

export type GetOrdersQuery = {
  __typename?: 'query_root';
  orders: Array<{
    __typename?: 'order';
    address: string;
    email: string;
    id: any;
    firstname: string;
    lastname: string;
    product_id: any;
    status: any;
    product: { __typename?: 'product'; image: string };
  }>;
};

export type CreateProductMutationVariables = Exact<{
  appId: Scalars['uuid'];
  price: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  discount?: InputMaybe<Scalars['Int']>;
  curation?: InputMaybe<Scalars['String']>;
  collection?: InputMaybe<Scalars['String']>;
  poapId?: InputMaybe<Scalars['Int']>;
  isDiscountGated?: InputMaybe<Scalars['Boolean']>;
}>;

export type CreateProductMutation = {
  __typename?: 'mutation_root';
  insert_product_one?: {
    __typename?: 'product';
    app_id: any;
    collection: string;
    curation?: string | null;
    discount?: number | null;
    id: any;
    image: string;
    name: string;
    description: string;
    price: number;
    poapId?: number | null;
    isDiscountGated: boolean;
  } | null;
};

export type CreateAdminProductMutationVariables = Exact<{
  price: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  discount?: InputMaybe<Scalars['Int']>;
  curation?: InputMaybe<Scalars['String']>;
  collection?: InputMaybe<Scalars['String']>;
  poapId?: InputMaybe<Scalars['Int']>;
  isDiscountGated?: InputMaybe<Scalars['Boolean']>;
}>;

export type CreateAdminProductMutation = {
  __typename?: 'mutation_root';
  insert_product_one?: {
    __typename?: 'product';
    app_id: any;
    collection: string;
    curation?: string | null;
    discount?: number | null;
    id: any;
    image: string;
    name: string;
    description: string;
    price: number;
    poapId?: number | null;
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
  id: Scalars['uuid'];
  collection: Scalars['String'];
  curation?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['Int']>;
  image: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  price: Scalars['Int'];
  poapId?: InputMaybe<Scalars['Int']>;
  isDiscountGated?: InputMaybe<Scalars['Boolean']>;
}>;

export type EditProductMutation = {
  __typename?: 'mutation_root';
  update_product?: {
    __typename?: 'product_mutation_response';
    returning: Array<{
      __typename?: 'product';
      collection: string;
      curation?: string | null;
      discount?: number | null;
      id: any;
      image: string;
      name: string;
      description: string;
      price: number;
      poapId?: number | null;
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
    collection: string;
    curation?: string | null;
    discount?: number | null;
    id: any;
    image: string;
    name: string;
    description: string;
    price: number;
    poapId?: number | null;
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
    collection: string;
    curation?: string | null;
    discount?: number | null;
    id: any;
    image: string;
    name: string;
    description: string;
    price: number;
    poapId?: number | null;
    isDiscountGated: boolean;
  }>;
};

export type GetAdminProductsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAdminProductsQuery = {
  __typename?: 'query_root';
  products: Array<{
    __typename?: 'product';
    app_id: any;
    collection: string;
    curation?: string | null;
    discount?: number | null;
    id: any;
    image: string;
    name: string;
    description: string;
    price: number;
    poapId?: number | null;
    isDiscountGated: boolean;
  }>;
};

export type GetUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserQuery = {
  __typename?: 'query_root';
  user: Array<{ __typename?: 'user'; app_id: any; id: any; role: string }>;
};

export const GetAppDocument = gql`
  query getApp($appId: uuid!) {
    app: app_by_pk(id: $appId) {
      id
      name
      imgUrl
      deliveryTaxesTableName
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
export const GetAdminAppDocument = gql`
  query getAdminApp {
    app {
      id
      name
      imgUrl
    }
  }
`;

/**
 * __useGetAdminAppQuery__
 *
 * To run a query within a React component, call `useGetAdminAppQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminAppQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminAppQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdminAppQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAdminAppQuery, GetAdminAppQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAdminAppQuery, GetAdminAppQueryVariables>(GetAdminAppDocument, options);
}
export function useGetAdminAppLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAdminAppQuery, GetAdminAppQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAdminAppQuery, GetAdminAppQueryVariables>(
    GetAdminAppDocument,
    options,
  );
}
export type GetAdminAppQueryHookResult = ReturnType<typeof useGetAdminAppQuery>;
export type GetAdminAppLazyQueryHookResult = ReturnType<typeof useGetAdminAppLazyQuery>;
export type GetAdminAppQueryResult = Apollo.QueryResult<
  GetAdminAppQuery,
  GetAdminAppQueryVariables
>;
export const UpdateAppDocument = gql`
  mutation UpdateApp($appId: uuid!, $newName: String!, $newImgUrl: String) {
    update_app(where: { id: { _eq: $appId } }, _set: { name: $newName, imgUrl: $newImgUrl }) {
      returning {
        id
        imgUrl
        name
      }
    }
  }
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
    $discount: Int!
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
export const GetGatesDocument = gql`
  query GetGates {
    gates: gate {
      attributes
      contractAddress
      discount
      id
      product_id
    }
  }
`;

/**
 * __useGetGatesQuery__
 *
 * To run a query within a React component, call `useGetGatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGatesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetGatesQuery, GetGatesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetGatesQuery, GetGatesQueryVariables>(GetGatesDocument, options);
}
export function useGetGatesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetGatesQuery, GetGatesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetGatesQuery, GetGatesQueryVariables>(GetGatesDocument, options);
}
export type GetGatesQueryHookResult = ReturnType<typeof useGetGatesQuery>;
export type GetGatesLazyQueryHookResult = ReturnType<typeof useGetGatesLazyQuery>;
export type GetGatesQueryResult = Apollo.QueryResult<GetGatesQuery, GetGatesQueryVariables>;
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
export const CreateOrderDocument = gql`
  mutation CreateOrder(
    $address: String!
    $email: String!
    $firstname: String!
    $lastname: String!
    $product_id: uuid!
    $app_id: uuid!
  ) {
    insert_order_one(
      object: {
        address: $address
        email: $email
        firstname: $firstname
        lastname: $lastname
        product_id: $product_id
        app_id: $app_id
      }
    ) {
      address
      app_id
      email
      firstname
      id
      lastname
      product_id
      status
    }
  }
`;
export type CreateOrderMutationFn = Apollo.MutationFunction<
  CreateOrderMutation,
  CreateOrderMutationVariables
>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      address: // value for 'address'
 *      email: // value for 'email'
 *      firstname: // value for 'firstname'
 *      lastname: // value for 'lastname'
 *      product_id: // value for 'product_id'
 *      app_id: // value for 'app_id'
 *   },
 * });
 */
export function useCreateOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(
    CreateOrderDocument,
    options,
  );
}
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<
  CreateOrderMutation,
  CreateOrderMutationVariables
>;
export const GetOrdersDocument = gql`
  query GetOrders {
    orders: order {
      address
      email
      id
      firstname
      lastname
      product_id
      status
      product {
        image
      }
    }
  }
`;

/**
 * __useGetOrdersQuery__
 *
 * To run a query within a React component, call `useGetOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOrdersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
}
export function useGetOrdersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
}
export type GetOrdersQueryHookResult = ReturnType<typeof useGetOrdersQuery>;
export type GetOrdersLazyQueryHookResult = ReturnType<typeof useGetOrdersLazyQuery>;
export type GetOrdersQueryResult = Apollo.QueryResult<GetOrdersQuery, GetOrdersQueryVariables>;
export const CreateProductDocument = gql`
  mutation CreateProduct(
    $appId: uuid!
    $price: Int!
    $name: String!
    $description: String!
    $image: String!
    $discount: Int
    $curation: String
    $collection: String
    $poapId: Int
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
export const CreateAdminProductDocument = gql`
  mutation CreateAdminProduct(
    $price: Int!
    $name: String!
    $description: String!
    $image: String!
    $discount: Int
    $curation: String
    $collection: String
    $poapId: Int
    $isDiscountGated: Boolean
  ) {
    insert_product_one(
      object: {
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
export type CreateAdminProductMutationFn = Apollo.MutationFunction<
  CreateAdminProductMutation,
  CreateAdminProductMutationVariables
>;

/**
 * __useCreateAdminProductMutation__
 *
 * To run a mutation, you first call `useCreateAdminProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAdminProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdminProductMutation, { data, loading, error }] = useCreateAdminProductMutation({
 *   variables: {
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
export function useCreateAdminProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateAdminProductMutation,
    CreateAdminProductMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateAdminProductMutation, CreateAdminProductMutationVariables>(
    CreateAdminProductDocument,
    options,
  );
}
export type CreateAdminProductMutationHookResult = ReturnType<typeof useCreateAdminProductMutation>;
export type CreateAdminProductMutationResult = Apollo.MutationResult<CreateAdminProductMutation>;
export type CreateAdminProductMutationOptions = Apollo.BaseMutationOptions<
  CreateAdminProductMutation,
  CreateAdminProductMutationVariables
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
    $id: uuid!
    $collection: String!
    $curation: String
    $discount: Int
    $image: String!
    $name: String
    $description: String!
    $price: Int!
    $poapId: Int
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
export const GetAdminProductsDocument = gql`
  query GetAdminProducts {
    products: product {
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
 * __useGetAdminProductsQuery__
 *
 * To run a query within a React component, call `useGetAdminProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdminProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAdminProductsQuery, GetAdminProductsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAdminProductsQuery, GetAdminProductsQueryVariables>(
    GetAdminProductsDocument,
    options,
  );
}
export function useGetAdminProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAdminProductsQuery, GetAdminProductsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAdminProductsQuery, GetAdminProductsQueryVariables>(
    GetAdminProductsDocument,
    options,
  );
}
export type GetAdminProductsQueryHookResult = ReturnType<typeof useGetAdminProductsQuery>;
export type GetAdminProductsLazyQueryHookResult = ReturnType<typeof useGetAdminProductsLazyQuery>;
export type GetAdminProductsQueryResult = Apollo.QueryResult<
  GetAdminProductsQuery,
  GetAdminProductsQueryVariables
>;
export const GetUserDocument = gql`
  query GetUser {
    user {
      app_id
      id
      role
    }
  }
`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
