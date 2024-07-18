import styled from 'styled-components';

const ValidationItem = styled.div`
    color: ${({ isValid }) => (isValid ? 'green' : 'red')};
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;
`;

export default ValidationItem;