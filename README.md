# Pun-tastic Burgers

Pun-tastic Burgers is a front-end web application that showcases a collection of quirky burger names and allows users to create their own burger of the day. The application is built using HTML, CSS, and JavaScript.

## Features

- Display of a "Burger of the Day" on a chalkboard-styled container, fetched from an external API.
- User can create their own burger of the day using a form. The form validates user input and prevents submission if fields are empty.
- Meet the Belchers section with images of the Belcher family characters. Hovering over each character's image displays additional information such as name, age, occupation, and voice actor, retrieved from the API.
- Responsive design using CSS Grid and media queries to ensure optimal viewing experience across different screen sizes.
- New Burger of the Day button fetches and displays a random burger from the API, providing fresh content each time the button is clicked.
- Contact page with social links for GitHub, LinkedIn, and email, allowing users to connect with the developer.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:

2. Open the `index.html` file in your preferred web browser.

## API Integration

The application integrates with the Bob's Burgers API to fetch data for the "Burger of the Day" and character information. The following API endpoints are used:

- `GET https://bobsburgers-api.herokuapp.com/v2/burgerOfTheDay/${randomId}` - Fetches the burger of the day by its ID.
- `GET https://bobsburgers-api.herokuapp.com/v2/characters/${characterId}` - Fetches character data by their ID.

## Contributing

Contributions are welcome! If you find any bugs, have suggestions for improvements, or would like to contribute new features, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

[Pun-tastic Burgers](https://oscarq5.github.io/Front-End-Project/)