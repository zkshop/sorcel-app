ALTER TABLE poll
ADD COLUMN app_id UUID,
ADD FOREIGN KEY (app_id) REFERENCES app(id);
