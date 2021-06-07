import './index.css';
const SearchBox = (props) => {

	return (
		<input type='search'
			placeholder={props.placeholder}
			onChange={props.handleChange}
		/>
	)
}

export default SearchBox;