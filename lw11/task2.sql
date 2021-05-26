SELECT
    student.first_name,
    student.last_name,
    student.age
FROM
    student
    JOIN `group` ON student.group_id = `group`.id
WHERE
    `group`.id = 2;