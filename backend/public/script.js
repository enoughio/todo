
            //add todo form 
            const addForm = document.getElementById("addData");
            addForm.addEventListener("submit", async (e)=>{
                e.preventDefault();
                
                const todoInput = document.getElementById("todoInput");  // get the Input field from form
                const todoValue = document.getElementById("todoInput").value.trim(); // get the value 
                console.log(todoValue)

                if (todoValue === '') {
                    alert('Please enter a todo item.'); // Alert if the input is empty   /// make a tost message
                    // window.location.href = '/';
                    return;
                }
                // window.location.href = '/';




                // try {
                //     const response = await fetch('/add', {
                //         method: 'POST',
                //         headers: {
                //             'Content-Type': 'application/json' // Indicate that we are sending JSON
                //         },
                //         body: JSON.stringify({ todo: todoValue }) // Convert the input to JSON
                //     });

                //     if(!response.ok)
                //     {
                //         throw new Error("error in passing data")
                //     }

                //     const result = await response.json();  
                //     console.log("todo added", result)
                    todoValue.value = '';

                // } catch (error) {
                //     console.error("error in adding data", error)
                //     alert('There was a problem adding the todo.'); // Alert the user in case of error
                // }

                
                //allowing form to submit

            })