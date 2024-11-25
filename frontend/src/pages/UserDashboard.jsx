

// import styled from "styled-components";
// import LoginNavbar from "../components/LoginNavbar";
// import Footer from "../components/Footer";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   CircularProgress,
//   Button,
// } from "@mui/material";
// import { BarChart, Delete, Edit, Visibility } from "@mui/icons-material";
// import { useEffect, useState } from "react";
// import Popup from "reactjs-popup";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import { motion } from "framer-motion";
// import "react-toastify/dist/ReactToastify.css";

// const CreateButton = styled(motion.button)`
//   font-size: 18px;
//   font-weight: bold;
//   margin-bottom: 2%;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 8px;
//   background-color: #00adb5;
//   color: white;
//   cursor: pointer;
//   &:hover {
//     background-color: #019ca2;
//     transform: scale(1.1);
//   }
// `;

// const Dashboard = (CUId) => {
//   const notify = () => toast.success("Link successfully copied to the clipboard");

//   const [isLoading, setIsLoading] = useState(true);
//   const [examName, setExamName] = useState("");
//   const [examNameStorage, setExamNameStorage] = useState([]);
//   const [refresh, setRefresh] = useState(0);

//   const fetchExamNames = async () => {
//     try {
//       const { data } = await axios.get(`http://localhost:5000/exam/${CUId.CUId}`);
//       setExamNameStorage(data);
//     } catch (error) {
//       toast.error("Failed to load exams.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/exam/${id}`);
//       toast.success("Exam deleted successfully!");
//       setRefresh((prev) => prev + 1);
//     } catch (error) {
//       toast.error("Error deleting exam.");
//     }
//   };

//   useEffect(() => {
//     fetchExamNames();
//   }, [refresh]);

//   const handleCreateExam = async () => {
//     if (!examName.trim()) {
//       toast.warning("Please provide a valid name for the exam.");
//       return;
//     }

//     try {
//       const newExam = { creatorUserId: CUId.CUId, examname: examName };
//       await axios.post("http://localhost:5000/exam/", newExam);
//       toast.success("Exam created successfully!");
//       setRefresh((prev) => prev + 1);
//       setExamName("");
//     } catch (error) {
//       toast.error("Error creating exam.");
//     }
//   };

//   return (
//     <>
//       <LoginNavbar />
//       <div style={{ padding: "20px" }}>
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           style={{ textAlign: "center", marginBottom: "20px" }}
//         >
//           <Popup
//             trigger={<CreateButton>Create New Exam</CreateButton>}
//             modal
//             nested
//           >
//             {(close) => (
//               <div style={{ padding: "20px", backgroundColor: "#f5f5f5", borderRadius: "10px" }}>
//                 <h3>Create Exam</h3>
//                 <input
//                   type="text"
//                   placeholder="Enter Exam Name"
//                   value={examName}
//                   onChange={(e) => setExamName(e.target.value)}
//                   style={{
//                     width: "100%",
//                     padding: "10px",
//                     borderRadius: "5px",
//                     border: "1px solid #ccc",
//                     marginBottom: "10px",
//                   }}
//                 />
//                 <div>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => {
//                       handleCreateExam();
//                       close();
//                     }}
//                   >
//                     Create
//                   </Button>
//                   <Button
//                     variant="outlined"
//                     style={{ marginLeft: "10px" }}
//                     onClick={() => close()}
//                   >
//                     Cancel
//                   </Button>
//                 </div>
//               </div>
//             )}
//           </Popup>
//         </motion.div>

//         {isLoading ? (
//           <div style={{ textAlign: "center" }}>
//             <CircularProgress />
//           </div>
//         ) : (
//           <TableContainer component={Paper} style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
//             <Table>
//               <TableHead>
//                 <TableRow style={{ backgroundColor: "#f5f5f5" }}>
//                   <TableCell>Exam Name</TableCell>
//                   <TableCell align="right">Analyze</TableCell>
//                   <TableCell align="right">Preview</TableCell>
//                   <TableCell align="right">Edit</TableCell>
//                   <TableCell align="right">Delete</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {examNameStorage.map((exam) => (
//                   <TableRow key={exam._id}>
//                     <TableCell>{exam.examname}</TableCell>
//                     <TableCell align="right">
//                       <Link to={`/analyze/${exam._id}`}>
//                         <Button startIcon={<BarChart />}>Analyze</Button>
//                       </Link>
//                     </TableCell>
//                     <TableCell align="right">
//                       <Link to={`/quiz/${exam._id}`}>
//                         <Button startIcon={<Visibility />}>Preview</Button>
//                       </Link>
//                     </TableCell>
//                     <TableCell align="right">
//                       <Link to={`/edit/${exam._id}`}>
//                         <Button startIcon={<Edit />}>Edit</Button>
//                       </Link>
//                     </TableCell>
//                     <TableCell align="right">
//                       <Button
//                         startIcon={<Delete />}
//                         onClick={() => handleDelete(exam._id)}
//                         color="error"
//                       >
//                         Delete
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         )}
//       </div>
//       <Footer />
//       <ToastContainer />
//     </>
//   );
// };

// export default Dashboard;
