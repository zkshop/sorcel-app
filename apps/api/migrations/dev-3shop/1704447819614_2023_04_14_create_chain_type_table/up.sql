-- Créer la table chain_type
CREATE TABLE chain_type (
    value TEXT PRIMARY KEY
);

-- Insérer les valeurs
INSERT INTO chain_type (value) VALUES (E'EVM'), (E'XRP');