SELECT teachers.name as teacher,
students.name as student,
assignments.name as assignment,
(assistance_requests.completed_at - assistance_requests.started_at) as duration
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id 
JOIN assignments ON assignments.id = assignment_id
JOIN students ON student_id = students.id
ORDER BY duration;
