// function ProjectsListPage({
//   passProjectDataList,
//   returnCreatePage,
//   selectedProject,
// }) {
//   return (
//     <>
//       <div className="w-screen h-screen  mt-2 ml-5 mb-5 mr-5  p-3 bg-white   border-gray-800 rounded-md  shadow-lg mx-2 ">
//         <div className="bg-gray-200 flex justify-end ">
//           {" "}
//           <button
//             onClick={returnCreatePage}
//             className="bg-sky-300 text-gray-800 py-2 px-3 text-lg font-serif rounded-md hover:bg-sky-600 hover:text-gray-950 mt-2 mb-2 ml-2 mr-2"
//           >
//             Create Project
//           </button>
//         </div>
//         <div>
//           <ul className="flex flex-col ">
//             {passProjectDataList?.map((projects) => (
//               <p key={projects.id}>
//                 <button
//                   onClick={() => selectedProject(projects.id)}
//                   className="bg-sky-500 text-gray-800  p-3 mt-2 rounded-md mr-3"
//                 >
//                   {projects.title}
//                 </button>
//                 <button className="text-gray-900 bg-gray-500 p-3 mt-2 rounded-md">
//                   Clear
//                 </button>
//               </p>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }
// export default ProjectsListPage;
