import "./App.css";
import Header from "./Header";
import Livres from "./Livres";

function App() {
	const data = [
		{
			titre: "Reminders of Him: A Novel",
			prix: 90.97,
			url: "https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL210_SR195,210_.jpg",
		},
		{
			titre: "Ugly Love: A Novel",
			prix: 102.5,
			url: "https://images-na.ssl-images-amazon.com/images/I/61QR7qoEYVL._AC_UL210_SR195,210_.jpg",
		},
		{
			titre: "Where the Crawdads Sing",
			prix: 78.96,
			url: "https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL210_SR195,210_.jpg",
		},
		{
			titre: "November 9: A Novel",
			prix: 123.55,
			url: "https://images-na.ssl-images-amazon.com/images/I/61xkvfPVupL._AC_UL210_SR195,210_.jpg",
		},
		{
			titre: "The Return of the Gods",
			prix: 27.9,
			url: "https://images-na.ssl-images-amazon.com/images/I/61uiYWcEQGL._AC_UL210_SR195,210_.jpg",
		},
		{
			titre: "I Love You to the Moon and Back",
			prix: 55.85,
			url: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL210_SR195,210_.jpg",
		},
	];

	return (
		<div className="App">
			<Header />
			<Livres array={data} />
		</div>
	);
}

export default App;
