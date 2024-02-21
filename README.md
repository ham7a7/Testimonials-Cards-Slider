<div style="max-width: 800px; margin: 0 auto; padding: 20px;">
  <h1>Testimonials Cards Slider for React</h1>
<!--   <p><img src="demo.gif" alt="Testimonials Cards Slider Demo" style="width: 100%; max-width: 600px; margin: 20px auto; border: 1px solid #ccc; border-radius: 5px; overflow: hidden;"></p> -->

  <p>This project is a simple and elegant Testimonials Cards Slider component built using React. It provides an intuitive way to display testimonials or reviews in a slider format, enhancing the user experience on websites or applications.</p>

  <h2>Features</h2>
  <ul>
    <li><strong>Responsive Design:</strong> The Testimonials Cards Slider is designed to adapt seamlessly to various screen sizes, ensuring optimal viewing experience across devices.</li>
    <li><strong>Customizable:</strong> Easily customize the appearance and content of each testimonial card to match your branding or design preferences.</li>
    <li><strong>Smooth Animation:</strong> Delivers a smooth sliding animation effect between testimonial cards, enhancing the visual appeal and engagement.</li>
    <li><strong>Easy Integration:</strong> Simple integration with React applications, allowing developers to quickly incorporate the Testimonials Cards Slider into their projects.</li>
  </ul>
  
  <h2>Usage</h2>
  <div style="background-color: #fff; border: 1px solid #ccc; border-radius: 5px; padding: 20px; margin-top: 20px;">
    <pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto;">
      <code>

        import TestimonialsSlider from 'components/TestimonialsSlider';
        import photo from './photo.png'

        const testimonialData = [
          {
            id: 1,
            name: 'John Doe',
            testimonial: ''Lorem ipsum dolor sit amet, consectetur adipiscing elit.'',
            text: 'ABC Inc',
            photo: photo,
          },
          // Add more testimonial data as needed
        ];

        function App() {
          return (
            <div className="App">
              <TestimonialsSlider testimonialsData={testimonialData} />
            </div>
          );
        }

        export default App;
      </code>
    </pre>
  </div>
