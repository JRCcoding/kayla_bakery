import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Container, Form } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { MDBCard } from 'mdb-react-ui-kit'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import { listProducts } from '../Actions/productActions'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import '../Styles/Product.css'
import Meta from '../Components/Meta'
import { withRouter } from 'react-router-dom'

const Product = ({ history }) => {
  const [product, setProduct] = useState({})
  const [qty, setQty] = useState(1)

  const { id } = useParams()
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const productList = useSelector((state) => state.productList)
  const { loading, error } = productList
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`)

      setProduct(data)
    }
    fetchProduct()

    dispatch(listProducts())
  }, [dispatch, id])

  // let navigate = useNavigate()
  const addToCartHandler = () => {
    history.push(`/cart/${id}?qty=${qty}`)
    // was .../cart/${match.params.id}?qty...
    // history.push(`/cart/${id}?size=${size}`)
  }

  return (
    <div>
      <Meta title={product.title} />

      <Container>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <MDBCard className='prod_info_box'>
            <Row>
              <Col md={6}>
                <LinkContainer to='/products'>
                  <button className='backprod_button absolute top-0'>
                    GO BACK
                  </button>
                </LinkContainer>
                <Image
                  src={product.img}
                  alt={product.title}
                  fluid
                  className='prod_img'
                />
              </Col>
              <Col md={6}>
                <ListGroup variant='flush' className='mr-2'>
                  <ListGroup.Item>
                    <h3>{product.title}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Description: </strong> {product.description}
                  </ListGroup.Item>
                  {/* <ListGroup.Item>
                    <strong>More Info: </strong> {product.additional}
                  </ListGroup.Item> */}
                  <ListGroup.Item>
                    <strong>Price: $</strong>
                    {product.price}
                  </ListGroup.Item>

                  {product.countInStock < 1 && (
                    <ListGroup.Item>
                      <LinkContainer to='/contact'>
                        <button className='contact_button'>
                          CONTACT TO ORDER
                        </button>
                      </LinkContainer>
                    </ListGroup.Item>
                  )}
                  {product.countInStock > 0 && (
                    <ListGroup>
                      <ListGroup.Item>
                        Any custom orders or over limit orders on website please
                        <LinkContainer to='/contact'>
                          <h6 className='inline clickable'> CONTACT ME</h6>
                        </LinkContainer>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>
                            <h5>Quantity</h5>
                          </Col>
                          <Col>
                            <Form.Control
                              as='select'
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[
                                ...Array(Number(product.countInStock)).keys(),
                              ].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </Form.Control>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                      {/* <ListGroup.Item>
                        <Row>
                          <Col>
                            <h5>Message</h5>
                          </Col>
                          <Col>
                            <Form.Control
                              as='textarea'
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                            ></Form.Control>
                          </Col>
                        </Row>
                      </ListGroup.Item> */}
                      <ListGroup.Item>
                        <button
                          onClick={addToCartHandler}
                          className='addcart_button'
                          type='button'
                        >
                          ADD TO CART
                        </button>
                      </ListGroup.Item>
                    </ListGroup>
                  )}
                </ListGroup>
              </Col>
            </Row>
          </MDBCard>
        )}
      </Container>
    </div>
  )
}

export default withRouter(Product)
