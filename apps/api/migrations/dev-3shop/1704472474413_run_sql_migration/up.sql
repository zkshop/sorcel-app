DELETE FROM "public"."chain_type" WHERE "value" = 'XRP';
DELETE FROM "public"."chain_type" WHERE "value" = 'EVM';

DROP TABLE "public"."chain_type";

DELETE FROM network WHERE value = E'XRPLEDGER';