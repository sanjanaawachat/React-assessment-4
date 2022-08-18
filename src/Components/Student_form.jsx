import React from 'react'
import '../Css/style.css'

const Student_form = () => {
  return (
    <>
       <h1>Student's Details</h1>
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Roll no</th>
                <th>Batch</th>
                <th>Course</th>
            </tr>
            <tr>
                <td>John</td>
                <td>24</td>
                <td>001</td>
                <td>April</td>
                <td>Full Stack Developer</td>
                
            </tr>
            <tr>
                <td>Doe</td>
                <td>25</td>
                <td>002</td>
                <td>May</td>
                <td>MERN</td>
            </tr>
            <tr>
                <td>Biden</td>
                <td>24</td>
                <td>003</td>
                <td>April</td>
                <td>Full Stack Developer</td>
            </tr>
            <tr>
                <td>Barar</td>
                <td>25</td>
                <td>004</td>
                <td>May</td>
                <td>MERN</td>
            </tr>
            <tr>
                <td>Christ</td>
                <td>25</td>
                <td>005</td>
                <td>April</td>
                <td>Full Stack Developer</td>
            </tr>
            <tr>
                <td>Elent</td>
                <td>24</td>
                <td>006</td>
                <td>May</td>
                <td>MERN</td>
            </tr>
        </table>
    </>
  )
}

export default Student_form;