document.getElementById('taskForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const courseId = document.getElementById('courseId').value;
    const taskName = document.getElementById('taskName').value;
    const dueDate = document.getElementById('dueDate').value;
    const additionalDetails = document.getElementById('additionalDetails').value;

    try {
        const response = await fetch(`/courses/${courseId}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                courseId,
                taskName,
                dueDate,
                additionalDetails
            })
        });
        
        if (response.ok) {
            alert('Task added successfully');
            // You can optionally update the UI to display the added task
        } else {
            const errorMessage = await response.text();
            throw new Error(errorMessage);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while adding the task');
    }
});