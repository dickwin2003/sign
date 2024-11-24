-- Create users table
CREATE TABLE IF NOT EXISTS users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    email_address TEXT NOT NULL,
    created_at INTEGER DEFAULT (unixepoch()),
    deleted INTEGER DEFAULT 0,
    settings TEXT DEFAULT '{}'
);

-- Insert sample data
INSERT INTO users (email_address, created_at, deleted, settings) VALUES 
    ('test1@example.com', unixepoch(), 0, '{"theme":"light"}'),
    ('test2@example.com', unixepoch(), 0, '{"theme":"dark"}'),
    ('test3@example.com', unixepoch(), 0, '{"theme":"system"}');

-- Indexes
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email_address);
CREATE INDEX IF NOT EXISTS idx_users_created_at ON users(created_at);

-- Comments
-- This schema represents the user management system for the Remix x Cloudflare D1 demo
-- - user_id: Unique identifier for each user
-- - email_address: User's email address (required)
-- - created_at: Timestamp of user creation (Unix epoch)
-- - deleted: Soft delete flag (0 = active, 1 = deleted)
-- - settings: JSON string for user preferences
