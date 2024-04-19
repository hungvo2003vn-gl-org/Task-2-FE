const path = 'https://task-2-be.onrender.com/v1/users/register'

const handleRegister = async ({ 
    username, 
    password, 
    email, 
    birthdate, 
    onRegister, 
    setEmail, 
    setPassword, 
    setUsername, 
    setBirthdate 
}) => {

    const setDefault = () => {
        setEmail('');
        setPassword('');
        setUsername('');
        setBirthdate('');
    }

    try {
      // Call the login API with username and password
        const response = await fetch(path, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                username,
                email, 
                password,
                birthdate
            }),
        });

        const data = await response.json();

        if (response.ok) {
            // Redirect to the home page or perform any necessary action
            alert("Create account successfully!")
            onRegister();
            setDefault()
        } 
        else {
            alert(data.message);
            setDefault()
        }
    } 
    catch (error) {
        alert('Error:', error.message);
        setDefault()
    } 
}

export default handleRegister