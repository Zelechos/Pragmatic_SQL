# NULL to get all users with the email null
SELECT *
FROM users
WHERE surname IS NULL;

# NUll to get all user with the email NOT NULL
SELECT *
FROM users
WHERE email IS NOT NULL
  AND age = 29
LIMIT 9;