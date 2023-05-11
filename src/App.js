import { useState, useEffect } from "react";
import { fetchQuotes } from "./Services/QuoteService";
import { Header, QuoteContainer, Options, Footer } from "./Components/index";
import { Stack, Container } from "@mui/material";


function App() {    
    const [category, setCategory] = useState("");
    const [count, setCount] = useState(1);
    const [quotes, setQuotes] = useState([]);
    const maxCount = 10;
       
    const loadQuotes = async (category, count) => {
        const quotes = await fetchQuotes(category, count);
        setQuotes(quotes);
    };

    useEffect(() => {
        loadQuotes(category, count);
        console.log("useEffect");
        }, [category, count]);
    
  return (
    <Container maxWidth="sm">
      <Stack spacing={2}>
        <Header />
        <QuoteContainer
          quotes={quotes}
          handleReloadClick={loadQuotes}
        />
        <Options
          category={category}
          setCategory={setCategory}
          count={count}
          setCount={setCount}
          countLimit={maxCount}
        />
        <Footer createdBy={"Dovid Lipson"} />
      </Stack>
    </Container>
  );
}

export default App;
