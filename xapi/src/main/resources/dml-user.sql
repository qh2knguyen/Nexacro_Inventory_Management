-- DML: dữ liệu mẫu cho bảng users
INSERT INTO users (username, password, email)
VALUES
    ('admin', '123456', 'admin@demo.com'),
    ('user01', '123456', 'user01@demo.com'),
    ('user02', '123456', 'user02@demo.com')
ON CONFLICT (username) DO NOTHING;

ON CONFLICT (email) DO NOTHING;
