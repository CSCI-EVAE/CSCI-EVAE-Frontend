import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from '../components/LoginForm';
import { login as mockLogin } from '../services/authService';

jest.mock('../services/authService');

describe('LoginForm', () => {
  it('should render LoginForm correctly', async () => {
    const onLoginSuccess = jest.fn(); 
    const { getByLabelText, getByText } = render(<LoginForm onLoginSuccess={onLoginSuccess} />);

  });

  it('should display error message on failed login', async () => {
    const errorMessage = 'Invalid credentials';
    (mockLogin as jest.Mock).mockRejectedValueOnce({ response: { data: { message: errorMessage } } });

    const onLoginSuccess = jest.fn(); 
    const { getByText, getByLabelText } = render(<LoginForm onLoginSuccess={onLoginSuccess} />);
    const usernameInput = getByLabelText('Nom d\'utilisateur');
    const passwordInput = getByLabelText('Mot de Passe');
    const submitButton = getByText('Se Connecter');

    fireEvent.change(usernameInput, { target: { value: 'username' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledTimes(1);
      expect(mockLogin).toHaveBeenCalledWith({ username: 'username', password: 'password' });
      expect(getByText(errorMessage)).toBeInTheDocument();
    });
  });

});
