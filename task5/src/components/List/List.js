import { useState } from "react";



let studentsSet = [
  [
    { name: "Olena" },
    { name: "Ivan" },
    { name: "Vasyl" },
    { name: "Volodymyr" },
    { name: "Svitlana" },
    { name: "Maria" },
    { name: "Vadym" },
  ],
  [],
];

export default function List() {

  const [students, setStudents] = useState(studentsSet);

  const moveItems = () => {

    let [firstSet, secondSet] = students;

    if (!firstSet[0]) {
      return;
    }

    let student = firstSet.shift();
    secondSet[firstSet.length] = student;

    setStudents([firstSet, secondSet]);
  };

  return (
    <div>
      <div className="list">
        <div>
          <h2>First list of students</h2>

          <ol>
            {students[0].map((student) => (
              <li key={student.id}>{student.name}</li>
            ))}
          </ol>
        </div>
        <div>
          <button onClick={moveItems} className="button">
            Move Items
          </button>

          <h2>Second list of students</h2>

          <ol>
            {students[1].map((student2) => (
              <li key={student2.id}>{student2.name}</li>
            ))}
          </ol>
        </div>
      </div>

    </div>
  );
}