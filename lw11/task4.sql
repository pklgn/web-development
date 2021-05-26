SELECT
    `group`.name,
    faculty.name
FROM
    student
    JOIN `group` ON student.group_id = `group`.id
    JOIN faculty ON `group`.faculty_id = faculty.id
WHERE
    student.id = 2;