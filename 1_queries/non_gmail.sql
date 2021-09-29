SELECT name,id, email
FROM students
WHERE email NOT LIKE '%gmail%'
AND phone IS NULL;
