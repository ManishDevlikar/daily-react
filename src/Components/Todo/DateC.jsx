

function DateC({ date, getDate }) {
    return (
        <>

        {/* date.toLocalTimeString()  to get current time*/}

        <p className="text-white self-center text-base font-bold">
            {`${date.getDate()}/${date.getMonth()}/${date.getUTCFullYear()} - ${getDate.hour}:${getDate.minute}:`}
            <span className="text-red-700">{`${getDate.sec}`}</span>
        </p>
        </>
    )
}

export default DateC;
