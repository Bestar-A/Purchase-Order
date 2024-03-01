import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'react-bootstrap'

export const metadata = {
  title: "Purchase Order",
  description: "This is purchase order based on Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo@x1.png" />
      </head>
      <body>
        <Row className='vh-100 w-100 gap-0 m-0'>
          <Col sm='auto' className="bg-success">
            This is Sidebar Content
          </Col>
          <Col className="p-0">
            <div className='bg-warning'>This is Header content</div>
            {children}
          </Col>
        </Row>
      </body>
    </html>
  );
}
