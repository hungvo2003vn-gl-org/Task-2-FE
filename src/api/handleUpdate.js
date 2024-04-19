const path = 'https://task-2-be.onrender.com/v1/users/update'

const handleUpdate = async ({
    records,
    setSearchResults
}) => {
    try {
        
        // Init request data
        const token = localStorage.getItem('accessToken')

        const headers = {
            Authorization: `Bearer ${token}`, // Add the Bearer token to the request headers
            'Content-Type': 'application/json',
        };

        const body = JSON.stringify({data: records})

        // POST to update
        const response = await fetch(path, {
            method: 'POST',
            headers,
            body
        });

        const data = await response.json();
        let updatedRecords = data.data
        
        if(response.ok) {
            alert("Document updated!")
            setSearchResults(updatedRecords)
        } else {
            alert(data.message)
        }

    } catch (error) {
        alert('Error:', error);
    }
}

export default handleUpdate