alter table "public"."gate_v2"
  add constraint "gate_v2_chain_fkey"
  foreign key ("chain")
  references "public"."chain_type"
  ("value") on update no action on delete no action;
