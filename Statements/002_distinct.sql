# To select one distinct row of table (because all rows are distincts show all table)
SELECT DISTINCT *
FROM hello_sql.users;

# To select distinct ages of table
SELECT DISTINCT age
FROM hello_sql.users;

# To select distinct name of table
SELECT DISTINCT name
FROM hello_sql.users;

# To select distinct multiple values of tables
SELECT DISTINCT age, name
FROM hello_sql.users;