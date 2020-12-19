import React, {Component} from 'react';
import {
    Container,
    Description,
    Ingredient,
    IngredientDescription,
    IngredientName,
    List,
    Name,
    Recipe,
    RecipeButton,
    RecipeButtonText
} from './styles';
import api from '../../services/api'

export default class Main extends Component {
    static navigationOptions = {
        title: 'Receitas',
    };

    handleNavigateContador = () => {
        const { navigation } = this.props;
        navigation.navigate('Contador');
    };

    static initialState = {};

    state = {
        recipe: [],
    };

    async componentDidMount() {
        const { recipe } = this.state;

        const response = await api.get(`/recipe/4`);
        var data = null;

        console.log("response \n" + response);

        data = response.data[0];
        //
        // data = {
        //     _id: response.data[0].id,
        //     username: response.data[0].username,
        //     recipe_title: response.data[0].recipe_title,
        //     recipe_description: response.data[0].recipe_description,
        //     recipe_ingredients: response.data[0].recipe_ingredients,
        // };
        console.log("data: \n" + data);

        this.setState({
            recipe: [...recipe, data],
        });

    }

    componentDidUpdate(_, prevState) {

    }

    handleNavigate = (recipe) => {
        const { navigation } = this.props;
        navigation.navigate('User', { recipe });
    };

    render() {
        const { recipe } = this.state;

        return (
            <Container>

                <List
                    data={recipe}
                    keyExtractor={recipe => recipe._id}
                    renderItem={({ item }) => (
                        <Recipe>
                            <Name>{item.recipe_title}</Name>
                            <Description>{item.recipe_description}</Description>
                            <List
                                data={item.recipe_ingredients}
                                keyExtractor={recipe => recipe._id}
                                renderItem={({ item }) => (
                                    <Ingredient>
                                        <IngredientName>Ingredientes</IngredientName>
                                        <IngredientDescription>{item.ingredient_name}</IngredientDescription>
                                    </Ingredient>
                                )}
                            />
                            <RecipeButton onPress={() => this.handleNavigateContador()}>
                                <RecipeButtonText>Ver Receita</RecipeButtonText>
                            </RecipeButton>
                        </Recipe>
                    )}
                />
                <RecipeButton onPress={() => this.handleNavigateContador()}>
                    <RecipeButtonText>Ver Contador</RecipeButtonText>
                </RecipeButton>
            </Container>
        );
    }

}