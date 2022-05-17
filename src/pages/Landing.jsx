import Header from "../components/shared/Header";
import "../styles/Landing.css";

export default function Landing() {
	return (
		<div className="landing-page">
			<Header />
			<div className="story-cards">
				<div className="story-card hero-card">
					<div className="story-card-background">
						<div className="img-wrapper">
							<img
								src="https://assets.nflxext.com/ffe/siteui/vlv3/ebff1e0f-5704-423f-b4c6-94914dabe25b/ef4124a3-79cc-43d1-bc9e-0ad97609da61/SE-en-20220509-popsignuptwoweeks-perspective_alpha_website_large.jpg"
								alt=""
							/>
						</div>
					</div>
					<div className="story-card-text">
						<h1 className="story-card-title" data-uia="hero-title">
							Unlimited films, TV programmes and more.
						</h1>
						<h2 className="story-card-subtitle" data-uia="our-story-card-subtitle">
							Watch anywhere. Cancel at any time.
						</h2>
						<form className="email-form">
							<h3 className="email-form-title">
								Ready to watch? Enter your email to create or restart your
								membership.
							</h3>
							<div className="email-form-lockup">
								<ul className="simpleForm ">
									<li className="nfFormSpace field-email">
										<div className="nfInput nfInputResponsive">
											<div className="nfInputPlacement">
												{/* <label
													className="input_id"
													placeholder="Email address">
													<label
														for="id_email_hero_fuji"
														className="placeLabel">
														Email address
													</label> */}
												<input
													type="email"
													name="email"
													placeholder="Email adress"
													className="nfTextField hasText"
													id="id_email_hero_fuji"
													tabindex="0"
													autocomplete="email"
													maxlength="50"
													minlength="5"
												/>
												{/* </label> */}
											</div>
										</div>
									</li>
								</ul>
								<div className="story-cta-container">
									<button
										className="btn btn-red "
										type="submit"
										autocomplete="off"
										tabindex="0"
										role="link">
										<span id="" className="cta-btn-txt">
											Get Started
										</span>
										<span id="" className="chevron-right-arrow"></span>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
