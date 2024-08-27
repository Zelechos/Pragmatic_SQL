# NOT to get all users with age different like 29
SELECT *
FROM hello_sql.users
WHERE NOT age = 29;

# NOT & AND to get all users with age different like 29 and minor than 30
SELECT name, surname, age, email
FROM users
WHERE NOT age = 29
  AND age < 30
ORDER BY name;

# NOT & OR to get all user with the age 29 or domain email is gmail
SELECT name, age, email
FROM users
WHERE NOT age != 29
   OR email LIKE '%@gmail.com'
ORDER BY age DESC;