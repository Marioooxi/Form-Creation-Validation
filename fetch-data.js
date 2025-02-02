document.addEventListener('DOMContentLoaded', () => {
    // Asynchronous function to fetch and display user data
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';  // API URL
        const dataContainer = document.getElementById('api-data');   // Element to display the data

        try {
            // Fetch data from API
            const response = await fetch(apiUrl);
            const users = await response.json();  // Parse JSON data from response

            // Clear the existing loading message
            dataContainer.innerHTML = '';

            // Create a <ul> element to display users
            const userList = document.createElement('ul');

            // Loop through users and create a list item for each
            users.forEach(user => {
                const userItem = document.createElement('li');
                userItem.textContent = user.name;  // Set text content to the user's name
                userList.appendChild(userItem);    // Append <li> to the <ul>
            });

            // Append the user list to the data container
            dataContainer.appendChild(userList);

        } catch (error) {
            // Handle errors if fetching fails
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    // Invoke the function once the DOM is fully loaded
    fetchUserData();
});
