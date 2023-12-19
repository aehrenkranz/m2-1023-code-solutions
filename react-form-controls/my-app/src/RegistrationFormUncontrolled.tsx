import { FormEvent } from 'react';

export default function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    console.log('Uncontrolled form', Object.fromEntries(formData.entries()));
  }
  return (
    <form id="form" onSubmit={handleSubmit}>
      <label>
        Username <input type="text" name="username"></input>{' '}
      </label>
      <label>
        Password <input type="password" name="password"></input>{' '}
      </label>
      <button name="submit-button" value="submitted" type="submit">
        Submit
      </button>
    </form>
  );
}
