import { useState, useEffect } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import { toast, ToastContainer } from "react-toastify";
import type { studentType } from "./utils/global";

export default function App() {
  const [allStudents, setAllStudents] = useState<studentType[]>(() => {
    const savedStudents = localStorage.getItem("students");
    if (savedStudents) {
      return JSON.parse(savedStudents);
    }
    return [];
  });

  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editStudent, setEditStudent] = useState<studentType>();

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(allStudents));
  }, [allStudents]);

  const deleteStudent = (index: number) => {

    const updatedStudents = allStudents.filter((_, i) => i !== index);
    setAllStudents(updatedStudents);
    
    toast.success("Student deleted successfully..");
  }

  const updateStudent = (index: number) => {
    setEditIndex(index);

    setEditStudent(allStudents[index]);
  }


  return (
    <>
        <Form allStudents={allStudents} setAllStudents={setAllStudents} editStudent={editStudent} editIndex={editIndex} setEditIndex={setEditIndex} />
        <Table allStudents={allStudents} deleteStudent={deleteStudent} updateStudent={updateStudent} />
        <ToastContainer />
    </>
  );
}
