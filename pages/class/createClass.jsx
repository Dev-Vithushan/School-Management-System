import React from 'react'

export default function App(){
  return (
    <div style={{backgroundColor: '#90ee90'}}>
        <br></br>
        <div style={{ alignItems:'center', alignContent:'center', textAlign:'center', color: '#90ee90'}}>
            <h1 style={{borderRadius: '50px', width: '300px', textAlign:'center',backgroundColor: 'white', color: 'green', fontSize: '30px', marginLeft: '100px', marginRight: '100px', marginTop: '10px', paddingTop: '10px', paddingBottom: '10px', fontFamily: 'Helvetica neue'}}><b>Create a new Class</b></h1>
            <form  style = {{display: 'block', color: 'green', alignItems: 'center', boxSizing: 'inherit',  width: '50%', height: '50%', display:'inline-block', fontFamily: 'Helvetica neue', fontSize: '20px'}}>
                <table>
                    <tr>
                        <th><br/></th>
                        <th><br/></th>
                    </tr>
                    <tr>
                        <th><label>Grade  :</label></th>
                        <td>
                            <select style={{width: '100px'}}>
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
                            <select style={{width: '100px'}}>
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
                <button style={{borderRadius: '50px', width: '100px'}} className ="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" type="submit" value="submit">OK</button>
                <br></br>
                <br></br>
            </form> 
            <br></br>
        </div>
    </div>
);
};
