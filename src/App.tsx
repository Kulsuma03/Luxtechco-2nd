import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useFetch from './components/hooks/useFetch';
import Loading from './components/pages/Loading/Loading';
import useFilter from './components/hooks/useFilter';

function App() {

  const [searchKey, setSearchKey] = useState<string>('')
  const url = 'https://jsonplaceholder.typicode.com/users'
  const data = useFetch(url);
  const newData = useFilter(data.data, searchKey)
 
  
  return (
      <div>
          <div>
              <h2>Search User</h2>
              <input 
              type="text" 
              placeholder='Search...'
              onChange={event => {setSearchKey(event.target.value)}}
              />
          </div>

          {data.loading && <Loading></Loading>}
          {(newData?.length === 0) && <p className='my-5 text-danger fs-2'>No Matching Views</p>}

          <Row >
              {
                  newData?.map((user)=>
                  <Col key={user.id} xs={6} md={4} className='my-4'>

                      <Card style={{ width: '18rem' }}>
                          <Card.Body>
                              <Card.Title>{user.name}</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">{user.username}</Card.Subtitle>
                              <Card.Text>{user.phone}</Card.Text>   
                              <Card.Text>{user.website}</Card.Text>   
                              <Card.Text>{user.email}</Card.Text>   
                          </Card.Body>
                      </Card>
                  </Col>)
              }
          </Row>
      </div>
  );
};


export default App
