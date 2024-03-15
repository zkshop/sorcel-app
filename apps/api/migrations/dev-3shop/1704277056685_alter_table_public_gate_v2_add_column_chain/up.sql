DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_attribute WHERE attrelid = 'public.gate_v2'::regclass AND attname = 'chain' AND NOT attisdropped) THEN
        ALTER TABLE "public"."gate_v2" ADD COLUMN "chain" text NOT NULL DEFAULT 'EVM';
    END IF;
END
$$;
