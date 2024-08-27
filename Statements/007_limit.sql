# LIMIT to get users limit by a number
SELECT *
FROM users
LIMIT 4;

# LIMIT to get 9 users
SELECT *
FROM users
ORDER BY age
LIMIT 9;

# LIMIT & WHERE & AND & NOT & LIKE get all users with the domain email like example and age different of 28
SELECT name, age, email
FROM users
WHERE email LIKE '%@example%'
  AND NOT age = 28
ORDER BY age
LIMIT 4;