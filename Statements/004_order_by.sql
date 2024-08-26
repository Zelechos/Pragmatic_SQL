# ORDER BY users
SELECT * FROM hello_sql.users ORDER BY age;

# ORDER BY users by age ascendent
SELECT * FROM hello_sql.users ORDER BY age ASC;

# ORDER BY users by age descendent
SELECT * FROM hello_sql.users ORDER BY age DESC;

# ORDER BY users by name descendent
SELECT * FROM hello_sql.users ORDER BY name DESC;

# ORDER BY users by name ascendent
SELECT *
FROM hello_sql.users
ORDER BY name;

# ORDER BY & WHERE
SELECT user_id, name, age
FROM hello_sql.users
WHERE age < 30
ORDER BY age DESC;

# Exercise 001 - order by age descent for users with age minor than 28 and greater than 20
SELECT *
FROM hello_sql.users
WHERE age <= 28
  AND age >= 20
ORDER BY age DESC;

# Exercise 002 - order by name all user with de age greater than 25
SELECT *
FROM hello_sql.users
WHERE age > 25
ORDER BY name;

# Exercise 003 - order by descendent emails all user with age minor than 30 and exclude the users with 29 years
SELECT *
FROM users
WHERE age < 30
  AND age != 29
ORDER BY email DESC;

