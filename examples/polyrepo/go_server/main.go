package main

import (
	"fmt"
	"net/http"

	"github.com/sirupsen/logrus"
)





func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    fmt.Println(RandomQuote())
		fmt.Fprint(w, RandomQuote())
	})

	logrus.Info("Serving Go server on poirt 8001")
	http.ListenAndServe(":8001", nil)
}
