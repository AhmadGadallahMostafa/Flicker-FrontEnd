import './index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const GridText = () => {
	return (  
		<div>
			<br /><br />
			<Container className="text-container-info">
				<Row className="text-container-row">
					<Col><h3 className="print-title">Metal prints</h3><br /><p className="print-text">Metal prints deliver unparalleled color and vibrance to produce a depth and clarity unlike any other photographic wall art. If you want a print as bold as your most epic photos, look no further than metal prints.</p></Col>
					<Col><h3 className="print-title">Paper prints</h3><br /><p className="print-text">Paper prints are a time-honored way to show off and share your favorite photos. From stacks of 4x6s to frameable statement pieces, you'll be able to find the perfect size and paper finish for any photo.</p></Col>
					<Col><h3 className="print-title">Canvas prints</h3><br /><p className="print-text">Add a little class to your home, office, or whatever other space needs a classic canvas print. With shapes and sizes perfect for wherever you want to hang your photos, your images will look outstanding.</p></Col>
				</Row>
			</Container>
			<br /><br />
		</div>
	);
}
 
export default GridText;