import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";


export const Container = styled.View`
flex: 1;
flex-direction: column;
padding: 30px;
background: #fff;
`;

export const TextButton = styled.Text`
color: #FFF;
text-transform: uppercase;
`;

export const Form = styled.View`
flex-direction: row;
padding-bottom: 10px;
border-bottom-width: 1px;
border-color: #eee
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#999',
})`
flex: 1;
height: 40px;
background: #eee;
border-radius: 4;
padding: 0 15px;
border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
justify-content: center;
align-items: center;
background: #7159c1;
border-radius: 4;
margin-left: 10px;
padding: 0 12px;
opacity: ${props => props.loading ? 0.7 : 1}
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
margin-top: 10px
`;

export const Recipe = styled.View`
align-items: center;
margin-top: 15px;
padding: 5px 10px;
border: 1px #979797;
`;

export const Ingredient = styled.View`
align-items: center;
margin-top: 2px;
`;

export const Image = styled.Image`
width: 64px;
height: 64px;
border-radius: 32px;
background: #eee;
`;

export const Name = styled.Text`
font-size: 16px;
color: #565656;
font-weight: bold;
margin-top: 4px;
text-align: center;
`;

export const IngredientName = styled.Text`
font-size: 14px;
color: #565656;
font-weight: bold;
margin-top: 4px;
text-align: center;
`;

export const Description = styled.Text.attrs({
    numberOfLines: 2
})`
font-size: 15px;
line-height: 18px;
color: #565656;
margin-top: 5px;
text-align: center;
`;

export const IngredientDescription = styled.Text.attrs({
    numberOfLines: 2
})`
font-size: 13px;
line-height: 18px;
color: #565656;
margin-top: 5px;
text-align: center;
`;

export const RecipeButton = styled(RectButton)`
margin-top: 10px;
align-self: stretch;
border-radius: 4px;
background: #f48024;
justify-content: center;
align-items: center;
height: 36px;
`;

export const SomarZerarButton = styled(RectButton)`
margin-top: 10px;
align-self: stretch;
border-radius: 4px;
background: #f48024;
justify-content: center;
align-items: center;
height: 36px;
`;

export const RecipeButtonText = styled.Text`
font-size: 14px;
font-weight: bold;
color: #fff;
text-transform: uppercase;
`;
