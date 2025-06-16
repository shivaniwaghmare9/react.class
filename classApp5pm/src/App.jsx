
const App=()=>{
    const Record=[
        {
        "name":"shivani",
        "rollno":123,
        "city":"bhopal",
        "fees":34675
        },
        {
        "name":"shivani",
        "rollno":123,
        "city":"bhopal",
        "fees":34675
        },
        {
        "name":"shivani",
        "rollno":123,
        "city":"bhopal",
        "fees":34675
        },
        {
        "name":"shivani",
        "rollno":123,
        "city":"bhopal",
        "fees":34675
        },
        {
        "name":"shivani",
        "rollno":123,
        "city":"bhopal",
        "fees":34675
        }
    ]
    const ans=Record.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.name}</td>
                <td>{key.rollno}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
            </tr>
            </>
        )
    })
    return(
        <>
        <h1>Arrray!!</h1><br/><br/>
        <table border="1" width="500px">
            <tr>
                <th>Name</th>
                <th>Rollno</th>
                <th>City</th>
                <th>Fees</th>
            </tr>
            {ans}
        </table>

        </>
    )
}
export default App;