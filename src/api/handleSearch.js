const path = 'https://task-2-be.onrender.com/v1/users?'
const handleSearch = async ({searchName, searchEmail, setSearchResults}) => {
    try {
        const token = localStorage.getItem('accessToken')

        const headers = {
            Authorization: `Bearer ${token}`, // Add the Bearer token to the request headers
            'Content-Type': 'application/json',
        };
    
        // Construct the query parameters
        const queryParams = new URLSearchParams({ name: searchName, email: searchEmail });

        // Call the GET API to search for records
        const response = await fetch(`${path}${queryParams.toString()}`, {
            method: 'GET',
            headers,
        });

        const data = await response.json()

        if (response.ok) {
            console.log(data.data)
            setSearchResults(data.data);
            alert("Get users successfully!")
        } else {
            alert(data.message);
        }
    } catch (error) {
        alert('Error:', error.message);
    }
};

export default handleSearch