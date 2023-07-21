import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';


function Home() {
    return (
        <div className='container'>
            <Row>
                <Col lg={6}>
                    <div className='w-100 border container text-light text-center p-4 mt-3 bg-primary'>
                        <h2 className='text-center'>Employee Management</h2>
                        <p>Ipsam consequuntur id alias consequatur ex temporibus, earum asperiores officiis quos numquam ut vero maxime veritatis velit molestias, dolores, eaque doloribus sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, magni fugit perspiciatis nostrum quidem, voluptas maxime modi harum eveniet officiis sequi iusto beatae commodi placeat voluptates dignissimos minima in dolore?</p>
                    </div>
                </Col>
                <Col lg={6}>
                
          <Image style={{height:'265px'}}
          className='w-100  mt-3' src="/pic1.jpg" rounded />
        
                </Col>
            </Row>

            <div className='container-fluid mt-4 bg-light p-2 border mb-4'>
                <h1 className='text-center p-3'>List of Employees</h1>
                <Table striped bordered hover variant="primary" >
                    <thead>
                        <tr className='text-warning'>
                            <th>#</th>
                            <th>Id</th>
                            <th>Full Name</th>
                            <th>Designnation</th>
                            <th>Salary</th>
                            <th>Experience</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

        </div>
    )
}

export default Home