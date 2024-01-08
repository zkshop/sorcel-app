INSERT INTO network (value) VALUES (E'XRPLEDGER');

CREATE TABLE "public"."chain_type" ("value" text NOT NULL DEFAULT 'EVM', PRIMARY KEY ("value") );

INSERT INTO "public"."chain_type" ("value") VALUES ('XRP');
INSERT INTO "public"."chain_type" ("value") VALUES ('EVM');

ALTER TABLE gate_v2
ADD COLUMN chain TEXT,
ADD FOREIGN KEY (chain) REFERENCES chain_type(value);
