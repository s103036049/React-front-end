import React, { useState, useCallback } from 'react';
import Cards from 'react-credit-cards-2';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import 'react-credit-cards-2/dist/es/styles-compiled.css';
// import '../CardForm/CreditCardForm.css';

const PaymentForm = () => {
  // 使用結構賦值來簡化state的使用
  const [{ number, expiry, cvc, name, focus }, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  // 使用useCallback來確保函數不會在每次渲染時重新創建
  const handleInputChange = useCallback((evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleInputFocus = useCallback((evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }, []);

  return (
    <div>
      <Cards
        number={number}
        expiry={expiry}
        cvc={cvc}
        name={name}
        focused={focus}
      />
 <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h3>信用卡信息</h3>
          <Form>
            <Form.Group controlId="formCardNumber">
              <Form.Label>卡號</Form.Label>
              <Form.Control
                type="tel"
                name="number"
                placeholder="卡號"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>姓名</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="姓名"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </Form.Group>
            <Form.Group controlId="formExpiry">
              <Form.Label>有效期限</Form.Label>
              <Form.Control
                type="tel"
                name="expiry"
                placeholder="有效期限"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </Form.Group>
            <Form.Group controlId="formCVC">
              <Form.Label>CVC</Form.Label>
              <Form.Control
                type="tel"
                name="cvc"
                placeholder="CVC"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </Form.Group>
            {/* <Button variant="primary" type="submit">
              提交
            </Button> */}
          </Form>
        </Col>
      </Row>
    </Container>  </div>
  );
};

export default PaymentForm;
