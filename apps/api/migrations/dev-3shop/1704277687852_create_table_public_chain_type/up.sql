DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_class WHERE relname = 'chain_type' AND relkind = 'r') THEN
        CREATE TABLE "public"."chain_type" ("value" text NOT NULL DEFAULT 'EVM', PRIMARY KEY ("value") );
    END IF;
END
$$;

