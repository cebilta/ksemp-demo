import React from 'react';
import { Container } from 'react-bootstrap';
import './News.css'

const paragraphs = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel erat nec urna sagittis semper. Morbi eget ipsum ut quam fringilla faucibus. Praesent interdum, ex nec bibendum faucibus, arcu tellus laoreet lorem, id ultrices quam turpis at sapien. Aliquam erat volutpat.',
  'Sed bibendum magna eget eros rutrum, eu tincidunt sapien fringilla. Suspendisse potenti. Pellentesque efficitur tortor in justo ultricies sagittis. Etiam congue posuere ligula, at bibendum velit consectetur ac. Donec tincidunt gravida mauris, eu dapibus lorem aliquam quis.',
  'Duis dignissim euismod eros, id volutpat nisi tincidunt eget. Nam non mi felis. Duis venenatis feugiat aliquam. Fusce sollicitudin nibh ac orci ultrices finibus. Sed non mi sapien. Vestibulum feugiat mauris nec enim malesuada, sit amet lacinia mauris imperdiet. Vivamus in diam euismod, lobortis diam vitae, pharetra dolor. Sed bibendum euismod odio, id luctus magna suscipit in.',
  'Pellentesque tincidunt tellus sit amet lacus vestibulum, vel interdum elit tincidunt. Integer ultricies, orci sit amet tristique consectetur, nisl lacus fringilla orci, ac imperdiet nibh turpis vel dui. Suspendisse potenti. Sed hendrerit congue diam, nec bibendum justo efficitur vel. Fusce iaculis volutpat eros, a convallis justo suscipit nec. Sed nec posuere eros. Sed vitae erat non augue euismod faucibus.',
  'Aliquam et sollicitudin sapien. Donec eu massa et nulla scelerisque dapibus eu vel ex. Vivamus dictum libero quis congue imperdiet. Fusce ac enim vel mi malesuada laoreet vel quis sapien. Fusce vestibulum nulla in ex dictum, vel euismod ante luctus. Donec sagittis sodales neque, eu bibendum libero blandit id. Proin interdum scelerisque sem sit amet viverra. Integer vel dui lacinia, consequat dolor vitae, molestie magna.',
];

export default function News(){
  return (
    <Container className='newsfeed_container'>
      {paragraphs.map((paragraph, index) => (
        <div key={index}>
          <p>{paragraph}</p>
          {index < paragraphs.length - 1 && <hr />}
        </div>
      ))}
    </Container>
  );
};