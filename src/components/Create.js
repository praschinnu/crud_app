import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailSlice';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';


const Create = () => {

    const [users, setUsers] = useState({});

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const getUserData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("users...", users);
        dispatch(createUser(users));
        navigate('/read');
    };


    return (
        <div>
            <Row>


                <Col className='w-40 mx-auto my-5 form-control border border-0 ms-4'>
                    <h3 style={{color:'blue'}}>Book Club</h3>
                    <p id='p1'>A book is a medium for recording information in the form of writing or images, typically composed of many pages bound together and protected by a cover. It can also be a handwritten or printed work of fiction or nonfiction, usually on sheets of paper fastened or bound together within covers. The event will also offer prizes, medals, certificates, and refreshments to all the participants.
                        The event will be broadcast live on various media channels and platforms. The Marathon 2023 is a great opportunity to test your endurance, enjoy the scenic beauty of New Delhi, and make a difference in the society.
                        Don’t miss this chance to be a part of history and register now! For more details, visit the official website of the Marathon 2023.</p>
                      
                </Col>

                <Col sm={12}>
                <p className='ms-4'>Fill your details in form below.</p>
                <div className=' container'>
                    <form style={{ backgroundColor: 'blue' }} className='w-50 ms-4 form-control mt-1' onSubmit={handleSubmit}>
                        <h4 className='mx-auto'>Fill Details Here:-</h4>
                       
                            <div class="mb-3">
                                <label class="form-label">Name</label>
                                <input type="text" name="name" class="form-control" onChange={getUserData} />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Email</label>
                                <input type="email" name="email" class="form-control" onChange={getUserData} />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Phone Number</label>
                                <input type="text" name="num" class="form-control" onChange={getUserData} />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Age</label>
                                <input type="number" name="age" class="form-control" onChange={getUserData} />
                            </div>
                            <div class="mb-3">
                                <h6>Gender</h6>
                                <input
                                    class="form-check-input"
                                    name="gender"
                                    value="Male"
                                    type="radio"
                                    onChange={getUserData} />
                                <label class="form-check-label">Male</label>
                            </div>
                            <div class="mb-3">
                                <input
                                    class="form-check-input"
                                    name="gender"
                                    value="Female"
                                    type="radio"
                                    onChange={getUserData} />
                                <label class="form-check-label" >
                                    Female
                                </label>
                            </div>
                            <h6>Categories</h6>
                            <div class="form-check">
                                <input class="form-check-input" name="category"
                                 type="checkbox" value="full marathon (42.195 km)" onChange={getUserData} />
                                    <label class="form-check-label">
                                   Horror
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" name="category" 
                                 type="checkbox" value="half marathon (21.097 km)" onChange={getUserData}/>
                                    <label class="form-check-label">
                                   Romantic
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" name="category"
                                 type="checkbox" value="10K run (10 km)" onChange={getUserData} />
                                    <label class="form-check-label">
                                   Action
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" name="category" 
                                 type="checkbox" value="5K run (5 km)" onChange={getUserData}/>
                                    <label class="form-check-label" >
                                   Comdey
                                    </label>
                            </div>
                            <br />
                            
    
                            <button type="submit" class="btn btn-dark">Submit</button>
                        </form>
    
    
                        </div>
                </Col></Row>   
                <br /><br /><br /> <br /><br /><br />

                     </div>
    )
}

export default Create