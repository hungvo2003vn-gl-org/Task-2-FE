const path = 'https://task-2-be.onrender.com/v1/users/login'

const handleLogin = async ({email, password, onLogin}) => {
    try {
        const response = await fetch(path, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            const accessToken = data.data.accessToken;

            // Store the access token in localStorage
            localStorage.setItem('accessToken', accessToken);

            // Redirect to the home page or perform any necessary action
            onLogin();
        } 
        else {
            alert(data.message);
        }
    } 
    catch (error) {
        alert('Error:', error);
    } 
}

export default handleLogin