# BETWEEN to apply range to get users
SELECT *
FROM users
WHERE age BETWEEN 27 AND 30;

SELECT *
FROM users
WHERE init_date BETWEEN '2024-01-01' AND '2024-04-30'
ORDER BY init_date
LIMIT 3;

