import styled from "styled-components/native";

import colors from "../../utils/colors";

export const BookCard = styled.ImageBackground`
    flex: 1;
    padding: 12px;
    width: 170px;
    height: 260px;
    border-radius: 16px;
    margin-right: 8px;
    justify-content: flex-end;
    shadow-color: #000;
    shadow-offset: { width: 0; height: 1 };
    shadow-opacity: 0.8;
    shadow-radius: 16px;
    elevation: 1;
`;

export const BookAuthor = styled.Text`
    color: ${colors.white};

    font-size: 12px;
    font-weight: 500;
`;

export const BookTitle = styled.Text`
    color: ${colors.white};

    font-size: 20px;
    font-weight: bold;
`;