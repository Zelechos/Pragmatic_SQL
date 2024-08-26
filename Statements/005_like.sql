# LIKE to get users with the name begins with the character a
SELECT *
FROM hello_sql.users
WHERE name LIKE 'a%';

# LIKE to get users with domain email example.com
SELECT *
FROM hello_sql.users
WHERE email LIKE '%@example.com'
ORDER BY name;

# LIKE to get users with email .net order by age and the user have minor than 29 year
SELECT *
FROM users
WHERE email LIKE '%.net'
  AND age < 29
ORDER BY age;
