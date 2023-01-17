import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {
  const splitLetters = 'About me'.split('');
  console.log(splitLetters, 'here is split letters');

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters strArray={splitLetters} idx={15} />
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non optio
          mollitia magni nostrum, voluptatibus veniam doloribus recusandae quod
          omnis temporibus id molestias laudantium, eos, ab odio at nulla totam
          officiis ducimus? Labore laboriosam doloremque quas recusandae nisi
          aperiam itaque velit incidunt perferendis facilis harum accusamus
          aspernatur, cupiditate est laborum modi?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non optio
          mollitia magni nostrum, voluptatibus veniam doloribus recusandae quod
          omnis temporibus id molestias laudantium, eos, ab odio at nulla totam
          officiis ducimus? Labore laboriosam doloremque quas recusandae nisi
          aperiam itaque velit incidunt perferendis facilis harum accusamus
          aspernatur, cupiditate est laborum modi?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non optio
          mollitia magni nostrum, voluptatibus veniam doloribus recusandae quod
          omnis temporibus id molestias laudantium, eos, ab odio at nulla totam
          officiis ducimus? Labore laboriosam doloremque quas recusandae nisi
          aperiam itaque velit incidunt perferendis facilis harum accusamus
          aspernatur, cupiditate est laborum modi?
        </p>
      </div>
    </div>
  );
};

export default About;
