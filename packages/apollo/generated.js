import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
/** unique or primary key constraints on table "app" */
export var App_Constraint;
(function (App_Constraint) {
    /** unique or primary key constraint on columns "id" */
    App_Constraint["AppPkey"] = "app_pkey";
})(App_Constraint || (App_Constraint = {}));
/** select columns of table "app" */
export var App_Select_Column;
(function (App_Select_Column) {
    /** column name */
    App_Select_Column["BackgroundColor"] = "background_color";
    /** column name */
    App_Select_Column["CreatedAt"] = "created_at";
    /** column name */
    App_Select_Column["DeliveryTaxesTableName"] = "deliveryTaxesTableName";
    /** column name */
    App_Select_Column["Font"] = "font";
    /** column name */
    App_Select_Column["FontColor"] = "font_color";
    /** column name */
    App_Select_Column["Id"] = "id";
    /** column name */
    App_Select_Column["ImgUrl"] = "imgUrl";
    /** column name */
    App_Select_Column["MoneyAccountId"] = "moneyAccountId";
    /** column name */
    App_Select_Column["Name"] = "name";
    /** column name */
    App_Select_Column["Plan"] = "plan";
    /** column name */
    App_Select_Column["ShowBrand"] = "show_brand";
    /** column name */
    App_Select_Column["ShowConnectEmail"] = "show_connect_email";
})(App_Select_Column || (App_Select_Column = {}));
/** update columns of table "app" */
export var App_Update_Column;
(function (App_Update_Column) {
    /** column name */
    App_Update_Column["BackgroundColor"] = "background_color";
    /** column name */
    App_Update_Column["CreatedAt"] = "created_at";
    /** column name */
    App_Update_Column["DeliveryTaxesTableName"] = "deliveryTaxesTableName";
    /** column name */
    App_Update_Column["Font"] = "font";
    /** column name */
    App_Update_Column["FontColor"] = "font_color";
    /** column name */
    App_Update_Column["Id"] = "id";
    /** column name */
    App_Update_Column["ImgUrl"] = "imgUrl";
    /** column name */
    App_Update_Column["MoneyAccountId"] = "moneyAccountId";
    /** column name */
    App_Update_Column["Name"] = "name";
    /** column name */
    App_Update_Column["Plan"] = "plan";
    /** column name */
    App_Update_Column["ShowBrand"] = "show_brand";
    /** column name */
    App_Update_Column["ShowConnectEmail"] = "show_connect_email";
})(App_Update_Column || (App_Update_Column = {}));
/** unique or primary key constraints on table "choice" */
export var Choice_Constraint;
(function (Choice_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Choice_Constraint["ChoicePkey"] = "choice_pkey";
})(Choice_Constraint || (Choice_Constraint = {}));
/** select columns of table "choice" */
export var Choice_Select_Column;
(function (Choice_Select_Column) {
    /** column name */
    Choice_Select_Column["Count"] = "count";
    /** column name */
    Choice_Select_Column["CreatedAt"] = "created_at";
    /** column name */
    Choice_Select_Column["Id"] = "id";
    /** column name */
    Choice_Select_Column["PollId"] = "poll_id";
    /** column name */
    Choice_Select_Column["Value"] = "value";
})(Choice_Select_Column || (Choice_Select_Column = {}));
/** update columns of table "choice" */
export var Choice_Update_Column;
(function (Choice_Update_Column) {
    /** column name */
    Choice_Update_Column["Count"] = "count";
    /** column name */
    Choice_Update_Column["CreatedAt"] = "created_at";
    /** column name */
    Choice_Update_Column["Id"] = "id";
    /** column name */
    Choice_Update_Column["PollId"] = "poll_id";
    /** column name */
    Choice_Update_Column["Value"] = "value";
})(Choice_Update_Column || (Choice_Update_Column = {}));
/** ordering argument of a cursor */
export var Cursor_Ordering;
(function (Cursor_Ordering) {
    /** ascending ordering of the cursor */
    Cursor_Ordering["Asc"] = "ASC";
    /** descending ordering of the cursor */
    Cursor_Ordering["Desc"] = "DESC";
})(Cursor_Ordering || (Cursor_Ordering = {}));
/** unique or primary key constraints on table "delivery_zone" */
export var Delivery_Zone_Constraint;
(function (Delivery_Zone_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Delivery_Zone_Constraint["DeliveryZonePkey"] = "delivery_zone_pkey";
})(Delivery_Zone_Constraint || (Delivery_Zone_Constraint = {}));
/** select columns of table "delivery_zone" */
export var Delivery_Zone_Select_Column;
(function (Delivery_Zone_Select_Column) {
    /** column name */
    Delivery_Zone_Select_Column["AppId"] = "app_id";
    /** column name */
    Delivery_Zone_Select_Column["Countries"] = "countries";
    /** column name */
    Delivery_Zone_Select_Column["Fees"] = "fees";
    /** column name */
    Delivery_Zone_Select_Column["Id"] = "id";
    /** column name */
    Delivery_Zone_Select_Column["Name"] = "name";
})(Delivery_Zone_Select_Column || (Delivery_Zone_Select_Column = {}));
/** update columns of table "delivery_zone" */
export var Delivery_Zone_Update_Column;
(function (Delivery_Zone_Update_Column) {
    /** column name */
    Delivery_Zone_Update_Column["AppId"] = "app_id";
    /** column name */
    Delivery_Zone_Update_Column["Countries"] = "countries";
    /** column name */
    Delivery_Zone_Update_Column["Fees"] = "fees";
    /** column name */
    Delivery_Zone_Update_Column["Id"] = "id";
    /** column name */
    Delivery_Zone_Update_Column["Name"] = "name";
})(Delivery_Zone_Update_Column || (Delivery_Zone_Update_Column = {}));
/** unique or primary key constraints on table "gate" */
export var Gate_Constraint;
(function (Gate_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Gate_Constraint["GatePkey"] = "Gate_pkey";
})(Gate_Constraint || (Gate_Constraint = {}));
/** select columns of table "gate" */
export var Gate_Select_Column;
(function (Gate_Select_Column) {
    /** column name */
    Gate_Select_Column["Attributes"] = "attributes";
    /** column name */
    Gate_Select_Column["ContractAddress"] = "contractAddress";
    /** column name */
    Gate_Select_Column["Discount"] = "discount";
    /** column name */
    Gate_Select_Column["Id"] = "id";
    /** column name */
    Gate_Select_Column["Name"] = "name";
    /** column name */
    Gate_Select_Column["ProductId"] = "product_id";
})(Gate_Select_Column || (Gate_Select_Column = {}));
/** update columns of table "gate" */
export var Gate_Update_Column;
(function (Gate_Update_Column) {
    /** column name */
    Gate_Update_Column["Attributes"] = "attributes";
    /** column name */
    Gate_Update_Column["ContractAddress"] = "contractAddress";
    /** column name */
    Gate_Update_Column["Discount"] = "discount";
    /** column name */
    Gate_Update_Column["Id"] = "id";
    /** column name */
    Gate_Update_Column["Name"] = "name";
    /** column name */
    Gate_Update_Column["ProductId"] = "product_id";
})(Gate_Update_Column || (Gate_Update_Column = {}));
/** unique or primary key constraints on table "gate_v2" */
export var Gate_V2_Constraint;
(function (Gate_V2_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Gate_V2_Constraint["GateV2Pkey"] = "gate_v2_pkey";
})(Gate_V2_Constraint || (Gate_V2_Constraint = {}));
/** select columns of table "gate_v2" */
export var Gate_V2_Select_Column;
(function (Gate_V2_Select_Column) {
    /** column name */
    Gate_V2_Select_Column["AppId"] = "app_id";
    /** column name */
    Gate_V2_Select_Column["Claims"] = "claims";
    /** column name */
    Gate_V2_Select_Column["Discount"] = "discount";
    /** column name */
    Gate_V2_Select_Column["ExclusiveAccess"] = "exclusive_access";
    /** column name */
    Gate_V2_Select_Column["Id"] = "id";
    /** column name */
    Gate_V2_Select_Column["Name"] = "name";
    /** column name */
    Gate_V2_Select_Column["ProductId"] = "product_id";
    /** column name */
    Gate_V2_Select_Column["UniqueClaim"] = "unique_claim";
})(Gate_V2_Select_Column || (Gate_V2_Select_Column = {}));
/** select "gate_v2_aggregate_bool_exp_bool_and_arguments_columns" columns of table "gate_v2" */
export var Gate_V2_Select_Column_Gate_V2_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
(function (Gate_V2_Select_Column_Gate_V2_Aggregate_Bool_Exp_Bool_And_Arguments_Columns) {
    /** column name */
    Gate_V2_Select_Column_Gate_V2_Aggregate_Bool_Exp_Bool_And_Arguments_Columns["ExclusiveAccess"] = "exclusive_access";
    /** column name */
    Gate_V2_Select_Column_Gate_V2_Aggregate_Bool_Exp_Bool_And_Arguments_Columns["UniqueClaim"] = "unique_claim";
})(Gate_V2_Select_Column_Gate_V2_Aggregate_Bool_Exp_Bool_And_Arguments_Columns || (Gate_V2_Select_Column_Gate_V2_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = {}));
/** select "gate_v2_aggregate_bool_exp_bool_or_arguments_columns" columns of table "gate_v2" */
export var Gate_V2_Select_Column_Gate_V2_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
(function (Gate_V2_Select_Column_Gate_V2_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns) {
    /** column name */
    Gate_V2_Select_Column_Gate_V2_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns["ExclusiveAccess"] = "exclusive_access";
    /** column name */
    Gate_V2_Select_Column_Gate_V2_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns["UniqueClaim"] = "unique_claim";
})(Gate_V2_Select_Column_Gate_V2_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns || (Gate_V2_Select_Column_Gate_V2_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = {}));
/** update columns of table "gate_v2" */
export var Gate_V2_Update_Column;
(function (Gate_V2_Update_Column) {
    /** column name */
    Gate_V2_Update_Column["AppId"] = "app_id";
    /** column name */
    Gate_V2_Update_Column["Claims"] = "claims";
    /** column name */
    Gate_V2_Update_Column["Discount"] = "discount";
    /** column name */
    Gate_V2_Update_Column["ExclusiveAccess"] = "exclusive_access";
    /** column name */
    Gate_V2_Update_Column["Id"] = "id";
    /** column name */
    Gate_V2_Update_Column["Name"] = "name";
    /** column name */
    Gate_V2_Update_Column["ProductId"] = "product_id";
    /** column name */
    Gate_V2_Update_Column["UniqueClaim"] = "unique_claim";
})(Gate_V2_Update_Column || (Gate_V2_Update_Column = {}));
/** unique or primary key constraints on table "network" */
export var Network_Constraint;
(function (Network_Constraint) {
    /** unique or primary key constraint on columns "value" */
    Network_Constraint["NetworkPkey"] = "network_pkey";
})(Network_Constraint || (Network_Constraint = {}));
export var Network_Enum;
(function (Network_Enum) {
    Network_Enum["Ethereum"] = "ETHEREUM";
    Network_Enum["Polygon"] = "POLYGON";
})(Network_Enum || (Network_Enum = {}));
/** select columns of table "network" */
export var Network_Select_Column;
(function (Network_Select_Column) {
    /** column name */
    Network_Select_Column["Value"] = "value";
})(Network_Select_Column || (Network_Select_Column = {}));
/** update columns of table "network" */
export var Network_Update_Column;
(function (Network_Update_Column) {
    /** column name */
    Network_Update_Column["Value"] = "value";
})(Network_Update_Column || (Network_Update_Column = {}));
/** column ordering options */
export var Order_By;
(function (Order_By) {
    /** in ascending order, nulls last */
    Order_By["Asc"] = "asc";
    /** in ascending order, nulls first */
    Order_By["AscNullsFirst"] = "asc_nulls_first";
    /** in ascending order, nulls last */
    Order_By["AscNullsLast"] = "asc_nulls_last";
    /** in descending order, nulls first */
    Order_By["Desc"] = "desc";
    /** in descending order, nulls first */
    Order_By["DescNullsFirst"] = "desc_nulls_first";
    /** in descending order, nulls last */
    Order_By["DescNullsLast"] = "desc_nulls_last";
})(Order_By || (Order_By = {}));
/** unique or primary key constraints on table "order" */
export var Order_Constraint;
(function (Order_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Order_Constraint["OrderPkey"] = "order_pkey";
})(Order_Constraint || (Order_Constraint = {}));
/** select columns of table "order" */
export var Order_Select_Column;
(function (Order_Select_Column) {
    /** column name */
    Order_Select_Column["Address"] = "address";
    /** column name */
    Order_Select_Column["AppId"] = "app_id";
    /** column name */
    Order_Select_Column["Email"] = "email";
    /** column name */
    Order_Select_Column["Firstname"] = "firstname";
    /** column name */
    Order_Select_Column["Id"] = "id";
    /** column name */
    Order_Select_Column["Lastname"] = "lastname";
    /** column name */
    Order_Select_Column["ProductId"] = "product_id";
    /** column name */
    Order_Select_Column["Status"] = "status";
})(Order_Select_Column || (Order_Select_Column = {}));
/** update columns of table "order" */
export var Order_Update_Column;
(function (Order_Update_Column) {
    /** column name */
    Order_Update_Column["Address"] = "address";
    /** column name */
    Order_Update_Column["AppId"] = "app_id";
    /** column name */
    Order_Update_Column["Email"] = "email";
    /** column name */
    Order_Update_Column["Firstname"] = "firstname";
    /** column name */
    Order_Update_Column["Id"] = "id";
    /** column name */
    Order_Update_Column["Lastname"] = "lastname";
    /** column name */
    Order_Update_Column["ProductId"] = "product_id";
    /** column name */
    Order_Update_Column["Status"] = "status";
})(Order_Update_Column || (Order_Update_Column = {}));
/** unique or primary key constraints on table "plan" */
export var Plan_Constraint;
(function (Plan_Constraint) {
    /** unique or primary key constraint on columns "value" */
    Plan_Constraint["PlanPkey"] = "plan_pkey";
})(Plan_Constraint || (Plan_Constraint = {}));
export var Plan_Enum;
(function (Plan_Enum) {
    Plan_Enum["Free"] = "FREE";
    Plan_Enum["Pro"] = "PRO";
})(Plan_Enum || (Plan_Enum = {}));
/** select columns of table "plan" */
export var Plan_Select_Column;
(function (Plan_Select_Column) {
    /** column name */
    Plan_Select_Column["Value"] = "value";
})(Plan_Select_Column || (Plan_Select_Column = {}));
/** update columns of table "plan" */
export var Plan_Update_Column;
(function (Plan_Update_Column) {
    /** column name */
    Plan_Update_Column["Value"] = "value";
})(Plan_Update_Column || (Plan_Update_Column = {}));
/** unique or primary key constraints on table "poll" */
export var Poll_Constraint;
(function (Poll_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Poll_Constraint["PollPkey"] = "poll_pkey";
})(Poll_Constraint || (Poll_Constraint = {}));
/** select columns of table "poll" */
export var Poll_Select_Column;
(function (Poll_Select_Column) {
    /** column name */
    Poll_Select_Column["AppId"] = "app_id";
    /** column name */
    Poll_Select_Column["Completed"] = "completed";
    /** column name */
    Poll_Select_Column["CreatedAt"] = "created_at";
    /** column name */
    Poll_Select_Column["Description"] = "description";
    /** column name */
    Poll_Select_Column["Gate"] = "gate";
    /** column name */
    Poll_Select_Column["Id"] = "id";
    /** column name */
    Poll_Select_Column["Image"] = "image";
    /** column name */
    Poll_Select_Column["Title"] = "title";
    /** column name */
    Poll_Select_Column["Voters"] = "voters";
})(Poll_Select_Column || (Poll_Select_Column = {}));
/** update columns of table "poll" */
export var Poll_Update_Column;
(function (Poll_Update_Column) {
    /** column name */
    Poll_Update_Column["AppId"] = "app_id";
    /** column name */
    Poll_Update_Column["Completed"] = "completed";
    /** column name */
    Poll_Update_Column["CreatedAt"] = "created_at";
    /** column name */
    Poll_Update_Column["Description"] = "description";
    /** column name */
    Poll_Update_Column["Gate"] = "gate";
    /** column name */
    Poll_Update_Column["Id"] = "id";
    /** column name */
    Poll_Update_Column["Image"] = "image";
    /** column name */
    Poll_Update_Column["Title"] = "title";
    /** column name */
    Poll_Update_Column["Voters"] = "voters";
})(Poll_Update_Column || (Poll_Update_Column = {}));
/** unique or primary key constraints on table "product" */
export var Product_Constraint;
(function (Product_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Product_Constraint["ProductPkey"] = "product_pkey";
})(Product_Constraint || (Product_Constraint = {}));
/** select columns of table "product" */
export var Product_Select_Column;
(function (Product_Select_Column) {
    /** column name */
    Product_Select_Column["AppId"] = "app_id";
    /** column name */
    Product_Select_Column["Description"] = "description";
    /** column name */
    Product_Select_Column["Id"] = "id";
    /** column name */
    Product_Select_Column["Image"] = "image";
    /** column name */
    Product_Select_Column["Name"] = "name";
    /** column name */
    Product_Select_Column["Price"] = "price";
    /** column name */
    Product_Select_Column["Type"] = "type";
    /** column name */
    Product_Select_Column["WebhookUrl"] = "webhookUrl";
})(Product_Select_Column || (Product_Select_Column = {}));
/** unique or primary key constraints on table "product_type" */
export var Product_Type_Constraint;
(function (Product_Type_Constraint) {
    /** unique or primary key constraint on columns "value" */
    Product_Type_Constraint["ProductTypePkey"] = "product_type_pkey";
})(Product_Type_Constraint || (Product_Type_Constraint = {}));
export var Product_Type_Enum;
(function (Product_Type_Enum) {
    Product_Type_Enum["Commerce"] = "COMMERCE";
    Product_Type_Enum["Modal"] = "MODAL";
})(Product_Type_Enum || (Product_Type_Enum = {}));
/** select columns of table "product_type" */
export var Product_Type_Select_Column;
(function (Product_Type_Select_Column) {
    /** column name */
    Product_Type_Select_Column["Value"] = "value";
})(Product_Type_Select_Column || (Product_Type_Select_Column = {}));
/** update columns of table "product_type" */
export var Product_Type_Update_Column;
(function (Product_Type_Update_Column) {
    /** column name */
    Product_Type_Update_Column["Value"] = "value";
})(Product_Type_Update_Column || (Product_Type_Update_Column = {}));
/** update columns of table "product" */
export var Product_Update_Column;
(function (Product_Update_Column) {
    /** column name */
    Product_Update_Column["AppId"] = "app_id";
    /** column name */
    Product_Update_Column["Description"] = "description";
    /** column name */
    Product_Update_Column["Id"] = "id";
    /** column name */
    Product_Update_Column["Image"] = "image";
    /** column name */
    Product_Update_Column["Name"] = "name";
    /** column name */
    Product_Update_Column["Price"] = "price";
    /** column name */
    Product_Update_Column["Type"] = "type";
    /** column name */
    Product_Update_Column["WebhookUrl"] = "webhookUrl";
})(Product_Update_Column || (Product_Update_Column = {}));
/** unique or primary key constraints on table "segment" */
export var Segment_Constraint;
(function (Segment_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Segment_Constraint["SegmentPkey"] = "segment_pkey";
})(Segment_Constraint || (Segment_Constraint = {}));
/** select columns of table "segment" */
export var Segment_Select_Column;
(function (Segment_Select_Column) {
    /** column name */
    Segment_Select_Column["GateId"] = "gate_id";
    /** column name */
    Segment_Select_Column["Id"] = "id";
    /** column name */
    Segment_Select_Column["Network"] = "network";
    /** column name */
    Segment_Select_Column["NftContractAddress"] = "nft_contract_address";
    /** column name */
    Segment_Select_Column["PoapIds"] = "poap_ids";
    /** column name */
    Segment_Select_Column["Type"] = "type";
})(Segment_Select_Column || (Segment_Select_Column = {}));
/** unique or primary key constraints on table "segment_type" */
export var Segment_Type_Constraint;
(function (Segment_Type_Constraint) {
    /** unique or primary key constraint on columns "value" */
    Segment_Type_Constraint["SegmentTypePkey"] = "segment_type_pkey";
})(Segment_Type_Constraint || (Segment_Type_Constraint = {}));
export var Segment_Type_Enum;
(function (Segment_Type_Enum) {
    Segment_Type_Enum["Nft"] = "NFT";
    Segment_Type_Enum["Poap"] = "POAP";
})(Segment_Type_Enum || (Segment_Type_Enum = {}));
/** select columns of table "segment_type" */
export var Segment_Type_Select_Column;
(function (Segment_Type_Select_Column) {
    /** column name */
    Segment_Type_Select_Column["Value"] = "value";
})(Segment_Type_Select_Column || (Segment_Type_Select_Column = {}));
/** update columns of table "segment_type" */
export var Segment_Type_Update_Column;
(function (Segment_Type_Update_Column) {
    /** column name */
    Segment_Type_Update_Column["Value"] = "value";
})(Segment_Type_Update_Column || (Segment_Type_Update_Column = {}));
/** update columns of table "segment" */
export var Segment_Update_Column;
(function (Segment_Update_Column) {
    /** column name */
    Segment_Update_Column["GateId"] = "gate_id";
    /** column name */
    Segment_Update_Column["Id"] = "id";
    /** column name */
    Segment_Update_Column["Network"] = "network";
    /** column name */
    Segment_Update_Column["NftContractAddress"] = "nft_contract_address";
    /** column name */
    Segment_Update_Column["PoapIds"] = "poap_ids";
    /** column name */
    Segment_Update_Column["Type"] = "type";
})(Segment_Update_Column || (Segment_Update_Column = {}));
/** unique or primary key constraints on table "user" */
export var User_Constraint;
(function (User_Constraint) {
    /** unique or primary key constraint on columns "email" */
    User_Constraint["UserEmailKey"] = "user_email_key";
    /** unique or primary key constraint on columns "email" */
    User_Constraint["UserPkey"] = "user_pkey";
})(User_Constraint || (User_Constraint = {}));
/** select columns of table "user" */
export var User_Select_Column;
(function (User_Select_Column) {
    /** column name */
    User_Select_Column["AppId"] = "app_id";
    /** column name */
    User_Select_Column["Email"] = "email";
    /** column name */
    User_Select_Column["Id"] = "id";
    /** column name */
    User_Select_Column["Role"] = "role";
})(User_Select_Column || (User_Select_Column = {}));
/** update columns of table "user" */
export var User_Update_Column;
(function (User_Update_Column) {
    /** column name */
    User_Update_Column["AppId"] = "app_id";
    /** column name */
    User_Update_Column["Email"] = "email";
    /** column name */
    User_Update_Column["Id"] = "id";
    /** column name */
    User_Update_Column["Role"] = "role";
})(User_Update_Column || (User_Update_Column = {}));
/** unique or primary key constraints on table "utility" */
export var Utility_Constraint;
(function (Utility_Constraint) {
    /** unique or primary key constraint on columns "value" */
    Utility_Constraint["UtilityPkey"] = "utility_pkey";
})(Utility_Constraint || (Utility_Constraint = {}));
/** select columns of table "utility" */
export var Utility_Select_Column;
(function (Utility_Select_Column) {
    /** column name */
    Utility_Select_Column["Value"] = "value";
})(Utility_Select_Column || (Utility_Select_Column = {}));
/** update columns of table "utility" */
export var Utility_Update_Column;
(function (Utility_Update_Column) {
    /** column name */
    Utility_Update_Column["Value"] = "value";
})(Utility_Update_Column || (Utility_Update_Column = {}));
export const GateFieldsFragmentDoc = gql `
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
export const GetAppDocument = gql `
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
export function useGetAppQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(GetAppDocument, options);
}
export function useGetAppLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(GetAppDocument, options);
}
export const GetPlanDocument = gql `
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
export function useGetPlanQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(GetPlanDocument, options);
}
export function useGetPlanLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(GetPlanDocument, options);
}
export const GetAppThemeDocument = gql `
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
export function useGetAppThemeQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(GetAppThemeDocument, options);
}
export function useGetAppThemeLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(GetAppThemeDocument, options);
}
export const GetAdminAppDocument = gql `
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
export function useGetAdminAppQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(GetAdminAppDocument, options);
}
export function useGetAdminAppLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(GetAdminAppDocument, options);
}
export const UpdateAppDocument = gql `
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
export function useUpdateAppMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(UpdateAppDocument, options);
}
export const UpdateCustomizationFieldsDocument = gql `
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
export function useUpdateCustomizationFieldsMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(UpdateCustomizationFieldsDocument, options);
}
export const CreateDeliveryZoneDocument = gql `
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
export function useCreateDeliveryZoneMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(CreateDeliveryZoneDocument, options);
}
export const DeleteDeliveryZoneDocument = gql `
  mutation DeleteDeliveryZone($id: uuid!) {
    delete_delivery_zone_by_pk(id: $id) {
      id
    }
  }
`;
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
export function useDeleteDeliveryZoneMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(DeleteDeliveryZoneDocument, options);
}
export const GetDeliveryZoneByAppIdDocument = gql `
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
export function useGetDeliveryZoneByAppIdQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(GetDeliveryZoneByAppIdDocument, options);
}
export function useGetDeliveryZoneByAppIdLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(GetDeliveryZoneByAppIdDocument, options);
}
export const GetDeliveryZonesDocument = gql `
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
export function useGetDeliveryZonesQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(GetDeliveryZonesDocument, options);
}
export function useGetDeliveryZonesLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(GetDeliveryZonesDocument, options);
}
export const CreateGateV2Document = gql `
  mutation CreateGateV2(
    $discount: Int
    $exclusive_access: Boolean
    $name: String
    $product_id: uuid
    $segments: segment_arr_rel_insert_input
    $unique_claim: Boolean = false
  ) {
    insert_gate_v2_one(
      object: {
        discount: $discount
        exclusive_access: $exclusive_access
        name: $name
        product_id: $product_id
        segments: $segments
        unique_claim: $unique_claim
      }
    ) {
      id
      discount
      name
    }
  }
`;
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
 *   },
 * });
 */
export function useCreateGateV2Mutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(CreateGateV2Document, options);
}
export const GetGatesV2ByProductIdDocument = gql `
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
export function useGetGatesV2ByProductIdQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(GetGatesV2ByProductIdDocument, options);
}
export function useGetGatesV2ByProductIdLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(GetGatesV2ByProductIdDocument, options);
}
export const GetGates_V2Document = gql `
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
export function useGetGates_V2Query(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(GetGates_V2Document, options);
}
export function useGetGates_V2LazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(GetGates_V2Document, options);
}
export const GetGates_V2_ByAppIdDocument = gql `
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
export function useGetGates_V2_ByAppIdQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(GetGates_V2_ByAppIdDocument, options);
}
export function useGetGates_V2_ByAppIdLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(GetGates_V2_ByAppIdDocument, options);
}
export const PushClaimsDocument = gql `
  mutation PushClaims($gate_id: uuid!, $claims: jsonb!) {
    update_gate_v2_by_pk(_append: { claims: $claims }, pk_columns: { id: $gate_id }) {
      id
      claims
    }
  }
`;
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
export function usePushClaimsMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(PushClaimsDocument, options);
}
export const DeleteGateV2Document = gql `
  mutation DeleteGateV2($id: uuid!) {
    delete_gate_v2_by_pk(id: $id) {
      id
    }
  }
`;
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
export function useDeleteGateV2Mutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(DeleteGateV2Document, options);
}
export const CreateGateDocument = gql `
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
export function useCreateGateMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(CreateGateDocument, options);
}
export const DeleteGateFromIdDocument = gql `
  mutation DeleteGateFromId($id: uuid!) {
    delete_gate(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;
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
export function useDeleteGateFromIdMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(DeleteGateFromIdDocument, options);
}
export const GetGatesDocument = gql `
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
export function useGetGatesQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(GetGatesDocument, options);
}
export function useGetGatesLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(GetGatesDocument, options);
}
export const GetProductGateDocument = gql `
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
export function useGetProductGateQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(GetProductGateDocument, options);
}
export function useGetProductGateLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(GetProductGateDocument, options);
}
export const CreateOrderDocument = gql `
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
export function useCreateOrderMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(CreateOrderDocument, options);
}
export const CreateSurveyOrderDocument = gql `
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
export function useCreateSurveyOrderMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(CreateSurveyOrderDocument, options);
}
export const GetOrdersByAddressDocument = gql `
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
export function useGetOrdersByAddressQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(GetOrdersByAddressDocument, options);
}
export function useGetOrdersByAddressLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(GetOrdersByAddressDocument, options);
}
export const GetOrdersDocument = gql `
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
export function useGetOrdersQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(GetOrdersDocument, options);
}
export function useGetOrdersLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(GetOrdersDocument, options);
}
export const CreatePollDocument = gql `
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
export function useCreatePollMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(CreatePollDocument, options);
}
export const DeletePollDocument = gql `
  mutation DeletePoll($id: uuid!) {
    delete_poll_by_pk(id: $id) {
      id
    }
  }
`;
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
export function useDeletePollMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(DeletePollDocument, options);
}
export const UpdatePollDocument = gql `
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
export function useUpdatePollMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(UpdatePollDocument, options);
}
export const GetPollByIdDocument = gql `
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
export function useGetPollByIdQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(GetPollByIdDocument, options);
}
export function useGetPollByIdLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(GetPollByIdDocument, options);
}
export const GetPollsDocument = gql `
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
export function useGetPollsQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(GetPollsDocument, options);
}
export function useGetPollsLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(GetPollsDocument, options);
}
export const GetAdminPollsDocument = gql `
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
export function useGetAdminPollsQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(GetAdminPollsDocument, options);
}
export function useGetAdminPollsLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(GetAdminPollsDocument, options);
}
export const TogglePollCompletedDocument = gql `
  mutation TogglePollCompleted($id: uuid!, $completed: Boolean!) {
    update_poll_by_pk(pk_columns: { id: $id }, _set: { completed: $completed }) {
      id
      completed
    }
  }
`;
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
export function useTogglePollCompletedMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(TogglePollCompletedDocument, options);
}
export const VoteDocument = gql `
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
export function useVoteMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(VoteDocument, options);
}
export const CreateProductDocument = gql `
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
export function useCreateProductMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(CreateProductDocument, options);
}
export const CreateAdminProductDocument = gql `
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
export function useCreateAdminProductMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(CreateAdminProductDocument, options);
}
export const DeleteProductDocument = gql `
  mutation DeleteProduct($id: uuid) {
    delete_product(where: { id: { _eq: $id } }) {
      returning {
        id
        app_id
      }
    }
  }
`;
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
export function useDeleteProductMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(DeleteProductDocument, options);
}
export const EditProductDocument = gql `
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
export function useEditProductMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(EditProductDocument, options);
}
export const GetProductByIdDocument = gql `
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
export function useGetProductByIdQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(GetProductByIdDocument, options);
}
export function useGetProductByIdLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(GetProductByIdDocument, options);
}
export const GetProductsDocument = gql `
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
export function useGetProductsQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(GetProductsDocument, options);
}
export function useGetProductsLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(GetProductsDocument, options);
}
export const GetAdminProductsDocument = gql `
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
export function useGetAdminProductsQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(GetAdminProductsDocument, options);
}
export function useGetAdminProductsLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(GetAdminProductsDocument, options);
}
export const GetUserDocument = gql `
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
export function useGetUserQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(GetUserDocument, options);
}
export function useGetUserLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(GetUserDocument, options);
}
