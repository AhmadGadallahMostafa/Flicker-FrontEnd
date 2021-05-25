import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const FAQ = () => {
	return (  
		<div>
			<img src = "https://combo.staticflickr.com/ap/build/images/prints/prints-mid-page-hero.jpg" alt = "Photos" className="FAQ-image"></img>
			<Container className="text-container-info">
			<h2>FAQ</h2>
				<Row className="text-container-row">
					<Col><h3 className="print-title">Who can print my photos?</h3><br /><p className="print-text">Only you can print your photos through Flickr. Visitors to your account will not see the option to buy prints of your photos.</p></Col>
					<Col><h3 className="print-title">Where can I make a photo book?</h3><br /><p className="print-text">We partner with <a href = "https://www.blurb.com/partner/flickr">Blurb</a> and <a href = "https://chatbooks.com">Chatbooks</a> for both hard-cover and soft-cover photo books. Your Flickr photo stream and albums are seamlessly integrated into the book-making process. Check out photo books.</p></Col>
					<Col><h3 className="print-title">What if something is wrong with my order?</h3><br /><p className="print-text">If you're ever unhappy with your prints or wall art, Flickr will make it right. Simply send us an email within 30 days of receiving your order and we'll help you out. If you have any issues, <a href = "https://help.flickr.com/contact">reach out to our Support Heroes</a>.</p></Col>
				</Row>
				<Row>
					<Col><h3 className="print-title">Who makes the prints and wall art?</h3><br /><p className="print-text">Flickr Prints benefit from years of experience that SmugMug has in printing beautiful imagery. Depending on your location, your prints will come from Bay Photo, White House Custom Colour, or Loxley Colour. All the labs we use have excellent color reproduction and fantastic reputations.</p></Col>
					<Col><h3 className="print-title">How long does shipping take?</h3><br /><p className="print-text">We ship all over the world, including more than 160 countries. No matter where you are, we'll get your prints to you as fast as we can. Expedited shipping is available to get your prints even faster.</p></Col>
					<Col><h3 className="print-title">More questions?</h3><br /><p className="print-text">Please visit the <a href = "https://help.flickr.com/">Flickr Help Center</a> for more information or to connect with a Support Hero.</p></Col>
				</Row>
			</Container>
		</div>
	);
}
 
export default FAQ;