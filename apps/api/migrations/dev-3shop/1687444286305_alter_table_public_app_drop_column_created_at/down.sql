comment on column "public"."app"."created_at" is E'app table';
alter table "public"."app" alter column "created_at" set default now();
alter table "public"."app" alter column "created_at" drop not null;
alter table "public"."app" add column "created_at" timestamptz;
