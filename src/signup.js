import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(prop) {
    var nav =useNavigate()
    const user=prop.users
    const setUser=prop.setUsers

    var[euser,setuser]=useState('')
    var[epwd,setpwd]=useState('')

    function handleUinput(evnt){
        setuser(evnt.target.value)
    }
    function handlePinput(evnt){
        setpwd(evnt.target.value)
    }
    function addUser(){
        setUser([...user,{uname:euser,upswd:epwd}])
        nav('/')
        
    }

    return (
        <div className="bg-black p-4">
            <div className="bg-white p-1 rounded py-2 px-2">
                <h1 className="text-4xl font-bold">Hey Hi</h1>
                <p>Sign up here :)</p>

                <input
                    type="text"
                    placeholder="username"
                    className="border rounded-md mt-4 border-black p-1" onChange={handleUinput} />
                <br />
                <input
                    type="text"
                    placeholder="password"
                    className="border rounded-md mt-4 border-black p-1" onChange={handlePinput}/>
                <br />

                <input
                    type="text"
                    placeholder="Re-password"
                    className="border rounded-md mt-4 border-black p-1" />
                <br />

                <button className="bg-[#FCA201] p-1 rounded-md mt-4 px-10" onClick={addUser}>SignUp</button>
                <p>Already have an account?
                    <Link to={'/'}>Login</Link>
                </p>
            </div>
        </div>
    )
}

export default Signup