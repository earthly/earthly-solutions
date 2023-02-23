package main

import (
	"fmt"
	"testing"

	"golang.org/x/exp/slices"
)

func TestRandomQuote(t *testing.T) {
  quotes, err := Quotes()
  if err != nil {
    t.Error(err)
  }
  fmt.Println(quotes)
	if !slices.Contains(quotes, RandomQuote(quotes)) {
		t.Error("foo is not in array")
	}
}
