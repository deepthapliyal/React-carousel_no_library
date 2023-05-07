# React Unsplash Carousel

This is a simple React carousel component that displays random images from the [Unsplash](https://unsplash.com/) API. The component allows users to navigate between images using previous and next buttons.

## Installation

To use the React Unsplash Carousel component in your React project, you can install it using npm or yarn:

```bash
npm install react-unsplash-carousel
```

or

```bash
yarn add react-unsplash-carousel
```

## Usage

To use the React Unsplash Carousel component in your React project, you can import it and use it in your JSX code:

```jsx
import ReactUnsplashCarousel from 'react-unsplash-carousel';

const ACCESS_KEY = 'Your access key here';
const count = 5; // Get 5 random photos

const App = () => {
  return (
    <div className="App">
      <ReactUnsplashCarousel accessKey={ACCESS_KEY} count={count} />
    </div>
  );
};

export default App;
```

In the example above, we're passing the `ACCESS_KEY` and `count` variables as props to the component. The `ACCESS_KEY` variable is a string containing your Unsplash API access key, and the `count` variable is an integer specifying the number of random photos to display in the carousel.

## Props

The `ReactUnsplashCarousel` component accepts the following props:

- `accessKey` (string, required): Your Unsplash API access key.
- `count` (number, required): The number of random photos to display in the carousel.
- `width` (string, optional): The width of the carousel in CSS units (e.g. '100%', '500px', etc.).
- `height` (string, optional): The height of the carousel in CSS units (e.g. '100%', '500px', etc.).
- `showCaptions` (boolean, optional): Whether to show captions for each image in the carousel.
- `captionStyle` (object, optional): An object containing CSS styles to apply to the captions.
- `captionClassName` (string, optional): A string containing additional class names to apply to the captions.
- `autoPlay` (boolean, optional): Whether to automatically advance to the next image at a regular interval.
- `autoPlayInterval` (number, optional): The interval (in milliseconds) at which to automatically advance to the next image.

## Customization

You can customize the appearance and behavior of the React Unsplash Carousel component by passing props to it. For example, you can change the width and height of the carousel, show or hide captions, and enable or disable automatic image advancement.

Here's an example of how you could customize the component:

```jsx
<ReactUnsplashCarousel
  accessKey={ACCESS_KEY}
  count={count}
  width="100%"
  height="400px"
  showCaptions={true}
  captionStyle={{ color: 'white', fontSize: '20px' }}
  captionClassName="carousel-caption"
  autoPlay={true}
  autoPlayInterval={5000}
/>
```

In the example above, we're setting the width and height of the carousel to 100% and 400px, respectively. We're also showing captions for each image, with white text and a font size of 20px, and we're adding a custom class name to the captions. Finally,we're enabling automatic image advancement with an interval of 5 seconds.

## Styling

The React Unsplash Carousel component comes with some default styles, but you can also style it using CSS. The component renders a `div` element with a class of "react-unsplash-carousel", so you can target that class in your CSS to apply styles to the carousel.

Here's an example of how you could style the carousel using CSS:

```css
.react-unsplash-carousel {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}

.react-unsplash-carousel .carousel-item {
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.react-unsplash-carousel .carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  color: white;
  font-size: 20px;
}
```

In the example above, we're using flexbox to make the carousel scrollable horizontally, and we're setting the height of the carousel items to 400px. We're also positioning the captions at the bottom of each image and adding a semi-transparent background to them.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgments

This project was inspired by [react-slideshow-image](https://www.npmjs.com/package/react-slideshow-image). Special thanks to the developers of that project!