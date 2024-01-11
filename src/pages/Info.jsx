import React from 'react'

const Info = () => {
  return (
    <div className='cont-info'>
<div className="search">
      <input type="text" className="form-control" placeholder="  Search..."/>
    </div>
    <table className='tab'>
    <thead>
      <tr>
        <th className='coll'>Picture</th>
        <th className='coll'>name</th>
        <th className='coll'>Rservoir</th>
        <th className='coll'>Consuption/KM</th>
        <th className='coll'>Star/stop</th>
      </tr>
    </thead>
    <tbody>
   
      <tr>
        <td className='col'><img  className='imgg' src='https://cdn.motor1.com/images/mgl/Wx2X6/s1/2020-audi-a3-sportback.jpg'></img></td>
        <td className='coll'>AUDI A3</td>
        <td className='coll' >50L</td>
        <td className='coll'>8.3%</td>
        <td> <label>
        <input type="checkbox"/>
      </label></td>
      </tr> 
    </tbody>
  </table>
    </div>
  )
}

export default Info