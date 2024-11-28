# Instructions for using Assign-Mentor API

# To create a student using api
API: <domain>/student/add (POST)
data: provide a data as json from body
i.e., {name: "example", email: "example@gmail.com"}

# API to create a mentor
POST API: <domain>/mentor/add
JSON data need to be passed from body
i.e., {name: "example", email: "example@gmail.com"}

# Assign a student to a particular mentor

POST API: <domain>/mentor/assign-student/:{mentorId}
data: Provide a mentor id through the params and student id through body as json data. i.e., 
    <domain>/mentor/assign-student/:{mentorId}
    {studentId: 1234556666666}

# To list all the students of a particular mentor
GET API: <domain>/mentor/get-students/:{mentorId}
data: Provide a particular mentor id through params