import { FormEvent } from 'react';
import { useState } from 'react';

export default function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    console.log('Controlled form', Object.fromEntries(formData.entries()));
  }
  return (
    <form id="form" onSubmit={handleSubmit}>
      <label>
        Username{' '}
        <input
          type="text"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}></input>{' '}
      </label>
      <label>
        Password{' '}
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}></input>{' '}
      </label>
      <button name="submit-button" value="submitted" type="submit">
        Submit
      </button>
    </form>
  );
}
