import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, showUser } from '../features/userDetailSlice';
import CustomModal from './CustomModal';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';



function Read() {

  const dispatch = useDispatch();

  const [id, setId] = useState();

  const [showPopup, setShowPopup] = useState(false);

  const { users, loading,searchData } = useSelector((state) => state.app)

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2>Loading</h2>
  }


  return (
    <div>
      <Container>
        <Row>
          <Col>
            {
              showPopup &&
              <CustomModal id={id} showPopup={showPopup} setShowPopup={setShowPopup}></CustomModal>
            }      <div>
              {
                users &&
               users.filter((i)=>{
                if(searchData.length===0){
                  return i
                }else{
                  return i.name.toLowerCase().includes(searchData.toLowerCase())
                }
               })
                
                .map((i) =>
                  <div key={i.id} className="card m-4 text-center" style={{ backgroundColor: 'blue', width: '18rem' }}>
                    <div className="card-body">
                      <h5 className="card-title">{i.name}</h5>
                      <h6 className="card-subtitle mb-2 text-body-secondary">{i.email}</h6>
                      <p className="card-text">{i.age}</p>
                      <a style={{ textDecoration: 'none',color:'black' }} class="card-link" onClick={() => [setId(i.id), setShowPopup(true)]}>View</a>
                      <Link to={`/edit/${i.id}`} style={{ textDecoration: 'none',color:'black' }} class="card-link">Edit</Link>
                      <Link  onClick={() => dispatch(deleteUser(i.id))} style={{ textDecoration: 'none',color:'black' }} class="card-link">Delete</Link>
                    </div>
                  </div>
                )

              }

            </div>

          </Col>

        </Row></Container>
        <br /><br /><br /> <br /><br /><br />

           </div>
  )
}

export default Read