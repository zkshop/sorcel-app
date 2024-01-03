comment on column "public"."app"."chain" is E'app table';
alter table "public"."app" alter column "chain" drop not null;
alter table "public"."app" add column "chain" text;
