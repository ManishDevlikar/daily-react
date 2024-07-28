
function Details({prop}) {
    // let fields=Object.keys(prop);
    // let values=Object.values(prop);

  return (
    <div className="pt-10 w-full">
    <table className="border-red-700 border-2 border-collapse w-2/3 m-auto">
        <thead className="">
            <tr className="text-white border-red-700 border-2">
                <td className="border-red-700 border-2">firstName</td>
                <td className="border-red-700 border-2">lastName</td>
                <td className="border-red-700 border-2">education</td>
                <td className="border-red-700 border-2">age</td>
            </tr>
        </thead>
        <tbody className="border-red-700 border-2">  
                <tr className="text-pink-500 font-medium border-red-700 border-2">
                    <td className="border-red-700 border-2">{prop.firstName}</td>
                    <td className="border-red-700 border-2">{prop.lastName}</td>
                    <td className="border-red-700 border-2">{prop.education}</td>
                    <td className="border-red-700 border-2">{prop.age}</td>
                </tr>
        </tbody>
    </table>
    </div>
  )
}

export default Details
