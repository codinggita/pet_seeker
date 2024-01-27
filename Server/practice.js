const express = require("express");
const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

app.use(express.json());

let students = {
  data: [
    {
      uid: "123456",
      semester1: 3.8,
      semester2: 4.0,
      semester3: 3.5,
      cgpa: 3.9,
    },
    {
      uid: "789012",
      semester1: 3.5,
      semester2: 3.7,
      semester3: 3.9,
      cgpa: 3.8,
    },
    {
        uid: "567890",
        semester1: 3.9,
        semester2: 4.0,
        semester3: 3.8,
        cgpa: 3.6,
      },
      {
        uid: "234567",
        semester1: 3.7,
        semester2: 3.5,
        semester3: 3.6,
        cgpa: 3.5,
      },
      {
        uid: "890123",
        semester1: 3.8,
        semester2: 3.9,
        semester3: 4.0,
        cgpa: 3.9,
      }
  ],
};

// GET - List all students
app.get("/students", (req, res) => {
  res.json(students.data);
});

// GET - Details of a specific student by UID
app.get("/students/:uid", (req, res) => {
  const student = students.data.find((s) => s.uid === req.params.uid);
  if (student) {
    res.json(student);
  } else {
    res.status(404).send("Student not found");
  }
});

// POST - Add a new student
app.post("/students", (req, res) => {
  const newStudent = req.body;
  students.data.push(newStudent);
  res.send("Student added");
});

// PUT - Modify information of a student by UID
app.put("/students/:uid", (req, res) => {
  const uidToUpdate = req.params.uid;
  const index = students.data.findIndex((s) => s.uid === uidToUpdate);
  if (index !== -1) {
    students.data[index] = {
      ...students.data[index],
      ...req.body,
    };
    res.send("Student updated");
  } else {
    res.status(404).send("Student not found");
  }
});

// PATCH - Update information of a student by UID
app.patch("/students/v1/:uid", (req, res) => {
    const uidToUpdate = req.params.uid;
    const index = students.data.findIndex((s) => s.uid === uidToUpdate);
    if (index !== -1) {
      students.data[index] = {
        ...students.data[index],
        ...req.body,
     
      };
      res.send("Student updated");
    } else {
      res.status(404).send("Student not found");
    }
  });
  

// DELETE - Remove a student by UID
app.delete("/students/d1/:uid", (req, res) => {
  const uidToDelete = req.params.uid;
  const index = students.data.findIndex((s) => s.uid === uidToDelete);
  if (index !== -1) {
    students.data.splice(index, 1);
    res.send(`Student with UID ${uidToDelete} deleted`);
  } else {
    res.status(404).send("Student not found");
  }
});

app.get("/*", (req, res) => {
  res.send("You are on the wrong route. Here's the list of possible routes");
});
