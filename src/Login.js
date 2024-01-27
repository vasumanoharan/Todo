import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


function Login(prop) {
    var [lname, setlname] = useState('')
    var [lpswd, setlpswd] = useState('')

    var navigation = useNavigate()

    //from index
    const user=prop.users
   
    var [ck,setck]=useState(true)

    const loginFunction = () => {

        const checkData = prop.users.filter(
            (data) => {
                return data.uname == lname && lpswd == data.upswd
            }
        )
        console.log(checkData.length)
        if (checkData.length) {
            
            navigation('/apptodo')

        }
        else {
            setck(false)
            
            
        }
    }
    
console.log(user);
    return (
        <div className="bg-black p-4">
            <div className="bg-white p-1 rounded py-2 px-2">
                <h1 className="text-4xl font-bold">Hey Hi</h1>
                {ck ? <p>I help you manage your activities after you login :)</p> : <p className="text-red-500">Enter correct details</p>}
                

                <input
                    type="text"
                    placeholder="username"
                    className="border rounded-md mt-4 border-black p-1"
                    value={lname}
                    onChange={(e) => setlname(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    placeholder="password"
                    className="border rounded-md mt-4 border-black p-1"
                    value={lpswd}
                    onChange={(e) => setlpswd(e.target.value)}
                />
                <br />
                <button className="bg-[#8272DA] p-1 rounded-md mt-4 px-10" onClick={loginFunction}>Login</button>
                <p>Don't have an account?
                    <Link to={'/signup'}>Signup</Link>
                </p>

            </div>
        </div>
    )
}

export default Login