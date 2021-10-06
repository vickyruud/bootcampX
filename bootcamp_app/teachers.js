const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];
const values = [`%${cohortName}`];
const queryText = `SELECT DISTINCT(teachers.name) as teacher,
cohorts.name as cohort
FROM assistance_requests
JOIN teachers ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id 
WHERE cohorts.name LIKE $1
ORDER by teacher;
`

pool.query(queryText, values)
.then(res => {
  console.log('connected')
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  });

})
.catch(err => console.error(`query error`, err.stack));