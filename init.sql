CREATE TABLE tenants (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  db_name VARCHAR(100) UNIQUE NOT NULL,
  db_host VARCHAR(255),
  db_username VARCHAR(100),
  db_password TEXT,
  db_port INTEGER NOT NULL DEFAULT 5432,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO tenants (slug, db_name, db_host, db_username, db_password, db_port) VALUES
  ('tenant1', 'tenant_1_db', '192.168.0.202', 'tenant_1_db', 'tenant_1_db', 5433),
  ('tenant2', 'tenant_2_db', '192.168.0.202', 'tenant_2_db', 'tenant_2_db', 5434);
