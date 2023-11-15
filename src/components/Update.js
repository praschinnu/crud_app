import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../features/userDetailSlice';



function Update() {
    const { id } = useParams();
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const [updateData, setUpdateData] = useState();

    const { users, loading } = useSelector((state) => state.app);


    useEffect(() => {

        if (id) {
            const singleUser = users.filter((i) => i.id === id);
            setUpdateData(singleUser[0]);
        }

    }, []);
    const newData = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value });
      };

    console.log("updated data",updateData);

    const handleUpdate=(e)=>{
        e.preventDefault();
        dispatch(updateUser(updateData));
        navigate("/read");
    }

    return (
        <div>
            <h2 className='text-center mx-auto my-5'>EDIT DETAILS</h2>
            <form className='w-50 mx-auto my-5' onSubmit={handleUpdate}>
                <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input type="text" name="name"
                     value={updateData && updateData.name} onChange={newData} class="form-control" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" name="email" 
                    value={updateData && updateData.email} onChange={newData} class="form-control" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Phone Number</label>
                    <input type="text" name="num" 
                    value={updateData && updateData.num} onChange={newData} class="form-control" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Age</label>
                    <input type="number" name="age" 
                    value={updateData && updateData.age} onChange={newData} class="form-control" />
                </div>
                <div class="mb-3">
                    <input
                        class="form-check-input"
                        name="gender"
                        value="Male"
                        type="radio"
                        checked={updateData && updateData.gender === 'Male'}
                        onChange={newData}
                    />
                    <label class="form-check-label">Male</label>
                </div>
                <div class="mb-3">
                    <input
                        class="form-check-input"
                        name="gender"
                        value="Female"
                        type="radio"
                        checked={updateData && updateData.gender === 'Female'}
                        onChange={newData}
                    />
                    <label class="form-check-label" >
                        Female
                    </label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <br /><br /><br /> <br /><br /><br />

        </div>
    )
}

export default Update