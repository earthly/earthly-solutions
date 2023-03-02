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
		fmt.Fprint(w, RandomQuote(quotes))

		//logrus.Info(RandomQuote(quotes))
		//fmt.Fprint(w, "Hello again")
	})

	http.ListenAndServe(":8001", nil)
}
