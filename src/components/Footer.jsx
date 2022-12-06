import React from 'react'
import './CSS/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      {/* <div className="line">
        <hr />
        <hr />
      </div> */}

      <div className='sites'>
        <h5>OTHER SITES</h5>
        <ul>
          <li><a
          href="https://groups.kenya-airways.com/"
          target="_blank"
          rel="noopener noreferrer"
            >GROUP BOOKING</a></li>
          <li><a
            href="https://www.kenya-airways.com/en-ke/"
            target="_blank"
            rel="noopener noreferrer"
          >EUROPE FLIGHTS</a></li>
          <li><a
            href="https://www.kqcargo.com/#1"
            target="_blank"
            rel="noopener noreferrer"
          >KQ CARGO</a></li>
          <li><a
            href="https://kenya-airways.optiontown.com/"
            target="_blank"
            rel="noopener noreferrer"
          >FLIGHT PASS</a></li>
          <li><a
            href="https://www.kenya-airways.com/en-ae/"
            target="_blank"
            rel="noopener noreferrer"
          >MIDDLE EAST FLIGHTS</a></li>
          <li><a
            href="https://groundhandling.kenya-airways.com/Home/"
            target="_blank"
            rel="noopener noreferrer"
          >KQ GROUND SERVICES</a></li>
          <li><a
            href="https://www.kenya-airways.com/en-ke/"
            target="_blank"
            rel="noopener noreferrer"
          >AFRICA FLIGHTS</a></li>
        </ul>
      </div>

      <div className='services'>
        <h5>SERVICES AND SUPPORT</h5>
        <ul>
        <li><a
            href="https://ears.health.go.ke/airline_registration/"
            target="_blank"
            rel="noopener noreferrer"
          >International Travelers Health Surveillance Form</a></li>
         <li><a
            href="https://kenya-airways.custhelp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >Feedback</a></li>
         <li><a
            href="https://www.kenya-airways.com/about-us/kq-partners/en/"
            target="_blank"
            rel="noopener noreferrer"
          >Our partner Airlines</a></li>
         <li><a
            href="https://www.kenya-airways.com/uploadedFiles/Content/Footer_Content/The%20Pride%20of%20Africa%20Service%20Charter%20.pdf"
            target="_blank"
            rel="noopener noreferrer"
            >Customer Service Charter</a></li>
        <li><a
            href="https://www.kenya-airways.com/privacy-policy/en/"
            target="_blank"
            rel="noopener noreferrer"
          >Privacy Policy</a></li>
        </ul>
      </div>

      <div>
        <h5>FOLLOW US ON</h5>
        <div className="icons">
          <a href="https://www.facebook.com/ronald.beloved/" target="_blank" rel="noreferrer" >
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt=""/>
          </a>

          <a href="https://www.linkedin.com/in/ronald-kipchirchir-034983246/" target="_blank" rel="noreferrer" >
            <img src="https://cdn-icons-png.flaticon.com/128/4494/4494497.png" alt=""/>
          </a>

          <a  href="https://www.instagram.com/ronaah_254/" target="_blank" rel="noreferrer" >
            <img src="https://cdn-icons-png.flaticon.com/128/4494/4494488.png" alt=""/>
          </a>

          <a  href="https://www.youtube.com/channel/UCoO82bia4WfA19iLEVUX2iw" target="_blank" rel="noreferrer" >
            <img src="https://cdn-icons-png.flaticon.com/128/220/220211.png" alt=""/>
          </a>
        </div>
      </div>

      <div class="mapouter">
					<div class="gmap_canvas">
						<iframe
							width="600"
							height="500"
							id="gmap_canvas"
							src="https://maps.google.com/maps?q=Ngong%20Lane%20Plaza,%20Ngong%20Lane,%20Nairobi,Kenya&t=&z=13&ie=UTF8&iwloc=&output=embed"
							frameborder="0"
							title='0'
							scrolling="no"
							marginheight="0"
							marginwidth="0"
						></iframe>
						<a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/">
							divi discount
						</a>
						<a href="https://www.embedgooglemap.net">embed maps on website</a>
					</div>
				</div>
    </div>
    
    
  )
}

export default Footer;