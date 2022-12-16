import styled from "@emotion/styled";

export const Container = styled.div`
	position: fixed;
	top: 0;
	background-color: #104b0b;
	left: 0;
	right: 0;
	font-weight: 900;
	font-size: 32px;
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 100;
`;

export const Sidebar = styled.div`
	width: 300px;
	position: fixed;
	top: 0;
	bottom: 0;
	background-color: #1c7015;
	right: 0;
	z-index: 1000;
	transition: all 0.25s;
	box-shadow: 1px 1px 5px #111111;
`;
