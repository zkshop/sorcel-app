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
  numeric: any;
  smallint: any;
  uuid: any;
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
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "app" */
export enum App_Constraint {
  /** unique or primary key constraint on columns "id" */
  AppsPkey = 'apps_pkey'
}

/** input type for inserting data into table "app" */
export type App_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type App_Max_Fields = {
  __typename?: 'app_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type App_Min_Fields = {
  __typename?: 'app_min_fields';
  id?: Maybe<Scalars['uuid']>;
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
  Name = 'name'
}

/** input type for updating data in table "app" */
export type App_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
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
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "app" */
export enum App_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
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
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "app" */
  delete_app?: Maybe<App_Mutation_Response>;
  /** delete single row from the table: "app" */
  delete_app_by_pk?: Maybe<App>;
  /** delete data from the table: "product" */
  delete_product?: Maybe<Product_Mutation_Response>;
  /** delete single row from the table: "product" */
  delete_product_by_pk?: Maybe<Product>;
  /** insert data into the table: "app" */
  insert_app?: Maybe<App_Mutation_Response>;
  /** insert a single row into the table: "app" */
  insert_app_one?: Maybe<App>;
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
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "product" */
export type Product = {
  __typename?: 'product';
  app_id: Scalars['uuid'];
  collection?: Maybe<Scalars['bpchar']>;
  curation?: Maybe<Scalars['bpchar']>;
  discount?: Maybe<Scalars['smallint']>;
  id: Scalars['uuid'];
  image?: Maybe<Scalars['bpchar']>;
  name: Scalars['String'];
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
  discount?: InputMaybe<Smallint_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<Bpchar_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "product" */
export enum Product_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductPkey = 'product_pkey'
}

/** input type for incrementing numeric columns in table "product" */
export type Product_Inc_Input = {
  discount?: InputMaybe<Scalars['smallint']>;
  price?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "product" */
export type Product_Insert_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  collection?: InputMaybe<Scalars['bpchar']>;
  curation?: InputMaybe<Scalars['bpchar']>;
  discount?: InputMaybe<Scalars['smallint']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['bpchar']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Product_Max_Fields = {
  __typename?: 'product_max_fields';
  app_id?: Maybe<Scalars['uuid']>;
  collection?: Maybe<Scalars['bpchar']>;
  curation?: Maybe<Scalars['bpchar']>;
  discount?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['bpchar']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Product_Min_Fields = {
  __typename?: 'product_min_fields';
  app_id?: Maybe<Scalars['uuid']>;
  collection?: Maybe<Scalars['bpchar']>;
  curation?: Maybe<Scalars['bpchar']>;
  discount?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['bpchar']>;
  name?: Maybe<Scalars['String']>;
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
  discount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
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
  Discount = 'discount',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price'
}

/** input type for updating data in table "product" */
export type Product_Set_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  collection?: InputMaybe<Scalars['bpchar']>;
  curation?: InputMaybe<Scalars['bpchar']>;
  discount?: InputMaybe<Scalars['smallint']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['bpchar']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Product_Stddev_Fields = {
  __typename?: 'product_stddev_fields';
  discount?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Product_Stddev_Pop_Fields = {
  __typename?: 'product_stddev_pop_fields';
  discount?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Product_Stddev_Samp_Fields = {
  __typename?: 'product_stddev_samp_fields';
  discount?: Maybe<Scalars['Float']>;
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
  discount?: InputMaybe<Scalars['smallint']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['bpchar']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
};

/** aggregate sum on columns */
export type Product_Sum_Fields = {
  __typename?: 'product_sum_fields';
  discount?: Maybe<Scalars['smallint']>;
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
  Discount = 'discount',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price'
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
  price?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Product_Var_Samp_Fields = {
  __typename?: 'product_var_samp_fields';
  discount?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Product_Variance_Fields = {
  __typename?: 'product_variance_fields';
  discount?: Maybe<Scalars['Float']>;
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
  /** fetch data from the table in a streaming manner : "app" */
  app_stream: Array<App>;
  /** fetch data from the table: "product" */
  product: Array<Product>;
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: Product_Aggregate;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>;
  /** fetch data from the table in a streaming manner : "product" */
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

export type GetAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminQuery = { __typename?: 'query_root', app?: { __typename?: 'app', id: any, name: string } | null, products: Array<{ __typename?: 'product', collection?: any | null, curation?: any | null, discount?: any | null, id: any, image?: any | null, name: string, price: any }> };

export type UpdateAppMutationVariables = Exact<{
  newName: Scalars['String'];
}>;


export type UpdateAppMutation = { __typename?: 'mutation_root', update_app?: { __typename?: 'app_mutation_response', returning: Array<{ __typename?: 'app', id: any, name: string }> } | null };

export type App_Mutation_ResponseFragmentFragment = { __typename?: 'app_mutation_response', returning: Array<{ __typename?: 'app', id: any, name: string }> };

export type Product_By_PkQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type Product_By_PkQuery = { __typename?: 'query_root', product_by_pk?: { __typename?: 'product', app_id: any, collection?: any | null, curation?: any | null, discount?: any | null, id: any, image?: any | null, name: string, price: any } | null };

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'query_root', product: Array<{ __typename?: 'product', app_id: any, collection?: any | null, curation?: any | null, id: any, discount?: any | null, image?: any | null, name: string, price: any }> };

export const App_Mutation_ResponseFragmentFragmentDoc = gql`
    fragment app_mutation_responseFragment on app_mutation_response {
  returning {
    id
    name
  }
}
    `;
export const GetAdminDocument = gql`
    query getAdmin {
  app: app_by_pk(id: "7c0623b1-5715-4e77-8db3-cf71204bdb80") {
    id
    name
  }
  products: product(
    where: {app_id: {_eq: "7c0623b1-5715-4e77-8db3-cf71204bdb80"}}
  ) {
    collection
    curation
    discount
    id
    image
    name
    price
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
 *   },
 * });
 */
export function useGetAdminQuery(baseOptions?: Apollo.QueryHookOptions<GetAdminQuery, GetAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdminQuery, GetAdminQueryVariables>(GetAdminDocument, options);
      }
export function useGetAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdminQuery, GetAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdminQuery, GetAdminQueryVariables>(GetAdminDocument, options);
        }
export type GetAdminQueryHookResult = ReturnType<typeof useGetAdminQuery>;
export type GetAdminLazyQueryHookResult = ReturnType<typeof useGetAdminLazyQuery>;
export type GetAdminQueryResult = Apollo.QueryResult<GetAdminQuery, GetAdminQueryVariables>;
export const UpdateAppDocument = gql`
    mutation UpdateApp($newName: String!) {
  update_app(
    where: {id: {_eq: "7c0623b1-5715-4e77-8db3-cf71204bdb80"}}
    _set: {name: $newName}
  ) {
    ...app_mutation_responseFragment
  }
}
    ${App_Mutation_ResponseFragmentFragmentDoc}`;
export type UpdateAppMutationFn = Apollo.MutationFunction<UpdateAppMutation, UpdateAppMutationVariables>;

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
 *      newName: // value for 'newName'
 *   },
 * });
 */
export function useUpdateAppMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAppMutation, UpdateAppMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAppMutation, UpdateAppMutationVariables>(UpdateAppDocument, options);
      }
export type UpdateAppMutationHookResult = ReturnType<typeof useUpdateAppMutation>;
export type UpdateAppMutationResult = Apollo.MutationResult<UpdateAppMutation>;
export type UpdateAppMutationOptions = Apollo.BaseMutationOptions<UpdateAppMutation, UpdateAppMutationVariables>;
export const Product_By_PkDocument = gql`
    query Product_by_pk($id: uuid!) {
  product_by_pk(id: $id) {
    app_id
    collection
    curation
    discount
    id
    image
    name
    price
  }
}
    `;

/**
 * __useProduct_By_PkQuery__
 *
 * To run a query within a React component, call `useProduct_By_PkQuery` and pass it any options that fit your needs.
 * When your component renders, `useProduct_By_PkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProduct_By_PkQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProduct_By_PkQuery(baseOptions: Apollo.QueryHookOptions<Product_By_PkQuery, Product_By_PkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Product_By_PkQuery, Product_By_PkQueryVariables>(Product_By_PkDocument, options);
      }
export function useProduct_By_PkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Product_By_PkQuery, Product_By_PkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Product_By_PkQuery, Product_By_PkQueryVariables>(Product_By_PkDocument, options);
        }
export type Product_By_PkQueryHookResult = ReturnType<typeof useProduct_By_PkQuery>;
export type Product_By_PkLazyQueryHookResult = ReturnType<typeof useProduct_By_PkLazyQuery>;
export type Product_By_PkQueryResult = Apollo.QueryResult<Product_By_PkQuery, Product_By_PkQueryVariables>;
export const GetProductsDocument = gql`
    query GetProducts {
  product {
    app_id
    collection
    curation
    id
    discount
    image
    name
    price
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
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;