package main

import (
	"fmt"
	"net/http"

	"github.com/sirupsen/logrus"
)





func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "text/plain; charset=utf-8")
    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.Header().Set("Access-Control-Max-Age", "15")
		fmt.Fprint(w, RandomQuote())
	})

	logrus.Info("Serving Go server on poirt 8001")
	http.ListenAndServe(":8001", nil)
}
