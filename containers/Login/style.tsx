import styled from "@emotion/styled";

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	/* background: linear-gradient(
			90deg,
			#104b0b 30.5%,
			#104b0bcb 40%,
			#104b0b9a 50%,
			#00000000 100%
		), */
	background: linear-gradient(
			90deg,
			rgba(16, 75, 11, 1) 24%,
			rgba(23, 64, 24, 1) 46%,
			rgba(26, 60, 29, 0.9) 59%,
			rgba(36, 42, 50, 0.4007352941176471) 100%
		),
		url("assets/images/bg.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;

	@media (max-width: 768px) {
		background: linear-gradient(
				40deg,
				rgba(16, 75, 11, 1) 24%,
				rgba(23, 64, 24, 1) 55%,
				rgba(24, 62, 26, 0.95) 70%,
				rgba(26, 60, 29, 0.8) 81%,
				rgba(36, 42, 50, 0.4007352941176471) 100%
			),
			url("assets/images/bg.jpg");
	}
`;

export const TextField = styled.input`
	background-color: white;
	border: none;
	outline: none;
	border-radius: 10px;
	width: 100%;
	padding: 15px 20px;
`;
