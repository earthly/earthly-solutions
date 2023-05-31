//        pub static QUOTES: [&str; 5] = [
//            "You live and learn. At any rate, you live.",
//            "This is another random quote from Earthly",
//            "Progress is a nice word. But change is its motivator and change has its enemies.",
//            "It's the opinion of some that crops could be grown on the moon. Which raises the fear that it may not be long before we're paying somebody not to.",
//            "Perfect as the wing of a bird may be, it will never enable the bird to fly if unsupported by the air. Facts are the air of science. Without them a man of science can never rise.",
//        ];
//
//

package main

import (
	"bufio"
	"math/rand"
	"os"
)

func Quotes() ([]string, error) {
	f, err := os.Open("quotes.txt")
	if err != nil {
		return nil, err
	}
	defer f.Close()
	scanner := bufio.NewScanner(f)

	var qs = make([]string, 0)

	for scanner.Scan() {
		qs = append(qs, scanner.Text())
	}
	return qs, nil
}

//	return []string{
//		"You live and learn. At any rate, you live.",
//		"This is another random quote from Earthly",
//		"Progress is a nice word. But change is its motivator and change has its enemies.",
//		"It's the opinion of some that crops could be grown on the moon. Which raises the fear that it may not be long before we're paying somebody not to.",
//		"Perfect as the wing of a bird may be, it will never enable the bird to fly if unsupported by the air. Facts are the air of science. Without them a man of science can never rise.",
//	}
//

func RandomQuote(quotes []string) string {
	return quotes[rand.Intn(len(quotes))]
}
