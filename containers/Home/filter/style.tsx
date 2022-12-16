import styled from "@emotion/styled";

type ButtonCategoryType = {
	active: boolean;
};

export const ButtonCategory = styled.div<ButtonCategoryType>`
	padding: 8px 16px;
	border-radius: 10px;
	color: ${({ active }) => (active ? "black" : "white")};
	background-color: ${({ active }) => (active ? "#FF9500" : "unset")};
	cursor: pointer;

	@media (max-width: 640px) {
		padding: 2px 10px;
		font-size: 12px;
	}
`;
