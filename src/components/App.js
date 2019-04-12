import React from 'react';

import Search from './Search';
import CardList from './CardList';
import CardDetail from './CardDetail';
import mtg from '../apis/mtg';

import './App.css';

class App extends React.Component {

    state = { coreList: [], expansionList: [], setList: {}, cardList: [], selectedCard: {} };

    componentDidMount = async () => {
        const response = await mtg.get('/sets');

        const coreList = response.data.data.filter(set => set.set_type === 'core');
        const expansionList = response.data.data.filter(set => set.set_type === 'expansion');
         
        this.setState({
            coreList,
            expansionList,
        }, () => {});
    }

    handleSubmit = async (searchTerm, sets) => {
        this.setState({
            cardList: [],
            selectedCard: {}
        })
        const query = searchTerm + (sets.length > 0 ? (' s:' + sets.join(',')) : '');
        const response = await mtg.get('/cards/search', {
            params: {
                q: query,
                unique: 'prints'
            }
        });
        this.setState({
            cardList: response.data.data
        }, () => {});
    }

    handleClick = (id) => {
        const selectedCard = this.state.cardList.filter(card => card.id === id);
        this.setState({
            selectedCard: selectedCard[0]
        }, () => {});
    }

    render() {
        return (
            <>
            <Search coreList={this.state.coreList} expansionList={this.state.expansionList} handleSubmit={this.handleSubmit} handleSets={this.handleSets} />
            <div className='card-container'>
                <CardList cardList={this.state.cardList} handleClick={this.handleClick} />
                {this.state.selectedCard.name ? <CardDetail selectedCard={this.state.selectedCard} /> : ''}
            </div>
            </>
        );
    };
}

export default App;