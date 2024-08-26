# WHERE To get a rows that meet of condition
SELECT *
FROM hello_sql.users
WHERE age = 29;

# WHERE to get a users with the age greater than
SELECT *
FROM hello_sql.users
WHERE age > 30;

# WHERE to get a users with the age minor than
SELECT *
FROM hello_sql.users
WHERE age < 20;

# WHERE to get users with the user_id greater than
SELECT *
FROM hello_sql.users
WHERE user_id > 5;

# WHERE and DISTINCT
SELECT DISTINCT name, age
FROM hello_sql.users
WHERE age = 29;

# WHERE and DISTINCT get age of users
SELECT DISTINCT age
FROM hello_sql.users
WHERE age = 29;

