import LoginPage from '../LoginPage';

export default function LoginPageExample() {
  return (
    <LoginPage
      onLogin={(role, username, password) => {
        console.log('Login attempt:', { role, username, password });
      }}
    />
  );
}
