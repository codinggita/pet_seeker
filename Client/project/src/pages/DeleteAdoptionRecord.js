import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function DeleteAdoptionRecord({ adoptionId }) {
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    // Send a DELETE request to remove the adoption record
    setIsDeleting(true);
    axios.delete(`http://localhost:5000/adoption/${adoptionId}`)
      .then(() => {
        console.log(`Adoption record with ID ${adoptionId} deleted successfully.`);
        navigate('/adoption'); // Redirect to the adoption list page
      })
      .catch((error) => {
        console.error(`Error deleting adoption record with ID ${adoptionId}:`, error);
        setIsDeleting(false);
      });
  };

  return (
    <div>
      <h1>Delete Adoption Record</h1>
      <p>Are you sure you want to delete the adoption record with ID {adoptionId}?</p>
      <button onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? 'Deleting...' : 'Delete Adoption Record'}
      </button>
    </div>
  );
}

export default DeleteAdoptionRecord;
