import { getStatusBarHeight } from "react-native-status-bar-height";
import styled from "styled-components/native";
import colors from "../../utils/colors";

export const Header = styled.View`
    width: 100%;

    align-items: center;
    justify-content: space-between;

    flex-direction: row;

    padding: ${getStatusBarHeight() + 16}px 24px 16px;

    background-color: rgba(0, 0, 0, 0.1);
`;