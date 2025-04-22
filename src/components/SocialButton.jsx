const SocialButton = ({ title, buttonColor, link }) => {
	return (
		<a className={`btn btn-${buttonColor} btn-outline`} href={link} target="_blank">
			{title}
		</a>
	);
};

export default SocialButton;
