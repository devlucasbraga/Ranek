import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

body{
  margin:2rem;
}
img {
  max-width: 100%;
  border-radius: .5rem;
}
a{
  text-decoration: none;
  color: black;
}
h1{
  font-size: 1.4rem;
}
.App{
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  margin: 0 auto;
  min-height: calc(100vh + 10rem);
  
    .content{
    flex: 1;
    }

}

.animeLeft{
  transform: translateX(-20px);
  opacity: 0;
  animation: animeLeft .3s forwards;
}

@keyframes animeLeft {
  to {
    transform: initial;
    opacity: initial;
  }
}

.loading{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 10px solid #ccc;
  border-right-color: transparent;
  animation: loading 1s infinite;
}

@keyframes loading {
  to {
    transform: rotate(360deg);
  }
}
`;
