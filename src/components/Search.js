import React from 'react';
import './Search.css';

class Search extends React.Component {

    state = { searchTerm: '', chosenSets: [] }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state.searchTerm, this.state.chosenSets);
    }

    handleSelectChange = (e) => {
        const values = [...e.target.selectedOptions].map(opt => opt.value);
        this.setState({
            chosenSets: values
        }, () => {}); 
    }

    handleTextChange = (e) => {
        this.setState({ searchTerm: e.target.value 
        }, () => {});
    }

    render() {
        const coreListRendered = this.props.coreList.map((set) => {
            return <option key={set.code} value={set.code}>{set.name}</option>
        })
        const expansionListRendered = this.props.expansionList.map((set) => {
            return <option key={set.code} value={set.code}>{set.name}</option>
        })
        return (
            <div className='search-bar'>
                <form className='search-form' onSubmit={this.handleSubmit}>
                    <input className='search-text' type='text' name='cardSearch' value={this.state.searchTerm} onChange={this.handleTextChange} placeholder='Search for a card name...' />
                        <select className='search-list' size='2' multiple={true} onChange={this.handleSelectChange}>
                        <option disabled>Core Sets</option>
                        <option disabled></option>
                            {coreListRendered}
                        <option disabled></option>
                        <option disabled>Expansion Sets:</option>
                        <option disabled></option>
                            {expansionListRendered}
                        </select>
                    <input className='search-button' type='submit' value='Search for a card' />
                </form>
            </div>
        );
    }
};

export default Search;
