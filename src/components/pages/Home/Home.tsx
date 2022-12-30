import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useFetch from '../../hooks/useFetch';
import useFilter from '../../hooks/useFilter';
import Loading from '../Loading/Loading';

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {};
    phone: string;
    website: string;
    company: {};

}

const Home = () => {
    const [searchKey, setSearchKey] = useState<string>('')
    const url = 'https://jsonplaceholder.typicode.com/users'
    const data = useFetch(url);
    // const newData = useFilter(data.data, searchKey)
    console.log(data.data);
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

            {
                data.loading && <Loading></Loading>
            }

            <Row >
                {
                    data.data.map((user:User) =>
                    <Col xs={6} md={4} className='my-3'>

                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{user.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default Home;