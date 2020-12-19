import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {somarAction, zerarAction} from '../../components/contadorAction';
import {
    Container,
    Name,
    SomarZerarButton,
    RecipeButtonText
} from '../Main/styles';


class Contador extends React.Component{

    static navigationOptions = {
        title: 'Contador',
    };

    _somar() {
        this.props.somarAction(this.props.valorAtual);
    }

    _zerar() {
        this.props.zerarAction();
    }

    render(){
        return (
            <Container>
                <SomarZerarButton onPress={this._somar.bind(this)}>
                    <RecipeButtonText>Somar</RecipeButtonText>
                </SomarZerarButton>
                <SomarZerarButton onPress={this._zerar.bind(this)}>
                    <RecipeButtonText>Zerar</RecipeButtonText>
                </SomarZerarButton>
                <Name>{this.props.valorAtual}</Name>
            </Container>
        )
    }
}

function mapStateToProps(state){
    return {
        valorAtual: state.contadorReducerChave.valorAtual
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({somarAction, zerarAction},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Contador);