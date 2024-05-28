import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";

// Fetch users from the backend
axios.get('http://localhost:3000/users')
  .then(response => {
    console.log(response.data); // Handle the response data
  })
  .catch(error => {
    console.error('Error fetching users:', error);
  });

// Create a new user
const createUser = { name: 'Jane' }; // Example user data
axios.post('http://localhost:3000/users', createUser)
  .then(response => {
    console.log('New user created:', response.data); // Handle the response data
  })
  .catch(error => {
    console.error('Error creating user:', error);
  });