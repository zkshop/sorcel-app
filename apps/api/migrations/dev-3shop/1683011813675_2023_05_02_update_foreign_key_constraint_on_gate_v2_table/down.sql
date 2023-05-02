ALTER TABLE gate_v2
DROP CONSTRAINT IF EXISTS gate_v2_product_id_fkey;

ALTER TABLE gate_v2
ADD CONSTRAINT gate_v2_product_id_fkey
FOREIGN KEY (product_id)
REFERENCES product (id);
