
ALTER TABLE product
DROP COLUMN utility;

ALTER TABLE product
DROP COLUMN "webhookUrl";

ALTER TABLE product
DROP COLUMN IF EXISTS "poapId",
DROP COLUMN IF EXISTS "collection",
DROP COLUMN IF EXISTS "curation",
DROP COLUMN IF EXISTS "discount",
DROP COLUMN IF EXISTS "isDiscountGated";

ALTER TABLE gate_v2
DROP CONSTRAINT IF EXISTS gate_v2_product_id_fkey;

ALTER TABLE gate_v2
ADD CONSTRAINT gate_v2_product_id_fkey
FOREIGN KEY (product_id)
REFERENCES product (id)
ON DELETE CASCADE;
ALTER TABLE gate_v2
ADD COLUMN claims JSONB NOT NULL DEFAULT jsonb_build_array();

ALTER TABLE gate_v2
ADD COLUMN "unique_claim" BOOLEAN NOT NULL DEFAULT FALSE;

CREATE TABLE "public"."product_type" ("value" text NOT NULL, PRIMARY KEY ("value") );

INSERT INTO "public"."product_type"("value") VALUES (E'COMMERCE');

INSERT INTO "public"."product_type"("value") VALUES (E'MODAL');

ALTER TABLE product
ADD COLUMN "type" TEXT NOT NULL DEFAULT 'COMMERCE',
ADD FOREIGN KEY (type) REFERENCES product_type(value)
ALTER TABLE product
ADD COLUMN "webhookUrl" TEXT;

ALTER TABLE poll
ADD COLUMN completed BOOLEAN NOT NULL DEFAULT FALSE;

CREATE TABLE "public"."plan" ("value" text NOT NULL, PRIMARY KEY ("value") );

INSERT INTO "public"."plan"("value") VALUES (E'FREE');

INSERT INTO "public"."plan"("value") VALUES (E'PRO');

ALTER TABLE app
ADD COLUMN plan TEXT DEFAULT 'FREE',
ADD FOREIGN KEY (plan) REFERENCES plan(value);
ALTER TABLE poll
ADD COLUMN app_id UUID,
ADD FOREIGN KEY (app_id) REFERENCES app(id);

ALTER TABLE app
ADD COLUMN background_color TEXT,
ADD COLUMN font_color TEXT,
ADD COLUMN font TEXT;

ALTER TABLE app
ADD COLUMN show_brand BOOLEAN DEFAULT false;

alter table "public"."app" add column "created_at" timestamptz
 null default now();

alter table "public"."app" drop column "created_at" cascade;

alter table "public"."app" add column "created_at" timestamptz
 null default now();

ALTER TABLE "public"."app"
ADD COLUMN "show_connect_email" BOOLEAN DEFAULT false;
