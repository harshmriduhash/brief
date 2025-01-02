

const StreetLine = ({ id }) => {

    return (
        <figure id={id} className="street-line p-absolute w-100 ">
            <svg viewBox="0 0 100 10" width={'100%'}  >

                <line x1={0} y1={1} x2={100} y2={1} stroke="#E0E0E0" strokeWidth={.1} strokeDasharray={2} />
            </svg>
        </figure>
    )

}

export default StreetLine