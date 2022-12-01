import { useState } from 'react';

const Button = () => {
  const [btnText, setBtnText] = useState<string>('Test Button');
  return (
    <>
      <button
        onClick={() => {
          setBtnText('New Text');
        }}
      >
        {btnText}
      </button>
    </>
  );
};

export default Button;
