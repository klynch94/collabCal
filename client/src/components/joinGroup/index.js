// , useEffect was removed from the below brackets to get rid of an error, if needed put back in
import React, { useState} from "react";
// import firebase from '../firebase'
import { useUserContext } from '../firebase/userContext'
import API from '../../utils/API';

export default function () {
  const [user] = useUserContext()

  const [values, setValues] = useState({
    group: "",
    groupmembers: ""
  }) 

  const handleInputChange = event => {
    const {name, value} = event.target
    console.log(user.uid);
    setValues({
      ...values, 
      [name]: value,
      groupmembers: user.uid
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    API.updateGroup(values).then(results => {
      console.log(results)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
<<<<<<< HEAD
=======
  <div>
    <h1 className = "textCenter">Join a Group</h1>
>>>>>>> da502ac2d3655796fdfc9ac6324916ab384ef53d
    <form id="login" className="col-md-4 center">
      <div className="form-group">
        <label for="exampleInputEmail1">Group Name</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="group" 
          onChange={handleInputChange} 
          value={values.group}
        />
      </div>
<<<<<<< HEAD
      <div className="form-group">
        <label for="exampleInputPassword1">Add members</label>
        <div className="row">
          <div className="col-md-10">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="col-md-2">
            <div className="add center">
              <p id="plus" className="textCenter">
                +
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="addedMembers"></div>
      <div className="textCenter">
        <button type="submit" onClick={handleSubmit} id="createBtn" className="btn center">
          Create Group
=======
      <div className="textCenter">
        <button type="submit" onClick={handleSubmit} id="createBtn" className="btn center">
          Join Group
>>>>>>> da502ac2d3655796fdfc9ac6324916ab384ef53d
        </button>
      </div>
    </form>
    </div>
  );
}
