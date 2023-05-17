ALTER TABLE gate_v2
ADD COLUMN claims JSONB NOT NULL DEFAULT jsonb_build_array();
