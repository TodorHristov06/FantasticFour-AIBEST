import styled from 'styled-components';

const Overlay = styled.div`
  background: #825DF4;
  background: -webkit-linear-gradient(to right, #825DF4, #acc4e6);
  background: linear-gradient(to bottom, #acc4e6, #825DF4);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 40px;
  text-align: left;
`;

export default Overlay;
