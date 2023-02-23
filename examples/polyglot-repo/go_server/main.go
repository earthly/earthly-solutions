package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/sirupsen/logrus"
)





func main() {


  quotes, err := Quotes() 
  if err != nil {
    log.Fatal(err)
  }

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "text/plain; charset=utf-8")
    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.Header().Set("Access-Control-Max-Age", "15")
		fmt.Fprint(w, RandomQuote(quotes))
	})

	logrus.Info("Serving Go server on port 8001")
	http.ListenAndServe(":8001", nil)
}
