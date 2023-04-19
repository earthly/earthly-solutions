package main

import (
	"fmt"
	"net/http"

	"github.com/sirupsen/logrus"
)

func main() {

	quotes, err := Quotes()
	if err != nil {
		logrus.Fatal(err)
	}

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/plain; charset=utf-8")
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Max-Age", "15")
		quote := RandomQuote(quotes)

		logrus.Info(quote)
		// fmt.Fprint(w, quote)

    	fmt.Fprint(w, "Hello from Earthly CI!")

	})

	http.ListenAndServe(":8001", nil)
}
