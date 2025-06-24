import Form from 'react-bootstrap/Form';

function Formulario() {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ marginBottom: "20px" }} >
          <Form.Label style={{ display: "flex" }}>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{ marginBottom: "20px" }}>
          <Form.Label style={{ display: "flex" }}>Sugestão</Form.Label>
          <Form.Control as="textarea" placeholder="Deixe aqui sua sugestão" rows={3} />
        </Form.Group>
    </Form>
  );
}

export default Formulario;