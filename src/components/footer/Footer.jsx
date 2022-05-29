//project files
import social from "../../data/social.json";
import "../../styles/Footer.css";

export default function Footer() {
	return (
		<div className="footer">
			<div className="social-links">
				<div className="social-icon-group">
					{social.map((item, index) => (
						<div className="social-icon" key={index}>
							<a href={item.socialURL}>
								<img src={item.imageURL} alt={item.title} />
							</a>
						</div>
					))}
				</div>
			</div>
			<div className="copyright">
				<span>© 1997-2022 haiweiliu@icloud.com, Inc.</span>
			</div>
		</div>
	);
}
