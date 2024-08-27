# AS to create a alias to field in the table
SELECT name, init_date AS 'FECHA_INICIO'
FROM users
WHERE name = 'Alex';

# AS to create aliases of table
SELECT *
FROM users AS Usuario
WHERE Usuario.name IN ('alex', 'ava');