ALTER TABLE gate_v2
ADD COLUMN chain TEXT,
ADD FOREIGN KEY (chain) REFERENCES chain_type(value);