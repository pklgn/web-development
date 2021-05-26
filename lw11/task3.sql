SELECT
    student.first_name,
    student.last_name,
    student.age
FROM
    student
    JOIN `group` ON student.group_id = `group`.id
    JOIN faculty f ON `group`.faculty_id = f.id
WHERE
    faculty_id = 1;