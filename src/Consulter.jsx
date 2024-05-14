// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProjetComponent = () => {
//   const [projets, setProjets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [employees, setEmployees] = useState([]);
//   const [selectedEmployee, setSelectedEmployee] = useState('');
//   const [modifiedEtat, setModifiedEtat] = useState('');
//   const [modificationId, setModificationId] = useState('');

//   useEffect(() => {
//     const fetchProjets = async () => {
//       try {
//         const response = await axios.get('http://localhost:7000/projet');
//         setProjets(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching projets:', error);
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchProjets();
//   }, []);

//   const handleSelectProject = async (projectId) => {
//     try {
//       const response = await axios.get(`http://localhost:7000/projet/${projectId}`);
//       setSelectedProject(response.data);

//       // Fetch employees
//       const employeesResponse = await axios.get('http://localhost:7000/employes');
//       setEmployees(employeesResponse.data);
//     } catch (error) {
//       console.error('Error selecting project:', error);
//     }
//   };

//   const handleModify = (id) => {
//     setModificationId(id);
//   };

//   const handleEtatChange = (event) => {
//     setModifiedEtat(event.target.value);
//   };

//   const handleEnvoyer = async () => {
//     try {
//       const projetToUpdate = projets.find(projet => projet._id === modificationId);
//       if (!projetToUpdate) {
//         console.error('Project not found.');
//         return;
//       }

//       const updatedProjet = {
//         ...projetToUpdate,
//         etat: modifiedEtat
//       };

//       const response = await axios.post('http://localhost:7000/projet/add', updatedProjet);
//       console.log('Project updated:', response.data);

//       // Update state to reflect the changes
//       const updatedProjets = projets.map(projet =>
//         projet._id === modificationId ? response.data : projet
//       );
//       setProjets(updatedProjets);

//       // Reset input and modification ID
//       setModifiedEtat('');
//       setModificationId('');
//     } catch (error) {
//       console.error('Error modifying project:', error);
//     }
//   };

//   const handleAffecterEmp = async () => {
//     try {
//       // Send request to assign employee to the project
//       const response = await axios.post('http://localhost:7000/affecter/emp', {
//         projectId: selectedProject._id,
//         employeeId: selectedEmployee
//       });
//       console.log('Employee assigned:', response.data);
//     } catch (error) {
//       console.error('Error assigning employee:', error);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h1>Projet List</h1>
//       <table>
//         <thead>
//           <tr>
//             {/* <th>Service Name</th>
//             <th>Sub Category</th> */}
//             <th>Date</th>
//             {/* <th>Prix</th> */}
//             <th>Lieu</th>
//             <th>Etat</th>
//             <th>Chef Chantier</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {projets.map(projet => (
//             <tr key={projet._id}>
//               {/* <td>{projet.serviceName}</td>
//               <td>{projet.subCategory}</td> */}
//               <td>{projet.date}</td>
//               {/* <td>{projet.prix}</td> */}
//               <td>{projet.lieu}</td>
//               <td>{projet.etat}</td>
//               <td>{projet.chefchantier}</td>
//               <td>
//                 <button onClick={() => handleSelectProject(projet._id)}>Select</button>
//                 <button onClick={() => handleModify(projet._id)}>Modify</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {selectedProject && (
//         <div>
//           <h2>Selected Project Details</h2>
//           {/* <p>Service Name: {selectedProject.serviceName}</p>
//           <p>Sub Category: {selectedProject.subCategory}</p> */}
//           <p>Date: {selectedProject.date}</p>
//           {/* <p>Prix: {selectedProject.prix}</p> */}
//           <p>Lieu: {selectedProject.lieu}</p>
//           <p>Etat: {selectedProject.etat}</p>
//           <p>Chef Chantier: {selectedProject.chefchantier}</p>

//           <h3>Assign Employee</h3>
//           <select value={selectedEmployee} onChange={(e) => setSelectedEmployee(e.target.value)}>
//             <option value="">Select Employee</option>
//             {employees.map(employee => (
//               <option key={employee._id} value={employee._id}>{employee.nom}</option>
//             ))}
//           </select>
//           <button onClick={handleAffecterEmp}>Affecter Emp</button>
//         </div>
//       )}

//       {modificationId && (
//         <div>
//           <h2>Modify Etat</h2>
//           <div>
//             <label>Etat:</label>
//             <input type="text" value={modifiedEtat} onChange={handleEtatChange} />
//           </div>
//           <button onClick={handleEnvoyer}>Envoyer</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProjetComponent;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProjetComponent = () => {
//   const [projets, setProjets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [employees, setEmployees] = useState([]);
//   const [selectedEmployee, setSelectedEmployee] = useState('');
//   const [modifiedEtat, setModifiedEtat] = useState('');
//   const [modificationId, setModificationId] = useState('');

//   useEffect(() => {
//     const fetchProjets = async () => {
//       try {
//         const response = await axios.get('http://localhost:7000/projet');
//         setProjets(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching projets:', error);
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchProjets();
//   }, []);

//   const handleSelectProject = async (projectId) => {
//     try {
//       const response = await axios.get(`http://localhost:7000/projet/${projectId}`);
//       setSelectedProject(response.data);

//       // Fetch employees
//       const employeesResponse = await axios.get('http://localhost:7000/employes');
//       setEmployees(employeesResponse.data);
//     } catch (error) {
//       console.error('Error selecting project:', error);
//     }
//   };

//   const handleModify = (id) => {
//     setModificationId(id);
//   };

//   const handleEtatChange = (event) => {
//     setModifiedEtat(event.target.value);
//   };

//   const handleEnvoyer = async () => {
//     try {
//       const projetToUpdate = projets.find(projet => projet._id === modificationId);
//       if (!projetToUpdate) {
//         console.error('Project not found.');
//         return;
//       }

//       const updatedProjet = {
//         ...projetToUpdate,
//         etat: modifiedEtat
//       };

//       const response = await axios.post('http://localhost:7000/projet/add', updatedProjet);
//       console.log('Project updated:', response.data);

//       // Update state to reflect the changes
//       const updatedProjets = projets.map(projet =>
//         projet._id === modificationId ? response.data : projet
//       );
//       setProjets(updatedProjets);

//       // Reset input and modification ID
//       setModifiedEtat('');
//       setModificationId('');
//     } catch (error) {
//       console.error('Error modifying project:', error);
//     }
//   };

//   const handleAffecterEmp = async () => {
//     try {
//       // Send request to assign employee to the project
//       const response = await axios.post('http://localhost:7000/affecter/emp', {
//         projectId: selectedProject._id,
//         employeeId: selectedEmployee
//       });
//       console.log('Employee assigned:', response.data);
//     } catch (error) {
//       console.error('Error assigning employee:', error);
//     }
//   };

//   if (loading) {
//     return <div className="container">Loading...</div>;
//   }

//   if (error) {
//     return <div className="container">Error: {error.message}</div>;
//   }

//   return (
//     <div className="container">
//       <h1>Projet List</h1>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Lieu</th>
//             <th>Etat</th>
//             <th>Chef Chantier</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {projets.map(projet => (
//             <tr key={projet._id}>
//               <td>{projet.date}</td>
//               <td>{projet.lieu}</td>
//               <td>{projet.etat}</td>
//               <td>{projet.chefchantier}</td>
//               <td>
//                 <button className="btn" onClick={() => handleSelectProject(projet._id)}>Select</button>
//                 <button className="btn" onClick={() => handleModify(projet._id)}>Modify</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {selectedProject && (
//         <div>
//           <h2>Selected Project Details</h2>
//           <p>Date: {selectedProject.date}</p>
//           <p>Lieu: {selectedProject.lieu}</p>
//           <p>Etat: {selectedProject.etat}</p>
//           <p>Chef Chantier: {selectedProject.chefchantier}</p>

//           <h3>Assign Employee</h3>
//           <select className="form-control" value={selectedEmployee} onChange={(e) => setSelectedEmployee(e.target.value)}>
//             <option value="">Select Employee</option>
//             {employees.map(employee => (
//               <option key={employee._id} value={employee._id}>{employee.nom}</option>
//             ))}
//           </select>
//           <button className="btn" onClick={handleAffecterEmp}>Affecter Emp</button>
//         </div>
//       )}

//       {modificationId && (
//         <div>
//           <h2>Modify Etat</h2>
//           <div>
//             <label>Etat:</label>
//             <input className="form-control" type="text" value={modifiedEtat} onChange={handleEtatChange} />
//           </div>
//           <button className="btn" onClick={handleEnvoyer}>Envoyer</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProjetComponent;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjetComponent = () => {
  const [projets, setProjets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [modifiedEtat, setModifiedEtat] = useState('');
  const [modificationId, setModificationId] = useState('');

  useEffect(() => {
    const fetchProjets = async () => {
      try {
        const response = await axios.get('http://localhost:7000/projet');
        setProjets(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projets:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchProjets();
  }, []);

  const handleSelectProject = async (projectId) => {
    try {
      const response = await axios.get(`http://localhost:7000/projet/${projectId}`);
      setSelectedProject(response.data);

      // Fetch employees
      const employeesResponse = await axios.get('http://localhost:7000/employes');
      setEmployees(employeesResponse.data);
    } catch (error) {
      console.error('Error selecting project:', error);
    }
  };

  const handleModify = (id) => {
    setModificationId(id);
  };

  const handleEtatChange = (event) => {
    setModifiedEtat(event.target.value);
  };

  const handleEnvoyer = async () => {
    try {
      const projetToUpdate = projets.find(projet => projet._id === modificationId);
      if (!projetToUpdate) {
        console.error('Project not found.');
        return;
      }

      const updatedProjet = {
        ...projetToUpdate,
        etat: modifiedEtat
      };

      const response = await axios.post('http://localhost:7000/projet/add', updatedProjet);
      console.log('Project updated:', response.data);

      // Update state to reflect the changes
      const updatedProjets = projets.map(projet =>
        projet._id === modificationId ? response.data : projet
      );
      setProjets(updatedProjets);

      // Reset input and modification ID
      setModifiedEtat('');
      setModificationId('');
    } catch (error) {
      console.error('Error modifying project:', error);
    }
  };

  const handleAffecterEmp = async () => {
    try {
      // Send request to assign employee to the project
      const response = await axios.post('http://localhost:7000/affecter/emp', {
        projectId: selectedProject._id,
        employeeId: selectedEmployee
      });
      console.log('Employee assigned:', response.data);
    } catch (error) {
      console.error('Error assigning employee:', error);
    }
  };

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  if (error) {
    return <div className="container">Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <h1>Projet List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Lieu</th>
            <th>Etat</th>
            <th>Chef Chantier</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {projets.map(projet => (
            <tr key={projet._id}>
              <td>{projet.date}</td>
              <td>{projet.lieu}</td>
              <td>{projet.etat}</td>
              <td>{projet.chefchantier}</td>
              <td>
                <button className="btn" onClick={() => handleSelectProject(projet._id)}>Select</button>
                <button className="btn" onClick={() => handleModify(projet._id)}>Modify</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedProject && (
        <div>
          <h2>Selected Project Details</h2>
          <p>Date: {selectedProject.date}</p>
          <p>Lieu: {selectedProject.lieu}</p>
          <p>Etat: {selectedProject.etat}</p>
          <p>Chef Chantier: {selectedProject.chefchantier}</p>

          <h3>Assign Employee</h3>
          <select className="form-control" value={selectedEmployee} onChange={(e) => setSelectedEmployee(e.target.value)}>
            <option value="">Select Employee</option>
            {employees.map(employee => (
              <option key={employee._id} value={employee._id}>{employee.nom}</option>
            ))}
          </select>
          <button className="btn" onClick={handleAffecterEmp}>Affecter Emp</button>
        </div>
      )}

      {modificationId && (
        <div>
          <h2>Modifier Etat</h2>
          <div>
            <label>Etat:</label>
            <select className="form-control" value={modifiedEtat} onChange={handleEtatChange}>
              <option value="En cours">En cours</option>
              <option value="Terminé">Terminé</option>
              <option value="En pause">En pause</option>
            </select>
          </div>
          <button className="btn" onClick={handleEnvoyer}>Envoyer</button>
        </div>
      )}
    </div>
  );
};

export default ProjetComponent;






