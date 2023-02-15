package main

import (
	"testing"

	"golang.org/x/exp/slices"
)

func TestRandomQuote(t *testing.T) {
	if !slices.Contains(quotes(), RandomQuote()) {
		t.Error("foo is not in array")
	}
}
