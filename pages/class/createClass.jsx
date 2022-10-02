import React from 'react';
import Head from 'next/head';
import * as ReactDOM from 'react-dom';


const App = () => {

return (
   
    <main className= 'bg-primary'>
        <Head>
            <link rel="stylesheet"
             href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" 
             integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" 
             crossorigin="anonymous"/>
        </Head>
        <br></br>
        
        <h1 style={{borderRadius: '50px', textAlign:'center',backgroundColor: 'white', color: 'green', fontSize: '30px', marginLeft: '100px', marginRight: '100px', marginTop: '10px', paddingTop: '10px', paddingBottom: '10px'}}><b>Create a new Class</b></h1>
        <div style={{ alignItems:'center', alignContent:'center', textAlign:'center', color: '#90ee90'}}>
            <form  style = {{display: 'block', color: 'green', alignItems: 'center', boxSizing: 'inherit',  width: '50%', height: '50%', display:'inline-block'}}>
            <br></br>
                <table>
                    <tr>
                        <th><label>Grade  :</label></th>
                        <td>
                        <select style={{width: '200px'}}>
                            <option selected value="grade"></option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                        </select>
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                        <th><label>Division   :</label></th>
                        <td>
                        <select style={{width: '200px'}}>
                            <option selected value="division"></option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                            <option value="G">G</option>
                        </select>
                        </td>
                    </tr>
                </table>  
                <br></br>  
            <button style={{borderRadius: '50px', width: '50px'}} className ="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" type="submit" value="submit">OK</button>
            <br></br>
            <br></br>
            </form> 
            
            <br></br>
            </div>
    </main>
);
};

//ReactDom.render(<App />, document.querySelector("#root"));
export default App;