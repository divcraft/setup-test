import React, { useEffect, useState } from 'react';

export default function App() {
  const [api, setApi] = useState('');
  const [content, setContent] = useState('');
  const [test, setTest] = useState('');
  const [dataUpdateFlague, setDataUpdateFlague] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setContent(value);
  };
  const handleSubmit = (e) => {
    if (!content) return;
    e.preventDefault();
    fetch('/api/add-test', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    });
    setContent('');
    setDataUpdateFlague(!dataUpdateFlague);
  };

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then(({ message }) => setApi(message))
      .catch((err) => console.log('err:', err));
  }, []);
  useEffect(() => {
    fetch('/api/show-test')
      .then((response) => response.json())
      .then((data) => setTest(data));
  }, [dataUpdateFlague]);
  return (
    <>
      <h1>Hello world!</h1>
      <div>{api}</div>
      <form action="get">
        <input type="text" value={content} onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          Wyślij
        </button>
      </form>
      <ul>
        {test &&
          // eslint-disable-next-line no-shadow
          test.map(({ _id, content }) => <li key={_id}>{content}</li>)}
      </ul>
    </>
  );
}
