import { useState } from "react"
import Details from "./Details";

function Form() {

     const [formdata, setFormdata] = useState({firstName:"",lastName:"",age:"",education:""})


     const [error, setError] = useState({})
     const [isSubmit, setIsSubmit] = useState(false)


     const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({
            ...formdata,
          [name]: value,
        });
      };

     function validate(data){
        let errors= {};

        if(!data.firstName)
            errors.firstName="firstname is null"
        if(!data.lastName)
            errors.lastName="lastname is null"
        if(!data.age)
            errors.age="age is null"
        if(!data.education)
            errors.education="education is null"

        return errors;
      }

     function handleSubmit(e){
        e.preventDefault();
        const errors=validate(formdata);
        setError(errors);
        setIsSubmit(true);
     }

  return (
    <div className="w-full">
      <form className="flex flex-col w-1/2 m-auto p-11 border-2 border-red-400 hover:bg-gray-950" onSubmit={handleSubmit}>
        <label className="text-gray-300 pb-1 font-bold">First Name:</label>
        <input className="outline-none text-pink-950 pl-2 pt-2 pb-2  border-red-900 border-2 focus:text-white focus:bg-gray-900 " type="text" name="firstName" value={formdata.firstName} onChange={handleChange}/>
        {error.firstName&& <p className="text-red-500">{error.firstName}</p>}
        <br/>
        <label className="text-gray-300 pb-1 font-bold">Last Name:</label>
        <input className="outline-none text-pink-950 pl-2 pt-2 pb-2  border-red-900 border-2 focus:text-white focus:bg-gray-900 " type="text" name="lastName" value={formdata.lastName} onChange={handleChange}/>
        {error.lastName&& <p className="text-red-500">{error.lastName}</p>}
        <br/>
        <label className="text-gray-300 pb-1 font-bold">Education:</label>
        <input className="outline-none text-pink-950 pl-2 pt-2 pb-2  border-red-900 border-2 focus:text-white focus:bg-gray-900 " type="text" name="education" value={formdata.education} onChange={handleChange}/>
        {error.education&& <p className="text-red-500">{error.education}</p>}
        <br/>
        <label className="text-gray-300 pb-1 font-bold">Age:</label>
        <input className="outline-none text-pink-950 pl-2 pt-2 pb-2  border-red-900 border-2 focus:text-white focus:bg-gray-900 " type="number" name="age" value={formdata.age} onChange={handleChange}/>
        {error.age&& <p className="text-red-500">{error.age}</p>}
        <br/>
        <input className="text-pink-500 font-medium  border-2 border-red-500 p-2 hover:bg-gray-800" type="submit" value="Submit" />
        </form>


        {isSubmit&& Object.keys(error).length==0 && <Details prop={formdata}/>}
       
    </div>
  )
}

export default Form
