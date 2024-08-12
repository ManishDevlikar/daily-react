function EditTodo({editIt,func="Add"}){
    return(
        <>
            <button
                className="bg-red-900 w-32 text-white py-3 rounded-md text-center align-middle" 
                onClick={editIt}
                >{func}</button>
        </>
    )
}

export default EditTodo;