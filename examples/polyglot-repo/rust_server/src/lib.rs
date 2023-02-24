pub mod quote_generator {
    use rand::Rng;
    use std::{
        fs::File,
        io::{BufRead, BufReader},
    };

    pub fn random_quote(quotes: &Vec<String>) -> &String {
        let num = rand::thread_rng().gen_range(0..quotes.len());
        &quotes[num]
    }
    pub fn hello() -> &'static str {
        "hello2"
    }

    pub fn load_quotes() -> Vec<String> {
        let file = File::open("quotes.txt").expect("Could not find quotes.txt");
        let buf = BufReader::new(file);
        buf.lines()
            .map(|l| l.expect("Could not parse line"))
            .collect()
    }
}

#[cfg(test)]
mod tests {
    use crate::quote_generator::{load_quotes, random_quote};

    #[test]
    fn rand_quote() {
        let qs = load_quotes();
        print!("{:#?}", qs);

        let rnd_quote = random_quote(&qs);

        assert!(qs.contains(rnd_quote));
    }
}
