-- Insérer les valeurs
INSERT INTO chain_type (value)
SELECT * FROM (VALUES (E'EVM'), (E'XRP')) AS tmp(value)
WHERE NOT EXISTS (
    SELECT 1 FROM chain_type WHERE value IN (E'EVM', E'XRP')
);
