
ALTER TABLE "public"."app"
DROP COLUMN "show_connect_email";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."app" add column "created_at" timestamptz
--  null default now();

comment on column "public"."app"."created_at" is E'app table';
alter table "public"."app" alter column "created_at" set default now();
alter table "public"."app" alter column "created_at" drop not null;
alter table "public"."app" add column "created_at" timestamptz;

ALTER TABLE "public"."app"
DROP COLUMN "created_at";
ALTER TABLE app
DROP COLUMN show_brand;

ALTER TABLE app
DROP COLUMN background_color,
DROP COLUMN font_color,
DROP COLUMN font;

ALTER TABLE poll
DROP COLUMN app_id;

ALTER TABLE app
DROP COLUMN plan;

DELETE FROM "public"."plan" WHERE "value" = 'PRO';

DELETE FROM "public"."plan" WHERE "value" = 'FREE';

DROP TABLE "public"."plan";

ALTER TABLE poll
DROP COLUMN completed;

ALTER TABLE product
DROP COLUMN "webhookUrl";

ALTER TABLE product

DROP COLUMN type;
DELETE FROM "public"."product_type" WHERE "value" = 'MODAL';

DELETE FROM "public"."product_type" WHERE "value" = 'COMMERCE';

DROP TABLE "public"."product_type";

ALTER TABLE gate_v2
DROP COLUMN "unique_claim";

ALTER TABLE gate_v2
DROP COLUMN claims;

ALTER TABLE gate_v2
DROP CONSTRAINT IF EXISTS gate_v2_product_id_fkey;

ALTER TABLE gate_v2
ADD CONSTRAINT gate_v2_product_id_fkey
FOREIGN KEY (product_id)
REFERENCES product (id);

ALTER TABLE product
ADD COLUMN "poapId" INTEGER,
ADD COLUMN "collection" TEXT,
ADD COLUMN "curation" TEXT,
ADD COLUMN "discount" INTEGER,
ADD COLUMN "isDiscountGated" BOOLEAN DEFAULT FALSE;

ALTER TABLE product
ADD COLUMN "webhookUrl" TEXT;

ALTER TABLE product
ADD COLUMN utility TEXT;
