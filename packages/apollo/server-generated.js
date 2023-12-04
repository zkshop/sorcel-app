import gql from 'graphql-tag';
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
export const GetPlanDocument = gql `
    query getPlan($appId: uuid!) {
  app: app_by_pk(id: $appId) {
    id
    plan
  }
}
    `;
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
export const UpdateAppDocument = gql `
    mutation UpdateApp($appId: uuid!, $newName: String!, $newImgUrl: String) {
  update_app(
    where: {id: {_eq: $appId}}
    _set: {name: $newName, imgUrl: $newImgUrl}
  ) {
    returning {
      id
      imgUrl
      name
    }
  }
}
    `;
export const UpdateCustomizationFieldsDocument = gql `
    mutation updateCustomizationFields($id: uuid!, $background_color: String, $font_color: String, $font: String, $show_brand: Boolean, $show_connect_email: Boolean) {
  update_app_by_pk(
    pk_columns: {id: $id}
    _set: {background_color: $background_color, font_color: $font_color, font: $font, show_brand: $show_brand, show_connect_email: $show_connect_email}
  ) {
    background_color
    font
    font_color
    show_brand
    show_connect_email
  }
}
    `;
export const CreateDeliveryZoneDocument = gql `
    mutation CreateDeliveryZone($name: String, $fees: Int, $countries: jsonb) {
  insert_delivery_zone(objects: {countries: $countries, fees: $fees, name: $name}) {
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
export const DeleteDeliveryZoneDocument = gql `
    mutation DeleteDeliveryZone($id: uuid!) {
  delete_delivery_zone_by_pk(id: $id) {
    id
  }
}
    `;
export const GetDeliveryZoneByAppIdDocument = gql `
    query GetDeliveryZoneByAppId($_eq: uuid) {
  delivery_zone(where: {app_id: {_eq: $_eq}}) {
    name
    id
    fees
    countries
    app_id
  }
}
    `;
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
export const CreateGateV2Document = gql `
    mutation CreateGateV2($discount: Int, $exclusive_access: Boolean, $name: String, $product_id: uuid, $segments: segment_arr_rel_insert_input, $unique_claim: Boolean = false) {
  insert_gate_v2_one(
    object: {discount: $discount, exclusive_access: $exclusive_access, name: $name, product_id: $product_id, segments: $segments, unique_claim: $unique_claim}
  ) {
    id
    discount
    name
  }
}
    `;
export const GetGatesV2ByProductIdDocument = gql `
    query GetGatesV2ByProductId($productId: uuid) {
  gate_v2(where: {product_id: {_eq: $productId}}) {
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
export const GetGates_V2_ByAppIdDocument = gql `
    query GetGates_V2_ByAppId($app_id: uuid) {
  gates: gate_v2(where: {app_id: {_eq: $app_id}}) {
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
export const PushClaimsDocument = gql `
    mutation PushClaims($gate_id: uuid!, $claims: jsonb!) {
  update_gate_v2_by_pk(_append: {claims: $claims}, pk_columns: {id: $gate_id}) {
    id
    claims
  }
}
    `;
export const DeleteGateV2Document = gql `
    mutation DeleteGateV2($id: uuid!) {
  delete_gate_v2_by_pk(id: $id) {
    id
  }
}
    `;
export const CreateGateDocument = gql `
    mutation CreateGate($attributes: jsonb!, $contractAddress: String!, $discount: Int!, $productId: uuid!) {
  insert_gate_one(
    object: {attributes: $attributes, contractAddress: $contractAddress, discount: $discount, product_id: $productId}
  ) {
    attributes
    contractAddress
    discount
    id
    product_id
  }
}
    `;
export const DeleteGateFromIdDocument = gql `
    mutation DeleteGateFromId($id: uuid!) {
  delete_gate(where: {id: {_eq: $id}}) {
    returning {
      id
    }
  }
}
    `;
export const GetGatesDocument = gql `
    query GetGates {
  gates: gate(order_by: {discount: desc}) {
    id
    product_id
    attributes
    contractAddress
    discount
  }
}
    `;
export const GetProductGateDocument = gql `
    query GetProductGate($productId: uuid) {
  gates: gate(where: {product_id: {_eq: $productId}}, order_by: {discount: desc}) {
    id
    product_id
    attributes
    contractAddress
    discount
  }
}
    `;
export const CreateOrderDocument = gql `
    mutation CreateOrder($address: String!, $email: String!, $firstname: String!, $lastname: String!, $product_id: uuid!, $app_id: uuid!) {
  insert_order_one(
    object: {address: $address, email: $email, firstname: $firstname, lastname: $lastname, product_id: $product_id, app_id: $app_id}
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
export const CreateSurveyOrderDocument = gql `
    mutation CreateSurveyOrder($address: String!, $email: String!, $firstname: String!, $lastname: String!, $product_id: uuid!, $app_id: uuid!) {
  insert_order_one(
    object: {address: $address, email: $email, firstname: $firstname, lastname: $lastname, product_id: $product_id, app_id: $app_id}
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
export const GetOrdersByAddressDocument = gql `
    query GetOrdersByAddress($address: String!) {
  orders: order(where: {address: {_eq: $address}}) {
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
export const CreatePollDocument = gql `
    mutation CreatePoll($title: String!, $image: String!, $gate: String!, $description: String = "", $data: [choice_insert_input!] = {}) {
  insert_poll(
    objects: {title: $title, image: $image, gate: $gate, description: $description, choices: {data: $data}}
  ) {
    affected_rows
  }
}
    `;
export const DeletePollDocument = gql `
    mutation DeletePoll($id: uuid!) {
  delete_poll_by_pk(id: $id) {
    id
  }
}
    `;
export const UpdatePollDocument = gql `
    mutation updatePoll($id: uuid!, $description: String, $gate: String, $image: String, $title: String, $choice_to_delete: [uuid!] = {}, $choice_to_insert: [choice_insert_input!] = {}) {
  update_poll_by_pk(
    pk_columns: {id: $id}
    _set: {description: $description, gate: $gate, image: $image, title: $title}
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
  delete_choice(where: {id: {_in: $choice_to_delete}}) {
    affected_rows
  }
  insert_choice(objects: $choice_to_insert) {
    affected_rows
  }
}
    `;
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
export const GetPollsDocument = gql `
    query GetPolls($app_id: uuid!) {
  polls: poll(where: {app_id: {_eq: $app_id}}, order_by: {created_at: desc}) {
    id
    title
    voters
    description
    image
    completed
  }
}
    `;
export const GetAdminPollsDocument = gql `
    query GetAdminPolls {
  polls: poll(order_by: {created_at: desc}) {
    id
    title
    voters
    description
    image
    completed
  }
}
    `;
export const TogglePollCompletedDocument = gql `
    mutation TogglePollCompleted($id: uuid!, $completed: Boolean!) {
  update_poll_by_pk(pk_columns: {id: $id}, _set: {completed: $completed}) {
    id
    completed
  }
}
    `;
export const VoteDocument = gql `
    mutation Vote($pollId: uuid!, $voters: jsonb, $choiceId: uuid!) {
  choice: update_choice_by_pk(pk_columns: {id: $choiceId}, _inc: {count: 1}) {
    id
    count
  }
  poll: update_poll_by_pk(pk_columns: {id: $pollId}, _append: {voters: $voters}) {
    id
    voters
  }
}
    `;
export const CreateProductDocument = gql `
    mutation CreateProduct($appId: uuid!, $price: Int!, $name: String!, $description: String!, $image: String!) {
  insert_product_one(
    object: {app_id: $appId, image: $image, name: $name, description: $description, price: $price}
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
export const CreateAdminProductDocument = gql `
    mutation CreateAdminProduct($price: Int!, $name: String!, $description: String!, $image: String!, $type: product_type_enum!, $webhookUrl: String) {
  insert_product_one(
    object: {image: $image, name: $name, description: $description, price: $price, type: $type, webhookUrl: $webhookUrl}
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
export const DeleteProductDocument = gql `
    mutation DeleteProduct($id: uuid) {
  delete_product(where: {id: {_eq: $id}}) {
    returning {
      id
      app_id
    }
  }
}
    `;
export const EditProductDocument = gql `
    mutation EditProduct($id: uuid!, $image: String!, $name: String, $description: String!, $price: Int!, $webhookUrl: String) {
  update_product(
    _set: {image: $image, name: $name, description: $description, price: $price, webhookUrl: $webhookUrl}
    where: {id: {_eq: $id}}
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
    ${GateFieldsFragmentDoc}`;
export const GetProductsDocument = gql `
    query GetProducts($appId: uuid!) {
  products: product(where: {app_id: {_eq: $appId}}) {
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
    ${GateFieldsFragmentDoc}`;
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
export const GetUserDocument = gql `
    query GetUser {
  user {
    app_id
    id
    role
  }
}
    `;
const defaultWrapper = (action, _operationName, _operationType) => action();
export function getSdk(client, withWrapper = defaultWrapper) {
    return {
        getApp(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(GetAppDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'getApp', 'query');
        },
        getPlan(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(GetPlanDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'getPlan', 'query');
        },
        getAppTheme(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(GetAppThemeDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'getAppTheme', 'query');
        },
        getAdminApp(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(GetAdminAppDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'getAdminApp', 'query');
        },
        UpdateApp(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(UpdateAppDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'UpdateApp', 'mutation');
        },
        updateCustomizationFields(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(UpdateCustomizationFieldsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'updateCustomizationFields', 'mutation');
        },
        CreateDeliveryZone(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(CreateDeliveryZoneDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'CreateDeliveryZone', 'mutation');
        },
        DeleteDeliveryZone(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(DeleteDeliveryZoneDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'DeleteDeliveryZone', 'mutation');
        },
        GetDeliveryZoneByAppId(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(GetDeliveryZoneByAppIdDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetDeliveryZoneByAppId', 'query');
        },
        GetDeliveryZones(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(GetDeliveryZonesDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetDeliveryZones', 'query');
        },
        CreateGateV2(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(CreateGateV2Document, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'CreateGateV2', 'mutation');
        },
        GetGatesV2ByProductId(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(GetGatesV2ByProductIdDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetGatesV2ByProductId', 'query');
        },
        GetGates_V2(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(GetGates_V2Document, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetGates_V2', 'query');
        },
        GetGates_V2_ByAppId(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(GetGates_V2_ByAppIdDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetGates_V2_ByAppId', 'query');
        },
        PushClaims(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(PushClaimsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'PushClaims', 'mutation');
        },
        DeleteGateV2(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(DeleteGateV2Document, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'DeleteGateV2', 'mutation');
        },
        CreateGate(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(CreateGateDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'CreateGate', 'mutation');
        },
        DeleteGateFromId(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(DeleteGateFromIdDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'DeleteGateFromId', 'mutation');
        },
        GetGates(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(GetGatesDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetGates', 'query');
        },
        GetProductGate(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(GetProductGateDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetProductGate', 'query');
        },
        CreateOrder(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(CreateOrderDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'CreateOrder', 'mutation');
        },
        CreateSurveyOrder(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(CreateSurveyOrderDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'CreateSurveyOrder', 'mutation');
        },
        GetOrdersByAddress(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(GetOrdersByAddressDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetOrdersByAddress', 'query');
        },
        GetOrders(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(GetOrdersDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetOrders', 'query');
        },
        CreatePoll(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(CreatePollDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'CreatePoll', 'mutation');
        },
        DeletePoll(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(DeletePollDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'DeletePoll', 'mutation');
        },
        updatePoll(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(UpdatePollDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'updatePoll', 'mutation');
        },
        getPollById(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(GetPollByIdDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'getPollById', 'query');
        },
        GetPolls(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(GetPollsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetPolls', 'query');
        },
        GetAdminPolls(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(GetAdminPollsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetAdminPolls', 'query');
        },
        TogglePollCompleted(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(TogglePollCompletedDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'TogglePollCompleted', 'mutation');
        },
        Vote(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(VoteDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'Vote', 'mutation');
        },
        CreateProduct(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(CreateProductDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'CreateProduct', 'mutation');
        },
        CreateAdminProduct(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(CreateAdminProductDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'CreateAdminProduct', 'mutation');
        },
        DeleteProduct(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(DeleteProductDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'DeleteProduct', 'mutation');
        },
        EditProduct(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(EditProductDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'EditProduct', 'mutation');
        },
        GetProductById(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(GetProductByIdDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetProductById', 'query');
        },
        GetProducts(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(GetProductsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetProducts', 'query');
        },
        GetAdminProducts(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(GetAdminProductsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetAdminProducts', 'query');
        },
        GetUser(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(GetUserDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetUser', 'query');
        }
    };
}
