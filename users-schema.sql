-- Create users table
CREATE TABLE IF NOT EXISTS users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    email_address TEXT NOT NULL,
    created_at INTEGER DEFAULT (unixepoch()),
    deleted INTEGER DEFAULT 0,
    settings TEXT DEFAULT '{}'
);

-- Insert sample data
INSERT INTO users (user_id,email_address,created_at,deleted,settings) VALUES 
    (3,，'test1@example.com'，1713877029，0，'A'),
    (4，'test2@example.com'，1713877029，1，'A'),
    (5，'test3@example.com'，1713877029，0，'B');
