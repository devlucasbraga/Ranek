import styled from "styled-components";

export const Nav = styled.nav`
  margin-bottom: 2rem;
  ul {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin-right: 1rem;

      .link {
        display: block;
        text-decoration: none;
        font-size: 1.2rem;
        font-family: Arial, Helvetica, sans-serif;
        color: black;
        background: #eee;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        &:hover {
          background: #ddd;
        }
        &.active {
          background: #ddd;
        }
      }
    }
  }
`;
