function userForm(){
    return(
        <main>
            <form>
                <h1>Add a new listing</h1>
                <input id='userName' type ='text' placeholder='name'/>
                <input id = 'userEmail' type ='text' placeholder='email'/>
                <button id = 'userButton'>submit</button>
            </form>
        </main>
    )
}

export default userForm;