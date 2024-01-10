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
  timestamptz: any;
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
  background_color?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deliveryTaxesTableName?: Maybe<Scalars['String']>;
  font?: Maybe<Scalars['String']>;
  font_color?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  imgUrl?: Maybe<Scalars['String']>;
  moneyAccountId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  plan?: Maybe<Plan_Enum>;
  show_brand?: Maybe<Scalars['Boolean']>;
  show_connect_email?: Maybe<Scalars['Boolean']>;
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
  background_color?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deliveryTaxesTableName?: InputMaybe<String_Comparison_Exp>;
  font?: InputMaybe<String_Comparison_Exp>;
  font_color?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  imgUrl?: InputMaybe<String_Comparison_Exp>;
  moneyAccountId?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  plan?: InputMaybe<Plan_Enum_Comparison_Exp>;
  show_brand?: InputMaybe<Boolean_Comparison_Exp>;
  show_connect_email?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "app" */
export enum App_Constraint {
  /** unique or primary key constraint on columns "id" */
  AppPkey = 'app_pkey',
}

/** input type for inserting data into table "app" */
export type App_Insert_Input = {
  background_color?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  deliveryTaxesTableName?: InputMaybe<Scalars['String']>;
  font?: InputMaybe<Scalars['String']>;
  font_color?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  imgUrl?: InputMaybe<Scalars['String']>;
  moneyAccountId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  plan?: InputMaybe<Plan_Enum>;
  show_brand?: InputMaybe<Scalars['Boolean']>;
  show_connect_email?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type App_Max_Fields = {
  __typename?: 'app_max_fields';
  background_color?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deliveryTaxesTableName?: Maybe<Scalars['String']>;
  font?: Maybe<Scalars['String']>;
  font_color?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  imgUrl?: Maybe<Scalars['String']>;
  moneyAccountId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type App_Min_Fields = {
  __typename?: 'app_min_fields';
  background_color?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deliveryTaxesTableName?: Maybe<Scalars['String']>;
  font?: Maybe<Scalars['String']>;
  font_color?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  imgUrl?: Maybe<Scalars['String']>;
  moneyAccountId?: Maybe<Scalars['String']>;
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

/** input type for inserting object relation for remote table "app" */
export type App_Obj_Rel_Insert_Input = {
  data: App_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<App_On_Conflict>;
};

/** on_conflict condition type for table "app" */
export type App_On_Conflict = {
  constraint: App_Constraint;
  update_columns?: Array<App_Update_Column>;
  where?: InputMaybe<App_Bool_Exp>;
};

/** Ordering options when selecting data from "app". */
export type App_Order_By = {
  background_color?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deliveryTaxesTableName?: InputMaybe<Order_By>;
  font?: InputMaybe<Order_By>;
  font_color?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imgUrl?: InputMaybe<Order_By>;
  moneyAccountId?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  plan?: InputMaybe<Order_By>;
  show_brand?: InputMaybe<Order_By>;
  show_connect_email?: InputMaybe<Order_By>;
};

/** primary key columns input for table: app */
export type App_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "app" */
export enum App_Select_Column {
  /** column name */
  BackgroundColor = 'background_color',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeliveryTaxesTableName = 'deliveryTaxesTableName',
  /** column name */
  Font = 'font',
  /** column name */
  FontColor = 'font_color',
  /** column name */
  Id = 'id',
  /** column name */
  ImgUrl = 'imgUrl',
  /** column name */
  MoneyAccountId = 'moneyAccountId',
  /** column name */
  Name = 'name',
  /** column name */
  Plan = 'plan',
  /** column name */
  ShowBrand = 'show_brand',
  /** column name */
  ShowConnectEmail = 'show_connect_email',
}

/** input type for updating data in table "app" */
export type App_Set_Input = {
  background_color?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  deliveryTaxesTableName?: InputMaybe<Scalars['String']>;
  font?: InputMaybe<Scalars['String']>;
  font_color?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  imgUrl?: InputMaybe<Scalars['String']>;
  moneyAccountId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  plan?: InputMaybe<Plan_Enum>;
  show_brand?: InputMaybe<Scalars['Boolean']>;
  show_connect_email?: InputMaybe<Scalars['Boolean']>;
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
  background_color?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  deliveryTaxesTableName?: InputMaybe<Scalars['String']>;
  font?: InputMaybe<Scalars['String']>;
  font_color?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  imgUrl?: InputMaybe<Scalars['String']>;
  moneyAccountId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  plan?: InputMaybe<Plan_Enum>;
  show_brand?: InputMaybe<Scalars['Boolean']>;
  show_connect_email?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "app" */
export enum App_Update_Column {
  /** column name */
  BackgroundColor = 'background_color',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeliveryTaxesTableName = 'deliveryTaxesTableName',
  /** column name */
  Font = 'font',
  /** column name */
  FontColor = 'font_color',
  /** column name */
  Id = 'id',
  /** column name */
  ImgUrl = 'imgUrl',
  /** column name */
  MoneyAccountId = 'moneyAccountId',
  /** column name */
  Name = 'name',
  /** column name */
  Plan = 'plan',
  /** column name */
  ShowBrand = 'show_brand',
  /** column name */
  ShowConnectEmail = 'show_connect_email',
}

export type App_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<App_Set_Input>;
  /** filter the rows which have to be updated */
  where: App_Bool_Exp;
};

/** columns and relationships of "chain_type" */
export type Chain_Type = {
  __typename?: 'chain_type';
  value: Scalars['String'];
};

/** aggregated selection of "chain_type" */
export type Chain_Type_Aggregate = {
  __typename?: 'chain_type_aggregate';
  aggregate?: Maybe<Chain_Type_Aggregate_Fields>;
  nodes: Array<Chain_Type>;
};

/** aggregate fields of "chain_type" */
export type Chain_Type_Aggregate_Fields = {
  __typename?: 'chain_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Chain_Type_Max_Fields>;
  min?: Maybe<Chain_Type_Min_Fields>;
};

/** aggregate fields of "chain_type" */
export type Chain_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Chain_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "chain_type". All fields are combined with a logical 'AND'. */
export type Chain_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Chain_Type_Bool_Exp>>;
  _not?: InputMaybe<Chain_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Chain_Type_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "chain_type" */
export enum Chain_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  ChainTypePkey = 'chain_type_pkey',
}

/** input type for inserting data into table "chain_type" */
export type Chain_Type_Insert_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Chain_Type_Max_Fields = {
  __typename?: 'chain_type_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Chain_Type_Min_Fields = {
  __typename?: 'chain_type_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "chain_type" */
export type Chain_Type_Mutation_Response = {
  __typename?: 'chain_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Chain_Type>;
};

/** on_conflict condition type for table "chain_type" */
export type Chain_Type_On_Conflict = {
  constraint: Chain_Type_Constraint;
  update_columns?: Array<Chain_Type_Update_Column>;
  where?: InputMaybe<Chain_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "chain_type". */
export type Chain_Type_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: chain_type */
export type Chain_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "chain_type" */
export enum Chain_Type_Select_Column {
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "chain_type" */
export type Chain_Type_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "chain_type" */
export type Chain_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Chain_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Chain_Type_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "chain_type" */
export enum Chain_Type_Update_Column {
  /** column name */
  Value = 'value',
}

export type Chain_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Chain_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Chain_Type_Bool_Exp;
};

/** columns and relationships of "choice" */
export type Choice = {
  __typename?: 'choice';
  count: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  poll_id: Scalars['uuid'];
  value: Scalars['String'];
};

/** aggregated selection of "choice" */
export type Choice_Aggregate = {
  __typename?: 'choice_aggregate';
  aggregate?: Maybe<Choice_Aggregate_Fields>;
  nodes: Array<Choice>;
};

export type Choice_Aggregate_Bool_Exp = {
  count?: InputMaybe<Choice_Aggregate_Bool_Exp_Count>;
};

export type Choice_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Choice_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Choice_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "choice" */
export type Choice_Aggregate_Fields = {
  __typename?: 'choice_aggregate_fields';
  avg?: Maybe<Choice_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Choice_Max_Fields>;
  min?: Maybe<Choice_Min_Fields>;
  stddev?: Maybe<Choice_Stddev_Fields>;
  stddev_pop?: Maybe<Choice_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Choice_Stddev_Samp_Fields>;
  sum?: Maybe<Choice_Sum_Fields>;
  var_pop?: Maybe<Choice_Var_Pop_Fields>;
  var_samp?: Maybe<Choice_Var_Samp_Fields>;
  variance?: Maybe<Choice_Variance_Fields>;
};

/** aggregate fields of "choice" */
export type Choice_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Choice_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "choice" */
export type Choice_Aggregate_Order_By = {
  avg?: InputMaybe<Choice_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Choice_Max_Order_By>;
  min?: InputMaybe<Choice_Min_Order_By>;
  stddev?: InputMaybe<Choice_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Choice_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Choice_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Choice_Sum_Order_By>;
  var_pop?: InputMaybe<Choice_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Choice_Var_Samp_Order_By>;
  variance?: InputMaybe<Choice_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "choice" */
export type Choice_Arr_Rel_Insert_Input = {
  data: Array<Choice_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Choice_On_Conflict>;
};

/** aggregate avg on columns */
export type Choice_Avg_Fields = {
  __typename?: 'choice_avg_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "choice" */
export type Choice_Avg_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "choice". All fields are combined with a logical 'AND'. */
export type Choice_Bool_Exp = {
  _and?: InputMaybe<Array<Choice_Bool_Exp>>;
  _not?: InputMaybe<Choice_Bool_Exp>;
  _or?: InputMaybe<Array<Choice_Bool_Exp>>;
  count?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  poll_id?: InputMaybe<Uuid_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "choice" */
export enum Choice_Constraint {
  /** unique or primary key constraint on columns "id" */
  ChoicePkey = 'choice_pkey',
}

/** input type for incrementing numeric columns in table "choice" */
export type Choice_Inc_Input = {
  count?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "choice" */
export type Choice_Insert_Input = {
  count?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  poll_id?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Choice_Max_Fields = {
  __typename?: 'choice_max_fields';
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  poll_id?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "choice" */
export type Choice_Max_Order_By = {
  count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  poll_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Choice_Min_Fields = {
  __typename?: 'choice_min_fields';
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  poll_id?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "choice" */
export type Choice_Min_Order_By = {
  count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  poll_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "choice" */
export type Choice_Mutation_Response = {
  __typename?: 'choice_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Choice>;
};

/** on_conflict condition type for table "choice" */
export type Choice_On_Conflict = {
  constraint: Choice_Constraint;
  update_columns?: Array<Choice_Update_Column>;
  where?: InputMaybe<Choice_Bool_Exp>;
};

/** Ordering options when selecting data from "choice". */
export type Choice_Order_By = {
  count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  poll_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: choice */
export type Choice_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "choice" */
export enum Choice_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PollId = 'poll_id',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "choice" */
export type Choice_Set_Input = {
  count?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  poll_id?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Choice_Stddev_Fields = {
  __typename?: 'choice_stddev_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "choice" */
export type Choice_Stddev_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Choice_Stddev_Pop_Fields = {
  __typename?: 'choice_stddev_pop_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "choice" */
export type Choice_Stddev_Pop_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Choice_Stddev_Samp_Fields = {
  __typename?: 'choice_stddev_samp_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "choice" */
export type Choice_Stddev_Samp_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "choice" */
export type Choice_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Choice_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Choice_Stream_Cursor_Value_Input = {
  count?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  poll_id?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Choice_Sum_Fields = {
  __typename?: 'choice_sum_fields';
  count?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "choice" */
export type Choice_Sum_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** update columns of table "choice" */
export enum Choice_Update_Column {
  /** column name */
  Count = 'count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PollId = 'poll_id',
  /** column name */
  Value = 'value',
}

export type Choice_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Choice_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Choice_Set_Input>;
  /** filter the rows which have to be updated */
  where: Choice_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Choice_Var_Pop_Fields = {
  __typename?: 'choice_var_pop_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "choice" */
export type Choice_Var_Pop_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Choice_Var_Samp_Fields = {
  __typename?: 'choice_var_samp_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "choice" */
export type Choice_Var_Samp_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Choice_Variance_Fields = {
  __typename?: 'choice_variance_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "choice" */
export type Choice_Variance_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** columns and relationships of "delivery_zone" */
export type Delivery_Zone = {
  __typename?: 'delivery_zone';
  /** An object relationship */
  app: App;
  app_id: Scalars['uuid'];
  countries: Scalars['jsonb'];
  fees: Scalars['Int'];
  id: Scalars['uuid'];
  name: Scalars['String'];
};

/** columns and relationships of "delivery_zone" */
export type Delivery_ZoneCountriesArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "delivery_zone" */
export type Delivery_Zone_Aggregate = {
  __typename?: 'delivery_zone_aggregate';
  aggregate?: Maybe<Delivery_Zone_Aggregate_Fields>;
  nodes: Array<Delivery_Zone>;
};

/** aggregate fields of "delivery_zone" */
export type Delivery_Zone_Aggregate_Fields = {
  __typename?: 'delivery_zone_aggregate_fields';
  avg?: Maybe<Delivery_Zone_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Delivery_Zone_Max_Fields>;
  min?: Maybe<Delivery_Zone_Min_Fields>;
  stddev?: Maybe<Delivery_Zone_Stddev_Fields>;
  stddev_pop?: Maybe<Delivery_Zone_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Delivery_Zone_Stddev_Samp_Fields>;
  sum?: Maybe<Delivery_Zone_Sum_Fields>;
  var_pop?: Maybe<Delivery_Zone_Var_Pop_Fields>;
  var_samp?: Maybe<Delivery_Zone_Var_Samp_Fields>;
  variance?: Maybe<Delivery_Zone_Variance_Fields>;
};

/** aggregate fields of "delivery_zone" */
export type Delivery_Zone_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Delivery_Zone_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Delivery_Zone_Append_Input = {
  countries?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Delivery_Zone_Avg_Fields = {
  __typename?: 'delivery_zone_avg_fields';
  fees?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "delivery_zone". All fields are combined with a logical 'AND'. */
export type Delivery_Zone_Bool_Exp = {
  _and?: InputMaybe<Array<Delivery_Zone_Bool_Exp>>;
  _not?: InputMaybe<Delivery_Zone_Bool_Exp>;
  _or?: InputMaybe<Array<Delivery_Zone_Bool_Exp>>;
  app?: InputMaybe<App_Bool_Exp>;
  app_id?: InputMaybe<Uuid_Comparison_Exp>;
  countries?: InputMaybe<Jsonb_Comparison_Exp>;
  fees?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "delivery_zone" */
export enum Delivery_Zone_Constraint {
  /** unique or primary key constraint on columns "id" */
  DeliveryZonePkey = 'delivery_zone_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Delivery_Zone_Delete_At_Path_Input = {
  countries?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Delivery_Zone_Delete_Elem_Input = {
  countries?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Delivery_Zone_Delete_Key_Input = {
  countries?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "delivery_zone" */
export type Delivery_Zone_Inc_Input = {
  fees?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "delivery_zone" */
export type Delivery_Zone_Insert_Input = {
  app?: InputMaybe<App_Obj_Rel_Insert_Input>;
  app_id?: InputMaybe<Scalars['uuid']>;
  countries?: InputMaybe<Scalars['jsonb']>;
  fees?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Delivery_Zone_Max_Fields = {
  __typename?: 'delivery_zone_max_fields';
  app_id?: Maybe<Scalars['uuid']>;
  fees?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Delivery_Zone_Min_Fields = {
  __typename?: 'delivery_zone_min_fields';
  app_id?: Maybe<Scalars['uuid']>;
  fees?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "delivery_zone" */
export type Delivery_Zone_Mutation_Response = {
  __typename?: 'delivery_zone_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Delivery_Zone>;
};

/** on_conflict condition type for table "delivery_zone" */
export type Delivery_Zone_On_Conflict = {
  constraint: Delivery_Zone_Constraint;
  update_columns?: Array<Delivery_Zone_Update_Column>;
  where?: InputMaybe<Delivery_Zone_Bool_Exp>;
};

/** Ordering options when selecting data from "delivery_zone". */
export type Delivery_Zone_Order_By = {
  app?: InputMaybe<App_Order_By>;
  app_id?: InputMaybe<Order_By>;
  countries?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: delivery_zone */
export type Delivery_Zone_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Delivery_Zone_Prepend_Input = {
  countries?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "delivery_zone" */
export enum Delivery_Zone_Select_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  Countries = 'countries',
  /** column name */
  Fees = 'fees',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "delivery_zone" */
export type Delivery_Zone_Set_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  countries?: InputMaybe<Scalars['jsonb']>;
  fees?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Delivery_Zone_Stddev_Fields = {
  __typename?: 'delivery_zone_stddev_fields';
  fees?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Delivery_Zone_Stddev_Pop_Fields = {
  __typename?: 'delivery_zone_stddev_pop_fields';
  fees?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Delivery_Zone_Stddev_Samp_Fields = {
  __typename?: 'delivery_zone_stddev_samp_fields';
  fees?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "delivery_zone" */
export type Delivery_Zone_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Delivery_Zone_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Delivery_Zone_Stream_Cursor_Value_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  countries?: InputMaybe<Scalars['jsonb']>;
  fees?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Delivery_Zone_Sum_Fields = {
  __typename?: 'delivery_zone_sum_fields';
  fees?: Maybe<Scalars['Int']>;
};

/** update columns of table "delivery_zone" */
export enum Delivery_Zone_Update_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  Countries = 'countries',
  /** column name */
  Fees = 'fees',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

export type Delivery_Zone_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Delivery_Zone_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Delivery_Zone_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Delivery_Zone_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Delivery_Zone_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Delivery_Zone_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Delivery_Zone_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Delivery_Zone_Set_Input>;
  /** filter the rows which have to be updated */
  where: Delivery_Zone_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Delivery_Zone_Var_Pop_Fields = {
  __typename?: 'delivery_zone_var_pop_fields';
  fees?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Delivery_Zone_Var_Samp_Fields = {
  __typename?: 'delivery_zone_var_samp_fields';
  fees?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Delivery_Zone_Variance_Fields = {
  __typename?: 'delivery_zone_variance_fields';
  fees?: Maybe<Scalars['Float']>;
};

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

/** columns and relationships of "gate_v2" */
export type Gate_V2 = {
  __typename?: 'gate_v2';
  app_id?: Maybe<Scalars['uuid']>;
  chain?: Maybe<Scalars['String']>;
  claims: Scalars['jsonb'];
  discount?: Maybe<Scalars['Int']>;
  exclusive_access: Scalars['Boolean'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An object relationship */
  product: Product;
  product_id: Scalars['uuid'];
  /** An array relationship */
  segments: Array<Segment>;
  /** An aggregate relationship */
  segments_aggregate: Segment_Aggregate;
  unique_claim: Scalars['Boolean'];
};

/** columns and relationships of "gate_v2" */
export type Gate_V2ClaimsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "gate_v2" */
export type Gate_V2SegmentsArgs = {
  distinct_on?: InputMaybe<Array<Segment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Segment_Order_By>>;
  where?: InputMaybe<Segment_Bool_Exp>;
};

/** columns and relationships of "gate_v2" */
export type Gate_V2Segments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Segment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Segment_Order_By>>;
  where?: InputMaybe<Segment_Bool_Exp>;
};

/** aggregated selection of "gate_v2" */
export type Gate_V2_Aggregate = {
  __typename?: 'gate_v2_aggregate';
  aggregate?: Maybe<Gate_V2_Aggregate_Fields>;
  nodes: Array<Gate_V2>;
};

export type Gate_V2_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Gate_V2_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Gate_V2_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Gate_V2_Aggregate_Bool_Exp_Count>;
};

export type Gate_V2_Aggregate_Bool_Exp_Bool_And = {
  arguments: Gate_V2_Select_Column_Gate_V2_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Gate_V2_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Gate_V2_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Gate_V2_Select_Column_Gate_V2_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Gate_V2_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Gate_V2_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Gate_V2_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Gate_V2_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "gate_v2" */
export type Gate_V2_Aggregate_Fields = {
  __typename?: 'gate_v2_aggregate_fields';
  avg?: Maybe<Gate_V2_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Gate_V2_Max_Fields>;
  min?: Maybe<Gate_V2_Min_Fields>;
  stddev?: Maybe<Gate_V2_Stddev_Fields>;
  stddev_pop?: Maybe<Gate_V2_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Gate_V2_Stddev_Samp_Fields>;
  sum?: Maybe<Gate_V2_Sum_Fields>;
  var_pop?: Maybe<Gate_V2_Var_Pop_Fields>;
  var_samp?: Maybe<Gate_V2_Var_Samp_Fields>;
  variance?: Maybe<Gate_V2_Variance_Fields>;
};

/** aggregate fields of "gate_v2" */
export type Gate_V2_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Gate_V2_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "gate_v2" */
export type Gate_V2_Aggregate_Order_By = {
  avg?: InputMaybe<Gate_V2_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Gate_V2_Max_Order_By>;
  min?: InputMaybe<Gate_V2_Min_Order_By>;
  stddev?: InputMaybe<Gate_V2_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Gate_V2_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Gate_V2_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Gate_V2_Sum_Order_By>;
  var_pop?: InputMaybe<Gate_V2_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Gate_V2_Var_Samp_Order_By>;
  variance?: InputMaybe<Gate_V2_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Gate_V2_Append_Input = {
  claims?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "gate_v2" */
export type Gate_V2_Arr_Rel_Insert_Input = {
  data: Array<Gate_V2_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Gate_V2_On_Conflict>;
};

/** aggregate avg on columns */
export type Gate_V2_Avg_Fields = {
  __typename?: 'gate_v2_avg_fields';
  discount?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "gate_v2" */
export type Gate_V2_Avg_Order_By = {
  discount?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "gate_v2". All fields are combined with a logical 'AND'. */
export type Gate_V2_Bool_Exp = {
  _and?: InputMaybe<Array<Gate_V2_Bool_Exp>>;
  _not?: InputMaybe<Gate_V2_Bool_Exp>;
  _or?: InputMaybe<Array<Gate_V2_Bool_Exp>>;
  app_id?: InputMaybe<Uuid_Comparison_Exp>;
  chain?: InputMaybe<String_Comparison_Exp>;
  claims?: InputMaybe<Jsonb_Comparison_Exp>;
  discount?: InputMaybe<Int_Comparison_Exp>;
  exclusive_access?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  product?: InputMaybe<Product_Bool_Exp>;
  product_id?: InputMaybe<Uuid_Comparison_Exp>;
  segments?: InputMaybe<Segment_Bool_Exp>;
  segments_aggregate?: InputMaybe<Segment_Aggregate_Bool_Exp>;
  unique_claim?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "gate_v2" */
export enum Gate_V2_Constraint {
  /** unique or primary key constraint on columns "id" */
  GateV2Pkey = 'gate_v2_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Gate_V2_Delete_At_Path_Input = {
  claims?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Gate_V2_Delete_Elem_Input = {
  claims?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Gate_V2_Delete_Key_Input = {
  claims?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "gate_v2" */
export type Gate_V2_Inc_Input = {
  discount?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "gate_v2" */
export type Gate_V2_Insert_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  chain?: InputMaybe<Scalars['String']>;
  claims?: InputMaybe<Scalars['jsonb']>;
  discount?: InputMaybe<Scalars['Int']>;
  exclusive_access?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<Product_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['uuid']>;
  segments?: InputMaybe<Segment_Arr_Rel_Insert_Input>;
  unique_claim?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Gate_V2_Max_Fields = {
  __typename?: 'gate_v2_max_fields';
  app_id?: Maybe<Scalars['uuid']>;
  chain?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "gate_v2" */
export type Gate_V2_Max_Order_By = {
  app_id?: InputMaybe<Order_By>;
  chain?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Gate_V2_Min_Fields = {
  __typename?: 'gate_v2_min_fields';
  app_id?: Maybe<Scalars['uuid']>;
  chain?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "gate_v2" */
export type Gate_V2_Min_Order_By = {
  app_id?: InputMaybe<Order_By>;
  chain?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "gate_v2" */
export type Gate_V2_Mutation_Response = {
  __typename?: 'gate_v2_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Gate_V2>;
};

/** on_conflict condition type for table "gate_v2" */
export type Gate_V2_On_Conflict = {
  constraint: Gate_V2_Constraint;
  update_columns?: Array<Gate_V2_Update_Column>;
  where?: InputMaybe<Gate_V2_Bool_Exp>;
};

/** Ordering options when selecting data from "gate_v2". */
export type Gate_V2_Order_By = {
  app_id?: InputMaybe<Order_By>;
  chain?: InputMaybe<Order_By>;
  claims?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  exclusive_access?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  product?: InputMaybe<Product_Order_By>;
  product_id?: InputMaybe<Order_By>;
  segments_aggregate?: InputMaybe<Segment_Aggregate_Order_By>;
  unique_claim?: InputMaybe<Order_By>;
};

/** primary key columns input for table: gate_v2 */
export type Gate_V2_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Gate_V2_Prepend_Input = {
  claims?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "gate_v2" */
export enum Gate_V2_Select_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  Chain = 'chain',
  /** column name */
  Claims = 'claims',
  /** column name */
  Discount = 'discount',
  /** column name */
  ExclusiveAccess = 'exclusive_access',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  UniqueClaim = 'unique_claim',
}

/** select "gate_v2_aggregate_bool_exp_bool_and_arguments_columns" columns of table "gate_v2" */
export enum Gate_V2_Select_Column_Gate_V2_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  ExclusiveAccess = 'exclusive_access',
  /** column name */
  UniqueClaim = 'unique_claim',
}

/** select "gate_v2_aggregate_bool_exp_bool_or_arguments_columns" columns of table "gate_v2" */
export enum Gate_V2_Select_Column_Gate_V2_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  ExclusiveAccess = 'exclusive_access',
  /** column name */
  UniqueClaim = 'unique_claim',
}

/** input type for updating data in table "gate_v2" */
export type Gate_V2_Set_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  chain?: InputMaybe<Scalars['String']>;
  claims?: InputMaybe<Scalars['jsonb']>;
  discount?: InputMaybe<Scalars['Int']>;
  exclusive_access?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  product_id?: InputMaybe<Scalars['uuid']>;
  unique_claim?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Gate_V2_Stddev_Fields = {
  __typename?: 'gate_v2_stddev_fields';
  discount?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "gate_v2" */
export type Gate_V2_Stddev_Order_By = {
  discount?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Gate_V2_Stddev_Pop_Fields = {
  __typename?: 'gate_v2_stddev_pop_fields';
  discount?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "gate_v2" */
export type Gate_V2_Stddev_Pop_Order_By = {
  discount?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Gate_V2_Stddev_Samp_Fields = {
  __typename?: 'gate_v2_stddev_samp_fields';
  discount?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "gate_v2" */
export type Gate_V2_Stddev_Samp_Order_By = {
  discount?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "gate_v2" */
export type Gate_V2_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Gate_V2_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Gate_V2_Stream_Cursor_Value_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  chain?: InputMaybe<Scalars['String']>;
  claims?: InputMaybe<Scalars['jsonb']>;
  discount?: InputMaybe<Scalars['Int']>;
  exclusive_access?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  product_id?: InputMaybe<Scalars['uuid']>;
  unique_claim?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate sum on columns */
export type Gate_V2_Sum_Fields = {
  __typename?: 'gate_v2_sum_fields';
  discount?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "gate_v2" */
export type Gate_V2_Sum_Order_By = {
  discount?: InputMaybe<Order_By>;
};

/** update columns of table "gate_v2" */
export enum Gate_V2_Update_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  Chain = 'chain',
  /** column name */
  Claims = 'claims',
  /** column name */
  Discount = 'discount',
  /** column name */
  ExclusiveAccess = 'exclusive_access',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  UniqueClaim = 'unique_claim',
}

export type Gate_V2_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Gate_V2_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Gate_V2_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Gate_V2_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Gate_V2_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Gate_V2_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Gate_V2_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Gate_V2_Set_Input>;
  /** filter the rows which have to be updated */
  where: Gate_V2_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Gate_V2_Var_Pop_Fields = {
  __typename?: 'gate_v2_var_pop_fields';
  discount?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "gate_v2" */
export type Gate_V2_Var_Pop_Order_By = {
  discount?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Gate_V2_Var_Samp_Fields = {
  __typename?: 'gate_v2_var_samp_fields';
  discount?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "gate_v2" */
export type Gate_V2_Var_Samp_Order_By = {
  discount?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Gate_V2_Variance_Fields = {
  __typename?: 'gate_v2_variance_fields';
  discount?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "gate_v2" */
export type Gate_V2_Variance_Order_By = {
  discount?: InputMaybe<Order_By>;
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
  /** delete data from the table: "chain_type" */
  delete_chain_type?: Maybe<Chain_Type_Mutation_Response>;
  /** delete single row from the table: "chain_type" */
  delete_chain_type_by_pk?: Maybe<Chain_Type>;
  /** delete data from the table: "choice" */
  delete_choice?: Maybe<Choice_Mutation_Response>;
  /** delete single row from the table: "choice" */
  delete_choice_by_pk?: Maybe<Choice>;
  /** delete data from the table: "delivery_zone" */
  delete_delivery_zone?: Maybe<Delivery_Zone_Mutation_Response>;
  /** delete single row from the table: "delivery_zone" */
  delete_delivery_zone_by_pk?: Maybe<Delivery_Zone>;
  /** delete data from the table: "gate" */
  delete_gate?: Maybe<Gate_Mutation_Response>;
  /** delete single row from the table: "gate" */
  delete_gate_by_pk?: Maybe<Gate>;
  /** delete data from the table: "gate_v2" */
  delete_gate_v2?: Maybe<Gate_V2_Mutation_Response>;
  /** delete single row from the table: "gate_v2" */
  delete_gate_v2_by_pk?: Maybe<Gate_V2>;
  /** delete data from the table: "network" */
  delete_network?: Maybe<Network_Mutation_Response>;
  /** delete single row from the table: "network" */
  delete_network_by_pk?: Maybe<Network>;
  /** delete data from the table: "order" */
  delete_order?: Maybe<Order_Mutation_Response>;
  /** delete single row from the table: "order" */
  delete_order_by_pk?: Maybe<Order>;
  /** delete data from the table: "plan" */
  delete_plan?: Maybe<Plan_Mutation_Response>;
  /** delete single row from the table: "plan" */
  delete_plan_by_pk?: Maybe<Plan>;
  /** delete data from the table: "poll" */
  delete_poll?: Maybe<Poll_Mutation_Response>;
  /** delete single row from the table: "poll" */
  delete_poll_by_pk?: Maybe<Poll>;
  /** delete data from the table: "product" */
  delete_product?: Maybe<Product_Mutation_Response>;
  /** delete single row from the table: "product" */
  delete_product_by_pk?: Maybe<Product>;
  /** delete data from the table: "product_type" */
  delete_product_type?: Maybe<Product_Type_Mutation_Response>;
  /** delete single row from the table: "product_type" */
  delete_product_type_by_pk?: Maybe<Product_Type>;
  /** delete data from the table: "segment" */
  delete_segment?: Maybe<Segment_Mutation_Response>;
  /** delete single row from the table: "segment" */
  delete_segment_by_pk?: Maybe<Segment>;
  /** delete data from the table: "segment_type" */
  delete_segment_type?: Maybe<Segment_Type_Mutation_Response>;
  /** delete single row from the table: "segment_type" */
  delete_segment_type_by_pk?: Maybe<Segment_Type>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "utility" */
  delete_utility?: Maybe<Utility_Mutation_Response>;
  /** delete single row from the table: "utility" */
  delete_utility_by_pk?: Maybe<Utility>;
  /** insert data into the table: "app" */
  insert_app?: Maybe<App_Mutation_Response>;
  /** insert a single row into the table: "app" */
  insert_app_one?: Maybe<App>;
  /** insert data into the table: "chain_type" */
  insert_chain_type?: Maybe<Chain_Type_Mutation_Response>;
  /** insert a single row into the table: "chain_type" */
  insert_chain_type_one?: Maybe<Chain_Type>;
  /** insert data into the table: "choice" */
  insert_choice?: Maybe<Choice_Mutation_Response>;
  /** insert a single row into the table: "choice" */
  insert_choice_one?: Maybe<Choice>;
  /** insert data into the table: "delivery_zone" */
  insert_delivery_zone?: Maybe<Delivery_Zone_Mutation_Response>;
  /** insert a single row into the table: "delivery_zone" */
  insert_delivery_zone_one?: Maybe<Delivery_Zone>;
  /** insert data into the table: "gate" */
  insert_gate?: Maybe<Gate_Mutation_Response>;
  /** insert a single row into the table: "gate" */
  insert_gate_one?: Maybe<Gate>;
  /** insert data into the table: "gate_v2" */
  insert_gate_v2?: Maybe<Gate_V2_Mutation_Response>;
  /** insert a single row into the table: "gate_v2" */
  insert_gate_v2_one?: Maybe<Gate_V2>;
  /** insert data into the table: "network" */
  insert_network?: Maybe<Network_Mutation_Response>;
  /** insert a single row into the table: "network" */
  insert_network_one?: Maybe<Network>;
  /** insert data into the table: "order" */
  insert_order?: Maybe<Order_Mutation_Response>;
  /** insert a single row into the table: "order" */
  insert_order_one?: Maybe<Order>;
  /** insert data into the table: "plan" */
  insert_plan?: Maybe<Plan_Mutation_Response>;
  /** insert a single row into the table: "plan" */
  insert_plan_one?: Maybe<Plan>;
  /** insert data into the table: "poll" */
  insert_poll?: Maybe<Poll_Mutation_Response>;
  /** insert a single row into the table: "poll" */
  insert_poll_one?: Maybe<Poll>;
  /** insert data into the table: "product" */
  insert_product?: Maybe<Product_Mutation_Response>;
  /** insert a single row into the table: "product" */
  insert_product_one?: Maybe<Product>;
  /** insert data into the table: "product_type" */
  insert_product_type?: Maybe<Product_Type_Mutation_Response>;
  /** insert a single row into the table: "product_type" */
  insert_product_type_one?: Maybe<Product_Type>;
  /** insert data into the table: "segment" */
  insert_segment?: Maybe<Segment_Mutation_Response>;
  /** insert a single row into the table: "segment" */
  insert_segment_one?: Maybe<Segment>;
  /** insert data into the table: "segment_type" */
  insert_segment_type?: Maybe<Segment_Type_Mutation_Response>;
  /** insert a single row into the table: "segment_type" */
  insert_segment_type_one?: Maybe<Segment_Type>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "utility" */
  insert_utility?: Maybe<Utility_Mutation_Response>;
  /** insert a single row into the table: "utility" */
  insert_utility_one?: Maybe<Utility>;
  /** update data of the table: "app" */
  update_app?: Maybe<App_Mutation_Response>;
  /** update single row of the table: "app" */
  update_app_by_pk?: Maybe<App>;
  /** update multiples rows of table: "app" */
  update_app_many?: Maybe<Array<Maybe<App_Mutation_Response>>>;
  /** update data of the table: "chain_type" */
  update_chain_type?: Maybe<Chain_Type_Mutation_Response>;
  /** update single row of the table: "chain_type" */
  update_chain_type_by_pk?: Maybe<Chain_Type>;
  /** update multiples rows of table: "chain_type" */
  update_chain_type_many?: Maybe<Array<Maybe<Chain_Type_Mutation_Response>>>;
  /** update data of the table: "choice" */
  update_choice?: Maybe<Choice_Mutation_Response>;
  /** update single row of the table: "choice" */
  update_choice_by_pk?: Maybe<Choice>;
  /** update multiples rows of table: "choice" */
  update_choice_many?: Maybe<Array<Maybe<Choice_Mutation_Response>>>;
  /** update data of the table: "delivery_zone" */
  update_delivery_zone?: Maybe<Delivery_Zone_Mutation_Response>;
  /** update single row of the table: "delivery_zone" */
  update_delivery_zone_by_pk?: Maybe<Delivery_Zone>;
  /** update multiples rows of table: "delivery_zone" */
  update_delivery_zone_many?: Maybe<Array<Maybe<Delivery_Zone_Mutation_Response>>>;
  /** update data of the table: "gate" */
  update_gate?: Maybe<Gate_Mutation_Response>;
  /** update single row of the table: "gate" */
  update_gate_by_pk?: Maybe<Gate>;
  /** update multiples rows of table: "gate" */
  update_gate_many?: Maybe<Array<Maybe<Gate_Mutation_Response>>>;
  /** update data of the table: "gate_v2" */
  update_gate_v2?: Maybe<Gate_V2_Mutation_Response>;
  /** update single row of the table: "gate_v2" */
  update_gate_v2_by_pk?: Maybe<Gate_V2>;
  /** update multiples rows of table: "gate_v2" */
  update_gate_v2_many?: Maybe<Array<Maybe<Gate_V2_Mutation_Response>>>;
  /** update data of the table: "network" */
  update_network?: Maybe<Network_Mutation_Response>;
  /** update single row of the table: "network" */
  update_network_by_pk?: Maybe<Network>;
  /** update multiples rows of table: "network" */
  update_network_many?: Maybe<Array<Maybe<Network_Mutation_Response>>>;
  /** update data of the table: "order" */
  update_order?: Maybe<Order_Mutation_Response>;
  /** update single row of the table: "order" */
  update_order_by_pk?: Maybe<Order>;
  /** update multiples rows of table: "order" */
  update_order_many?: Maybe<Array<Maybe<Order_Mutation_Response>>>;
  /** update data of the table: "plan" */
  update_plan?: Maybe<Plan_Mutation_Response>;
  /** update single row of the table: "plan" */
  update_plan_by_pk?: Maybe<Plan>;
  /** update multiples rows of table: "plan" */
  update_plan_many?: Maybe<Array<Maybe<Plan_Mutation_Response>>>;
  /** update data of the table: "poll" */
  update_poll?: Maybe<Poll_Mutation_Response>;
  /** update single row of the table: "poll" */
  update_poll_by_pk?: Maybe<Poll>;
  /** update multiples rows of table: "poll" */
  update_poll_many?: Maybe<Array<Maybe<Poll_Mutation_Response>>>;
  /** update data of the table: "product" */
  update_product?: Maybe<Product_Mutation_Response>;
  /** update single row of the table: "product" */
  update_product_by_pk?: Maybe<Product>;
  /** update multiples rows of table: "product" */
  update_product_many?: Maybe<Array<Maybe<Product_Mutation_Response>>>;
  /** update data of the table: "product_type" */
  update_product_type?: Maybe<Product_Type_Mutation_Response>;
  /** update single row of the table: "product_type" */
  update_product_type_by_pk?: Maybe<Product_Type>;
  /** update multiples rows of table: "product_type" */
  update_product_type_many?: Maybe<Array<Maybe<Product_Type_Mutation_Response>>>;
  /** update data of the table: "segment" */
  update_segment?: Maybe<Segment_Mutation_Response>;
  /** update single row of the table: "segment" */
  update_segment_by_pk?: Maybe<Segment>;
  /** update multiples rows of table: "segment" */
  update_segment_many?: Maybe<Array<Maybe<Segment_Mutation_Response>>>;
  /** update data of the table: "segment_type" */
  update_segment_type?: Maybe<Segment_Type_Mutation_Response>;
  /** update single row of the table: "segment_type" */
  update_segment_type_by_pk?: Maybe<Segment_Type>;
  /** update multiples rows of table: "segment_type" */
  update_segment_type_many?: Maybe<Array<Maybe<Segment_Type_Mutation_Response>>>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update multiples rows of table: "user" */
  update_user_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
  /** update data of the table: "utility" */
  update_utility?: Maybe<Utility_Mutation_Response>;
  /** update single row of the table: "utility" */
  update_utility_by_pk?: Maybe<Utility>;
  /** update multiples rows of table: "utility" */
  update_utility_many?: Maybe<Array<Maybe<Utility_Mutation_Response>>>;
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
export type Mutation_RootDelete_Chain_TypeArgs = {
  where: Chain_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Chain_Type_By_PkArgs = {
  value: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_ChoiceArgs = {
  where: Choice_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Choice_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Delivery_ZoneArgs = {
  where: Delivery_Zone_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Delivery_Zone_By_PkArgs = {
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
export type Mutation_RootDelete_Gate_V2Args = {
  where: Gate_V2_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Gate_V2_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_NetworkArgs = {
  where: Network_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Network_By_PkArgs = {
  value: Scalars['String'];
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
export type Mutation_RootDelete_PlanArgs = {
  where: Plan_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Plan_By_PkArgs = {
  value: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_PollArgs = {
  where: Poll_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Poll_By_PkArgs = {
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
export type Mutation_RootDelete_Product_TypeArgs = {
  where: Product_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Product_Type_By_PkArgs = {
  value: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_SegmentArgs = {
  where: Segment_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Segment_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Segment_TypeArgs = {
  where: Segment_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Segment_Type_By_PkArgs = {
  value: Scalars['String'];
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
export type Mutation_RootDelete_UtilityArgs = {
  where: Utility_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Utility_By_PkArgs = {
  value: Scalars['String'];
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
export type Mutation_RootInsert_Chain_TypeArgs = {
  objects: Array<Chain_Type_Insert_Input>;
  on_conflict?: InputMaybe<Chain_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Chain_Type_OneArgs = {
  object: Chain_Type_Insert_Input;
  on_conflict?: InputMaybe<Chain_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ChoiceArgs = {
  objects: Array<Choice_Insert_Input>;
  on_conflict?: InputMaybe<Choice_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Choice_OneArgs = {
  object: Choice_Insert_Input;
  on_conflict?: InputMaybe<Choice_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Delivery_ZoneArgs = {
  objects: Array<Delivery_Zone_Insert_Input>;
  on_conflict?: InputMaybe<Delivery_Zone_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Delivery_Zone_OneArgs = {
  object: Delivery_Zone_Insert_Input;
  on_conflict?: InputMaybe<Delivery_Zone_On_Conflict>;
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
export type Mutation_RootInsert_Gate_V2Args = {
  objects: Array<Gate_V2_Insert_Input>;
  on_conflict?: InputMaybe<Gate_V2_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Gate_V2_OneArgs = {
  object: Gate_V2_Insert_Input;
  on_conflict?: InputMaybe<Gate_V2_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_NetworkArgs = {
  objects: Array<Network_Insert_Input>;
  on_conflict?: InputMaybe<Network_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Network_OneArgs = {
  object: Network_Insert_Input;
  on_conflict?: InputMaybe<Network_On_Conflict>;
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
export type Mutation_RootInsert_PlanArgs = {
  objects: Array<Plan_Insert_Input>;
  on_conflict?: InputMaybe<Plan_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Plan_OneArgs = {
  object: Plan_Insert_Input;
  on_conflict?: InputMaybe<Plan_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PollArgs = {
  objects: Array<Poll_Insert_Input>;
  on_conflict?: InputMaybe<Poll_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Poll_OneArgs = {
  object: Poll_Insert_Input;
  on_conflict?: InputMaybe<Poll_On_Conflict>;
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
export type Mutation_RootInsert_Product_TypeArgs = {
  objects: Array<Product_Type_Insert_Input>;
  on_conflict?: InputMaybe<Product_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Product_Type_OneArgs = {
  object: Product_Type_Insert_Input;
  on_conflict?: InputMaybe<Product_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_SegmentArgs = {
  objects: Array<Segment_Insert_Input>;
  on_conflict?: InputMaybe<Segment_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Segment_OneArgs = {
  object: Segment_Insert_Input;
  on_conflict?: InputMaybe<Segment_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Segment_TypeArgs = {
  objects: Array<Segment_Type_Insert_Input>;
  on_conflict?: InputMaybe<Segment_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Segment_Type_OneArgs = {
  object: Segment_Type_Insert_Input;
  on_conflict?: InputMaybe<Segment_Type_On_Conflict>;
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
export type Mutation_RootInsert_UtilityArgs = {
  objects: Array<Utility_Insert_Input>;
  on_conflict?: InputMaybe<Utility_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Utility_OneArgs = {
  object: Utility_Insert_Input;
  on_conflict?: InputMaybe<Utility_On_Conflict>;
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
export type Mutation_RootUpdate_Chain_TypeArgs = {
  _set?: InputMaybe<Chain_Type_Set_Input>;
  where: Chain_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Chain_Type_By_PkArgs = {
  _set?: InputMaybe<Chain_Type_Set_Input>;
  pk_columns: Chain_Type_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Chain_Type_ManyArgs = {
  updates: Array<Chain_Type_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ChoiceArgs = {
  _inc?: InputMaybe<Choice_Inc_Input>;
  _set?: InputMaybe<Choice_Set_Input>;
  where: Choice_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Choice_By_PkArgs = {
  _inc?: InputMaybe<Choice_Inc_Input>;
  _set?: InputMaybe<Choice_Set_Input>;
  pk_columns: Choice_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Choice_ManyArgs = {
  updates: Array<Choice_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Delivery_ZoneArgs = {
  _append?: InputMaybe<Delivery_Zone_Append_Input>;
  _delete_at_path?: InputMaybe<Delivery_Zone_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Delivery_Zone_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Delivery_Zone_Delete_Key_Input>;
  _inc?: InputMaybe<Delivery_Zone_Inc_Input>;
  _prepend?: InputMaybe<Delivery_Zone_Prepend_Input>;
  _set?: InputMaybe<Delivery_Zone_Set_Input>;
  where: Delivery_Zone_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Delivery_Zone_By_PkArgs = {
  _append?: InputMaybe<Delivery_Zone_Append_Input>;
  _delete_at_path?: InputMaybe<Delivery_Zone_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Delivery_Zone_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Delivery_Zone_Delete_Key_Input>;
  _inc?: InputMaybe<Delivery_Zone_Inc_Input>;
  _prepend?: InputMaybe<Delivery_Zone_Prepend_Input>;
  _set?: InputMaybe<Delivery_Zone_Set_Input>;
  pk_columns: Delivery_Zone_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Delivery_Zone_ManyArgs = {
  updates: Array<Delivery_Zone_Updates>;
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
export type Mutation_RootUpdate_Gate_V2Args = {
  _append?: InputMaybe<Gate_V2_Append_Input>;
  _delete_at_path?: InputMaybe<Gate_V2_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Gate_V2_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Gate_V2_Delete_Key_Input>;
  _inc?: InputMaybe<Gate_V2_Inc_Input>;
  _prepend?: InputMaybe<Gate_V2_Prepend_Input>;
  _set?: InputMaybe<Gate_V2_Set_Input>;
  where: Gate_V2_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Gate_V2_By_PkArgs = {
  _append?: InputMaybe<Gate_V2_Append_Input>;
  _delete_at_path?: InputMaybe<Gate_V2_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Gate_V2_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Gate_V2_Delete_Key_Input>;
  _inc?: InputMaybe<Gate_V2_Inc_Input>;
  _prepend?: InputMaybe<Gate_V2_Prepend_Input>;
  _set?: InputMaybe<Gate_V2_Set_Input>;
  pk_columns: Gate_V2_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Gate_V2_ManyArgs = {
  updates: Array<Gate_V2_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_NetworkArgs = {
  _set?: InputMaybe<Network_Set_Input>;
  where: Network_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Network_By_PkArgs = {
  _set?: InputMaybe<Network_Set_Input>;
  pk_columns: Network_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Network_ManyArgs = {
  updates: Array<Network_Updates>;
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
export type Mutation_RootUpdate_PlanArgs = {
  _set?: InputMaybe<Plan_Set_Input>;
  where: Plan_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Plan_By_PkArgs = {
  _set?: InputMaybe<Plan_Set_Input>;
  pk_columns: Plan_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Plan_ManyArgs = {
  updates: Array<Plan_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_PollArgs = {
  _append?: InputMaybe<Poll_Append_Input>;
  _delete_at_path?: InputMaybe<Poll_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Poll_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Poll_Delete_Key_Input>;
  _prepend?: InputMaybe<Poll_Prepend_Input>;
  _set?: InputMaybe<Poll_Set_Input>;
  where: Poll_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Poll_By_PkArgs = {
  _append?: InputMaybe<Poll_Append_Input>;
  _delete_at_path?: InputMaybe<Poll_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Poll_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Poll_Delete_Key_Input>;
  _prepend?: InputMaybe<Poll_Prepend_Input>;
  _set?: InputMaybe<Poll_Set_Input>;
  pk_columns: Poll_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Poll_ManyArgs = {
  updates: Array<Poll_Updates>;
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
export type Mutation_RootUpdate_Product_TypeArgs = {
  _set?: InputMaybe<Product_Type_Set_Input>;
  where: Product_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Product_Type_By_PkArgs = {
  _set?: InputMaybe<Product_Type_Set_Input>;
  pk_columns: Product_Type_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Product_Type_ManyArgs = {
  updates: Array<Product_Type_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_SegmentArgs = {
  _append?: InputMaybe<Segment_Append_Input>;
  _delete_at_path?: InputMaybe<Segment_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Segment_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Segment_Delete_Key_Input>;
  _prepend?: InputMaybe<Segment_Prepend_Input>;
  _set?: InputMaybe<Segment_Set_Input>;
  where: Segment_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Segment_By_PkArgs = {
  _append?: InputMaybe<Segment_Append_Input>;
  _delete_at_path?: InputMaybe<Segment_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Segment_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Segment_Delete_Key_Input>;
  _prepend?: InputMaybe<Segment_Prepend_Input>;
  _set?: InputMaybe<Segment_Set_Input>;
  pk_columns: Segment_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Segment_ManyArgs = {
  updates: Array<Segment_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Segment_TypeArgs = {
  _set?: InputMaybe<Segment_Type_Set_Input>;
  where: Segment_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Segment_Type_By_PkArgs = {
  _set?: InputMaybe<Segment_Type_Set_Input>;
  pk_columns: Segment_Type_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Segment_Type_ManyArgs = {
  updates: Array<Segment_Type_Updates>;
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

/** mutation root */
export type Mutation_RootUpdate_UtilityArgs = {
  _set?: InputMaybe<Utility_Set_Input>;
  where: Utility_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Utility_By_PkArgs = {
  _set?: InputMaybe<Utility_Set_Input>;
  pk_columns: Utility_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Utility_ManyArgs = {
  updates: Array<Utility_Updates>;
};

/** columns and relationships of "network" */
export type Network = {
  __typename?: 'network';
  value: Scalars['String'];
};

/** aggregated selection of "network" */
export type Network_Aggregate = {
  __typename?: 'network_aggregate';
  aggregate?: Maybe<Network_Aggregate_Fields>;
  nodes: Array<Network>;
};

/** aggregate fields of "network" */
export type Network_Aggregate_Fields = {
  __typename?: 'network_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Network_Max_Fields>;
  min?: Maybe<Network_Min_Fields>;
};

/** aggregate fields of "network" */
export type Network_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Network_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "network". All fields are combined with a logical 'AND'. */
export type Network_Bool_Exp = {
  _and?: InputMaybe<Array<Network_Bool_Exp>>;
  _not?: InputMaybe<Network_Bool_Exp>;
  _or?: InputMaybe<Array<Network_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "network" */
export enum Network_Constraint {
  /** unique or primary key constraint on columns "value" */
  NetworkPkey = 'network_pkey',
}

export enum Network_Enum {
  Ethereum = 'ETHEREUM',
  Polygon = 'POLYGON',
  Xrpledger = 'XRPLEDGER',
}

/** Boolean expression to compare columns of type "network_enum". All fields are combined with logical 'AND'. */
export type Network_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Network_Enum>;
  _in?: InputMaybe<Array<Network_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Network_Enum>;
  _nin?: InputMaybe<Array<Network_Enum>>;
};

/** input type for inserting data into table "network" */
export type Network_Insert_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Network_Max_Fields = {
  __typename?: 'network_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Network_Min_Fields = {
  __typename?: 'network_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "network" */
export type Network_Mutation_Response = {
  __typename?: 'network_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Network>;
};

/** on_conflict condition type for table "network" */
export type Network_On_Conflict = {
  constraint: Network_Constraint;
  update_columns?: Array<Network_Update_Column>;
  where?: InputMaybe<Network_Bool_Exp>;
};

/** Ordering options when selecting data from "network". */
export type Network_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: network */
export type Network_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "network" */
export enum Network_Select_Column {
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "network" */
export type Network_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "network" */
export type Network_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Network_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Network_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "network" */
export enum Network_Update_Column {
  /** column name */
  Value = 'value',
}

export type Network_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Network_Set_Input>;
  /** filter the rows which have to be updated */
  where: Network_Bool_Exp;
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

/** columns and relationships of "plan" */
export type Plan = {
  __typename?: 'plan';
  value: Scalars['String'];
};

/** aggregated selection of "plan" */
export type Plan_Aggregate = {
  __typename?: 'plan_aggregate';
  aggregate?: Maybe<Plan_Aggregate_Fields>;
  nodes: Array<Plan>;
};

/** aggregate fields of "plan" */
export type Plan_Aggregate_Fields = {
  __typename?: 'plan_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Plan_Max_Fields>;
  min?: Maybe<Plan_Min_Fields>;
};

/** aggregate fields of "plan" */
export type Plan_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Plan_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "plan". All fields are combined with a logical 'AND'. */
export type Plan_Bool_Exp = {
  _and?: InputMaybe<Array<Plan_Bool_Exp>>;
  _not?: InputMaybe<Plan_Bool_Exp>;
  _or?: InputMaybe<Array<Plan_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "plan" */
export enum Plan_Constraint {
  /** unique or primary key constraint on columns "value" */
  PlanPkey = 'plan_pkey',
}

export enum Plan_Enum {
  Free = 'FREE',
  Pro = 'PRO',
}

/** Boolean expression to compare columns of type "plan_enum". All fields are combined with logical 'AND'. */
export type Plan_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Plan_Enum>;
  _in?: InputMaybe<Array<Plan_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Plan_Enum>;
  _nin?: InputMaybe<Array<Plan_Enum>>;
};

/** input type for inserting data into table "plan" */
export type Plan_Insert_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Plan_Max_Fields = {
  __typename?: 'plan_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Plan_Min_Fields = {
  __typename?: 'plan_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "plan" */
export type Plan_Mutation_Response = {
  __typename?: 'plan_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Plan>;
};

/** on_conflict condition type for table "plan" */
export type Plan_On_Conflict = {
  constraint: Plan_Constraint;
  update_columns?: Array<Plan_Update_Column>;
  where?: InputMaybe<Plan_Bool_Exp>;
};

/** Ordering options when selecting data from "plan". */
export type Plan_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: plan */
export type Plan_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "plan" */
export enum Plan_Select_Column {
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "plan" */
export type Plan_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "plan" */
export type Plan_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Plan_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Plan_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "plan" */
export enum Plan_Update_Column {
  /** column name */
  Value = 'value',
}

export type Plan_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Plan_Set_Input>;
  /** filter the rows which have to be updated */
  where: Plan_Bool_Exp;
};

/** columns and relationships of "poll" */
export type Poll = {
  __typename?: 'poll';
  app_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  choices: Array<Choice>;
  /** An aggregate relationship */
  choices_aggregate: Choice_Aggregate;
  completed: Scalars['Boolean'];
  created_at?: Maybe<Scalars['timestamptz']>;
  description: Scalars['String'];
  gate?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  image?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  voters: Scalars['jsonb'];
};

/** columns and relationships of "poll" */
export type PollChoicesArgs = {
  distinct_on?: InputMaybe<Array<Choice_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Choice_Order_By>>;
  where?: InputMaybe<Choice_Bool_Exp>;
};

/** columns and relationships of "poll" */
export type PollChoices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Choice_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Choice_Order_By>>;
  where?: InputMaybe<Choice_Bool_Exp>;
};

/** columns and relationships of "poll" */
export type PollVotersArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "poll" */
export type Poll_Aggregate = {
  __typename?: 'poll_aggregate';
  aggregate?: Maybe<Poll_Aggregate_Fields>;
  nodes: Array<Poll>;
};

/** aggregate fields of "poll" */
export type Poll_Aggregate_Fields = {
  __typename?: 'poll_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Poll_Max_Fields>;
  min?: Maybe<Poll_Min_Fields>;
};

/** aggregate fields of "poll" */
export type Poll_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Poll_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Poll_Append_Input = {
  voters?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "poll". All fields are combined with a logical 'AND'. */
export type Poll_Bool_Exp = {
  _and?: InputMaybe<Array<Poll_Bool_Exp>>;
  _not?: InputMaybe<Poll_Bool_Exp>;
  _or?: InputMaybe<Array<Poll_Bool_Exp>>;
  app_id?: InputMaybe<Uuid_Comparison_Exp>;
  choices?: InputMaybe<Choice_Bool_Exp>;
  choices_aggregate?: InputMaybe<Choice_Aggregate_Bool_Exp>;
  completed?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  gate?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  voters?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "poll" */
export enum Poll_Constraint {
  /** unique or primary key constraint on columns "id" */
  PollPkey = 'poll_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Poll_Delete_At_Path_Input = {
  voters?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Poll_Delete_Elem_Input = {
  voters?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Poll_Delete_Key_Input = {
  voters?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "poll" */
export type Poll_Insert_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  choices?: InputMaybe<Choice_Arr_Rel_Insert_Input>;
  completed?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  gate?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  voters?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type Poll_Max_Fields = {
  __typename?: 'poll_max_fields';
  app_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  gate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Poll_Min_Fields = {
  __typename?: 'poll_min_fields';
  app_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  gate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "poll" */
export type Poll_Mutation_Response = {
  __typename?: 'poll_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Poll>;
};

/** on_conflict condition type for table "poll" */
export type Poll_On_Conflict = {
  constraint: Poll_Constraint;
  update_columns?: Array<Poll_Update_Column>;
  where?: InputMaybe<Poll_Bool_Exp>;
};

/** Ordering options when selecting data from "poll". */
export type Poll_Order_By = {
  app_id?: InputMaybe<Order_By>;
  choices_aggregate?: InputMaybe<Choice_Aggregate_Order_By>;
  completed?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  gate?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  voters?: InputMaybe<Order_By>;
};

/** primary key columns input for table: poll */
export type Poll_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Poll_Prepend_Input = {
  voters?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "poll" */
export enum Poll_Select_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  Completed = 'completed',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Gate = 'gate',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Title = 'title',
  /** column name */
  Voters = 'voters',
}

/** input type for updating data in table "poll" */
export type Poll_Set_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  completed?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  gate?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  voters?: InputMaybe<Scalars['jsonb']>;
};

/** Streaming cursor of the table "poll" */
export type Poll_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Poll_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Poll_Stream_Cursor_Value_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  completed?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  gate?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  voters?: InputMaybe<Scalars['jsonb']>;
};

/** update columns of table "poll" */
export enum Poll_Update_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  Completed = 'completed',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Gate = 'gate',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Title = 'title',
  /** column name */
  Voters = 'voters',
}

export type Poll_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Poll_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Poll_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Poll_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Poll_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Poll_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Poll_Set_Input>;
  /** filter the rows which have to be updated */
  where: Poll_Bool_Exp;
};

/** columns and relationships of "product" */
export type Product = {
  __typename?: 'product';
  /** An object relationship */
  app: App;
  app_id: Scalars['uuid'];
  description: Scalars['String'];
  /** An array relationship */
  gate: Array<Gate_V2>;
  /** An aggregate relationship */
  gate_aggregate: Gate_V2_Aggregate;
  id: Scalars['uuid'];
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  type: Product_Type_Enum;
  webhookUrl?: Maybe<Scalars['String']>;
};

/** columns and relationships of "product" */
export type ProductGateArgs = {
  distinct_on?: InputMaybe<Array<Gate_V2_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gate_V2_Order_By>>;
  where?: InputMaybe<Gate_V2_Bool_Exp>;
};

/** columns and relationships of "product" */
export type ProductGate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gate_V2_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gate_V2_Order_By>>;
  where?: InputMaybe<Gate_V2_Bool_Exp>;
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
  price?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "product". All fields are combined with a logical 'AND'. */
export type Product_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Bool_Exp>>;
  _not?: InputMaybe<Product_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Bool_Exp>>;
  app?: InputMaybe<App_Bool_Exp>;
  app_id?: InputMaybe<Uuid_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  gate?: InputMaybe<Gate_V2_Bool_Exp>;
  gate_aggregate?: InputMaybe<Gate_V2_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Int_Comparison_Exp>;
  type?: InputMaybe<Product_Type_Enum_Comparison_Exp>;
  webhookUrl?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "product" */
export enum Product_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductPkey = 'product_pkey',
}

/** input type for incrementing numeric columns in table "product" */
export type Product_Inc_Input = {
  price?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "product" */
export type Product_Insert_Input = {
  app?: InputMaybe<App_Obj_Rel_Insert_Input>;
  app_id?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  gate?: InputMaybe<Gate_V2_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Product_Type_Enum>;
  webhookUrl?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Product_Max_Fields = {
  __typename?: 'product_max_fields';
  app_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  webhookUrl?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Product_Min_Fields = {
  __typename?: 'product_min_fields';
  app_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  webhookUrl?: Maybe<Scalars['String']>;
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
  app?: InputMaybe<App_Order_By>;
  app_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  gate_aggregate?: InputMaybe<Gate_V2_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  webhookUrl?: InputMaybe<Order_By>;
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
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Type = 'type',
  /** column name */
  WebhookUrl = 'webhookUrl',
}

/** input type for updating data in table "product" */
export type Product_Set_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Product_Type_Enum>;
  webhookUrl?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Product_Stddev_Fields = {
  __typename?: 'product_stddev_fields';
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Product_Stddev_Pop_Fields = {
  __typename?: 'product_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Product_Stddev_Samp_Fields = {
  __typename?: 'product_stddev_samp_fields';
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
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Product_Type_Enum>;
  webhookUrl?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Product_Sum_Fields = {
  __typename?: 'product_sum_fields';
  price?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "product_type" */
export type Product_Type = {
  __typename?: 'product_type';
  value: Scalars['String'];
};

/** aggregated selection of "product_type" */
export type Product_Type_Aggregate = {
  __typename?: 'product_type_aggregate';
  aggregate?: Maybe<Product_Type_Aggregate_Fields>;
  nodes: Array<Product_Type>;
};

/** aggregate fields of "product_type" */
export type Product_Type_Aggregate_Fields = {
  __typename?: 'product_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Product_Type_Max_Fields>;
  min?: Maybe<Product_Type_Min_Fields>;
};

/** aggregate fields of "product_type" */
export type Product_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "product_type". All fields are combined with a logical 'AND'. */
export type Product_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Type_Bool_Exp>>;
  _not?: InputMaybe<Product_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Type_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_type" */
export enum Product_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  ProductTypePkey = 'product_type_pkey',
}

export enum Product_Type_Enum {
  Commerce = 'COMMERCE',
  Modal = 'MODAL',
}

/** Boolean expression to compare columns of type "product_type_enum". All fields are combined with logical 'AND'. */
export type Product_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Product_Type_Enum>;
  _in?: InputMaybe<Array<Product_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Product_Type_Enum>;
  _nin?: InputMaybe<Array<Product_Type_Enum>>;
};

/** input type for inserting data into table "product_type" */
export type Product_Type_Insert_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Product_Type_Max_Fields = {
  __typename?: 'product_type_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Product_Type_Min_Fields = {
  __typename?: 'product_type_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "product_type" */
export type Product_Type_Mutation_Response = {
  __typename?: 'product_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Type>;
};

/** on_conflict condition type for table "product_type" */
export type Product_Type_On_Conflict = {
  constraint: Product_Type_Constraint;
  update_columns?: Array<Product_Type_Update_Column>;
  where?: InputMaybe<Product_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "product_type". */
export type Product_Type_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product_type */
export type Product_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "product_type" */
export enum Product_Type_Select_Column {
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "product_type" */
export type Product_Type_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "product_type" */
export type Product_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Type_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "product_type" */
export enum Product_Type_Update_Column {
  /** column name */
  Value = 'value',
}

export type Product_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Type_Bool_Exp;
};

/** update columns of table "product" */
export enum Product_Update_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Type = 'type',
  /** column name */
  WebhookUrl = 'webhookUrl',
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
  price?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Product_Var_Samp_Fields = {
  __typename?: 'product_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Product_Variance_Fields = {
  __typename?: 'product_variance_fields';
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
  /** fetch data from the table: "chain_type" */
  chain_type: Array<Chain_Type>;
  /** fetch aggregated fields from the table: "chain_type" */
  chain_type_aggregate: Chain_Type_Aggregate;
  /** fetch data from the table: "chain_type" using primary key columns */
  chain_type_by_pk?: Maybe<Chain_Type>;
  /** fetch data from the table: "choice" */
  choice: Array<Choice>;
  /** fetch aggregated fields from the table: "choice" */
  choice_aggregate: Choice_Aggregate;
  /** fetch data from the table: "choice" using primary key columns */
  choice_by_pk?: Maybe<Choice>;
  /** fetch data from the table: "delivery_zone" */
  delivery_zone: Array<Delivery_Zone>;
  /** fetch aggregated fields from the table: "delivery_zone" */
  delivery_zone_aggregate: Delivery_Zone_Aggregate;
  /** fetch data from the table: "delivery_zone" using primary key columns */
  delivery_zone_by_pk?: Maybe<Delivery_Zone>;
  /** fetch data from the table: "gate" */
  gate: Array<Gate>;
  /** fetch aggregated fields from the table: "gate" */
  gate_aggregate: Gate_Aggregate;
  /** fetch data from the table: "gate" using primary key columns */
  gate_by_pk?: Maybe<Gate>;
  /** fetch data from the table: "gate_v2" */
  gate_v2: Array<Gate_V2>;
  /** fetch aggregated fields from the table: "gate_v2" */
  gate_v2_aggregate: Gate_V2_Aggregate;
  /** fetch data from the table: "gate_v2" using primary key columns */
  gate_v2_by_pk?: Maybe<Gate_V2>;
  /** fetch data from the table: "network" */
  network: Array<Network>;
  /** fetch aggregated fields from the table: "network" */
  network_aggregate: Network_Aggregate;
  /** fetch data from the table: "network" using primary key columns */
  network_by_pk?: Maybe<Network>;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: Order_Aggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk?: Maybe<Order>;
  /** fetch data from the table: "plan" */
  plan: Array<Plan>;
  /** fetch aggregated fields from the table: "plan" */
  plan_aggregate: Plan_Aggregate;
  /** fetch data from the table: "plan" using primary key columns */
  plan_by_pk?: Maybe<Plan>;
  /** fetch data from the table: "poll" */
  poll: Array<Poll>;
  /** fetch aggregated fields from the table: "poll" */
  poll_aggregate: Poll_Aggregate;
  /** fetch data from the table: "poll" using primary key columns */
  poll_by_pk?: Maybe<Poll>;
  /** fetch data from the table: "product" */
  product: Array<Product>;
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: Product_Aggregate;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>;
  /** fetch data from the table: "product_type" */
  product_type: Array<Product_Type>;
  /** fetch aggregated fields from the table: "product_type" */
  product_type_aggregate: Product_Type_Aggregate;
  /** fetch data from the table: "product_type" using primary key columns */
  product_type_by_pk?: Maybe<Product_Type>;
  /** fetch data from the table: "segment" */
  segment: Array<Segment>;
  /** fetch aggregated fields from the table: "segment" */
  segment_aggregate: Segment_Aggregate;
  /** fetch data from the table: "segment" using primary key columns */
  segment_by_pk?: Maybe<Segment>;
  /** fetch data from the table: "segment_type" */
  segment_type: Array<Segment_Type>;
  /** fetch aggregated fields from the table: "segment_type" */
  segment_type_aggregate: Segment_Type_Aggregate;
  /** fetch data from the table: "segment_type" using primary key columns */
  segment_type_by_pk?: Maybe<Segment_Type>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "utility" */
  utility: Array<Utility>;
  /** fetch aggregated fields from the table: "utility" */
  utility_aggregate: Utility_Aggregate;
  /** fetch data from the table: "utility" using primary key columns */
  utility_by_pk?: Maybe<Utility>;
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

export type Query_RootChain_TypeArgs = {
  distinct_on?: InputMaybe<Array<Chain_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chain_Type_Order_By>>;
  where?: InputMaybe<Chain_Type_Bool_Exp>;
};

export type Query_RootChain_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chain_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chain_Type_Order_By>>;
  where?: InputMaybe<Chain_Type_Bool_Exp>;
};

export type Query_RootChain_Type_By_PkArgs = {
  value: Scalars['String'];
};

export type Query_RootChoiceArgs = {
  distinct_on?: InputMaybe<Array<Choice_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Choice_Order_By>>;
  where?: InputMaybe<Choice_Bool_Exp>;
};

export type Query_RootChoice_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Choice_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Choice_Order_By>>;
  where?: InputMaybe<Choice_Bool_Exp>;
};

export type Query_RootChoice_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootDelivery_ZoneArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Zone_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Delivery_Zone_Order_By>>;
  where?: InputMaybe<Delivery_Zone_Bool_Exp>;
};

export type Query_RootDelivery_Zone_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Zone_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Delivery_Zone_Order_By>>;
  where?: InputMaybe<Delivery_Zone_Bool_Exp>;
};

export type Query_RootDelivery_Zone_By_PkArgs = {
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

export type Query_RootGate_V2Args = {
  distinct_on?: InputMaybe<Array<Gate_V2_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gate_V2_Order_By>>;
  where?: InputMaybe<Gate_V2_Bool_Exp>;
};

export type Query_RootGate_V2_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gate_V2_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gate_V2_Order_By>>;
  where?: InputMaybe<Gate_V2_Bool_Exp>;
};

export type Query_RootGate_V2_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootNetworkArgs = {
  distinct_on?: InputMaybe<Array<Network_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Network_Order_By>>;
  where?: InputMaybe<Network_Bool_Exp>;
};

export type Query_RootNetwork_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Network_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Network_Order_By>>;
  where?: InputMaybe<Network_Bool_Exp>;
};

export type Query_RootNetwork_By_PkArgs = {
  value: Scalars['String'];
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

export type Query_RootPlanArgs = {
  distinct_on?: InputMaybe<Array<Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Plan_Order_By>>;
  where?: InputMaybe<Plan_Bool_Exp>;
};

export type Query_RootPlan_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Plan_Order_By>>;
  where?: InputMaybe<Plan_Bool_Exp>;
};

export type Query_RootPlan_By_PkArgs = {
  value: Scalars['String'];
};

export type Query_RootPollArgs = {
  distinct_on?: InputMaybe<Array<Poll_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Poll_Order_By>>;
  where?: InputMaybe<Poll_Bool_Exp>;
};

export type Query_RootPoll_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Poll_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Poll_Order_By>>;
  where?: InputMaybe<Poll_Bool_Exp>;
};

export type Query_RootPoll_By_PkArgs = {
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

export type Query_RootProduct_TypeArgs = {
  distinct_on?: InputMaybe<Array<Product_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Type_Order_By>>;
  where?: InputMaybe<Product_Type_Bool_Exp>;
};

export type Query_RootProduct_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Type_Order_By>>;
  where?: InputMaybe<Product_Type_Bool_Exp>;
};

export type Query_RootProduct_Type_By_PkArgs = {
  value: Scalars['String'];
};

export type Query_RootSegmentArgs = {
  distinct_on?: InputMaybe<Array<Segment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Segment_Order_By>>;
  where?: InputMaybe<Segment_Bool_Exp>;
};

export type Query_RootSegment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Segment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Segment_Order_By>>;
  where?: InputMaybe<Segment_Bool_Exp>;
};

export type Query_RootSegment_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootSegment_TypeArgs = {
  distinct_on?: InputMaybe<Array<Segment_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Segment_Type_Order_By>>;
  where?: InputMaybe<Segment_Type_Bool_Exp>;
};

export type Query_RootSegment_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Segment_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Segment_Type_Order_By>>;
  where?: InputMaybe<Segment_Type_Bool_Exp>;
};

export type Query_RootSegment_Type_By_PkArgs = {
  value: Scalars['String'];
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

export type Query_RootUtilityArgs = {
  distinct_on?: InputMaybe<Array<Utility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Utility_Order_By>>;
  where?: InputMaybe<Utility_Bool_Exp>;
};

export type Query_RootUtility_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Utility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Utility_Order_By>>;
  where?: InputMaybe<Utility_Bool_Exp>;
};

export type Query_RootUtility_By_PkArgs = {
  value: Scalars['String'];
};

/** columns and relationships of "segment" */
export type Segment = {
  __typename?: 'segment';
  gate_id?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  network?: Maybe<Network_Enum>;
  nft_contract_address?: Maybe<Scalars['String']>;
  poap_ids: Scalars['jsonb'];
  type: Segment_Type_Enum;
};

/** columns and relationships of "segment" */
export type SegmentPoap_IdsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "segment" */
export type Segment_Aggregate = {
  __typename?: 'segment_aggregate';
  aggregate?: Maybe<Segment_Aggregate_Fields>;
  nodes: Array<Segment>;
};

export type Segment_Aggregate_Bool_Exp = {
  count?: InputMaybe<Segment_Aggregate_Bool_Exp_Count>;
};

export type Segment_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Segment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Segment_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "segment" */
export type Segment_Aggregate_Fields = {
  __typename?: 'segment_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Segment_Max_Fields>;
  min?: Maybe<Segment_Min_Fields>;
};

/** aggregate fields of "segment" */
export type Segment_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Segment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "segment" */
export type Segment_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Segment_Max_Order_By>;
  min?: InputMaybe<Segment_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Segment_Append_Input = {
  poap_ids?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "segment" */
export type Segment_Arr_Rel_Insert_Input = {
  data: Array<Segment_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Segment_On_Conflict>;
};

/** Boolean expression to filter rows from the table "segment". All fields are combined with a logical 'AND'. */
export type Segment_Bool_Exp = {
  _and?: InputMaybe<Array<Segment_Bool_Exp>>;
  _not?: InputMaybe<Segment_Bool_Exp>;
  _or?: InputMaybe<Array<Segment_Bool_Exp>>;
  gate_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  network?: InputMaybe<Network_Enum_Comparison_Exp>;
  nft_contract_address?: InputMaybe<String_Comparison_Exp>;
  poap_ids?: InputMaybe<Jsonb_Comparison_Exp>;
  type?: InputMaybe<Segment_Type_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "segment" */
export enum Segment_Constraint {
  /** unique or primary key constraint on columns "id" */
  SegmentPkey = 'segment_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Segment_Delete_At_Path_Input = {
  poap_ids?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Segment_Delete_Elem_Input = {
  poap_ids?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Segment_Delete_Key_Input = {
  poap_ids?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "segment" */
export type Segment_Insert_Input = {
  gate_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  network?: InputMaybe<Network_Enum>;
  nft_contract_address?: InputMaybe<Scalars['String']>;
  poap_ids?: InputMaybe<Scalars['jsonb']>;
  type?: InputMaybe<Segment_Type_Enum>;
};

/** aggregate max on columns */
export type Segment_Max_Fields = {
  __typename?: 'segment_max_fields';
  gate_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  nft_contract_address?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "segment" */
export type Segment_Max_Order_By = {
  gate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nft_contract_address?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Segment_Min_Fields = {
  __typename?: 'segment_min_fields';
  gate_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  nft_contract_address?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "segment" */
export type Segment_Min_Order_By = {
  gate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nft_contract_address?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "segment" */
export type Segment_Mutation_Response = {
  __typename?: 'segment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Segment>;
};

/** on_conflict condition type for table "segment" */
export type Segment_On_Conflict = {
  constraint: Segment_Constraint;
  update_columns?: Array<Segment_Update_Column>;
  where?: InputMaybe<Segment_Bool_Exp>;
};

/** Ordering options when selecting data from "segment". */
export type Segment_Order_By = {
  gate_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  network?: InputMaybe<Order_By>;
  nft_contract_address?: InputMaybe<Order_By>;
  poap_ids?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: segment */
export type Segment_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Segment_Prepend_Input = {
  poap_ids?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "segment" */
export enum Segment_Select_Column {
  /** column name */
  GateId = 'gate_id',
  /** column name */
  Id = 'id',
  /** column name */
  Network = 'network',
  /** column name */
  NftContractAddress = 'nft_contract_address',
  /** column name */
  PoapIds = 'poap_ids',
  /** column name */
  Type = 'type',
}

/** input type for updating data in table "segment" */
export type Segment_Set_Input = {
  gate_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  network?: InputMaybe<Network_Enum>;
  nft_contract_address?: InputMaybe<Scalars['String']>;
  poap_ids?: InputMaybe<Scalars['jsonb']>;
  type?: InputMaybe<Segment_Type_Enum>;
};

/** Streaming cursor of the table "segment" */
export type Segment_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Segment_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Segment_Stream_Cursor_Value_Input = {
  gate_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  network?: InputMaybe<Network_Enum>;
  nft_contract_address?: InputMaybe<Scalars['String']>;
  poap_ids?: InputMaybe<Scalars['jsonb']>;
  type?: InputMaybe<Segment_Type_Enum>;
};

/** columns and relationships of "segment_type" */
export type Segment_Type = {
  __typename?: 'segment_type';
  value: Scalars['String'];
};

/** aggregated selection of "segment_type" */
export type Segment_Type_Aggregate = {
  __typename?: 'segment_type_aggregate';
  aggregate?: Maybe<Segment_Type_Aggregate_Fields>;
  nodes: Array<Segment_Type>;
};

/** aggregate fields of "segment_type" */
export type Segment_Type_Aggregate_Fields = {
  __typename?: 'segment_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Segment_Type_Max_Fields>;
  min?: Maybe<Segment_Type_Min_Fields>;
};

/** aggregate fields of "segment_type" */
export type Segment_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Segment_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "segment_type". All fields are combined with a logical 'AND'. */
export type Segment_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Segment_Type_Bool_Exp>>;
  _not?: InputMaybe<Segment_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Segment_Type_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "segment_type" */
export enum Segment_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  SegmentTypePkey = 'segment_type_pkey',
}

export enum Segment_Type_Enum {
  Nft = 'NFT',
  Poap = 'POAP',
}

/** Boolean expression to compare columns of type "segment_type_enum". All fields are combined with logical 'AND'. */
export type Segment_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Segment_Type_Enum>;
  _in?: InputMaybe<Array<Segment_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Segment_Type_Enum>;
  _nin?: InputMaybe<Array<Segment_Type_Enum>>;
};

/** input type for inserting data into table "segment_type" */
export type Segment_Type_Insert_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Segment_Type_Max_Fields = {
  __typename?: 'segment_type_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Segment_Type_Min_Fields = {
  __typename?: 'segment_type_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "segment_type" */
export type Segment_Type_Mutation_Response = {
  __typename?: 'segment_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Segment_Type>;
};

/** on_conflict condition type for table "segment_type" */
export type Segment_Type_On_Conflict = {
  constraint: Segment_Type_Constraint;
  update_columns?: Array<Segment_Type_Update_Column>;
  where?: InputMaybe<Segment_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "segment_type". */
export type Segment_Type_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: segment_type */
export type Segment_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "segment_type" */
export enum Segment_Type_Select_Column {
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "segment_type" */
export type Segment_Type_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "segment_type" */
export type Segment_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Segment_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Segment_Type_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "segment_type" */
export enum Segment_Type_Update_Column {
  /** column name */
  Value = 'value',
}

export type Segment_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Segment_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Segment_Type_Bool_Exp;
};

/** update columns of table "segment" */
export enum Segment_Update_Column {
  /** column name */
  GateId = 'gate_id',
  /** column name */
  Id = 'id',
  /** column name */
  Network = 'network',
  /** column name */
  NftContractAddress = 'nft_contract_address',
  /** column name */
  PoapIds = 'poap_ids',
  /** column name */
  Type = 'type',
}

export type Segment_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Segment_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Segment_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Segment_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Segment_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Segment_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Segment_Set_Input>;
  /** filter the rows which have to be updated */
  where: Segment_Bool_Exp;
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
  /** fetch data from the table: "chain_type" */
  chain_type: Array<Chain_Type>;
  /** fetch aggregated fields from the table: "chain_type" */
  chain_type_aggregate: Chain_Type_Aggregate;
  /** fetch data from the table: "chain_type" using primary key columns */
  chain_type_by_pk?: Maybe<Chain_Type>;
  /** fetch data from the table in a streaming manner: "chain_type" */
  chain_type_stream: Array<Chain_Type>;
  /** fetch data from the table: "choice" */
  choice: Array<Choice>;
  /** fetch aggregated fields from the table: "choice" */
  choice_aggregate: Choice_Aggregate;
  /** fetch data from the table: "choice" using primary key columns */
  choice_by_pk?: Maybe<Choice>;
  /** fetch data from the table in a streaming manner: "choice" */
  choice_stream: Array<Choice>;
  /** fetch data from the table: "delivery_zone" */
  delivery_zone: Array<Delivery_Zone>;
  /** fetch aggregated fields from the table: "delivery_zone" */
  delivery_zone_aggregate: Delivery_Zone_Aggregate;
  /** fetch data from the table: "delivery_zone" using primary key columns */
  delivery_zone_by_pk?: Maybe<Delivery_Zone>;
  /** fetch data from the table in a streaming manner: "delivery_zone" */
  delivery_zone_stream: Array<Delivery_Zone>;
  /** fetch data from the table: "gate" */
  gate: Array<Gate>;
  /** fetch aggregated fields from the table: "gate" */
  gate_aggregate: Gate_Aggregate;
  /** fetch data from the table: "gate" using primary key columns */
  gate_by_pk?: Maybe<Gate>;
  /** fetch data from the table in a streaming manner: "gate" */
  gate_stream: Array<Gate>;
  /** fetch data from the table: "gate_v2" */
  gate_v2: Array<Gate_V2>;
  /** fetch aggregated fields from the table: "gate_v2" */
  gate_v2_aggregate: Gate_V2_Aggregate;
  /** fetch data from the table: "gate_v2" using primary key columns */
  gate_v2_by_pk?: Maybe<Gate_V2>;
  /** fetch data from the table in a streaming manner: "gate_v2" */
  gate_v2_stream: Array<Gate_V2>;
  /** fetch data from the table: "network" */
  network: Array<Network>;
  /** fetch aggregated fields from the table: "network" */
  network_aggregate: Network_Aggregate;
  /** fetch data from the table: "network" using primary key columns */
  network_by_pk?: Maybe<Network>;
  /** fetch data from the table in a streaming manner: "network" */
  network_stream: Array<Network>;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: Order_Aggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk?: Maybe<Order>;
  /** fetch data from the table in a streaming manner: "order" */
  order_stream: Array<Order>;
  /** fetch data from the table: "plan" */
  plan: Array<Plan>;
  /** fetch aggregated fields from the table: "plan" */
  plan_aggregate: Plan_Aggregate;
  /** fetch data from the table: "plan" using primary key columns */
  plan_by_pk?: Maybe<Plan>;
  /** fetch data from the table in a streaming manner: "plan" */
  plan_stream: Array<Plan>;
  /** fetch data from the table: "poll" */
  poll: Array<Poll>;
  /** fetch aggregated fields from the table: "poll" */
  poll_aggregate: Poll_Aggregate;
  /** fetch data from the table: "poll" using primary key columns */
  poll_by_pk?: Maybe<Poll>;
  /** fetch data from the table in a streaming manner: "poll" */
  poll_stream: Array<Poll>;
  /** fetch data from the table: "product" */
  product: Array<Product>;
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: Product_Aggregate;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>;
  /** fetch data from the table in a streaming manner: "product" */
  product_stream: Array<Product>;
  /** fetch data from the table: "product_type" */
  product_type: Array<Product_Type>;
  /** fetch aggregated fields from the table: "product_type" */
  product_type_aggregate: Product_Type_Aggregate;
  /** fetch data from the table: "product_type" using primary key columns */
  product_type_by_pk?: Maybe<Product_Type>;
  /** fetch data from the table in a streaming manner: "product_type" */
  product_type_stream: Array<Product_Type>;
  /** fetch data from the table: "segment" */
  segment: Array<Segment>;
  /** fetch aggregated fields from the table: "segment" */
  segment_aggregate: Segment_Aggregate;
  /** fetch data from the table: "segment" using primary key columns */
  segment_by_pk?: Maybe<Segment>;
  /** fetch data from the table in a streaming manner: "segment" */
  segment_stream: Array<Segment>;
  /** fetch data from the table: "segment_type" */
  segment_type: Array<Segment_Type>;
  /** fetch aggregated fields from the table: "segment_type" */
  segment_type_aggregate: Segment_Type_Aggregate;
  /** fetch data from the table: "segment_type" using primary key columns */
  segment_type_by_pk?: Maybe<Segment_Type>;
  /** fetch data from the table in a streaming manner: "segment_type" */
  segment_type_stream: Array<Segment_Type>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "user" */
  user_stream: Array<User>;
  /** fetch data from the table: "utility" */
  utility: Array<Utility>;
  /** fetch aggregated fields from the table: "utility" */
  utility_aggregate: Utility_Aggregate;
  /** fetch data from the table: "utility" using primary key columns */
  utility_by_pk?: Maybe<Utility>;
  /** fetch data from the table in a streaming manner: "utility" */
  utility_stream: Array<Utility>;
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

export type Subscription_RootChain_TypeArgs = {
  distinct_on?: InputMaybe<Array<Chain_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chain_Type_Order_By>>;
  where?: InputMaybe<Chain_Type_Bool_Exp>;
};

export type Subscription_RootChain_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chain_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chain_Type_Order_By>>;
  where?: InputMaybe<Chain_Type_Bool_Exp>;
};

export type Subscription_RootChain_Type_By_PkArgs = {
  value: Scalars['String'];
};

export type Subscription_RootChain_Type_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Chain_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Chain_Type_Bool_Exp>;
};

export type Subscription_RootChoiceArgs = {
  distinct_on?: InputMaybe<Array<Choice_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Choice_Order_By>>;
  where?: InputMaybe<Choice_Bool_Exp>;
};

export type Subscription_RootChoice_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Choice_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Choice_Order_By>>;
  where?: InputMaybe<Choice_Bool_Exp>;
};

export type Subscription_RootChoice_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootChoice_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Choice_Stream_Cursor_Input>>;
  where?: InputMaybe<Choice_Bool_Exp>;
};

export type Subscription_RootDelivery_ZoneArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Zone_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Delivery_Zone_Order_By>>;
  where?: InputMaybe<Delivery_Zone_Bool_Exp>;
};

export type Subscription_RootDelivery_Zone_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Zone_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Delivery_Zone_Order_By>>;
  where?: InputMaybe<Delivery_Zone_Bool_Exp>;
};

export type Subscription_RootDelivery_Zone_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootDelivery_Zone_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Delivery_Zone_Stream_Cursor_Input>>;
  where?: InputMaybe<Delivery_Zone_Bool_Exp>;
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

export type Subscription_RootGate_V2Args = {
  distinct_on?: InputMaybe<Array<Gate_V2_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gate_V2_Order_By>>;
  where?: InputMaybe<Gate_V2_Bool_Exp>;
};

export type Subscription_RootGate_V2_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gate_V2_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gate_V2_Order_By>>;
  where?: InputMaybe<Gate_V2_Bool_Exp>;
};

export type Subscription_RootGate_V2_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootGate_V2_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Gate_V2_Stream_Cursor_Input>>;
  where?: InputMaybe<Gate_V2_Bool_Exp>;
};

export type Subscription_RootNetworkArgs = {
  distinct_on?: InputMaybe<Array<Network_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Network_Order_By>>;
  where?: InputMaybe<Network_Bool_Exp>;
};

export type Subscription_RootNetwork_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Network_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Network_Order_By>>;
  where?: InputMaybe<Network_Bool_Exp>;
};

export type Subscription_RootNetwork_By_PkArgs = {
  value: Scalars['String'];
};

export type Subscription_RootNetwork_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Network_Stream_Cursor_Input>>;
  where?: InputMaybe<Network_Bool_Exp>;
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

export type Subscription_RootPlanArgs = {
  distinct_on?: InputMaybe<Array<Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Plan_Order_By>>;
  where?: InputMaybe<Plan_Bool_Exp>;
};

export type Subscription_RootPlan_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Plan_Order_By>>;
  where?: InputMaybe<Plan_Bool_Exp>;
};

export type Subscription_RootPlan_By_PkArgs = {
  value: Scalars['String'];
};

export type Subscription_RootPlan_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Plan_Stream_Cursor_Input>>;
  where?: InputMaybe<Plan_Bool_Exp>;
};

export type Subscription_RootPollArgs = {
  distinct_on?: InputMaybe<Array<Poll_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Poll_Order_By>>;
  where?: InputMaybe<Poll_Bool_Exp>;
};

export type Subscription_RootPoll_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Poll_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Poll_Order_By>>;
  where?: InputMaybe<Poll_Bool_Exp>;
};

export type Subscription_RootPoll_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootPoll_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Poll_Stream_Cursor_Input>>;
  where?: InputMaybe<Poll_Bool_Exp>;
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

export type Subscription_RootProduct_TypeArgs = {
  distinct_on?: InputMaybe<Array<Product_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Type_Order_By>>;
  where?: InputMaybe<Product_Type_Bool_Exp>;
};

export type Subscription_RootProduct_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Type_Order_By>>;
  where?: InputMaybe<Product_Type_Bool_Exp>;
};

export type Subscription_RootProduct_Type_By_PkArgs = {
  value: Scalars['String'];
};

export type Subscription_RootProduct_Type_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Product_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Type_Bool_Exp>;
};

export type Subscription_RootSegmentArgs = {
  distinct_on?: InputMaybe<Array<Segment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Segment_Order_By>>;
  where?: InputMaybe<Segment_Bool_Exp>;
};

export type Subscription_RootSegment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Segment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Segment_Order_By>>;
  where?: InputMaybe<Segment_Bool_Exp>;
};

export type Subscription_RootSegment_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootSegment_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Segment_Stream_Cursor_Input>>;
  where?: InputMaybe<Segment_Bool_Exp>;
};

export type Subscription_RootSegment_TypeArgs = {
  distinct_on?: InputMaybe<Array<Segment_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Segment_Type_Order_By>>;
  where?: InputMaybe<Segment_Type_Bool_Exp>;
};

export type Subscription_RootSegment_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Segment_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Segment_Type_Order_By>>;
  where?: InputMaybe<Segment_Type_Bool_Exp>;
};

export type Subscription_RootSegment_Type_By_PkArgs = {
  value: Scalars['String'];
};

export type Subscription_RootSegment_Type_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Segment_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Segment_Type_Bool_Exp>;
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

export type Subscription_RootUtilityArgs = {
  distinct_on?: InputMaybe<Array<Utility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Utility_Order_By>>;
  where?: InputMaybe<Utility_Bool_Exp>;
};

export type Subscription_RootUtility_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Utility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Utility_Order_By>>;
  where?: InputMaybe<Utility_Bool_Exp>;
};

export type Subscription_RootUtility_By_PkArgs = {
  value: Scalars['String'];
};

export type Subscription_RootUtility_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Utility_Stream_Cursor_Input>>;
  where?: InputMaybe<Utility_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
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

/** columns and relationships of "utility" */
export type Utility = {
  __typename?: 'utility';
  value: Scalars['String'];
};

/** aggregated selection of "utility" */
export type Utility_Aggregate = {
  __typename?: 'utility_aggregate';
  aggregate?: Maybe<Utility_Aggregate_Fields>;
  nodes: Array<Utility>;
};

/** aggregate fields of "utility" */
export type Utility_Aggregate_Fields = {
  __typename?: 'utility_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Utility_Max_Fields>;
  min?: Maybe<Utility_Min_Fields>;
};

/** aggregate fields of "utility" */
export type Utility_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Utility_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "utility". All fields are combined with a logical 'AND'. */
export type Utility_Bool_Exp = {
  _and?: InputMaybe<Array<Utility_Bool_Exp>>;
  _not?: InputMaybe<Utility_Bool_Exp>;
  _or?: InputMaybe<Array<Utility_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "utility" */
export enum Utility_Constraint {
  /** unique or primary key constraint on columns "value" */
  UtilityPkey = 'utility_pkey',
}

/** input type for inserting data into table "utility" */
export type Utility_Insert_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Utility_Max_Fields = {
  __typename?: 'utility_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Utility_Min_Fields = {
  __typename?: 'utility_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "utility" */
export type Utility_Mutation_Response = {
  __typename?: 'utility_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Utility>;
};

/** on_conflict condition type for table "utility" */
export type Utility_On_Conflict = {
  constraint: Utility_Constraint;
  update_columns?: Array<Utility_Update_Column>;
  where?: InputMaybe<Utility_Bool_Exp>;
};

/** Ordering options when selecting data from "utility". */
export type Utility_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: utility */
export type Utility_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "utility" */
export enum Utility_Select_Column {
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "utility" */
export type Utility_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "utility" */
export type Utility_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Utility_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Utility_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "utility" */
export enum Utility_Update_Column {
  /** column name */
  Value = 'value',
}

export type Utility_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Utility_Set_Input>;
  /** filter the rows which have to be updated */
  where: Utility_Bool_Exp;
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
    show_brand?: boolean | null;
    show_connect_email?: boolean | null;
  } | null;
};

export type GetPlanQueryVariables = Exact<{
  appId: Scalars['uuid'];
}>;

export type GetPlanQuery = {
  __typename?: 'query_root';
  app?: { __typename?: 'app'; id: any; plan?: Plan_Enum | null } | null;
};

export type GetAppThemeQueryVariables = Exact<{
  appId: Scalars['uuid'];
}>;

export type GetAppThemeQuery = {
  __typename?: 'query_root';
  app?: {
    __typename?: 'app';
    id: any;
    background_color?: string | null;
    font?: string | null;
    font_color?: string | null;
  } | null;
};

export type GetAdminAppQueryVariables = Exact<{ [key: string]: never }>;

export type GetAdminAppQuery = {
  __typename?: 'query_root';
  app: Array<{
    __typename?: 'app';
    id: any;
    name: string;
    imgUrl?: string | null;
    moneyAccountId?: string | null;
    background_color?: string | null;
    font?: string | null;
    font_color?: string | null;
    show_brand?: boolean | null;
    show_connect_email?: boolean | null;
    plan?: Plan_Enum | null;
  }>;
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

export type UpdateCustomizationFieldsMutationVariables = Exact<{
  id: Scalars['uuid'];
  background_color?: InputMaybe<Scalars['String']>;
  font_color?: InputMaybe<Scalars['String']>;
  font?: InputMaybe<Scalars['String']>;
  show_brand?: InputMaybe<Scalars['Boolean']>;
  show_connect_email?: InputMaybe<Scalars['Boolean']>;
}>;

export type UpdateCustomizationFieldsMutation = {
  __typename?: 'mutation_root';
  update_app_by_pk?: {
    __typename?: 'app';
    background_color?: string | null;
    font?: string | null;
    font_color?: string | null;
    show_brand?: boolean | null;
    show_connect_email?: boolean | null;
  } | null;
};

export type CreateDeliveryZoneMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
  fees?: InputMaybe<Scalars['Int']>;
  countries?: InputMaybe<Scalars['jsonb']>;
}>;

export type CreateDeliveryZoneMutation = {
  __typename?: 'mutation_root';
  insert_delivery_zone?: {
    __typename?: 'delivery_zone_mutation_response';
    returning: Array<{
      __typename?: 'delivery_zone';
      app_id: any;
      countries: any;
      fees: number;
      id: any;
      name: string;
    }>;
  } | null;
};

export type DeleteDeliveryZoneMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type DeleteDeliveryZoneMutation = {
  __typename?: 'mutation_root';
  delete_delivery_zone_by_pk?: { __typename?: 'delivery_zone'; id: any } | null;
};

export type GetDeliveryZoneByAppIdQueryVariables = Exact<{
  _eq?: InputMaybe<Scalars['uuid']>;
}>;

export type GetDeliveryZoneByAppIdQuery = {
  __typename?: 'query_root';
  delivery_zone: Array<{
    __typename?: 'delivery_zone';
    name: string;
    id: any;
    fees: number;
    countries: any;
    app_id: any;
  }>;
};

export type GetDeliveryZonesQueryVariables = Exact<{ [key: string]: never }>;

export type GetDeliveryZonesQuery = {
  __typename?: 'query_root';
  delivery_zone: Array<{
    __typename?: 'delivery_zone';
    app_id: any;
    countries: any;
    fees: number;
    id: any;
    name: string;
  }>;
};

export type CreateGateV2MutationVariables = Exact<{
  discount?: InputMaybe<Scalars['Int']>;
  exclusive_access?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  product_id?: InputMaybe<Scalars['uuid']>;
  segments?: InputMaybe<Segment_Arr_Rel_Insert_Input>;
  unique_claim?: InputMaybe<Scalars['Boolean']>;
  chain?: InputMaybe<Scalars['String']>;
}>;

export type CreateGateV2Mutation = {
  __typename?: 'mutation_root';
  insert_gate_v2_one?: {
    __typename?: 'gate_v2';
    id: any;
    discount?: number | null;
    name: string;
  } | null;
};

export type GetEveryContractAddressByAppIdQueryVariables = Exact<{
  app_id: Scalars['uuid'];
}>;

export type GetEveryContractAddressByAppIdQuery = {
  __typename?: 'query_root';
  gate_v2: Array<{
    __typename?: 'gate_v2';
    segments: Array<{ __typename?: 'segment'; nft_contract_address?: string | null }>;
  }>;
};

export type GetGatesV2ByProductIdQueryVariables = Exact<{
  productId?: InputMaybe<Scalars['uuid']>;
}>;

export type GetGatesV2ByProductIdQuery = {
  __typename?: 'query_root';
  gate_v2: Array<{
    __typename?: 'gate_v2';
    app_id?: any | null;
    discount?: number | null;
    exclusive_access: boolean;
    id: any;
    name: string;
    product_id: any;
    claims: any;
    unique_claim: boolean;
    segments: Array<{
      __typename?: 'segment';
      type: Segment_Type_Enum;
      poap_ids: any;
      nft_contract_address?: string | null;
      network?: Network_Enum | null;
      id: any;
      gate_id?: any | null;
    }>;
  }>;
};

export type GetGates_V2QueryVariables = Exact<{ [key: string]: never }>;

export type GetGates_V2Query = {
  __typename?: 'query_root';
  gates: Array<{
    __typename?: 'gate_v2';
    name: string;
    id: any;
    exclusive_access: boolean;
    discount?: number | null;
    product: { __typename?: 'product'; id: any; image: string; name: string };
  }>;
};

export type GetGates_V2_ByAppIdQueryVariables = Exact<{
  app_id?: InputMaybe<Scalars['uuid']>;
}>;

export type GetGates_V2_ByAppIdQuery = {
  __typename?: 'query_root';
  gates: Array<{
    __typename?: 'gate_v2';
    product_id: any;
    name: string;
    id: any;
    exclusive_access: boolean;
    discount?: number | null;
    claims: any;
    unique_claim: boolean;
    segments: Array<{
      __typename?: 'segment';
      type: Segment_Type_Enum;
      nft_contract_address?: string | null;
      poap_ids: any;
      network?: Network_Enum | null;
      id: any;
    }>;
  }>;
};

export type PushClaimsMutationVariables = Exact<{
  gate_id: Scalars['uuid'];
  claims: Scalars['jsonb'];
}>;

export type PushClaimsMutation = {
  __typename?: 'mutation_root';
  update_gate_v2_by_pk?: { __typename?: 'gate_v2'; id: any; claims: any } | null;
};

export type DeleteGateV2MutationVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type DeleteGateV2Mutation = {
  __typename?: 'mutation_root';
  delete_gate_v2_by_pk?: { __typename?: 'gate_v2'; id: any } | null;
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
    id: any;
    product_id: any;
    attributes?: any | null;
    contractAddress: string;
    discount: number;
  }>;
};

export type GetProductGateQueryVariables = Exact<{
  productId?: InputMaybe<Scalars['uuid']>;
}>;

export type GetProductGateQuery = {
  __typename?: 'query_root';
  gates: Array<{
    __typename?: 'gate';
    id: any;
    product_id: any;
    attributes?: any | null;
    contractAddress: string;
    discount: number;
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

export type CreateSurveyOrderMutationVariables = Exact<{
  address: Scalars['String'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  product_id: Scalars['uuid'];
  app_id: Scalars['uuid'];
}>;

export type CreateSurveyOrderMutation = {
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

export type GetOrdersByAddressQueryVariables = Exact<{
  address: Scalars['String'];
}>;

export type GetOrdersByAddressQuery = {
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

export type CreatePollMutationVariables = Exact<{
  title: Scalars['String'];
  image: Scalars['String'];
  gate: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<Array<Choice_Insert_Input> | Choice_Insert_Input>;
}>;

export type CreatePollMutation = {
  __typename?: 'mutation_root';
  insert_poll?: { __typename?: 'poll_mutation_response'; affected_rows: number } | null;
};

export type DeletePollMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type DeletePollMutation = {
  __typename?: 'mutation_root';
  delete_poll_by_pk?: { __typename?: 'poll'; id: any } | null;
};

export type UpdatePollMutationVariables = Exact<{
  id: Scalars['uuid'];
  description?: InputMaybe<Scalars['String']>;
  gate?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  choice_to_delete?: InputMaybe<Array<Scalars['uuid']> | Scalars['uuid']>;
  choice_to_insert?: InputMaybe<Array<Choice_Insert_Input> | Choice_Insert_Input>;
}>;

export type UpdatePollMutation = {
  __typename?: 'mutation_root';
  update_poll_by_pk?: {
    __typename?: 'poll';
    id: any;
    app_id?: any | null;
    description: string;
    gate?: string | null;
    choices: Array<{ __typename?: 'choice'; count: number; id: any; poll_id: any; value: string }>;
  } | null;
  delete_choice?: { __typename?: 'choice_mutation_response'; affected_rows: number } | null;
  insert_choice?: { __typename?: 'choice_mutation_response'; affected_rows: number } | null;
};

export type GetPollByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type GetPollByIdQuery = {
  __typename?: 'query_root';
  poll?: {
    __typename?: 'poll';
    app_id?: any | null;
    gate?: string | null;
    id: any;
    title: string;
    voters: any;
    description: string;
    image?: string | null;
    completed: boolean;
    choices: Array<{ __typename?: 'choice'; id: any; poll_id: any; value: string; count: number }>;
  } | null;
};

export type GetPollsQueryVariables = Exact<{
  app_id: Scalars['uuid'];
}>;

export type GetPollsQuery = {
  __typename?: 'query_root';
  polls: Array<{
    __typename?: 'poll';
    id: any;
    title: string;
    voters: any;
    description: string;
    image?: string | null;
    completed: boolean;
  }>;
};

export type GetAdminPollsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAdminPollsQuery = {
  __typename?: 'query_root';
  polls: Array<{
    __typename?: 'poll';
    id: any;
    title: string;
    voters: any;
    description: string;
    image?: string | null;
    completed: boolean;
  }>;
};

export type TogglePollCompletedMutationVariables = Exact<{
  id: Scalars['uuid'];
  completed: Scalars['Boolean'];
}>;

export type TogglePollCompletedMutation = {
  __typename?: 'mutation_root';
  update_poll_by_pk?: { __typename?: 'poll'; id: any; completed: boolean } | null;
};

export type VoteMutationVariables = Exact<{
  pollId: Scalars['uuid'];
  voters?: InputMaybe<Scalars['jsonb']>;
  choiceId: Scalars['uuid'];
}>;

export type VoteMutation = {
  __typename?: 'mutation_root';
  choice?: { __typename?: 'choice'; id: any; count: number } | null;
  poll?: { __typename?: 'poll'; id: any; voters: any } | null;
};

export type CreateProductMutationVariables = Exact<{
  appId: Scalars['uuid'];
  price: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
}>;

export type CreateProductMutation = {
  __typename?: 'mutation_root';
  insert_product_one?: {
    __typename?: 'product';
    app_id: any;
    id: any;
    image: string;
    name: string;
    description: string;
    price: number;
    type: Product_Type_Enum;
  } | null;
};

export type CreateAdminProductMutationVariables = Exact<{
  price: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  type: Product_Type_Enum;
  webhookUrl?: InputMaybe<Scalars['String']>;
}>;

export type CreateAdminProductMutation = {
  __typename?: 'mutation_root';
  insert_product_one?: {
    __typename?: 'product';
    app_id: any;
    id: any;
    image: string;
    name: string;
    description: string;
    price: number;
    webhookUrl?: string | null;
    type: Product_Type_Enum;
  } | null;
};

export type DeleteProductMutationVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']>;
}>;

export type DeleteProductMutation = {
  __typename?: 'mutation_root';
  delete_product?: {
    __typename?: 'product_mutation_response';
    returning: Array<{ __typename?: 'product'; id: any; app_id: any }>;
  } | null;
};

export type EditProductMutationVariables = Exact<{
  id: Scalars['uuid'];
  image: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  price: Scalars['Int'];
  webhookUrl?: InputMaybe<Scalars['String']>;
}>;

export type EditProductMutation = {
  __typename?: 'mutation_root';
  update_product?: {
    __typename?: 'product_mutation_response';
    returning: Array<{
      __typename?: 'product';
      id: any;
      image: string;
      name: string;
      description: string;
      price: number;
    }>;
  } | null;
};

export type GateFieldsFragment = {
  __typename?: 'gate_v2';
  app_id?: any | null;
  product_id: any;
  id: any;
  name: string;
  discount?: number | null;
  exclusive_access: boolean;
  unique_claim: boolean;
  claims: any;
  segments: Array<{
    __typename?: 'segment';
    id: any;
    gate_id?: any | null;
    network?: Network_Enum | null;
    nft_contract_address?: string | null;
    poap_ids: any;
    type: Segment_Type_Enum;
  }>;
};

export type GetProductByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type GetProductByIdQuery = {
  __typename?: 'query_root';
  product?: {
    __typename?: 'product';
    app_id: any;
    id: any;
    image: string;
    name: string;
    description: string;
    price: number;
    type: Product_Type_Enum;
    webhookUrl?: string | null;
    app: {
      __typename?: 'app';
      id: any;
      deliveryTaxesTableName?: string | null;
      imgUrl?: string | null;
      name: string;
      moneyAccountId?: string | null;
    };
    gate: Array<{
      __typename?: 'gate_v2';
      app_id?: any | null;
      product_id: any;
      id: any;
      name: string;
      discount?: number | null;
      exclusive_access: boolean;
      unique_claim: boolean;
      claims: any;
      segments: Array<{
        __typename?: 'segment';
        id: any;
        gate_id?: any | null;
        network?: Network_Enum | null;
        nft_contract_address?: string | null;
        poap_ids: any;
        type: Segment_Type_Enum;
      }>;
    }>;
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
    id: any;
    image: string;
    name: string;
    description: string;
    price: number;
    type: Product_Type_Enum;
    webhookUrl?: string | null;
    gate: Array<{
      __typename?: 'gate_v2';
      app_id?: any | null;
      product_id: any;
      id: any;
      name: string;
      discount?: number | null;
      exclusive_access: boolean;
      unique_claim: boolean;
      claims: any;
      segments: Array<{
        __typename?: 'segment';
        id: any;
        gate_id?: any | null;
        network?: Network_Enum | null;
        nft_contract_address?: string | null;
        poap_ids: any;
        type: Segment_Type_Enum;
      }>;
    }>;
  }>;
};

export type GetAdminProductsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAdminProductsQuery = {
  __typename?: 'query_root';
  products: Array<{
    __typename?: 'product';
    app_id: any;
    id: any;
    image: string;
    name: string;
    description: string;
    price: number;
    type: Product_Type_Enum;
    webhookUrl?: string | null;
  }>;
};

export type GetUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserQuery = {
  __typename?: 'query_root';
  user: Array<{ __typename?: 'user'; app_id: any; id: any; role: string }>;
};

export const GateFieldsFragmentDoc = gql`
  fragment GateFields on gate_v2 {
    app_id
    product_id
    id
    name
    discount
    exclusive_access
    unique_claim
    segments {
      id
      gate_id
      network
      nft_contract_address
      poap_ids
      type
    }
    claims
  }
`;
export const GetAppDocument = gql`
  query getApp($appId: uuid!) {
    app: app_by_pk(id: $appId) {
      id
      name
      imgUrl
      deliveryTaxesTableName
      show_brand
      show_connect_email
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
export const GetPlanDocument = gql`
  query getPlan($appId: uuid!) {
    app: app_by_pk(id: $appId) {
      id
      plan
    }
  }
`;

/**
 * __useGetPlanQuery__
 *
 * To run a query within a React component, call `useGetPlanQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlanQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlanQuery({
 *   variables: {
 *      appId: // value for 'appId'
 *   },
 * });
 */
export function useGetPlanQuery(
  baseOptions: Apollo.QueryHookOptions<GetPlanQuery, GetPlanQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPlanQuery, GetPlanQueryVariables>(GetPlanDocument, options);
}
export function useGetPlanLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPlanQuery, GetPlanQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPlanQuery, GetPlanQueryVariables>(GetPlanDocument, options);
}
export type GetPlanQueryHookResult = ReturnType<typeof useGetPlanQuery>;
export type GetPlanLazyQueryHookResult = ReturnType<typeof useGetPlanLazyQuery>;
export type GetPlanQueryResult = Apollo.QueryResult<GetPlanQuery, GetPlanQueryVariables>;
export const GetAppThemeDocument = gql`
  query getAppTheme($appId: uuid!) {
    app: app_by_pk(id: $appId) {
      id
      background_color
      font
      font_color
    }
  }
`;

/**
 * __useGetAppThemeQuery__
 *
 * To run a query within a React component, call `useGetAppThemeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppThemeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAppThemeQuery({
 *   variables: {
 *      appId: // value for 'appId'
 *   },
 * });
 */
export function useGetAppThemeQuery(
  baseOptions: Apollo.QueryHookOptions<GetAppThemeQuery, GetAppThemeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAppThemeQuery, GetAppThemeQueryVariables>(GetAppThemeDocument, options);
}
export function useGetAppThemeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAppThemeQuery, GetAppThemeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAppThemeQuery, GetAppThemeQueryVariables>(
    GetAppThemeDocument,
    options,
  );
}
export type GetAppThemeQueryHookResult = ReturnType<typeof useGetAppThemeQuery>;
export type GetAppThemeLazyQueryHookResult = ReturnType<typeof useGetAppThemeLazyQuery>;
export type GetAppThemeQueryResult = Apollo.QueryResult<
  GetAppThemeQuery,
  GetAppThemeQueryVariables
>;
export const GetAdminAppDocument = gql`
  query getAdminApp {
    app {
      id
      name
      imgUrl
      moneyAccountId
      background_color
      font
      font_color
      show_brand
      show_connect_email
      plan
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
export const UpdateCustomizationFieldsDocument = gql`
  mutation updateCustomizationFields(
    $id: uuid!
    $background_color: String
    $font_color: String
    $font: String
    $show_brand: Boolean
    $show_connect_email: Boolean
  ) {
    update_app_by_pk(
      pk_columns: { id: $id }
      _set: {
        background_color: $background_color
        font_color: $font_color
        font: $font
        show_brand: $show_brand
        show_connect_email: $show_connect_email
      }
    ) {
      background_color
      font
      font_color
      show_brand
      show_connect_email
    }
  }
`;
export type UpdateCustomizationFieldsMutationFn = Apollo.MutationFunction<
  UpdateCustomizationFieldsMutation,
  UpdateCustomizationFieldsMutationVariables
>;

/**
 * __useUpdateCustomizationFieldsMutation__
 *
 * To run a mutation, you first call `useUpdateCustomizationFieldsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCustomizationFieldsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCustomizationFieldsMutation, { data, loading, error }] = useUpdateCustomizationFieldsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      background_color: // value for 'background_color'
 *      font_color: // value for 'font_color'
 *      font: // value for 'font'
 *      show_brand: // value for 'show_brand'
 *      show_connect_email: // value for 'show_connect_email'
 *   },
 * });
 */
export function useUpdateCustomizationFieldsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCustomizationFieldsMutation,
    UpdateCustomizationFieldsMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateCustomizationFieldsMutation,
    UpdateCustomizationFieldsMutationVariables
  >(UpdateCustomizationFieldsDocument, options);
}
export type UpdateCustomizationFieldsMutationHookResult = ReturnType<
  typeof useUpdateCustomizationFieldsMutation
>;
export type UpdateCustomizationFieldsMutationResult =
  Apollo.MutationResult<UpdateCustomizationFieldsMutation>;
export type UpdateCustomizationFieldsMutationOptions = Apollo.BaseMutationOptions<
  UpdateCustomizationFieldsMutation,
  UpdateCustomizationFieldsMutationVariables
>;
export const CreateDeliveryZoneDocument = gql`
  mutation CreateDeliveryZone($name: String, $fees: Int, $countries: jsonb) {
    insert_delivery_zone(objects: { countries: $countries, fees: $fees, name: $name }) {
      returning {
        app_id
        countries
        fees
        id
        name
      }
    }
  }
`;
export type CreateDeliveryZoneMutationFn = Apollo.MutationFunction<
  CreateDeliveryZoneMutation,
  CreateDeliveryZoneMutationVariables
>;

/**
 * __useCreateDeliveryZoneMutation__
 *
 * To run a mutation, you first call `useCreateDeliveryZoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDeliveryZoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDeliveryZoneMutation, { data, loading, error }] = useCreateDeliveryZoneMutation({
 *   variables: {
 *      name: // value for 'name'
 *      fees: // value for 'fees'
 *      countries: // value for 'countries'
 *   },
 * });
 */
export function useCreateDeliveryZoneMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateDeliveryZoneMutation,
    CreateDeliveryZoneMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateDeliveryZoneMutation, CreateDeliveryZoneMutationVariables>(
    CreateDeliveryZoneDocument,
    options,
  );
}
export type CreateDeliveryZoneMutationHookResult = ReturnType<typeof useCreateDeliveryZoneMutation>;
export type CreateDeliveryZoneMutationResult = Apollo.MutationResult<CreateDeliveryZoneMutation>;
export type CreateDeliveryZoneMutationOptions = Apollo.BaseMutationOptions<
  CreateDeliveryZoneMutation,
  CreateDeliveryZoneMutationVariables
>;
export const DeleteDeliveryZoneDocument = gql`
  mutation DeleteDeliveryZone($id: uuid!) {
    delete_delivery_zone_by_pk(id: $id) {
      id
    }
  }
`;
export type DeleteDeliveryZoneMutationFn = Apollo.MutationFunction<
  DeleteDeliveryZoneMutation,
  DeleteDeliveryZoneMutationVariables
>;

/**
 * __useDeleteDeliveryZoneMutation__
 *
 * To run a mutation, you first call `useDeleteDeliveryZoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDeliveryZoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDeliveryZoneMutation, { data, loading, error }] = useDeleteDeliveryZoneMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteDeliveryZoneMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteDeliveryZoneMutation,
    DeleteDeliveryZoneMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteDeliveryZoneMutation, DeleteDeliveryZoneMutationVariables>(
    DeleteDeliveryZoneDocument,
    options,
  );
}
export type DeleteDeliveryZoneMutationHookResult = ReturnType<typeof useDeleteDeliveryZoneMutation>;
export type DeleteDeliveryZoneMutationResult = Apollo.MutationResult<DeleteDeliveryZoneMutation>;
export type DeleteDeliveryZoneMutationOptions = Apollo.BaseMutationOptions<
  DeleteDeliveryZoneMutation,
  DeleteDeliveryZoneMutationVariables
>;
export const GetDeliveryZoneByAppIdDocument = gql`
  query GetDeliveryZoneByAppId($_eq: uuid) {
    delivery_zone(where: { app_id: { _eq: $_eq } }) {
      name
      id
      fees
      countries
      app_id
    }
  }
`;

/**
 * __useGetDeliveryZoneByAppIdQuery__
 *
 * To run a query within a React component, call `useGetDeliveryZoneByAppIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDeliveryZoneByAppIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDeliveryZoneByAppIdQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useGetDeliveryZoneByAppIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetDeliveryZoneByAppIdQuery,
    GetDeliveryZoneByAppIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetDeliveryZoneByAppIdQuery, GetDeliveryZoneByAppIdQueryVariables>(
    GetDeliveryZoneByAppIdDocument,
    options,
  );
}
export function useGetDeliveryZoneByAppIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDeliveryZoneByAppIdQuery,
    GetDeliveryZoneByAppIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetDeliveryZoneByAppIdQuery, GetDeliveryZoneByAppIdQueryVariables>(
    GetDeliveryZoneByAppIdDocument,
    options,
  );
}
export type GetDeliveryZoneByAppIdQueryHookResult = ReturnType<
  typeof useGetDeliveryZoneByAppIdQuery
>;
export type GetDeliveryZoneByAppIdLazyQueryHookResult = ReturnType<
  typeof useGetDeliveryZoneByAppIdLazyQuery
>;
export type GetDeliveryZoneByAppIdQueryResult = Apollo.QueryResult<
  GetDeliveryZoneByAppIdQuery,
  GetDeliveryZoneByAppIdQueryVariables
>;
export const GetDeliveryZonesDocument = gql`
  query GetDeliveryZones {
    delivery_zone {
      app_id
      countries
      fees
      id
      name
    }
  }
`;

/**
 * __useGetDeliveryZonesQuery__
 *
 * To run a query within a React component, call `useGetDeliveryZonesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDeliveryZonesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDeliveryZonesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDeliveryZonesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetDeliveryZonesQuery, GetDeliveryZonesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetDeliveryZonesQuery, GetDeliveryZonesQueryVariables>(
    GetDeliveryZonesDocument,
    options,
  );
}
export function useGetDeliveryZonesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetDeliveryZonesQuery, GetDeliveryZonesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetDeliveryZonesQuery, GetDeliveryZonesQueryVariables>(
    GetDeliveryZonesDocument,
    options,
  );
}
export type GetDeliveryZonesQueryHookResult = ReturnType<typeof useGetDeliveryZonesQuery>;
export type GetDeliveryZonesLazyQueryHookResult = ReturnType<typeof useGetDeliveryZonesLazyQuery>;
export type GetDeliveryZonesQueryResult = Apollo.QueryResult<
  GetDeliveryZonesQuery,
  GetDeliveryZonesQueryVariables
>;
export const CreateGateV2Document = gql`
  mutation CreateGateV2(
    $discount: Int
    $exclusive_access: Boolean
    $name: String
    $product_id: uuid
    $segments: segment_arr_rel_insert_input
    $unique_claim: Boolean
    $chain: String
  ) {
    insert_gate_v2_one(
      object: {
        discount: $discount
        exclusive_access: $exclusive_access
        name: $name
        product_id: $product_id
        unique_claim: $unique_claim
        chain: $chain
        segments: $segments
      }
    ) {
      id
      discount
      name
    }
  }
`;
export type CreateGateV2MutationFn = Apollo.MutationFunction<
  CreateGateV2Mutation,
  CreateGateV2MutationVariables
>;

/**
 * __useCreateGateV2Mutation__
 *
 * To run a mutation, you first call `useCreateGateV2Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGateV2Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGateV2Mutation, { data, loading, error }] = useCreateGateV2Mutation({
 *   variables: {
 *      discount: // value for 'discount'
 *      exclusive_access: // value for 'exclusive_access'
 *      name: // value for 'name'
 *      product_id: // value for 'product_id'
 *      segments: // value for 'segments'
 *      unique_claim: // value for 'unique_claim'
 *      chain: // value for 'chain'
 *   },
 * });
 */
export function useCreateGateV2Mutation(
  baseOptions?: Apollo.MutationHookOptions<CreateGateV2Mutation, CreateGateV2MutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateGateV2Mutation, CreateGateV2MutationVariables>(
    CreateGateV2Document,
    options,
  );
}
export type CreateGateV2MutationHookResult = ReturnType<typeof useCreateGateV2Mutation>;
export type CreateGateV2MutationResult = Apollo.MutationResult<CreateGateV2Mutation>;
export type CreateGateV2MutationOptions = Apollo.BaseMutationOptions<
  CreateGateV2Mutation,
  CreateGateV2MutationVariables
>;
export const GetEveryContractAddressByAppIdDocument = gql`
  query GetEveryContractAddressByAppId($app_id: uuid!) {
    gate_v2(where: { app_id: { _eq: $app_id } }) {
      segments(where: { type: { _eq: NFT } }) {
        nft_contract_address
      }
    }
  }
`;

/**
 * __useGetEveryContractAddressByAppIdQuery__
 *
 * To run a query within a React component, call `useGetEveryContractAddressByAppIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEveryContractAddressByAppIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEveryContractAddressByAppIdQuery({
 *   variables: {
 *      app_id: // value for 'app_id'
 *   },
 * });
 */
export function useGetEveryContractAddressByAppIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetEveryContractAddressByAppIdQuery,
    GetEveryContractAddressByAppIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetEveryContractAddressByAppIdQuery,
    GetEveryContractAddressByAppIdQueryVariables
  >(GetEveryContractAddressByAppIdDocument, options);
}
export function useGetEveryContractAddressByAppIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetEveryContractAddressByAppIdQuery,
    GetEveryContractAddressByAppIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetEveryContractAddressByAppIdQuery,
    GetEveryContractAddressByAppIdQueryVariables
  >(GetEveryContractAddressByAppIdDocument, options);
}
export type GetEveryContractAddressByAppIdQueryHookResult = ReturnType<
  typeof useGetEveryContractAddressByAppIdQuery
>;
export type GetEveryContractAddressByAppIdLazyQueryHookResult = ReturnType<
  typeof useGetEveryContractAddressByAppIdLazyQuery
>;
export type GetEveryContractAddressByAppIdQueryResult = Apollo.QueryResult<
  GetEveryContractAddressByAppIdQuery,
  GetEveryContractAddressByAppIdQueryVariables
>;
export const GetGatesV2ByProductIdDocument = gql`
  query GetGatesV2ByProductId($productId: uuid) {
    gate_v2(where: { product_id: { _eq: $productId } }) {
      app_id
      discount
      exclusive_access
      id
      name
      product_id
      claims
      unique_claim
      segments {
        type
        poap_ids
        nft_contract_address
        network
        id
        gate_id
      }
    }
  }
`;

/**
 * __useGetGatesV2ByProductIdQuery__
 *
 * To run a query within a React component, call `useGetGatesV2ByProductIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGatesV2ByProductIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGatesV2ByProductIdQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useGetGatesV2ByProductIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetGatesV2ByProductIdQuery,
    GetGatesV2ByProductIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetGatesV2ByProductIdQuery, GetGatesV2ByProductIdQueryVariables>(
    GetGatesV2ByProductIdDocument,
    options,
  );
}
export function useGetGatesV2ByProductIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetGatesV2ByProductIdQuery,
    GetGatesV2ByProductIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetGatesV2ByProductIdQuery, GetGatesV2ByProductIdQueryVariables>(
    GetGatesV2ByProductIdDocument,
    options,
  );
}
export type GetGatesV2ByProductIdQueryHookResult = ReturnType<typeof useGetGatesV2ByProductIdQuery>;
export type GetGatesV2ByProductIdLazyQueryHookResult = ReturnType<
  typeof useGetGatesV2ByProductIdLazyQuery
>;
export type GetGatesV2ByProductIdQueryResult = Apollo.QueryResult<
  GetGatesV2ByProductIdQuery,
  GetGatesV2ByProductIdQueryVariables
>;
export const GetGates_V2Document = gql`
  query GetGates_V2 {
    gates: gate_v2 {
      name
      id
      exclusive_access
      discount
      product {
        id
        image
        name
      }
    }
  }
`;

/**
 * __useGetGates_V2Query__
 *
 * To run a query within a React component, call `useGetGates_V2Query` and pass it any options that fit your needs.
 * When your component renders, `useGetGates_V2Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGates_V2Query({
 *   variables: {
 *   },
 * });
 */
export function useGetGates_V2Query(
  baseOptions?: Apollo.QueryHookOptions<GetGates_V2Query, GetGates_V2QueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetGates_V2Query, GetGates_V2QueryVariables>(GetGates_V2Document, options);
}
export function useGetGates_V2LazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetGates_V2Query, GetGates_V2QueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetGates_V2Query, GetGates_V2QueryVariables>(
    GetGates_V2Document,
    options,
  );
}
export type GetGates_V2QueryHookResult = ReturnType<typeof useGetGates_V2Query>;
export type GetGates_V2LazyQueryHookResult = ReturnType<typeof useGetGates_V2LazyQuery>;
export type GetGates_V2QueryResult = Apollo.QueryResult<
  GetGates_V2Query,
  GetGates_V2QueryVariables
>;
export const GetGates_V2_ByAppIdDocument = gql`
  query GetGates_V2_ByAppId($app_id: uuid) {
    gates: gate_v2(where: { app_id: { _eq: $app_id } }) {
      product_id
      name
      id
      exclusive_access
      discount
      claims
      unique_claim
      segments {
        type
        nft_contract_address
        poap_ids
        network
        id
      }
    }
  }
`;

/**
 * __useGetGates_V2_ByAppIdQuery__
 *
 * To run a query within a React component, call `useGetGates_V2_ByAppIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGates_V2_ByAppIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGates_V2_ByAppIdQuery({
 *   variables: {
 *      app_id: // value for 'app_id'
 *   },
 * });
 */
export function useGetGates_V2_ByAppIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetGates_V2_ByAppIdQuery,
    GetGates_V2_ByAppIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetGates_V2_ByAppIdQuery, GetGates_V2_ByAppIdQueryVariables>(
    GetGates_V2_ByAppIdDocument,
    options,
  );
}
export function useGetGates_V2_ByAppIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetGates_V2_ByAppIdQuery,
    GetGates_V2_ByAppIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetGates_V2_ByAppIdQuery, GetGates_V2_ByAppIdQueryVariables>(
    GetGates_V2_ByAppIdDocument,
    options,
  );
}
export type GetGates_V2_ByAppIdQueryHookResult = ReturnType<typeof useGetGates_V2_ByAppIdQuery>;
export type GetGates_V2_ByAppIdLazyQueryHookResult = ReturnType<
  typeof useGetGates_V2_ByAppIdLazyQuery
>;
export type GetGates_V2_ByAppIdQueryResult = Apollo.QueryResult<
  GetGates_V2_ByAppIdQuery,
  GetGates_V2_ByAppIdQueryVariables
>;
export const PushClaimsDocument = gql`
  mutation PushClaims($gate_id: uuid!, $claims: jsonb!) {
    update_gate_v2_by_pk(_append: { claims: $claims }, pk_columns: { id: $gate_id }) {
      id
      claims
    }
  }
`;
export type PushClaimsMutationFn = Apollo.MutationFunction<
  PushClaimsMutation,
  PushClaimsMutationVariables
>;

/**
 * __usePushClaimsMutation__
 *
 * To run a mutation, you first call `usePushClaimsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePushClaimsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pushClaimsMutation, { data, loading, error }] = usePushClaimsMutation({
 *   variables: {
 *      gate_id: // value for 'gate_id'
 *      claims: // value for 'claims'
 *   },
 * });
 */
export function usePushClaimsMutation(
  baseOptions?: Apollo.MutationHookOptions<PushClaimsMutation, PushClaimsMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<PushClaimsMutation, PushClaimsMutationVariables>(
    PushClaimsDocument,
    options,
  );
}
export type PushClaimsMutationHookResult = ReturnType<typeof usePushClaimsMutation>;
export type PushClaimsMutationResult = Apollo.MutationResult<PushClaimsMutation>;
export type PushClaimsMutationOptions = Apollo.BaseMutationOptions<
  PushClaimsMutation,
  PushClaimsMutationVariables
>;
export const DeleteGateV2Document = gql`
  mutation DeleteGateV2($id: uuid!) {
    delete_gate_v2_by_pk(id: $id) {
      id
    }
  }
`;
export type DeleteGateV2MutationFn = Apollo.MutationFunction<
  DeleteGateV2Mutation,
  DeleteGateV2MutationVariables
>;

/**
 * __useDeleteGateV2Mutation__
 *
 * To run a mutation, you first call `useDeleteGateV2Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGateV2Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGateV2Mutation, { data, loading, error }] = useDeleteGateV2Mutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteGateV2Mutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteGateV2Mutation, DeleteGateV2MutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteGateV2Mutation, DeleteGateV2MutationVariables>(
    DeleteGateV2Document,
    options,
  );
}
export type DeleteGateV2MutationHookResult = ReturnType<typeof useDeleteGateV2Mutation>;
export type DeleteGateV2MutationResult = Apollo.MutationResult<DeleteGateV2Mutation>;
export type DeleteGateV2MutationOptions = Apollo.BaseMutationOptions<
  DeleteGateV2Mutation,
  DeleteGateV2MutationVariables
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
    gates: gate(order_by: { discount: desc }) {
      id
      product_id
      attributes
      contractAddress
      discount
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
export const GetProductGateDocument = gql`
  query GetProductGate($productId: uuid) {
    gates: gate(where: { product_id: { _eq: $productId } }, order_by: { discount: desc }) {
      id
      product_id
      attributes
      contractAddress
      discount
    }
  }
`;

/**
 * __useGetProductGateQuery__
 *
 * To run a query within a React component, call `useGetProductGateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductGateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductGateQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useGetProductGateQuery(
  baseOptions?: Apollo.QueryHookOptions<GetProductGateQuery, GetProductGateQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProductGateQuery, GetProductGateQueryVariables>(
    GetProductGateDocument,
    options,
  );
}
export function useGetProductGateLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetProductGateQuery, GetProductGateQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProductGateQuery, GetProductGateQueryVariables>(
    GetProductGateDocument,
    options,
  );
}
export type GetProductGateQueryHookResult = ReturnType<typeof useGetProductGateQuery>;
export type GetProductGateLazyQueryHookResult = ReturnType<typeof useGetProductGateLazyQuery>;
export type GetProductGateQueryResult = Apollo.QueryResult<
  GetProductGateQuery,
  GetProductGateQueryVariables
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
export const CreateSurveyOrderDocument = gql`
  mutation CreateSurveyOrder(
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
export type CreateSurveyOrderMutationFn = Apollo.MutationFunction<
  CreateSurveyOrderMutation,
  CreateSurveyOrderMutationVariables
>;

/**
 * __useCreateSurveyOrderMutation__
 *
 * To run a mutation, you first call `useCreateSurveyOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSurveyOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSurveyOrderMutation, { data, loading, error }] = useCreateSurveyOrderMutation({
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
export function useCreateSurveyOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSurveyOrderMutation,
    CreateSurveyOrderMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateSurveyOrderMutation, CreateSurveyOrderMutationVariables>(
    CreateSurveyOrderDocument,
    options,
  );
}
export type CreateSurveyOrderMutationHookResult = ReturnType<typeof useCreateSurveyOrderMutation>;
export type CreateSurveyOrderMutationResult = Apollo.MutationResult<CreateSurveyOrderMutation>;
export type CreateSurveyOrderMutationOptions = Apollo.BaseMutationOptions<
  CreateSurveyOrderMutation,
  CreateSurveyOrderMutationVariables
>;
export const GetOrdersByAddressDocument = gql`
  query GetOrdersByAddress($address: String!) {
    orders: order(where: { address: { _eq: $address } }) {
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
 * __useGetOrdersByAddressQuery__
 *
 * To run a query within a React component, call `useGetOrdersByAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdersByAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrdersByAddressQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useGetOrdersByAddressQuery(
  baseOptions: Apollo.QueryHookOptions<GetOrdersByAddressQuery, GetOrdersByAddressQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOrdersByAddressQuery, GetOrdersByAddressQueryVariables>(
    GetOrdersByAddressDocument,
    options,
  );
}
export function useGetOrdersByAddressLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOrdersByAddressQuery,
    GetOrdersByAddressQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOrdersByAddressQuery, GetOrdersByAddressQueryVariables>(
    GetOrdersByAddressDocument,
    options,
  );
}
export type GetOrdersByAddressQueryHookResult = ReturnType<typeof useGetOrdersByAddressQuery>;
export type GetOrdersByAddressLazyQueryHookResult = ReturnType<
  typeof useGetOrdersByAddressLazyQuery
>;
export type GetOrdersByAddressQueryResult = Apollo.QueryResult<
  GetOrdersByAddressQuery,
  GetOrdersByAddressQueryVariables
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
export const CreatePollDocument = gql`
  mutation CreatePoll(
    $title: String!
    $image: String!
    $gate: String!
    $description: String = ""
    $data: [choice_insert_input!] = {}
  ) {
    insert_poll(
      objects: {
        title: $title
        image: $image
        gate: $gate
        description: $description
        choices: { data: $data }
      }
    ) {
      affected_rows
    }
  }
`;
export type CreatePollMutationFn = Apollo.MutationFunction<
  CreatePollMutation,
  CreatePollMutationVariables
>;

/**
 * __useCreatePollMutation__
 *
 * To run a mutation, you first call `useCreatePollMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePollMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPollMutation, { data, loading, error }] = useCreatePollMutation({
 *   variables: {
 *      title: // value for 'title'
 *      image: // value for 'image'
 *      gate: // value for 'gate'
 *      description: // value for 'description'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePollMutation(
  baseOptions?: Apollo.MutationHookOptions<CreatePollMutation, CreatePollMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreatePollMutation, CreatePollMutationVariables>(
    CreatePollDocument,
    options,
  );
}
export type CreatePollMutationHookResult = ReturnType<typeof useCreatePollMutation>;
export type CreatePollMutationResult = Apollo.MutationResult<CreatePollMutation>;
export type CreatePollMutationOptions = Apollo.BaseMutationOptions<
  CreatePollMutation,
  CreatePollMutationVariables
>;
export const DeletePollDocument = gql`
  mutation DeletePoll($id: uuid!) {
    delete_poll_by_pk(id: $id) {
      id
    }
  }
`;
export type DeletePollMutationFn = Apollo.MutationFunction<
  DeletePollMutation,
  DeletePollMutationVariables
>;

/**
 * __useDeletePollMutation__
 *
 * To run a mutation, you first call `useDeletePollMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePollMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePollMutation, { data, loading, error }] = useDeletePollMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePollMutation(
  baseOptions?: Apollo.MutationHookOptions<DeletePollMutation, DeletePollMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeletePollMutation, DeletePollMutationVariables>(
    DeletePollDocument,
    options,
  );
}
export type DeletePollMutationHookResult = ReturnType<typeof useDeletePollMutation>;
export type DeletePollMutationResult = Apollo.MutationResult<DeletePollMutation>;
export type DeletePollMutationOptions = Apollo.BaseMutationOptions<
  DeletePollMutation,
  DeletePollMutationVariables
>;
export const UpdatePollDocument = gql`
  mutation updatePoll(
    $id: uuid!
    $description: String
    $gate: String
    $image: String
    $title: String
    $choice_to_delete: [uuid!] = {}
    $choice_to_insert: [choice_insert_input!] = {}
  ) {
    update_poll_by_pk(
      pk_columns: { id: $id }
      _set: { description: $description, gate: $gate, image: $image, title: $title }
    ) {
      id
      app_id
      description
      gate
      choices {
        count
        id
        poll_id
        value
      }
    }
    delete_choice(where: { id: { _in: $choice_to_delete } }) {
      affected_rows
    }
    insert_choice(objects: $choice_to_insert) {
      affected_rows
    }
  }
`;
export type UpdatePollMutationFn = Apollo.MutationFunction<
  UpdatePollMutation,
  UpdatePollMutationVariables
>;

/**
 * __useUpdatePollMutation__
 *
 * To run a mutation, you first call `useUpdatePollMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePollMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePollMutation, { data, loading, error }] = useUpdatePollMutation({
 *   variables: {
 *      id: // value for 'id'
 *      description: // value for 'description'
 *      gate: // value for 'gate'
 *      image: // value for 'image'
 *      title: // value for 'title'
 *      choice_to_delete: // value for 'choice_to_delete'
 *      choice_to_insert: // value for 'choice_to_insert'
 *   },
 * });
 */
export function useUpdatePollMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdatePollMutation, UpdatePollMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdatePollMutation, UpdatePollMutationVariables>(
    UpdatePollDocument,
    options,
  );
}
export type UpdatePollMutationHookResult = ReturnType<typeof useUpdatePollMutation>;
export type UpdatePollMutationResult = Apollo.MutationResult<UpdatePollMutation>;
export type UpdatePollMutationOptions = Apollo.BaseMutationOptions<
  UpdatePollMutation,
  UpdatePollMutationVariables
>;
export const GetPollByIdDocument = gql`
  query getPollById($id: uuid!) {
    poll: poll_by_pk(id: $id) {
      app_id
      choices {
        id
        poll_id
        value
        count
      }
      gate
      id
      title
      voters
      description
      image
      completed
    }
  }
`;

/**
 * __useGetPollByIdQuery__
 *
 * To run a query within a React component, call `useGetPollByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPollByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPollByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPollByIdQuery(
  baseOptions: Apollo.QueryHookOptions<GetPollByIdQuery, GetPollByIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPollByIdQuery, GetPollByIdQueryVariables>(GetPollByIdDocument, options);
}
export function useGetPollByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPollByIdQuery, GetPollByIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPollByIdQuery, GetPollByIdQueryVariables>(
    GetPollByIdDocument,
    options,
  );
}
export type GetPollByIdQueryHookResult = ReturnType<typeof useGetPollByIdQuery>;
export type GetPollByIdLazyQueryHookResult = ReturnType<typeof useGetPollByIdLazyQuery>;
export type GetPollByIdQueryResult = Apollo.QueryResult<
  GetPollByIdQuery,
  GetPollByIdQueryVariables
>;
export const GetPollsDocument = gql`
  query GetPolls($app_id: uuid!) {
    polls: poll(where: { app_id: { _eq: $app_id } }, order_by: { created_at: desc }) {
      id
      title
      voters
      description
      image
      completed
    }
  }
`;

/**
 * __useGetPollsQuery__
 *
 * To run a query within a React component, call `useGetPollsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPollsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPollsQuery({
 *   variables: {
 *      app_id: // value for 'app_id'
 *   },
 * });
 */
export function useGetPollsQuery(
  baseOptions: Apollo.QueryHookOptions<GetPollsQuery, GetPollsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPollsQuery, GetPollsQueryVariables>(GetPollsDocument, options);
}
export function useGetPollsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPollsQuery, GetPollsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPollsQuery, GetPollsQueryVariables>(GetPollsDocument, options);
}
export type GetPollsQueryHookResult = ReturnType<typeof useGetPollsQuery>;
export type GetPollsLazyQueryHookResult = ReturnType<typeof useGetPollsLazyQuery>;
export type GetPollsQueryResult = Apollo.QueryResult<GetPollsQuery, GetPollsQueryVariables>;
export const GetAdminPollsDocument = gql`
  query GetAdminPolls {
    polls: poll(order_by: { created_at: desc }) {
      id
      title
      voters
      description
      image
      completed
    }
  }
`;

/**
 * __useGetAdminPollsQuery__
 *
 * To run a query within a React component, call `useGetAdminPollsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminPollsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminPollsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdminPollsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAdminPollsQuery, GetAdminPollsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAdminPollsQuery, GetAdminPollsQueryVariables>(
    GetAdminPollsDocument,
    options,
  );
}
export function useGetAdminPollsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAdminPollsQuery, GetAdminPollsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAdminPollsQuery, GetAdminPollsQueryVariables>(
    GetAdminPollsDocument,
    options,
  );
}
export type GetAdminPollsQueryHookResult = ReturnType<typeof useGetAdminPollsQuery>;
export type GetAdminPollsLazyQueryHookResult = ReturnType<typeof useGetAdminPollsLazyQuery>;
export type GetAdminPollsQueryResult = Apollo.QueryResult<
  GetAdminPollsQuery,
  GetAdminPollsQueryVariables
>;
export const TogglePollCompletedDocument = gql`
  mutation TogglePollCompleted($id: uuid!, $completed: Boolean!) {
    update_poll_by_pk(pk_columns: { id: $id }, _set: { completed: $completed }) {
      id
      completed
    }
  }
`;
export type TogglePollCompletedMutationFn = Apollo.MutationFunction<
  TogglePollCompletedMutation,
  TogglePollCompletedMutationVariables
>;

/**
 * __useTogglePollCompletedMutation__
 *
 * To run a mutation, you first call `useTogglePollCompletedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTogglePollCompletedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [togglePollCompletedMutation, { data, loading, error }] = useTogglePollCompletedMutation({
 *   variables: {
 *      id: // value for 'id'
 *      completed: // value for 'completed'
 *   },
 * });
 */
export function useTogglePollCompletedMutation(
  baseOptions?: Apollo.MutationHookOptions<
    TogglePollCompletedMutation,
    TogglePollCompletedMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<TogglePollCompletedMutation, TogglePollCompletedMutationVariables>(
    TogglePollCompletedDocument,
    options,
  );
}
export type TogglePollCompletedMutationHookResult = ReturnType<
  typeof useTogglePollCompletedMutation
>;
export type TogglePollCompletedMutationResult = Apollo.MutationResult<TogglePollCompletedMutation>;
export type TogglePollCompletedMutationOptions = Apollo.BaseMutationOptions<
  TogglePollCompletedMutation,
  TogglePollCompletedMutationVariables
>;
export const VoteDocument = gql`
  mutation Vote($pollId: uuid!, $voters: jsonb, $choiceId: uuid!) {
    choice: update_choice_by_pk(pk_columns: { id: $choiceId }, _inc: { count: 1 }) {
      id
      count
    }
    poll: update_poll_by_pk(pk_columns: { id: $pollId }, _append: { voters: $voters }) {
      id
      voters
    }
  }
`;
export type VoteMutationFn = Apollo.MutationFunction<VoteMutation, VoteMutationVariables>;

/**
 * __useVoteMutation__
 *
 * To run a mutation, you first call `useVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [voteMutation, { data, loading, error }] = useVoteMutation({
 *   variables: {
 *      pollId: // value for 'pollId'
 *      voters: // value for 'voters'
 *      choiceId: // value for 'choiceId'
 *   },
 * });
 */
export function useVoteMutation(
  baseOptions?: Apollo.MutationHookOptions<VoteMutation, VoteMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<VoteMutation, VoteMutationVariables>(VoteDocument, options);
}
export type VoteMutationHookResult = ReturnType<typeof useVoteMutation>;
export type VoteMutationResult = Apollo.MutationResult<VoteMutation>;
export type VoteMutationOptions = Apollo.BaseMutationOptions<VoteMutation, VoteMutationVariables>;
export const CreateProductDocument = gql`
  mutation CreateProduct(
    $appId: uuid!
    $price: Int!
    $name: String!
    $description: String!
    $image: String!
  ) {
    insert_product_one(
      object: {
        app_id: $appId
        image: $image
        name: $name
        description: $description
        price: $price
      }
    ) {
      app_id
      id
      image
      name
      description
      price
      type
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
    $type: product_type_enum!
    $webhookUrl: String
  ) {
    insert_product_one(
      object: {
        image: $image
        name: $name
        description: $description
        price: $price
        type: $type
        webhookUrl: $webhookUrl
      }
    ) {
      app_id
      id
      image
      name
      description
      price
      webhookUrl
      type
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
 *      type: // value for 'type'
 *      webhookUrl: // value for 'webhookUrl'
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
        id
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
    $image: String!
    $name: String
    $description: String!
    $price: Int!
    $webhookUrl: String
  ) {
    update_product(
      _set: {
        image: $image
        name: $name
        description: $description
        price: $price
        webhookUrl: $webhookUrl
      }
      where: { id: { _eq: $id } }
    ) {
      returning {
        id
        image
        name
        description
        price
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
 *      image: // value for 'image'
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      price: // value for 'price'
 *      webhookUrl: // value for 'webhookUrl'
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
    product: product_by_pk(id: $id) {
      app_id
      id
      image
      name
      description
      price
      type
      webhookUrl
      app {
        id
        deliveryTaxesTableName
        imgUrl
        name
        moneyAccountId
      }
      gate {
        ...GateFields
      }
    }
  }
  ${GateFieldsFragmentDoc}
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
      id
      image
      name
      description
      price
      type
      webhookUrl
      gate {
        ...GateFields
      }
    }
  }
  ${GateFieldsFragmentDoc}
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
      id
      image
      name
      description
      price
      type
      webhookUrl
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
