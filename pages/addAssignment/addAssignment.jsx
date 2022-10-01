import { Block } from "@material-ui/icons";
import React from "react";
import Head from 'next/head';
import Navbar from "../../components/Navbar";
import Image from 'next/image'

// import styles from '../assignment/addAssignment.css';


const App = () => {

return (
   
    <div style={{ marginTop:'8%', alignItems:'middle', alignContent:'middle', textAlign:'middle'}}>
        <Head>
            <link rel="stylesheet"
             href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" 
             integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" 
             crossorigin="anonymous"/>
        </Head>
        
        
        <p style={{textAlign:'center'}}><b>Add a Assignment</b></p>
         <div className="styles.formContainer" style={{ alignItems:'center', alignContent:'center', textAlign:'center'}}>
                <form  style = {{display: 'block', backgroundColor: '#90ee90', alignItems: 'center', boxSizing: 'inherit',  width: '200px', height: '300px', display:'inline-block'}}>
                <br></br>
                <select>
                    <option selected value="grade">Grade</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                </select>
                <br></br><br></br>
                
                <select>
                    <option selected value="division">Division</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="G">G</option>
                </select>

                <br></br>
                <br></br>

                <br></br>
                <br></br>
                <div >
                    <p><b className="">Assignment</b></p>

                    <input
                        type="file"
                        accept="*"
                        style={{ display: 'none', color: '#90ee90' }}
                        id="contained-button-file"
                    />
                    <label style={{ display: 'block'}} htmlFor="contained-button-file">
                        <button variant="contained" component="span">
                        File    
                        </button>
                    </label>
                </div>
                </form>
                <br></br>
                <br></br>
                <button className="btn btn-danger" type="submit" value="submit">Upload</button>
            </div>
    </div>


);
};

//ReactDom.render(<App />, document.querySelector("#root"));
export default App;