import React from 'react'
import {
    Layout,
    Typography,
    Card,
    Row,
    Col,
    
} from 'antd';

import cardRosa from "../../../assets/card-rosa.svg";
import cardverde from "../../../assets/card-verde.svg";
import cardRosaMini from "../../../assets/card-mini-rosa.svg";
import cardRosamini from "../../../assets/card-mini-rosa2.svg";
import cardVerdeMini1 from "../../../assets/card-mini-verde1.png";
import cardVerdemini2 from "../../../assets/card-mini-verde2.png";
import './styles.css'
import { useAuthValue } from '../../../context/AuthContext';
import { useAuthentication } from '../../../hooks/useAuthentication';

const { Title, Text } = Typography;
const { Content } = Layout;

const PaginaInicial = () => {
    const { user } = useAuthValue();
    const { logout } = useAuthentication();
console.log(user)

    return(
    <Layout className="layout">
        <Row className='container_step'>
                <Col>
                    <button type='link' style={{ color: '#6D7970' }} onClick={logout} >
                        <img src='./logout.svg' />
                    </button>
                </Col>
            </Row>
        <Title className='titulo'>Florescer</Title>
        <Content className="site-layout-content">
            <div>
                <Row className='container_step'>
                    <Row className='container_item'>
                        <Col>
                            <div className="site-card-border-less-wrapper">
                                <Card className="card-style" bordered={false} style={{ width: "85vw", height: "15vh", backgroundImage: `url(${cardRosa})`, backgroundSize: "102vw, 2vh, contain", color: "FFFFFF", margin: '10px 0px 30px 0'  }}>
                                    <Title className="" level={3} style={{ color: "#FFFFFF", margin: "0 0 6vh" }}>Catálogo</Title>
                                    <Text style={{ color: "#FFFFFF", margin: "0 0 2vh" }}>Vasculhe alguns tipos de plantas</Text>
                                </Card>

                                <Card className="card-style" bordered={false} style={{ width: "85vw", height: "15vh", backgroundImage: `url(${cardverde})`, backgroundSize: "102vw, 2vh, contain", color: "FFFFFF", margin: '10px 0px 30px 0' }}>
                                    <Title className="" level={3} style={{ color: "#FFFFFF", margin: "0 0 6vh" }}>Minhas Plantas</Title>
                                    <Text style={{ color: "#FFFFFF", margin: "0 0 2vh" }}>Cuide, analise e conheça mais suas plantas</Text>
                                </Card>

                            </div>
                        </Col>
                    </Row>
                    <Row className='container_item'  style={{ textAlign: "left"}}>
                        <Col>
                            <Title level={2} className='titulo' style={{ textAlign: "left", marginLeft: '2rem', marginBottom: '1rem' }}>Plantas Mais Comuns</Title>
                        </Col>
                    </Row>
                    <Row className='container_item' style={{margin:'0'}}>
                        <Col>
                            <Card className="card-style" bordered={false} style={{ width: "30vw", height: "19vh", backgroundImage: `url(${cardRosaMini})`, backgroundSize: "30vw, 2vh, contain", color: "FFFFFF", backgroundRepeat: 'no-repeat',  margin: '0' }}>
                                <br />
                            </Card>
                            <Card className="card-style" bordered={false} style={{ width: "30vw", height: "19vh", backgroundImage: `url(${cardRosamini})`, backgroundSize: "30vw, 2vh, contain", color: "FFFFFF", backgroundRepeat: 'no-repeat', margin: '0' }}>
                                <br />
                            </Card>
                            <Card className="card-style" bordered={false} style={{ width: "30vw", height: "19vh", backgroundImage: `url(${cardRosamini})`, backgroundSize: "30vw, 2vh, contain", color: "FFFFFF", backgroundRepeat: 'no-repeat', margin: '0' }}>
                                <br />
                            </Card>
                        </Col>
                    </Row>
                    <Row className='container_item' style={{margin:'0'}}>
                        <Col>
                            <Card className="card-style" style={{ width: "30vw", textAlign: 'center', padding: "0", margin: "0", color: '#6D7970' }}>
                                <Text>Planta 1</Text>
                            </Card>

                            <Card className="card-style" style={{ width: "30vw", textAlign: 'center', padding: "0", margin: "0", color: '#6D7970' }}>
                                <Text>Planta 2</Text>
                            </Card>

                            <Card className="card-style" style={{ width: "30vw", textAlign: 'center', padding: "0", margin: "0", color: '#6D7970' }}>
                                <Text>Planta 3</Text>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='container_item' style={{margin:'0',  marginBottom: '1rem'}}>
                        <Col>
                            <div className="site-card-border-less-wrapper">
                                <Card className="card-style" bordered={false} style={{  width: "85vw", height: "15vh", backgroundImage: `url(${cardRosa})`, backgroundSize: "102vw, 2vh, contain", color: "FFFFFF" }}>
                                    <Title className="" level={3} style={{ color: "#FFFFFF", margin: "0 0 6vh" }}>Quiz</Title>
                                    <Text style={{ color: "#FFFFFF", margin: "0 0 2vh" }}>Descubra qual a melhor planta para a sua casa</Text>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                    <Row className='container_item'style={{margin:'0'}}>
                        <Col>
                            <Title level={2} className='titulo' style={{ textAlign: "left", marginLeft: '2rem' }}>Plantas Favoritas</Title>
                        </Col>
                    </Row>
                    <Row className='container_item'>
                        <Col>
                            <Card className="card-style" bordered={false} style={{ width: "30vw", height: "19vh",backgroundImage: `url(${cardVerdeMini1})`, backgroundSize: "30vw, 2vh, contain", }}>
                                <br />
                            </Card>
                            <Card className="card-style" bordered={false} style={{ width: "30vw", height: "19vh", backgroundImage: `url(${cardVerdemini2})`, backgroundSize: "30vw, 2vh, contain", }}>
                                <br />
                            </Card>
                            <Card className="card-style" bordered={false} style={{ width: "30vw", height: "19vh", backgroundImage: `url(${cardVerdeMini1})`, backgroundSize: "30vw, 2vh, contain", }}>
                                <br />
                            </Card>
                        </Col>
                    </Row>
                    <Row className='container_item' style={{margiun:'0'}}>
                        <Col>
                            <Card className="card-style" style={{ width: "22vw", textAlign: 'center', padding: "0", margin: '0px 7px 0px 33px' , color: '#6D7970' }}>
                                <Text>Planta 1</Text>
                            </Card>

                            <Card className="card-style" style={{ width: "22vw", textAlign: 'center', padding: "0", margin: '0px 7px 0px 33px' , color: '#6D7970' }}>
                                <Text>Planta 2</Text>
                            </Card>

                            <Card className="card-style" style={{ width: "22vw", textAlign: 'center', padding: "0", margin: '0px 7px 0px 33px' , color: '#6D7970' }}>
                                <Text>Planta 3</Text>
                            </Card>
                        </Col>
                    </Row>
                </Row>
            </div>
        </Content>


    </Layout >
)};


export default PaginaInicial;

