import styled from "styled-components";
import { string } from "prop-types";

function Quotes({ quote, speaker }) {
  return (
    <Wrapper>
      <Quote>{quote}</Quote>
      <Speaker>{speaker}</Speaker>
      <button>Change quote</button>
    </Wrapper>
  );
}

export default Quotes;

Quotes.propTypes = {
  quote: string,
  speaker: string,
};

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Quote = styled.p`
  font-size: 2em;
  margin: 0;
`;

const Speaker = styled(Quote)`
  text-align: right;
  margin-bottom: 3.5rem;
`;
