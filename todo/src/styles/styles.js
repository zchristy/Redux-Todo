import styled from 'styled-components';

// ==== Todo Component ====

export const AppContainer = styled.div`
  width: 100%;
  margin: 75px auto;
  text-align: center;

  h1, h4 {
    color: white;
    text-shadow: 4px 2px 7px rgba(0,0,0,0.6);
  }
`;

export const Clear = styled.span`
  margin-left: 10px;
`;

export const Card = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 30%;
  height: auto;
  margin: 0 auto;
  list-style-type: none;
  color: white;
`;

export const Todo = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 0 auto;
  border-bottom: 1px solid white;
  padding: 10px;
  margin: 10px auto;

  &:hover span {
    opacity: 1;
  }

  span{
    cursor: pointer;
    color: white;
    transition: all 0.3s;
    opacity: 0;

    &:hover {
      color: #e74c3c;
    }
  }
`;

export const Text = styled.p`
  margin: 0;
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};

  &:hover {
    cursor: pointer;
  }
`;

export const FormContainer = styled.div`
  width: 30%;
  height: auto;
  margin: 0 auto;
  padding: 10px;
  margin: 10px auto;
`;

export const Form = styled.form`
  width: 100%;
  padding: 0 10px;

  input {
    width: 100%;
    height: auto;
    margin: 0 auto;
    border: none;
    padding: 10px;
    margin: 10px auto;
    background: none;
    outline: none;
    color: white;
    font-size: 1.1rem;
    border-bottom: 1px solid white;
    margin-left: 10px;
  }

  input::placeholder {
    color: white;
    font-size: 1.1rem;

  }
`;
