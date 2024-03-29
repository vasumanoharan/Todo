import Heading from "./Component/Header";
import Main from "./Component/Main";
// import Box from './todo'
import Activity from "./Activity";
import { useNavigate } from "react-router-dom";


function Apptodo() {
  var navigation=useNavigate()
  function lgout(){
      navigation('/')
  }
  return (
    <div className="bg-black p-[70px]">
      <button className="bg-yellow-400 p-4" onClick={lgout}>Logout</button>
      <div className="bg-white p-5 rounded-lg py-10 px-16">
        <Heading />

        <div className="flex gap-2 flex-wrap mt-5">
          <Main para="Trichy" head="23" bgColor="#8272DA"></Main>
          <Main para="14:03:34" head="December" bgColor="#FD6663"></Main>
          <Main para="react" head="Built Using" bgColor="#FCA201"></Main>
        </div>


        <div className="flex gap-10 mt-10 flex-wrap">
          <Activity></Activity>
          {/* <Box></Box> */}
        </div>
      </div>
    </div>
  )
}


export default Apptodo;
