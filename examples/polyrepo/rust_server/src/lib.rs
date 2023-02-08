pub mod quote_generator {
    use rand::Rng;

        pub static QUOTES: [&str; 5] = [
            "You live and learn. At any rate, you live.",
            "This is another random quote from Earthly", 
            "Progress is a nice word. But change is its motivator and change has its enemies.",
            "It's the opinion of some that crops could be grown on the moon. Which raises the fear that it may not be long before we're paying somebody not to.",
            "Perfect as the wing of a bird may be, it will never enable the bird to fly if unsupported by the air. Facts are the air of science. Without them a man of science can never rise.",
        ];

    

    // this is a test
    pub fn random_quote() -> &'static str {
        let num = rand::thread_rng().gen_range(0..QUOTES.len());
        QUOTES[num]
    }
    pub fn hello() -> &'static str {
        "hello2"
    }
}


#[cfg(test)]
mod tests {
    use crate::quote_generator::{QUOTES, random_quote};

    #[test]
    fn rand_quote() {
        assert!(QUOTES.contains(&random_quote()));
        //assert!(QUOTES.contains(&"string that doesn't exist"));

    }

}
