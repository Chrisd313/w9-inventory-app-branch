//unsure of import needed here 

function itemForm(){
    return(
        <main>
            <form>
                <h1>Add a new listing</h1>
                <input id = 'itemName'type ='text' placeholder='Item name'/>
                <input id = 'itemPrice'type ='number' placeholder='price'/>
                <input id = 'itemDescription'type ='text' placeholder='description'/>
                <select id = 'itemCategory'type ='text' placeholder='category'>
                    <option>men's clothing</option>
                    <option>women's clothing</option>
                    <option>jewelery</option> 
                    {/*jewelery is spelt wrong but i didnt want to mess is the seed data*/}
                    <option>electronics</option>                
                </select>
                <input id = 'itemImage'type ='text' placeholder='image link'/>''
                <button id = 'itemButton'>submit</button>
            </form>
        </main>
    )
}

export default itemForm;