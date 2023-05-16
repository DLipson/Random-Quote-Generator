import { useState, useEffect } from "react";
import { fetchQuotes } from "./Services/QuoteService";
import { Header, QuoteContainer, Options, Footer } from "./Components";
import { Stack, Container } from "@mui/material";

function App() {    
    const [category, setCategory] = useState("");
    const [count, setCount] = useState(1);
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(false);
    const maxCount = 10;
    const sourceCodeUrl = "https://github.com/DLipson/random-quote-generator";
       
    const loadQuotes = async (category, count) => {
        setLoading(true);
        const quotes = await fetchQuotes(category, count);
        setQuotes(quotes);
        setLoading(false);
    };

    useEffect(() => {
        loadQuotes(category, count);
        }, [category, count]);
    
  return (
    <Container maxWidth="sm">
      <Stack spacing={2}>
        <Header />
        <Options
          category={category}
          setCategory={setCategory}
          count={count}
          setCount={setCount}
          countLimit={maxCount}
        />
        <QuoteContainer
          quotes={quotes}
          loading={loading}
          handleReloadClick={() => loadQuotes(category, count)}
          count={count}
        />
        <Footer createdBy={"Dovid Lipson"} source={sourceCodeUrl} />
      </Stack>
    </Container>
  );
}

export default App;
