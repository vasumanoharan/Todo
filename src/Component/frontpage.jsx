import { Link } from "react-router-dom"

function Login() {
    return (
        <div className="bg-black p-4">
            <div className="bg-white p-1 rounded py-2 px-2">
                <h1 className="text-4xl font-bold">Hey Hi</h1>
                <p>I help you manage your activities after you login :)</p>

                <input
                    type="text"
                    placeholder="username"
                    className="border rounded-md mt-4 border-black p-1" />
                <br />
                <input
                    type="text"
                    placeholder="password"
                    className="border rounded-md mt-4 border-black p-1" />
                <br />
                <button className="bg-[#8272DA] p-1 rounded-md mt-4 px-10">Login</button>
                <p>Don't have an account? 
                    <Link to={'/signup'}>Signup</Link>
                </p>

            </div>
        </div>
    )
}

export default Login